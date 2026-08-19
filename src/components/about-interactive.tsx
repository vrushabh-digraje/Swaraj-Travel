"use client";

import { useState } from "react";
import { Card } from "@/components/card";

// Core Values with custom SVG icon components
const CORE_VALUES = [
  {
    title: "Safety",
    body: "Your safety is our top priority, from strict vehicle safety checks to professional background-verified highway drivers.",
    icon: (
      <svg className="h-7 w-7 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Trust",
    body: "Transparent pricing per kilometer, zero surprise charges at the end of the trip, and committed, guaranteed pickups.",
    icon: (
      <svg className="h-7 w-7 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    body: "Freshly sanitized cars, punctual pickups, and a customer support team that remains available round the clock.",
    icon: (
      <svg className="h-7 w-7 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const MILESTONES = [
  {
    year: "2018",
    title: "The Genesis",
    description: "Swaraj Travel started with only 5 vehicles in Mumbai, focusing solely on reliable airport pickups and local drops.",
    stat: "5 Cabs · 1 City",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=500&q=80",
  },
  {
    year: "2020",
    title: "Expressway Expansion",
    description: "Despite challenges, we expanded our services to the Mumbai-Pune Expressway and Nashik highway routes with specialized ghat drivers.",
    stat: "25 Cabs · 10K+ Trips",
    img: "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=500&q=80",
  },
  {
    year: "2023",
    title: "Scale & Digital Booking",
    description: "Launched corporate travel tie-ups and expanded our fleet to include luxury SUVs (Innova Crysta) and buses for travel groups.",
    stat: "80 Cabs · 30K+ Happy Customers",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=80",
  },
  {
    year: "2026",
    title: "Pan-Maharashtra Reach",
    description: "Now serving over 50 cities and towns across Maharashtra. Launching interactive routes maps, transparent fares booking, and 24/7 live chat.",
    stat: "120+ Cabs · 50+ Cities covered",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80",
  },
];

const DRIVERS = [
  {
    name: "Ramesh Shinde",
    experience: "12+ Years",
    rating: "4.95",
    trips: "1,500+",
    specialty: "Expressway & Western Ghats expert",
    badge: "Ghat Master",
    img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Milind Kadam",
    experience: "8+ Years",
    rating: "4.92",
    trips: "1,100+",
    specialty: "Mumbai Local & Airport transfers",
    badge: "Punctuality King",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Sanjay Patil",
    experience: "10+ Years",
    rating: "4.97",
    trips: "1,350+",
    specialty: "Long-distance Konkan & Shirdi trips",
    badge: "Safety Champion",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
  },
];

export function AboutInteractive() {
  const [activeYear, setActiveYear] = useState("2018");
  const [selectedDriver, setSelectedDriver] = useState<number | null>(null);

  const currentMilestone = MILESTONES.find((m) => m.year === activeYear)!;

  return (
    <div className="space-y-16">
      {/* Core Values Section */}
      <section>
        <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy">
          Our Core Values
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {CORE_VALUES.map((val) => (
            <Card
              key={val.title}
              className="p-6 border border-transparent hover:border-primary/20 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-primary/5 transition-all duration-300 group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 mb-4 group-hover:scale-110 transform">
                {val.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-navy group-hover:text-primary transition-colors">
                {val.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{val.body}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Interactive Milestones Timeline */}
      <section className="bg-gray-50/50 rounded-3xl p-8 border border-gray-100">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Our Growth</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy mb-8">
            Our Journey Milestones
          </h2>
          
          {/* Timeline tabs */}
          <div className="relative flex justify-between items-center max-w-md mx-auto mb-10">
            {/* Background progress line */}
            <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-1/2 -translate-y-1/2 -z-10" />
            
            {MILESTONES.map((m) => {
              const isActive = activeYear === m.year;
              return (
                <button
                  key={m.year}
                  onClick={() => setActiveYear(m.year)}
                  className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-bold text-sm border-2 cursor-pointer transition-all duration-300 active:scale-90 ${
                    isActive
                      ? "bg-primary border-primary text-white shadow-md shadow-primary/25 scale-110"
                      : "bg-white border-gray-200 text-gray-400 hover:border-primary hover:text-primary"
                  }`}
                >
                  {m.year}
                </button>
              );
            })}
          </div>

          {/* Active Milestone Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 max-w-2xl mx-auto grid md:grid-cols-2 animate-fade-in-scale">
            {/* Left Image */}
            <div className="relative h-48 md:h-full w-full overflow-hidden bg-gray-100 min-h-[200px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentMilestone.img}
                alt={currentMilestone.title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Right text contents */}
            <div className="p-6 text-left flex flex-col justify-center">
              <div>
                <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-lg">
                  {currentMilestone.stat}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-navy">
                  {currentMilestone.title} ({currentMilestone.year})
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {currentMilestone.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Chauffeur Show */}
      <section>
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-bold tracking-widest text-primary uppercase">Elite Crew</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy">
            Our Professional Chauffeurs
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Every driver at Swaraj Travel undergoes safety training, route testing, and customer service certification.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {DRIVERS.map((drv, idx) => {
            const isSelected = selectedDriver === idx;
            return (
              <div
                key={drv.name}
                onClick={() => setSelectedDriver(isSelected ? null : idx)}
                className={`rounded-2xl bg-white border transition-all duration-300 cursor-pointer overflow-hidden group shadow-sm ${
                  isSelected
                    ? "border-primary ring-4 ring-primary/5 shadow-md"
                    : "border-gray-100 hover:border-primary/20 hover:shadow-md"
                }`}
              >
                {/* Driver Photo with overlay badge */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={drv.img}
                    alt={drv.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-bold text-white bg-primary px-2.5 py-1 rounded-full shadow-sm">
                    {drv.badge}
                  </span>
                </div>

                {/* Driver info */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-navy group-hover:text-primary transition-colors">
                    {drv.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-semibold text-gray-400">Rating:</span>
                    <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5">
                      ★ {drv.rating}
                    </span>
                  </div>

                  {/* Expanded driver details */}
                  {isSelected ? (
                    <div className="mt-4 pt-4 border-t border-dashed border-gray-100 text-xs text-gray-600 space-y-2 animate-fade-in-scale">
                      <div>
                        <span className="font-semibold text-navy">Experience: </span>
                        {drv.experience} driving in Maharashtra.
                      </div>
                      <div>
                        <span className="font-semibold text-navy">Completed Trips: </span>
                        {drv.trips} verified outstations.
                      </div>
                      <div>
                        <span className="font-semibold text-navy">Route Specialty: </span>
                        {drv.specialty}.
                      </div>
                      <div className="text-[10px] text-primary font-bold mt-2 uppercase tracking-wide">
                        Click again to close details
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3 text-xs text-primary font-bold uppercase tracking-wider flex items-center gap-1">
                      <span>Show Driver Stats</span>
                      <svg className="h-3 w-3 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
