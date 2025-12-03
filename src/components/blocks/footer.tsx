"use client";

import { useState } from "react";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GetStartedModal } from "@/components/get-started-modal";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigation = [
    { name: "Features", href: "/#feature-modern-teams" },
    { name: "How It Works", href: "/#resource-allocation" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "Twitter", href: "https://twitter.com/booktoaudio" },
    { name: "LinkedIn", href: "https://linkedin.com/company/booktoaudio" },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <>
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-4 text-center max-w-3xl">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Ready to transform your book?
        </h2>
        <p className="text-muted-foreground mx-auto max-w-2xl leading-snug text-balance text-base lg:text-lg">
          Professional audiobook conversion with state-of-the-art AI voices.
          Affordable pricing at just $100 per 10,000 words.
        </p>
        <div className="pt-2">
          <Button size="lg" onClick={() => setIsModalOpen(true)}>
            Get Started Now
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t mt-10 pt-6 text-center md:mt-14 lg:mt-20">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} BookToAudio. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  );
}
