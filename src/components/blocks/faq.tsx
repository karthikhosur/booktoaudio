import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "General",
    questions: [
      {
        question: "What formats do you accept for manuscripts?",
        answer:
          "We accept all major formats including PDF, Microsoft Word (.doc, .docx), plain text (.txt), and ePub files. Simply upload your manuscript and we'll handle the rest.",
      },
      {
        question: "How long does the conversion process take?",
        answer:
          "Most audiobooks are completed within 5-7 business days from the time you approve the voice selection. Rush options are available for an additional fee.",
      },
      {
        question: "What does a revision include?",
        answer:
          "Each revision allows you to request changes to pronunciation, pacing, emphasis, or any section you'd like re-recorded. You get 3 revision rounds included at no extra cost.",
      },
    ],
  },
  {
    title: "Pricing & Quality",
    questions: [
      {
        question: "Are there any additional fees?",
        answer:
          "No hidden fees! Our transparent pricing is $100 per 10,000 words, which includes 3 revision rounds, professional mastering, human quality assurance, and files formatted for all major publishing platforms.",
      },
      {
        question: "What is human-in-the-loop quality assurance?",
        answer:
          "Every audiobook goes through expert human review to ensure realistic narration. Our team checks for natural pacing, emotional depth, proper pronunciation, and overall listening quality. This combination of AI efficiency and human expertise delivers the most natural, engaging audiobooks possible.",
      },
      {
        question: "How does AI narration compare to human narrators?",
        answer:
          "Our state-of-the-art AI voices, combined with human-in-the-loop oversight, are nearly indistinguishable from traditional human narrators. We offer natural inflection, emotion, and pacing, with the added benefit of consistency across long works and faster turnaround times—all at a fraction of the cost.",
      },
    ],
  },
  {
    title: "Publishing",
    questions: [
      {
        question: "Can I publish the audiobook on Audible and other platforms?",
        answer:
          "Yes! We provide your audiobook in formats compatible with all major platforms including Audible, Apple Books, Google Play Books, and more. You retain full rights to your audiobook.",
      },
      {
        question: "What file formats will I receive?",
        answer:
          "You'll receive your audiobook in MP3 and M4B formats, along with separate chapter files if needed. All files are professionally mastered and ready for immediate publishing.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-10 lg:grid-cols-2 lg:gap-16", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Got Questions?
              </h2>
            )}
            <p className="text-muted-foreground leading-snug text-base lg:text-lg">
              If you can't find what you're looking for,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                get in touch
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
