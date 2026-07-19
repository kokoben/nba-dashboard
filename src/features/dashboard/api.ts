const ESPN_API_BASE_URL = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams';

export type TeamsResp = {
  sports: {
    id: string,
    leagues: {
      teams: TeamWithMeta[],
    }[],
  }[],
}

type TeamWithMeta = {
  team: Team,
}
export type Team = {
  abbreviation: string,
  displayName: string,
  id: string,
}

export async function getTeams(signal?: AbortSignal): Promise<Team[]> {
  const resp = await fetch(`${ESPN_API_BASE_URL}`, { signal });

  if (!resp.ok) {
    throw new Error(`Team request failed: ${resp.status}`);
  }

  const data: TeamsResp = await resp.json();

  return data.sports[0].leagues[0].teams.map((teamWithMeta: TeamWithMeta) => {
    return teamWithMeta.team;
  });
}
