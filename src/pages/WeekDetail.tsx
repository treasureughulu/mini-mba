import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useMe } from '../lib/auth';
import { supabase } from '../lib/supabase';
import { fail, useGroupMembers, useProgress, useSyllabus } from '../lib/data';
import { TOTAL_WEEKS, weekRange } from '../lib/programme';
import { STATUSES, type Notes, type Progress, type Status } from '../lib/types';
import Deliverables from '../components/Deliverables';
import CaseThread from '../components/CaseThread';
import LessonView from '../components/LessonView';
import { lessonFor } from '../curriculum';

export default function WeekDetail() {
  const week = Number(useParams().week);
  const { uid, profile } = useMe();
  const { weeks } = useSyllabus(uid);
  const { get, save } = useProgress(uid);
  const members = useGroupMembers(profile.group_id);
  const w = weeks.find((x) => x.week === week);
  const lesson = lessonFor(week, profile.elective_tracks);

  if (!w) return <p className="muted">Loading…</p>;

  return (
    <div>
      <div className="page-head row" style={{ justifyContent: 'space-between' }}>
        <div>
          <p className="muted small">
            {w.phase} · Week {week} · {weekRange(profile.start_date, week)}
          </p>
          <h1>{w.module}</h1>
        </div>
        <div className="row">
          {week > 1 && <Link className="btn ghost" to={`/weeks/${week - 1}`}>← Wk {week - 1}</Link>}
          {week < TOTAL_WEEKS && <Link className="btn ghost" to={`/weeks/${week + 1}`}>Wk {week + 1} →</Link>}
        </div>
      </div>

      {lesson && <LessonView key={`${week}-${lesson.module}`} lesson={lesson} uid={uid} />}

      <div style={{ marginTop: 16 }}>
        <ProgressPanel key={`${week}-${get(week).updated_at ? 'stored' : 'new'}`} p={get(week)} onSave={(patch) => save(week, patch)} />
      </div>

      <div className="card" style={{ marginTop: 16 }}>
        <h2>Notes <span className="muted small">(private)</span></h2>
        <NotesPanel key={week} uid={uid} week={week} />
      </div>

      <div className="card">
        <h2>Deliverables</h2>
        <Deliverables uid={uid} week={week} members={members} inGroup={Boolean(profile.group_id)} />
      </div>

      <div className="card">
        <h2>Flashcards</h2>
        <QuickCard key={week} week={week} />
      </div>

      {profile.group_id && (
        <div className="card">
          <h2>Case discussion</h2>
          <CaseThread groupId={profile.group_id} week={week} uid={uid} members={members} />
        </div>
      )}
    </div>
  );
}

function ProgressPanel({ p, onSave }: { p: Progress; onSave: (patch: Partial<Progress>) => Promise<void> }) {
  const [form, setForm] = useState(p);
  const [saved, setSaved] = useState(false);
  const num = (v: string) => (v === '' ? null : Number(v));

  async function submit() {
    await onSave({
      status: form.status,
      hours_planned: form.hours_planned,
      hours_actual: form.hours_actual,
      deliverable_done: form.deliverable_done,
      score: form.score,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="card">
      <h2>Progress</h2>
      <div className="row">
        <label>
          Status
          <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as Status })}>
            {STATUSES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label>
          Self-score (0–10)
          <input type="number" min={0} max={10} value={form.score ?? ''} onChange={(e) => setForm({ ...form, score: num(e.target.value) })} />
        </label>
      </div>
      <div className="row">
        <label>
          Hours planned
          <input type="number" min={0} step={0.5} value={form.hours_planned} onChange={(e) => setForm({ ...form, hours_planned: Number(e.target.value) })} />
        </label>
        <label>
          Hours actual
          <input type="number" min={0} step={0.5} value={form.hours_actual ?? ''} onChange={(e) => setForm({ ...form, hours_actual: num(e.target.value) })} />
        </label>
      </div>
      <label>
        <input type="checkbox" checked={form.deliverable_done} onChange={(e) => setForm({ ...form, deliverable_done: e.target.checked })} />
        Deliverable done
      </label>
      <div className="row">
        <button onClick={submit}>Save progress</button>
        {saved && <span className="saved">Saved</span>}
      </div>
    </div>
  );
}

function NotesPanel({ uid, week }: { uid: string; week: number }) {
  const empty: Notes = { user_id: uid, week, takeaway: '', body: '', reflection: '' };
  const [notes, setNotes] = useState<Notes>(empty);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    supabase
      .from('notes')
      .select('*')
      .eq('user_id', uid)
      .eq('week', week)
      .maybeSingle()
      .then(({ data }) => data && setNotes(data as Notes));
  }, [uid, week]);

  async function submit() {
    if (fail((await supabase.from('notes').upsert({ ...notes, updated_at: new Date().toISOString() })).error)) return;
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <label>
        Key takeaway (one sentence)
        <input value={notes.takeaway} onChange={(e) => setNotes({ ...notes, takeaway: e.target.value })} />
      </label>
      <label>
        Notes
        <textarea style={{ minHeight: 180 }} value={notes.body} onChange={(e) => setNotes({ ...notes, body: e.target.value })} />
      </label>
      <label>
        Reflection: how will I use this at work?
        <textarea value={notes.reflection} onChange={(e) => setNotes({ ...notes, reflection: e.target.value })} />
      </label>
      <div className="row">
        <button onClick={submit}>Save notes</button>
        {saved && <span className="saved">Saved</span>}
      </div>
    </div>
  );
}

function QuickCard({ week }: { week: number }) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    supabase
      .from('flashcards')
      .select('id', { count: 'exact', head: true })
      .eq('week', week)
      .then(({ count }) => setCount(count ?? 0));
  }, [week]);

  async function add() {
    if (fail((await supabase.from('flashcards').insert({ week, front, back })).error)) return;
    setFront('');
    setBack('');
    setCount((c) => c + 1);
  }

  return (
    <div>
      <p className="muted small">
        {count} card{count === 1 ? '' : 's'} for this week. Turn your key concepts into questions; review them on the <Link to="/flashcards">Flashcards</Link> page.
      </p>
      <div className="row">
        <label>
          Question
          <input value={front} onChange={(e) => setFront(e.target.value)} placeholder="e.g. What does WACC measure?" />
        </label>
        <label>
          Answer
          <input value={back} onChange={(e) => setBack(e.target.value)} />
        </label>
      </div>
      <button disabled={!front.trim() || !back.trim()} onClick={add}>
        Add card
      </button>
    </div>
  );
}
