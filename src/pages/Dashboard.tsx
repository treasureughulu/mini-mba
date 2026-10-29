import { Link } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useMe } from '../lib/auth';
import { useProgress, useSyllabus } from '../lib/data';
import { TOTAL_WEEKS, clampWeek, currentWeek, statusClass, streak, weekRange } from '../lib/programme';

export default function Dashboard() {
  const { uid, profile } = useMe();
  const { weeks } = useSyllabus(uid);
  const { get } = useProgress(uid);

  const raw = currentWeek(profile.start_date);
  const cur = clampWeek(raw);
  const rows = weeks.map((w) => ({ ...w, p: get(w.week) }));
  const done = new Set(rows.filter((r) => r.p.status === 'Done').map((r) => r.week));
  const logged = rows.reduce((s, r) => s + (r.p.hours_actual ?? 0), 0);
  const plannedToDate = rows.filter((r) => r.week < raw).reduce((s, r) => s + r.p.hours_planned, 0);
  const scores = rows.map((r) => r.p.score).filter((x): x is number => x != null);
  const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : null;
  const behind = rows.filter((r) => r.p.status === 'Behind').length;

  let cp = 0;
  let ca = 0;
  const chart = rows.map((r) => {
    cp += r.p.hours_planned;
    ca += r.p.hours_actual ?? 0;
    return { week: r.week, Planned: cp, Logged: r.week <= cur ? ca : null };
  });

  const phases = (['Core', 'Electives', 'Capstone'] as const).map((ph) => {
    const rs = rows.filter((r) => r.phase === ph);
    return { ph, total: rs.length, done: rs.filter((r) => r.p.status === 'Done').length };
  });
  const thisWeek = rows.find((r) => r.week === cur);
  const status = raw < 1 ? `Starts in ${1 - raw} week${raw === 0 ? '' : 's'}` : raw > TOTAL_WEEKS ? 'Finished' : `Week ${raw} of 48`;

  const kpis: [string, string][] = [
    ['Programme', status],
    ['Weeks done', `${done.size} / 48`],
    ['Streak', `${streak(done, cur)} wk`],
    ['Hours logged', logged.toFixed(1)],
    ['vs plan to date', raw > 1 ? `${logged - plannedToDate >= 0 ? '+' : ''}${(logged - plannedToDate).toFixed(1)} h` : '—'],
    ['Avg self-score', avg == null ? '—' : avg.toFixed(1)],
  ];

  return (
    <div>
      <div className="page-head">
        <h1>Hi {profile.display_name}</h1>
        <p className="muted">{behind > 0 ? `${behind} week${behind > 1 ? 's' : ''} marked behind. ` : ''}Here's where the programme stands.</p>
      </div>

      <div className="kpis">
        {kpis.map(([label, value]) => (
          <div className="kpi" key={label}>
            <div className="label">{label}</div>
            <div className="value">{value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-2">
        {thisWeek && (
          <div className="card">
            <p className="muted small">
              This week · {weekRange(profile.start_date, cur)}
            </p>
            <h2>
              Week {cur}: {thisWeek.module} <span className={`pill ${statusClass(thisWeek.p.status)}`}>{thisWeek.p.status}</span>
            </h2>
            <p className="small">
              <strong>Watch:</strong> {thisWeek.lectures}
              <br />
              <strong>Read:</strong> {thisWeek.reading}
              <br />
              <strong>Do:</strong> {thisWeek.case_exercise}
              <br />
              <strong>Deliver:</strong> {thisWeek.deliverable}
            </p>
            <Link className="btn" to={`/weeks/${cur}`}>
              Open week {cur}
            </Link>
          </div>
        )}

        <div className="card">
          <h2>By phase</h2>
          {phases.map((p) => (
            <div key={p.ph} style={{ marginBottom: 14 }}>
              <div className="row small" style={{ justifyContent: 'space-between' }}>
                <span>{p.ph}</span>
                <span className="muted">
                  {p.done} / {p.total} weeks
                </span>
              </div>
              <div className="bar">
                <div style={{ width: `${p.total ? (100 * p.done) / p.total : 0}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2>Hours: logged vs planned (cumulative)</h2>
        <div style={{ height: 260 }}>
          <ResponsiveContainer>
            <LineChart data={chart} margin={{ top: 8, right: 16, bottom: 0, left: -10 }}>
              <CartesianGrid stroke="var(--line)" vertical={false} />
              <XAxis dataKey="week" tick={{ fontSize: 12, fill: 'var(--muted)' }} />
              <YAxis tick={{ fontSize: 12, fill: 'var(--muted)' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Planned" stroke="var(--muted)" strokeDasharray="4 4" dot={false} />
              <Line type="monotone" dataKey="Logged" stroke="var(--accent)" strokeWidth={2} dot={false} connectNulls={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
