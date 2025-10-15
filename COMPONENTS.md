# Componentes de Highlight

Este projeto contém um conjunto de componentes React/Next.js para exibir highlights de jogadas de CS2.

## Estrutura dos Componentes

### Componente Principal
- **HighlightCard**: Componente principal que combina todos os sub-componentes

### Sub-componentes
- **VideoThumbnail**: Exibe a thumbnail do vídeo com botão de play
- **HighlightDetails**: Container para os detalhes do highlight
- **PlayerInfo**: Informações do jogador
- **TournamentInfo**: Informações do torneio/partida
- **Matchup**: Confronto entre os times

## Tipos TypeScript

```typescript
interface HighlightData {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  map: string;
  player: Player;
  match: Match;
}

interface Player {
  name: string;
  team: string;
}

interface Match {
  tournament: string;
  stage: string;
  teams: {
    team1: Team;
    team2: Team;
  };
}

interface Team {
  name: string;
  logo?: string;
}
```

## Como usar

```jsx
import { HighlightCard } from '@/components/highlight';
import { sampleHighlight } from '@/data/sampleData';

function App() {
  const handlePlayVideo = (highlight) => {
    // Implementar lógica de reprodução
    console.log('Playing:', highlight.title);
  };

  return (
    <HighlightCard
      highlight={sampleHighlight}
      onPlay={handlePlayVideo}
    />
  );
}
```

## Cores do Design

O projeto usa um sistema de cores customizado baseado no design original:

- **Primary**: #068cf9 (azul)
- **Background Light**: #f5f7f8
- **Background Dark**: #0f1a23
- **Content Light**: #e7eaed
- **Content Dark**: #1a2a3a
- **Text Primary Light**: #0d151c
- **Text Primary Dark**: #ffffff
- **Text Secondary Light**: #47779e
- **Text Secondary Dark**: #a0b3c6

## Fonte

O projeto usa a fonte **Space Grotesk** do Google Fonts para manter a consistência com o design original.

## Features

- ✅ Design responsivo (mobile e desktop)
- ✅ Dark mode support
- ✅ Hover effects no thumbnail
- ✅ Tipagem TypeScript completa
- ✅ Componentes reutilizáveis
- ✅ Cores customizadas do design
- ✅ Fonte Space Grotesk
