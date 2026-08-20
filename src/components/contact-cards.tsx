"use client";

import { useState } from "react";
import { Card } from "@/components/card";
import { PhoneIcon, MailIcon, WhatsAppIcon, PinIcon } from "@/components/icons";
import { SITE, telHref, whatsappHref } from "@/lib/site";

export function ContactCards() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const triggerCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => {
      setCopiedLabel(null);
    }, 2000);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Phone Card */}
      <a 
        href={telHref()} 
        className="group block active:scale-98 transition-all duration-300"
      >
        <Card className="p-6 h-full border border-gray-100 bg-white hover:border-primary/20 hover:bg-primary/[0.005] hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 mb-4">
            <PhoneIcon className="h-6 w-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-navy group-hover:text-primary transition-colors">Call Us</h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">Available 24/7 for urgent bookings and support.</p>
          <span className="mt-3 block text-sm font-semibold text-primary group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1">
            {SITE.phoneDisplay}
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Card>
      </a>

      {/* Email Card with copy feedback */}
      <div 
        onClick={() => triggerCopy(SITE.email, "email")}
        className="group block cursor-pointer active:scale-98 transition-all duration-300"
      >
        <Card className="p-6 h-full border border-gray-100 bg-white hover:border-primary/20 hover:bg-primary/[0.005] hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 mb-4">
            <MailIcon className="h-6 w-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-navy group-hover:text-primary transition-colors">Email Us</h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">For business trip quotes and support inquiries.</p>
          <span className="mt-3 block text-sm font-semibold text-primary group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1 w-full">
            {copiedLabel === "email" ? (
              <span className="text-green-600 flex items-center gap-1.5 animate-pulse text-xs font-bold uppercase tracking-wider">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                </svg>
                Email Copied
              </span>
            ) : (
              <>
                {SITE.email}
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </>
            )}
          </span>
        </Card>
      </div>

      {/* WhatsApp Card */}
      <a 
        href={whatsappHref("Hi Book A Cab, I want to book a cab.")} 
        target="_blank"
        rel="noopener noreferrer"
        className="group block active:scale-98 transition-all duration-300"
      >
        <Card className="p-6 h-full border border-gray-100 bg-white hover:border-whatsapp/30 hover:bg-whatsapp/[0.005] hover:shadow-lg hover:shadow-whatsapp/5 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-whatsapp/5 text-whatsapp group-hover:bg-whatsapp/10 group-hover:scale-110 transition-all duration-300 mb-4">
            <WhatsAppIcon className="h-6 w-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-navy group-hover:text-whatsapp transition-colors">WhatsApp Chat</h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">Quick reservations and live chat route coordination.</p>
          <span className="mt-3 block text-sm font-semibold text-whatsapp group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1">
            Start Live Chat
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Card>
      </a>

      {/* Visit Us Card with copy feedback */}
      <div 
        onClick={() => triggerCopy(SITE.address, "address")}
        className="group block cursor-pointer active:scale-98 transition-all duration-300"
      >
        <Card className="p-6 h-full border border-gray-100 bg-white hover:border-amber-500/20 hover:bg-amber-500/[0.005] hover:shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300 mb-4">
            <PinIcon className="h-6 w-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-navy group-hover:text-primary transition-colors">Visit Office</h3>
          <p className="mt-2 text-sm text-gray-500 leading-relaxed">Book A Cab Office located near Terminal 1 & 2.</p>
          <span className="mt-3 block text-sm font-semibold text-primary group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1 text-left w-full">
            {copiedLabel === "address" ? (
              <span className="text-green-600 flex items-center gap-1.5 animate-pulse text-xs font-bold uppercase tracking-wider">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                </svg>
                Address Copied
              </span>
            ) : (
              <>
                {SITE.address.split(",")[0]}
                <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </>
            )}
          </span>
        </Card>
      </div>
    </div>
  );
}
