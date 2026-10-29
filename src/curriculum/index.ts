import { core1 } from './core1';
import { core2 } from './core2';
import { electives } from './electives';
import { capstone } from './capstone';
import type { Lesson } from './types';

export const LESSONS: Map<number, Lesson> = new Map([...core1, ...core2, ...electives, ...capstone].map((l) => [l.week, l]));

export function lessonFor(week: number) {
  return LESSONS.get(week);
}

export function lessonMinutes(l: Lesson) {
  return l.sessions.reduce((s, x) => s + x.tasks.reduce((t, k) => t + k.minutes, 0), 0);
}
