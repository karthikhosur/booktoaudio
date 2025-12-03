import { Mic, Volume2, Check } from "lucide-react";

const voices = [
  { name: "Sarah", gender: "Female", accent: "US", selected: true },
  { name: "James", gender: "Male", accent: "UK", selected: false },
  { name: "Emma", gender: "Female", accent: "AU", selected: false },
  { name: "David", gender: "Male", accent: "US", selected: false },
];

export const VoiceSelectionStep = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {voices.map((voice, i) => (
        <div
          key={i}
          className={`relative border rounded-lg p-3 transition-all ${
            voice.selected
              ? "border-primary bg-primary/5 ring-2 ring-primary/20"
              : "border-border bg-background hover:border-primary/50"
          }`}
        >
          {voice.selected && (
            <div className="absolute -top-2 -right-2 bg-primary rounded-full p-1">
              <Check className="size-3 text-primary-foreground" />
            </div>
          )}
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-primary/10 p-2">
              <Mic className="size-3 text-primary" />
            </div>
            <div>
              <p className="text-xs font-medium">{voice.name}</p>
              <p className="text-[10px] text-muted-foreground">
                {voice.gender} • {voice.accent}
              </p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-1 text-[10px] text-muted-foreground hover:text-foreground transition-colors py-1">
            <Volume2 className="size-3" />
            Preview
          </button>
        </div>
      ))}
    </div>
  );
};
