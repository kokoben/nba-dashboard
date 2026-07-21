import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getTeamRoster, type TeamRosterResp, type Athlete } from '@/features/team/api';
import NotFound from '@/views/NotFound';
import RosterCard from '@/features/team/components/RosterCard/RosterCard';
import PlayerPanel from '@/features/team/components/PlayerPanel/PlayerPanel';
import styles from '@/features/team/views/TeamPage.module.scss';

function TeamPage() {
  const { teamId } = useParams();

  const [roster, setRoster] = useState<TeamRosterResp | null>(null);
  const [rosterIsLoading, setRosterIsLoading] = useState<boolean>(true);
  const [rosterHasError, setRosterHasError] = useState<boolean>(false);
  const [panelPlayerId, setPanelPlayerId] = useState<number | null>(null);

  useEffect(() => {
    if (!teamId) {
      setRoster(null);
      setRosterIsLoading(false);
      return;
    }

    const controller = new AbortController();

    const localTeamId: string = teamId

    async function fetchRoster() {
      setRosterHasError(false);
      setRosterIsLoading(true);

      try {
        const roster = await getTeamRoster(localTeamId, controller.signal);

        if (roster) {
          setRoster(roster);
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

    return () => {
      controller.abort()
    }
  }, [teamId]);

  function viewDetails(athleteId: number): void {
    setPanelPlayerId(athleteId);
  }

  function closePanel(): void {
    setPanelPlayerId(null);
  }


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
          <h2>{roster.team === null ? 'Unknown Team' : roster.team.displayName}</h2>
          <div className={styles['roster-grid']}>
            {roster.athletes.map((athlete: Athlete) => {
              return (
                <RosterCard
                  key={athlete.id}
                  athlete={athlete}
                  playerPanelIsExpanded={panelPlayerId === Number(athlete.id)}
                  viewDetails={() => viewDetails(Number(athlete.id))}
                />
              )
            })}
          </div>
        </>
      )}
      <PlayerPanel isOpen={panelPlayerId !== null} closePanel={closePanel} />
    </>
  )
}

export default TeamPage;
