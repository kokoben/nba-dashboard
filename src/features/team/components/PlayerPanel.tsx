import styles from '@/features/team/components/PlayerPanel.module.scss';

type PlayerPanelProps = {
  isOpen: boolean,
  closePanel: () => void,
}

function PlayerPanel({isOpen, closePanel}: PlayerPanelProps) {
  const classNames: string = [
    styles['player-panel-wrapper'],
    isOpen ? styles['player-panel-wrapper-is-open']: '',
  ].join(' ')

  return (
    <div
      id='player-panel'
      className={classNames}
      inert={!isOpen}
    >
      <div>
        placeholder
      </div>
      <button
        type='button'
        onClick={closePanel}
      >
        Close
      </button>
    </div>
  )
}

export default PlayerPanel;
