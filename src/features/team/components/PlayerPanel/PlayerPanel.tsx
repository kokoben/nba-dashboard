import { useEffect, useRef } from 'react';
import styles from '@/features/team/components/PlayerPanel/PlayerPanel.module.scss';

type PlayerPanelProps = {
  isOpen: boolean,
  closePanel: () => void,
}

function PlayerPanel({isOpen, closePanel}: PlayerPanelProps) {
  const overlayClassNames: string = [
    styles['overlay'],
    isOpen ? styles['overlay-is-open']: '',
  ].join(' ');

  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      closeBtnRef.current?.focus();
    }
  }, [isOpen]);

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
        role="dialog"
        aria-labelledby='player-panel-title'
        aria-modal='true'
        inert={!isOpen}
      >
        <h2 id='player-panel-title'>Additional Player Details</h2>
        <button
          className={styles['close-btn']}
          type='button'
          ref={closeBtnRef}
          onClick={closePanel}
        >
          Close
        </button>
      </div>
    </>
  )
}

export default PlayerPanel;
