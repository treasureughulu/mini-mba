import { useCallback, useEffect, useState } from 'react';
import { useMe } from '../lib/auth';
import { supabase } from '../lib/supabase';
import { fail } from '../lib/data';
import { review } from '../lib/srs';
import { today } from '../lib/programme';
import type { Flashcard } from '../lib/types';

const GRADES: [string, number][] = [
  ['Again', 1],
  ['Hard', 3],
  ['Good', 4],
  ['Easy', 5],
];

export default function Flashcards() {
  const { uid } = useMe();
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const load = useCallback(async () => {
    const { data } = await supabase.from('flashcards').select('*').eq('user_id', uid).order('due');
    setCards(((data ?? []) as Flashcard[]).map((c) => ({ ...c, ease: Number(c.ease) })));
  }, [uid]);

  useEffect(() => {
    load();
  }, [load]);

  const due = cards.filter((c) => c.due <= today());
  const card = due[0];

  async function grade(q: number) {
    const next = review(card, q);
    setRevealed(false);
    setCards((cs) => cs.map((c) => (c.id === card.id ? { ...c, ...next } : c)));
    fail((await supabase.from('flashcards').update(next).eq('id', card.id)).error);
  }
  async function remove(id: string) {
    if (!confirm('Delete this card?')) return;
    await supabase.from('flashcards').delete().eq('id', id);
    load();
  }

  return (
    <div>
      <div className="page-head">
        <h1>Flashcards</h1>
        <p className="muted">
          {due.length} due today · {cards.length} total. Add cards from any week's page.
        </p>
      </div>

      {card ? (
        <div className="card flash">
          <p className="muted small">{card.week ? `Week ${card.week}` : 'General'}</p>
          <div className="face">{revealed ? card.back : card.front}</div>
          {revealed ? (
            <div className="row" style={{ justifyContent: 'center' }}>
              {GRADES.map(([label, q]) => (
                <button key={label} className={q === 1 ? 'danger' : q === 4 ? '' : 'ghost'} onClick={() => grade(q)}>
                  {label}
                </button>
              ))}
            </div>
          ) : (
            <button onClick={() => setRevealed(true)}>Show answer</button>
          )}
        </div>
      ) : (
        <div className="card flash">
          <div className="face muted">{cards.length ? 'All caught up for today.' : 'No cards yet.'}</div>
        </div>
      )}

      <p style={{ marginTop: 20 }}>
        <button className="ghost" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Hide' : 'Show'} all cards
        </button>
      </p>
      {showAll && (
        <div className="card table-wrap">
          <table>
            <thead>
              <tr>
                <th>Wk</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Next due</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cards.map((c) => (
                <tr key={c.id}>
                  <td>{c.week ?? '–'}</td>
                  <td className="small">{c.front}</td>
                  <td className="small">{c.back}</td>
                  <td className="small">{c.due}</td>
                  <td>
                    <button className="link small" onClick={() => remove(c.id)}>
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
