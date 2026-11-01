import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMe } from '../lib/auth';
import { useProgress, useSyllabus } from '../lib/data';
import { useExtra, blockOfWeek } from '../lib/extra';
import { TOTAL_WEEKS, clampWeek, currentWeek, streak, weekRange } from '../lib/programme';
import { BOOKS, activityForWeek } from '../curriculum/cocurricular';
import { lessonFor } from '../curriculum';
import Avatar from '../components/Avatar';
import { ICONS } from '../components/Layout';

const KIND = { watch: 'Watch', read: 'Read', do: 'Do', discuss: 'Discuss' };

export default function Dashboard() {
  const { uid, profile } = useMe();
  const { weeks } = useSyllabus(uid);
  const { get } = useProgress(uid);
  const extra = useExtra(uid);
  const navigate = useNavigate();
  const [q, setQ] = useState('');

  const raw = currentWeek(profile.start_date);
  const cur = clampWeek(raw);
  const lesson = lessonFor(cur, profile.elective_tracks);
  const rows = weeks.map((w) => get(w.week));
  const done = new Set(rows.filter((p) => p.status === 'Done').map((p) => p.week));
  const logged = rows.reduce((s, p) => s + (p.hours_actual ?? 0), 0);
  const recent = rows.filter((p) => p.week <= cur && p.week > cur - 8);
  const top = Math.max(4, ...recent.map((p) => p.hours_actual ?? 0));
  const status = raw < 1 ? `Starts in ${1 - raw} week${raw === 0 ? '' : 's'}` : raw > TOTAL_WEEKS ? 'Programme finished' : `Week ${raw} of 48`;

  const tasks = (lesson?.sessions ?? []).flatMap((s, si) => s.tasks.map((t, ti) => ({ ...t, id: `t${cur}-${si}-${ti}` })));
  const ticked = tasks.filter((t) => extra.get(t.id).status === 'Done').length;
  const book = BOOKS.find((b) => b.block === blockOfWeek(cur))!;
  const challenge = activityForWeek(cur);

  function search(e: FormEvent) {
    e.preventDefault();
    navigate(`/weeks?q=${encodeURIComponent(q)}`);
  }

  return (
    <div>
      <div className="hello">
        <Avatar person={profile} />
        <div>
          <p className="muted small" style={{ margin: 0 }}>
            {status}
          </p>
          <h1>Hello, {(profile.display_name ?? '').split(' ')[0]} 👋</h1>
        </div>
      </div>

      <form className="searchbar" onSubmit={search} role="search">
        {ICONS.search}
        <input aria-label="Search lessons" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search lessons, such as NPV or pricing" />
      </form>

      <div className="hero">
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="eyebrow">This week · {weekRange(profile.start_date, cur)}</div>
          <h2>{lesson?.module}</h2>
          <div className="bar">
            <div style={{ width: `${tasks.length ? (100 * ticked) / tasks.length : 0}%` }} />
          </div>
          <p className="small" style={{ margin: '8px 0 0', opacity: 0.8 }}>
            {ticked} of {tasks.length} tasks done
          </p>
        </div>
        <Link className="btn" to={`/weeks/${cur}`}>
          Open week {cur}
        </Link>
      </div>

      <div className="home-grid">
        <div className="card">
          <h2>This week's plan</h2>
          <ul className="timeline">
            {tasks.map((t) => {
              const on = extra.get(t.id).status === 'Done';
              return (
                <li key={t.id}>
                  <label className={`task ${on ? 'ticked' : ''}`}>
                    <input type="checkbox" checked={on} onChange={() => extra.save(t.id, { status: on ? 'To do' : 'Done' })} />
                    <span className={`kind ${t.kind}`}>{KIND[t.kind]}</span>
                    <span>
                      {t.title}
                      <span className="muted"> · {t.minutes} min</span>
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="home-side">
          <div className="stat-pair">
            <div className="stat amber">
              <div className="label">Learning streak</div>
              <div className="value">{streak(done, cur)} wk</div>
            </div>
            <div className="stat dark">
              <div className="label">Hours logged</div>
              <div className="value">{logged.toFixed(1)}</div>
            </div>
          </div>

          <div className="card">
            <h2>Hours by week</h2>
            <div className="bars">
              {recent.map((p) => (
                <div key={p.week} className={`col ${p.week === cur ? 'now' : ''}`} title={`Week ${p.week}: ${p.hours_actual ?? 0} h`}>
                  <div className="fill" style={{ height: `${Math.max(6, (100 * (p.hours_actual ?? 0)) / top)}%` }} />
                  <span className="lbl">{p.week}</span>
                </div>
              ))}
            </div>
            <p className="muted small" style={{ marginBottom: 0 }}>
              Target: 4 hours of core work a week.
            </p>
          </div>

          <div className="card">
            <p className="muted small" style={{ marginTop: 0 }}>
              Co-curricular
            </p>
            <h2 style={{ marginBottom: 6 }}>{book.title}</h2>
            <p className="small">
              <strong>Challenge:</strong> {challenge.title}
            </p>
            <Link className="btn ghost" to="/extras">
              Open co-curricular
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
