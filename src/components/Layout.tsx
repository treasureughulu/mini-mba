import { NavLink, Outlet } from 'react-router-dom';
import { useMe } from '../lib/auth';
import { clampWeek, currentWeek } from '../lib/programme';

const links = [
  ['/', 'Dashboard'],
  ['/weeks', 'Weeks'],
  ['/calendar', 'Calendar'],
  ['/library', 'Library'],
  ['/flashcards', 'Flashcards'],
  ['/electives', 'My electives'],
  ['/group', 'Study group'],
  ['/settings', 'Settings'],
] as const;

export default function Layout() {
  const { profile } = useMe();
  const week = clampWeek(currentWeek(profile.start_date));
  return (
    <div className="shell">
      <nav className="sidebar">
        <div className="brand">
          Mini MBA <span>Canvas</span>
        </div>
        <NavLink to={`/weeks/${week}`} className="this-week">
          This week → Week {week}
        </NavLink>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === '/'} className="nav-link">
            {label}
          </NavLink>
        ))}
        <div className="sidebar-foot muted">{profile.display_name}</div>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
