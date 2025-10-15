'use client';

import { HighlightData } from '@/types/highlight';
import { VideoThumbnail } from './VideoThumbnail';
import { HighlightDetails } from './HighlightDetails';

interface HighlightCardProps {
  highlight: HighlightData;
  onPlay?: (highlight: HighlightData) => void;
}

export function HighlightCard({ highlight, onPlay }: HighlightCardProps) {
  const handlePlay = () => onPlay?.(highlight);

  return (
    <div className="highlight-card">
      <div className="highlight-grid">
        <VideoThumbnail
          thumbnailUrl={highlight.thumbnailUrl}
          title={highlight.title}
          map={highlight.map}
          videoUrl={highlight.videoUrl}
          onPlay={handlePlay}
        />
        <HighlightDetails highlight={highlight} />
      </div>
    </div>
  );
}
