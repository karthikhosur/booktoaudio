import { CheckCircle2, Download, Share2 } from "lucide-react";

const platforms = [
  { name: "Audible", status: "ready" },
  { name: "Apple Books", status: "ready" },
  { name: "Google Play", status: "ready" },
  { name: "Spotify", status: "ready" },
];

export const PublishStep = () => {
  return (
    <div className="border rounded-xl p-5 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20">
      <div className="space-y-4">
        {/* Success header */}
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-green-500/10 p-2">
            <CheckCircle2 className="size-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <p className="text-sm font-medium">Your audiobook is ready!</p>
            <p className="text-xs text-muted-foreground">All files exported successfully</p>
          </div>
        </div>

        {/* Platform badges */}
        <div className="grid grid-cols-2 gap-2">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background border border-green-200 dark:border-green-900"
            >
              <CheckCircle2 className="size-3 text-green-600 dark:text-green-400" />
              <span className="text-xs font-medium">{platform.name}</span>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 pt-2">
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors">
            <Download className="size-3" />
            Download
          </button>
          <button className="px-3 py-2 rounded-lg border bg-background text-xs font-medium hover:bg-muted transition-colors">
            <Share2 className="size-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
