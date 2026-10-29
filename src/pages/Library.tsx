import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMe } from '../lib/auth';
import { supabase } from '../lib/supabase';
import { fail } from '../lib/data';
import type { Resource, ResourceStatus } from '../lib/types';

const KINDS = ['All', 'Book', 'Course', 'Case', 'Article'];
const STATES: ResourceStatus['status'][] = ['To do', 'In progress', 'Done'];

export default function Library() {
  const { uid } = useMe();
  const [resources, setResources] = useState<Resource[]>([]);
  const [status, setStatus] = useState<Map<number, ResourceStatus>>(new Map());
  const [kind, setKind] = useState('All');
  const [q, setQ] = useState('');

  useEffect(() => {
    supabase.from('resources').select('*').order('week').then(({ data }) => setResources((data ?? []) as Resource[]));
    supabase
      .from('resource_status')
      .select('*')
      .eq('user_id', uid)
      .then(({ data }) => setStatus(new Map(((data ?? []) as ResourceStatus[]).map((s) => [s.resource_id, s]))));
  }, [uid]);

  async function update(r: Resource, patch: Partial<ResourceStatus>) {
    const row: ResourceStatus = { user_id: uid, resource_id: r.id, status: 'To do', rating: null, ...status.get(r.id), ...patch };
    setStatus((m) => new Map(m).set(r.id, row));
    fail((await supabase.from('resource_status').upsert(row)).error);
  }

  const shown = resources.filter(
    (r) => (kind === 'All' || r.kind === kind) && `${r.title} ${r.author ?? ''}`.toLowerCase().includes(q.toLowerCase()),
  );
  const doneCount = [...status.values()].filter((s) => s.status === 'Done').length;

  return (
    <div>
      <div className="page-head">
        <h1>Library</h1>
        <p className="muted">
          {doneCount} of {resources.length} resources finished.
        </p>
      </div>
      <div className="row" style={{ marginBottom: 12 }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search title or author" style={{ flex: 1 }} />
        <select value={kind} onChange={(e) => setKind(e.target.value)} style={{ width: 140 }}>
          {KINDS.map((k) => (
            <option key={k}>{k}</option>
          ))}
        </select>
      </div>
      <div className="card table-wrap">
        <table>
          <thead>
            <tr>
              <th>Resource</th>
              <th>Type</th>
              <th>Week</th>
              <th>Status</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {shown.map((r) => {
              const s = status.get(r.id);
              const href = r.url ?? `https://openlibrary.org/search?q=${encodeURIComponent(r.title + ' ' + (r.author ?? ''))}`;
              return (
                <tr key={r.id}>
                  <td>
                    <a href={href} target="_blank" rel="noreferrer">
                      {r.title}
                    </a>
                    <div className="muted small">{r.author}</div>
                  </td>
                  <td className="small">{r.kind}</td>
                  <td className="small">{r.week ? <Link to={`/weeks/${r.week}`}>{r.week}</Link> : '–'}</td>
                  <td>
                    <select className="status" value={s?.status ?? 'To do'} onChange={(e) => update(r, { status: e.target.value as ResourceStatus['status'] })}>
                      {STATES.map((x) => (
                        <option key={x}>{x}</option>
                      ))}
                    </select>
                  </td>
                  <td className="stars" style={{ whiteSpace: 'nowrap' }}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button key={n} title={`${n} star${n > 1 ? 's' : ''}`} onClick={() => update(r, { rating: s?.rating === n ? null : n })}>
                        {(s?.rating ?? 0) >= n ? '★' : '☆'}
                      </button>
                    ))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
