import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';
import type { Profile } from './types';

interface AuthState {
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  error: string | null;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthState>({
  session: null,
  profile: null,
  loading: true,
  error: null,
  refreshProfile: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const loadProfile = useCallback(async (uid?: string) => {
    if (!uid) return setProfile(null);
    const { data, error } = await supabase.from('profiles').select('*').eq('id', uid).maybeSingle();
    if (error) setError(`Couldn't load your profile: ${error.message}`);
    else if (!data) setError('Signed in, but no profile row exists. Re-run 0001_schema.sql in the Supabase SQL Editor, then sign out and in again.');
    else setError(null);
    setProfile((data as Profile) ?? null);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => setError((e) => e ?? 'Supabase took too long to respond. Check that VITE_SUPABASE_URL is your exact Project URL (https://….supabase.co) and the project is not paused.'),
      12000,
    );
    supabase.auth
      .getSession()
      .then(async ({ data, error }) => {
        if (error) setError(`Sign-in check failed: ${error.message}`);
        setSession(data.session);
        await loadProfile(data.session?.user.id);
      })
      .catch((e: unknown) => setError(`Couldn't reach Supabase: ${e instanceof Error ? e.message : String(e)}`))
      .finally(() => {
        clearTimeout(timeout);
        setLoading(false);
      });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      // Defer: calling Supabase inside this callback can deadlock the auth client.
      setTimeout(() => loadProfile(s?.user.id), 0);
    });
    return () => {
      clearTimeout(timeout);
      sub.subscription.unsubscribe();
    };
  }, [loadProfile]);

  const refreshProfile = useCallback(() => loadProfile(session?.user.id), [loadProfile, session]);

  return (
    <AuthContext.Provider value={{ session, profile, loading, error, refreshProfile }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

/** For pages behind the auth gate: session and profile are guaranteed. */
export function useMe() {
  const { session, profile, refreshProfile } = useContext(AuthContext);
  return { uid: session!.user.id, email: session!.user.email ?? '', profile: profile!, refreshProfile };
}
