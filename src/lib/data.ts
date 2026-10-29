import { useCallback, useEffect, useState } from 'react';
import { supabase } from './supabase';
import type { Profile, Progress, Week } from './types';

export function defaultProgress(user_id: string, week: number): Progress {
  return { user_id, week, status: 'Not started', hours_planned: 10, hours_actual: null, deliverable_done: false, score: null };
}

export function fail(error: { message: string } | null) {
  if (error) alert(error.message);
  return Boolean(error);
}

/** Shared syllabus merged with this user's own elective choices. */
export function useSyllabus(uid: string) {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const { data: base } = await supabase.from('weeks').select('*').order('week');
    const { data: mine } = await supabase.from('elective_choices').select('*').eq('user_id', uid);
    const overrides = new Map((mine ?? []).map((o) => [o.week as number, o]));
    setWeeks(
      ((base ?? []) as Week[]).map((w) => {
        const o = overrides.get(w.week);
        return o ? { ...w, ...pick(o), customised: true } : w;
      }),
    );
    setLoading(false);
  }, [uid]);

  useEffect(() => {
    load();
  }, [load]);

  return { weeks, loading, reload: load };
}

function pick(o: Record<string, string>) {
  const out: Partial<Week> = {};
  for (const k of ['module', 'lectures', 'reading', 'case_exercise', 'deliverable'] as const) if (o[k]) out[k] = o[k];
  return out;
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
