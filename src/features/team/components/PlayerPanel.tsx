import styles from '@/features/team/components/PlayerPanel.module.scss';

 type PlayerPanelProps = {
  isOpen: boolean,
}

function PlayerPanel({isOpen}: PlayerPanelProps) {
  return (
    <div
      id='player-panel'
      className={styles['player-panel-wrapper']}
    >
      placeholder
    </div>
  )
}

export default PlayerPanel;
