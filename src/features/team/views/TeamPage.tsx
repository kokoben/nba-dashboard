import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getTeamRoster, type TeamRosterResp, type Athlete } from '@/features/team/api';
import NotFound from '@/views/NotFound';
import PlayerCard from '@/features/team/components/PlayerCard/PlayerCard';
import PlayerPanel from '@/features/team/components/PlayerPanel/PlayerPanel';
import CustomInput from '@/components/CustomInput/CustomInput';
import styles from '@/features/team/views/TeamPage.module.scss';

function TeamPage() {
  const navigate = useNavigate();
  const { teamId, playerId } = useParams();

  // state
  const [roster, setRoster] = useState<TeamRosterResp | null>(null);
  const [rosterIsLoading, setRosterIsLoading] = useState<boolean>(true);
  const [rosterHasError, setRosterHasError] = useState<boolean>(false);
  const [searchPlayersInput, setSearchPlayersInput] = useState<string>('');

  // derived values
  const filteredAthletes: Athlete[] = roster?.athletes?.filter((athlete: Athlete) => {
    return athlete.fullName.toLocaleLowerCase().trim()
      .includes(searchPlayersInput.toLocaleLowerCase().trim());
  }) ?? [];

  const panelPlayerId: number | null = playerId ? Number(playerId) : null;

  const selectedAthlete: Athlete | undefined = roster?.athletes
    .find((athlete: Athlete) => Number(athlete.id) === panelPlayerId);

  const playerNoun: string = filteredAthletes.length === 1 ? 'player' : 'players';
  const playersFoundText: string = searchPlayersInput.trim().length
    ? `${filteredAthletes.length} ${playerNoun} found` : '';

  // effects
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

  // event handlers
  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchPlayersInput(event.target.value);
  }

  function viewDetails(athleteId: number): void {
    navigate(`/teams/${teamId}/players/${athleteId}/details`);
  }

  function closePanel(): void {
    // if the user closes the panel, then hitting back will work as expected and
    // bring them back to the page they were on before the team page.
    // if navigate(-1) was not called, then closing the panel would add TeamPage
    // to the history stack, forcing the user to have to hit the browser back button
    // twice to actually go back to the page before the team page.
    navigate(-1);
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
      {selectedAthlete && <PlayerPanel
        isOpen={panelPlayerId !== null}
        athleteData={selectedAthlete}
        closePanel={closePanel}
        />}
    </>
  )
}

export default TeamPage;
