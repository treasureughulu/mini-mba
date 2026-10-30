-- Co-curricular progress: books read and weekly challenges done (private to each person).

create table public.extra_progress (
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  item_id text not null,
  status text not null default 'To do' check (status in ('To do', 'In progress', 'Done')),
  rating int check (rating between 1 and 5),
  note text not null default '',
  updated_at timestamptz not null default now(),
  primary key (user_id, item_id)
);

alter table public.extra_progress enable row level security;
create policy "own extra progress" on public.extra_progress for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

grant select, insert, update, delete on public.extra_progress to authenticated;
