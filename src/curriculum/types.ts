export type TaskKind = 'watch' | 'read' | 'do' | 'discuss';

export interface Task {
  kind: TaskKind;
  title: string;
  minutes: number;
  url?: string;
  detail?: string;
}

export interface Session {
  title: string;
  tasks: Task[];
}

export interface Lesson {
  week: number;
  /** One-line summary used on the dashboard, weeks list and reminders */
  brief: { watch: string; read: string; do: string; deliverable: string };
  /** Why this week matters, in plain English */
  why: string;
  objectives: string[];
  sessions: Session[];
  exercise: { title: string; steps: string[]; output: string };
  discuss: string;
  check: string[];
  terms: { term: string; def: string }[];
  cards: { front: string; back: string }[];
  deeper?: { title: string; url?: string }[];
}

export const watch = (title: string, minutes: number, url?: string, detail?: string): Task => ({ kind: 'watch', title, minutes, url, detail });
export const read = (title: string, minutes: number, url?: string, detail?: string): Task => ({ kind: 'read', title, minutes, url, detail });
export const doIt = (title: string, minutes: number, url?: string, detail?: string): Task => ({ kind: 'do', title, minutes, url, detail });
export const discuss = (title: string, minutes: number, detail?: string): Task => ({ kind: 'discuss', title, minutes, detail });
