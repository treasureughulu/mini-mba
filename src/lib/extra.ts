import { useCallback, useEffect, useState } from 'react';
import { supabase } from './supabase';
import { fail } from './data';

export interface ExtraProgress {
  user_id: string;
  item_id: string;
  status: 'To do' | 'In progress' | 'Done';
  rating: number | null;
  note: string;
}

/** Books (b01…, x01…) and weekly challenges (act-1…act-48). */
export function useExtra(uid: string) {
  const [items, setItems] = useState<Map<string, ExtraProgress>>(new Map());

  useEffect(() => {
    supabase
      .from('extra_progress')
      .select('*')
      .eq('user_id', uid)
      .then(({ data }) => setItems(new Map(((data ?? []) as ExtraProgress[]).map((r) => [r.item_id, r]))));
  }, [uid]);

  const get = useCallback(
    (id: string): ExtraProgress => items.get(id) ?? { user_id: uid, item_id: id, status: 'To do', rating: null, note: '' },
    [items, uid],
  );

  const save = useCallback(
    async (id: string, patch: Partial<ExtraProgress>) => {
      const row = { ...get(id), ...patch, updated_at: new Date().toISOString() };
      setItems((m) => new Map(m).set(id, row));
      fail((await supabase.from('extra_progress').upsert(row)).error);
    },
    [get],
  );

  return { get, save };
}

export const monthOfWeek = (week: number) => Math.min(12, Math.max(1, Math.floor((week - 1) / 4) + 1));
