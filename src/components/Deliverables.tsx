import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { fail } from '../lib/data';
import type { Deliverable, Profile } from '../lib/types';
import Comments from './Comments';

export async function openFile(path: string) {
  const { data, error } = await supabase.storage.from('deliverables').createSignedUrl(path, 120);
  if (!fail(error) && data) window.open(data.signedUrl, '_blank');
}

export default function Deliverables({ uid, week, members, inGroup }: { uid: string; week: number; members: Profile[]; inGroup: boolean }) {
  const [items, setItems] = useState<Deliverable[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const { data } = await supabase.from('deliverables').select('*').eq('user_id', uid).eq('week', week).order('created_at');
    setItems((data ?? []) as Deliverable[]);
  }, [uid, week]);

  useEffect(() => {
    load();
  }, [load]);

  async function upload() {
    if (!file) return;
    setBusy(true);
    const path = `${uid}/${week}/${Date.now()}-${file.name.replace(/[^\w.-]/g, '_')}`;
    const up = await supabase.storage.from('deliverables').upload(path, file);
    if (!fail(up.error)) {
      fail((await supabase.from('deliverables').insert({ week, title: title.trim() || file.name, file_path: path })).error);
    }
    setBusy(false);
    setFile(null);
    setTitle('');
    load();
  }

  async function toggleShare(d: Deliverable) {
    fail((await supabase.from('deliverables').update({ shared: !d.shared }).eq('id', d.id)).error);
    load();
  }

  async function remove(d: Deliverable) {
    if (!confirm(`Delete "${d.title}"? This removes the file permanently.`)) return;
    await supabase.storage.from('deliverables').remove([d.file_path]);
    await supabase.from('deliverables').delete().eq('id', d.id);
    load();
  }

  return (
    <div>
      {items.length === 0 && <p className="muted small">Nothing uploaded yet.</p>}
      {items.map((d) => (
        <div key={d.id} style={{ marginBottom: 14 }}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <button className="link" onClick={() => openFile(d.file_path)}>
              {d.title}
            </button>
            <div className="row">
              {inGroup && (
                <button className="ghost small" onClick={() => toggleShare(d)}>
                  {d.shared ? 'Shared with group ✓' : 'Share for feedback'}
                </button>
              )}
              <button className="danger small" onClick={() => remove(d)}>
                Delete
              </button>
            </div>
          </div>
          {d.shared && <Comments deliverableId={d.id} uid={uid} members={members} />}
        </div>
      ))}
      <div className="row" style={{ marginTop: 10 }}>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} style={{ flex: 2 }} />
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title (optional)" style={{ flex: 1 }} />
        <button disabled={!file || busy} onClick={upload}>
          {busy ? 'Uploading…' : 'Upload'}
        </button>
      </div>
      <p className="muted small">Files are private. Sharing lets your group open the file and comment.</p>
    </div>
  );
}
