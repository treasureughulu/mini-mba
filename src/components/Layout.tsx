import type { ReactNode } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useMe } from '../lib/auth';
import { clampWeek, currentWeek } from '../lib/programme';
import Avatar from './Avatar';

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

export const ICONS = {
  home: icon(<path d="M3 11l9-8 9 8M5 10v10h14V10" />),
  weeks: icon(<path d="M4 5h16M4 12h16M4 19h16" />),
  calendar: icon(<path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" />),
  library: icon(<path d="M5 4h6v16H5zM13 4h6v16h-6z" />),
  cards: icon(<path d="M4 7h13v13H4zM8 3h12v13" />),
  extras: icon(<path d="M12 3l2.7 5.6 6.3.9-4.5 4.4 1 6.1L12 17.2 6.5 20l1-6.1L3 9.5l6.3-.9z" />),
  electives: icon(<path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M6 14v6" />),
  group: icon(<path d="M16 20v-2a4 4 0 00-8 0v2M12 11a3 3 0 100-6 3 3 0 000 6zM21 20v-2a4 4 0 00-3-3.9M3 20v-2a4 4 0 013-3.9" />),
  profile: icon(<path d="M20 21v-2a5 5 0 00-5-5H9a5 5 0 00-5 5v2M12 11a4 4 0 100-8 4 4 0 000 8z" />),
  search: icon(<path d="M11 18a7 7 0 100-14 7 7 0 000 14zM20 20l-4-4" />),
};

const links: [string, string, ReactNode][] = [
  ['/', 'Home', ICONS.home],
  ['/weeks', 'Weeks', ICONS.weeks],
  ['/calendar', 'Calendar', ICONS.calendar],
  ['/library', 'Library', ICONS.library],
  ['/flashcards', 'Flashcards', ICONS.cards],
  ['/extras', 'Co-curricular', ICONS.extras],
  ['/electives', 'My electives', ICONS.electives],
  ['/group', 'Study group', ICONS.group],
  ['/profile', 'Profile', ICONS.profile],
];

const tabs: [string, string, ReactNode][] = [
  ['/', 'Home', ICONS.home],
  ['/weeks', 'Weeks', ICONS.weeks],
  ['/extras', 'Extras', ICONS.extras],
  ['/group', 'Group', ICONS.group],
  ['/profile', 'Profile', ICONS.profile],
];

export default function Layout() {
  const { profile } = useMe();
  const week = clampWeek(currentWeek(profile.start_date));
  return (
    <div className="shell">
      <nav className="sidebar" aria-label="Main">
        <div className="brand">
          <span>mini</span> MBA
        </div>
        <NavLink to={`/weeks/${week}`} className="this-week">
          This week: Week {week}
        </NavLink>
        {links.map(([to, label, svg]) => (
          <NavLink key={to} to={to} end={to === '/'} className="nav-link">
            {svg}
            {label}
          </NavLink>
        ))}
        <Link to="/profile" className="sidebar-foot">
          <Avatar person={profile} size="sm" />
          {profile.display_name}
        </Link>
      </nav>
      <main className="content">
        <Outlet />
      </main>
      <nav className="tabbar" aria-label="Main">
        {tabs.map(([to, label, svg]) => (
          <NavLink key={to} to={to} end={to === '/'} className="tab">
            {svg}
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
