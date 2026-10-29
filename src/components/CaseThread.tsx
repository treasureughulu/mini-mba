import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { fail, nameOf } from '../lib/data';
import type { CasePost, Profile } from '../lib/types';

export default function CaseThread({ groupId, week, uid, members }: { groupId: string; week: number; uid: string; members: Profile[] }) {
  const [posts, setPosts] = useState<CasePost[]>([]);
  const [body, setBody] = useState('');

  const load = useCallback(async () => {
    const { data } = await supabase.from('case_posts').select('*').eq('group_id', groupId).eq('week', week).order('created_at');
    setPosts((data ?? []) as CasePost[]);
  }, [groupId, week]);

  useEffect(() => {
    load();
  }, [load]);

  async function post() {
    if (fail((await supabase.from('case_posts').insert({ group_id: groupId, week, body })).error)) return;
    setBody('');
    load();
  }
  async function remove(id: string) {
    await supabase.from('case_posts').delete().eq('id', id);
    load();
  }

  return (
    <div>
      {posts.length === 0 && <p className="muted small">No posts yet. Write your answer before reading anyone else's.</p>}
      {posts.map((p) => (
        <div className="post" key={p.id}>
          <div className="meta">
            {nameOf(members, p.author_id)} · {new Date(p.created_at).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' })}
            {p.author_id === uid && (
              <>
                {' · '}
                <button className="link small" onClick={() => remove(p.id)}>
                  delete
                </button>
              </>
            )}
          </div>
          <p>{p.body}</p>
        </div>
      ))}
      <label>
        Your take
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="What would you recommend, and why?" />
      </label>
      <button disabled={!body.trim()} onClick={post}>
        Post to group
      </button>
    </div>
  );
}
