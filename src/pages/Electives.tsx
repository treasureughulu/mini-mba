import { useMe } from '../lib/auth';
import { supabase } from '../lib/supabase';
import { fail } from '../lib/data';
import { TRACKS } from '../curriculum/tracks';

export default function Electives() {
  const { uid, profile, refreshProfile } = useMe();
  const choices = profile.elective_tracks ?? {};

  async function choose(blockId: string, optionId: string) {
    const next = { ...choices, [blockId]: optionId };
    const { error } = await supabase.from('profiles').update({ elective_tracks: next }).eq('id', uid);
    if (!fail(error)) refreshProfile();
  }

  return (
    <div>
      <div className="page-head">
        <h1>My electives</h1>
        <p className="muted">Choose one track in each block. Your weeks update straight away, and you can change your choice at any time. Week 35 and the capstone are the same for everyone.</p>
      </div>
      {TRACKS.map((b) => {
        const selected = choices[b.id] ?? b.options[0].id;
        return (
          <div className="card" key={b.id}>
            <h2 style={{ marginBottom: 2 }}>{b.title}</h2>
            <p className="muted small" style={{ margin: 0 }}>
              Weeks {b.weeks[0]}–{b.weeks[b.weeks.length - 1]}
            </p>
            <div className="track-grid">
              {b.options.map((o) => (
                <button key={o.id} className={`track ${selected === o.id ? 'on' : ''}`} aria-pressed={selected === o.id} onClick={() => choose(b.id, o.id)}>
                  <strong>{o.name}</strong>
                  <span className="muted small">{o.blurb}</span>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
