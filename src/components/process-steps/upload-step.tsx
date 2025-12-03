import { Upload, FileText } from "lucide-react";

export const UploadStep = () => {
  return (
    <div className="border-2 border-dashed rounded-xl p-8 bg-muted/30 hover:bg-muted/50 transition-colors">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="rounded-full bg-primary/10 p-4">
          <Upload className="size-8 text-primary" />
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Drop your manuscript here</p>
          <p className="text-xs text-muted-foreground">
            PDF, DOCX, or TXT up to 50MB
          </p>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-background border">
            <FileText className="size-3 text-muted-foreground" />
            <span className="text-xs">my-book.pdf</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-background border opacity-60">
            <FileText className="size-3 text-muted-foreground" />
            <span className="text-xs">chapter-1.docx</span>
          </div>
        </div>
      </div>
    </div>
  );
};
