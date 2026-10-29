-- Mini MBA Canvas — schema + row-level security
-- Run once in Supabase → SQL Editor (or `supabase db push`).

-- ───────────── Groups & profiles ─────────────
create table public.groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  invite_code text not null unique default upper(substr(md5(random()::text || clock_timestamp()::text), 1, 8)),
  owner_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  group_id uuid references public.groups(id) on delete set null,
  start_date date not null default '2026-11-02',
  email_reminders boolean not null default true,
  onboarded boolean not null default false,
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name) values (new.id, split_part(new.email, '@', 1));
  return new;
end; $$;

create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Helpers used by policies (security definer avoids recursive RLS on profiles)
create or replace function public.my_group_id() returns uuid
language sql stable security definer set search_path = public as $$
  select group_id from public.profiles where id = auth.uid()
$$;

create or replace function public.is_groupmate(other uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.profiles p
    where p.id = other and p.group_id is not null
      and p.group_id = (select group_id from public.profiles where id = auth.uid())
  )
$$;

-- Group membership only changes through these functions
create or replace function public.create_group(p_name text) returns public.groups
language plpgsql security definer set search_path = public as $$
declare g public.groups;
begin
  if auth.uid() is null then raise exception 'Not signed in'; end if;
  insert into public.groups (name, owner_id) values (trim(p_name), auth.uid()) returning * into g;
  update public.profiles set group_id = g.id where id = auth.uid();
  return g;
end; $$;

create or replace function public.join_group(p_code text) returns public.groups
language plpgsql security definer set search_path = public as $$
declare g public.groups;
begin
  if auth.uid() is null then raise exception 'Not signed in'; end if;
  select * into g from public.groups where invite_code = upper(trim(p_code));
  if not found then raise exception 'Invalid invite code'; end if;
  update public.profiles set group_id = g.id where id = auth.uid();
  return g;
end; $$;

create or replace function public.leave_group() returns void
language sql security definer set search_path = public as $$
  update public.profiles set group_id = null where id = auth.uid()
$$;

alter table public.groups enable row level security;
alter table public.profiles enable row level security;

create policy "see my group" on public.groups for select to authenticated
  using (id = public.my_group_id());

create policy "see self and groupmates" on public.profiles for select to authenticated
  using (id = auth.uid() or public.is_groupmate(id));
create policy "update self" on public.profiles for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

-- group_id can't be edited directly, only via the functions above
revoke update on public.profiles from authenticated;
grant update (display_name, start_date, email_reminders, onboarded) on public.profiles to authenticated;

-- ───────────── Syllabus ─────────────
create table public.weeks (
  week int primary key check (week between 1 and 48),
  phase text not null check (phase in ('Core', 'Electives', 'Capstone')),
  module text not null,
  lectures text not null default '',
  reading text not null default '',
  case_exercise text not null default '',
  deliverable text not null default '',
  elective_slot boolean not null default false
);

-- Each person's own elective choices (weeks 25–35)
create table public.elective_choices (
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  week int not null references public.weeks(week) check (week between 25 and 35),
  module text not null,
  lectures text not null default '',
  reading text not null default '',
  case_exercise text not null default '',
  deliverable text not null default '',
  primary key (user_id, week)
);

alter table public.weeks enable row level security;
alter table public.elective_choices enable row level security;
create policy "syllabus readable" on public.weeks for select to authenticated using (true);
create policy "own electives" on public.elective_choices for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ───────────── Progress (visible to group) ─────────────
create table public.progress (
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  week int not null references public.weeks(week),
  status text not null default 'Not started' check (status in ('Not started', 'In progress', 'Done', 'Behind')),
  hours_planned numeric(5,1) not null default 10,
  hours_actual numeric(5,1),
  deliverable_done boolean not null default false,
  score int check (score between 0 and 10),
  updated_at timestamptz not null default now(),
  primary key (user_id, week)
);

alter table public.progress enable row level security;
create policy "read own and group progress" on public.progress for select to authenticated
  using (user_id = auth.uid() or public.is_groupmate(user_id));
create policy "write own progress" on public.progress for insert to authenticated with check (user_id = auth.uid());
create policy "update own progress" on public.progress for update to authenticated using (user_id = auth.uid());
create policy "delete own progress" on public.progress for delete to authenticated using (user_id = auth.uid());

