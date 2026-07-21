import { type MouseEventHandler } from 'react';
import { type Athlete } from '@/features/team/api';
import styles from '@/features/team/components/RosterCard/RosterCard.module.scss';
import CustomButton from '@/components/CustomButton/CustomButton';

type RosterCardProps = {
  athlete: Athlete,
  playerPanelIsExpanded: boolean,
  viewDetails: MouseEventHandler<HTMLButtonElement>,
}

function RosterCard({ athlete, playerPanelIsExpanded, viewDetails }: RosterCardProps) {
  const formattedDate: string = new Date(athlete.dateOfBirth).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={styles['roster-card-wrapper']}>
      <div className={styles['headshot-and-bio']}>
        <div className={styles['headshot-group']}>
          {athlete.headshot ? (<img
            className={styles['headshot']}
            src={athlete.headshot.href}
            alt={athlete.headshot.alt}
          />) : <div>Headshot Placeholder</div>}
          <CustomButton
            aria-label={`View details for ${athlete.fullName}`}
            aria-controls='player-panel'
            aria-expanded={playerPanelIsExpanded}
            onClick={viewDetails}
          >
            View Details
          </CustomButton>
        </div>
        <div className={styles['bio']}>
          <div>
            <b>Name:</b> {athlete.fullName}
          </div>
          <div>
            <b>Age:</b> {athlete.age}
          </div>
          <div>
            <b>Date of Birth:</b> {formattedDate}
          </div>
          <div>
            <span><b>Birth Place:</b> </span>
            {Object.keys(athlete.birthPlace).length ? (
              <>
                <span>{athlete.birthPlace.city}, </span>
                <span>{athlete.birthPlace.state} </span>
                <span>{athlete.birthPlace.country}</span>
              </>
            ) : <span>N/A</span>}
          </div>
          <div>
            <span><b>Height:</b> </span>
            <span>{athlete.displayHeight}</span>
          </div>
          <div>
            <span><b>Weight:</b> </span>
            <span>{athlete.displayWeight}</span>
          </div>
          <div>
            <span><b>Jersey: </b></span>
            <span>{athlete.jersey ?? 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RosterCard;
