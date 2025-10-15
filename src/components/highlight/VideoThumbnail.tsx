'use client';

import { useState } from 'react';
import Image from 'next/image';

interface VideoThumbnailProps {
  thumbnailUrl: string;
  title: string;
  map: string;
  videoUrl: string;
  onPlay?: () => void; // optional analytics/callback
}

export function VideoThumbnail({ thumbnailUrl, title, map, videoUrl, onPlay }: VideoThumbnailProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlayback = () => {
    setIsPlaying(true);
    onPlay?.();
  };

  return (
    <div
      className="video-thumb"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPlaying ? (
        <video
          className="video-thumb-image"
          src={videoUrl}
          poster={thumbnailUrl}
          controls
          autoPlay
          muted
          playsInline
          onEnded={() => setIsPlaying(false)}
        />
      ) : (
        <Image
          src={thumbnailUrl}
          alt={title}
          width={640}
          height={360}
          className="video-thumb-image"
          priority
        />
      )}

      {/* Map label */}
      <div className="video-thumb-map">{map}</div>

      {/* Play button overlay */}
      {!isPlaying && (
        <div className={`video-thumb-overlay ${isHovered ? "is-visible" : ""}`}>
          <button
            className="video-thumb-play"
            aria-label="Reproduzir vídeo"
            onClick={startPlayback}
          >
            <svg
              className="video-thumb-play-icon"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
