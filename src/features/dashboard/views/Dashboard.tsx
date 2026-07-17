import { Link } from 'react-router';
import styles from '@/features/dashboard/views/Dashboard.module.css'
import { TEAMS, type Team } from '@/constants';

function Dashboard() {
  return (
    <>
      <div className={styles['teams-grid']}>
        {TEAMS.map((team: Team) => (
          <Link key={team.id} to={`/teams/${team.id}`}>
            <img
              className={styles['team-logo']}
              src={team.logoSrc}
              alt={team.alt}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Dashboard;
