import { HighlightData } from '@/types/highlight';
import { PlayerInfo } from './PlayerInfo';
import { TournamentInfo } from './TournamentInfo';
import { Matchup } from './Matchup';

interface HighlightDetailsProps {
  highlight: HighlightData;
}

export function HighlightDetails({ highlight }: HighlightDetailsProps) {
  return (
    <div className="highlight-details">
      <div className="highlight-header">
        <div className="highlight-title-row">
          {highlight.eventImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="tournament-badge"
              src={highlight.eventImageUrl}
              alt={highlight.match?.tournament || 'Tournament badge'}
              width={24}
              height={24}
            />
          )}
          <h1 className="highlight-title">{highlight.title}</h1>
        </div>
        {highlight.marketHashName && (
          <div className="highlight-market-hash">{highlight.marketHashName}</div>
        )}
        <p className="highlight-description">{highlight.description}</p>
      </div>

      <hr className="highlight-divider" />

      <div className="highlight-meta">
        <PlayerInfo player={highlight.player} />
        <TournamentInfo match={highlight.match} />
      </div>

      <Matchup
        team1={highlight.match.teams.team1}
        team2={highlight.match.teams.team2}
      />
    </div>
  );
}
