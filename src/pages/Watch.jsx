import React from "react";
import { useParams } from "react-router-dom";
import { videos } from "../api/videoApi";
import VideoCard from "../components/VideoCard";

const Watch = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === id);

  if (!video) {
    return <div className="text-center p-10 text-white">ไม่พบคลิปนี้</div>;
  }

  return (
    <div className="px-2 sm:px-4 py-6 max-w-[1400px] mx-auto space-y-6 text-white">
      {/* 🎬 Player */}
      <div className="w-full aspect-video bg-black rounded overflow-hidden">
        {video.type === "embed" ? (
          <iframe
            src={video.embedUrl}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <video
            src={`/videos/${id}.mp4`}
            className="w-full h-full object-cover"
            controls
            autoPlay
          />
        )}
      </div>

      {/* 📝 Title + Info */}
      <div>
        <h1 className="text-xl font-bold leading-tight">{video.title}</h1>
        <p className="text-sm text-white/50 mt-1">
          {video.views} views · {video.likes}% liked
        </p>
      </div>

      {/* 🏷 Tags */}
      <div className="flex flex-wrap gap-2 text-sm">
        {["ไทย", "JAV", "แนวครอบครัว"].map((tag, i) => (
          <span
            key={i}
            className="bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 cursor-pointer"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 🎥 Suggested Videos */}
      <div>
        <h2 className="text-lg font-semibold mb-3">แนะนำสำหรับคุณ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {videos
            .filter((v) => v.id !== id)
            .slice(0, 4)
            .map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;
