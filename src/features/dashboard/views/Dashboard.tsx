import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { TEAMS, type Team } from '@/constants';
import { getTeams, type TeamsResp } from '@/features/dashboard/api';
import styles from '@/features/dashboard/views/Dashboard.module.css'

function Dashboard() {
  const [teamsResp, setTeamsResp] = useState<TeamsResp | null>(null);
  const [teamsIsLoading, setTeamsIsLoading] = useState<boolean>(true);
  const [teamsHasError, setTeamsHasError] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchTeams() {
      setTeamsHasError(false);
      setTeamsIsLoading(true);

      try {
        const resp = await getTeams(controller.signal);
        setTeamsResp(resp)
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') {
          return;
        }
        console.error(e);

        setTeamsHasError(true)
      } finally {
        if (!controller.signal.aborted) {
          setTeamsIsLoading(false);
        }
      }
    }

    void fetchTeams();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className={styles['teams-grid']}>
        {TEAMS.map((team: Team) => (
          <Link key={team.id} to={`/teams/${team.id}`}>
            <img
              className={styles['team-logo']}
              src={team.logoSrc}
              alt={team.name}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default Dashboard;
