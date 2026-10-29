import { useState } from 'react';
import { useMe } from '../lib/auth';
import { supabase } from '../lib/supabase';
import { fail } from '../lib/data';
import GroupJoin from '../components/GroupJoin';

export default function Onboarding() {
  const { uid, profile, refreshProfile } = useMe();
  const [name, setName] = useState(profile.display_name ?? '');
  const [start, setStart] = useState(profile.start_date);
  const [step, setStep] = useState<1 | 2>(1);

  async function saveBasics() {
    const { error } = await supabase.from('profiles').update({ display_name: name, start_date: start }).eq('id', uid);
    if (!fail(error)) setStep(2);
  }
  async function finish() {
    const { error } = await supabase.from('profiles').update({ onboarded: true }).eq('id', uid);
    if (!fail(error)) refreshProfile();
  }

  return (
    <div className="center-screen">
      <div className="card" style={{ maxWidth: 640, width: '100%' }}>
        <p className="muted small">Step {step} of 2</p>
        {step === 1 ? (
          <>
            <h1>Welcome</h1>
            <p className="muted">Two quick details and you're in.</p>
            <label>
              Your name (shown to your study group)
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Programme start date (pick a Monday)
              <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
            </label>
            <button disabled={!name.trim() || !start} onClick={saveBasics}>
              Continue
            </button>
          </>
        ) : (
          <>
            <h1>Study group</h1>
            <p className="muted">
              Your group sees your progress and streaks only. Notes stay private; you choose which deliverables to share for feedback.
            </p>
            <GroupJoin onDone={finish} />
            <p style={{ marginTop: 20 }}>
              <button className="ghost" onClick={finish}>
                Skip for now
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
