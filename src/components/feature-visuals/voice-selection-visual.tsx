"use client";

import { Check } from "lucide-react";

export function VoiceSelectionVisual() {
  const voices = [
    { name: "Celeste", accent: "American", selected: true },
    { name: "Basil", accent: "British", selected: false },
    { name: "Ruby", accent: "British", selected: false },
    { name: "Mitch", accent: "American", selected: false },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg">
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">Select Voice</span>
        </div>

        {voices.map((voice, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${
              voice.selected
                ? "bg-primary/10 border-primary"
                : "bg-card border-border hover:border-primary/50"
            }`}
          >
            <div
              className={`flex items-center justify-center w-5 h-5 rounded-full border-2 transition-colors ${
                voice.selected
                  ? "bg-primary border-primary"
                  : "border-muted-foreground"
              }`}
            >
              {voice.selected && <Check className="w-3 h-3 text-primary-foreground" />}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">{voice.name}</div>
              <div className="text-xs text-muted-foreground">{voice.accent}</div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(3)].map((_, j) => (
                <div
                  key={j}
                  className={`w-1 rounded-full ${
                    voice.selected ? "bg-primary" : "bg-muted"
                  }`}
                  style={{
                    height: voice.selected ? `${12 + j * 4}px` : "8px",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
