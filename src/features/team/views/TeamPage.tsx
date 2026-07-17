import { useParams } from 'react-router';
import { TEAMS, type Team } from '@/constants';
import NotFound from '@/views/NotFound';

function TeamPage() {
  const { teamId } = useParams();

  const validTeamIds: Set<string> = new Set(TEAMS.map((team: Team) => team.id));

  if (!teamId || !validTeamIds.has(teamId)) {
    return (<NotFound />)
  }

  return (
    <>
      team page placeholder for {teamId}
    </>
  )
}

export default TeamPage;