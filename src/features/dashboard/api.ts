const ESPN_API_BASE_URL = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams';

export type TeamsResp = {
  sports: {
    id: string,
    leagues: {
      teams: {
        team: {
          abbreviation: string,
          displayName: string,
          id: string,
        },
      }[],
    }[],
  }[],
}

export async function getTeams(signal?: AbortSignal): Promise<TeamsResp> {
  const resp = await fetch(`${ESPN_API_BASE_URL}`, { signal });

  if (!resp.ok) {
    throw new Error(`Team request failed: ${resp.status}`);
  }

  return resp.json();
}
