import { useState, type FormEvent } from 'react';
import { supabase } from '../lib/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError('');
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin + window.location.pathname },
    });
    setBusy(false);
    if (error) setError(error.message);
    else setSent(true);
  }

  return (
    <div className="center-screen">
      <div className="card narrow">
        <h1>
          Mini MBA <span style={{ color: 'var(--accent)' }}>Canvas</span>
        </h1>
        <p className="muted">A 48-week programme modelled on the London Business School MBA.</p>
        {sent ? (
          <p>
            Check <strong>{email}</strong> for a sign-in link. You can close this tab.
          </p>
        ) : (
          <form onSubmit={submit}>
            <label>
              Email
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </label>
            <button disabled={busy}>{busy ? 'Sending…' : 'Email me a sign-in link'}</button>
            {error && <p style={{ color: 'var(--behind)' }}>{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
