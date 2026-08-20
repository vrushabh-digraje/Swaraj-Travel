"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { useBooking } from "@/lib/booking-context";
import { telHref, whatsappHref } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function HomeHero() {
  const { openBooking } = useBooking();
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % SERVICES.length);
        setIsTransitioning(false);
      }, 300);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHovered]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % SERVICES.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentServiceIndex(
        (prev) => (prev - 1 + SERVICES.length) % SERVICES.length
      );
      setIsTransitioning(false);
    }, 300);
  };

  const activeService = SERVICES[currentServiceIndex];

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-navy via-navy to-primary/25 pt-24 text-white">
      <div className="pointer-events-none absolute top-16 left-8 h-56 w-56 rounded-full bg-primary/25 blur-3xl" />
      <div className="pointer-events-none absolute right-8 bottom-16 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:py-20">
        <div className="text-center lg:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-navy">
              ★
            </span>
            Trusted Airport & Outstation Cabs
          </p>
          <h1 className="font-display text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            <span className="block">Safe, Reliable</span>
            <span className="gradient-text block">& Comfortable Rides</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-primary lg:mx-0" />
          <p className="mx-auto mt-6 max-w-lg text-lg text-white/80 lg:mx-0">
            Seamless travel solutions across Maharashtra. Enjoy safe, punctual airport drops, outstation trips, and local rides with verified drivers and premium AC vehicles.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Button size="lg" onClick={() => openBooking()}>
              Book Ride Now
            </Button>
            <Button size="lg" variant="outline" href={telHref()}>
              <PhoneIcon className="h-5 w-5" />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="whatsapp"
              href={whatsappHref("Hi, I want to book a cab.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </Button>
          </div>
          <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-3 lg:mx-0">
            {[
              ["50K+", "Happy Riders"],
              ["120+", "Premium Cabs"],
              ["24/7", "Service"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/20 bg-white/10 p-4"
              >
                <dt className="font-display text-2xl font-black text-accent md:text-3xl">
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-white/80">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        <div
          className="relative flex flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur min-h-[380px] lg:min-h-[400px] select-none transition-all duration-300 hover:border-white/25 hover:bg-white/15"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-accent">
                Our Services
              </p>
              <span className="text-xs font-semibold text-white/60">
                {currentServiceIndex + 1} / {SERVICES.length}
              </span>
            </div>

            <div
              className={`mt-4 transition-all duration-300 ${
                isTransitioning ? "translate-x-4 opacity-0" : "translate-x-0 opacity-100"
              }`}
            >
              <h2 className="font-display text-2xl font-black text-white md:text-3xl">
                {activeService.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {activeService.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {activeService.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/90">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-white/60 uppercase tracking-wider">Pricing</p>
                <p className="font-display text-lg font-black text-accent">{activeService.price}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:bg-white/20 hover:text-accent"
                  aria-label="Previous service"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition hover:bg-white/20 hover:text-accent"
                  aria-label="Next service"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <div className="flex gap-1">
                {SERVICES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (isTransitioning) return;
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentServiceIndex(idx);
                        setIsTransitioning(false);
                      }, 200);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentServiceIndex === idx ? "w-6 bg-accent" : "w-1.5 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <Button href="/services" variant="white" size="sm">
                View All
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
