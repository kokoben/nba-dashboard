import { useQuery } from '@tanstack/react-query';
import styles from '@/features/team/components/PlayerStatsPanel/PlayerStatsPanel.module.scss';
import {
  getPlayerStats,
  type Athlete,
  type Statistic,
  type SeasonType,
  type StatsCategory,
  type SeasonStatsResp,
} from '@/features/team/api';
import CustomButton from '@/components/CustomButton/CustomButton';
import useDialog from '@/hooks/useDialog';

type PlayerStatsPanelProps = {
  isOpen: boolean,
  athleteData: Athlete,
  closePanel: () => void,
}

function PlayerStatsPanel({isOpen, athleteData, closePanel}: PlayerStatsPanelProps) {
  const { dialogRef, requestClose } = useDialog(isOpen);

  // queries
  const { status: regStatsStatus, data: regStats } = useQuery({
    queryKey: ['player-stats', athleteData.id, 'regular'],
    queryFn: ({ signal }) => getPlayerStats(athleteData.id, 'regular', signal),
    enabled: isOpen,
  });

  const { status: postStatsStatus, data: postStats } = useQuery({
    queryKey: ['player-stats', athleteData.id, 'postseason'],
    queryFn: ({ signal }) => getPlayerStats(athleteData.id, 'postseason', signal),
    enabled: isOpen,
  });

  function getTeamNameFromSlug(slug: string, seasonType: SeasonType): string {
    const stats: SeasonStatsResp | undefined | null = seasonType === 'regular'
      ? regStats : postStats;

    return stats?.teams?.[slug]?.displayName ?? 'N/A';
  }

  const regAverages: StatsCategory | null = regStats?.categories
    ?.find((category: StatsCategory) => {
      return category.name === 'averages';
    }) ?? null;

  const postAverages: StatsCategory | null = postStats?.categories
    ?.find((category: StatsCategory) => {
      return category.name === 'averages';
    }) ?? null;


  return (
    <dialog
      ref={dialogRef}
      id='player-stats-panel'
      className={styles['player-stats-panel-wrapper']}
      aria-labelledby='player-stats-panel-title'
      aria-modal='true'
      closedby='any'
      onClose={closePanel}
    >
      <h2 id='player-stats-panel-title'>
        Player Stats: {athleteData.fullName}
      </h2>
      <CustomButton
        autoFocus
        className={styles['close-btn']}
        onClick={requestClose}
      >
        Close
      </CustomButton>
      {regStatsStatus === 'pending'
        ? 'Loading...' :
        regStatsStatus === 'error'
        ? 'An error occurred' :
        regAverages ?
        <>
          <h3 className={styles['table-header']}>{regAverages.displayName}</h3>
          <table className={styles['stats-table']}>
            <thead>
              <tr>
                <th>Season</th>
                <th>Team</th>
                {regAverages.labels.map((label: string) => {
                  return (<th key={label}>{label}</th>)
                })}
              </tr>
            </thead>
            <tbody>
              {regAverages.statistics
                // filter out the rows that represent totals for combined seasons
                .filter((stat: Statistic) => !stat.teamSlug.includes('Total'))
                .map((stat: Statistic) => {
                return (
                  <tr key={`${stat.season.displayName}-${stat.teamSlug}`}>
                    <td>{stat.season.displayName}</td>
                    <td>{getTeamNameFromSlug(stat.teamSlug, 'regular')}</td>
                    {stat.stats.map((stat: string, statIdx: number) => {
                      return (<td key={`${statIdx}-${stat}`}>{stat}</td>)
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </> : <div>No regular season stats found</div>}
        {postStatsStatus === 'pending'
          ? 'Loading...' :
          postStatsStatus === 'error'
          ? 'An error occurred' :
          postAverages ?
          <>
            <h3 className={styles['table-header']}>{postAverages.displayName}</h3>
            <table className={styles['stats-table']}>
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Team</th>
                  {postAverages.labels.map((label: string) => {
                    return (<th key={label}>{label}</th>)
                  })}
                </tr>
              </thead>
              <tbody>
                {postAverages.statistics
                  // filter out the rows that represent totals for combined seasons
                  .filter((stat: Statistic) => !stat.teamSlug.includes('Total'))
                  .map((stat: Statistic) => {
                  return (
                    <tr key={`${stat.season.displayName}-${stat.teamSlug}`}>
                      <td>{stat.season.displayName}</td>
                      <td>{getTeamNameFromSlug(stat.teamSlug, 'postseason')}</td>
                      {stat.stats.map((stat: string, statIdx: number) => {
                        return (<td key={`${statIdx}-${stat}`}>{stat}</td>)
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </> : <div>No postseason stats found</div>}
    </dialog>
  )
}

export default PlayerStatsPanel;