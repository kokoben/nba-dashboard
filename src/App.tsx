import styles from './App.module.css'
import ATL from '@/assets/teams/ATL.svg';
import BKN from '@/assets/teams/BKN.svg';
import BOS from '@/assets/teams/BOS.svg';
import CHA from '@/assets/teams/CHA.svg';
import CHI from '@/assets/teams/CHI.svg';
import CLE from '@/assets/teams/CLE.svg';
import DAL from '@/assets/teams/DAL.svg';
import DEN from '@/assets/teams/DEN.svg';
import DET from '@/assets/teams/DET.svg';
import GSW from '@/assets/teams/GSW.svg';
import HOU from '@/assets/teams/HOU.svg';
import IND from '@/assets/teams/IND.svg';
import LAC from '@/assets/teams/LAC.svg';
import LAL from '@/assets/teams/LAL.svg';
import MEM from '@/assets/teams/MEM.svg';
import MIA from '@/assets/teams/MIA.svg';
import MIL from '@/assets/teams/MIL.svg';
import MIN from '@/assets/teams/MIN.svg';
import NOP from '@/assets/teams/NOP.svg';
import NYK from '@/assets/teams/NYK.svg';
import OKC from '@/assets/teams/OKC.svg';
import ORL from '@/assets/teams/ORL.svg';
import PHI from '@/assets/teams/PHI.svg';
import PHX from '@/assets/teams/PHX.svg';
import POR from '@/assets/teams/POR.svg';
import SAC from '@/assets/teams/SAC.svg';
import SAS from '@/assets/teams/SAS.svg';
import TOR from '@/assets/teams/TOR.svg';
import UTA from '@/assets/teams/UTA.svg';
import WAS from '@/assets/teams/WAS.svg';

function App() {

  return (
    <>
      <header>
        <h1>NBA Dashboard</h1>
      </header>
      <div className={styles['teams-grid']}>
        <img
          className={styles['team-logo']}
          src={ATL} alt='Atlanta Hawks'
        />
        <img
          src={BKN} alt='Brooklyn Nets'
          className={styles['team-logo']}
        />
        <img
          src={BOS} alt='Boston Celtics'
          className={styles['team-logo']}
        />
        <img
          src={CHA} alt='Charlotte Hornets'
          className={styles['team-logo']}
        />
        <img
          src={CHI} alt='Chicago Bulls'
          className={styles['team-logo']}
        />
        <img
          src={CLE} alt='Cleveland Cavaliers'
          className={styles['team-logo']}
        />
        <img
          src={DAL} alt='Dallas Mavericks'
          className={styles['team-logo']}
        />
        <img
          src={DEN} alt='Denver Nuggets'
          className={styles['team-logo']}
        />
        <img
          src={DET} alt='Detroit Pistons'
          className={styles['team-logo']}
        />
        <img
          src={GSW} alt='Golden State Warriors'
          className={styles['team-logo']}
        />
        <img
          src={HOU} alt='Houston Rockets'
          className={styles['team-logo']}
        />
        <img
          src={IND} alt='Indiana Pacers'
          className={styles['team-logo']}
        />
        <img
          src={LAC} alt='Los Angeles Clippers'
          className={styles['team-logo']}
        />
        <img
          src={LAL} alt='Los Angeles Lakers'
          className={styles['team-logo']}
        />
        <img
          src={MEM} alt='Memphis Grizzlies'
          className={styles['team-logo']}
        />
        <img
          src={MIA} alt='Miami Heat'
          className={styles['team-logo']}
        />
        <img
          src={MIL} alt='Milwaukee Bucks'
          className={styles['team-logo']}
        />
        <img
          src={MIN} alt='Minnesota Timberwolves'
          className={styles['team-logo']}
        />
        <img
          src={NOP} alt='New Orleans Pelicans'
          className={styles['team-logo']}
        />
        <img
          src={NYK} alt='New York Knicks'
          className={styles['team-logo']}
        />
        <img
          src={OKC} alt='Oklahoma City Thunder'
          className={styles['team-logo']}
        />
        <img
          src={ORL} alt='Orlando Magic'
          className={styles['team-logo']}
        />
        <img
          src={PHI} alt='Philadelphia 76ers'
          className={styles['team-logo']}
        />
        <img
          src={PHX} alt='Phoenix Suns'
          className={styles['team-logo']}
        />
        <img
          src={POR} alt='Portland Trail Blazers'
          className={styles['team-logo']}
        />
        <img
          src={SAC} alt='Sacramento Kings'
          className={styles['team-logo']}
        />
        <img
          src={SAS} alt='San Antonio Spurs'
          className={styles['team-logo']}
        />
        <img
          src={TOR} alt='Toronto Raptors'
          className={styles['team-logo']}
        />
        <img
          src={UTA} alt='Utah Jazz'
          className={styles['team-logo']}
        />
        <img
          src={WAS} alt='Washington Wizards'
          className={styles['team-logo']}
        />
      </div>
    </>
  )
}

export default App
