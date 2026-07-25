const ESPN_API_BASE_URL = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams';
const ESPN_API_V3_URL = 'https://site.web.api.espn.com/apis/common/v3/sports/basketball/nba/athletes';

export type Athlete = {
    id: string,
    fullName: string,
    headshot?: {
      href: string,
      alt: string,
    },
    age: number,
    dateOfBirth: string,
    birthPlace: {
      city: string,
      state: string,
      country: string,
    },
    displayHeight: string,
    displayWeight: string,
    jersey?: number,
    debutYear: number,
    college?: {
      name: string,
    },
    position: {
      id: string,
      abbreviation: string,
    },
    experience: {
      years: number,
    },
    status: {
      name: string,
    },
    contracts: Contract[],
}

export type Contract = {
    salary: number,
    season: {
      year: number,
      startDate: string,
      endDate: string,
    },
}

export type Team = {
  displayName: string,
}

export type TeamRosterResp = {
  athletes: Athlete[],
  team: Team,
}

export type SeasonStatsResp = {
  teams?: {[key: string]: StatsTeam },
  categories?: StatsCategory[],
}

export type StatsTeam = {
  slug: string,
  displayName: string
}

export type StatsCategory = {
    name: string,
    displayName: string,
    labels: string[],
    statistics: Statistic[],
}

export type Statistic = {
  teamSlug: string,
  season: {
    displayName: string,
  },
  stats: string[], // each stat maps to the stat label at the same position in the "labels" field
}

export async function getTeamRoster(teamId: string,
  signal?: AbortSignal): Promise<TeamRosterResp | null> {
  const resp = await fetch(`${ESPN_API_BASE_URL}/${teamId}/roster`, { signal });

  if (resp.status == 400 || resp.status === 404) {
    return null;
  }

  if (!resp.ok) {
    throw new Error(`Roster request failed: ${resp.status}`)
  }

  const data: TeamRosterResp = await resp.json();

  return data;
}

const SEASON_TYPES ={
  regular: 2,
  postseason: 3,
};

export type SeasonType = 'regular' | 'postseason';

export async function getPlayerStats(playerId: string,
  seasonType: SeasonType, signal?: AbortSignal): Promise<SeasonStatsResp | null> {
  const espnSeasonType: number = SEASON_TYPES[seasonType];

  const resp = await fetch(`${ESPN_API_V3_URL}/${playerId}/stats?seasontype=${espnSeasonType}`, {
    signal,
  });

  if (resp.status == 400 || resp.status === 404) {
    return null;
  }

  if (!resp.ok) {
    throw new Error(`Stats request failed: ${resp.status}`)
  }

  const data: SeasonStatsResp = await resp.json();

  return data;
}
