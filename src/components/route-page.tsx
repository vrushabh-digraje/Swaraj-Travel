"use client";

import { useState } from "react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { CheckIcon } from "@/components/icons";
import { useBooking } from "@/lib/booking-context";
import { relatedRoutes, type OutstationRoute } from "@/lib/routes";
import { telHref, whatsappHref } from "@/lib/site";

function getHighlightIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("price") || t.includes("fare") || t.includes("rate")) {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }
  if (t.includes("pickup") || t.includes("airport") || t.includes("stops") || t.includes("door")) {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  if (t.includes("safety") || t.includes("clean") || t.includes("sanitized")) {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (t.includes("expressway") || t.includes("specialist") || t.includes("driver") || t.includes("highway") || t.includes("expert") || t.includes("ghat")) {
    return (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16V9a4 4 0 00-4-4h-4M21 16H3" />
      </svg>
    );
  }
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function getStopRecommendation(title: string) {
  const t = title.toLowerCase();
  if (t.includes("karnala")) {
    return "💡 Travel Tip: Best visited in the early mornings to spot birds. Ideal spot for stretching your legs; carry water.";
  }
  if (t.includes("datta")) {
    return "🍴 Food Recommendation: Highly recommended for piping-hot Vada Pav, Sabudana Khichdi, and Batata Vada. Can get crowded on weekend mornings!";
  }
  if (t.includes("lonavala")) {
    return "🛍️ Specialty: Famous for Cooper's fudge and fresh peanut Chikki. Best visited during monsoon when the hills turn emerald green.";
  }
  if (t.includes("khandala")) {
    return "📸 Viewpoint: Duke's Nose and Tiger's Point offer misty vistas of valleys and waterfalls. Drive slowly during heavy fog.";
  }
  if (t.includes("kasara") || t.includes("ghat")) {
    return "🚗 Driving Advice: Beautiful hairpin curves and foggy valley sights. Ensure your brakes are in good condition and drive in lower gears.";
  }
  if (t.includes("igatpuri")) {
    return "⛰️ Monsoon Special: Full of waterfalls and misty valleys. The Vipassana International Academy pagoda is visible from the highway.";
  }
  if (t.includes("mapro")) {
    return "🍓 Local Specialty: Do not miss strawberries and fresh cream at Mapro Garden. Table Land offers scenic horseback riding.";
  }
  if (t.includes("chiplun")) {
    return "🍴 Food Recommendation: Ideal midpoint stop overlooking the Vashishti river for authentic Konkani seafood/veg meals.";
  }
  return "💡 Travel Tip: A highly recommended stop. Great for clicking photos, relaxing, or enjoying local Maharashtrian refreshments.";
}

function getStopImage(title: string) {
  const t = title.toLowerCase();
  if (t.includes("karnala")) {
    return "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=500&q=80";
  }
  if (t.includes("datta snacks") || t.includes("datta")) {
    return "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=500&q=80";
  }
  if (t.includes("duke's nose") || t.includes("khandala")) {
    return "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80";
  }
  if (t.includes("lonavala") || t.includes("dam")) {
    return "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=80";
  }
  if (t.includes("kasara") || t.includes("camel valley") || t.includes("ghat")) {
    return "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80";
  }
  if (t.includes("sula") || t.includes("vineyard")) {
    return "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=500&q=80";
  }
  if (t.includes("trimbakeshwar") || t.includes("temple") || t.includes("shirdi")) {
    return "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=500&q=80";
  }
  if (t.includes("mapro") || t.includes("strawberry")) {
    return "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&w=500&q=80";
  }
  if (t.includes("chiplun") || t.includes("ratnagiri") || t.includes("beach") || t.includes("goa")) {
    return "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80";
  }
  return "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80";
}

export function RoutePage({ route }: { route: OutstationRoute }) {
  const { openBooking } = useBooking();
  const [expandedStop, setExpandedStop] = useState<number | null>(null);

  const crumbs = [
    { name: "Outstation", path: "/outstation" },
    { name: route.title, path: `/${route.slug}` },
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-primary/30 pt-28 pb-16 text-white md:pt-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
              {route.badge}
            </p>
            {/* 1.8 Visible Freshness Line */}
            <span className="text-xs font-medium text-white/75 bg-white/5 border border-white/10 rounded-full px-3 py-1">
              Last updated: October 2026
            </span>
          </div>

          <h1 className="max-w-4xl font-display text-4xl font-extrabold md:text-6xl animate-fade-in-scale">
            {route.headline}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/80 leading-relaxed">{route.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#pricing">Get Quote for {route.to}</Button>
            <Button variant="outline" href={telHref()}>
              Call Now
            </Button>
            <Button
              variant="whatsapp"
              href={whatsappHref(`Hi, I want a quote for ${route.title} on [date]`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </Button>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {route.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center transition-all duration-300 hover:border-white/30 hover:bg-white/15"
              >
                <dt className="font-display text-xl font-bold text-accent md:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-white/75">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={crumbs} />

        {/* 2. Quick Answer Box (Crucial for Google Featured Snippets & AI answers) */}
        {route.quickAnswer && (
          <div className="mb-10 rounded-2xl border-l-4 border-primary bg-primary/5 p-5 md:p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">⚡</span>
              <h2 className="font-display text-lg font-bold text-navy">
                Quick Answer: {route.title}
              </h2>
            </div>
            <p className="text-gray-800 text-sm md:text-base leading-relaxed">
              {route.quickAnswer}
            </p>
          </div>
        )}

        {/* Highlights Grid */}
        <section className="py-4">
          <h2 className="mb-6 font-display text-2xl font-bold text-navy md:text-3xl">
            Why Choose Our {route.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {route.highlights.map((item) => (
              <button
                key={item.title}
                onClick={() => openBooking(route.title)}
                className="w-full text-left focus:outline-none cursor-pointer"
              >
                <Card className="h-full border border-transparent p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-2xl hover:ring-2 hover:ring-primary/5 active:scale-[0.98] group flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                      <div className="transition-transform duration-300 group-hover:scale-110">
                        {getHighlightIcon(item.title)}
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span>Book Now</span>
                    <svg
                      className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Card>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* 3. Responsive Fare Table (Replaces duplicate cards bloat) */}
      {route.fareTable && route.fareTable.length > 0 && (
        <section id="pricing" className="bg-light py-12 md:py-16 scroll-mt-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-8 text-center md:text-left">
              <h2 className="font-display text-2xl font-bold text-navy md:text-4xl">
                {route.title} Fare (One Way)
              </h2>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Published rates per kilometre and calculated base fares. No surge pricing, no hidden charges.
              </p>
            </div>

            {/* Mobile Horizontally Scrollable Table Container */}
            <div className="overflow-x-auto rounded-2xl bg-white shadow-md border border-gray-100">
              <table className="w-full min-w-[650px] text-left border-collapse text-sm">
                <thead className="bg-navy text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4 font-semibold">Vehicle</th>
                    <th className="py-3.5 px-4 font-semibold">Seats</th>
                    <th className="py-3.5 px-4 font-semibold">Rate per km</th>
                    <th className="py-3.5 px-4 font-semibold">One-Way Base Fare ({route.distance})</th>
                    <th className="py-3.5 px-4 font-semibold">Best For</th>
                    <th className="py-3.5 px-4 font-semibold text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {route.fareTable.map((row, idx) => (
                    <tr
                      key={row.vehicle}
                      className={`transition-colors hover:bg-primary/[0.02] ${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      <td className="py-3.5 px-4 font-bold text-navy">{row.vehicle}</td>
                      <td className="py-3.5 px-4 text-gray-600">{row.seats}</td>
                      <td className="py-3.5 px-4 font-semibold text-primary">₹{row.ratePerKm}/km</td>
                      <td className="py-3.5 px-4 font-bold text-emerald-700">₹{row.oneWayBaseFare.toLocaleString("en-IN")}</td>
                      <td className="py-3.5 px-4 text-gray-600 text-xs">{row.bestFor || "Comfortable ride"}</td>
                      <td className="py-3.5 px-4 text-center">
                        <Button
                          size="sm"
                          onClick={() => openBooking(`${route.title} - ${row.vehicle}`)}
                        >
                          Book Now
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Under the Table Small Text Note */}
            {route.fareTableNote && (
              <p className="mt-4 text-xs text-gray-500 leading-relaxed bg-white/70 p-4 rounded-xl border border-gray-100">
                {route.fareTableNote}
              </p>
            )}
          </div>
        </section>
      )}

      {/* 4. What Is Included and What Is Not */}
      {route.included && route.included.length > 0 && (
        <section className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy md:text-3xl text-center md:text-left">
              What Is Included and What Is Not
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-emerald-900 flex items-center gap-2 mb-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">✓</span>
                  Included in Base Fare
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {route.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-amber-50/40 p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-amber-900 flex items-center gap-2 mb-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-600 text-white text-xs font-bold">!</span>
                  Extra at Actuals (With Itemised Receipts)
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {route.extraAtActuals?.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. Why Travellers Book / Trip Planning Note */}
      {route.whyBook && (
        <section className="py-12 bg-light">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="font-display text-2xl font-bold text-navy mb-3">
                {route.whyBook.title}
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {route.whyBook.content}
              </p>
              {route.whyBook.highlightLinkText && route.whyBook.highlightLinkHref && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href={route.whyBook.highlightLinkHref}
                    className="font-semibold text-primary hover:underline text-sm inline-flex items-center gap-1.5"
                  >
                    <span>{route.whyBook.highlightLinkText}</span>
                    <span>→</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 6. Pickup and Drop Areas */}
      {route.pickupAreas && route.dropAreas && (
        <section className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy md:text-3xl text-center md:text-left">
              Pickup Areas in {route.from} and Drop Areas in {route.to}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-6 border-l-4 border-primary">
                <h3 className="font-display text-lg font-bold text-navy mb-2 flex items-center gap-2">
                  <span>📍 Pickup Coverage in {route.from}</span>
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {route.pickupAreas}
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-accent">
                <h3 className="font-display text-lg font-bold text-navy mb-2 flex items-center gap-2">
                  <span>🎯 Drop Locations in {route.to}</span>
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {route.dropAreas}
                </p>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* 7. Best Time to Travel */}
      {route.bestTimeToTravel && (
        <section className="bg-light py-12">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="font-display text-xl md:text-2xl font-bold text-navy mb-3 flex items-center gap-2">
                <span>⏰ Best Time to Leave for {route.to}</span>
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {route.bestTimeToTravel}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 8. Transport Comparison Table (Cab vs Train vs Bus vs Self-Drive) */}
      {route.comparisonTable && route.comparisonTable.length > 0 && (
        <section className="bg-white py-12 md:py-16 border-b border-gray-100">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="mb-4 font-display text-2xl font-bold text-navy md:text-3xl">
              Cab vs Train vs Bus vs Self-Drive
            </h2>
            <p className="mb-6 text-gray-600 text-sm">
              How private taxi compares with alternative transit modes for your trip to {route.to}:
            </p>

            <div className="overflow-x-auto rounded-2xl bg-white shadow-md border border-gray-100">
              <table className="w-full min-w-[600px] text-left border-collapse text-sm">
                <thead className="bg-navy text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4 font-semibold">Option</th>
                    <th className="py-3.5 px-4 font-semibold">Door to Door</th>
                    <th className="py-3.5 px-4 font-semibold">Luggage</th>
                    <th className="py-3.5 px-4 font-semibold">Timing Control</th>
                    <th className="py-3.5 px-4 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {route.comparisonTable.map((row) => (
                    <tr key={row.option} className="hover:bg-gray-50/70 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-navy">{row.option}</td>
                      <td className="py-3.5 px-4 text-gray-700">{row.doorToDoor}</td>
                      <td className="py-3.5 px-4 text-gray-700">{row.luggage}</td>
                      <td className="py-3.5 px-4 text-gray-700">{row.timingControl}</td>
                      <td className="py-3.5 px-4 font-medium text-gray-800 text-xs">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              For three or more people, or with luggage, a private cab is usually the most convenient. Check current train and bus fares directly with the operators.
            </p>
          </div>
        </section>
      )}

      {/* 9. Airport Pickup Feature Note */}
      {route.airportNote && (
        <section className="bg-light py-10">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="font-display text-xl md:text-2xl font-bold text-navy mb-2 flex items-center gap-2">
                <span>✈️ Mumbai Airport to {route.to} Cab</span>
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {route.airportNote}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 10. Route Details & Interactive Scenic Pitstops */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-bold tracking-wide text-primary uppercase">
            Travel guide
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy md:text-4xl">
            {route.guideTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-gray-600">{route.guideIntro}</p>

          <Card className="mt-8 p-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100/50 bg-gradient-to-br from-white to-gray-50/50">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-navy flex items-center gap-2">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  {route.from} to {route.to} Route Details
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {route.distance} · {route.duration} · Toll: {route.routeMap.toll}
                </p>
              </div>
              <a
                href={route.routeMap.mapsUrl}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-primary/95 transition-all duration-300 active:scale-95 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View on Google Maps</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="mt-6 space-y-4 border-t border-gray-100 pt-5">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Road Corridor</span>
                <p className="text-gray-700 font-semibold mt-0.5">{route.routeMap.via}</p>
              </div>

              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-2">Interactive Highway Stop Nodes</span>
                <div className="flex flex-wrap items-center gap-y-3 gap-x-2 text-xs">
                  {route.routeMap.primary.split(" → ").map((stopName, idx, arr) => (
                    <div key={stopName} className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 bg-white border border-gray-200 text-navy font-semibold px-2.5 py-1.5 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm cursor-pointer active:scale-95 group/node">
                        <svg className="h-3 w-3 text-gray-400 group-hover/node:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {stopName}
                      </span>
                      {idx < arr.length - 1 && (
                        <span className="text-gray-300 font-bold select-none">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <ol className="mt-8 space-y-4">
            {route.stops.map((stop, index) => {
              const isExpanded = expandedStop === index;
              return (
                <li
                  key={stop.title}
                  className={`flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 transition-all duration-300 cursor-pointer ${
                    isExpanded
                      ? "ring-primary shadow-md bg-primary/[0.01]"
                      : "ring-black/5 hover:shadow-md hover:ring-primary/20"
                  } group`}
                  onClick={() => setExpandedStop(isExpanded ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold text-white transition-all duration-300 ${
                        isExpanded ? "bg-primary scale-110 shadow-md shadow-primary/25" : "bg-gradient-to-br from-primary to-accent group-hover:scale-110"
                      }`}>
                        {index + 1}
                      </span>
                      <h3 className="font-display text-lg font-bold text-navy self-center">
                        {stop.title}
                      </h3>
                    </div>
                    <span className={`text-primary transition-transform duration-300 shrink-0 ${isExpanded ? "rotate-180" : ""}`}>
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                  <p className="pl-12 text-gray-600 text-sm leading-relaxed">{stop.body}</p>
                  
                  {isExpanded && (
                    <div className="pl-12 mt-3 pt-4 border-t border-dashed border-gray-100 grid gap-4 md:grid-cols-3 animate-fade-in-scale">
                      <div className="md:col-span-1 relative h-36 w-full overflow-hidden rounded-xl shadow-sm border border-gray-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={getStopImage(stop.title)}
                          alt={stop.title}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="md:col-span-2 flex flex-col justify-between">
                        <p className="text-xs text-primary font-semibold leading-relaxed">
                          {getStopRecommendation(stop.title)}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openBooking(`${route.title} - Stop: ${stop.title}`);
                          }}
                          className="mt-4 self-start inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
                        >
                          <span>Plan Pitstop here</span>
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <FaqSection items={route.faqs} />

      {/* 12. Also Serving & Contextual Links */}
      <section className="px-4 py-8 bg-light">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 font-display text-2xl font-bold text-navy">
            Popular Outstation Routes & Related Services
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {relatedRoutes(route.slug).map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="group rounded-2xl bg-white p-5 shadow-sm border border-transparent hover:border-primary/20 hover:shadow-xl hover:ring-2 hover:ring-primary/5 transition-all duration-300 block"
              >
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <span className="block font-display font-bold text-navy group-hover:text-primary transition-colors duration-300">
                      {item.from} to {item.to}
                    </span>
                    <span className="text-sm text-gray-500 mt-1 block">{item.distance}</span>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary shrink-0 transition-all duration-300">
                    <svg
                      className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* In-body Contextual Cross-links */}
          {route.contextualLinks && route.contextualLinks.length > 0 && (
            <div className="mt-8 rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                Quick Navigation & Related Pages
              </span>
              <div className="flex flex-wrap gap-2.5">
                {route.contextualLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-gray-50 px-3.5 py-1.5 text-xs font-semibold text-gray-700 border border-gray-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                  >
                    <span>{link.title}</span>
                    <span className="text-gray-400 group-hover:text-white">→</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 13. CTA Banner */}
      <CtaBanner
        title={`Book your ${route.from} to ${route.to} trip`}
        description="Send a WhatsApp enquiry and get an instant quote for one-way, round-trip, or airport pickup."
      />
    </>
  );
}
