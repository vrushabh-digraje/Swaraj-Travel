"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/card";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  ChevronDownIcon,
  TaxiIcon,
} from "@/components/icons";
import { useBooking } from "@/lib/booking-context";
import { SITE, telHref, whatsappHref } from "@/lib/site";
import {
  RATE_CARD,
  WORKED_COST_EXAMPLE,
  PACKAGE_COMPARISON,
  SOUTH_MUMBAI_CIRCUIT,
  NORTH_MUMBAI_CIRCUIT,
  VEHICLE_LUGGAGE_DATA,
  PICKUP_ZONES,
  TRANSPORT_COMPARISON,
  BOOKING_STAGES,
  MUMBAI_DARSHAN_FAQS,
} from "@/lib/mumbai-darshan";

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

const CALCULATOR_RATES: Record<string, { perKm: number; h4: number; h8: number; h10: number; h12: number; seats: string }> = {
  "Swift Dzire": { perKm: 14, h4: 560, h8: 1120, h10: 1400, h12: 1680, seats: "4+1" },
  "Hyundai Aura": { perKm: 14, h4: 560, h8: 1120, h10: 1400, h12: 1680, seats: "4+1" },
  "Toyota Etios": { perKm: 15, h4: 600, h8: 1200, h10: 1500, h12: 1800, seats: "4+1" },
  "Maruti Ertiga": { perKm: 16, h4: 640, h8: 1280, h10: 1600, h12: 1920, seats: "6+1" },
  "Kia Carens": { perKm: 20, h4: 800, h8: 1600, h10: 2000, h12: 2400, seats: "6+1" },
  "Toyota Innova": { perKm: 20, h4: 800, h8: 1600, h10: 2000, h12: 2400, seats: "6+1" },
  "Innova Crysta": { perKm: 24, h4: 960, h8: 1920, h10: 2400, h12: 2880, seats: "6+1" },
  "Mahindra Scorpio": { perKm: 24, h4: 960, h8: 1920, h10: 2400, h12: 2880, seats: "8+1" },
  "Chevrolet Tavera": { perKm: 26, h4: 1040, h8: 2080, h10: 2600, h12: 3120, seats: "8+1" },
};

const PICKUP_OPTIONS = [
  { label: "Western Suburbs (Andheri, Bandra, Juhu)", kmNote: "0 - 10 km pre-route", toll: 0 },
  { label: "South Mumbai (Colaba, Fort, Marine Drive)", kmNote: "20 - 25 km pre-route", toll: 0 },
  { label: "Central Suburbs (Ghatkopar, Kurla)", kmNote: "10 - 15 km pre-route", toll: 0 },
  { label: "Navi Mumbai (via Atal Setu MTHL)", kmNote: "35 - 45 km pre-route", toll: 250 },
  { label: "Thane / Mira Road", kmNote: "40 - 55 km pre-route", toll: 0 },
];

const URBANIA_HERO_SLIDES = [
  {
    id: "heritage",
    tabLabel: "Heritage Tour",
    icon: "🏛️",
    badge: "South Mumbai Heritage Circuit",
    image: "/images/urbania-mumbai-darshan-heritage.webp",
    alt: "Force Urbania luxury tourist passenger van touring South Mumbai heritage landmarks in Fort and Colaba",
    title: "Force Urbania at South Mumbai Heritage Circuit",
    caption: "Our private Force Urbania touring South Mumbai heritage landmarks across Fort, Colaba, and Hutatma Chowk on a full day Mumbai Darshan tour.",
    description: "Designed for royal comfort and panoramic sightseeing. Glide past Mumbai's Victorian Gothic architectural marvels with extra-large viewing windows.",
    highlights: ["13 / 17 Reclining Seats", "South Mumbai Heritage Circuit", "Dedicated Rear Luggage Bay"],
  },
  {
    id: "coastal",
    tabLabel: "Marine Drive Cruise",
    icon: "🌊",
    badge: "Scenic Sea Promenade",
    image: "/images/urbania-mumbai-darshan-coastal.webp",
    alt: "Force Urbania private tourist van driving along Mumbai Marine Drive sea promenade with Arabian Sea view",
    title: "Coastal Sightseeing on Marine Drive Promenade",
    caption: "Force Urbania cruising smoothly along Marine Drive and Worli Sea Face with unhindered panoramic ocean views.",
    description: "Experience the sea breeze along Queen's Necklace and Bandra-Worli Sea Link with high-stability suspension and whisper-quiet cabin acoustics.",
    highlights: ["Panoramic Tinted Glass", "Smooth Sea-Link High Speed Ride", "Iconic Ocean Vista"],
  },
  {
    id: "interior",
    tabLabel: "Luxury Cabin",
    icon: "🛋️",
    badge: "Executive VIP Comfort",
    image: "/images/urbania-mumbai-darshan-interior.webp",
    alt: "Force Urbania luxury passenger cabin with diamond-quilted reclining bucket seats, personal AC vents, and ambient lighting",
    title: "Executive First-Class Passenger Cabin",
    caption: "Inside our Force Urbania: Individual diamond-quilted pushback bucket seats, dual roof-mounted AC vents, and personal USB chargers.",
    description: "Individual plush bucket seats with armrests, generous legroom, wide central walk-through aisle, individual reading lights, and powerful dual AC.",
    highlights: ["Pushback Bucket Seats", "Individual Roof AC Vents", "Personal USB & Reading Lamps"],
  },
];

