const ESPN_API_BASE_URL = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams';

type TeamRosterResp = {
  athletes: Athlete[],
}

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
    position: {
      id: string,
      abbreviation: string,
    },
}

export async function getTeamRoster(teamId: string | undefined,
  signal?: AbortSignal): Promise<Athlete[] | null> {
  const resp = await fetch(`${ESPN_API_BASE_URL}/${teamId}/roster`, { signal });

  if (resp.status == 400 || resp.status === 404) {
    return null;
  }

  if (!resp.ok) {
    throw new Error(`Roster request failed: ${resp.status}`)
  }

  const data: TeamRosterResp = await resp.json();

  return data.athletes;
}