import type { Flashcard } from './types';

/** SM-2 spaced repetition. quality: 1 again · 3 hard · 4 good · 5 easy */
export function review(card: Flashcard, quality: number) {
  let { ease, interval_days, reps } = card;
  if (quality < 3) {
    reps = 0;
    interval_days = 1;
  } else {
    reps += 1;
    interval_days = reps === 1 ? 1 : reps === 2 ? 6 : Math.round(interval_days * ease);
    ease = Math.max(1.3, ease + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  }
  const due = new Date();
  due.setDate(due.getDate() + interval_days);
  return { ease: Number(ease.toFixed(2)), interval_days, reps, due: due.toISOString().slice(0, 10) };
}
