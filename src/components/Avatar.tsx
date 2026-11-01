import type { Profile } from '../lib/types';

export default function Avatar({ person, size }: { person: Pick<Profile, 'display_name' | 'avatar_url'>; size?: 'sm' | 'lg' }) {
  const cls = `avatar ${size ?? ''}`;
  if (person.avatar_url) return <img className={cls} src={person.avatar_url} alt="" />;
  return <span className={cls}>{(person.display_name || '?').charAt(0).toUpperCase()}</span>;
}
