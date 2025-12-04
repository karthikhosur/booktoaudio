"use client";

import { useEffect, useState } from "react";

export function AudioWaveformVisual() {
  const [activeBar, setActiveBar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBar((prev) => (prev + 1) % 20);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const bars = Array.from({ length: 20 }, (_, i) => {
    const height = Math.sin(i * 0.5) * 40 + 50;
    const isActive = Math.abs(i - activeBar) < 3;
    return {
      height,
      isActive,
    };
  });

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/10 p-6 rounded-lg flex items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        {/* Waveform */}
        <div className="flex items-center justify-center gap-1 h-32">
          {bars.map((bar, i) => (
            <div
              key={i}
              className="flex-1 rounded-full transition-all duration-150"
              style={{
                height: `${bar.height}%`,
                backgroundColor: bar.isActive
                  ? "hsl(var(--primary))"
                  : "hsl(var(--muted-foreground) / 0.3)",
                opacity: bar.isActive ? 1 : 0.5,
              }}
            />
          ))}
        </div>

        {/* Audio Controls */}
        <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-3 rounded-lg border">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-150"
              style={{ width: `${(activeBar / 20) * 100}%` }}
            />
          </div>

          <span className="text-xs text-muted-foreground font-mono">
            {Math.floor((activeBar / 20) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
