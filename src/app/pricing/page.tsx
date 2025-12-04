import React from "react";

import type { Metadata } from "next";

import { Background } from "@/components/background";
import { Pricing } from "@/components/blocks/pricing";
import { PricingTable } from "@/components/blocks/pricing-table";

export const metadata: Metadata = {
  title: "Pricing - Affordable AI Audiobook Conversion at $100 per 10k Words",
  description:
    "Simple, transparent pricing for professional audiobook conversion. Just $100 per 10,000 words includes state-of-the-art AI narration, human-in-the-loop quality assurance, 3 free revisions, and publishing-ready files. No hidden fees. Get started today.",
  keywords: [
    "audiobook pricing",
    "audiobook conversion cost",
    "affordable audiobook production",
    "AI audiobook pricing",
    "audiobook cost per word",
    "cheap audiobook creation",
    "audiobook production rates",
    "book to audio pricing",
    "audiobook service cost",
    "professional audiobook pricing",
  ],
  openGraph: {
    title: "Pricing - Affordable AI Audiobook Conversion | $100 per 10k Words",
    description:
      "Transform your book into a professional audiobook for just $100 per 10,000 words. Includes AI narration, human quality assurance, 3 revisions, and publishing-ready format.",
    url: "https://booktoaudio.cloud/pricing",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BookToAudio Pricing - $100 per 10,000 words",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Affordable AI Audiobook Conversion | $100 per 10k Words",
    description:
      "Transform your book into a professional audiobook for just $100 per 10,000 words. Includes AI narration, human quality assurance, 3 revisions.",
  },
  alternates: {
    canonical: "https://booktoaudio.cloud/pricing",
  },
};

const Page = () => {
  return (
    <Background>
      <Pricing className="py-28 text-center lg:pt-44 lg:pb-32" />
      <PricingTable />
    </Background>
  );
};

export default Page;
