export const TOTAL_WEEKS = 48;
const DAY = 864e5;

function parse(date: string) {
  return new Date(date + 'T00:00:00');
}

export function weekStart(start: string, week: number) {
  const d = parse(start);
  d.setDate(d.getDate() + 7 * (week - 1));
  return d;
}

/** Raw programme week for today: < 1 before start, > 48 after the end. */
export function currentWeek(start: string, today = new Date()) {
  return Math.floor((today.getTime() - parse(start).getTime()) / (7 * DAY)) + 1;
}

export function clampWeek(w: number) {
  return Math.min(Math.max(w, 1), TOTAL_WEEKS);
}

export function fmtDate(d: Date) {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

export function weekRange(start: string, week: number) {
  const s = weekStart(start, week);
  const e = new Date(s.getTime() + 6 * DAY);
  return `${fmtDate(s)} – ${fmtDate(e)}`;
}

/** Consecutive weeks marked Done, ending at the current week (or the one before it). */
export function streak(done: Set<number>, current: number) {
  let w = done.has(current) ? current : current - 1;
  let n = 0;
  while (w >= 1 && done.has(w)) {
    n++;
    w--;
  }
  return n;
}

/** CSS class for a status ("In progress" → "in-progress"). */
export function statusClass(s: string) {
  return s === 'In progress' ? 'in-progress' : s.replace(' ', '-');
}

export function today() {
  return new Date().toISOString().slice(0, 10);
}
