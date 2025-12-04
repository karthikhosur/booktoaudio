import { Inter } from "next/font/google";
import localFont from "next/font/local";

import type { Metadata } from "next";

import { Footer } from "@/components/blocks/footer";
import { Navbar } from "@/components/blocks/navbar";
import { StructuredData } from "@/components/structured-data";
import { StyleGlideProvider } from "@/components/styleglide-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../../fonts/dm-sans/DMSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/dm-sans/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/dm-sans/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://booktoaudio.cloud"),
  title: {
    default: "BookToAudio - Professional AI Audiobook Conversion | $100 per 10k Words",
    template: "%s | BookToAudio - AI Audiobook Production",
  },
  description:
    "Transform your book into a production-grade audiobook with state-of-the-art AI voices and human-in-the-loop quality assurance. Expert human oversight ensures realistic, natural narration at just $100 per 10,000 words with 3 free revisions. Fast turnaround, publishing-ready format for Audible, Apple Books & more.",
  keywords: [
    "audiobook conversion",
    "AI audiobook",
    "book to audio",
    "audiobook creation",
    "AI narration",
    "audiobook production",
    "text to speech",
    "professional narration",
    "audiobook publishing",
    "indie author audiobook",
    "production grade audiobook",
    "affordable audiobook conversion",
    "convert book to audiobook",
    "AI voice over",
    "audiobook narrator",
    "self publishing audiobook",
    "audible audiobook creation",
    "audiobook maker",
    "automated audiobook",
    "book narration service",
    "human in the loop AI",
    "AI with human oversight",
    "quality assurance audiobook",
    "realistic AI narration",
    "human-reviewed audiobook",
  ],
  authors: [{ name: "BookToAudio", url: "https://booktoaudio.cloud" }],
  creator: "BookToAudio",
  publisher: "BookToAudio",
  applicationName: "BookToAudio",
  referrer: "origin-when-cross-origin",
  category: "Technology",
  classification: "Audiobook Production Service",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://booktoaudio.cloud",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    type: "website",
    url: "https://booktoaudio.cloud",
    title: "BookToAudio - Professional AI Audiobook Conversion | $100 per 10k Words",
    description:
      "Transform your book into a production-grade audiobook with state-of-the-art AI voices. Professional narration at just $100 per 10,000 words with 3 free revisions. Fast turnaround, publishing-ready format for Audible, Apple Books & more.",
    siteName: "BookToAudio",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BookToAudio - Transform your book into a production-grade audiobook with AI voices",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@booktoaudio",
    creator: "@booktoaudio",
    title: "BookToAudio - Professional AI Audiobook Conversion | $100 per 10k Words",
    description:
      "Transform your book into a production-grade audiobook with state-of-the-art AI voices. Just $100 per 10,000 words with 3 free revisions. Publishing-ready format.",
    images: {
      url: "/og-image.jpg",
      alt: "BookToAudio - AI Audiobook Production Service",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#09090b" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://booktoaudio.cloud" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
        <StructuredData />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyleGlideProvider />
          <Navbar />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
