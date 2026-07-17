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

export type Team = {
  id: string,
  logoSrc: string,
  alt: string,
}


export const TEAMS: Team[] = [{
  id: 'ATL',
  logoSrc: ATL,
  alt: 'Atlanta Hawks',
}, {
  id: 'BKN',
  logoSrc: BKN,
  alt: 'Brooklyn Nets',
}, {
  id: 'BOS',
  logoSrc: BOS,
  alt: 'Boston Celtics',
}, {
  id: 'CHA',
  logoSrc: CHA,
  alt: 'Charlotte Hornets',
}, {
  id: 'CHI',
  logoSrc: CHI,
  alt: 'Chicago Bulls',
}, {
  id: 'CLE',
  logoSrc: CLE,
  alt: 'Cleveland Cavaliers',
}, {
  id: 'DAL',
  logoSrc: DAL,
  alt: 'Dallas Mavericks',
}, {
  id: 'DEN',
  logoSrc: DEN,
  alt: 'Denver Nuggets',
}, {
  id: 'DET',
  logoSrc: DET,
  alt: 'Detroit Pistons',
}, {
  id: 'GSW',
  logoSrc: GSW,
  alt: 'Golden State Warriors',
}, {
  id: 'HOU',
  logoSrc: HOU,
  alt: 'Houston Rockets',
}, {
  id: 'IND',
  logoSrc: IND,
  alt: 'Indiana Pacers',
}, {
  id: 'LAC',
  logoSrc: LAC,
  alt: 'Los Angeles Clippers',
}, {
  id: 'LAL',
  logoSrc: LAL,
  alt: 'Los Angeles Lakers',
}, {
  id: 'MEM',
  logoSrc: MEM,
  alt: 'Memphis Grizzlies',
}, {
  id: 'MIA',
  logoSrc: MIA,
  alt: 'Miami Heat',
}, {
  id: 'MIL',
  logoSrc: MIL,
  alt: 'Milwaukee Bucks',
}, {
  id: 'MIN',
  logoSrc: MIN,
  alt: 'Minnesota Timberwolves',
}, {
  id: 'NOP',
  logoSrc: NOP,
  alt: 'New Orleans Pelicans',
}, {
  id: 'NYK',
  logoSrc: NYK,
  alt: 'New York Knicks',
}, {
  id: 'OKC',
  logoSrc: OKC,
  alt: 'Oklahoma City Thunder',
}, {
  id: 'ORL',
  logoSrc: ORL,
  alt: 'Orlando Magic',
}, {
  id: 'PHI',
  logoSrc: PHI,
  alt: 'Philadelphia 76ers',
}, {
  id: 'PHX',
  logoSrc: PHX,
  alt: 'Phoenix Suns',
}, {
  id: 'POR',
  logoSrc: POR,
  alt: 'Portland Trail Blazers',
}, {
  id: 'SAC',
  logoSrc: SAC,
  alt: 'Sacramento Kings',
}, {
  id: 'SAS',
  logoSrc: SAS,
  alt: 'San Antonio Spurs',
}, {
  id: 'TOR',
  logoSrc: TOR,
  alt: 'Toronto Raptors', 
}, {
  id: 'UTA',
  logoSrc: UTA,
  alt: 'Utah Jazz',
}, {
  id: 'WAS',
  logoSrc: WAS,
  alt: 'Washington Wizards',
}]
