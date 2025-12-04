"use client";

import React, { useState } from "react";

import Link from "next/link";

import { Facebook, Linkedin, Twitter } from "lucide-react";

import { GetStartedModal } from "@/components/get-started-modal";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    title: "Email us",
    content: (
      <div className="mt-3">
        <Link
          href="mailto:info@localeos.co"
          className="text-muted-foreground hover:text-foreground"
        >
          info@localeos.co
        </Link>
      </div>
    ),
  },
  {
    title: "Follow us",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Facebook className="size-5" />
        </Link>
        <Link
          href="https://x.com/ausrobdev"
          className="text-muted-foreground hover:text-foreground"
        >
          <Twitter className="size-5" />
        </Link>
        <Link href="#" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="size-5" />
        </Link>
      </div>
    ),
  },
];

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <GetStartedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="py-28 lg:py-32 lg:pt-44">
        <div className="container max-w-2xl">
          <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Contact us
          </h1>
          <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
            Ready to transform your book into an audiobook? We'd love to hear from you!
          </p>

          <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
            {contactInfo.map((info, index) => (
              <div key={index}>
                <h2 className="font-medium">{info.title}</h2>
                {info.content}
              </div>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="mt-12 text-center">
            <Button onClick={() => setIsModalOpen(true)} size="lg">
              Get Started - $100/10k words
            </Button>
            <p className="text-muted-foreground text-sm mt-4">
              Fill out our simple form and we'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
