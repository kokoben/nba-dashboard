import { Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppLayout from '@/layouts/AppLayout';
import Dashboard from '@/features/dashboard/views/Dashboard';
import TeamPage from '@/features/team/views/TeamPage';
import NotFound from '@/views/NotFound';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/teams/:teamId' element={<TeamPage />} />
          <Route path='/teams/:teamId/players/:playerId/details' element={<TeamPage />} />
          <Route path='/teams/:teamId/players/:playerId/stats' element={<TeamPage />}/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  )
}

export default App;
