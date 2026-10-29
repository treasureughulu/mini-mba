import { Link } from 'react-router-dom';
import { useMe } from '../lib/auth';
import { useProgress, useSyllabus } from '../lib/data';
import { currentWeek, statusClass, weekRange } from '../lib/programme';

export default function Calendar() {
  const { uid, profile } = useMe();
  const { weeks } = useSyllabus(uid);
  const { get } = useProgress(uid);
  const cur = currentWeek(profile.start_date);

  return (
    <div>
      <div className="page-head">
        <h1>Calendar</h1>
        <p className="muted">Your 48 weeks by date. Green is done, amber in progress, red behind; the outlined week is now.</p>
      </div>
      {(['Core', 'Electives', 'Capstone'] as const).map((ph) => (
        <div key={ph} style={{ marginBottom: 24 }}>
          <h2>{ph}</h2>
          <div className="cal-grid">
            {weeks
              .filter((w) => w.phase === ph)
              .map((w) => {
                const s = get(w.week).status;
                return (
                  <Link key={w.week} to={`/weeks/${w.week}`} className={`cal-cell ${statusClass(s)} ${w.week === cur ? 'current' : ''}`}>
                    <div className="muted small">
                      Wk {w.week} · {weekRange(profile.start_date, w.week)}
                    </div>
                    <div style={{ fontWeight: 600, marginTop: 4 }}>{w.module}</div>
                  </Link>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
