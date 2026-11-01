export type Phase = 'Core' | 'Electives' | 'Capstone';
export type Status = 'Not started' | 'In progress' | 'Done' | 'Behind';
export const STATUSES: Status[] = ['Not started', 'In progress', 'Done', 'Behind'];

export interface Profile {
  id: string;
  display_name: string | null;
  group_id: string | null;
  start_date: string;
  email_reminders: boolean;
  onboarded: boolean;
  headline?: string;
  bio?: string;
  interests?: string[];
  avatar_url?: string | null;
  elective_tracks?: Record<string, string> | null;
}

export interface Group {
  id: string;
  name: string;
  invite_code: string;
  owner_id: string;
}

export interface Week {
  week: number;
  phase: Phase;
  module: string;
  lectures: string;
  reading: string;
  case_exercise: string;
  deliverable: string;
  elective_slot: boolean;
  customised?: boolean;
}

export interface Progress {
  user_id: string;
  week: number;
  status: Status;
  hours_planned: number;
  hours_actual: number | null;
  deliverable_done: boolean;
  score: number | null;
  updated_at?: string;
}

export interface Notes {
  user_id: string;
  week: number;
  takeaway: string;
  body: string;
  reflection: string;
}

export interface Deliverable {
  id: string;
  user_id: string;
  week: number;
  title: string;
  file_path: string;
  shared: boolean;
  created_at: string;
}

export interface Comment {
  id: string;
  deliverable_id: string;
  author_id: string;
  body: string;
  created_at: string;
}

export interface CasePost {
  id: string;
  group_id: string;
  week: number;
  author_id: string;
  body: string;
  created_at: string;
}

export interface Resource {
  id: number;
  title: string;
  author: string | null;
  kind: 'Book' | 'Course' | 'Case' | 'Article';
  url: string | null;
  week: number | null;
}

export interface ResourceStatus {
  user_id: string;
  resource_id: number;
  status: 'To do' | 'In progress' | 'Done';
  rating: number | null;
}

export interface Flashcard {
  id: string;
  user_id: string;
  week: number | null;
  front: string;
  back: string;
  ease: number;
  interval_days: number;
  reps: number;
  due: string;
}
