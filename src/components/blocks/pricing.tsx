"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { GetStartedModal } from "@/components/get-started-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Pay Per Word",
    monthlyPrice: "$100",
    yearlyPrice: "$100",
    description: "per 10,000 words",
    features: [
      "State-of-the-art AI voice conversion",
      "3 revision rounds included",
      "Publishing-ready format",
      "Multi-platform optimization",
      "Professional audio mastering",
      "Fast turnaround delivery",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section id="pricing" className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl leading-snug text-balance text-base lg:text-lg">
            Professional audiobook conversion with state-of-the-art AI technology.
            Pay only for what you need - $100 per 10,000 words.
          </p>
        </div>

        <div className="mt-8 flex justify-center md:mt-12 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="outline-primary origin-top outline-4 max-w-md"
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-foreground text-4xl font-bold">
                      {plan.monthlyPrice}
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {plan.description}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full" onClick={() => setIsModalOpen(true)}>
                  Get started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
