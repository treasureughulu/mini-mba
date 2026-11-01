import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useMe } from '../lib/auth';
import { useProgress, useSyllabus } from '../lib/data';
import { clampWeek, currentWeek, weekRange } from '../lib/programme';
import { STATUSES, type Status } from '../lib/types';
import { lessonFor } from '../curriculum';
import { ICONS } from '../components/Layout';

const TOPICS: [string, RegExp][] = [
  ['All', /./],
  ['Foundations', /business works|excel/i],
  ['Accounting', /accounting/i],
  ['Statistics', /statistics|data/i],
  ['Finance', /finance/i],
  ['Economics', /economics/i],
  ['Strategy', /strategy/i],
  ['Marketing', /marketing|growth|customer/i],
  ['AI', /\bai\b/i],
  ['People', /people|leadership|negotiation|sales/i],
  ['Operations', /operations/i],
  ['Capstone', /capstone/i],
];

export default function Weeks() {
  const { uid, profile } = useMe();
  const { weeks } = useSyllabus(uid);
  const { get, save } = useProgress(uid);
  const [params] = useSearchParams();
  const [q, setQ] = useState(params.get('q') ?? '');
  const [topic, setTopic] = useState('All');
  const cur = clampWeek(currentWeek(profile.start_date));

  const pattern = TOPICS.find(([t]) => t === topic)![1];
  const term = q.trim().toLowerCase();
  const shown = weeks.filter((w) => {
    if (!pattern.test(w.module)) return false;
    return !term || JSON.stringify(lessonFor(w.week, profile.elective_tracks) ?? w).toLowerCase().includes(term);
  });

  return (
    <div>
      <div className="page-head">
        <h1>Weeks</h1>
        <p className="muted">Search all 48 lessons, or filter by subject.</p>
      </div>
      <div className="searchbar">
        {ICONS.search}
        <input aria-label="Search lessons" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search lessons, terms and resources" />
      </div>
      <div className="chips">
        {TOPICS.map(([t]) => (
          <button key={t} className={`chip ${t === topic ? 'on' : ''}`} onClick={() => setTopic(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className="card">
        {shown.length === 0 && <p className="muted">No lessons match that search.</p>}
        {shown.map((w) => (
          <div key={w.week} className={`week-row ${w.week === cur ? 'current' : ''}`}>
            <div className="num">{w.week}</div>
            <div className="info">
              <Link to={`/weeks/${w.week}`}>{w.module}</Link>
              <div className="muted small">{weekRange(profile.start_date, w.week)}</div>
            </div>
            <select className="status" aria-label={`Status for week ${w.week}`} value={get(w.week).status} onChange={(e) => save(w.week, { status: e.target.value as Status })}>
              {STATUSES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
