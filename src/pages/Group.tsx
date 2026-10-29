import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMe } from '../lib/auth';
import { supabase } from '../lib/supabase';
import { nameOf, normalise, useGroupMembers } from '../lib/data';
import { TOTAL_WEEKS, clampWeek, currentWeek, statusClass, streak } from '../lib/programme';
import type { Deliverable, Group as GroupT, Progress } from '../lib/types';
import GroupJoin from '../components/GroupJoin';
import Comments from '../components/Comments';
import { openFile } from '../components/Deliverables';

export default function Group() {
  const { uid, profile, refreshProfile } = useMe();
  const members = useGroupMembers(profile.group_id);
  const [group, setGroup] = useState<GroupT | null>(null);
  const [progress, setProgress] = useState<Progress[]>([]);
  const [shared, setShared] = useState<Deliverable[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!profile.group_id) return;
    supabase.from('groups').select('*').eq('id', profile.group_id).single().then(({ data }) => setGroup(data as GroupT));
    supabase
      .from('deliverables')
      .select('*')
      .eq('shared', true)
      .neq('user_id', uid)
      .order('created_at', { ascending: false })
      .then(({ data }) => setShared((data ?? []) as Deliverable[]));
  }, [profile.group_id, uid]);

  useEffect(() => {
    if (!members.length) return;
    supabase
      .from('progress')
      .select('*')
      .in('user_id', members.map((m) => m.id))
      .then(({ data }) => setProgress(((data ?? []) as Progress[]).map(normalise)));
  }, [members]);

  if (!profile.group_id) {
    return (
      <div>
        <div className="page-head">
          <h1>Study group</h1>
          <p className="muted">You're not in a group yet. Start one and share the code, or join with a code from a friend.</p>
        </div>
        <div className="card">
          <GroupJoin onDone={refreshProfile} />
        </div>
      </div>
    );
  }

  async function copy() {
    if (!group) return;
    await navigator.clipboard.writeText(group.invite_code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div>
      <div className="page-head">
        <h1>{group?.name ?? 'Study group'}</h1>
        <p className="muted">
          Invite code: <code>{group?.invite_code}</code>{' '}
          <button className="link small" onClick={copy}>
            {copied ? 'copied' : 'copy'}
          </button>
          {' · '}
          {members.length} member{members.length === 1 ? '' : 's'}
        </p>
      </div>

      <div className="card table-wrap">
        <h2>Progress</h2>
        <table>
          <thead>
            <tr>
              <th>Member</th>
              <th>Week</th>
              <th>Done</th>
              <th>Streak</th>
              <th>Hours</th>
              <th>Weeks 1–48</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => {
              const mine = progress.filter((p) => p.user_id === m.id);
              const byWeek = new Map(mine.map((p) => [p.week, p.status]));
              const done = new Set(mine.filter((p) => p.status === 'Done').map((p) => p.week));
              const cur = clampWeek(currentWeek(m.start_date));
              return (
                <tr key={m.id}>
                  <td>
                    {m.display_name}
                    {m.id === uid ? ' (you)' : ''}
                  </td>
                  <td>{cur}</td>
                  <td>{done.size}</td>
                  <td>{streak(done, cur)} wk</td>
                  <td>{mine.reduce((s, p) => s + (p.hours_actual ?? 0), 0).toFixed(0)}</td>
                  <td>
                    <div className="dots">
                      {Array.from({ length: TOTAL_WEEKS }, (_, i) => {
                        const s = byWeek.get(i + 1) ?? 'Not started';
                        return <div key={i} className={`dot ${statusClass(s)}`} title={`Week ${i + 1}: ${s}`} />;
                      })}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>Shared for feedback</h2>
        {shared.length === 0 && <p className="muted small">Nobody has shared a deliverable yet.</p>}
        {shared.map((d) => (
          <div key={d.id} style={{ marginBottom: 18 }}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <div>
                <button className="link" onClick={() => openFile(d.file_path)}>
                  {d.title}
                </button>
                <span className="muted small">
                  {' '}
                  · {nameOf(members, d.user_id)} · <Link to={`/weeks/${d.week}`}>Week {d.week}</Link>
                </span>
              </div>
            </div>
            <Comments deliverableId={d.id} uid={uid} members={members} />
          </div>
        ))}
      </div>
    </div>
  );
}
