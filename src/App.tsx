import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './lib/auth';
import { configured } from './lib/supabase';
import Layout from './components/Layout';
import Login from './pages/Login';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Weeks from './pages/Weeks';
import WeekDetail from './pages/WeekDetail';
import Electives from './pages/Electives';
import Library from './pages/Library';
import Flashcards from './pages/Flashcards';
import Calendar from './pages/Calendar';
import Group from './pages/Group';
import Settings from './pages/Settings';

export default function App() {
  const { session, profile, loading } = useAuth();

  if (!configured) {
    return (
      <div className="center-screen">
        <div className="card narrow">
          <h1>Almost there</h1>
          <p>
            Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to a <code>.env</code> file (see{' '}
            <code>.env.example</code> and the README), then restart.
          </p>
        </div>
      </div>
    );
  }
  if (loading || (session && !profile)) return <div className="center-screen muted">Loading…</div>;
  if (!session) return <Login />;
  if (!profile!.onboarded) return <Onboarding />;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="weeks" element={<Weeks />} />
        <Route path="weeks/:week" element={<WeekDetail />} />
        <Route path="electives" element={<Electives />} />
        <Route path="library" element={<Library />} />
        <Route path="flashcards" element={<Flashcards />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="group" element={<Group />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