export function MumbaiDarshanContent() {
  const { openBooking } = useBooking();
  const phone = SITE.phone;
  const phoneDisplay = SITE.phoneDisplay;
  const waUrl = (msg: string) => whatsappHref(msg);

  // Hero: Force Urbania Interactive Showcase State
  const [urbaniaHeroIndex, setUrbaniaHeroIndex] = useState(0);

  // Section 1: Inclusions / Exclusions Interactive State
  const [incFilter, setIncFilter] = useState<"all" | "included" | "separate">("all");
  const [expandedInc, setExpandedInc] = useState<Record<string, boolean>>({});
  const [incViewMode, setIncViewMode] = useState<"interactive" | "table">("interactive");
  const [showExtrasCalc, setShowExtrasCalc] = useState(false);
  const [extraSeaLink, setExtraSeaLink] = useState(false);
  const [extraAtalSetu, setExtraAtalSetu] = useState(false);
  const [extraParkingStops, setExtraParkingStops] = useState(3);
  const [extraMuseumVisitors, setExtraMuseumVisitors] = useState(2);

  const toggleIncItem = (id: string) => {
    setExpandedInc((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const calculatedDayExtras = useMemo(() => {
    let total = 300; // driver allowance
    if (extraSeaLink) total += 85;
    if (extraAtalSetu) total += 250;
    total += extraParkingStops * 60;
    total += extraMuseumVisitors * 150;
    return total;
  }, [extraSeaLink, extraAtalSetu, extraParkingStops, extraMuseumVisitors]);

  // Rate Card Notes Slightly Interactive State
  const [selectedHalfDayCab, setSelectedHalfDayCab] = useState("Swift Dzire");
  const [showTimingRules, setShowTimingRules] = useState(false);

  // Interactive Cost Breakdown Infographic State (Real Image Replacement)
  const [costInfographicCab, setCostInfographicCab] = useState<"Swift Dzire" | "Maruti Ertiga" | "Innova Crysta">("Swift Dzire");
  const [activeCostSegment, setActiveCostSegment] = useState<number | null>(null);

  const costInfographicData = useMemo(() => {
    let fare = 1120;
    if (costInfographicCab === "Maruti Ertiga") fare = 1280;
    if (costInfographicCab === "Innova Crysta") fare = 1920;
    const allowance = 300;
    const parkingMin = 200;
    const parkingMax = 400;
    const museumMin = 400;
    const museumMax = 700;
    const minTotal = fare + allowance + parkingMin + museumMin;
    const maxTotal = fare + allowance + parkingMax + museumMax;
    return { fare, allowance, parkingMin, parkingMax, museumMin, museumMax, minTotal, maxTotal };
  }, [costInfographicCab]);

  // Section 3: Package Comparison Interactive State
  const [pkgCompareVehicle, setPkgCompareVehicle] = useState<"Swift Dzire" | "Maruti Ertiga" | "Innova Crysta">("Swift Dzire");
  const [selectedPkgRow, setSelectedPkgRow] = useState<string>("Standard full day");
  const [activeOneDayTab, setActiveOneDayTab] = useState<"8h" | "10h" | "2days" | "separate">("10h");

  // Interactive Route Map (Image 2) & Itinerary Timeline (Image 5) State
  const [mapActiveCircuit, setMapActiveCircuit] = useState<"all" | "south" | "north">("all");
  const [mapSelectedStop, setMapSelectedStop] = useState<string | null>(null);
  const [timelineActiveIndex, setTimelineActiveIndex] = useState(1); // 0 to 7 (default Gateway of India)

  // 1. Rate Card Category Filter
  const [rateCategory, setRateCategory] = useState<"all" | "sedan" | "suv" | "bus">("all");

  // 2. Interactive Calculator State
  const [calcVehicle, setCalcVehicle] = useState("Swift Dzire");
  const [calcPackage, setCalcPackage] = useState<"h4" | "h8" | "h10" | "h12">("h8");
  const [calcPickup, setCalcPickup] = useState(0);

  // 3. Landmark Search & Filter
  const [landmarkQuery, setLandmarkQuery] = useState("");
  const [circuitFilter, setCircuitFilter] = useState<"all" | "south" | "north" | "free" | "monday">("all");

  // 4. Itinerary Switcher
  const [activeItinerary, setActiveItinerary] = useState("all");

  // 5. Luggage Capacity Advisor
  const [passengerCount, setPassengerCount] = useState(4);
  const [luggageCount, setLuggageCount] = useState(2);

  // 6. FAQ Accordion & Search
  const [faqQuery, setFaqQuery] = useState("");
  const [faqCategory, setFaqCategory] = useState<"all" | "fare" | "route" | "policy">("all");
  const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true });

  // 7. Overtime & Extra Km Simulator (Section 2, H3 05)
  const [extraHours, setExtraHours] = useState(1);
  const [extraKm, setExtraKm] = useState(15);
  const [extraVehicle, setExtraVehicle] = useState("Swift Dzire");
  const [activeReasonTip, setActiveReasonTip] = useState<number | null>(null);
  const [activeWindowTab, setActiveWindowTab] = useState<"standard" | "late" | "night">("standard");

  const toggleFaq = (idx: number) => {
    setExpandedFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const expandAllFaqs = () => {
    const all: Record<number, boolean> = {};
    MUMBAI_DARSHAN_FAQS.forEach((_, i) => (all[i] = true));
    setExpandedFaqs(all);
  };

  const collapseAllFaqs = () => {
    setExpandedFaqs({});
  };

  // Calculated estimates
  const currentVehicleRate = CALCULATOR_RATES[calcVehicle] || CALCULATOR_RATES["Swift Dzire"];
  const packageFare = currentVehicleRate[calcPackage];
  const driverAllowance = 300;
  const estimatedParking = 300;
  const estimatedToll = PICKUP_OPTIONS[calcPickup]?.toll || 0;
  const estimatedMuseum = 500;
  const totalDayEstimate = packageFare + driverAllowance + estimatedParking + estimatedToll + estimatedMuseum;

  // Overrun calculation
  const extraRatePerKm = CALCULATOR_RATES[extraVehicle]?.perKm || 14;
  const extraHoursCost = extraHours * 150;
  const extraKmCost = extraKm * extraRatePerKm;
  const totalExtraCost = extraHoursCost + extraKmCost;

  const packageNames: Record<string, string> = {
    h4: "Half Day (4 hrs / 40 km)",
    h8: "Standard Full Day (8 hrs / 80 km)",
    h10: "Extended Day (10 hrs / 100 km)",
    h12: "Long Day (12 hrs / 120 km)",
  };

  // Filtered Rate Card rows
  const filteredRateCard = useMemo(() => {
    if (rateCategory === "sedan") return RATE_CARD.filter((r) => r.seats.startsWith("4"));
    if (rateCategory === "suv") return RATE_CARD.filter((r) => r.seats.startsWith("6") || r.seats.startsWith("8"));
    if (rateCategory === "bus") return RATE_CARD.filter((r) => r.seats.includes("seater"));
    return RATE_CARD;
  }, [rateCategory]);

  // Filtered Landmarks
  const filteredSouth = useMemo(() => {
    return SOUTH_MUMBAI_CIRCUIT.filter((item) => {
      const matchText = (item.landmark + " " + item.area + " " + item.cabNote).toLowerCase().includes(landmarkQuery.toLowerCase());
      if (!matchText) return false;
      if (circuitFilter === "north") return false;
      if (circuitFilter === "free" && !item.entry.toLowerCase().includes("free")) return false;
      if (circuitFilter === "monday" && !item.closed.toLowerCase().includes("monday")) return false;
      return true;
    });
  }, [landmarkQuery, circuitFilter]);

  const filteredNorth = useMemo(() => {
    return NORTH_MUMBAI_CIRCUIT.filter((item) => {
      const matchText = (item.landmark + " " + item.area + " " + item.cabNote).toLowerCase().includes(landmarkQuery.toLowerCase());
      if (!matchText) return false;
      if (circuitFilter === "south") return false;
      if (circuitFilter === "free" && !item.entry.toLowerCase().includes("free")) return false;
      if (circuitFilter === "monday" && !item.closed.toLowerCase().includes("monday")) return false;
      return true;
    });
  }, [landmarkQuery, circuitFilter]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return MUMBAI_DARSHAN_FAQS.map((faq, index) => ({ faq, index })).filter(({ faq }) => {
      const matchQuery = (faq.question + " " + faq.answer).toLowerCase().includes(faqQuery.toLowerCase());
      if (!matchQuery) return false;
      if (faqCategory === "fare") {
        return faq.question.toLowerCase().includes("cost") || faq.question.toLowerCase().includes("fare") || faq.question.toLowerCase().includes("included") || faq.question.toLowerCase().includes("exceed");
      }
      if (faqCategory === "route") {
        return faq.question.toLowerCase().includes("itinerary") || faq.question.toLowerCase().includes("route") || faq.question.toLowerCase().includes("closed") || faq.question.toLowerCase().includes("day");
      }
      if (faqCategory === "policy") {
        return faq.question.toLowerCase().includes("cancel") || faq.question.toLowerCase().includes("driver") || faq.question.toLowerCase().includes("pickup") || faq.question.toLowerCase().includes("ac");
      }
      return true;
    });
  }, [faqQuery, faqCategory]);

  // Luggage fit recommendation
  const recommendedVehicle = useMemo(() => {
    if (passengerCount <= 3 && luggageCount <= 2) return { name: "Swift Dzire / Aura", reason: "Comfortable for up to 3 adults with 2 bags." };
    if (passengerCount <= 5 && luggageCount <= 3) return { name: "Maruti Ertiga", reason: "Ideal for 4-5 adults with moderate boot space." };
    if (passengerCount <= 6 && luggageCount <= 5) return { name: "Innova Crysta", reason: "Best comfort for family elders, ample legroom and 4-5 large bags." };
    if (passengerCount <= 8) return { name: "Mahindra Scorpio / Tavera", reason: "Accommodates 8 passengers for full day local sightseeing." };
    return { name: "Tempo Traveller (13/17 Seater)", reason: "Dedicated luggage bay with pushback seats for large families or groups." };
  }, [passengerCount, luggageCount]);

  return (
    <article className="space-y-12 py-6 text-navy md:space-y-16">
      {/* 01: H1 (Top of page) */}
      <header className="mx-auto max-w-[1080px] text-center px-4">
        <h1 className="font-display text-3xl font-extrabold leading-tight text-navy md:text-5xl lg:text-6xl">
          Mumbai Darshan Cab: Full Day Private Sightseeing Car Hire in Mumbai
        </h1>
        <p className="mt-4 text-base text-gray-700 md:text-lg">
          A private car with driver for the whole day, a route you decide, and every cost explained before you pay. Pickup from anywhere in Mumbai, Thane or Navi Mumbai.
        </p>
        <p className="mt-2 text-sm font-semibold text-primary">
          Swift Dzire full day, 8 hours and 80 km, from ₹1,120 plus driver allowance
        </p>

        {/* CTA 1: After H1 */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={telHref()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-navy shadow-md transition-all hover:bg-accent-hover"
          >
            <PhoneIcon className="h-4 w-4" />
            Call {phoneDisplay}
          </a>
          <a
            href={waUrl("Hi, I want a Mumbai Darshan cab on [date], pickup from [area]")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-green-600"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-3 text-xs text-gray-500">
          <a href="#fare-table" className="underline hover:text-primary">
            ↓ See full fare table
          </a>
          <span className="mx-2">•</span>
          <span>Fares on this page are calculated from our published per kilometre rates. Last reviewed January 2026.</span>
        </div>

        {/* IMAGE 1: Interactive Force Urbania Showcase Directly under H1 (Eager loading) */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300">
          {/* Interactive Navigation Tab Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-gray-100 bg-gray-50/90 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-navy">
                Force Urbania Fleet Showcase
              </span>
              <span className="hidden sm:inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                13 & 17 Seater AC Luxury
              </span>
            </div>

            {/* Interactive View Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {URBANIA_HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setUrbaniaHeroIndex(idx)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                    urbaniaHeroIndex === idx
                      ? "bg-navy text-white shadow-sm ring-1 ring-navy"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                  aria-label={`Switch to ${slide.tabLabel}`}
                >
                  <span>{slide.icon}</span>
                  <span>{slide.tabLabel}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Image Container with Overlays & Navigation Controls */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-950 group">
            <img
              src={URBANIA_HERO_SLIDES[urbaniaHeroIndex].image}
              title={URBANIA_HERO_SLIDES[urbaniaHeroIndex].title}
              alt={URBANIA_HERO_SLIDES[urbaniaHeroIndex].alt}
              width={1280}
              height={720}
              loading="eager"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />

            {/* Subtle Gradient Vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />

            {/* Top Badge */}
            <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
              <span className="rounded-lg bg-navy/85 backdrop-blur-md px-3 py-1 text-xs font-bold text-white shadow-sm border border-white/10">
                {URBANIA_HERO_SLIDES[urbaniaHeroIndex].badge}
              </span>
            </div>

            {/* Quick Next / Prev Arrows */}
            <button
              type="button"
              onClick={() => setUrbaniaHeroIndex((prev) => (prev === 0 ? URBANIA_HERO_SLIDES.length - 1 : prev - 1))}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-navy backdrop-blur-sm shadow-md hover:bg-white hover:scale-105 transition-all"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setUrbaniaHeroIndex((prev) => (prev === URBANIA_HERO_SLIDES.length - 1 ? 0 : prev + 1))}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-navy backdrop-blur-sm shadow-md hover:bg-white hover:scale-105 transition-all"
              aria-label="Next image"
            >
              →
            </button>

            {/* Bottom Overlay Info inside the Image */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-5 sm:right-5 text-white">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <div>
                  <p className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                    Book A Cab Premium Tour Fleet
                  </p>
                  <p className="text-base font-bold text-white sm:text-xl drop-shadow-md">
                    {URBANIA_HERO_SLIDES[urbaniaHeroIndex].title}
                  </p>
                </div>
                {/* Dot Indicators */}
                <div className="flex items-center gap-1.5 self-start sm:self-auto pb-1">
                  {URBANIA_HERO_SLIDES.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setUrbaniaHeroIndex(dotIdx)}
                      className={`h-2 rounded-full transition-all ${
                        urbaniaHeroIndex === dotIdx ? "w-6 bg-amber-400" : "w-2 bg-white/60 hover:bg-white"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature Strip & Description under Image */}
          <div className="p-4 sm:p-5 bg-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {URBANIA_HERO_SLIDES[urbaniaHeroIndex].description}
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  {URBANIA_HERO_SLIDES[urbaniaHeroIndex].highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200/70 px-2.5 py-1 text-xs font-semibold text-amber-900"
                    >
                      <CheckIcon className="h-3.5 w-3.5 text-amber-600" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons for Urbania Booking */}
              <div className="flex flex-row items-center gap-2 shrink-0 pt-2 lg:pt-0">
                <button
                  type="button"
                  onClick={() => openBooking("Force Urbania (13/17 Seater)")}
                  className="rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-navy/90 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Book Urbania Now
                </button>
                <a
                  href={waUrl("Hi Book A Cab, I would like to check rate & availability for Force Urbania on Mumbai Darshan tour")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-600/30 bg-emerald-50 px-3.5 py-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100 transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </div>

          {/* Figcaption for SEO & Clarity */}
          <figcaption className="border-t border-gray-100 bg-gray-50/60 p-2.5 text-center text-xs font-medium text-gray-600 italic">
            {URBANIA_HERO_SLIDES[urbaniaHeroIndex].caption}
          </figcaption>
        </figure>
      </header>

      {/* 02: H2 - Section 1 */}
      <section className="mx-auto max-w-[1080px] px-4">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          What a Mumbai Darshan Cab Includes and What It Does Not
        </h2>
        <p className="mt-3 text-sm text-gray-700 leading-relaxed md:text-base">
          A Mumbai Darshan cab is a private car with driver hired for a fixed block of hours and kilometres, usually 8 hours and 80 km, to visit Mumbai&apos;s landmarks in one day. The car stays with you the whole time, waits at every stop, and follows the route you choose.
        </p>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed md:text-base">
          That last point is the real difference between hiring a cab and taking a tour bus. The vehicle belongs to your group for the day. Want forty minutes at Marine Drive instead of fifteen? Your call.
        </p>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed md:text-base">
          Here is exactly where the line sits between what your fare covers and what you pay for on the day.
        </p>

        {/* Interactive Controls Bar: Filter Pills & View Switcher */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-4">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Show:</span>
            {[
              { id: "all", label: "All Items (12)", count: 12 },
              { id: "included", label: "✓ Included in Fare (6)", count: 6 },
              { id: "separate", label: "ℹ️ Paid Separately (6)", count: 6 },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setIncFilter(f.id as any)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  incFilter === f.id
                    ? f.id === "included"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : f.id === "separate"
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-navy text-white shadow-xs"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1 self-start sm:self-auto">
            <span className="text-xs text-gray-500 mr-1">View:</span>
            <button
              type="button"
              onClick={() => setIncViewMode("interactive")}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                incViewMode === "interactive"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Interactive Cards
            </button>
            <button
              type="button"
              onClick={() => setIncViewMode("table")}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                incViewMode === "table"
                  ? "bg-primary text-white shadow-xs"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Comparison Table
            </button>
          </div>
        </div>

        {/* View 1: Interactive Cards View with Tap-to-Expand Details */}
        {incViewMode === "interactive" && (
          <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
            {[
              // Inclusions
              {
                id: "inc-1",
                category: "included",
                title: "AC vehicle and fuel for the booked hours and kilometres",
                summary: "Fuel & AC 100% covered for your booked package (40, 80, 100, or 120 km).",
                detail: "The air conditioning runs continuously throughout your sightseeing tour, even when waiting in traffic at Marine Drive or Dadar. No unexpected fuel top-up demands.",
                badge: "Included in Package",
                badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
                cost: "100% Covered",
                icon: "✓",
              },
              {
                id: "inc-2",
                category: "included",
                title: "Professional driver for the full duration",
                summary: "Experienced, background-checked city chauffeur dedicated to your family.",
                detail: "Our drivers know South Mumbai heritage alleys, traffic choke points, the cleanest restrooms, and best drop points near Gateway and Haji Ali.",
                badge: "Included in Package",
                badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
                cost: "100% Covered",
                icon: "✓",
              },
              {
                id: "inc-3",
                category: "included",
                title: "Driver waiting time at every stop",
                summary: "Zero waiting charges while you explore temples, museums, and seaside.",
                detail: "Spend 45 minutes at Marine Drive, 1 hour at Siddhivinayak Temple, or 2 hours inside CSMVS Museum without worrying about waiting meter charges.",
                badge: "Included in Package",
                badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
                cost: "No meter ticking",
                icon: "✓",
              },
              {
                id: "inc-4",
                category: "included",
                title: "Pickup and drop at your address",
                summary: "Doorstep pickup & drop across Mumbai, Thane, or Navi Mumbai.",
                detail: "Your chauffeur arrives directly at your hotel porch, home gate, airport terminal (T1/T2), or railway station (CSMT, Bandra Terminus, Dadar).",
                badge: "Included in Package",
                badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
                cost: "Doorstep Service",
                icon: "✓",
              },
              {
                id: "inc-5",
                category: "included",
                title: "A planned route you can change during the day",
                summary: "Full itinerary freedom — unlike fixed group tour buses.",
                detail: "You decide the pace. Want to skip a monument, take an early lunch at Britannia & Co, or stop for ice cream at Marine Drive? Simply tell your driver.",
                badge: "Included in Package",
                badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
                cost: "Flexible Freedom",
                icon: "✓",
              },
              {
                id: "inc-6",
                category: "included",
                title: "Itemised bill at the end of the trip",
                summary: "Transparent digital invoice with starting & closing odometer readings.",
                detail: "Every trip concludes with clear documentation verifying starting kilometer, closing kilometer, duty time, and any toll/parking slips attached.",
                badge: "Included in Package",
                badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
                cost: "Zero Surprises",
                icon: "✓",
              },

              // Paid Separately
              {
                id: "sep-1",
                category: "separate",
                title: "Toll charges such as Bandra Worli Sea Link, Atal Setu, Coastal Road",
                summary: "Fastag toll fees at actual government rates. South Mumbai loop = ₹0 tolls.",
                detail: "Tolls are highway infrastructure fees. A South Mumbai city loop incurs ₹0 tolls. If you cross Bandra-Worli Sea Link (₹85) or Atal Setu MTHL (₹250), it is charged at exact Fastag value.",
                badge: "Paid Separately",
                badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
                cost: "₹0 to ₹250 (if taken)",
                icon: "ℹ️",
              },
              {
                id: "sep-2",
                category: "separate",
                title: "Parking charges at attractions and the airport",
                summary: "MCGM municipal and venue parking fees paid with genuine printed receipts.",
                detail: "Heritage spots like Gateway/Taj, museums, and Siddhivinayak have municipal parking (typically ₹40 to ₹80 per stop). Driver submits actual physical slips.",
                badge: "Paid Separately",
                badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
                cost: "₹150 - ₹350 realistic total",
                icon: "ℹ️",
              },
              {
                id: "sep-3",
                category: "separate",
                title: "Monument, museum and temple entry tickets",
                summary: "Entry tickets at paid venues. Major outdoor landmarks have 100% free entry.",
                detail: "Gateway of India, Marine Drive, Chowpatty, Mahalaxmi, and Haji Ali are completely free. Paid sights like CSMVS Museum (~₹150) or Nehru Planetarium are paid directly at counters.",
                badge: "Paid Separately",
                badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
                cost: "Most spots free • Paid at venue",
                icon: "ℹ️",
              },
              {
                id: "sep-4",
                category: "separate",
                title: "Elephanta ferry tickets if you go",
                summary: "Optional boat ride from Gateway jetty operated by the Ferry Association.",
                detail: "Return ferry tickets (~₹260/person) are purchased directly at the Gateway jetty booth only if you choose to include the 4-hour Elephanta Caves island trip.",
                badge: "Paid Separately",
                badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
                cost: "Optional (~₹260/ticket)",
                icon: "ℹ️",
              },
              {
                id: "sep-5",
                category: "separate",
                title: "Driver allowance",
                summary: "Standard fixed ₹300 per day covering chauffeur meals and full-day duty.",
                detail: "A flat ₹300 allowance for the full day, communicated upfront so there is never awkward bargaining or unexpected tipping pressure at trip end.",
                badge: "Paid Separately",
                badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
                cost: "Fixed ₹300 / day",
                icon: "ℹ️",
              },
              {
                id: "sep-6",
                category: "separate",
                title: "Any hours or kilometres beyond your package",
                summary: "Transparent overtime billed strictly per published per-km and hourly rates.",
                detail: "If you extend your day beyond your booked block (e.g. past 8 hours or 80 km), extra km is billed at ₹14 - ₹26/km and extra time at ₹150/hr depending on the car.",
                badge: "Paid Separately",
                badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
                cost: "₹14-₹26/km & ₹150/hr",
                icon: "ℹ️",
              },
            ]
              .filter((item) => incFilter === "all" || item.category === incFilter)
              .map((item) => {
                const isOpen = !!expandedInc[item.id];
                const isInc = item.category === "included";
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleIncItem(item.id)}
                    className={`group cursor-pointer rounded-2xl border p-4.5 transition-all ${
                      isInc
                        ? "border-emerald-200/80 bg-gradient-to-br from-emerald-50/40 via-white to-white hover:border-emerald-300 hover:shadow-xs"
                        : "border-amber-200/80 bg-gradient-to-br from-amber-50/30 via-white to-white hover:border-amber-300 hover:shadow-xs"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                            isInc ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${item.badgeClass}`}>
                          {item.badge}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-navy bg-gray-50 px-2 py-0.5 rounded-md border border-gray-200">
                        {item.cost}
                      </span>
                    </div>

                    <h3 className="mt-2.5 text-sm font-bold text-navy group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-600 leading-relaxed">{item.summary}</p>

                    {/* Expandable Explanation */}
                    {isOpen && (
                      <div className="mt-3 rounded-xl border border-gray-100 bg-gray-50/80 p-3 text-xs text-gray-700 leading-relaxed animate-in fade-in duration-200">
                        <p className="font-semibold text-navy mb-1">Why & How It Works:</p>
                        <p>{item.detail}</p>
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400">
                      <span>{isOpen ? "▲ Tap to collapse" : "▼ Tap for full details & why"}</span>
                      <span className="text-primary font-medium group-hover:underline">
                        {isOpen ? "Less info" : "More info"}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        )}

        {/* View 2: Classic Comparison Table (Preserved with Interactive Filters) */}
        {incViewMode === "table" && (
          <div className="table-wrap mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th scope="col" className="px-4 py-3.5 font-bold">Included in your package fare</th>
                  <th scope="col" className="px-4 py-3.5 font-bold">Paid separately on the day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                <tr className={incFilter === "separate" ? "opacity-30 bg-gray-50" : ""}>
                  <td className="px-4 py-3 text-gray-800">
                    <span className="inline-block font-semibold text-emerald-700 mr-1">✓</span>
                    AC vehicle and fuel for the booked hours and kilometres
                  </td>
                  <td className={`px-4 py-3 text-gray-800 ${incFilter === "included" ? "opacity-30" : ""}`}>
                    <span className="inline-block font-semibold text-amber-700 mr-1">ℹ</span>
                    Toll charges such as Bandra Worli Sea Link, Atal Setu, Coastal Road
                  </td>
                </tr>
                <tr className={incFilter === "separate" ? "opacity-30 bg-gray-50" : ""}>
                  <td className="px-4 py-3 text-gray-800">
                    <span className="inline-block font-semibold text-emerald-700 mr-1">✓</span>
                    Professional driver for the full duration
                  </td>
                  <td className={`px-4 py-3 text-gray-800 ${incFilter === "included" ? "opacity-30" : ""}`}>
                    <span className="inline-block font-semibold text-amber-700 mr-1">ℹ</span>
                    Parking charges at attractions and the airport
                  </td>
                </tr>
                <tr className={incFilter === "separate" ? "opacity-30 bg-gray-50" : ""}>
                  <td className="px-4 py-3 text-gray-800">
                    <span className="inline-block font-semibold text-emerald-700 mr-1">✓</span>
                    Driver waiting time at every stop
                  </td>
                  <td className={`px-4 py-3 text-gray-800 ${incFilter === "included" ? "opacity-30" : ""}`}>
                    <span className="inline-block font-semibold text-amber-700 mr-1">ℹ</span>
                    Monument, museum and temple entry tickets
                  </td>
                </tr>
                <tr className={incFilter === "separate" ? "opacity-30 bg-gray-50" : ""}>
                  <td className="px-4 py-3 text-gray-800">
                    <span className="inline-block font-semibold text-emerald-700 mr-1">✓</span>
                    Pickup and drop at your address
                  </td>
                  <td className={`px-4 py-3 text-gray-800 ${incFilter === "included" ? "opacity-30" : ""}`}>
                    <span className="inline-block font-semibold text-amber-700 mr-1">ℹ</span>
                    Elephanta ferry tickets if you go
                  </td>
                </tr>
                <tr className={incFilter === "separate" ? "opacity-30 bg-gray-50" : ""}>
                  <td className="px-4 py-3 text-gray-800">
                    <span className="inline-block font-semibold text-emerald-700 mr-1">✓</span>
                    A planned route you can change during the day
                  </td>
                  <td className={`px-4 py-3 text-gray-800 ${incFilter === "included" ? "opacity-30" : ""}`}>
                    <span className="inline-block font-semibold text-amber-700 mr-1">ℹ</span>
                    Driver allowance
                  </td>
                </tr>
                <tr className={incFilter === "separate" ? "opacity-30 bg-gray-50" : ""}>
                  <td className="px-4 py-3 text-gray-800">
                    <span className="inline-block font-semibold text-emerald-700 mr-1">✓</span>
                    Itemised bill at the end of the trip
                  </td>
                  <td className={`px-4 py-3 text-gray-800 ${incFilter === "included" ? "opacity-30" : ""}`}>
                    <span className="inline-block font-semibold text-amber-700 mr-1">ℹ</span>
                    Any hours or kilometres beyond your package
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Interactive "Estimate On-The-Day Extras" Accordion Tool */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50/40 via-white to-gray-50 p-5 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                ⚡ Interactive Day Extras Estimator
              </span>
              <p className="text-sm font-bold text-navy md:text-base">
                Curious what tolls, parking and driver allowance total?
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowExtrasCalc(!showExtrasCalc)}
              className="rounded-xl border border-primary/30 bg-white px-3.5 py-1.5 text-xs font-bold text-primary shadow-xs hover:bg-primary hover:text-white transition-all"
            >
              {showExtrasCalc ? "Hide Estimator ▲" : "Calculate My Extras ▼"}
            </button>
          </div>

          {showExtrasCalc && (
            <div className="mt-5 border-t border-gray-200 pt-4 animate-in fade-in duration-200">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* Sea Link Toll */}
                <label className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white p-3 cursor-pointer hover:border-gray-300">
                  <input
                    type="checkbox"
                    checked={extraSeaLink}
                    onChange={(e) => setExtraSeaLink(e.target.checked)}
                    className="h-4 w-4 rounded text-primary focus:ring-primary"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-navy block">Sea Link Toll</span>
                    <span className="text-gray-500">+₹85 Fastag</span>
                  </div>
                </label>

                {/* Atal Setu Toll */}
                <label className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white p-3 cursor-pointer hover:border-gray-300">
                  <input
                    type="checkbox"
                    checked={extraAtalSetu}
                    onChange={(e) => setExtraAtalSetu(e.target.checked)}
                    className="h-4 w-4 rounded text-primary focus:ring-primary"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-navy block">Atal Setu (MTHL)</span>
                    <span className="text-gray-500">+₹250 Fastag</span>
                  </div>
                </label>

                {/* Parking Stops Stepper */}
                <div className="rounded-xl border border-gray-200 bg-white p-3">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-navy">Paid Parking Stops:</span>
                    <span className="font-semibold text-primary">{extraParkingStops} stops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setExtraParkingStops(Math.max(0, extraParkingStops - 1))}
                      className="h-7 w-7 rounded-lg border border-gray-200 bg-gray-50 font-bold text-navy hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-xs text-gray-600 flex-1 text-center">
                      ~₹{extraParkingStops * 60} (₹60/stop)
                    </span>
                    <button
                      type="button"
                      onClick={() => setExtraParkingStops(Math.min(8, extraParkingStops + 1))}
                      className="h-7 w-7 rounded-lg border border-gray-200 bg-gray-50 font-bold text-navy hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Museum Visitors Stepper */}
                <div className="rounded-xl border border-gray-200 bg-white p-3">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-navy">Museum Tickets:</span>
                    <span className="font-semibold text-primary">{extraMuseumVisitors} people</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setExtraMuseumVisitors(Math.max(0, extraMuseumVisitors - 1))}
                      className="h-7 w-7 rounded-lg border border-gray-200 bg-gray-50 font-bold text-navy hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="text-xs text-gray-600 flex-1 text-center">
                      ~₹{extraMuseumVisitors * 150} (₹150/p)
                    </span>
                    <button
                      type="button"
                      onClick={() => setExtraMuseumVisitors(Math.min(10, extraMuseumVisitors + 1))}
                      className="h-7 w-7 rounded-lg border border-gray-200 bg-gray-50 font-bold text-navy hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Extras Live Calculation Result */}
              <div className="mt-4 flex flex-col gap-2 rounded-xl bg-white border border-blue-100 p-3.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-gray-700">
                  <span>Driver Allowance (Fixed ₹300)</span>
                  {extraSeaLink && <span> + Sea Link (₹85)</span>}
                  {extraAtalSetu && <span> + Atal Setu (₹250)</span>}
                  {extraParkingStops > 0 && <span> + Parking (~₹{extraParkingStops * 60})</span>}
                  {extraMuseumVisitors > 0 && <span> + Museum (~₹{extraMuseumVisitors * 150})</span>}
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500 block">Total Estimated Day Extras:</span>
                  <span className="text-xl font-black text-primary">₹{calculatedDayExtras.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className="mt-4 text-xs text-gray-600 leading-relaxed md:text-sm">
          None of the right column is a hidden charge. It is cost that belongs to the places you visit rather than to the car. The next section puts real numbers against all of it, which is something most Mumbai Darshan operators leave you to discover at 7 pm.
        </p>
      </section>

      {/* 03: H2 - Section 2 (id="fare-table") */}
      <section id="fare-table" className="mx-auto max-w-[1080px] px-4 scroll-mt-20">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Mumbai Darshan Cab Fare, 2026 Rate Card
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          Our fares are calculated on published per kilometre rates, the same rates listed on our <Link href="/packages" className="text-primary underline">tour packages page</Link> and <Link href="/fleet" className="text-primary underline">fleet page</Link>. The fare is for the vehicle, not per person. Six people in an Innova pay the same as two.
        </p>

        {/* Interactive Filter Pills for Rate Card */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-1">Filter Fleet:</span>
          {[
            { id: "all", label: "All Vehicles (11)" },
            { id: "sedan", label: "Sedans (3)" },
            { id: "suv", label: "SUVs & MUVs (5)" },
            { id: "bus", label: "Group Vans & Buses (3)" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setRateCategory(cat.id as any)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                rateCategory === cat.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Table 2: Rate Card */}
        <div className="table-wrap mt-4 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="px-4 py-3.5 font-bold">Vehicle</th>
                <th scope="col" className="px-4 py-3.5 font-bold text-center">Seats</th>
                <th scope="col" className="px-4 py-3.5 font-bold text-center">Rate per km</th>
                <th scope="col" className="px-4 py-3.5 font-bold text-center bg-primary/20">8 hrs / 80 km</th>
                <th scope="col" className="px-4 py-3.5 font-bold text-center">10 hrs / 100 km</th>
                <th scope="col" className="px-4 py-3.5 font-bold text-center">12 hrs / 120 km</th>
                <th scope="col" className="px-4 py-3.5 font-bold text-center">Instant Booking</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium">
              {filteredRateCard.map((r) => (
                <tr key={r.vehicle} className="hover:bg-blue-50/50 transition-colors">
                  <td className="px-4 py-3 font-bold text-navy">{r.vehicle}</td>
                  <td className="px-4 py-3 text-center text-gray-600">{r.seats}</td>
                  <td className="px-4 py-3 text-center text-gray-700">{r.ratePerKm}</td>
                  <td className="px-4 py-3 text-center font-bold text-green-700 bg-primary/[0.03]">{r.rate8h80k}</td>
                  <td className="px-4 py-3 text-center font-semibold text-navy">{r.rate10h100k}</td>
                  <td className="px-4 py-3 text-center font-semibold text-navy">{r.rate12h120k}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => openBooking(r.vehicle)}
                      className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all"
                    >
                      <TaxiIcon className="h-3.5 w-3.5" />
                      Book Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Slightly Interactive Rate Card Notes & Rental Rules */}
        <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50/70 p-4 text-xs text-gray-700 md:p-5 md:text-sm">
          {/* 1. Half day option with interactive vehicle pills */}
          <div className="border-b border-gray-200/80 pb-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p>
                  <strong className="text-navy font-bold">Half day option:</strong> 4 hours and 40 km. Our minimum hourly rental booking is 4 hours.
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Half-day rate for <strong className="text-primary font-bold">{selectedHalfDayCab}</strong>:{" "}
                  <strong className="text-navy font-bold">
                    {selectedHalfDayCab === "Swift Dzire" ? "₹560" : selectedHalfDayCab === "Ertiga" ? "₹640" : "₹960"}
                  </strong>{" "}
                  plus driver allowance.
                </p>
              </div>

              {/* Interactive vehicle selector pills */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto">
                {[
                  { name: "Swift Dzire", price: "₹560" },
                  { name: "Ertiga", price: "₹640" },
                  { name: "Innova Crysta", price: "₹960" },
                ].map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedHalfDayCab(c.name)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                      selectedHalfDayCab === c.name
                        ? "bg-primary text-white shadow-xs"
                        : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-100/70"
                    }`}
                  >
                    {c.name}: {c.price}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Extra charges breakdown with clean badges */}
          <div className="grid gap-2 sm:grid-cols-3 border-b border-gray-200/80 py-3">
            <div className="flex items-center justify-between rounded-xl bg-white border border-gray-200/70 p-2.5">
              <span><strong>Extra hour:</strong> ₹150 / hr</span>
              <span className="text-[11px] font-bold text-primary bg-blue-50 px-2 py-0.5 rounded-md">
                Standard hourly rate
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white border border-gray-200/70 p-2.5">
              <span><strong>Extra kilometre:</strong> Charged per km</span>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md">
                Per vehicle rate
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white border border-gray-200/70 p-2.5">
              <span><strong>Driver allowance:</strong> Charged extra</span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
                Fixed ₹300 / day
              </span>
            </div>
          </div>

          {/* 3. Interactive Disclosure for Timing Window & Rules */}
          <div className="pt-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-700">
                <strong>Two things to know about how we count:</strong> Office-to-office calculation &amp; 6:00 am to 10:00 pm window.
              </span>
              <button
                type="button"
                onClick={() => setShowTimingRules(!showTimingRules)}
                className="text-xs font-bold text-primary hover:underline ml-2 shrink-0 cursor-pointer"
              >
                {showTimingRules ? "Hide details ▲" : "Show full policy ▼"}
              </button>
            </div>

            {showTimingRules && (
              <div className="mt-2.5 rounded-xl bg-white border border-gray-200/80 p-3 text-xs text-gray-600 leading-relaxed animate-in fade-in duration-200">
                <p>
                  Two things to know about how we count. Time and kilometres are calculated office to office, and our standard running window is 6:00 am to 10:00 pm. If the cab is held past 10:00 pm extra charges apply, and night charges apply between 12:00 am and 6:00 am. For a normal Mumbai Darshan day that starts at 8 am and finishes by 6 pm, none of that comes into play.
                </p>
                <p className="mt-2 text-gray-500 italic border-t border-gray-100 pt-1.5">
                  These rates are based on current fuel prices. A significant fuel price change can move them, so confirm your figure on call before you travel.
                </p>
              </div>
            )}
            {!showTimingRules && (
              <p className="mt-1.5 text-[11px] text-gray-500 italic">
                These rates are based on current fuel prices. A significant fuel price change can move them, so confirm your figure on call before you travel.
              </p>
            )}
          </div>
        </div>

        {/* 04: H3 (under 03) */}
        <div className="mt-10">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            What a Full Day Actually Costs, a Worked Example
          </h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Every Mumbai Darshan page shows a package fare and then adds a line saying tolls, parking and entry are extra. Almost none show you what that adds up to. Here is a realistic day priced end to end.
          </p>
          <p className="mt-2 text-xs font-semibold text-navy md:text-sm bg-gray-50 p-3 rounded-xl border border-gray-200">
            The scenario: two adults and two children, pickup from Andheri West at 8:00 am, Swift Dzire, 8 hours and 80 km, six stops across South Mumbai, back by 4:00 pm.
          </p>

          {/* Interactive Trip Cost Calculator Card */}
          <div className="mt-6 rounded-3xl border border-primary/20 bg-gradient-to-br from-blue-50/70 via-white to-gray-50 p-5 shadow-sm md:p-7">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Live Trip Cost Calculator</span>
                <p className="text-base font-bold text-navy md:text-lg">Estimate Your Total Day Cost in 1 Click</p>
              </div>
              <span className="hidden rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 sm:inline-block">
                Transparent Pricing
              </span>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {/* Select Vehicle */}
              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">Select Vehicle</label>
                <select
                  value={calcVehicle}
                  onChange={(e) => setCalcVehicle(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-navy shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:text-sm"
                >
                  {Object.keys(CALCULATOR_RATES).map((veh) => (
                    <option key={veh} value={veh}>
                      {veh} ({CALCULATOR_RATES[veh].seats} seats)
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Package */}
              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">Select Duration Package</label>
                <select
                  value={calcPackage}
                  onChange={(e) => setCalcPackage(e.target.value as any)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-navy shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:text-sm"
                >
                  <option value="h4">Half Day — 4 hrs / 40 km</option>
                  <option value="h8">Standard — 8 hrs / 80 km</option>
                  <option value="h10">Extended — 10 hrs / 100 km</option>
                  <option value="h12">Long Day — 12 hrs / 120 km</option>
                </select>
              </div>

              {/* Select Pickup Zone */}
              <div>
                <label className="block text-xs font-bold text-navy mb-1.5">Pickup Zone</label>
                <select
                  value={calcPickup}
                  onChange={(e) => setCalcPickup(Number(e.target.value))}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-navy shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:text-sm"
                >
                  {PICKUP_OPTIONS.map((opt, i) => (
                    <option key={opt.label} value={i}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Calculated Breakdown Display */}
            <div className="mt-5 rounded-2xl bg-white p-4 border border-gray-200">
              <div className="grid grid-cols-2 gap-3 text-xs md:grid-cols-4 md:text-sm">
                <div>
                  <span className="text-gray-500">Cab Package Fare:</span>
                  <p className="font-bold text-navy text-base">₹{packageFare.toLocaleString("en-IN")}</p>
                </div>
                <div>
                  <span className="text-gray-500">Driver Allowance:</span>
                  <p className="font-bold text-navy">₹{driverAllowance}</p>
                </div>
                <div>
                  <span className="text-gray-500">Est. Toll & Parking:</span>
                  <p className="font-bold text-navy">₹{estimatedParking + estimatedToll} {estimatedToll > 0 ? "(incl. Atal Setu)" : ""}</p>
                </div>
                <div>
                  <span className="text-gray-500">Est. Total Day Cost:</span>
                  <p className="font-bold text-green-700 text-lg">₹{totalDayEstimate.toLocaleString("en-IN")}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-3">
                <span className="text-xs text-gray-500">
                  {calcVehicle} • {packageNames[calcPackage]} • {PICKUP_OPTIONS[calcPickup]?.kmNote}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openBooking(calcVehicle)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-white shadow hover:bg-primary/90 transition-all"
                  >
                    <TaxiIcon className="h-4 w-4" />
                    Book This Cab
                  </button>
                  <a
                    href={waUrl(`Hi, I calculated an estimate for ${calcVehicle} on ${packageNames[calcPackage]} from ${PICKUP_OPTIONS[calcPickup]?.label}. Total approx ₹${totalDayEstimate}. Please confirm availability.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-whatsapp px-4 py-2 text-xs font-bold text-white shadow hover:bg-green-600 transition-all"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp This Plan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* REAL & INTERACTIVE: What a Full Day Mumbai Darshan Cab Costs Infographic */}
          <figure className="my-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-8">
            {/* Title Header */}
            <div className="text-center">
              <h4 className="font-display text-2xl font-black text-navy md:text-3xl">
                What a Full Day Mumbai Darshan Cab Costs
              </h4>
              <p className="mt-1 text-xs text-gray-500 md:text-sm">
                for 8-Hour South Mumbai tour
              </p>

              {/* Interactive Vehicle Switcher */}
              <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-gray-100 p-1">
                {[
                  { name: "Swift Dzire", tag: "Sedan", fare: "₹1,120" },
                  { name: "Maruti Ertiga", tag: "SUV", fare: "₹1,280" },
                  { name: "Innova Crysta", tag: "Premium", fare: "₹1,920" },
                ].map((v) => (
                  <button
                    key={v.name}
                    type="button"
                    onClick={() => setCostInfographicCab(v.name as any)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      costInfographicCab === v.name
                        ? "bg-navy text-white shadow-xs"
                        : "text-gray-700 hover:bg-white/80"
                    }`}
                  >
                    {v.name} ({v.fare})
                  </button>
                ))}
              </div>
            </div>

            {/* Infographic Stacked Bar Graphic */}
            <div className="mt-8 overflow-x-auto pb-2">
              <div className="min-w-[620px]">
                {/* 1. Top Labels with Guide Lines */}
                <div className="grid grid-cols-12 gap-2 text-center text-xs font-bold text-navy mb-2">
                  <div className="col-span-5 flex flex-col items-center">
                    <span>1. Cab Package Fare</span>
                    <span className="text-[11px] font-normal text-gray-500">(8h / 80km)</span>
                    <div className="h-2 w-px bg-gray-300 mt-1" />
                  </div>
                  <div className="col-span-2 flex flex-col items-center">
                    <span>2. Driver</span>
                    <span className="text-[11px] font-normal text-gray-500">Allowance</span>
                    <div className="h-2 w-px bg-gray-300 mt-1" />
                  </div>
                  <div className="col-span-2 flex flex-col items-center">
                    <span>3. Parking</span>
                    <span className="text-[11px] font-normal text-gray-500">at Stops</span>
                    <div className="h-2 w-px bg-gray-300 mt-1" />
                  </div>
                  <div className="col-span-3 flex flex-col items-center">
                    <span>4. Museum &amp;</span>
                    <span className="text-[11px] font-normal text-gray-500">Entry Tickets</span>
                    <div className="h-2 w-px bg-gray-300 mt-1" />
                  </div>
                </div>

                {/* 2. Main Stacked Color Bar + Total Box */}
                <div className="flex items-center gap-4">
                  {/* The 4-segment connected bar */}
                  <div className="flex-1 flex h-20 rounded-xl overflow-hidden shadow-inner border border-gray-300/40">
                    {/* Segment 1: Cab Fare */}
                    <button
                      type="button"
                      onClick={() => setActiveCostSegment(activeCostSegment === 1 ? null : 1)}
                      className={`w-[41.66%] bg-[#12233f] text-white flex flex-col items-center justify-center transition-all cursor-pointer hover:brightness-110 relative ${
                        activeCostSegment === 1 ? "ring-4 ring-primary ring-inset" : ""
                      }`}
                      title="Click for details on Cab Package Fare"
                    >
                      <span className="font-display text-xl md:text-2xl font-black">
                        ₹{costInfographicData.fare.toLocaleString("en-IN")}
                      </span>
                    </button>

                    {/* Segment 2: Driver Allowance */}
                    <button
                      type="button"
                      onClick={() => setActiveCostSegment(activeCostSegment === 2 ? null : 2)}
                      className={`w-[16.66%] bg-[#c58b29] text-navy flex flex-col items-center justify-center transition-all cursor-pointer hover:brightness-110 relative ${
                        activeCostSegment === 2 ? "ring-4 ring-navy ring-inset" : ""
                      }`}
                      title="Click for details on Driver Allowance"
                    >
                      <span className="font-display text-lg md:text-xl font-black text-navy">
                        ₹300
                      </span>
                    </button>

                    {/* Segment 3: Parking */}
                    <button
                      type="button"
                      onClick={() => setActiveCostSegment(activeCostSegment === 3 ? null : 3)}
                      className={`w-[16.66%] bg-[#d7aa52] text-navy flex flex-col items-center justify-center transition-all cursor-pointer hover:brightness-110 relative ${
                        activeCostSegment === 3 ? "ring-4 ring-navy ring-inset" : ""
                      }`}
                      title="Click for details on Parking Charges"
                    >
                      <span className="font-display text-sm md:text-base font-bold text-navy leading-tight text-center px-1">
                        ₹200<br /><span className="text-xs font-normal">to</span> ₹400
                      </span>
                    </button>

                    {/* Segment 4: Museum & Entry */}
                    <button
                      type="button"
                      onClick={() => setActiveCostSegment(activeCostSegment === 4 ? null : 4)}
                      className={`w-[25%] bg-[#e8c878] text-navy flex flex-col items-center justify-center transition-all cursor-pointer hover:brightness-110 relative ${
                        activeCostSegment === 4 ? "ring-4 ring-navy ring-inset" : ""
                      }`}
                      title="Click for details on Museum & Entry Tickets"
                    >
                      <span className="font-display text-sm md:text-base font-bold text-navy leading-tight text-center px-1">
                        ₹400<br /><span className="text-xs font-normal">to</span> ₹700
                      </span>
                    </button>
                  </div>

                  {/* Total Estimated Box (Right side) */}
                  <div className="w-36 shrink-0 text-center pl-2 border-l border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Estimated</p>
                    <div className="font-display text-2xl md:text-3xl font-black text-navy mt-0.5">
                      ₹{costInfographicData.minTotal.toLocaleString("en-IN")}
                    </div>
                    <div className="text-xs text-gray-500 font-medium my-0.5">to</div>
                    <div className="font-display text-2xl md:text-3xl font-black text-navy">
                      ₹{costInfographicData.maxTotal.toLocaleString("en-IN")}
                    </div>
                  </div>
                </div>

                {/* 3. Bottom Labels with Guide Lines */}
                <div className="grid grid-cols-12 gap-2 text-center text-xs font-medium text-gray-700 mt-2">
                  <div className="col-span-5 flex flex-col items-center">
                    <div className="h-2 w-px bg-gray-300 mb-1" />
                    <span className="font-bold text-navy">1. Cab Package Fare</span>
                    <span className="text-[11px] text-gray-500">(Paid to Operator)</span>
                  </div>
                  <div className="col-span-2 flex flex-col items-center">
                    <div className="h-2 w-px bg-gray-300 mb-1" />
                    <span className="font-bold text-navy">2. Driver</span>
                    <span className="text-[11px] text-gray-500">Allowance</span>
                  </div>
                  <div className="col-span-2 flex flex-col items-center">
                    <div className="h-2 w-px bg-gray-300 mb-1" />
                    <span className="font-bold text-navy">3. Parking</span>
                    <span className="text-[11px] text-gray-500">at Stops (At Actuals)</span>
                  </div>
                  <div className="col-span-3 flex flex-col items-center">
                    <div className="h-2 w-px bg-gray-300 mb-1" />
                    <span className="font-bold text-navy">4. Museum &amp; Entry</span>
                    <span className="text-[11px] text-gray-500">Tickets (Paid at Venue)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Detail Drawer on Click */}
            {activeCostSegment !== null && (
              <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Cost Item Breakdown:
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveCostSegment(null)}
                    className="text-xs font-semibold text-gray-500 hover:text-navy cursor-pointer"
                  >
                    ✕ Close
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-700 leading-relaxed md:text-sm">
                  {activeCostSegment === 1 && (
                    <p>
                      <strong className="text-navy">1. Cab Package Fare:</strong> Covers your private AC vehicle ({costInfographicCab}), 8 hours and 80 km of running, fuel, driver waiting time at all stops, and doorstep pickup/drop. Paid directly to Book A Cab.
                    </p>
                  )}
                  {activeCostSegment === 2 && (
                    <p>
                      <strong className="text-navy">2. Driver Allowance:</strong> Fixed standard ₹300 per day for driver meals and full-day duty assistance. Stated transparently upfront with zero awkward haggling at trip completion.
                    </p>
                  )}
                  {activeCostSegment === 3 && (
                    <p>
                      <strong className="text-navy">3. Parking at Stops:</strong> Paid directly to MCGM municipal or attraction parking attendants (usually ₹40 to ₹80 per stop, totaling ₹200 to ₹400 across 4 to 6 stops). Driver collects authentic printed receipts.
                    </p>
                  )}
                  {activeCostSegment === 4 && (
                    <p>
                      <strong className="text-navy">4. Museum &amp; Entry Tickets:</strong> Paid directly at ticket windows if you visit paid venues like CSMVS Museum (~₹150/adult) or Nehru Planetarium. Outdoor landmarks like Gateway of India, Marine Drive, Chowpatty, and Haji Ali are 100% free.
                    </p>
                  )}
                </div>
              </div>
            )}

            <figcaption className="mt-4 text-center text-xs font-medium text-gray-600 italic">
              A real six stop South Mumbai day, priced end to end. Tap any bar segment above for details.
            </figcaption>
          </figure>

          {/* Table 3: Worked Cost Example */}
          <div className="table-wrap mt-4 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-gray-100 text-navy font-bold">
                <tr>
                  <th scope="col" className="px-4 py-3">Cost item</th>
                  <th scope="col" className="px-4 py-3 text-center">Amount</th>
                  <th scope="col" className="px-4 py-3 text-right">Paid to</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {WORKED_COST_EXAMPLE.map((row) => (
                  <tr key={row.item} className="hover:bg-gray-50">
                    <td className="px-4 py-2.5 font-medium text-navy">{row.item}</td>
                    <td className="px-4 py-2.5 text-center font-bold text-primary">{row.amount}</td>
                    <td className="px-4 py-2.5 text-right text-gray-600 text-xs">{row.paidTo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs font-semibold text-navy md:text-sm">
            Total out of pocket for the day: approximately ₹1,900 to ₹2,400 all in, of which {SITE.name} receives only the package fare and driver allowance.
          </p>
        </div>

        {/* 05: H3 (under 03) */}
        <div className="mt-8">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            Extra Hours, Extra Kilometres and Night Charges Explained
          </h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            Packages are blocks, not limits. Going over is not a penalty, it is simply billed at the published rates.
          </p>
          {/* Slightly Interactive Overrun Policy Cards */}
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {/* Card 1: Overtime */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4 transition-all hover:border-gray-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-navy">1. Overtime Policy</span>
                <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-primary">
                  ₹150 / hr
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                <strong>Overtime:</strong> ₹150 per hour across all vehicles. If your 8 hour booking runs to 9 hours and 20 minutes, you pay one extra hour.
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                {[1, 2, 3].map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setExtraHours(h)}
                    className={`flex-1 rounded-lg py-1 text-center text-xs font-semibold transition-all cursor-pointer ${
                      extraHours === h
                        ? "bg-primary text-white shadow-xs"
                        : "bg-white border border-gray-200 text-gray-700 hover:border-primary/50"
                    }`}
                  >
                    +{h}h: ₹{h * 150}
                  </button>
                ))}
              </div>
            </div>

            {/* Card 2: Extra Distance */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4 transition-all hover:border-gray-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-navy">2. Extra Distance</span>
                <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-800">
                  {extraVehicle === "Swift Dzire" ? "₹14" : extraVehicle === "Maruti Ertiga" ? "₹16" : "₹24"} / km
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                <strong>Extra distance:</strong> Charged at your vehicle&apos;s per km rate. In a {extraVehicle} at{" "}
                {extraVehicle === "Swift Dzire" ? "₹14" : extraVehicle === "Maruti Ertiga" ? "₹16" : "₹24"} per km, running 95 km on an 80 km package adds{" "}
                <strong className="text-navy">
                  ₹{(15 * (extraVehicle === "Swift Dzire" ? 14 : extraVehicle === "Maruti Ertiga" ? 16 : 24)).toLocaleString("en-IN")}
                </strong> (15 km × ₹{extraVehicle === "Swift Dzire" ? 14 : extraVehicle === "Maruti Ertiga" ? 16 : 24}).
              </p>
              <div className="mt-3 flex items-center gap-1.5">
                {[
                  { name: "Swift Dzire", label: "Dzire (₹14)" },
                  { name: "Maruti Ertiga", label: "Ertiga (₹16)" },
                  { name: "Innova Crysta", label: "Crysta (₹24)" },
                ].map((v) => (
                  <button
                    key={v.name}
                    type="button"
                    onClick={() => setExtraVehicle(v.name)}
                    className={`flex-1 rounded-lg py-1 text-center text-xs font-semibold transition-all cursor-pointer ${
                      extraVehicle === v.name
                        ? "bg-amber-600 text-white shadow-xs"
                        : "bg-white border border-gray-200 text-gray-700 hover:border-amber-600/50"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Card 3: Running Window */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4 transition-all hover:border-gray-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-navy">3. Running Window</span>
                <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                  6 AM – 10 PM
                </span>
              </div>
              <p className="mt-2 text-xs text-gray-700 leading-relaxed">
                <strong>Our running window:</strong> 6:00 am to 10:00 pm. Holding the cab past 10:00 pm attracts extra charges, and night charges apply between 12:00 am and 6:00 am.
              </p>
              <div className="mt-3 flex items-center gap-1">
                {[
                  { id: "standard", label: "6 AM – 10 PM" },
                  { id: "late", label: "10 PM – 12 AM" },
                  { id: "night", label: "12 AM – 6 AM" },
                ].map((w) => (
                  <button
                    key={w.id}
                    type="button"
                    onClick={() => setActiveWindowTab(w.id as any)}
                    className={`flex-1 rounded-lg py-1 text-center text-[10px] font-bold transition-all cursor-pointer ${
                      activeWindowTab === w.id
                        ? "bg-navy text-white shadow-xs"
                        : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-gray-500 italic">
                {activeWindowTab === "standard" && "✓ Normal Mumbai Darshan (8 am to 6 pm) falls 100% within standard window."}
                {activeWindowTab === "late" && "⚠️ Late holding: ₹150/hr overtime charge applies past 10:00 pm."}
                {activeWindowTab === "night" && "🌙 Night duty allowance applies if duty extends between 12 am and 6 am."}
              </p>
            </div>
          </div>

          <div className="mt-3 space-y-1.5 text-xs text-gray-700 leading-relaxed md:text-sm">

            {/* Interactive Overrun Scenario Simulator */}
            <div className="my-5 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/40 p-4 shadow-sm md:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-100 pb-3">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-900">
                    Interactive Overrun Simulator
                  </span>
                  <p className="mt-1 text-sm font-bold text-navy md:text-base">
                    Calculate Extra Time &amp; Kilometre Charges
                  </p>
                </div>
                <div className="text-right">
                  <span className="block text-[11px] font-medium text-gray-500">Estimated Overrun Total</span>
                  <span className="text-lg font-extrabold text-primary md:text-xl">₹{totalExtraCost}</span>
                </div>
              </div>

              {/* Presets */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold text-gray-500">Quick Scenarios:</span>
                <button
                  type="button"
                  onClick={() => {
                    setExtraVehicle("Swift Dzire");
                    setExtraHours(1);
                    setExtraKm(15);
                  }}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                    extraVehicle === "Swift Dzire" && extraHours === 1 && extraKm === 15
                      ? "bg-navy text-white shadow-xs"
                      : "bg-white text-navy border border-gray-200 hover:border-navy/40"
                  }`}
                >
                  Guide Example (+1 hr, +15 km Dzire)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setExtraVehicle("Swift Dzire");
                    setExtraHours(2);
                    setExtraKm(0);
                  }}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                    extraHours === 2 && extraKm === 0
                      ? "bg-navy text-white shadow-xs"
                      : "bg-white text-navy border border-gray-200 hover:border-navy/40"
                  }`}
                >
                  Heavy Traffic (+2 hrs, 0 km)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setExtraVehicle("Maruti Ertiga");
                    setExtraHours(1);
                    setExtraKm(35);
                  }}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium transition-all ${
                    extraVehicle === "Maruti Ertiga" && extraHours === 1 && extraKm === 35
                      ? "bg-navy text-white shadow-xs"
                      : "bg-white text-navy border border-gray-200 hover:border-navy/40"
                  }`}
                >
                  Suburban Return (+1 hr, +35 km Ertiga)
                </button>
              </div>

              {/* Controls */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {/* Vehicle Selection */}
                <div className="rounded-xl border border-gray-200/80 bg-white p-3 shadow-2xs">
                  <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    Vehicle Type
                  </label>
                  <select
                    value={extraVehicle}
                    onChange={(e) => setExtraVehicle(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-navy outline-hidden focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="Swift Dzire">Swift Dzire (₹14/km)</option>
                    <option value="Hyundai Aura">Hyundai Aura (₹14/km)</option>
                    <option value="Toyota Etios">Toyota Etios (₹15/km)</option>
                    <option value="Maruti Ertiga">Maruti Ertiga (₹16/km)</option>
                    <option value="Kia Carens">Kia Carens (₹20/km)</option>
                    <option value="Toyota Innova">Toyota Innova (₹20/km)</option>
                    <option value="Innova Crysta">Innova Crysta (₹24/km)</option>
                    <option value="Chevrolet Tavera">Chevrolet Tavera (₹26/km)</option>
                  </select>
                  <span className="mt-1 block text-[11px] text-gray-500">
                    Per-km rate: ₹{extraRatePerKm}/km
                  </span>
                </div>

                {/* Extra Hours Stepper */}
                <div className="rounded-xl border border-gray-200/80 bg-white p-3 shadow-2xs">
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                      Extra Hours
                    </label>
                    <span className="text-[11px] font-semibold text-primary">₹150 / hr flat</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-50/50 p-1">
                    <button
                      type="button"
                      onClick={() => setExtraHours((h) => Math.max(0, h - 1))}
                      aria-label="Decrease extra hours"
                      className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-base font-bold text-navy shadow-xs transition-colors hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="text-xs font-bold text-navy">
                      {extraHours} {extraHours === 1 ? "hour" : "hours"}
                    </span>
                    <button
                      type="button"
                      onClick={() => setExtraHours((h) => Math.min(8, h + 1))}
                      aria-label="Increase extra hours"
                      className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-base font-bold text-navy shadow-xs transition-colors hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <span className="mt-1 block text-[11px] text-gray-500">
                    Overtime: {extraHours} × ₹150 = <strong className="text-navy">₹{extraHoursCost}</strong>
                  </span>
                </div>

                {/* Extra Distance Stepper */}
                <div className="rounded-xl border border-gray-200/80 bg-white p-3 shadow-2xs">
                  <div className="mb-1.5 flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                      Extra Distance
                    </label>
                    <span className="text-[11px] font-semibold text-primary">₹{extraRatePerKm} / km</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-50/50 p-1">
                    <button
                      type="button"
                      onClick={() => setExtraKm((km) => Math.max(0, km - 5))}
                      aria-label="Decrease extra kilometres"
                      className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-base font-bold text-navy shadow-xs transition-colors hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="text-xs font-bold text-navy">
                      {extraKm} km
                    </span>
                    <button
                      type="button"
                      onClick={() => setExtraKm((km) => Math.min(150, km + 5))}
                      aria-label="Increase extra kilometres"
                      className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-base font-bold text-navy shadow-xs transition-colors hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <span className="mt-1 block text-[11px] text-gray-500">
                    Distance: {extraKm} × ₹{extraRatePerKm} = <strong className="text-navy">₹{extraKmCost}</strong>
                  </span>
                </div>
              </div>

              {/* Math breakdown banner */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-amber-200 bg-white/90 px-3.5 py-2.5 text-xs">
                <div className="text-gray-700">
                  <span className="font-semibold text-navy">Itemised Math: </span>
                  ₹{extraHoursCost} ({extraHours}h @ ₹150) + ₹{extraKmCost} ({extraKm}km @ ₹{extraRatePerKm}/km) = <strong className="text-sm font-bold text-primary">₹{totalExtraCost}</strong>
                </div>
                {extraVehicle === "Swift Dzire" && extraHours === 1 && extraKm === 15 ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-[11px] font-bold text-green-800">
                    <CheckIcon className="h-3.5 w-3.5" /> Matches text example above: ₹150 + ₹210 = ₹360
                  </span>
                ) : (
                  <span className="text-[11px] text-gray-500">
                    Transparent itemised billing: only actual hours and GPS kilometres billed.
                  </span>
                )}
              </div>
            </div>

            <p>In practice overruns happen for three predictable reasons, and all three are avoidable if you plan for them:</p>
            <ol className="list-decimal list-inside space-y-2.5 pl-2 text-gray-600">
              <li className="rounded-xl p-2 transition-colors hover:bg-gray-50">
                <strong>Pickup from outside the island city:</strong> A Thane, Kalyan or Navi Mumbai pickup can use 40 to 60 km before you reach your first stop. An 8 hour and 80 km package is usually the wrong choice from these areas. The pickup zone table further down shows what to book instead.
                <div className="mt-1.5 pl-5">
                  <a
                    href="#pickup-zones"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                  >
                    📍 Jump to Suburban Pickup Zone Advice &amp; Fares →
                  </a>
                </div>
              </li>
              <li className="rounded-xl p-2 transition-colors hover:bg-gray-50">
                <strong>Trying to combine South and North circuits in 8 hours:</strong> Mumbai traffic simply does not allow it. Book 10 or 12 hours if you want both halves.
                <div className="mt-1.5 pl-5">
                  <a
                    href="#package-comparison"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                  >
                    ⏱ View 10-Hour vs 12-Hour Package Comparison Table →
                  </a>
                </div>
              </li>
              <li className="rounded-xl p-2 transition-colors hover:bg-gray-50">
                <strong>Queue times at major temples:</strong> Siddhivinayak Temple on a Tuesday morning can easily take two hours on its own. Plan around it, or give it its own half day.
                <div className="mt-1.5 pl-5">
                  <button
                    type="button"
                    onClick={() => setActiveReasonTip((prev) => (prev === 3 ? null : 3))}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-900 transition-colors hover:bg-amber-200"
                  >
                    <span>💡 {activeReasonTip === 3 ? "Hide Siddhivinayak Timing Tip" : "Show Siddhivinayak Tuesday Timing Tip"}</span>
                  </button>
                  {activeReasonTip === 3 && (
                    <div className="mt-2 rounded-lg border border-amber-200 bg-amber-50 p-2.5 text-xs leading-relaxed text-amber-900">
                      <strong>Tuesday Pro Tip:</strong> If visiting Siddhivinayak on a Tuesday, plan darshan before 8:00 am or after 8:30 pm to avoid 90–120 minute general queue delays, or book the 10-hour package to keep the remaining sightseeing relaxed.
                    </div>
                  )}
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* CTA 2: After 05, end of fare section */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={telHref()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-navy shadow-md transition-all hover:bg-accent-hover"
          >
            <PhoneIcon className="h-4 w-4" />
            Get a Fare for Your Plan
          </a>
          <a
            href={waUrl("Hi, I want a Mumbai Darshan cab. My pickup area is [area] and travel date is [date].")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-green-600"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Your Pickup Area
          </a>
        </div>
      </section>

      {/* 06: H2 - Section 3 */}
      <section id="package-comparison" className="mx-auto max-w-[1080px] px-4 scroll-mt-20">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Which Package Should You Book, 4 Hours vs 8 vs 10 vs 12
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          Be realistic about what one day holds. Any operator claiming you can do South Mumbai, the temples, Bandra and Juhu inside eight hours is setting you up for fifteen minutes at every stop, three hours of stress in traffic, and an exhausted family.
        </p>

        {/* Interactive Vehicle Switcher & Package Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-gray-50 p-3.5 border border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-navy">Compare Fares For:</span>
            <div className="flex items-center gap-1.5">
              {[
                { name: "Swift Dzire", label: "Dzire (4+1)" },
                { name: "Maruti Ertiga", label: "Ertiga (6+1)" },
                { name: "Innova Crysta", label: "Crysta (6+1)" },
              ].map((v) => (
                <button
                  key={v.name}
                  type="button"
                  onClick={() => setPkgCompareVehicle(v.name as any)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                    pkgCompareVehicle === v.name
                      ? "bg-primary text-white shadow-xs"
                      : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <span className="text-[11px] text-gray-500 italic">
            💡 Tap any row below to see vehicle details and booking options.
          </span>
        </div>

        {/* Table 4: Package Comparison (Interactive) */}
        <div className="table-wrap mt-4 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="px-4 py-3.5 font-bold">Package</th>
                <th scope="col" className="px-4 py-3.5 font-bold text-center">Hours and km</th>
                <th scope="col" className="px-4 py-3.5 font-bold text-center">Realistic stops</th>
                <th scope="col" className="px-4 py-3.5 font-bold">Best suited to</th>
                <th scope="col" className="px-4 py-3.5 font-bold text-right">
                  {pkgCompareVehicle} Fare
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium">
              {PACKAGE_COMPARISON.map((p) => {
                const isSelected = selectedPkgRow === p.package;
                // Calculate fare for selected vehicle
                const rateObj = CALCULATOR_RATES[pkgCompareVehicle] || CALCULATOR_RATES["Swift Dzire"];
                let fareVal = p.dzireFare;
                if (p.package.toLowerCase().includes("half")) fareVal = `₹${rateObj.h4.toLocaleString("en-IN")}`;
                else if (p.package.toLowerCase().includes("standard")) fareVal = `₹${rateObj.h8.toLocaleString("en-IN")}`;
                else if (p.package.toLowerCase().includes("extended")) fareVal = `₹${rateObj.h10.toLocaleString("en-IN")}`;
                else if (p.package.toLowerCase().includes("long")) fareVal = `₹${rateObj.h12.toLocaleString("en-IN")}`;

                return (
                  <tr
                    key={p.package}
                    onClick={() => setSelectedPkgRow(isSelected ? "" : p.package)}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? "bg-blue-50/70" : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="px-4 py-3.5 font-bold text-navy">
                      <div className="flex items-center gap-2">
                        <span>{p.package}</span>
                        {p.package.toLowerCase().includes("standard") && (
                          <span className="rounded-full bg-accent px-1.5 py-0.2 text-[9px] font-extrabold text-white">
                            POPULAR
                          </span>
                        )}
                        {p.package.toLowerCase().includes("extended") && (
                          <span className="rounded-full bg-emerald-100 text-emerald-800 px-1.5 py-0.2 text-[9px] font-extrabold">
                            RECOMMENDED
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-center text-gray-600 font-semibold">{p.hoursKm}</td>
                    <td className="px-4 py-3.5 text-center text-gray-800">{p.realisticStops}</td>
                    <td className="px-4 py-3.5 text-gray-600">{p.bestSuited}</td>
                    <td className="px-4 py-3.5 text-right font-black text-primary text-sm">
                      {fareVal}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Selected Package Quick Action Card */}
        {selectedPkgRow && (
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-blue-200 bg-blue-50/50 px-4 py-3 text-xs">
            <div className="text-navy">
              <span className="font-bold">Selected:</span> {selectedPkgRow} for <strong>{pkgCompareVehicle}</strong> (Plus fixed ₹300 driver allowance).
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => openBooking(`Mumbai Darshan - ${pkgCompareVehicle} (${selectedPkgRow})`)}
                className="rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white hover:bg-primary-hover transition-colors cursor-pointer"
              >
                Book This Package
              </button>
              <a
                href={waUrl(`Hi, I want to book a ${pkgCompareVehicle} for Mumbai Darshan (${selectedPkgRow}). Please share availability.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-whatsapp px-3 py-1.5 text-xs font-bold text-white hover:bg-green-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}

        {/* 07: H3 (under 06) */}
        <div className="mt-8">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            Can You Really See Mumbai in One Day?
          </h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            The honest answer is: you can see one half of it properly, or both halves quickly.
          </p>

          {/* Slightly Interactive Realistic Scenarios Cards */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* Scenario 1: 8h */}
            <div
              onClick={() => setActiveOneDayTab("8h")}
              className={`rounded-2xl border p-3.5 transition-all cursor-pointer ${
                activeOneDayTab === "8h"
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-xs"
                  : "border-gray-200 bg-gray-50/60 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Option 1</span>
                <span className="text-xs font-bold text-navy">8 Hours</span>
              </div>
              <p className="mt-2 text-xs font-bold text-navy">A single eight hour day</p>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                Covers either South Mumbai (Colaba, Fort, Marine Drive, the museum, Gateway of India) or the North circuit (Siddhivinayak, Bandra, Juhu Beach). Doing both inside eight hours means spending most of the day looking at brake lights on the Western Express Highway.
              </p>
            </div>

            {/* Scenario 2: 10-12h */}
            <div
              onClick={() => setActiveOneDayTab("10h")}
              className={`rounded-2xl border p-3.5 transition-all cursor-pointer ${
                activeOneDayTab === "10h"
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-xs"
                  : "border-gray-200 bg-gray-50/60 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Sweet Spot ★</span>
                <span className="text-xs font-bold text-navy">10–12 Hours</span>
              </div>
              <p className="mt-2 text-xs font-bold text-navy">One long day of 10 to 12 hours</p>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                The highlights of both halves at a brisk but comfortable pace. If you have a single day and want the classic Mumbai experience of Gateway of India, Marine Drive, Siddhivinayak, Haji Ali and Juhu, the 10 hour package is the sweet spot.
              </p>
            </div>

            {/* Scenario 3: 2 Days */}
            <div
              onClick={() => setActiveOneDayTab("2days")}
              className={`rounded-2xl border p-3.5 transition-all cursor-pointer ${
                activeOneDayTab === "2days"
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-xs"
                  : "border-gray-200 bg-gray-50/60 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent">Family Choice</span>
                <span className="text-xs font-bold text-navy">2 Days</span>
              </div>
              <p className="mt-2 text-xs font-bold text-navy">Two separate days</p>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                The version we recommend for families with elders, anyone travelling with young children, and visitors who want to spend more than half an hour inside the museum or at Elephanta Caves. Day one covers the heritage south, day two takes the temples, the coastline and the suburbs.
              </p>
            </div>

            {/* Scenario 4: Separate */}
            <div
              onClick={() => setActiveOneDayTab("separate")}
              className={`rounded-2xl border p-3.5 transition-all cursor-pointer ${
                activeOneDayTab === "separate"
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20 shadow-xs"
                  : "border-gray-200 bg-gray-50/60 hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">Important Note</span>
                <span className="text-xs font-bold text-navy">Separate Day</span>
              </div>
              <p className="mt-2 text-xs font-bold text-navy">What cannot be done in one day</p>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                Elephanta Caves, Sanjay Gandhi National Park and Film City each need most of a day on their own, and any itinerary promising all of them inside eight hours is not being honest with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08: H2 - Section 4 (id="places-covered") */}
      <section id="places-covered" className="mx-auto max-w-[1080px] px-4 scroll-mt-20">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Mumbai Darshan Places Covered, Timings, Entry Fees and Closure Days
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          Every Mumbai Darshan operator publishes a list of place names. Almost none tell you when those places open, which day they are closed, what the entry costs, or where the car has to park.
        </p>
        <p className="mt-1 text-sm text-gray-700 leading-relaxed">
          These tables do. Check the closure column in particular before fixing your route: visiting the museum on a day it is shut or arriving at Haji Ali during high tide waste the hours you have paid for. Timings do shift and venues close for events or maintenance without much notice, so we reconfirm the ones that matter for your date when we build your itinerary.
        </p>

        {/* Interactive Search and Filter for 28 Attractions */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={landmarkQuery}
                onChange={(e) => setLandmarkQuery(e.target.value)}
                placeholder="Search landmark, area, entry or parking rules..."
                className="w-full rounded-xl border border-gray-300 bg-white py-2 pl-9 pr-8 text-xs font-medium text-navy placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:text-sm"
              />
              {landmarkQuery && (
                <button
                  onClick={() => setLandmarkQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all", label: "All 28" },
                { id: "south", label: "South (15)" },
                { id: "north", label: "North (13)" },
                { id: "free", label: "Free Entry" },
                { id: "monday", label: "Mon Closed" },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setCircuitFilter(pill.id as any)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                    circuitFilter === pill.id
                      ? "bg-navy text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
          {(landmarkQuery || circuitFilter !== "all") && (
            <p className="mt-2 text-xs text-primary font-semibold">
              Showing {filteredSouth.length + filteredNorth.length} of 28 attractions matching your filter.
            </p>
          )}
        </div>

        {/* 09: H3 (under 08) */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
              South Mumbai Circuit
            </h3>
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-900">
              {filteredSouth.length} Places
            </span>
          </div>

          {/* Table 5: South Mumbai Circuit */}
          <div className="table-wrap mt-4 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-gray-100 text-navy font-bold">
                <tr>
                  <th scope="col" className="px-3.5 py-3">Landmark</th>
                  <th scope="col" className="px-3.5 py-3">Area</th>
                  <th scope="col" className="px-3.5 py-3">Typical hours</th>
                  <th scope="col" className="px-3.5 py-3">Closed</th>
                  <th scope="col" className="px-3.5 py-3">Entry</th>
                  <th scope="col" className="px-3.5 py-3 text-center">Time to allow</th>
                  <th scope="col" className="px-3.5 py-3">Cab note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredSouth.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-4 text-center text-xs text-gray-500 italic">
                      No South Mumbai landmarks match &quot;{landmarkQuery}&quot;.
                    </td>
                  </tr>
                ) : (
                  filteredSouth.map((item) => (
                    <tr key={item.landmark} className="hover:bg-gray-50">
                      <td className="px-3.5 py-2.5 font-bold text-navy">{item.landmark}</td>
                      <td className="px-3.5 py-2.5 text-gray-600">{item.area}</td>
                      <td className="px-3.5 py-2.5 text-gray-700">{item.hours}</td>
                      <td className="px-3.5 py-2.5 text-gray-600">{item.closed}</td>
                      <td className="px-3.5 py-2.5 text-gray-800 font-medium">{item.entry}</td>
                      <td className="px-3.5 py-2.5 text-center text-primary font-semibold">{item.timeToAllow}</td>
                      <td className="px-3.5 py-2.5 text-gray-600 text-xs">{item.cabNote}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* 10: H3 (under 08) */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
              North Mumbai Circuit
            </h3>
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-bold text-blue-900">
              {filteredNorth.length} Places
            </span>
          </div>

          {/* Table 6: North Mumbai Circuit */}
          <div className="table-wrap mt-4 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-gray-100 text-navy font-bold">
                <tr>
                  <th scope="col" className="px-3.5 py-3">Landmark</th>
                  <th scope="col" className="px-3.5 py-3">Area</th>
                  <th scope="col" className="px-3.5 py-3">Typical hours</th>
                  <th scope="col" className="px-3.5 py-3">Closed</th>
                  <th scope="col" className="px-3.5 py-3">Entry</th>
                  <th scope="col" className="px-3.5 py-3 text-center">Time to allow</th>
                  <th scope="col" className="px-3.5 py-3">Cab note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredNorth.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-4 text-center text-xs text-gray-500 italic">
                      No North Mumbai landmarks match &quot;{landmarkQuery}&quot;.
                    </td>
                  </tr>
                ) : (
                  filteredNorth.map((item) => (
                    <tr key={item.landmark} className="hover:bg-gray-50">
                      <td className="px-3.5 py-2.5 font-bold text-navy">{item.landmark}</td>
                      <td className="px-3.5 py-2.5 text-gray-600">{item.area}</td>
                      <td className="px-3.5 py-2.5 text-gray-700">{item.hours}</td>
                      <td className="px-3.5 py-2.5 text-gray-600">{item.closed}</td>
                      <td className="px-3.5 py-2.5 text-gray-800 font-medium">{item.entry}</td>
                      <td className="px-3.5 py-2.5 text-center text-primary font-semibold">{item.timeToAllow}</td>
                      <td className="px-3.5 py-2.5 text-gray-600 text-xs">{item.cabNote}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-gray-600 leading-relaxed md:text-sm">
            Two honest caveats. Kanheri Caves sit inside Sanjay Gandhi National Park, so visiting them means committing to the park, not making a quick detour. And Film City is not a walk in attraction, it needs prior permission or a pre booked studio tour. Several itineraries list it as though you can drop by, but you cannot.
          </p>
        </div>

        {/* 11: H3 (under 08) */}
        <div className="mt-8">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            Elephanta Caves, Can You Fit It Into the Same Day?
          </h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            The short answer: yes, on a 12 hour package. No, on an 8 hour one.
          </p>
          <div className="mt-2 space-y-1.5 text-xs text-gray-700 leading-relaxed md:text-sm">
            <p>The caves sit on an island reached only by ferry from the Gateway of India, they are closed on Mondays, and the trip takes four to five hours from jetty to jetty.</p>
            <p><strong>Getting there:</strong> Ferries leave from the Gateway of India jetty, roughly an hour each way, plus waiting and boarding time. Ferries run roughly 9:00 am to 5:30 pm.</p>
            <p><strong>Ferry tickets:</strong> Bought at the Gateway jetty on the day, roughly ₹200 to ₹260 return depending on boat type. A miniature train runs the jetty at Elephanta for a nominal charge. Cave entry is separate, ₹40 for Indian citizens and ₹600 for foreign visitors.</p>
            <p><strong>Monsoon suspension:</strong> Ferries stop during the monsoon months for safety. Confirm the current status before you fix a date between June and September.</p>
            <p><strong>What the cab does meanwhile:</strong> Your driver waits in the Gateway of India area while you are on the island. Those hours count against your package, which is why Elephanta days need a 12 hour booking rather than an 8 hour one.</p>
            <p className="font-semibold text-primary">Our straightforward advice: with one day in Mumbai, choose either Elephanta or the city circuit. Doing both usually means rushing the city and still feeling short of time on the island.</p>
          </div>
        </div>

        {/* 12: H3 (under 08) */}
        <div className="mt-8">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            Temple and Dargah Visits, Timings, Dress Code and Etiquette
          </h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            For many travellers darshan means exactly what the word says, a temple visit. These stops have their own rhythms, and knowing them saves time and awkwardness.
          </p>
          <div className="mt-2 space-y-2 text-xs text-gray-700 leading-relaxed md:text-sm">
            <p><strong>Siddhivinayak Temple, Prabhadevi:</strong> Dress modestly, shoulders and knees covered is the safe standard. Footwear comes off before entry and there are stands outside for it. Tuesdays draw much larger crowds because the day is associated with Ganesha, and the queue can stretch well beyond an hour. If your schedule is tight, pick another day or arrive close to opening. Photography inside the sanctum is restricted, so keep phones pocketed near the shrine.</p>
            <p><strong>Mahalaxmi Temple, Mahalaxmi:</strong> Modest dress, footwear removed. The approach runs through a narrow lane lined with flower and offering stalls, so the cab drops you at the lane entrance rather than at the temple door. Friday and Tuesday mornings draw more devotees. Ocean facing, with stairs down towards the water behind the main building.</p>
            <p><strong>Haji Ali Dargah, Worli:</strong> Reached via a pedestrian causeway that floods at high tide. Check tide tables before planning this stop, because access is simply cut off during high water. Modest dress required for both women and men, heads covered. Shawls or scarves are available nearby if you do not carry one. The walk along the causeway takes 10 to 15 minutes each way with no shade, which can be hard work on hot or rainy days.</p>
            <p><strong>Babulnath Temple, Girgaon:</strong> Shiva temple on a small hill near Chowpatty. Modest dress, footwear removed. There is an elevator for visitors who find the stairs difficult, which makes this one of the more accessible temple stops for elders. Mondays bring significantly larger crowds.</p>
            <p><strong>ISKCON Temple, Juhu:</strong> Open daily, notable for its large prayer hall and clean, well maintained premises. Note that the sanctum closes between 1:00 pm and 4:30 pm, so plan morning or evening. Excellent vegetarian restaurant on site if you want a reliable lunch stop in the western suburbs.</p>
            <p><strong>Mount Mary Basilica, Bandra:</strong> Active Catholic church welcoming visitors of all faiths. Modest dress, respectful silence inside. The September Bandra Fair draws enormous crowds and closes surrounding roads, so check your date against the fair calendar before fixing this stop.</p>
          </div>
        </div>
      </section>

      {/* 13: H2 - Section 5 (id="itineraries") */}
      <section id="itineraries" className="mx-auto max-w-[1080px] px-4 scroll-mt-20">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Ready Made Mumbai Darshan Itineraries, Hour by Hour
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          These are realistic routes, built from hundreds of actual trips rather than Google Maps calculations that ignore Mumbai traffic.
        </p>
        <p className="mt-1 text-sm text-gray-700 leading-relaxed">
          All of them are adjustable. Skip a stop, add one, stay longer somewhere. The car is yours for the day.
        </p>

        {/* Interactive Itinerary Navigator Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 rounded-2xl bg-gray-100 p-2 border border-gray-200">
          {[
            { id: "all", label: "View All Itineraries" },
            { id: "itin-south", label: "8h South Circuit" },
            { id: "itin-north", label: "8h North Circuit" },
            { id: "itin-mixed", label: "10h Mixed Highlights" },
            { id: "itin-extended", label: "12h Extended Day" },
            { id: "itin-pilgrim", label: "Temple Pilgrimage" },
            { id: "itin-airport", label: "Airport Layover" },
            { id: "itin-night", label: "Evening & Night" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveItinerary(tab.id);
                if (tab.id !== "all") {
                  document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                activeItinerary === tab.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-navy hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* REAL & INTERACTIVE: Route Map & Circuit Explorer (Image 2) */}
        <div className="my-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Interactive Circuit Map
              </span>
              <h3 className="font-display text-xl font-black text-navy md:text-2xl">
                South &amp; North Mumbai Darshan Routes
              </h3>
            </div>

            {/* Circuit Selector Pills */}
            <div className="flex items-center gap-1.5 self-start sm:self-auto">
              {[
                { id: "all", label: "All Circuits" },
                { id: "south", label: "🔵 South Loop (5 Stops)" },
                { id: "north", label: "🟠 North Loop (4 Stops)" },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setMapActiveCircuit(c.id as any);
                    setMapSelectedStop(null);
                  }}
                  className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                    mapActiveCircuit === c.id
                      ? c.id === "south"
                        ? "bg-blue-700 text-white shadow-xs"
                        : c.id === "north"
                        ? "bg-amber-600 text-white shadow-xs"
                        : "bg-navy text-white shadow-xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Route Stop Sequence Chips */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-xs font-bold text-gray-500 mr-1">Tap a stop to inspect:</span>
            {(mapActiveCircuit === "all" || mapActiveCircuit === "south") && (
              <>
                {[
                  { num: "1", name: "Gateway & Taj", circuit: "south", detail: "Start at Colaba. Best morning light before 10 AM. Free promenade walk." },
                  { num: "2", name: "CSMVS Museum", circuit: "south", detail: "Prince of Wales Museum. Premier indoor stop (~75 mins). Ticket: ~₹150." },
                  { num: "3", name: "CSMT & Flora Fountain", circuit: "south", detail: "Victorian Gothic architecture. Exterior photo stop (~40 mins)." },
                  { num: "4", name: "Marine Drive & Chowpatty", circuit: "south", detail: "Queen's Necklace & seaside breeze (~45 mins). 100% Free entry." },
                  { num: "5", name: "Mahalaxmi & Haji Ali", circuit: "south", detail: "Historic temple and island dargah on the Worli bay (~75 mins)." },
                ].map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setMapSelectedStop(mapSelectedStop === s.name ? null : s.name)}
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                      mapSelectedStop === s.name
                        ? "bg-blue-700 text-white shadow-xs"
                        : "bg-blue-50 text-blue-900 border border-blue-200 hover:bg-blue-100"
                    }`}
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-700 text-white text-[9px] font-bold">
                      {s.num}
                    </span>
                    {s.name}
                  </button>
                ))}
              </>
            )}

            {(mapActiveCircuit === "all" || mapActiveCircuit === "north") && (
              <>
                {[
                  { num: "1", name: "Siddhivinayak Temple", circuit: "north", detail: "Prabhadevi temple. Go before 9:00 AM on Tuesdays to avoid massive queues." },
                  { num: "2", name: "Bandra-Worli Sea Link", circuit: "north", detail: "Iconic 8-lane cable bridge crossing with open Arabian Sea views (Fastag toll: ₹85)." },
                  { num: "3", name: "Bandra Bandstand", circuit: "north", detail: "Mount Mary Church & coastal promenade photo stop (~50 mins)." },
                  { num: "4", name: "Juhu Beach & ISKCON", circuit: "north", detail: "Sunset at Mumbai's most famous beach and nearby marble temple (~90 mins)." },
                ].map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setMapSelectedStop(mapSelectedStop === s.name ? null : s.name)}
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                      mapSelectedStop === s.name
                        ? "bg-amber-600 text-white shadow-xs"
                        : "bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100"
                    }`}
                  >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-white text-[9px] font-bold">
                      {s.num}
                    </span>
                    {s.name}
                  </button>
                ))}
              </>
            )}
          </div>

          {/* Selected Stop Details Popover */}
          {mapSelectedStop && (
            <div className="mt-3 rounded-xl border border-primary/20 bg-blue-50/70 p-3 text-xs text-navy leading-relaxed animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary">📍 Selected Landmark: {mapSelectedStop}</span>
                <button
                  type="button"
                  onClick={() => setMapSelectedStop(null)}
                  className="text-[11px] font-semibold text-gray-500 hover:text-navy cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>
              <p className="mt-1 text-gray-700">
                {mapSelectedStop === "Gateway & Taj" && "Start at Colaba. Best morning sunlight and thinner crowds before 10 AM. Free promenade walk."}
                {mapSelectedStop === "CSMVS Museum" && "Prince of Wales Museum. Premier indoor stop (~75 mins). Ancient sculptures, miniature paintings, and weapons gallery. Ticket: ~₹150."}
                {mapSelectedStop === "CSMT & Flora Fountain" && "Victorian Gothic architectural masterpiece (UNESCO World Heritage). Exterior photo stop (~40 mins)."}
                {mapSelectedStop === "Marine Drive & Chowpatty" && "The Queen's Necklace promenade and Girgaon beach breeze (~45 mins). 100% Free entry."}
                {mapSelectedStop === "Mahalaxmi & Haji Ali" && "Historic spiritual sites along the Worli bay (~75 mins together). Dargah pathway subject to high tide timing."}
                {mapSelectedStop === "Siddhivinayak Temple" && "Prabhadevi temple. Reaching by 8:45 AM avoids the heavy 90-minute queue, especially on Tuesdays."}
                {mapSelectedStop === "Bandra-Worli Sea Link" && "Iconic 8-lane cable bridge crossing with open Arabian Sea views (Fastag toll: ₹85, billed at actuals)."}
                {mapSelectedStop === "Bandra Bandstand" && "Mount Mary Church & coastal promenade walk (~50 mins). View Shah Rukh Khan's Mannat & sea sunset."}
                {mapSelectedStop === "Juhu Beach & ISKCON" && "Sunset at Mumbai's famous shoreline followed by peaceful marble temple visit (~90 mins)."}
              </p>
            </div>
          )}

          {/* Map Display with Framed Overlay */}
          <figure className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-inner">
            <img
              src="/images/mumbai-darshan-cab-route-map.webp"
              title="South and North Mumbai Darshan Routes"
              alt="Map of South and North Mumbai Darshan cab routes showing stop sequence"
              width={1200}
              height={800}
              loading="lazy"
              className="h-auto w-full object-cover"
            />
            <figcaption className="p-3 text-center text-xs font-medium text-gray-600 italic">
              {mapActiveCircuit === "south" && "Showing South Mumbai Heritage Circuit (Stops 1 to 5: Colaba to Worli)"}
              {mapActiveCircuit === "north" && "Showing North Mumbai Coastal & Temple Circuit (Stops 1 to 4: Dadar to Juhu)"}
              {mapActiveCircuit === "all" && "The two standard circuits. Most 8 hour trips cover one side, 10 hours covers both."}
            </figcaption>
          </figure>
        </div>

        {/* 14: H3 (under 13) */}
        <div id="itin-south" className="mt-8 scroll-mt-24">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            8 Hour South Mumbai Itinerary
          </h3>
          <p className="mt-1 text-xs text-gray-600 md:text-sm">
            Best for first time visitors who want the heritage Mumbai they have seen in photographs. Start early, because South Mumbai streets and parking get difficult after mid morning.
          </p>
          <ol className="mt-3 space-y-1.5 list-decimal list-inside text-xs text-gray-700 md:text-sm">
            <li><strong>8:00 am</strong> Pickup from your address.</li>
            <li><strong>9:00 am</strong> Gateway of India and Taj Mahal Palace exterior, 45 minutes. Better light and thinner crowds before 10.</li>
            <li><strong>10:00 am</strong> Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, 75 minutes. The best indoor stop in the circuit.</li>
            <li><strong>11:30 am</strong> CSMT and Flora Fountain, 40 minutes. Heritage architecture, largely an exterior visit.</li>
            <li><strong>12:30 pm</strong> Lunch break, 45 minutes. Your driver knows the options around Fort and Colaba.</li>
            <li><strong>1:30 pm</strong> Marine Drive and Girgaon Chowpatty, 45 minutes.</li>
            <li><strong>2:45 pm</strong> Mahalaxmi Temple and Haji Ali Dargah, 75 minutes together since they sit close.</li>
            <li><strong>4:00 pm</strong> Drop at your address.</li>
          </ol>
          <p className="mt-2 text-xs text-gray-500 font-medium">Six stops, comfortable pace, no rushing.</p>

          {/* REAL & INTERACTIVE: 8-Hour South Mumbai Darshan Timeline (Image 5) */}
          <figure className="my-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-8">
            {/* Title Header */}
            <div className="text-center">
              <h4 className="font-display text-2xl font-black text-navy md:text-3xl">
                8-Hour South Mumbai Darshan Itinerary
              </h4>
              <p className="mt-1 text-xs text-gray-500 font-semibold md:text-sm">
                8:00 AM to 4:00 PM • Six stops, realistic timings, no rushing
              </p>
            </div>

            {/* Interactive Timeline Track */}
            <div className="mt-8 overflow-x-auto pb-4">
              <div className="min-w-[760px] px-4">
                {/* 1. Top Time Labels */}
                <div className="grid grid-cols-8 gap-2 text-center text-xs font-bold text-navy mb-2">
                  {[
                    "8:00 AM",
                    "9:00 AM",
                    "10:00 AM",
                    "11:30 AM",
                    "12:30 PM",
                    "1:30 PM",
                    "2:45 PM",
                    "4:00 PM",
                  ].map((t, idx) => (
                    <div
                      key={t}
                      onClick={() => setTimelineActiveIndex(idx)}
                      className={`cursor-pointer transition-colors ${
                        timelineActiveIndex === idx ? "text-primary font-black scale-105" : "text-gray-500 hover:text-navy"
                      }`}
                    >
                      {t}
                    </div>
                  ))}
                </div>

                {/* 2. Interactive Circular Pins with connecting track */}
                <div className="relative flex items-center justify-between my-2">
                  {/* Gray Track Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-1.5 -translate-y-1/2 bg-gray-200 rounded-full z-0" />

                  {/* 8 Circular Pins */}
                  {[
                    { id: 0, time: "8:00 AM", label: "Pickup", color: "blue", iconType: "car" },
                    { id: 1, time: "9:00 AM", label: "Gateway & Taj", color: "blue", iconType: "arch" },
                    { id: 2, time: "10:00 AM", label: "CSMVS Museum", color: "orange", iconType: "museum" },
                    { id: 3, time: "11:30 AM", label: "CSMT", color: "blue", iconType: "station" },
                    { id: 4, time: "12:30 PM", label: "Lunch", color: "orange", iconType: "food" },
                    { id: 5, time: "1:30 PM", label: "Marine Drive", color: "blue", iconType: "coast" },
                    { id: 6, time: "2:45 PM", label: "Mahalaxmi & Haji Ali", color: "orange", iconType: "temple" },
                    { id: 7, time: "4:00 PM", label: "Return Drop", color: "blue", iconType: "drop" },
                  ].map((pin) => {
                    const isActive = timelineActiveIndex === pin.id;
                    const isBlue = pin.color === "blue";
                    return (
                      <button
                        key={pin.id}
                        type="button"
                        onClick={() => setTimelineActiveIndex(pin.id)}
                        className={`relative z-10 flex flex-col items-center group cursor-pointer transition-all duration-200 ${
                          isActive ? "scale-115 -translate-y-1" : "hover:scale-105"
                        }`}
                        title={`Click to view details for ${pin.label}`}
                      >
                        {/* Circular Pin Badge */}
                        <div
                          className={`flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-4 bg-white shadow-md transition-all ${
                            isBlue
                              ? isActive
                                ? "border-[#12233f] ring-4 ring-blue-200 shadow-lg"
                                : "border-[#12233f] group-hover:border-primary"
                              : isActive
                              ? "border-[#ea580c] ring-4 ring-orange-200 shadow-lg"
                              : "border-[#ea580c] group-hover:border-amber-500"
                          }`}
                        >
                          {/* Icon representation */}
                          {pin.iconType === "car" && (
                            <svg className={`h-6 w-6 ${isBlue ? "text-[#12233f]" : "text-[#ea580c]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 3H8l-3 6v9h2v2h2v-2h6v2h2v-2h2V9l-3-6zM6 10l2-4h8l2 4H6z" />
                              <circle cx="8.5" cy="14.5" r="1.5" />
                              <circle cx="15.5" cy="14.5" r="1.5" />
                            </svg>
                          )}
                          {pin.iconType === "arch" && (
                            <svg className={`h-6 w-6 ${isBlue ? "text-[#12233f]" : "text-[#ea580c]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6a3 3 0 016 0v6" />
                            </svg>
                          )}
                          {pin.iconType === "museum" && (
                            <svg className={`h-6 w-6 ${isBlue ? "text-[#12233f]" : "text-[#ea580c]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 21h16M3 9h18M12 3l9 6H3l9-6zM6 9v9M10 9v9M14 9v9M18 9v9" />
                            </svg>
                          )}
                          {pin.iconType === "station" && (
                            <svg className={`h-6 w-6 ${isBlue ? "text-[#12233f]" : "text-[#ea580c]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M5 10v10h14V10M12 3v7M8 21v-4h8v4" />
                            </svg>
                          )}
                          {pin.iconType === "food" && (
                            <svg className={`h-6 w-6 ${isBlue ? "text-[#12233f]" : "text-[#ea580c]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M17 5v6a3 3 0 01-3 3M7 2v20" />
                              <circle cx="12" cy="12" r="8" />
                            </svg>
                          )}
                          {pin.iconType === "coast" && (
                            <svg className={`h-6 w-6 ${isBlue ? "text-[#12233f]" : "text-[#ea580c]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3-4 7-4 6 4 9 4 4-2 4-2M2 16s3-4 7-4 6 4 9 4 4-2 4-2" />
                            </svg>
                          )}
                          {pin.iconType === "temple" && (
                            <svg className={`h-6 w-6 ${isBlue ? "text-[#12233f]" : "text-[#ea580c]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 12h3v8h14v-8h3L12 3zM10 20v-5h4v5" />
                            </svg>
                          )}
                          {pin.iconType === "drop" && (
                            <svg className={`h-6 w-6 ${isBlue ? "text-[#12233f]" : "text-[#ea580c]"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zM9 10l2 2 4-4" />
                            </svg>
                          )}
                        </div>

                        {/* Pointer Dot on track */}
                        <div
                          className={`mt-1.5 h-3 w-3 rounded-full border-2 border-white transition-all ${
                            isActive
                              ? isBlue
                                ? "bg-[#12233f] ring-2 ring-blue-300 scale-125"
                                : "bg-[#ea580c] ring-2 ring-orange-300 scale-125"
                              : isBlue
                              ? "bg-gray-400"
                              : "bg-gray-400"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* 3. Bottom Stop Names */}
                <div className="grid grid-cols-8 gap-2 text-center text-xs font-bold text-navy mt-2">
                  {[
                    { time: "8:00 AM", title: "Pickup" },
                    { time: "9:00 AM", title: "Gateway of India & Taj Palace" },
                    { time: "10:00 AM", title: "CSMVS Museum" },
                    { time: "11:30 AM", title: "CSMT" },
                    { time: "12:30 PM", title: "Lunch" },
                    { time: "1:30 PM", title: "Marine Drive" },
                    { time: "2:45 PM", title: "Mahalaxmi & Haji Ali" },
                    { time: "4:00 PM", title: "Return Drop" },
                  ].map((s, idx) => (
                    <div
                      key={s.title}
                      onClick={() => setTimelineActiveIndex(idx)}
                      className={`cursor-pointer transition-colors ${
                        timelineActiveIndex === idx ? "text-primary font-black scale-105" : "text-gray-700 hover:text-navy"
                      }`}
                    >
                      <div className="text-[11px] text-gray-500 font-normal">{s.time}</div>
                      <div className="leading-tight mt-0.5">{s.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Stop Details Card */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-4 shadow-xs md:p-5">
              {[
                {
                  id: 0,
                  stopNum: "Stop 0 of 6",
                  title: "Doorstep Pickup from Your Address",
                  time: "8:00 AM",
                  duration: "Departure",
                  detail: "Your private chauffeur arrives directly at your hotel lobby, home gate, airport terminal, or railway station. Starting odometer reading is noted together.",
                  fee: "Covered in package",
                  tip: "Starting early before 8:30 AM ensures you beat South Mumbai morning office traffic on Western Express Highway.",
                },
                {
                  id: 1,
                  stopNum: "Stop 1 of 6",
                  title: "Gateway of India & The Taj Mahal Palace",
                  time: "9:00 AM – 9:45 AM",
                  duration: "45 Minutes",
                  detail: "Exterior visit and waterfront stroll. Better morning sunlight for photos, cool harbor breeze, and thinner crowds before 10:00 am.",
                  fee: "100% Free Entry",
                  tip: "Your driver parks in the Colaba/Taj municipal parking and waits while you take photos on the promenade.",
                },
                {
                  id: 2,
                  stopNum: "Stop 2 of 6",
                  title: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya (CSMVS Museum)",
                  time: "10:00 AM – 11:15 AM",
                  duration: "75 Minutes",
                  detail: "The premier indoor heritage stop in Mumbai. World-class galleries of ancient Indus Valley artifacts, Indian miniature paintings, and historical armory.",
                  fee: "~₹150 Adults (Paid at venue)",
                  tip: "Air-conditioned indoors. Closed on certain public holidays. Driver stays stationed outside on MG Road.",
                },
                {
                  id: 3,
                  stopNum: "Stop 3 of 6",
                  title: "CSMT & Flora Fountain (Hutatma Chowk)",
                  time: "11:30 AM – 12:10 PM",
                  duration: "40 Minutes",
                  detail: "Chhatrapati Shivaji Maharaj Terminus (UNESCO World Heritage Site) & colonial Gothic Victorian architecture. Exterior viewing and photo stop.",
                  fee: "Free exterior view",
                  tip: "The finest viewing point is from the heritage viewing deck directly across the junction.",
                },
                {
                  id: 4,
                  stopNum: "Stop 4 of 6",
                  title: "Lunch Break (Fort / Colaba Cuisine)",
                  time: "12:30 PM – 1:15 PM",
                  duration: "45 Minutes",
                  detail: "Relaxed meal break. Driver recommends authentic options: Parsi berry pulao at Britannia, coastal seafood at Mahesh Lunch Home, or traditional thali.",
                  fee: "Paid at actuals",
                  tip: "Driver takes lunch simultaneously while your car remains reserved and ready.",
                },
                {
                  id: 5,
                  stopNum: "Stop 5 of 6",
                  title: "Marine Drive & Girgaon Chowpatty",
                  time: "1:30 PM – 2:15 PM",
                  duration: "45 Minutes",
                  detail: "The Queen's Necklace promenade walk and Girgaon Chowpatty beach breeze. Panoramic curve of Back Bay with cool sea air.",
                  fee: "100% Free Entry",
                  tip: "Short walk on the promenade. Quick stop for famous Chowpatty kulfi or coconut water.",
                },
                {
                  id: 6,
                  stopNum: "Stop 6 of 6",
                  title: "Mahalaxmi Temple & Haji Ali Dargah",
                  time: "2:45 PM – 4:00 PM",
                  duration: "75 Minutes",
                  detail: "Both revered spiritual sites sit adjacent along Worli bay. Dargah pathway extends into the sea (accessible depending on daily tide timings).",
                  fee: "100% Free Entry",
                  tip: "Visiting both together saves significant travel time since they are less than 1.5 km apart.",
                },
                {
                  id: 7,
                  stopNum: "Trip Completion",
                  title: "Safe Return Drop at Your Address",
                  time: "4:00 PM",
                  duration: "Arrival",
                  detail: "Your chauffeur drops you comfortably back at your hotel, residence, or airport. Closing odometer and itemized receipt verified together.",
                  fee: "Zero unexpected surcharges",
                  tip: "Finishes comfortably by 4:00 PM to avoid heavy evening rush hour traffic back to suburbs.",
                },
              ]
                .filter((s) => s.id === timelineActiveIndex)
                .map((s) => (
                  <div key={s.id} className="animate-in fade-in duration-200">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-extrabold text-white">
                          {s.stopNum}
                        </span>
                        <span className="text-xs font-bold text-navy">{s.time}</span>
                        <span className="text-xs text-gray-500">({s.duration})</span>
                      </div>
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-800 border border-emerald-200">
                        {s.fee}
                      </span>
                    </div>

                    <h5 className="mt-3 font-display text-lg font-black text-navy md:text-xl">
                      {s.title}
                    </h5>
                    <p className="mt-1 text-xs text-gray-700 leading-relaxed md:text-sm">
                      {s.detail}
                    </p>

                    <div className="mt-3 rounded-xl bg-blue-50/60 p-2.5 text-xs text-blue-900 border border-blue-100">
                      <strong>💡 Chauffeur Tip:</strong> {s.tip}
                    </div>

                    {/* Stepper Navigation */}
                    <div className="mt-4 flex items-center justify-between pt-2 border-t border-gray-100">
                      <button
                        type="button"
                        disabled={timelineActiveIndex === 0}
                        onClick={() => setTimelineActiveIndex((prev) => Math.max(0, prev - 1))}
                        className="rounded-lg px-3 py-1.5 text-xs font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-gray-100 text-navy hover:bg-gray-200 cursor-pointer"
                      >
                        ‹ Previous Stop
                      </button>
                      <span className="text-xs text-gray-500">
                        Stop {timelineActiveIndex + 1} of 8
                      </span>
                      <button
                        type="button"
                        disabled={timelineActiveIndex === 7}
                        onClick={() => setTimelineActiveIndex((prev) => Math.min(7, prev + 1))}
                        className="rounded-lg px-3 py-1.5 text-xs font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-primary text-white hover:bg-primary-hover cursor-pointer"
                      >
                        Next Stop ›
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            <figcaption className="mt-4 text-center text-xs font-medium text-gray-600 italic">
              Six stops, realistic timings, no rushing. Tap any milestone pin above to view details.
            </figcaption>
          </figure>
        </div>

        {/* 15: H3 (under 13) */}
        <div id="itin-north" className="mt-8 scroll-mt-24">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            8 Hour North Mumbai Itinerary
          </h3>
          <p className="mt-1 text-xs text-gray-600 md:text-sm">
            Best for travellers staying in the western suburbs, and for anyone whose priority is temples, beaches and the Sea Link rather than colonial architecture.
          </p>
          <ol className="mt-3 space-y-1.5 list-decimal list-inside text-xs text-gray-700 md:text-sm">
            <li><strong>8:00 am</strong> Pickup.</li>
            <li><strong>8:45 am</strong> Siddhivinayak Temple, 60 to 90 minutes depending on the queue. Going early is the single biggest time saver in this route.</li>
            <li><strong>10:30 am</strong> Worli Sea Face and the Bandra Worli Sea Link crossing, 30 minutes.</li>
            <li><strong>11:15 am</strong> Bandra Bandstand and Mount Mary Church, 50 minutes.</li>
            <li><strong>12:30 pm</strong> Lunch and Linking Road, 75 minutes if shopping interests you, otherwise skip and gain an hour.</li>
            <li><strong>2:15 pm</strong> ISKCON Temple Juhu, 40 minutes.</li>
            <li><strong>3:15 pm</strong> Juhu Beach, 45 minutes.</li>
            <li><strong>4:00 pm</strong> Drop.</li>
          </ol>
        </div>

        {/* 16: H3 (under 13) */}
        <div id="itin-mixed" className="mt-8 scroll-mt-24">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            10 Hour Mixed Highlights Itinerary
          </h3>
          <p className="mt-1 text-xs text-gray-600 md:text-sm">
            The most popular choice for a single day in Mumbai. It covers both halves without feeling like a race.
          </p>
          <ol className="mt-3 space-y-1.5 list-decimal list-inside text-xs text-gray-700 md:text-sm">
            <li><strong>7:30 am</strong> Pickup.</li>
            <li><strong>8:15 am</strong> Siddhivinayak Temple, 60 minutes, early to beat the queue.</li>
            <li><strong>9:45 am</strong> Mahalaxmi Temple and Haji Ali Dargah, 75 minutes.</li>
            <li><strong>11:15 am</strong> Marine Drive and Girgaon Chowpatty, 40 minutes.</li>
            <li><strong>12:15 pm</strong> Gateway of India and Taj exterior, 45 minutes.</li>
            <li><strong>1:15 pm</strong> Lunch in Colaba or Fort, 60 minutes.</li>
            <li><strong>2:30 pm</strong> CSMT and Flora Fountain, 35 minutes.</li>
            <li><strong>3:30 pm</strong> Bandra Worli Sea Link crossing and Bandstand, 45 minutes.</li>
            <li><strong>4:45 pm</strong> Juhu Beach, 45 minutes.</li>
            <li><strong>5:30 pm</strong> Drop.</li>
          </ol>
          <p className="mt-2 text-xs text-gray-500 font-medium">Eight stops, brisk but not exhausting.</p>
        </div>

        {/* 17: H3 (under 13) */}
        <div id="itin-extended" className="mt-8 scroll-mt-24">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            12 Hour Extended Itinerary
          </h3>
          <p className="mt-1 text-xs text-gray-600 md:text-sm">
            For travellers who want one substantial visit alongside the highlights, or simply a slower pace with children and elders.
          </p>
          <div className="mt-3 space-y-3 text-xs text-gray-700 md:text-sm">
            <div>
              <strong className="text-navy font-semibold">Version A, with Elephanta Caves:</strong>
              <ol className="mt-1 space-y-1 list-decimal list-inside text-gray-600 pl-2">
                <li>7:00 am Pickup, straight to the Gateway of India.</li>
                <li>8:00 am Ferry to Elephanta Caves. Allow four and a half to five hours, back around 1:00 pm. The driver waits.</li>
                <li>1:30 pm Lunch in Colaba, 60 minutes.</li>
                <li>2:45 pm Marine Drive and Girgaon Chowpatty, 45 minutes.</li>
                <li>4:00 pm Mahalaxmi Temple and Haji Ali, 75 minutes.</li>
                <li>5:45 pm Bandra Worli Sea Link and Bandstand, 45 minutes.</li>
                <li>7:00 pm Drop.</li>
              </ol>
            </div>
            <div>
              <strong className="text-navy font-semibold">Version B, relaxed full city pace:</strong>
              <p className="mt-1 text-gray-600 pl-2">
                The 10 hour itinerary above with two extra hours spread across the stops, longer meal breaks and a mid afternoon rest stop. This is the version we recommend for groups travelling with senior citizens.
              </p>
            </div>
          </div>
        </div>

        {/* 18: H3 (under 13) */}
        <div id="itin-pilgrim" className="mt-8 scroll-mt-24">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            Temple Only Pilgrimage Circuit
          </h3>
          <p className="mt-1 text-xs text-gray-600 md:text-sm">
            If your Mumbai Darshan is devotional rather than sightseeing, the route looks quite different, and the timing follows aarti schedules and queue patterns rather than traffic.
          </p>
          <ol className="mt-3 space-y-1.5 list-decimal list-inside text-xs text-gray-700 md:text-sm">
            <li><strong>Siddhivinayak Temple, Prabhadevi:</strong> Go early, this is the longest queue of the day, especially on Tuesdays.</li>
            <li><strong>Mahalaxmi Temple, Mahalaxmi.</strong></li>
            <li><strong>Haji Ali Dargah, Worli:</strong> Subject to tide access.</li>
            <li><strong>Mumbadevi Temple, Bhuleshwar:</strong> The temple the city takes its name from, and one most sightseeing itineraries skip completely.</li>
            <li><strong>ISKCON Temple, Juhu:</strong> Note the afternoon closure.</li>
            <li><strong>Babulnath Temple, Girgaon:</strong> Optional if time allows.</li>
          </ol>
          <p className="mt-2 text-xs text-gray-500 font-medium">Tell us which temples matter most and we build the day backwards from those.</p>
        </div>

        {/* 19: H3 (under 13) */}
        <div id="itin-airport" className="mt-8 scroll-mt-24">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            Airport Layover Mini Darshan, 5 to 6 Hour Window
          </h3>
          <p className="mt-1 text-xs text-gray-600 md:text-sm">
            A genuinely useful option almost nobody publishes. If you have a layover of six hours or more at Mumbai airport, staying in the terminal is a waste of time.
          </p>
          <div className="mt-2 space-y-1 text-xs text-gray-700 leading-relaxed md:text-sm">
            <p>Because our office is near the airport, pickup is quick.</p>
            <p><strong>A realistic five hour layover route:</strong> Pickup at Terminal 1 or Terminal 2, Bandra Bandstand and Mount Mary Church, cross the Bandra Worli Sea Link to Worli Sea Face, Siddhivinayak Temple, lunch in Bandra, return to airport.</p>
            <p><strong>What does not fit:</strong> Anything in South Mumbai. The Gateway of India is simply too far from the airport for a five hour layover, and a single traffic jam on the return can put your flight at risk.</p>
            <p>Luggage stays in the car with the driver throughout. Airport parking is charged at actual and is not included in the package fare.</p>
          </div>
        </div>

        {/* 20: H3 (under 13) */}
        <div id="itin-night" className="mt-8 scroll-mt-24">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            Evening and Night Mumbai Darshan
          </h3>
          <p className="mt-1 text-xs text-gray-600 md:text-sm">
            Mumbai after dark is a different city, and a 4 hour evening package covers it well. From ₹560 in a Swift Dzire.
          </p>
          <p className="mt-2 text-xs text-gray-700 leading-relaxed md:text-sm">
            A typical route runs Marine Drive as the Queen&apos;s Necklace lights come on, Girgaon Chowpatty for the food stalls, the Bandra Worli Sea Link illuminated, Bandstand and Worli Sea Face.
          </p>
          <p className="mt-1 text-xs text-gray-700 leading-relaxed md:text-sm">
            What to know: the museum, planetarium and aquarium are shut by evening, and most temples close between 9 and 10 pm. This is a route for coastline, architecture and street food rather than monuments. It suits travellers who spent the day in meetings, and photographers.
          </p>
        </div>

        {/* CTA 3: After 20, end of itineraries */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={telHref()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-navy shadow-md transition-all hover:bg-accent-hover"
          >
            <PhoneIcon className="h-4 w-4" />
            Call and We Build Your Itinerary
          </a>
          <a
            href={waUrl("Hi, I want to book a Mumbai Darshan cab on [date]. Please suggest an itinerary for our group.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-green-600"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Send Your Date on WhatsApp
          </a>
        </div>
      </section>

      {/* 21: H2 - Section 6 */}
      <section className="mx-auto max-w-[1080px] px-4">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Choosing the Right Vehicle for Your Group and Luggage
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          Seat counts on their own are misleading. Five adults fit in a sedan on paper. Five adults plus airport luggage do not. Here is the practical version.
        </p>

        {/* Interactive Group & Luggage Fit Recommender */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Interactive Luggage Fit Advisor</span>
              <p className="text-sm font-bold text-navy">Find the exact cab category for your passengers & bags</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-600">Passengers:</span>
                <div className="flex items-center rounded-lg border border-gray-300">
                  <button
                    onClick={() => setPassengerCount((p) => Math.max(1, p - 1))}
                    className="px-2.5 py-1 text-xs font-bold text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-2.5 text-xs font-bold text-navy">{passengerCount}</span>
                  <button
                    onClick={() => setPassengerCount((p) => Math.min(20, p + 1))}
                    className="px-2.5 py-1 text-xs font-bold text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-600">Bags:</span>
                <div className="flex items-center rounded-lg border border-gray-300">
                  <button
                    onClick={() => setLuggageCount((l) => Math.max(0, l - 1))}
                    className="px-2.5 py-1 text-xs font-bold text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-2.5 text-xs font-bold text-navy">{luggageCount}</span>
                  <button
                    onClick={() => setLuggageCount((l) => Math.min(10, l + 1))}
                    className="px-2.5 py-1 text-xs font-bold text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl bg-blue-50/70 p-3 text-xs md:text-sm">
            <div>
              <span className="font-semibold text-gray-600">Recommended for Your Group: </span>
              <strong className="font-bold text-navy text-sm md:text-base">{recommendedVehicle.name}</strong>
              <p className="text-xs text-gray-600">{recommendedVehicle.reason}</p>
            </div>
            <button
              onClick={() => openBooking(recommendedVehicle.name)}
              className="rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white shadow hover:bg-primary/90 shrink-0"
            >
              Select Vehicle
            </button>
          </div>
        </div>

        {/* IMAGE 5: Inside section 6 */}
        <figure className="my-6 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
          <img
            src="/images/innova-crysta-luggage-space-mumbai-darshan.webp"
            title="Innova Crysta Luggage Space"
            alt="Innova Crysta boot loaded with four suitcases for a Mumbai Darshan trip"
            width={1200}
            height={800}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <figcaption className="p-3 text-center text-xs font-medium text-gray-600 italic">
            Four large bags fit comfortably. A sedan will not take this load.
          </figcaption>
        </figure>

        {/* Table 7: Vehicle & Luggage Selection */}
        <div className="table-wrap mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="px-3.5 py-3 font-bold">Vehicle</th>
                <th scope="col" className="px-3.5 py-3 font-bold text-center">Comfortable adults</th>
                <th scope="col" className="px-3.5 py-3 font-bold text-center">With 2 children</th>
                <th scope="col" className="px-3.5 py-3 font-bold text-center">Large bags</th>
                <th scope="col" className="px-3.5 py-3 font-bold">Boot reality</th>
                <th scope="col" className="px-3.5 py-3 font-bold">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {VEHICLE_LUGGAGE_DATA.map((v) => (
                <tr key={v.vehicle} className="hover:bg-gray-50">
                  <td className="px-3.5 py-2.5 font-bold text-navy">{v.vehicle}</td>
                  <td className="px-3.5 py-2.5 text-center text-gray-700">{v.adults}</td>
                  <td className="px-3.5 py-2.5 text-center text-gray-700">{v.children}</td>
                  <td className="px-3.5 py-2.5 text-center font-bold text-primary">{v.largeBags}</td>
                  <td className="px-3.5 py-2.5 text-gray-600">{v.bootReality}</td>
                  <td className="px-3.5 py-2.5 text-gray-800 text-xs font-medium">{v.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-gray-600 leading-relaxed md:text-sm">
          Arriving from the airport with your luggage? Book one category above what your headcount suggests. A family of four with airport bags will struggle in a sedan once luggage is in the boot. An Ertiga or Innova solves that before you leave the terminal.
        </p>
        <p className="mt-1 text-xs text-gray-600 leading-relaxed md:text-sm">
          Full fleet details, boot dimensions and passenger photographs are on our <Link href="/fleet" className="text-primary underline">fleet page</Link>.
        </p>
      </section>

      {/* 22: H2 - Section 7 (id="pickup-zones") */}
      <section id="pickup-zones" className="mx-auto max-w-[1080px] px-4 scroll-mt-20">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Pickup Points and How Your Location Changes the Package
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          Your pickup address decides how many booked kilometres get used before you reach the first landmark. This is the most common reason a Mumbai Darshan booking runs over budget, and it is almost never explained upfront.
        </p>
        <p className="mt-1 text-sm text-gray-700 leading-relaxed">
          Our office sits near the airport, and time and kilometres are calculated office to office, so pickups in the western suburbs are the most efficient.
        </p>

        {/* Table 8: Pickup Zones */}
        <div className="table-wrap mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-gray-100 text-navy font-bold">
              <tr>
                <th scope="col" className="px-3.5 py-3">Pickup zone</th>
                <th scope="col" className="px-3.5 py-3 text-center">Km used before the first stop</th>
                <th scope="col" className="px-3.5 py-3 text-center">Recommended package</th>
                <th scope="col" className="px-3.5 py-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {PICKUP_ZONES.map((z) => (
                <tr key={z.zone} className="hover:bg-gray-50">
                  <td className="px-3.5 py-2.5 font-bold text-navy">{z.zone}</td>
                  <td className="px-3.5 py-2.5 text-center text-gray-600">{z.kmImpact}</td>
                  <td className="px-3.5 py-2.5 text-center font-semibold text-primary">{z.package}</td>
                  <td className="px-3.5 py-2.5 text-gray-600 text-xs">{z.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 space-y-1.5 text-xs text-gray-700 leading-relaxed md:text-sm">
          <p><strong>On the Atal Setu:</strong> The Mumbai Trans Harbour Link has cut the drive between Navi Mumbai and South Mumbai considerably. It is usually the faster route for a Navi Mumbai pickup heading to the Gateway of India, but the toll is charged separately and is not part of any package.</p>
          <p><strong>Where we operate:</strong> Mumbai city, the western, central and harbour suburbs, Thane and Navi Mumbai, with outstation service across Maharashtra.</p>
        </div>
      </section>

      {/* 23: H2 - Section 8 */}
      <section className="mx-auto max-w-[1080px] px-4">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Mumbai Darshan by Cab vs Bus vs Ola or Uber vs Self Drive
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          A private cab is not the right answer for everyone. Here is an honest comparison so you can decide based on your group and budget.
        </p>

        {/* Table 9: Transport Comparison */}
        <div className="table-wrap mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-navy text-white">
              <tr>
                <th scope="col" className="px-3.5 py-3 font-bold">Feature</th>
                <th scope="col" className="px-3.5 py-3 font-bold bg-primary/20">Private Darshan cab</th>
                <th scope="col" className="px-3.5 py-3 font-bold">Bus tour</th>
                <th scope="col" className="px-3.5 py-3 font-bold">App cab hourly rental</th>
                <th scope="col" className="px-3.5 py-3 font-bold">Self drive</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-medium">
              {TRANSPORT_COMPARISON.map((tc) => (
                <tr key={tc.feature} className="hover:bg-gray-50">
                  <td className="px-3.5 py-2.5 font-bold text-navy">{tc.feature}</td>
                  <td className="px-3.5 py-2.5 font-semibold text-primary bg-primary/[0.02]">{tc.privateCab}</td>
                  <td className="px-3.5 py-2.5 text-gray-600">{tc.busTour}</td>
                  <td className="px-3.5 py-2.5 text-gray-600">{tc.appCab}</td>
                  <td className="px-3.5 py-2.5 text-gray-600">{tc.selfDrive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 space-y-1.5 text-xs text-gray-700 leading-relaxed md:text-sm">
          <p><strong>Our honest verdict:</strong> If you are travelling alone or as a couple on a strict budget and you do not mind a fixed schedule, a bus tour is better value and we will say so. From three people upward a private cab usually works out similar per head while giving you full control of the day. With elders, young children, or a temple circuit built around aarti timings, it is not really a contest.</p>
          <p>Self drive is the option we would steer most visitors away from. Mumbai traffic and parking are hard work even for residents, and you will spend more of the day hunting for a parking space than looking at the city.</p>
          <p className="text-gray-500 italic">Bus tour and app cab pricing varies by operator and day, so check current rates directly rather than relying on any operator&apos;s summary, including ours.</p>
        </div>
      </section>

      {/* 24: H2 - Section 9 */}
      <section className="mx-auto max-w-[1080px] px-4">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Is Mumbai Darshan Suitable for Senior Citizens, Kids or Limited Mobility?
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          Yes, with the right planning. A private cab is the most accessible way to see Mumbai because the vehicle waits at every stop, so there is no walking between sites and no parking to worry about. Some individual landmarks do involve significant walking, steps or queuing, and those are worth choosing carefully.
        </p>
        <p className="mt-1 text-sm text-gray-700 leading-relaxed">
          This is the question families ask us most often, and no competing Mumbai Darshan page answers it at all.
        </p>

        {/* IMAGE 6: Inside section 9 */}
        <figure className="my-6 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
          <img
            src="/images/mumbai-darshan-cab-senior-citizens.webp"
            title="Mumbai Darshan Cab for Senior Citizens"
            alt="Senior passenger boarding an AC Innova for a Mumbai Darshan sightseeing tour"
            width={1200}
            height={800}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <figcaption className="p-3 text-center text-xs font-medium text-gray-600 italic">
            Higher seat and wider door make a long day of stops much easier
          </figcaption>
        </figure>

        <div className="space-y-2 text-xs text-gray-700 leading-relaxed md:text-sm">
          <p><strong>Comfortable for most travellers:</strong> Marine Drive, a flat promenade where you stop for as long or as little as you like. Gateway of India, level ground though it gets crowded. Worli Sea Face and Bandstand, flat and short. Juhu Beach, where the sand is difficult for wheelchairs but the promenade edge works fine.</p>
          <p><strong>Needs consideration:</strong> Haji Ali Dargah has a long exposed causeway walk each way with no shade and no seating. It is the hardest stop in a standard itinerary for anyone with limited stamina. Siddhivinayak Temple queues are long and largely standing, ask about any assistance queue when you arrive. Elephanta Caves involve boarding a boat and then a substantial flight of steps up to the caves, not advisable for anyone with mobility difficulty. Kanheri Caves have uneven rock cut steps and slopes throughout. Hanging Gardens is pleasant but sits on a hill with some gradient.</p>
          <p><strong>What we do for family groups:</strong> We recommend an Innova or Innova Crysta for easier boarding across a long day. We build in a mid afternoon rest break rather than running stops back to back. We sequence temples early, before both the heat and the queues build. And we suggest a 10 or 12 hour package rather than 8, so the same stops can be covered at a slower pace with proper breaks.</p>
          <p>For specific wheelchair requirements, tell us when you book and we will be straightforward about which stops will work and which will not, rather than promising everything.</p>
          <p><strong>Travelling with young children?</strong> The same logic runs in reverse. Beaches, the aquarium and the planetarium hold their attention far better than heritage architecture. Say so when you book and we weight the route that way.</p>
        </div>
      </section>

      {/* 25: H2 - Section 10 */}
      <section className="mx-auto max-w-[1080px] px-4">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Best Time for Mumbai Darshan, Season, Day and Start Time
        </h2>
        <div className="mt-3 space-y-2 text-xs text-gray-700 leading-relaxed md:text-sm">
          <p><strong>Best months:</strong> November to February. Mumbai&apos;s winter is dry and comparatively cool, which matters a lot when your day involves walking between outdoor landmarks.</p>
          <p><strong>March to May:</strong> Hot and humid. The circuit is perfectly doable, just start early, build in longer breaks, and expect outdoor stops to be uncomfortable by midday.</p>
          <p><strong>June to September:</strong> The monsoon, and this is the season that genuinely changes the plan. Elephanta ferries are suspended. Low lying stretches can waterlog during heavy rainfall and add substantially to travel times. On the other hand coastal stops like Marine Drive, Worli Sea Face and Bandstand are dramatic in the rain and plenty of people prefer them that way, while indoor stops such as the museum and planetarium become the sensible backbone of the day.</p>
          <p>We do not discourage monsoon trips. We just plan them differently, with more indoor stops and more buffer.</p>
          <p><strong>Weekday or weekend?</strong> Weekdays are better for traffic, weekends are better for parking near beaches and promenades. On balance a Tuesday to Thursday trip runs most smoothly, with one exception: Siddhivinayak is much busier on Tuesdays.</p>
          <p><strong>Best start time:</strong> Between 7:30 and 8:30 am. An early start buys thinner crowds at your first two stops and gets you through the morning commute before it peaks. A 10 am start typically costs you one full stop by the end of the day.</p>
          <p><strong>Festival periods worth planning around:</strong> Ganesh Chaturthi in August or September brings large processions and significant road closures, particularly around Prabhadevi, Lalbaug and the coastal roads. It is remarkable to witness and difficult to drive through. Mahashivratri brings heavy crowds at Shiva temples. Navratri and Diwali mean busier roads and extended temple hours at some sites. The Bandra Fair in September congests Mount Mary and the surrounding Bandra roads for a full week.</p>
          <p>If your date falls in a festival period, tell us. We reroute rather than let you sit in a closed road jam.</p>
        </div>
      </section>

      {/* 26: H2 - Section 11 */}
      <section className="mx-auto max-w-[1080px] px-4">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          How to Book a Mumbai Darshan Cab with Book A Cab
        </h2>
        <ol className="mt-3 space-y-2 list-decimal list-inside text-xs text-gray-700 leading-relaxed md:text-sm">
          <li><strong>Tell us your details:</strong> Date, pickup address, group size and the places you want to see. Call or WhatsApp {phoneDisplay}, or email {SITE.email}.</li>
          <li><strong>We suggest the right package:</strong> We recommend the vehicle and package, and quote a fare. If your plan does not fit the hours you asked for, we say so at this stage rather than at the end of the day.</li>
          <li><strong>Confirm the booking:</strong> We accept cash, credit and debit cards, UPI and major digital wallets. Corporate clients can arrange monthly billing with a GST invoice.</li>
          <li><strong>Travel:</strong> The driver reaches your pickup point at the agreed time and stays with you for the full package.</li>
        </ol>

        <p className="mt-6 font-display text-lg font-bold text-navy">What you get and when</p>

        {/* Table 10: Booking Stages */}
        <div className="table-wrap mt-3 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs md:text-sm">
            <thead className="bg-gray-100 text-navy font-bold">
              <tr>
                <th scope="col" className="px-4 py-3 w-1/3">Stage</th>
                <th scope="col" className="px-4 py-3">What you receive</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {BOOKING_STAGES.map((s) => (
                <tr key={s.stage} className="hover:bg-gray-50">
                  <td className="px-4 py-2.5 font-bold text-navy">{s.stage}</td>
                  <td className="px-4 py-2.5 text-gray-700">{s.receive}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 space-y-1 text-xs text-gray-600 leading-relaxed md:text-sm">
          <p><strong>What to carry:</strong> Photo ID, which some hotel and airport pickups need. Cash for entry tickets and temple offerings. And comfortable footwear you can slip off easily at temples.</p>
          <p>Questions before you commit? <Link href="/contact" className="text-primary underline">Get in touch</Link>, our support line runs 24 hours.</p>
        </div>
      </section>

      {/* 27: H2 - Section 12 */}
      <section className="mx-auto max-w-[1080px] px-4">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Payment, Cancellation, Waiting Time and Our Service Commitments
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          Most Mumbai Darshan operators publish a fare and nothing else. You are entitled to know the terms before you pay, so here they are.
        </p>
        <div className="mt-3 space-y-2 text-xs text-gray-700 leading-relaxed md:text-sm">
          <p><strong>Payment:</strong> Payment is due on completion of the trip unless a different arrangement is agreed at booking. We accept cash, credit and debit cards, UPI and major digital wallets. Corporate accounts can be set up for monthly billing with a GST invoice.</p>
          <p><strong>Cancellation:</strong> You can cancel up to 2 hours before your pickup time. Cancellation charges may apply depending on how close to pickup the cancellation comes and whether a vehicle has already been dispatched. Rescheduling to another date is usually straightforward if you tell us the day before.</p>
          <p><strong>Waiting time and overtime:</strong> Waiting at each stop is unlimited inside your booked hours, that is the whole point of hiring the car for the day. Beyond the package, extra time is ₹150 per hour and extra distance is charged at your vehicle&apos;s per km rate, both shown as separate lines on your bill. Our standard running window is 6:00 am to 10:00 pm, and holding the cab past 10:00 pm attracts extra charges, with night charges applying between 12:00 am and 6:00 am.</p>
          <p><strong>Other charges as actuals:</strong> Tolls, parking, interstate taxes and entry fees are charged at actual with receipts. Driver allowance is charged extra. Quoted rates are based on current fuel prices and a major fuel price change can move them.</p>
          <p><strong>Our commitments to you:</strong> The fare quoted at booking is the fare charged, plus only the tolls, parking, driver allowance and extra hours or kilometres actually used. Every bill is itemised, no round number totals with no explanation. Driver and vehicle details reach you before pickup, not on the morning of the trip. All our drivers are background verified and trained, and every vehicle carries GPS tracking. And if we cannot do what you have asked for, we tell you before you pay.</p>
          <p>Full terms are on our <Link href="/terms-conditions" className="text-primary underline">terms and conditions page</Link>.</p>
        </div>
      </section>

      {/* 28: H2 - Section 13 */}
      <section className="mx-auto max-w-[1080px] px-4">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
          Why Travellers Book Mumbai Darshan Cabs with Book A Cab
        </h2>
        <p className="mt-2 text-sm text-gray-700 leading-relaxed">
          Facts you can check, rather than adjectives you cannot.
        </p>

        {/* IMAGE 7: Inside section 13 */}
        <figure className="my-6 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
          <img
            src="/images/book-a-cab-driver-id-itemised-bill.webp"
            title="Book A Cab Driver ID and Itemised Bill"
            alt="Book A Cab driver identification and itemised Mumbai Darshan trip bill"
            width={1200}
            height={800}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <figcaption className="p-3 text-center text-xs font-medium text-gray-600 italic">
            Every trip ends with an itemised bill and toll receipts
          </figcaption>
        </figure>

        <div className="mt-4 space-y-2.5 text-xs text-gray-700 leading-relaxed md:text-sm">
          <p><strong>A real business with one contact number:</strong> {SITE.name}, office near the airport in Mumbai, Maharashtra. Phone and WhatsApp on {phoneDisplay}, email {SITE.email}. Support runs 24 hours. More on our <Link href="/about" className="text-primary underline">about page</Link>.</p>
          <p><strong>Founded by someone who has done this a long time:</strong> Founded by Rajesh Sharma, who brought over 15 years of experience in the transport industry to it. The company began with a fleet of five cars and now runs a considerably larger one across Maharashtra.</p>
          <p><strong>Published rates, applied consistently:</strong> Every fare on this page comes from the same per km rates listed on our <Link href="/packages" className="text-primary underline">tour packages page</Link>. No separate tourist pricing, no fare that appears in a heading and then disappears from the table.</p>
          <p><strong>Itemised billing on every trip:</strong> Package fare, extra hours, extra kilometres, driver allowance, tolls and parking, each on its own line, with toll receipts handed over.</p>
          <p><strong>Driver details before pickup:</strong> Name, phone number and vehicle registration, shared in advance. All drivers are background verified and trained, and every vehicle has GPS tracking.</p>
          <p><strong>Written route planning:</strong> Tell us your priorities and we send a suggested itinerary with realistic timings before you commit, the same kind of plan you can read in the itineraries above.</p>
          <p><strong>A fleet that covers every group size:</strong> From a Swift Dzire at ₹14 per km through to a 32 seater bus, all listed with rates on our <Link href="/fleet" className="text-primary underline">fleet page</Link>.</p>
        </div>

        {/* 29: H3 (under 28) */}
        <div className="mt-10">
          <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
            How to Check Any Mumbai Darshan Cab Operator Before You Pay
          </h3>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">
            This applies to us as much as to anybody else. If you are comparing operators, from a directory listing, a search result or a hotel recommendation, these six checks tell you most of what you need to know.
          </p>
          {/* Table 11: Operator Due Diligence Checklist */}
          <div className="table-wrap mt-6 overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-xs md:text-sm">
              <thead className="bg-navy text-white">
                <tr>
                  <th scope="col" className="px-4 py-3.5 font-bold w-1/4">Check</th>
                  <th scope="col" className="px-4 py-3.5 font-bold">What to verify</th>
                  <th scope="col" className="px-4 py-3.5 font-bold">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-navy">Get the fare in writing with the package spelled out</td>
                  <td className="px-4 py-3 text-gray-700">&quot;₹2,500 for Mumbai Darshan&quot; means nothing without the hours and kilometres attached to it.</td>
                  <td className="px-4 py-3 text-gray-600">Guarantees clarity on distance and duty window before paying.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-navy">Ask for extra hour and extra km rates before booking</td>
                  <td className="px-4 py-3 text-gray-700">Clear extra hour rate (e.g. ₹150/hr) and published per-km rates upfront.</td>
                  <td className="px-4 py-3 text-gray-600">An operator who will not state them upfront will state them at the end of the day, when you have no leverage.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-navy">Confirm what is excluded</td>
                  <td className="px-4 py-3 text-gray-700">Tolls, parking, driver allowance and entry tickets confirmed prior to booking.</td>
                  <td className="px-4 py-3 text-gray-600">These are legitimately extra almost everywhere; you should hear that at booking, not at 7 pm.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-navy">Check the vehicle is commercially registered</td>
                  <td className="px-4 py-3 text-gray-700">Yellow commercial number plates and active tourist permit.</td>
                  <td className="px-4 py-3 text-gray-600">A private car being run as a taxi has neither the permit nor the commercial insurance cover for passengers.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-navy">Ask when you will get the driver&apos;s details</td>
                  <td className="px-4 py-3 text-gray-700">Driver name, mobile number and registration number shared in advance before pickup.</td>
                  <td className="px-4 py-3 text-gray-600">If details only turn up on the morning of the trip, the booking may not be firmly allocated.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-navy">Insist on an itemised bill</td>
                  <td className="px-4 py-3 text-gray-700">Separate line items for package fare, extra km/hours, tolls, parking, and driver allowance.</td>
                  <td className="px-4 py-3 text-gray-600">A single round number with no breakdown is how disputes start.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-medium text-navy text-xs md:text-sm">Handle all six comfortably and you are probably in good hands, whoever you book with.</p>

          {/* CTA 4: After 29, end of vetting list */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={telHref()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-navy shadow-md transition-all hover:bg-accent-hover"
            >
              <PhoneIcon className="h-4 w-4" />
              Ask Us Any of These Six Questions
            </a>
            <a
              href={waUrl("Hi, I want a written Mumbai Darshan quote with all details spelled out.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-green-600"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Get It in Writing on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 30: H2 - Section 14 (id="faq") */}
      <section id="faq" className="mx-auto max-w-[1080px] px-4 scroll-mt-20">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
              Mumbai Darshan Cab, Frequently Asked Questions
            </h2>
            <p className="mt-1 text-xs text-gray-500 md:text-sm">
              All 21 questions answered transparently before you book
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={expandAllFaqs}
              className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 shadow-sm"
            >
              Expand All
            </button>
            <button
              onClick={collapseAllFaqs}
              className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 shadow-sm"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Search & Category Filter */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={faqQuery}
                onChange={(e) => setFaqQuery(e.target.value)}
                placeholder="Search FAQ by keyword (e.g. tolls, cancellation, luggage, monsoon, Monday)..."
                className="w-full rounded-xl border border-gray-300 bg-white py-2 pl-9 pr-8 text-xs font-medium text-navy placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary md:text-sm"
              />
              {faqQuery && (
                <button
                  onClick={() => setFaqQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all", label: "All (21)" },
                { id: "fare", label: "Fares & Costs" },
                { id: "route", label: "Routes & Timing" },
                { id: "policy", label: "Driver & Policies" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFaqCategory(cat.id as any)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                    faqCategory === cat.id
                      ? "bg-navy text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive FAQ Accordion List */}
        <div className="mt-6 space-y-3">
          {filteredFaqs.map(({ faq, index }) => {
            const isOpen = expandedFaqs[index] ?? false;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-gray-50/50"
                  aria-expanded={isOpen}
                >
                  <p className="font-display text-sm md:text-base font-bold text-navy pr-4">
                    {faq.question}
                  </p>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-gray-100 px-5 pb-5 pt-3">
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 31: H2 - Section 15, final CTA (id="book-now") */}
      <section id="book-now" className="mx-auto max-w-[1080px] px-4 scroll-mt-20">
        <div className="rounded-3xl bg-gradient-to-r from-navy to-primary p-8 text-center text-white shadow-xl md:p-12">
          <h2 className="font-display text-2xl font-extrabold text-white md:text-4xl">
            Book Your Mumbai Darshan Cab Today
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs md:text-sm text-blue-100 leading-relaxed">
            Tell us your date, your pickup address and roughly what you would like to see. We come back with a suggested itinerary, the right package and a fare, before you commit to anything.
          </p>

          <div className="mt-4 inline-block rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-accent">
            Support runs 24 hours • Instant confirmation on WhatsApp
          </div>

          {/* CTA 5: Inside 31 */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={telHref()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-navy shadow-lg transition-all hover:bg-accent-hover"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {phoneDisplay}
            </a>
            <a
              href={waUrl("Hi, I want to book a Mumbai Darshan cab. My travel date is [date] and pickup area is [area].")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-green-600"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 text-xs text-blue-200">
            <span>Quick enquiry: Name, Phone, Travel date, Pickup area, Group size, Places you would like to include.</span>
          </div>
        </div>
      </section>

      {/* CTA 6: Sticky mobile bottom bar (56px, mobile only) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 flex h-14 items-center justify-around border-t border-gray-200 bg-white shadow-lg md:hidden">
        <a
          href={telHref()}
          className="flex h-full flex-1 items-center justify-center gap-2 bg-accent font-display text-sm font-bold text-navy transition-colors hover:bg-accent-hover"
        >
          <PhoneIcon className="h-4 w-4" />
          Call
        </a>
        <a
          href={waUrl("Hi, I want a Mumbai Darshan cab")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full flex-1 items-center justify-center gap-2 bg-whatsapp font-display text-sm font-bold text-white transition-colors hover:bg-green-600"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </article>
  );
}
