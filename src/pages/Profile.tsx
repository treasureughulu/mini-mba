import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMe } from '../lib/auth';
import { supabase } from '../lib/supabase';
import { fail, useProgress } from '../lib/data';
import { clampWeek, currentWeek, streak } from '../lib/programme';
import Avatar from '../components/Avatar';

const MENU: [string, string][] = [
  ['/calendar', 'Calendar'],
  ['/library', 'Library'],
  ['/flashcards', 'Flashcards'],
  ['/electives', 'My electives'],
  ['/settings', 'Settings and password'],
];

export default function Profile() {
  const { uid, profile, refreshProfile } = useMe();
  const { progress } = useProgress(uid);
  const [headline, setHeadline] = useState(profile.headline ?? '');
  const [bio, setBio] = useState(profile.bio ?? '');
  const [interests, setInterests] = useState((profile.interests ?? []).join(', '));
  const [saved, setSaved] = useState(false);
  const [busy, setBusy] = useState(false);

  const all = [...progress.values()];
  const done = new Set(all.filter((p) => p.status === 'Done').map((p) => p.week));
  const hours = all.reduce((s, p) => s + (p.hours_actual ?? 0), 0);

  async function save() {
    const list = interests.split(',').map((s) => s.trim()).filter(Boolean);
    if (fail((await supabase.from('profiles').update({ headline, bio, interests: list }).eq('id', uid)).error)) return;
    await refreshProfile();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  async function upload(file?: File) {
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) return alert('Please choose a photo under 3 MB.');
    setBusy(true);
    const path = `${uid}/${Date.now()}-${file.name.replace(/[^\w.-]/g, '_')}`;
    const up = await supabase.storage.from('avatars').upload(path, file);
    if (!fail(up.error)) {
      const url = supabase.storage.from('avatars').getPublicUrl(path).data.publicUrl;
      if (!fail((await supabase.from('profiles').update({ avatar_url: url }).eq('id', uid)).error)) await refreshProfile();
    }
    setBusy(false);
  }

  return (
    <div>
      <div className="card" style={{ textAlign: 'center' }}>
        <Avatar person={profile} size="lg" />
        <h1 style={{ marginTop: 12 }}>{profile.display_name}</h1>
        {profile.headline && <p className="muted" style={{ margin: 0 }}>{profile.headline}</p>}
        <label className="btn ghost small" style={{ margin: '12px 0 0', cursor: 'pointer' }}>
          {busy ? 'Uploading…' : 'Change photo'}
          <input type="file" accept="image/*" hidden onChange={(e) => upload(e.target.files?.[0])} />
        </label>
      </div>

      <div className="stat-pair" style={{ gridTemplateColumns: 'repeat(3, 1fr)', margin: '16px 0' }}>
        <div className="stat amber"><div className="label">Weeks done</div><div className="value">{done.size}</div></div>
        <div className="stat dark"><div className="label">Streak</div><div className="value">{streak(done, clampWeek(currentWeek(profile.start_date)))}</div></div>
        <div className="stat amber"><div className="label">Hours</div><div className="value">{hours.toFixed(0)}</div></div>
      </div>

      <div className="card">
        <h2>About me</h2>
        <p className="muted small" style={{ marginTop: 0 }}>Your study group can see this.</p>
        <label>
          Headline
          <input value={headline} onChange={(e) => setHeadline(e.target.value)} placeholder="e.g. Product marketer in London" />
        </label>
        <label>
          Short bio
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
        </label>
        <label>
          Interests, separated by commas
          <input value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="AI, marketing, chess" />
        </label>
        <div className="row">
          <button onClick={save}>Save profile</button>
          {saved && <span className="saved">Saved</span>}
        </div>
      </div>

      <div className="card">
        {MENU.map(([to, label]) => (
          <Link key={to} to={to} className="menu-row">
            {label}
            <span aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
