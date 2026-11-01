import { useState, type FormEvent } from 'react';
import { supabase } from '../lib/supabase';

type Mode = 'password' | 'link';

export default function Login() {
  const [mode, setMode] = useState<Mode>('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError('');
    if (mode === 'password') {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message === 'Invalid login credentials' ? 'Wrong email or password. First time here? Use "Email me a link" below, then set a password in Settings.' : error.message);
    } else {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: window.location.origin + window.location.pathname },
      });
      if (error) setError(error.message);
      else setSent(true);
    }
    setBusy(false);
  }

  return (
    <div className="center-screen">
      <div className="card narrow">
        <div className="brand" style={{ padding: '0 0 12px', fontSize: 30 }}>
          <span>mini</span> MBA
        </div>
        <p className="muted">A 48-week programme modelled on the London Business School MBA.</p>
        {sent ? (
          <p>
            Check <strong>{email}</strong> for a sign-in link. Open it in this same browser.
          </p>
        ) : (
          <form onSubmit={submit}>
            <label>
              Email
              <input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </label>
            {mode === 'password' && (
              <label>
                Password
                <input type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>
            )}
            <button disabled={busy}>{busy ? 'One moment…' : mode === 'password' ? 'Sign in' : 'Email me a sign-in link'}</button>
            {error && <p style={{ color: 'var(--behind)' }}>{error}</p>}
            <p className="small" style={{ marginTop: 16 }}>
              {mode === 'password' ? (
                <>
                  First time, or forgot your password?{' '}
                  <button type="button" className="link" onClick={() => setMode('link')}>
                    Email me a link instead
                  </button>
                </>
              ) : (
                <button type="button" className="link" onClick={() => setMode('password')}>
                  ← Sign in with a password
                </button>
              )}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
