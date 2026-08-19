"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { telHref, whatsappHref } from "@/lib/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-5 z-40 flex flex-col gap-3">
      <a
        href={telHref()}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-xl"
        aria-label="Call now"
      >
        <PhoneIcon className="h-5 w-5" />
      </a>
      <a
        href={whatsappHref("Hi, I want to book a cab.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
      {showTop ? (
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-xl"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUpIcon className="h-5 w-5" />
        </button>
      ) : null}
    </div>
  );
}
