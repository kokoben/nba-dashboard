import { useEffect, useRef } from 'react';
import styles from '@/features/team/components/PlayerPanel/PlayerPanel.module.scss';
import CustomButton from '@/components/CustomButton/CustomButton';

type PlayerPanelProps = {
  isOpen: boolean,
  closePanel: () => void,
}

function PlayerPanel({ isOpen, closePanel }: PlayerPanelProps) {
  // state
  const dialogRef = useRef<HTMLDialogElement | null>(null);

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

  return (
    <dialog
      ref={dialogRef}
      id='player-panel'
      className={styles['player-panel-wrapper']}
      aria-labelledby='player-panel-title'
      aria-modal='true' // for firefox compatiblity
      closedby='any'
      onClose={closePanel}
    >
      <h2 id='player-panel-title'>Additional Player Details</h2>
      <CustomButton
        autoFocus
        className={styles['close-btn']}
        onClick={closePanel}
      >
        Close
      </CustomButton>
    </dialog>
  )
}

export default PlayerPanel;
