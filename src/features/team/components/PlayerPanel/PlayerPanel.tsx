import styles from '@/features/team/components/PlayerPanel.module.scss';

type PlayerPanelProps = {
  isOpen: boolean,
  closePanel: () => void,
}

function PlayerPanel({isOpen, closePanel}: PlayerPanelProps) {
  const overlayClassNames: string = [
    styles['overlay'],
    isOpen ? styles['overlay-is-open']: '',
  ].join(' ');

  const panelClassNames: string = [
    styles['player-panel-wrapper'],
    isOpen ? styles['player-panel-wrapper-is-open']: '',
  ].join(' ')

  return (
    <>
      <div
        className={overlayClassNames}
        aria-hidden='true'
        onClick={closePanel}
      />
      <div
        id='player-panel'
        className={panelClassNames}
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
    </>
  )
}

export default PlayerPanel;
