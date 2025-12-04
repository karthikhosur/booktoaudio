"use client";

import { useEffect, useState } from "react";

export function PlatformCompatibilityVisual() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const platforms = [
    { name: "Audible", icon: "A", color: "from-orange-500 to-orange-600" },
    { name: "Apple Books", icon: "", color: "from-gray-700 to-gray-900" },
    { name: "Google Play", icon: "G", color: "from-blue-500 to-blue-600" },
    { name: "Spotify", icon: "♫", color: "from-green-500 to-green-600" },
    { name: "Kobo", icon: "K", color: "from-red-500 to-red-600" },
    { name: "ACX", icon: "ACX", color: "from-purple-500 to-purple-600" },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-green-500/5 to-blue-500/10 p-6 rounded-lg flex items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        {/* Central Hub */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
              <svg
                className="w-10 h-10 text-primary-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-background animate-pulse" />
          </div>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-3 gap-3">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className={`relative p-3 rounded-lg border transition-all duration-300 ${
                i === activeIndex
                  ? "bg-primary/10 border-primary scale-105 shadow-lg"
                  : "bg-card border-border"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}
                >
                  {platform.icon}
                </div>
                <span className="text-[10px] text-center font-medium text-muted-foreground">
                  {platform.name}
                </span>
              </div>
              {i === activeIndex && (
                <div className="absolute inset-0 rounded-lg border-2 border-primary animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Publishing Ready</span>
        </div>
      </div>
    </div>
  );
}
