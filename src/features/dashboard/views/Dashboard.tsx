import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { TEAMS } from '@/constants';
import { getTeams, type Team } from '@/features/dashboard/api';
import styles from '@/features/dashboard/views/Dashboard.module.scss'
import CustomInput from '@/components/CustomInput/CustomInput';

function getIdFromDisplayName(displayName: string, apiTeams: Team[]): string {
  const targetTeam: Team | undefined = apiTeams.find((team: Team) => {
    return team.displayName == displayName;
  });

  if (!targetTeam) {
    throw new Error(`No api team found for displayName: ${displayName}`);
  }

  return targetTeam.id;
}

function Dashboard() {
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [teamsIsLoading, setTeamsIsLoading] = useState<boolean>(true);
  const [teamsHasError, setTeamsHasError] = useState<boolean>(false);
  const [searchTeamsInput, setSearchTeamsInput] = useState<string>('');

  const filteredTeams = TEAMS.filter(team => {
    return team.name.toLocaleLowerCase().trim()
      .includes(searchTeamsInput.toLocaleLowerCase().trim());
  })

  const teamNoun: string = filteredTeams.length === 1 ? 'team' : 'teams';
  const teamsFoundText: string = searchTeamsInput.trim().length
    ? `${filteredTeams.length} ${teamNoun} found` : '';


  useEffect(() => {
    const controller = new AbortController();

    async function fetchTeams() {
      setTeamsHasError(false);
      setTeamsIsLoading(true);

      try {
        const teamsResp = await getTeams(controller.signal);
        setTeams(teamsResp);
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

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTeamsInput(event.target.value);
  }

  return (
    <>
      {teamsIsLoading ? (
        <div>Loading...</div>
      ) : teamsHasError ? (
        <div>An error occurred</div>
      ) : !teams || !teams.length ? (
        <div>No teams found</div>
      ) : (
        <>
          <div className={styles['search-row']}>
            <p
              className={styles['teams-found']}
              role='status'
            >
              {teamsFoundText}
            </p>
            <CustomInput
              aria-label='Search teams'
              type='search'
              placeholder='Search teams'
              onChange={handleChangeInput}
              value={searchTeamsInput}
            />
          </div>
          <div className={styles['teams-grid']}>
            {filteredTeams.length === 0
              ? 'No teams found'
              : filteredTeams.map((team) => {
              const apiTeamId: string = getIdFromDisplayName(team.name, teams);
              return (
                <Link
                  key={apiTeamId}
                  to={`/teams/${apiTeamId}`}
                >
                  <img
                    className={styles['team-logo']}
                    src={team.logoSrc}
                    alt={team.name}
                  />
                </Link>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default Dashboard;
