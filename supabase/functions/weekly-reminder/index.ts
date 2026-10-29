// Supabase Edge Function: Monday email with each member's plan for the week.
// Deploy: supabase functions deploy weekly-reminder --no-verify-jwt
// Secrets: RESEND_API_KEY, CRON_SECRET, SITE_URL, REMINDER_FROM (optional)
import { createClient } from 'npm:@supabase/supabase-js@2.45.4';

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!;
const CRON_SECRET = Deno.env.get('CRON_SECRET');
const SITE_URL = Deno.env.get('SITE_URL') ?? '';
const FROM = Deno.env.get('REMINDER_FROM') ?? 'Mini MBA Canvas <onboarding@resend.dev>';
const WEEK_MS = 7 * 864e5;

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

Deno.serve(async (req) => {
  if (!CRON_SECRET || req.headers.get('x-cron-secret') !== CRON_SECRET) {
    return new Response('Unauthorized', { status: 401 });
  }
  const sb = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);

  const [{ data: profiles }, { data: weeks }, { data: electives }] = await Promise.all([
    sb.from('profiles').select('id, display_name, start_date').eq('email_reminders', true).eq('onboarded', true),
    sb.from('weeks').select('*'),
    sb.from('elective_choices').select('*'),
  ]);

  let sent = 0;
  const errors: string[] = [];
  for (const p of profiles ?? []) {
    const week = Math.floor((Date.now() - Date.parse(`${p.start_date}T00:00:00Z`)) / WEEK_MS) + 1;
    if (week < 1 || week > 48) continue;

    const base = (weeks ?? []).find((w) => w.week === week);
    const own = (electives ?? []).find((e) => e.user_id === p.id && e.week === week);
    const w = { ...base, ...(own ?? {}) };

    const { data: user } = await sb.auth.admin.getUserById(p.id);
    const email = user.user?.email;
    if (!email) continue;

    const { data: last } = await sb.from('progress').select('status').eq('user_id', p.id).eq('week', week - 1).maybeSingle();
    const nudge =
      week > 1 && last?.status !== 'Done'
        ? `<p style="color:#b54708">Week ${week - 1} isn't marked done yet. Catch up or mark it before you start.</p>`
        : '';

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;color:#16202e">
        <p>Morning ${esc(p.display_name ?? '')},</p>
        <h2 style="margin:0 0 8px">Week ${week}: ${esc(w.module ?? '')}</h2>
        ${nudge}
        <p><b>Watch:</b> ${esc(w.lectures ?? '')}<br/>
           <b>Read:</b> ${esc(w.reading ?? '')}<br/>
           <b>Do:</b> ${esc(w.case_exercise ?? '')}<br/>
           <b>Deliver:</b> ${esc(w.deliverable ?? '')}</p>
        ${SITE_URL ? `<p><a href="${SITE_URL}#/weeks/${week}">Open week ${week} in your canvas →</a></p>` : ''}
        <p style="color:#667085;font-size:12px">Turn these off in Settings.</p>
      </div>`;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: email, subject: `Week ${week}: ${w.module}`, html }),
    });
    if (res.ok) sent++;
    else errors.push(`${p.id}: ${res.status} ${await res.text()}`);
  }

  return Response.json({ sent, errors });
});
