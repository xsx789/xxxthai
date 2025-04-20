import React, { useState } from "react";

const VideoCard = ({ video }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="w-full text-white cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      {/* 📽 Thumbnail / Preview */}
      <div className="relative aspect-video overflow-hidden rounded-md bg-black">
        {hovered ? (
          <video
            src={video.preview}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={video.thumb}
            alt={video.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}

        {/* ⏱ Duration */}
        <span className="absolute bottom-1 right-1 bg-black/80 text-xs px-1 rounded">
          {video.duration}
        </span>
      </div>

      {/* 📝 Video Info */}
      <div className="mt-1">
        <p className="text-sm font-medium leading-snug line-clamp-2">{video.title}</p>
        <div className="text-xs text-white/60 mt-0.5">
          <span>{video.views} views · </span>
          <span>{video.likes}% 🔥</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
