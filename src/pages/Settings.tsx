import { useState } from 'react';
import { useMe } from '../lib/auth';
import { supabase } from '../lib/supabase';
import { fail } from '../lib/data';

export default function Settings() {
  const { uid, email, profile, refreshProfile } = useMe();
  const [name, setName] = useState(profile.display_name ?? '');
  const [start, setStart] = useState(profile.start_date);
  const [reminders, setReminders] = useState(profile.email_reminders);
  const [saved, setSaved] = useState(false);

  async function save() {
    const { error } = await supabase
      .from('profiles')
      .update({ display_name: name, start_date: start, email_reminders: reminders })
      .eq('id', uid);
    if (fail(error)) return;
    await refreshProfile();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  async function leave() {
    if (!confirm('Leave your study group? Your own data stays; you can rejoin with the code.')) return;
    if (!fail((await supabase.rpc('leave_group')).error)) refreshProfile();
  }

  return (
    <div>
      <div className="page-head">
        <h1>Settings</h1>
        <p className="muted">Signed in as {email}</p>
      </div>
      <div className="card narrow" style={{ maxWidth: 520 }}>
        <label>
          Display name
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Programme start date
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        </label>
        <label>
          <input type="checkbox" checked={reminders} onChange={(e) => setReminders(e.target.checked)} />
          Monday email reminder with the week's plan
        </label>
        <div className="row">
          <button onClick={save}>Save</button>
          {saved && <span className="saved">Saved</span>}
        </div>
      </div>
      <div className="card narrow" style={{ maxWidth: 520 }}>
        <h2>Account</h2>
        <div className="row">
          {profile.group_id && (
            <button className="danger" onClick={leave}>
              Leave study group
            </button>
          )}
          <button className="ghost" onClick={() => supabase.auth.signOut()}>
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
