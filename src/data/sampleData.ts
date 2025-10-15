import { HighlightData } from '@/types/highlight';

export const sampleHighlight: HighlightData = {
  id: 'aus2025_chopper2kvsmouzonmirage1',
  title: 'Souvenir Charm | Destaque do Austin 2025 | chopper leva dois',
  description: 'chopper, do Palácio, mata dois enquanto defende o alvo A em Mirage.',
  videoUrl: 'https://cdn.steamstatic.com/apps/csgo/videos/highlightreels/024/081v106_005/024_081v106_005_de_mirage_aus2025_chopper2kvsmouzonmirage1_ww_1080p.webm',
  thumbnailUrl: 'https://raw.githubusercontent.com/ByMykel/counter-strike-image-tracker/refs/heads/main/static/highlightreels/aus2025/aus2025_chopper2kvsmouzonmirage1_ww.jpg',
  // Transformando 'de_mirage' em um rótulo exibível
  map: 'MIRAGE',
  player: {
    name: 'chopper'
  },
  match: {
    teams: {
      team1: { name: 'Team Spirit' },
      team2: { name: 'MOUZ' }
    },
    stage: 'Quartas de Final',
    tournament: 'Austin 2025'
  }
};

export const sampleHighlights: HighlightData[] = [
  sampleHighlight,
  {
    ...sampleHighlight,
    id: 'highlight-2',
    title: 'ACE incrível do s1mple em Dust2',
    description: 's1mple elimina todos os 5 adversários com AWP em Dust2.',
    map: 'DUST2',
    player: { name: 's1mple' },
    match: {
      teams: {
        team1: { name: 'NAVI' },
        team2: { name: 'Astralis' }
      },
      stage: 'Final',
      tournament: 'ESL Pro League'
    }
  }
];
