"use client";

import { Button } from "@/components/button";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { useBooking } from "@/lib/booking-context";
import { telHref, whatsappHref } from "@/lib/site";

type CtaBannerProps = {
  title: string;
  description: string;
  bookLabel?: string;
};

export function CtaBanner({
  title,
  description,
  bookLabel = "Book Now",
}: CtaBannerProps) {
  const { openBooking } = useBooking();

  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-accent p-8 text-white shadow-xl md:p-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              {title}
            </h2>
            <p className="mt-3 text-lg text-white/90">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="white" className="flex-1" onClick={() => openBooking()}>
              {bookLabel}
            </Button>
            <Button
              variant="secondary"
              className="flex-1"
              href={telHref()}
              ariaLabel="Call Swaraj Travel"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Us
            </Button>
            <Button
              variant="whatsapp"
              className="flex-1"
              href={whatsappHref("Hi, I want to book a cab.")}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Chat on WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
