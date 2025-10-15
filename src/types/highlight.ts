export interface Team {
  name: string;
  logo?: string;
}

export interface Player {
  name: string;
  avatar?: string;
}

export interface Match {
  teams: {
    team1: Team;
    team2: Team;
  };
  stage: string;
  tournament: string;
}

export interface HighlightData {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  map: string;
  player: Player;
  match: Match;
  duration?: number;
  views?: number;
  createdAt?: Date;
  eventImageUrl?: string; // badge or event image
  marketHashName?: string; // market_hash_name from API
}
