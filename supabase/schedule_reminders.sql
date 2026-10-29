-- Optional: Monday 07:00 UTC reminder emails.
-- 1. Database → Extensions: enable pg_cron and pg_net.
-- 2. Replace YOUR-PROJECT-REF and YOUR-CRON-SECRET below (same value as the CRON_SECRET function secret).
-- 3. Run in SQL Editor.

select cron.schedule(
  'mini-mba-monday-reminder',
  '0 7 * * 1',
  $$
  select net.http_post(
    url := 'https://YOUR-PROJECT-REF.supabase.co/functions/v1/weekly-reminder',
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-cron-secret', 'YOUR-CRON-SECRET'),
    body := '{}'::jsonb
  );
  $$
);

-- To stop: select cron.unschedule('mini-mba-monday-reminder');
