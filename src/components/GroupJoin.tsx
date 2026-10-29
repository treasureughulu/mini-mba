import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { fail } from '../lib/data';

/** Create a study group or join one with an invite code. */
export default function GroupJoin({ onDone }: { onDone: () => void }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [busy, setBusy] = useState(false);

  async function create() {
    setBusy(true);
    const { error } = await supabase.rpc('create_group', { p_name: name });
    setBusy(false);
    if (!fail(error)) onDone();
  }
  async function join() {
    setBusy(true);
    const { error } = await supabase.rpc('join_group', { p_code: code });
    setBusy(false);
    if (!fail(error)) onDone();
  }

  return (
    <div className="grid grid-2">
      <div>
        <h3>Start a group</h3>
        <label>
          Group name
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. London Mini MBA 2026" />
        </label>
        <button disabled={busy || !name.trim()} onClick={create}>
          Create group
        </button>
      </div>
      <div>
        <h3>Join with a code</h3>
        <label>
          Invite code
          <input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="8 characters" />
        </label>
        <button disabled={busy || code.trim().length < 6} onClick={join}>
          Join group
        </button>
      </div>
    </div>
  );
}
