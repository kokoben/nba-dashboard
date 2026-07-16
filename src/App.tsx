import { Route, Routes } from 'react-router';
import Dashboard from '@/features/dashboard/views/Dashboard';
import TeamPage from '@/features/team/views/TeamPage';
import styles from '@/App.module.css';

function App() {
  return (
    <>
      <header>
        <h1>NBA Dashboard</h1>
      </header>

      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/teams/:teamId' element={<TeamPage />} />
      </Routes>
    </>
  )
}

export default App;
