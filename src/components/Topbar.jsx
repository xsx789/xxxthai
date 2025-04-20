// src/components/Topbar.jsx
import React from "react";

const Topbar = () => {
  return (
    <header className="bg-black text-white border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* ☰ Mobile Menu */}
        <div className="md:hidden">
          <button className="text-2xl font-bold text-orange-400">≡</button>
        </div>

        {/* 🔥 Logo Center (mobile), Left (desktop) */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="/logo.png"
            alt="xxxthai logo"
            className="h-6 sm:h-7 md:h-9 object-contain"
          />
        </div>

        {/* 🧭 Main Nav (Desktop Only) */}
        <nav className="hidden md:flex gap-6 text-sm font-semibold text-white">
          <a href="#" className="hover:text-orange-400 transition">HOME</a>
          <a href="#" className="hover:text-orange-400 transition">VIDEOS</a>
          <a href="#" className="hover:text-orange-400 transition">CATEGORIES</a>
          <a href="#" className="hover:text-orange-400 transition">LIVE</a>
        </nav>

        {/* 🔍 Search & Fake Icons */}
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block bg-white/10 text-white text-sm px-3 py-1 rounded-full focus:outline-none focus:ring-1 focus:ring-orange-400"
          />
          {/* Placeholder for real icons */}
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full" title="Upload" />
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full" title="Profile" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
