import { useState } from 'react';
import { useMe } from '../lib/auth';
import { supabase } from '../lib/supabase';
import { fail, useSyllabus } from '../lib/data';
import type { Week } from '../lib/types';

const FIELDS = [
  ['module', 'Elective / module'],
  ['lectures', 'Lectures'],
  ['reading', 'Reading'],
  ['case_exercise', 'Case / exercise'],
  ['deliverable', 'Deliverable'],
] as const;

export default function Electives() {
  const { uid } = useMe();
  const { weeks, reload } = useSyllabus(uid);
  const slots = weeks.filter((w) => w.elective_slot);

  return (
    <div>
      <div className="page-head">
        <h1>My electives</h1>
        <p className="muted">
          Weeks 25–35 are yours to shape. The defaults follow the growth + AI track; change any week and it only changes for you.
        </p>
      </div>
      {slots.map((w) => (
        <ElectiveForm key={`${w.week}-${w.customised ? 'c' : 'd'}`} uid={uid} w={w} onSaved={reload} />
      ))}
    </div>
  );
}

function ElectiveForm({ uid, w, onSaved }: { uid: string; w: Week; onSaved: () => void }) {
  const [form, setForm] = useState(w);
  const [open, setOpen] = useState(false);

  async function save() {
    const { module, lectures, reading, case_exercise, deliverable } = form;
    if (fail((await supabase.from('elective_choices').upsert({ user_id: uid, week: w.week, module, lectures, reading, case_exercise, deliverable })).error)) return;
    setOpen(false);
    onSaved();
  }
  async function reset() {
    await supabase.from('elective_choices').delete().eq('user_id', uid).eq('week', w.week);
    setOpen(false);
    onSaved();
  }

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <div>
          <strong>
            Week {w.week}: {w.module}
          </strong>
          {w.customised && <span className="pill" style={{ marginLeft: 8 }}>customised</span>}
          <div className="muted small">{w.deliverable}</div>
        </div>
        <button className="ghost" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Edit'}
        </button>
      </div>
      {open && (
        <div style={{ marginTop: 14 }}>
          {FIELDS.map(([k, label]) => (
            <label key={k}>
              {label}
              <input value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />
            </label>
          ))}
          <div className="row">
            <button disabled={!form.module.trim()} onClick={save}>
              Save
            </button>
            {w.customised && (
              <button className="ghost" onClick={reset}>
                Reset to default
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
