'use client';

import { HighlightData } from '@/types/highlight';
import { VideoThumbnail } from './VideoThumbnail';
import { HighlightDetails } from './HighlightDetails';

interface HighlightCardProps {
  highlight: HighlightData;
  onPlay?: (highlight: HighlightData) => void;
}

export function HighlightCard({ highlight, onPlay }: HighlightCardProps) {
  const handlePlay = () => {
    if (onPlay) {
      onPlay(highlight);
    } else {
      // Default behavior: open video in new tab or handle as needed
      window.open(highlight.videoUrl, '_blank');
    }
  };

  return (
    <div className="highlight-page">
      <div className="highlight-card">
        <div className="highlight-grid">
          <VideoThumbnail
            thumbnailUrl={highlight.thumbnailUrl}
            title={highlight.title}
            map={highlight.map}
            onPlay={handlePlay}
          />
          <HighlightDetails highlight={highlight} />
        </div>
      </div>
    </div>
  );
}
