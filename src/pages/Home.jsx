// src/pages/Home.jsx
import React from "react";
import Topbar from "../components/Topbar";
import VideoCard from "../components/VideoCard";
import { videos } from "../api/videoApi";

const Home = () => {
  return (
    <>
      <Topbar />

      {/* 🔳 พื้นหลังดำเต็มจอ */}
      <div className="w-full bg-black text-white min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 py-6">

          {/* 🏷️ แถบ Tag ปุ่มแนวนอน */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide whitespace-nowrap">
            {["ทั้งหมด", "JAV", "ไทย", "ฝรั่ง", "การ์ตูน", "ใหม่ล่าสุด", "กำลังมาแรง"].map((tag) => (
              <button
                key={tag}
                className="bg-white/10 hover:bg-white/20 px-4 py-1 rounded-full text-sm transition"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* 🎥 วิดีโอ Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mt-6">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
