"use client";

import { Button } from "@/components/button";
import { useBooking } from "@/lib/booking-context";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: Array<{ value: string; label: string }>;
};

export function PageHero({
  eyebrow,
  title,
  description,
  stats,
}: PageHeroProps) {
  const { openBooking } = useBooking();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-primary/30 pt-28 pb-16 text-white md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute -top-10 left-8 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-4">
        <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">{description}</p>
        <div className="mt-8">
          <Button onClick={() => openBooking()} size="lg">
            Book Now
          </Button>
        </div>
        {stats ? (
          <dl className={`mt-10 grid grid-cols-2 gap-4 ${
            stats.length === 3 ? "sm:grid-cols-3 max-w-2xl" : stats.length === 2 ? "sm:grid-cols-2 max-w-md" : "sm:grid-cols-4 max-w-xl"
          }`}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center"
              >
                <dt className="font-display text-2xl font-bold text-accent">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-white/75">{stat.label}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
