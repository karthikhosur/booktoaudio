import Link from "next/link";

import { DashedLine } from "../dashed-line";
import { AIConversionStep } from "../process-steps/ai-conversion-step";
import { PublishStep } from "../process-steps/publish-step";
import { ReviewStep } from "../process-steps/review-step";
import { UploadStep } from "../process-steps/upload-step";
import { VoiceSelectionStep } from "../process-steps/voice-selection-step";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const topItems = [
  {
    title: "Upload your manuscript.",
    description:
      "Simply upload your book in any format - PDF, Word, or text file.",
    component: UploadStep,
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
  },
  {
    title: "Choose your voice.",
    description: "Select from our library of professional AI narrators.",
    component: VoiceSelectionStep,
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
  },
];

const bottomItems = [
  {
    title: "AI conversion.",
    description:
      "Our advanced AI converts your text to natural-sounding speech.",
    component: AIConversionStep,
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
  },
  {
    title: "Review & revise.",
    description:
      "Listen to your audiobook and request up to 3 revisions at no extra cost.",
    component: ReviewStep,
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
  },
  {
    title: "Publish everywhere.",
    description:
      "Receive your audiobook in formats compatible with all major platforms.",
    component: PublishStep,
    className:
      "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8",
  },
];

export const ResourceAllocation = () => {
  return (
    <section
      id="resource-allocation"
      className="overflow-hidden pb-28 lg:pb-32"
    >
      <div className="">
        <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
          From manuscript to audiobook in simple steps
        </h2>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine
            orientation="horizontal"
            className="container scale-x-105"
          />

          {/* Top Features Grid - 2 items */}
          <div className="relative container flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item key={i} item={item} isLast={i === topItems.length - 1} />
            ))}
          </div>
          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />

          {/* Bottom Features Grid - 3 items */}
          <div className="relative container grid max-w-7xl md:grid-cols-3">
            {bottomItems.map((item, i) => (
              <Item
                key={i}
                item={item}
                isLast={i === bottomItems.length - 1}
                className="md:pb-0"
              />
            ))}
          </div>
        </div>
        <DashedLine
          orientation="horizontal"
          className="container max-w-7xl scale-x-110"
        />

        {/* CTA Section */}
        <div className="container text-center mt-12 lg:mt-16 space-y-4">
          <p className="text-muted-foreground text-lg">
            Ready to transform your book into a professional audiobook?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View Pricing Details</Link>
            </Button>
          </div>
          <p className="text-muted-foreground text-sm">
            Have questions? Check our{" "}
            <Link href="/faq" className="underline underline-offset-4 hover:text-foreground transition-colors">
              FAQ page
            </Link>{" "}
            for more information.
          </p>
        </div>
      </div>
    </section>
  );
};

interface ItemProps {
  item: (typeof topItems)[number] | (typeof bottomItems)[number];
  isLast?: boolean;
  className?: string;
}

const Item = ({ item, isLast, className }: ItemProps) => {
  const Component = item.component;

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8",
        className,
        item.className,
      )}
    >
      <div className="title-container text-balance mb-6">
        <h3 className="inline font-semibold">{item.title} </h3>
        <span className="text-muted-foreground"> {item.description}</span>
      </div>

      <div className="component-container">
        <Component />
      </div>

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
