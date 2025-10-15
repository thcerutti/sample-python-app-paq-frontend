import { Player } from '@/types/highlight';

interface PlayerInfoProps {
  player: Player;
}

export function PlayerInfo({ player }: PlayerInfoProps) {
  return (
    <div className="player-info">
      <svg className="icon-sm" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
      <span className="player-name">{player.name}</span>
    </div>
  );
}
