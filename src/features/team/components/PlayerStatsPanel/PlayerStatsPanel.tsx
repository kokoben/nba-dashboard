import { useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import styles from '@/features/team/components/PlayerStatsPanel/PlayerStatsPanel.module.scss';
import { kebabToTitleCase } from '@/helpers';
import {
  getPlayerStats,
  type Athlete,
  type Statistic,
} from '@/features/team/api';
import CustomButton from '@/components/CustomButton/CustomButton';
// import type { Athlete } from '../../api';

type PlayerStatsPanelProps = {
  isOpen: boolean,
  athleteData: Athlete,
  closePanel: () => void,
}

function PlayerStatsPanel({isOpen, athleteData, closePanel}: PlayerStatsPanelProps) {
  // queries
  const { status: statsStatus, data: stats } = useQuery({
    queryKey: ['player-stats', athleteData.id],
    queryFn: ({ signal }) => getPlayerStats(athleteData.id, 'regular', signal),
    enabled: isOpen,
  });

  // state
  const dialogRef = useRef<HTMLDialogElement| null>(null);

  // effects
  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  // functions
  function requestClose(): void {
    dialogRef.current?.close();
  }

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
      {statsStatus === 'pending'
        ? 'Loading...' :
        statsStatus === 'error'
        ? 'An error occurred' :
        stats?.categories ?
        <>
          <h3 className={styles['table-header']}>Regular Season</h3>
          <table className={styles['stats-table']}>
            <thead>
              <tr>
                <th>Season</th>
                <th>Team</th>
                {stats.categories[0].labels.map((label: string) => {
                  return (<th key={label}>{label}</th>)
                })}
              </tr>
            </thead>
            <tbody>
              {stats.categories[0].statistics
                // filter out the rows that represent totals for combined seasons
                .filter((stat: Statistic) => !stat.teamSlug.includes('Total'))
                .map((stat: Statistic) => {
                return (
                  <tr key={stat.season.displayName}>
                    <td>{stat.season.displayName}</td>
                    <td>{kebabToTitleCase(stat.teamSlug)}</td>
                    {stat.stats.map((stat: string, statIdx: number) => {
                      return (<td key={`${statIdx}-${stat}`}>{stat}</td>)
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
          <h3 className={styles['table-header']}>Playoffs</h3>
          <table className={styles['stats-table']}>
            <thead>
              <tr>
                <th>Season</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
          </table>
        </> : 'No regular season stats found'}
    </dialog>
  )
}

export default PlayerStatsPanel;