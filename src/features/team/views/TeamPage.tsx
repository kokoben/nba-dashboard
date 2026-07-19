import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getTeamRoster, type Athlete, type Team } from '@/features/team/api';
import NotFound from '@/views/NotFound';
import RosterCard from '@/features/team/components/RosterCard';
import styles from '@/features/team/views/TeamPage.module.css';

function TeamPage() {
  const [roster, setRoster] = useState<Athlete[] | null>(null);
  const [rosterIsLoading, setRosterIsLoading] = useState<boolean>(true);
  const [rosterHasError, setRosterHasError] = useState<boolean>(false);
  const [teamSummary, setTeamSummary] = useState<Team | null>(null);

  const { teamId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRoster() {
      setRosterHasError(false);
      setRosterIsLoading(true);

      try {
        const roster = await getTeamRoster(teamId, controller.signal);

        if (roster) {
          setRoster(roster.athletes);
          setTeamSummary(roster.team)
        }
      } catch (e) {
        if (e instanceof DOMException && e.name === 'AbortError') {
          return;
        }
        console.error(e);

        setRosterHasError(true);
      } finally {
        if (!controller.signal.aborted) {
          setRosterIsLoading(false);
        }
      }
    }

    void fetchRoster();
  }, [teamId])

  return (
    <>
      {rosterIsLoading ? (
        <div>Loading...</div>
      ) : rosterHasError ? (
        <div>An error occurred</div>
      ) : !teamId || roster === null ? (
        <NotFound />
      ) : (
        <>
          <h2>{teamSummary === null ? 'Unknown Team' : teamSummary.displayName}</h2>
          <div className={styles['roster-grid']}>
            {roster.map((athlete: Athlete) => {
              return (
                <RosterCard
                  key={athlete.id}
                  athlete={athlete}
                />
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default TeamPage;
