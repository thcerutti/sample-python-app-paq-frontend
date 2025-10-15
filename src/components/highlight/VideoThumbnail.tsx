'use client';

import { useState } from 'react';
import Image from 'next/image';

interface VideoThumbnailProps {
  thumbnailUrl: string;
  title: string;
  map: string;
  onPlay: () => void;
}

export function VideoThumbnail({ thumbnailUrl, title, map, onPlay }: VideoThumbnailProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="video-thumb"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onPlay}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        width={640}
        height={360}
        className="video-thumb-image"
        priority
      />

      {/* Map label */}
      <div className="video-thumb-map">
        {map}
      </div>

      {/* Play button overlay */}
      <div
        className={`video-thumb-overlay ${isHovered ? 'is-visible' : ''}`}
      >
        <button className="video-thumb-play">
          <svg
            className="video-thumb-play-icon"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
