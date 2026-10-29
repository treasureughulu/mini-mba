import { useCallback, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { fail, nameOf } from '../lib/data';
import type { Comment, Profile } from '../lib/types';

export default function Comments({ deliverableId, uid, members }: { deliverableId: string; uid: string; members: Profile[] }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [body, setBody] = useState('');

  const load = useCallback(async () => {
    const { data } = await supabase.from('comments').select('*').eq('deliverable_id', deliverableId).order('created_at');
    setComments((data ?? []) as Comment[]);
  }, [deliverableId]);

  useEffect(() => {
    load();
  }, [load]);

  async function add() {
    if (fail((await supabase.from('comments').insert({ deliverable_id: deliverableId, body })).error)) return;
    setBody('');
    load();
  }
  async function remove(id: string) {
    await supabase.from('comments').delete().eq('id', id);
    load();
  }

  return (
    <div className="thread">
      {comments.map((c) => (
        <div className="post" key={c.id}>
          <div className="meta">
            {nameOf(members, c.author_id)} · {new Date(c.created_at).toLocaleDateString('en-GB')}
            {c.author_id === uid && (
              <>
                {' · '}
                <button className="link small" onClick={() => remove(c.id)}>
                  delete
                </button>
              </>
            )}
          </div>
          <p>{c.body}</p>
        </div>
      ))}
      <div className="row">
        <input value={body} onChange={(e) => setBody(e.target.value)} placeholder="Add feedback…" style={{ flex: 1 }} />
        <button disabled={!body.trim()} onClick={add}>
          Comment
        </button>
      </div>
    </div>
  );
}
