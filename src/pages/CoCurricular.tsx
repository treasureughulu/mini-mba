import { useState } from 'react';
import { useMe } from '../lib/auth';
import { useExtra, blockOfWeek, type ExtraProgress } from '../lib/extra';
import { clampWeek, currentWeek } from '../lib/programme';
import { ACTIVITIES, BONUS, BOOKS, BRAIN_GYM, activityForWeek, bookLink, type Book } from '../curriculum/cocurricular';

const STATES: ExtraProgress['status'][] = ['To do', 'In progress', 'Done'];

export default function CoCurricular() {
  const { uid, profile } = useMe();
  const { get, save } = useExtra(uid);
  const week = clampWeek(currentWeek(profile.start_date));
  const block = blockOfWeek(week);
  const [showAll, setShowAll] = useState(false);

  const current = BOOKS.find((b) => b.block === block)!;
  const act = activityForWeek(week);
  const booksDone = [...BOOKS, ...BONUS].filter((b) => get(b.id).status === 'Done').length;
  const actsDone = ACTIVITIES.filter((a) => get(`act-${a.week}`).status === 'Done').length;

  return (
    <div>
      <div className="page-head">
        <h1>Co-curricular</h1>
        <p className="muted">
          About 1 hour a week: 45 minutes of reading (4 books a year) and a 30-minute challenge every two weeks. {booksDone} books finished · {actsDone} of 24 challenges done.
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <p className="muted small">{current.weeks} · {current.kind}</p>
          <BookRow b={current} p={get(current.id)} onSave={(patch) => save(current.id, patch)} big />
        </div>
        <div className="card">
          <p className="muted small">Challenge for weeks {act.week}–{act.week + 1}</p>
          <ActivityRow a={act} p={get(`act-${act.week}`)} onSave={(patch) => save(`act-${act.week}`, patch)} big />
        </div>
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2>Brain gym (optional, whenever you fancy it)</h2>
        <div className="row">
          {BRAIN_GYM.map((g) => (
            <a key={g.name} className="btn ghost small" href={g.url} target={g.url.startsWith('#') ? undefined : '_blank'} rel="noreferrer" title={g.what}>
              {g.name}
            </a>
          ))}
        </div>
      </div>

      <div className="card">
        <h2>Reading list</h2>
        <p className="muted small">Two books for the core, then two fun novels. Each runs for 12 weeks.</p>
        {BOOKS.map((b) => (
          <BookRow key={b.id} b={b} p={get(b.id)} onSave={(patch) => save(b.id, patch)} current={b.block === block} />
        ))}
        <h3 style={{ marginTop: 20 }}>Bonus shelf: finished early, or want to swap?</h3>
        {BONUS.map((b) => (
          <BookRow key={b.id} b={b} p={get(b.id)} onSave={(patch) => save(b.id, patch)} />
        ))}
      </div>

      <div className="card">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <h2 style={{ margin: 0 }}>All 24 challenges</h2>
          <button className="ghost small" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Hide' : 'Show all'}
          </button>
        </div>
        <p className="muted small">One every two weeks, rotating Speak → Write → Brain → Explore.</p>
        {showAll &&
          ACTIVITIES.map((a) => (
            <ActivityRow key={a.week} a={a} p={get(`act-${a.week}`)} onSave={(patch) => save(`act-${a.week}`, patch)} current={a.week === act.week} />
          ))}
      </div>
    </div>
  );
}

function Stars({ value, onChange }: { value: number | null; onChange: (n: number | null) => void }) {
  return (
    <span className="stars">
      {[1, 2, 3, 4, 5].map((n) => (
        <button key={n} title={`${n} star${n > 1 ? 's' : ''}`} onClick={() => onChange(value === n ? null : n)}>
          {(value ?? 0) >= n ? '★' : '☆'}
        </button>
      ))}
    </span>
  );
}

function NoteField({ value, placeholder, onSave }: { value: string; placeholder: string; onSave: (v: string) => void }) {
  const [v, setV] = useState(value);
  return <input value={v} placeholder={placeholder} onChange={(e) => setV(e.target.value)} onBlur={() => v !== value && onSave(v)} />;
}

function BookRow({ b, p, onSave, big, current }: { b: Omit<Book, 'block' | 'weeks'> & { weeks?: string }; p: ExtraProgress; onSave: (patch: Partial<ExtraProgress>) => void; big?: boolean; current?: boolean }) {
  return (
    <div className={`extra-row ${current ? 'current' : ''}`}>
      <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 220 }}>
          {big ? <h2 style={{ marginBottom: 4 }}>{b.title}</h2> : <strong>{b.weeks ? ` · ` : ''}{b.title}</strong>}
          <span className="muted small"> {big ? '' : '· '}{b.author} · <span className={`pill ${b.kind === 'Fiction' ? 'fiction' : ''}`}>{b.kind}</span></span>
          <div className="small" style={{ marginTop: 4 }}>{b.pitch}</div>
          {b.pairsWith && <div className="muted small">Pairs with: {b.pairsWith}</div>}
        </div>
        <div className="row">
          <select className="status" value={p.status} onChange={(e) => onSave({ status: e.target.value as ExtraProgress['status'] })}>
            {STATES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <Stars value={p.rating} onChange={(rating) => onSave({ rating })} />
          <a className="small" href={bookLink(b)} target="_blank" rel="noreferrer">
            find
          </a>
        </div>
      </div>
      {(big || p.status !== 'To do') && (
        <div style={{ marginTop: 8 }}>
          <NoteField key={p.note} value={p.note} placeholder="One idea worth keeping (or favourite moment)…" onSave={(note) => onSave({ note })} />
        </div>
      )}
    </div>
  );
}

function ActivityRow({ a, p, onSave, big, current }: { a: (typeof ACTIVITIES)[number]; p: ExtraProgress; onSave: (patch: Partial<ExtraProgress>) => void; big?: boolean; current?: boolean }) {
  const done = p.status === 'Done';
  return (
    <div className={`extra-row ${current ? 'current' : ''}`}>
      <label className="task" style={{ marginTop: 0 }}>
        <input type="checkbox" checked={done} onChange={() => onSave({ status: done ? 'To do' : 'Done' })} />
        <span className={`kind act-${a.type.toLowerCase()}`}>{a.type}</span>
        <span>
          {big ? <h2 style={{ display: 'inline', fontSize: 17 }}>{a.title}</h2> : <strong>Weeks {a.week}–{a.week + 1} · {a.title}</strong>}
          <span className="small task-detail">{a.how}</span>
          {a.url && (
            <a className="small" href={a.url} target="_blank" rel="noreferrer">
              Open link
            </a>
          )}
        </span>
      </label>
      {(big || done) && (
        <div style={{ marginTop: 8 }}>
          <NoteField key={p.note} value={p.note} placeholder="How did it go? One thing to remember…" onSave={(note) => onSave({ note })} />
        </div>
      )}
    </div>
  );
}
