"use client";

import { useEffect, useState } from "react";
import { HighlightCard } from "@/components/highlight";
import { HighlightData } from "@/types/highlight";

type ApiJogada = {
  description: string;
  id: string;
  image: string;
  map: string; // e.g., "de_mirage"
  market_hash_name: string;
  name: string;
  stage: string;
  team0: string;
  team1: string;
  thumbnail: string;
  tournament_event: string;
  tournament_player: string;
  video: string;
};

export default function Home() {
  const [highlights, setHighlights] = useState<HighlightData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch("https://sample-python-app-paq.vercel.app/cs/jogadas", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: { jogadas: ApiJogada[] } = await res.json();
        const mapped: HighlightData[] = (data.jogadas || []).map((j) => ({
          id: j.id,
          title: j.name,
          description: j.description,
          videoUrl: j.video,
          thumbnailUrl: j.thumbnail,
          map: (j.map || "").replace(/^de_/, "").toUpperCase(),
          player: { name: j.tournament_player },
          match: {
            teams: {
              team1: { name: j.team0 },
              team2: { name: j.team1 },
            },
            stage: j.stage,
            tournament: j.tournament_event,
          },
          eventImageUrl: j.image,
          marketHashName: j.market_hash_name,
        }));
        if (!cancelled) setHighlights(mapped);
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : "Erro ao carregar jogadas";
        if (!cancelled) setError(msg);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  if (loading) return <div className="list-container">Carregando jogadas…</div>;
  if (error) return <div className="list-container">Erro: {error}</div>;

  return (
    <div className="list-container">
      {highlights.map((h) => (
        <div className="list-item" key={h.id}>
          <HighlightCard highlight={h} />
        </div>
      ))}
    </div>
  );
}
