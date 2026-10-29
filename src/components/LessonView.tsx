import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { fail } from '../lib/data';
import { lessonMinutes } from '../curriculum';
import type { Lesson, TaskKind } from '../curriculum/types';

const KIND_LABEL: Record<TaskKind, string> = { watch: 'Watch', read: 'Read', do: 'Do', discuss: 'Discuss' };

function hours(min: number) {
  const h = min / 60;
  return `${Number.isInteger(h) ? h : h.toFixed(1)} h`;
}

/** Ticks are a per-device convenience, kept in this browser only. */
function useTicks(key: string) {
  const [ticks, setTicks] = useState<Set<string>>(new Set());
  useEffect(() => {
    try {
      setTicks(new Set(JSON.parse(localStorage.getItem(key) ?? '[]')));
    } catch {
      setTicks(new Set());
    }
  }, [key]);
  const toggle = (id: string) =>
    setTicks((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      try {
        localStorage.setItem(key, JSON.stringify([...next]));
      } catch {
        /* storage unavailable */
      }
      return next;
    });
  return { ticks, toggle };
}

export default function LessonView({ lesson, uid }: { lesson: Lesson; uid: string }) {
  const { ticks, toggle } = useTicks(`mmc:${uid}:w${lesson.week}`);
  const total = lesson.sessions.reduce((n, s) => n + s.tasks.length, 0);

  return (
    <div className="stack">
      <div className="card">
        <p>{lesson.why}</p>
        <h3>By the end of this week you can</h3>
        <ul className="small">
          {lesson.objectives.map((o) => (
            <li key={o}>{o}</li>
          ))}
        </ul>
        <p className="muted small">
          About {hours(lessonMinutes(lesson))} across {lesson.sessions.length} sessions · {ticks.size} of {total} tasks ticked
        </p>
      </div>

      <div className="card">
        <h2>Study plan</h2>
        {lesson.sessions.map((s, si) => {
          const mins = s.tasks.reduce((t, k) => t + k.minutes, 0);
          return (
            <div key={s.title} className="session">
              <div className="row" style={{ justifyContent: 'space-between' }}>
                <h3 style={{ margin: 0 }}>{s.title}</h3>
                <span className="muted small">{hours(mins)}</span>
              </div>
              {s.tasks.map((t, ti) => {
                const id = `${si}-${ti}`;
                return (
                  <label key={id} className={`task ${ticks.has(id) ? 'ticked' : ''}`}>
                    <input type="checkbox" checked={ticks.has(id)} onChange={() => toggle(id)} />
                    <span className={`kind ${t.kind}`}>{KIND_LABEL[t.kind]}</span>
                    <span>
                      {t.url ? (
                        <a href={t.url} target="_blank" rel="noreferrer">
                          {t.title}
                        </a>
                      ) : (
                        t.title
                      )}
                      <span className="muted"> · {t.minutes} min</span>
                      {t.detail && <span className="muted small task-detail">{t.detail}</span>}
                    </span>
                  </label>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="card">
        <h2>Exercise: {lesson.exercise.title}</h2>
        <ol className="small">
          {lesson.exercise.steps.map((s) => (
            <li key={s} style={{ marginBottom: 6 }}>
              {s}
            </li>
          ))}
        </ol>
        <p className="small">
          <strong>Hand in:</strong> {lesson.exercise.output}
        </p>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h2>Check yourself</h2>
          <ul className="small">
            {lesson.check.map((q) => (
              <li key={q} style={{ marginBottom: 6 }}>
                {q}
              </li>
            ))}
          </ul>
          <p className="muted small">
            <strong>Discussion prompt:</strong> {lesson.discuss}
          </p>
        </div>
        {lesson.terms.length > 0 && (
          <div className="card">
            <h2>Key terms</h2>
            <dl className="terms small">
              {lesson.terms.map((t) => (
                <div key={t.term}>
                  <dt>{t.term}</dt>
                  <dd>{t.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>

      {(lesson.cards.length > 0 || lesson.deeper?.length) && (
        <div className="card">
          {lesson.cards.length > 0 && <StarterCards lesson={lesson} />}
          {lesson.deeper && lesson.deeper.length > 0 && (
            <>
              <h3 style={{ marginTop: 16 }}>Go deeper (optional)</h3>
              <ul className="small">
                {lesson.deeper.map((d) => (
                  <li key={d.title}>{d.url ? <a href={d.url} target="_blank" rel="noreferrer">{d.title}</a> : d.title}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function StarterCards({ lesson }: { lesson: Lesson }) {
  const [state, setState] = useState<'idle' | 'busy' | 'done'>('idle');
  const [added, setAdded] = useState(0);

  async function add() {
    setState('busy');
    const { data } = await supabase.from('flashcards').select('front').eq('week', lesson.week);
    const have = new Set((data ?? []).map((c: { front: string }) => c.front));
    const fresh = lesson.cards.filter((c) => !have.has(c.front)).map((c) => ({ ...c, week: lesson.week }));
    if (fresh.length && fail((await supabase.from('flashcards').insert(fresh)).error)) return setState('idle');
    setAdded(fresh.length);
    setState('done');
  }

  return (
    <div>
      <h3>Starter flashcards</h3>
      <p className="muted small">
        {lesson.cards.length} ready-made cards for this week's key ideas. They join your spaced-repetition deck on the Flashcards page.
      </p>
      {state === 'done' ? (
        <p className="saved">{added ? `Added ${added} card${added === 1 ? '' : 's'}.` : 'Already in your deck.'}</p>
      ) : (
        <button disabled={state === 'busy'} onClick={add}>
          Add {lesson.cards.length} starter cards
        </button>
      )}
    </div>
  );
}
