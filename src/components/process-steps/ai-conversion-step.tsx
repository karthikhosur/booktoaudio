import { Sparkles, Loader2 } from "lucide-react";

export const AIConversionStep = () => {
  return (
    <div className="border rounded-xl p-6 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="rounded-full bg-primary/20 p-4 animate-pulse">
            <Sparkles className="size-8 text-primary" />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-1 border-2 border-primary/20">
            <Loader2 className="size-3 text-primary animate-spin" />
          </div>
        </div>

        <div className="w-full space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Converting...</span>
            <span className="font-medium">67%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: "67%" }} />
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Chapter 3 of 12 • Estimated 4 min remaining
          </p>
        </div>

        {/* Waveform visualization */}
        <div className="flex items-center justify-center gap-1 h-12 w-full">
          {[2, 5, 3, 8, 4, 7, 2, 6, 3, 9, 5, 4, 7, 3, 6, 2, 8, 4].map((height, i) => (
            <div
              key={i}
              className="w-1 bg-primary/60 rounded-full transition-all"
              style={{ height: `${height * 4}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
