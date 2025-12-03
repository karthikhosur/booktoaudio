import { Play, SkipBack, SkipForward, MessageSquare, Clock, CheckCircle2 } from "lucide-react";

export const ReviewStep = () => {
  return (
    <div className="border rounded-xl p-4 bg-background space-y-4">
      {/* Chapter info */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium">Chapter 3: The Journey</p>
          <p className="text-[10px] text-muted-foreground">5:12 duration</p>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <Clock className="size-3" />
          <span>2:34</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div className="h-full bg-primary rounded-full transition-all" style={{ width: "48%" }} />
      </div>

      {/* Playback controls */}
      <div className="flex items-center justify-center gap-2">
        <button className="rounded-full bg-muted hover:bg-muted/80 p-2 transition-colors">
          <SkipBack className="size-3" />
        </button>
        <button className="rounded-full bg-primary hover:bg-primary/90 p-3 transition-colors">
          <Play className="size-4 text-primary-foreground fill-primary-foreground" />
        </button>
        <button className="rounded-full bg-muted hover:bg-muted/80 p-2 transition-colors">
          <SkipForward className="size-3" />
        </button>
      </div>

      {/* Revision status */}
      <div className="space-y-2">
        <div className="flex items-start gap-2 p-2 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900">
          <MessageSquare className="size-3 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-amber-900 dark:text-amber-100">
              Adjust pronunciation at 2:15
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <CheckCircle2 className="size-3" />
            <span>2 revisions completed</span>
          </div>
          <span className="text-muted-foreground">1 remaining</span>
        </div>
      </div>
    </div>
  );
};
