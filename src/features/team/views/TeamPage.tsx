import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getTeamRoster, type TeamRosterResp, type Athlete } from '@/features/team/api';
import NotFound from '@/views/NotFound';
import PlayerCard from '@/features/team/components/PlayerCard/PlayerCard';
import PlayerPanel from '@/features/team/components/PlayerPanel/PlayerPanel';
import CustomInput from '@/components/CustomInput/CustomInput';
import styles from '@/features/team/views/TeamPage.module.scss';

function TeamPage() {
  const { teamId } = useParams();

  const [roster, setRoster] = useState<TeamRosterResp | null>(null);
  const [rosterIsLoading, setRosterIsLoading] = useState<boolean>(true);
  const [rosterHasError, setRosterHasError] = useState<boolean>(false);
  const [panelPlayerId, setPanelPlayerId] = useState<number | null>(null);
  const [searchPlayersInput, setSearchPlayersInput] = useState<string>('');

  const filteredAthletes: Athlete[] = roster?.athletes?.filter((athlete: Athlete) => {
    return athlete.fullName.toLocaleLowerCase().trim()
      .includes(searchPlayersInput.toLocaleLowerCase().trim());
  }) ?? [];

  const playerNoun: string = filteredAthletes.length === 1 ? 'player' : 'players';
  const playersFoundText: string = searchPlayersInput.trim().length
    ? `${filteredAthletes.length} ${playerNoun} found` : '';

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

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchPlayersInput(event.target.value);
  }

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
          <div className={styles['search-row']}>
            <p
              className={styles['players-found']}
              role='status'
            >
              {playersFoundText}
            </p>
            <CustomInput
              aria-label='Search players'
              type='search'
              placeholder='Search players'
              onChange={handleChangeInput}
              value={searchPlayersInput}
            />
          </div>
          <div className={styles['roster-grid']}>
            {filteredAthletes.length === 0
              ? 'No players found'
              : filteredAthletes.map((athlete: Athlete) => {
              return (
                <PlayerCard
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
