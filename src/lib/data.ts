import { useCallback, useEffect, useState } from 'react';
import { supabase } from './supabase';
import type { Profile, Progress, Week } from './types';
import { lessonFor } from '../curriculum';
import { useAuth } from './auth';

export function defaultProgress(user_id: string, week: number): Progress {
  return { user_id, week, status: 'Not started', hours_planned: 4, hours_actual: null, deliverable_done: false, score: null };
}

export function fail(error: { message: string } | null) {
  if (error) alert(error.message);
  return Boolean(error);
}

/** The 48 weeks for this person, using the elective tracks they chose. */
export function useSyllabus(_uid: string) {
  const { profile } = useAuth();
  const tracks = profile?.elective_tracks;
  const [base, setBase] = useState<Week[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('weeks')
      .select('*')
      .order('week')
      .then(({ data }) => {
        setBase((data ?? []) as Week[]);
        setLoading(false);
      });
  }, []);

  // The curriculum in src/curriculum supersedes the summary stored in the database
  const weeks = base.map((w) => {
    const l = lessonFor(w.week, tracks);
    return l ? { ...w, module: l.module, lectures: l.brief.watch, reading: l.brief.read, case_exercise: l.brief.do, deliverable: l.brief.deliverable } : w;
  });

  return { weeks, loading };
}

export function useProgress(uid: string) {
  const [progress, setProgress] = useState<Map<number, Progress>>(new Map());

  const load = useCallback(async () => {
    const { data } = await supabase.from('progress').select('*').eq('user_id', uid);
    setProgress(new Map(((data ?? []) as Progress[]).map((p) => [p.week, normalise(p)])));
  }, [uid]);

  useEffect(() => {
    load();
  }, [load]);

  const get = useCallback((week: number) => progress.get(week) ?? defaultProgress(uid, week), [progress, uid]);

  const save = useCallback(
    async (week: number, patch: Partial<Progress>) => {
      const row = { ...get(week), ...patch, user_id: uid, week, updated_at: new Date().toISOString() };
      setProgress((m) => new Map(m).set(week, row));
      fail((await supabase.from('progress').upsert(row)).error);
    },
    [get, uid],
  );

  return { progress, get, save, reload: load };
}

// numeric columns arrive as strings from PostgREST
export function normalise(p: Progress): Progress {
  return {
    ...p,
    hours_planned: Number(p.hours_planned),
    hours_actual: p.hours_actual == null ? null : Number(p.hours_actual),
  };
}

export function useGroupMembers(groupId: string | null) {
  const [members, setMembers] = useState<Profile[]>([]);
  useEffect(() => {
    if (!groupId) return setMembers([]);
    supabase
      .from('profiles')
      .select('*')
      .eq('group_id', groupId)
      .order('display_name')
      .then(({ data }) => setMembers((data ?? []) as Profile[]));
  }, [groupId]);
  return members;
}

export function nameOf(members: Profile[], id: string) {
  return members.find((m) => m.id === id)?.display_name || 'Member';
}
