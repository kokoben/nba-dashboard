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
      <section className={styles.center}>
        <div>
          <img src={ATL} alt='Atlanta Hawks' />
          <img src={BKN} alt='Brooklyn Nets' />
          <img src={BOS} alt='Boston Celtics' />
          <img src={CHA} alt='Charlotte Hornets' />
          <img src={CHI} alt='Chicago Bulls' />
          <img src={CLE} alt='Cleveland Cavaliers' />
          <img src={DAL} alt='Dallas Mavericks' />
          <img src={DEN} alt='Denver Nuggets' />
          <img src={DET} alt='Detroit Pistons' />
          <img src={GSW} alt='Golden State Warriors' />
          <img src={HOU} alt='Houston Rockets' />
          <img src={IND} alt='Indiana Pacers' />
          <img src={LAC} alt='Los Angeles Clippers' />
          <img src={LAL} alt='Los Angeles Lakers' />
          <img src={MEM} alt='Memphis Grizzlies' />
          <img src={MIA} alt='Miami Heat' />
          <img src={MIL} alt='Milwaukee Bucks' />
          <img src={MIN} alt='Minnesota Timberwolves' />
          <img src={NOP} alt='New Orleans Pelicans' />
          <img src={NYK} alt='New York Knicks' />
          <img src={OKC} alt='Oklahoma City Thunder' />
          <img src={ORL} alt='Orlando Magic' />
          <img src={PHI} alt='Philadelphia 76ers' />
          <img src={PHX} alt='Phoenix Suns' />
          <img src={POR} alt='Portland Trail Blazers' />
          <img src={SAC} alt='Sacramento Kings' />
          <img src={SAS} alt='San Antonio Spurs' />
          <img src={TOR} alt='Toronto Raptors' />
          <img src={UTA} alt='Utah Jazz' />
          <img src={WAS} alt='Washington Wizards' />
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
      </section>
    </>
  )
}

export default App
