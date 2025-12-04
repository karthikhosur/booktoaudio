import React from "react";

import type { Metadata } from "next";

import { Background } from "@/components/background";
import Contact from "@/components/blocks/contact";

export const metadata: Metadata = {
  title: "Contact Us - Get Started with Your Audiobook Conversion | BookToAudio",
  description:
    "Have questions about converting your book to an audiobook? Contact BookToAudio for a free consultation. Email us at info@localeos.co or use our contact form. We respond within 24 hours and offer personalized audiobook production guidance.",
  keywords: [
    "contact audiobook service",
    "audiobook conversion support",
    "audiobook consultation",
    "audiobook production help",
    "get audiobook quote",
    "audiobook questions",
    "contact book to audio",
    "audiobook customer service",
    "audiobook production inquiry",
    "audiobook conversion contact",
  ],
  openGraph: {
    title: "Contact Us - Get Started with Your Audiobook Conversion",
    description:
      "Have questions about converting your book to an audiobook? Contact us for a free consultation. We respond within 24 hours.",
    url: "https://booktoaudio.cloud/contact",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact BookToAudio - Get your audiobook questions answered",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get Started with Your Audiobook Conversion",
    description:
      "Have questions about converting your book to an audiobook? Contact us for a free consultation. We respond within 24 hours.",
  },
  alternates: {
    canonical: "https://booktoaudio.cloud/contact",
  },
};

const Page = () => {
  return (
    <Background>
      <Contact />
    </Background>
  );
};

export default Page;
