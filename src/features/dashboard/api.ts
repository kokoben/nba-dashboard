const ESPN_API_BASE_URL = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams';

type TeamResp = {
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
    },
  }[],
}

export async function getTeam(): Promise<TeamResp> {
  const resp = await fetch(`${ESPN_API_BASE_URL}`);

  if (!resp.ok) {
    throw new Error(`Team request failed: ${resp.status}`);
  }

  return resp.json();
}
