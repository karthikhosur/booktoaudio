"use client";

import { useState } from "react";

import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { GetStartedModal } from "@/components/get-started-modal";
import { VoicePlayground } from "@/components/voice-playground";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "State-of-the-art AI voices",
    description: "Professional narration with natural, human-like voices.",
    icon: CircleDot,
  },
  {
    title: "3 revisions included",
    description: "Perfect your audiobook with three rounds of revisions.",
    icon: Blend,
  },
  {
    title: "Publishing ready",
    description: "Formatted and optimized for all major platforms.",
    icon: Diamond,
  },
  {
    title: "Fast turnaround",
    description: "Get your audiobook ready in days, not weeks.",
    icon: ChartNoAxesColumn,
  },
];

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1 lg:max-w-2xl">
          <h1 className="text-foreground text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Transform Your Book Into an Audiobook
          </h1>

          <p className="text-muted-foreground mt-5 text-lg md:text-xl lg:text-2xl">
            Professional audiobook conversion with state-of-the-art AI voices. Just $100 per 10,000 words.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button onClick={() => setIsModalOpen(true)}>
              Get started - $100/10k words
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="#feature-modern-teams"
                className="flex items-center gap-2"
              >
                Learn more
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 pt-10 lg:pl-10 lg:pt-0">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h3 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 md:mt-20 lg:container lg:mt-24">
        <VoicePlayground />
      </div>
    </section>
    </>
  );
};
