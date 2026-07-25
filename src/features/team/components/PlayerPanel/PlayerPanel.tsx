import { useEffect, useRef } from 'react';
import { type Athlete, type Contract } from '@/features/team/api';
import styles from '@/features/team/components/PlayerPanel/PlayerPanel.module.scss';
import CustomButton from '@/components/CustomButton/CustomButton';

type PlayerPanelProps = {
  isOpen: boolean,
  athleteData: Athlete,
  closePanel: () => void,
}

const salaryFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

function getFormattedContractDesc(contract: Contract): string {
  const formattedStartDate: string = new Date(contract.season.startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedEndDate: string = new Date(contract.season.endDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `${contract.season.year}: ${salaryFormatter.format(contract.salary)}, ${formattedStartDate} - ${formattedEndDate}`;
}

function PlayerPanel({ isOpen, athleteData, closePanel }: PlayerPanelProps) {
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

  // functions
  function requestClose(): void {
    dialogRef.current?.close();
  }

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
      <h2 id='player-panel-title'>
        Player Details: {athleteData.fullName}
      </h2>
      <CustomButton
        autoFocus
        className={styles['close-btn']}
        onClick={requestClose}
      >
        Close
      </CustomButton>
      <dl className={styles['player-profile']}>
        <div className={styles['profile-row']}>
          <dt className={styles['row-label']}>Status:</dt>
          <dd className={styles['row-value']}>{athleteData.status.name}</dd>
        </div>
        <div className={styles['profile-row']}>
          <dt className={styles['row-label']}>Position:</dt>
          <dd className={styles['row-value']}>{athleteData.position.abbreviation}</dd>
        </div>
        <div className={styles['profile-row']}>
          <dt className={styles['row-label']}>Debut Year:</dt>
          <dd className={styles['row-value']}>{athleteData.debutYear ?? 'N/A'}</dd>
        </div>
        <div className={styles['profile-row']}>
          <dt className={styles['row-label']}>College:</dt>
          <dd className={styles['row-value']}>{athleteData.college?.name ?? 'N/A'}</dd>
        </div>
        <div className={styles['profile-row']}>
          <dt className={styles['row-label']}>Contracts:</dt>
          {athleteData.contracts.length > 0
            ? athleteData.contracts.map((contract: Contract, idx: number) =>
              <dd key={idx} className={styles['contracts']}>
                {getFormattedContractDesc(contract)}
              </dd>
          ) : <dd>None listed</dd>}
        </div>
      </dl>
    </dialog>
  )
}

export default PlayerPanel;
