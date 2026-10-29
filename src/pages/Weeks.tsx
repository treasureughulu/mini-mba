import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMe } from '../lib/auth';
import { useProgress, useSyllabus } from '../lib/data';
import { clampWeek, currentWeek, weekRange } from '../lib/programme';
import { STATUSES, type Status } from '../lib/types';

export default function Weeks() {
  const { uid, profile } = useMe();
  const { weeks } = useSyllabus(uid);
  const { get, save } = useProgress(uid);
  const [phase, setPhase] = useState('All');
  const cur = clampWeek(currentWeek(profile.start_date));
  const shown = weeks.filter((w) => phase === 'All' || w.phase === phase);

  return (
    <div>
      <div className="page-head row" style={{ justifyContent: 'space-between' }}>
        <div>
          <h1>Weeks</h1>
          <p className="muted">All 48 weeks. Change status here or open a week for notes, uploads and discussion.</p>
        </div>
        <select style={{ width: 160 }} value={phase} onChange={(e) => setPhase(e.target.value)}>
          {['All', 'Core', 'Electives', 'Capstone'].map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>
      <div className="card table-wrap">
        <table>
          <thead>
            <tr>
              <th>Wk</th>
              <th>Dates</th>
              <th>Module</th>
              <th>Deliverable</th>
              <th>Status</th>
              <th>Hours</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((w) => {
              const p = get(w.week);
              return (
                <tr key={w.week} className={w.week === cur ? 'current' : ''}>
                  <td>{w.week}</td>
                  <td className="muted small" style={{ whiteSpace: 'nowrap' }}>
                    {weekRange(profile.start_date, w.week)}
                  </td>
                  <td>
                    <Link to={`/weeks/${w.week}`}>{w.module}</Link>
                    <div className="muted small">{w.phase}{w.customised ? ' · your elective' : ''}</div>
                  </td>
                  <td className="small">{w.deliverable}</td>
                  <td>
                    <select className="status" value={p.status} onChange={(e) => save(w.week, { status: e.target.value as Status })}>
                      {STATUSES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                  <td className="small">
                    {p.hours_actual ?? '–'} / {p.hours_planned}
                  </td>
                  <td className="small">{p.score ?? '–'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
