"use client";

import { HighlightCard } from "@/components/highlight";
import { sampleHighlight } from "@/data/sampleData";
import { HighlightData } from "@/types/highlight";

export default function Home() {
  const handlePlayVideo = (highlight: HighlightData) => {
    console.log("Playing video:", highlight.title);
    // Aqui você pode implementar a lógica para reproduzir o vídeo
    // Por exemplo, abrir um modal de vídeo, navegar para uma página de vídeo, etc.
    alert(`Reproduzindo: ${highlight.title}`);
  };

  return (
    <div>
      <HighlightCard highlight={sampleHighlight} onPlay={handlePlayVideo} />
    </div>
  );
}
