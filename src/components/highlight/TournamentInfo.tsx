import { Match } from '@/types/highlight';

interface TournamentInfoProps {
  match: Match;
}

export function TournamentInfo({ match }: TournamentInfoProps) {
  return (
    <div className="tournament-info">
      <div className="tournament-item">
        <svg className="icon-sm" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <span>{match.stage}</span>
      </div>
      <div className="tournament-item">
        <svg className="icon-sm" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
        <span>{match.tournament}</span>
      </div>
    </div>
  );
}
