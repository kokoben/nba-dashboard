import { Route, Routes } from 'react-router';
import AppLayout from '@/layouts/AppLayout';
import Dashboard from '@/features/dashboard/views/Dashboard';
import TeamPage from '@/features/team/views/TeamPage';
import NotFound from '@/views/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='/teams/:teamId' element={<TeamPage />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App;
