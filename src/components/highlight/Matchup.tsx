import { Team } from '@/types/highlight';

interface MatchupProps {
  team1: Team;
  team2: Team;
}

export function Matchup({ team1, team2 }: MatchupProps) {
  return (
    <div className="matchup-wrapper">
      <div className="matchup-box">
        <span>{team1.name}</span>
        <span className="matchup-sep">vs</span>
        <span>{team2.name}</span>
      </div>
    </div>
  );
}
