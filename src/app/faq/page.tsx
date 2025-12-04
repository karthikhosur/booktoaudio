import React from "react";

import type { Metadata } from "next";

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Testimonials } from "@/components/blocks/testimonials";
import { DashedLine } from "@/components/dashed-line";

export const metadata: Metadata = {
  title: "FAQ - Audiobook Conversion Questions Answered | BookToAudio",
  description:
    "Get answers to common questions about our AI audiobook conversion service. Learn about pricing, turnaround time, file formats, human-in-the-loop quality assurance, revision process, and publishing on Audible, Apple Books & more.",
  keywords: [
    "audiobook FAQ",
    "audiobook conversion questions",
    "how to create audiobook",
    "audiobook production help",
    "AI audiobook questions",
    "audiobook publishing FAQ",
    "audiobook cost questions",
    "audiobook format questions",
    "human-in-the-loop FAQ",
    "audiobook revision process",
  ],
  openGraph: {
    title: "FAQ - Audiobook Conversion Questions Answered | BookToAudio",
    description:
      "Get answers to all your audiobook conversion questions. Learn about our pricing, process, quality assurance, and publishing options.",
    url: "https://booktoaudio.cloud/faq",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BookToAudio FAQ - Your questions answered",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Audiobook Conversion Questions Answered | BookToAudio",
    description:
      "Get answers to all your audiobook conversion questions. Learn about our pricing, process, quality assurance, and publishing options.",
  },
  alternates: {
    canonical: "https://booktoaudio.cloud/faq",
  },
};

const Page = () => {
  return (
    <Background>
      <FAQ
        className="py-28 text-center lg:pt-44 lg:pb-32"
        className2="max-w-xl lg:grid-cols-1"
        headerTag="h1"
      />
      <DashedLine className="mx-auto max-w-xl" />
      <Testimonials dashedLineClassName="hidden" />
    </Background>
  );
};

export default Page;
