import { useState } from 'react';
import { useMe } from '../lib/auth';
import { supabase } from '../lib/supabase';
import { fail } from '../lib/data';

function PasswordCard() {
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [msg, setMsg] = useState('');

  async function save() {
    if (pw !== pw2) return setMsg("Passwords don't match.");
    const { error } = await supabase.auth.updateUser({ password: pw });
    if (fail(error)) return;
    setPw('');
    setPw2('');
    setMsg('Password saved. Next time, sign in with your email and this password.');
  }

  return (
    <div className="card narrow" style={{ maxWidth: 520 }}>
      <h2>Password</h2>
      <p className="muted small">Set a password so you can sign in without an email link. You stay signed in on each device until you sign out.</p>
      <label>
        New password (at least 8 characters)
        <input type="password" autoComplete="new-password" value={pw} onChange={(e) => setPw(e.target.value)} />
      </label>
      <label>
        Confirm password
        <input type="password" autoComplete="new-password" value={pw2} onChange={(e) => setPw2(e.target.value)} />
      </label>
      <div className="row">
        <button disabled={pw.length < 8} onClick={save}>
          Save password
        </button>
        {msg && <span className="small">{msg}</span>}
      </div>
    </div>
  );
}

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
      <PasswordCard />
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
