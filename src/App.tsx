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

type Team = {
  id: string,
  name: string,
  alt: string,
}
const teams = [{
  id: 'ATL',
  name: ATL,
  alt: 'Atlanta Hawks',
}, {
  id: 'BKN',
  name: BKN,
  alt: 'Brooklyn Nets',
}, {
  id: 'BOS',
  name: BOS,
  alt: 'Boston Celtics',
}, {
  id: 'CHA',
  name: CHA,
  alt: 'Charlotte Hornets',
}, {
  id: 'CHI',
  name: CHI,
  alt: 'Chicago Bulls',
}, {
  id: 'CLE',
  name: CLE,
  alt: 'Cleveland Cavaliers',
}, {
  id: 'DAL',
  name: DAL,
  alt: 'Dallas Mavericks',
}, {
  id: 'DEN',
  name: DEN,
  alt: 'Denver Nuggets',
}, {
  id: 'DET',
  name: DET,
  alt: 'Detroit Pistons',
}, {
  id: 'GSW',
  name: GSW,
  alt: 'Golden State Warriors',
}, {
  id: 'HOU',
  name: HOU,
  alt: 'Houston Rockets',
}, {
  id: 'IND',
  name: IND,
  alt: 'Indiana Pacers',
}, {
  id: 'LAC',
  name: LAC,
  alt: 'Los Angeles Clippers',
}, {
  id: 'LAL',
  name: LAL,
  alt: 'Los Angeles Lakers',
}, {
  id: 'MEM',
  name: MEM,
  alt: 'Memphis Grizzlies',
}, {
  id: 'MIA',
  name: MIA,
  alt: 'Miami Heat',
}, {
  id: 'MIL',
  name: MIL,
  alt: 'Milwaukee Bucks',
}, {
  id: 'MIN',
  name: MIN,
  alt: 'Minnesota Timberwolves',
}, {
  id: 'NOP',
  name: NOP,
  alt: 'New Orleans Pelicans',
}, {
  id: 'NYK',
  name: NYK,
  alt: 'New York Knicks',
}, {
  id: 'OKC',
  name: OKC,
  alt: 'Oklahoma City Thunder',
}, {
  id: 'ORL',
  name: ORL,
  alt: 'Orlando Magic',
}, {
  id: 'PHI',
  name: PHI,
  alt: 'Philadelphia 76ers',
}, {
  id: 'PHX',
  name: PHX,
  alt: 'Phoenix Suns',
}, {
  id: 'POR',
  name: POR,
  alt: 'Portland Trail Blazers',
}, {
  id: 'SAC',
  name: SAC,
  alt: 'Sacramento Kings',
}, {
  id: 'SAS',
  name: SAS,
  alt: 'San Antonio Spurs',
}, {
  id: 'TOR',
  name: TOR,
  alt: 'Toronto Raptors', 
}, {
  id: 'UTA',
  name: UTA,
  alt: 'Utah Jazz',
}, {
  id: 'WAS',
  name: WAS,
  alt: 'Washington Wizards',
}]

function App() {

  return (
    <>
      <header>
        <h1>NBA Dashboard</h1>
      </header>
      <div className={styles['teams-grid']}>
        {teams.map((team: Team) => (
          <img
            key={team.id}
            className={styles['team-logo']}
            src={team.name}
            alt={team.alt}
          />
        ))}
      </div>
    </>
  )
}

export default App
