# Mini MBA Canvas

Your personal canvas for a 48-week, self-directed MBA modelled on London Business School. It covers weekly tracking, notes, deliverable uploads, a resource library, flashcards and a study group.

**Stack:** React + Vite (hosted free on GitHub Pages) · Supabase (sign-in, Postgres, file storage, scheduled emails) · Resend (reminder emails). It all fits in the free tiers.

## What's in it

| Page | What it does |
|---|---|
| Dashboard | Headline numbers, phase progress, cumulative hours vs plan, this week's plan |
| Weeks / Week detail | All 48 weeks; status, hours, score, private notes, uploads, flashcards, the group's case discussion |
| Calendar | The programme by date, coloured by status |
| Library | Every book, course and case, with status and a 1–5 star rating |
| Flashcards | Spaced-repetition review (SM-2) of cards you write each week |
| My electives | Swap weeks 25–35 for your own electives (only changes them for you) |
| Study group | Join with an invite code; see each other's progress and streaks; comment on shared deliverables |
| Settings | Name, start date, Monday reminder emails, leave group |

**Privacy model (enforced in the database by row-level security):**
- **Group members see:** each other's progress (status, hours, score) and streaks.
- **Always private:** notes, flashcards, library ratings, elective choices.
- **Deliverables:** private until you click "Share for feedback". Then your group can open the file and comment on it.

---

## Setup (about 20 minutes)

### 1. Supabase project
1. Create a free project at [supabase.com](https://supabase.com).
2. **SQL Editor → New query**: paste and run `supabase/migrations/0001_schema.sql`, then `supabase/seed.sql`.
3. **Authentication → URL Configuration**:
   - Site URL: `https://YOUR-GITHUB-USERNAME.github.io/mini-mba-canvas/`
   - Redirect URLs: add that URL and `http://localhost:5173/`
4. **Project Settings → API**: copy the **Project URL** and the **anon public** key.

### 2. Run it locally
```bash
cp .env.example .env      # Windows: copy .env.example .env  — then paste your URL + anon key
npm install
npm run dev               # opens http://localhost:5173
```
Sign in with your email. The magic link opens the app.

### 3. Host it on GitHub Pages
0. Install [Git for Windows](https://git-scm.com/download/win), or use [GitHub Desktop](https://desktop.github.com) and skip the commands below.
1. Create an empty GitHub repo named `mini-mba-canvas`, then push this folder:
   ```bash
   git init
   git add .
   git commit -m "Mini MBA Canvas"
   git branch -M main
   git remote add origin https://github.com/YOUR-GITHUB-USERNAME/mini-mba-canvas.git
   git push -u origin main
   ```
2. Repo **Settings → Secrets and variables → Actions**: add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
3. Repo **Settings → Pages → Source**: choose **GitHub Actions**.
4. Every push to `main` now redeploys to `https://YOUR-GITHUB-USERNAME.github.io/mini-mba-canvas/`.

> The anon key is designed to be public. The row-level security policies decide who can read and write what. Never put the **service_role** key in the front end or in GitHub.

### 4. Monday reminder emails (optional)
1. Create a free [Resend](https://resend.com) account and an API key. Resend's test sender only delivers to your own email address. To email group members, verify a domain in Resend and set `REMINDER_FROM`, e.g. `Mini MBA <hello@yourdomain.com>`.
2. Install the [Supabase CLI](https://supabase.com/docs/guides/cli), then:
   ```bash
   supabase login
   supabase link --project-ref YOUR-PROJECT-REF
   supabase secrets set RESEND_API_KEY=re_xxx CRON_SECRET=pick-a-long-random-string SITE_URL=https://YOUR-GITHUB-USERNAME.github.io/mini-mba-canvas/
   supabase functions deploy weekly-reminder --no-verify-jwt
   ```
3. Enable the **pg_cron** and **pg_net** extensions. Then edit and run `supabase/schedule_reminders.sql`, which sends every Monday at 07:00 UTC.

### 5. Invite your study group
- **Study group → Start a group** creates an invite code.
- Members sign in, enter the code during onboarding or on the Study group page, and they're in.

---

## Customising
- **Change the syllabus for everyone:** edit rows in the `weeks` table (Supabase → Table Editor).
- **Add resources:** insert rows into `resources`.
- **Change the default start date:** `profiles.start_date` default in the schema (each person can change their own in Settings).