-- ───────────── Notes (private) ─────────────
create table public.notes (
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  week int not null references public.weeks(week),
  takeaway text not null default '',
  body text not null default '',
  reflection text not null default '',
  updated_at timestamptz not null default now(),
  primary key (user_id, week)
);

alter table public.notes enable row level security;
create policy "own notes" on public.notes for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ───────────── Deliverables (private unless shared for feedback) ─────────────
create table public.deliverables (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  week int not null references public.weeks(week),
  title text not null,
  file_path text not null unique,
  shared boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.deliverables enable row level security;
create policy "read own or shared-in-group" on public.deliverables for select to authenticated
  using (user_id = auth.uid() or (shared and public.is_groupmate(user_id)));
create policy "insert own deliverables" on public.deliverables for insert to authenticated with check (user_id = auth.uid());
create policy "update own deliverables" on public.deliverables for update to authenticated using (user_id = auth.uid());
create policy "delete own deliverables" on public.deliverables for delete to authenticated using (user_id = auth.uid());

create or replace function public.can_see_deliverable(d_id uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.deliverables d
    where d.id = d_id and (d.user_id = auth.uid() or (d.shared and public.is_groupmate(d.user_id)))
  )
$$;

create table public.comments (
  id uuid primary key default gen_random_uuid(),
  deliverable_id uuid not null references public.deliverables(id) on delete cascade,
  author_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  body text not null check (length(body) between 1 and 4000),
  created_at timestamptz not null default now()
);

alter table public.comments enable row level security;
create policy "read comments on visible work" on public.comments for select to authenticated
  using (public.can_see_deliverable(deliverable_id));
create policy "comment on visible work" on public.comments for insert to authenticated
  with check (author_id = auth.uid() and public.can_see_deliverable(deliverable_id));
create policy "delete own comments" on public.comments for delete to authenticated using (author_id = auth.uid());

-- ───────────── Weekly case discussion (per group) ─────────────
create table public.case_posts (
  id uuid primary key default gen_random_uuid(),
  group_id uuid not null references public.groups(id) on delete cascade,
  week int not null references public.weeks(week),
  author_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  body text not null check (length(body) between 1 and 8000),
  created_at timestamptz not null default now()
);

alter table public.case_posts enable row level security;
create policy "read group posts" on public.case_posts for select to authenticated
  using (group_id = public.my_group_id());
create policy "post in my group" on public.case_posts for insert to authenticated
  with check (author_id = auth.uid() and group_id = public.my_group_id());
create policy "delete own posts" on public.case_posts for delete to authenticated using (author_id = auth.uid());

-- ───────────── Resource library ─────────────
create table public.resources (
  id serial primary key,
  title text not null,
  author text,
  kind text not null check (kind in ('Book', 'Course', 'Case', 'Article')),
  url text,
  week int references public.weeks(week)
);

create table public.resource_status (
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  resource_id int not null references public.resources(id) on delete cascade,
  status text not null default 'To do' check (status in ('To do', 'In progress', 'Done')),
  rating int check (rating between 1 and 5),
  primary key (user_id, resource_id)
);

alter table public.resources enable row level security;
alter table public.resource_status enable row level security;
create policy "resources readable" on public.resources for select to authenticated using (true);
create policy "own resource status" on public.resource_status for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ───────────── Flashcards (private, spaced repetition) ─────────────
create table public.flashcards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  week int references public.weeks(week),
  front text not null,
  back text not null,
  ease numeric(4,2) not null default 2.5,
  interval_days int not null default 0,
  reps int not null default 0,
  due date not null default current_date,
  created_at timestamptz not null default now()
);

alter table public.flashcards enable row level security;
create policy "own flashcards" on public.flashcards for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ───────────── File storage for deliverables ─────────────
insert into storage.buckets (id, name, public) values ('deliverables', 'deliverables', false)
  on conflict (id) do nothing;

-- Files live at <user id>/<week>/<file>
create policy "own deliverable files" on storage.objects for all to authenticated
  using (bucket_id = 'deliverables' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'deliverables' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "shared deliverable files" on storage.objects for select to authenticated
  using (
    bucket_id = 'deliverables' and exists (
      select 1 from public.deliverables d
      where d.file_path = storage.objects.name and d.shared and public.is_groupmate(d.user_id)
    )
  );
