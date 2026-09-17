"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  ChevronDownIcon,
  TaxiIcon,
} from "@/components/icons";
import { useBooking } from "@/lib/booking-context";
import {
  MAHABALESHWAR_FARES,
  FARE_INCLUSIONS_EXCLUSIONS,
  PICKUP_LOCATIONS,
  ROUTE_MILESTONES,
  MAHABALESHWAR_FAQS,
  MahabaleshwarFareItem,
} from "@/lib/mumbai-to-mahabaleshwar";

const PHONE_NUMBER = "+91-8856904131";
const PHONE_TEL = "+918856904131";
const WHATSAPP_NUMBER = "918856904131";

function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function MumbaiToMahabaleshwarContent() {
  const { openBooking } = useBooking();

  // 1. Interactive Fare Estimator State
  const [tripType, setTripType] = useState<"oneway" | "roundtrip">("oneway");
  const [selectedCabId, setSelectedCabId] = useState<string>("dzire");
  const [selectedPickupIdx, setSelectedPickupIdx] = useState<number>(0);
  const [passengerFilter, setPassengerFilter] = useState<number>(4);
  const [luggageFilter, setLuggageFilter] = useState<number>(2);

  // 2. Inclusions / Exclusions Filter State
  const [incFilter, setIncFilter] = useState<"all" | "included" | "separate">("all");
  const [expandedIncId, setExpandedIncId] = useState<string | null>(null);

  // 3. One-Way vs Round Trip Interactive Comparison State
  const [compareStayDays, setCompareStayDays] = useState<number>(2);

  // 4. Vehicle Category Filter State
  const [vehicleFilter, setVehicleFilter] = useState<"all" | "sedan" | "suv" | "van">("all");

  // 5. Route Milestone Timeline State
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState<number>(0);

  // 6. Booking Process Stepper State
  const [activeBookingStep, setActiveBookingStep] = useState<number>(1);

  // 7. FAQ State: Search and Category
  const [faqQuery, setFaqQuery] = useState<string>("");
  const [faqCategory, setFaqCategory] = useState<"all" | "pricing" | "routes" | "vehicles" | "policies">("all");
  const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({ 0: true, 1: true });

  // Currently selected vehicle object
  const currentVehicle: MahabaleshwarFareItem = useMemo(() => {
    return MAHABALESHWAR_FARES.find((v) => v.id === selectedCabId) || MAHABALESHWAR_FARES[0];
  }, [selectedCabId]);

  // Filtered vehicles
  const filteredVehicles = useMemo(() => {
    return MAHABALESHWAR_FARES.filter((v) => {
      if (vehicleFilter === "sedan") return v.id === "dzire" || v.id === "etios";
      if (vehicleFilter === "suv") return v.id === "ertiga" || v.id === "carens" || v.id === "innova-crysta" || v.id === "scorpio";
      if (vehicleFilter === "van") return v.id === "tempo-traveller";
      return true;
    });
  }, [vehicleFilter]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return MAHABALESHWAR_FAQS.filter((faq) => {
      const matchCat = faqCategory === "all" || faq.category === faqCategory;
      const matchQuery =
        !faqQuery ||
        faq.question.toLowerCase().includes(faqQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(faqQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [faqCategory, faqQuery]);

  const toggleFaq = (idx: number) => {
    setExpandedFaqs((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const expandAllFaqs = () => {
    const all: Record<number, boolean> = {};
    MAHABALESHWAR_FAQS.forEach((_, i) => (all[i] = true));
    setExpandedFaqs(all);
  };

  const collapseAllFaqs = () => {
    setExpandedFaqs({});
  };

  return (
    <article className="min-h-screen bg-white text-gray-900 pb-20">
      {/* 01: Top Banner / Header Container */}
      <header className="mx-auto max-w-[1080px] px-4 pt-24 sm:pt-28 md:pt-32">
        {/* Visible Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/outstation" className="hover:text-primary transition-colors">Outstation Cabs</Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">Mumbai to Mahabaleshwar Cab</span>
        </nav>

        {/* H1 - Exact match per Developer Guide */}
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
          Mumbai to Mahabaleshwar Cab Booking with Book A Cab
        </h1>

        {/* Intro Paragraphs with Planned Internal Links */}
        <div className="mt-4 space-y-3 text-base text-gray-700 leading-relaxed md:text-lg">
          <p>
            Planning a trip from Mumbai to Mahabaleshwar and looking for a cab you can actually rely on. Book A Cab offers Mumbai to Mahabaleshwar cab booking for both one way and round trip journeys, with clear pricing shown upfront so you know exactly what you are paying for before you confirm your ride.
          </p>
          <p>
            Whether you are travelling with family for a weekend break, heading out for a work trip, or planning a longer holiday around Mahabaleshwar and Panchgani, this page gives you everything you need to book with confidence.
          </p>
          <p>
            Book A Cab has served thousands of passengers across Maharashtra, with a fleet of 120+ premium cabs, 24/7 availability, and a rider base of over 50,000 happy customers. On this route, our verified drivers are familiar with the Mumbai-Pune Expressway and the Mahabaleshwar ghat section, helping you travel comfortably and on time with our{" "}
            <Link href="/outstation" className="font-semibold text-primary underline underline-offset-4 hover:text-navy">
              outstation cab services
            </Link>.
          </p>
        </div>

        {/* CTA Strip 1 (Page 1) */}
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-navy via-slate-800 to-navy p-3 sm:p-4 text-white shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
            <button
              type="button"
              onClick={() => openBooking("Mumbai to Mahabaleshwar Cab")}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2.5 font-bold text-navy hover:bg-amber-400 transition-colors shadow"
            >
              <TaxiIcon className="h-4 w-4" />
              <span>BOOK NOW</span>
            </button>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-white hover:bg-white/20 transition-colors"
              >
                <PhoneIcon className="h-4 w-4 text-emerald-400" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
              <a
                href={waLink("Hi Book A Cab, I want to book a Mumbai to Mahabaleshwar cab.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-500 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp {PHONE_NUMBER}</span>
              </a>
              <button
                type="button"
                onClick={() => openBooking("Mumbai to Mahabaleshwar Cab")}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/30 px-3 py-2 text-white hover:bg-white/10 transition-colors"
              >
                <span>Book Online</span>
              </button>
            </div>
          </div>
        </div>

        {/* IMAGE 1: Hero Image (Eager Loading, <120KB WebP, 1200x600) */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
          <div className="relative aspect-[16/9] max-h-[540px] w-full overflow-hidden bg-gray-950">
            <img
              src="/images/mahabaleshwar-cab-hero-book-a-cab.webp"
              title="Mumbai to Mahabaleshwar cab by Book A Cab on the highway"
              alt="Mumbai to Mahabaleshwar cab by Book A Cab on the highway — book online with transparent fares"
              width={1200}
              height={600}
              loading="eager"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute top-4 left-4 rounded-lg bg-navy/90 backdrop-blur px-3 py-1 text-xs font-bold text-white shadow border border-white/10">
              Western Ghats Mountain Route • 263 km
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                Book A Cab Premium Outstation Fleet
              </p>
              <p className="text-lg sm:text-2xl font-bold drop-shadow">
                Comfortable Mountain Drive to Mahabaleshwar &amp; Panchgani
              </p>
            </div>
          </div>
          <figcaption className="border-t border-gray-100 bg-gray-50 p-3 text-center text-xs font-medium text-gray-600 italic">
            Mumbai to Mahabaleshwar cab by Book A Cab on the highway
          </figcaption>
        </figure>
      </header>

      {/* 02: H2 - Section 1: Fare & Pricing Details */}
      <section className="mx-auto max-w-[1080px] px-4 mt-14">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Mumbai to Mahabaleshwar Cab Fare and Pricing Details
        </h2>
        <div className="mt-3 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            One of the biggest frustrations travellers face when booking an outstation cab is not knowing the final amount until the trip is almost over. Many cab fares online show only a starting price, without mentioning toll, driver allowance, or extra charges that get added later.
          </p>
          <p>
            At Book A Cab, the Mumbai to Mahabaleshwar cab fare is shown clearly before you book, so there are no surprises at the end of your trip. Our fares are calculated transparently using a per-kilometre rate plus driver allowance — the same method we apply across all our outstation services so every customer sees the same pricing logic.
          </p>
        </div>

        {/* INTERACTIVE FARE CALCULATOR & LIVE ESTIMATOR WIDGET */}
        <div className="mt-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-slate-50 to-amber-50/40 p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-gray-200 pb-4">
            <div>
              <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-bold uppercase text-primary tracking-wider">
                Live Interactive Estimator
              </span>
              <h3 className="text-lg font-bold text-navy mt-1">
                Instant Fare Calculator: Mumbai → Mahabaleshwar
              </h3>
            </div>
            {/* Trip Type Selector */}
            <div className="inline-flex rounded-xl bg-gray-200 p-1 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setTripType("oneway")}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                  tripType === "oneway" ? "bg-navy text-white shadow" : "text-gray-700 hover:text-navy"
                }`}
              >
                One Way (263 km)
              </button>
              <button
                type="button"
                onClick={() => setTripType("roundtrip")}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                  tripType === "roundtrip" ? "bg-navy text-white shadow" : "text-gray-700 hover:text-navy"
                }`}
              >
                Round Trip (Multi-Day)
              </button>
            </div>
          </div>

          {/* Vehicle Selection Chips */}
          <div className="mt-4">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-2">
              1. Select Vehicle
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {MAHABALESHWAR_FARES.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedCabId(v.id)}
                  className={`flex flex-col items-start rounded-xl p-2.5 text-left border transition-all ${
                    selectedCabId === v.id
                      ? "border-primary bg-primary/10 shadow-sm ring-1 ring-primary"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className="text-xs font-bold text-navy line-clamp-1">{v.vehicle}</span>
                  <span className="text-[11px] text-gray-500 font-medium">₹{v.perKm}/km</span>
                  <span className="mt-1 text-[10px] font-semibold text-emerald-700">
                    {tripType === "oneway" ? `₹${v.oneWayMin}` : `₹${v.roundTripMin}`}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Pickup Zone Selection */}
          <div className="mt-4">
            <label className="text-xs font-bold uppercase tracking-wider text-gray-600 block mb-2">
              2. Pickup Location in Mumbai
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {PICKUP_LOCATIONS.slice(0, 3).map((loc, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedPickupIdx(idx)}
                  className={`rounded-xl p-2.5 text-left border text-xs transition-all ${
                    selectedPickupIdx === idx
                      ? "border-navy bg-navy text-white shadow"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <p className="font-bold">{loc.area}</p>
                  <p className={`text-[11px] truncate ${selectedPickupIdx === idx ? "text-gray-200" : "text-gray-500"}`}>
                    {loc.subtitle}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Calculated Output Breakdown Card */}
          <div className="mt-5 rounded-xl bg-white border border-gray-200 p-4 sm:p-5 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-extrabold text-navy">{currentVehicle.vehicle}</span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                    {tripType === "oneway" ? "One Way Package" : "Round Trip Package"}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  {currentVehicle.seats} • {currentVehicle.luggage} • {currentVehicle.idealFor}
                </p>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="rounded-lg bg-gray-50 p-2">
                    <p className="text-gray-500">Per-km Rate</p>
                    <p className="font-bold text-navy">₹{currentVehicle.perKm} / km</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2">
                    <p className="text-gray-500">Fuel &amp; AC</p>
                    <p className="font-bold text-emerald-700">100% Included</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2">
                    <p className="text-gray-500">Driver Allowance</p>
                    <p className="font-bold text-emerald-700">Included</p>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2">
                    <p className="text-gray-500">Expressway Tolls</p>
                    <p className="font-bold text-gray-700">₹300 – ₹500 at actuals</p>
                  </div>
                </div>
              </div>

              {/* Total Price and Booking Action */}
              <div className="flex flex-col items-start lg:items-end justify-center border-t lg:border-t-0 lg:border-l border-gray-200 pt-3 lg:pt-0 lg:pl-6 shrink-0">
                <span className="text-xs text-gray-500 font-medium">Estimated Indicative Fare</span>
                <span className="text-2xl sm:text-3xl font-black text-navy">
                  ₹{tripType === "oneway" ? `${currentVehicle.oneWayMin.toLocaleString()} – ₹${currentVehicle.oneWayMax.toLocaleString()}` : `${currentVehicle.roundTripMin.toLocaleString()} – ₹${currentVehicle.roundTripMax.toLocaleString()}`}
                </span>
                <span className="text-[11px] text-gray-500">No hidden surges. Tolls at actuals with receipts.</span>
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => openBooking(`Mumbai to Mahabaleshwar - ${currentVehicle.vehicle} (${tripType === "oneway" ? "One Way" : "Round Trip"})`)}
                    className="rounded-xl bg-navy px-4 py-2.5 text-xs font-bold text-white shadow hover:bg-navy/90 transition-all"
                  >
                    Book This Cab
                  </button>
                  <a
                    href={waLink(`Hi Book A Cab, please quote Mumbai to Mahabaleshwar cab for ${currentVehicle.vehicle} (${tripType === "oneway" ? "One Way" : "Round Trip"}) from ${PICKUP_LOCATIONS[selectedPickupIdx].area}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-emerald-600 px-3.5 py-2.5 text-xs font-bold text-white shadow hover:bg-emerald-500 transition-all flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FARE TABLE VISUAL & RESPONSIVE HTML TABLE */}
        <div className="mt-10">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="font-display text-lg sm:text-xl font-bold text-navy">
              Mumbai to Mahabaleshwar Cab Fare Chart (Vehicle Breakdown)
            </h3>
            <span className="text-xs text-gray-500 hidden sm:inline">Scroll horizontally if viewing on mobile →</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-navy text-white text-xs uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-4 py-3.5">Vehicle Type</th>
                  <th scope="col" className="px-4 py-3.5">One Way Fare (Indicative)</th>
                  <th scope="col" className="px-4 py-3.5">Round Trip Fare (Indicative)</th>
                  <th scope="col" className="px-4 py-3.5">Ideal For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="hover:bg-slate-50/80">
                  <td className="px-4 py-3.5 font-bold text-navy">
                    Swift Dzire <span className="block text-xs font-normal text-gray-500">Hatchback / Sedan, AC</span>
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-primary">₹4,200 – ₹4,800</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">₹5,900 – ₹6,800</td>
                  <td className="px-4 py-3.5 text-gray-600">Solo travellers, couples, 2-3 passengers with light luggage</td>
                </tr>
                <tr className="bg-gray-50/50 hover:bg-slate-50/80">
                  <td className="px-4 py-3.5 font-bold text-navy">
                    Toyota Etios <span className="block text-xs font-normal text-gray-500">Hatchback / Sedan, AC</span>
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-primary">₹4,300 – ₹4,900</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">₹6,000 – ₹6,900</td>
                  <td className="px-4 py-3.5 text-gray-600">Small families, 4 passengers, budget-conscious trips</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="px-4 py-3.5 font-bold text-navy">
                    Ertiga <span className="block text-xs font-normal text-gray-500">SUV, AC</span>
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-primary">₹4,700 – ₹5,400</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">₹6,600 – ₹7,600</td>
                  <td className="px-4 py-3.5 text-gray-600">Families of 4-6, extra luggage space needed</td>
                </tr>
                <tr className="bg-gray-50/50 hover:bg-slate-50/80">
                  <td className="px-4 py-3.5 font-bold text-navy">
                    Kia Carens <span className="block text-xs font-normal text-gray-500">SUV, AC</span>
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-primary">₹5,500 – ₹6,300</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">₹7,800 – ₹8,800</td>
                  <td className="px-4 py-3.5 text-gray-600">Families, 6 passengers, comfortable long drive</td>
                </tr>
                <tr className="bg-blue-50/40 hover:bg-blue-50/70 border-l-4 border-l-primary">
                  <td className="px-4 py-3.5 font-bold text-navy">
                    Innova Crysta <span className="block text-xs font-semibold text-primary">SUV, AC, 6+1 (Most Popular)</span>
                  </td>
                  <td className="px-4 py-3.5 font-bold text-primary">₹6,500 – ₹7,500</td>
                  <td className="px-4 py-3.5 font-bold text-emerald-700">₹9,100 – ₹10,400</td>
                  <td className="px-4 py-3.5 text-gray-700 font-medium">Families &amp; small groups, premium comfort, 5 bags luggage</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="px-4 py-3.5 font-bold text-navy">
                    Scorpio <span className="block text-xs font-normal text-gray-500">SUV, AC</span>
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-primary">₹7,200 – ₹8,000</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">₹10,100 – ₹11,300</td>
                  <td className="px-4 py-3.5 text-gray-600">Groups of 6-7, rugged SUV comfort</td>
                </tr>
                <tr className="bg-gray-50/50 hover:bg-slate-50/80">
                  <td className="px-4 py-3.5 font-bold text-navy">
                    Tempo Traveller AC <span className="block text-xs font-normal text-gray-500">12 Seater Luxury Van</span>
                  </td>
                  <td className="px-4 py-3.5 font-semibold text-primary">₹9,600 – ₹11,000</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">₹13,400 – ₹15,000</td>
                  <td className="px-4 py-3.5 text-gray-600">Group travel, 10-12 passengers, events, family reunions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-3 rounded-lg bg-amber-50/80 border border-amber-200/60 p-3 text-xs text-gray-700 space-y-1">
            <p><strong>Fares are indicative.</strong> Actual fare can vary slightly based on the exact pickup point in Mumbai, the date of travel, and vehicle availability.</p>
            <p>A minimum kilometres charge (typically 300 km for outstation trips) applies. Final fare is confirmed at the time of booking.</p>
          </div>
        </div>

        {/* CTA Strip 2 (Page 2) */}
        <div className="mt-6 rounded-xl bg-slate-900 p-4 text-white shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold uppercase tracking-wider text-amber-400">GET YOUR EXACT FARE</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href={`tel:${PHONE_TEL}`} className="underline hover:text-amber-300">
                Call for Fare: {PHONE_NUMBER}
              </a>
              <span>•</span>
              <a
                href={waLink("Hi Book A Cab, please share exact fare quote for Mumbai to Mahabaleshwar cab.")}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-emerald-400"
              >
                WhatsApp for Quote: {PHONE_NUMBER}
              </a>
              <span>•</span>
              <button
                type="button"
                onClick={() => openBooking("Mumbai to Mahabaleshwar Cab")}
                className="rounded-lg bg-primary px-3 py-1.5 font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                Check Online Fare on bookacab.co.in
              </button>
            </div>
          </div>
        </div>

        {/* 03: H3 - Sub-section 1: What's Included in the Fare */}
        <div className="mt-12">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-navy">
            What's Included in the Fare
          </h3>
          <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed">
            When you book a Mumbai to Mahabaleshwar cab with us, the quoted fare includes the following, so you always know what you are paying for.
          </p>

          {/* Inclusions Filter Tabs */}
          <div className="mt-4 flex items-center gap-2 border-b border-gray-200 pb-2">
            <button
              type="button"
              onClick={() => setIncFilter("all")}
              className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                incFilter === "all" ? "bg-navy text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Items ({FARE_INCLUSIONS_EXCLUSIONS.length})
            </button>
            <button
              type="button"
              onClick={() => setIncFilter("included")}
              className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                incFilter === "included" ? "bg-emerald-700 text-white" : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
              }`}
            >
              ✓ Included in Fare
            </button>
            <button
              type="button"
              onClick={() => setIncFilter("separate")}
              className={`rounded-lg px-3 py-1 text-xs font-semibold ${
                incFilter === "separate" ? "bg-amber-700 text-white" : "bg-amber-50 text-amber-800 hover:bg-amber-100"
              }`}
            >
              + Charged Separately at Actuals
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FARE_INCLUSIONS_EXCLUSIONS.filter(
              (item) => incFilter === "all" || item.category === incFilter
            ).map((item) => (
              <div
                key={item.id}
                onClick={() => setExpandedIncId(expandedIncId === item.id ? null : item.id)}
                className={`cursor-pointer rounded-xl border p-4 transition-all ${
                  item.category === "included"
                    ? "border-emerald-200/80 bg-emerald-50/40 hover:bg-emerald-50"
                    : "border-amber-200/80 bg-amber-50/40 hover:bg-amber-50"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                        item.category === "included"
                          ? "bg-emerald-600 text-white"
                          : "bg-amber-600 text-white"
                      }`}
                    >
                      {item.category === "included" ? "✓" : "+"}
                    </span>
                    <span className="font-bold text-sm text-navy">{item.title}</span>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      item.category === "included"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-gray-500 italic">
            The following, if applicable, are charged separately and will be communicated to you clearly at the time of booking, not added silently later: toll charges (₹300–₹500 one way), parking at actuals, Mahabaleshwar entry/pollution fee (~₹30/car + ₹20/person), and waiting charges if delayed.
          </div>
        </div>

        {/* 04: H3 - Sub-section 2: One Way vs Round Trip, Which Should You Choose */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-5 sm:p-7 shadow-sm">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-navy">
            One Way vs Round Trip, Which Should You Choose
          </h3>
          <div className="mt-3 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              If you are travelling to Mahabaleshwar and returning to Mumbai on a different date, or not returning at all, a one way cab usually works out more practical since you are not paying for the vehicle's return journey when it is not needed.
            </p>
            <p>
              A round trip cab makes more sense if you plan to explore Mahabaleshwar,{" "}
              <Link href="/packages" className="font-semibold text-primary underline hover:text-navy">
                Mumbai to Panchgani cab
              </Link>
              , or nearby{" "}
              <Link href="/packages" className="font-semibold text-primary underline hover:text-navy">
                Mumbai to Pratapgad cab
              </Link>{" "}
              places over a few days and want the same vehicle and driver available throughout your stay. For round trip bookings, the return fare is typically charged at 1.4x to 1.5x of the one-way fare, rather than double, since the vehicle and driver return to Mumbai but without a new passenger. A minimum kilometre charge applies to the return leg as well.
            </p>
          </div>

          {/* Interactive Decision Helper */}
          <div className="mt-6 rounded-xl bg-slate-50 border border-slate-200 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-navy">
                  Compare Your Trip Economics:
                </p>
                <p className="text-sm font-semibold text-gray-800">
                  How many days do you plan to stay in Mahabaleshwar?
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setCompareStayDays(d)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                      compareStayDays === d
                        ? "bg-navy text-white shadow"
                        : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {d} {d === 1 ? "Day" : "Days"}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-gray-200">
              <div className="rounded-lg bg-white p-3 border border-gray-200">
                <span className="text-xs font-bold text-primary uppercase">Option A: Two Separate One-Way Cabs</span>
                <p className="text-xs text-gray-600 mt-1">
                  Book Mumbai → Mahabaleshwar now (₹4,200), and a separate cab on checkout.
                </p>
                <p className="text-xs font-semibold text-navy mt-2">
                  Best when: You stay {compareStayDays}+ days and only need hotel transfers without local sightseeing.
                </p>
              </div>
              <div className="rounded-lg bg-white p-3 border border-emerald-300 bg-emerald-50/30">
                <span className="text-xs font-bold text-emerald-800 uppercase">Option B: Round Trip with Retained Cab</span>
                <p className="text-xs text-gray-600 mt-1">
                  Same cab stays with you throughout your {compareStayDays}-day holiday for Arthur's Seat, Venna Lake &amp; Panchgani.
                </p>
                <p className="text-xs font-semibold text-emerald-800 mt-2">
                  Best when: You want hassle-free local sightseeing without dealing with local taxi unions at points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05: H2 - Section 2: Vehicle Options for Your Trip */}
      <section className="mx-auto max-w-[1080px] px-4 mt-14">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Vehicle Options for Your Mumbai to Mahabaleshwar Trip
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          Choosing the right vehicle depends on how many people are travelling and how much luggage you are carrying. Here are the vehicle options available for this route.
        </p>

        {/* IMAGE 3: Vehicle Fleet Visual (<100KB WebP) */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="/images/mumbai-mahabaleshwar-cab-vehicle-options.webp"
            title="Sedan and SUV options for Mumbai to Mahabaleshwar cab booking"
            alt="Sedan and SUV options for Mumbai to Mahabaleshwar cab booking with Book A Cab"
            width={900}
            height={500}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <figcaption className="p-3 text-center text-xs font-medium text-gray-600 italic">
            Sedan and SUV options for Mumbai to Mahabaleshwar cab booking
          </figcaption>
        </figure>

        {/* Vehicle Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setVehicleFilter("all")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                vehicleFilter === "all" ? "bg-navy text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Cabs ({MAHABALESHWAR_FARES.length})
            </button>
            <button
              type="button"
              onClick={() => setVehicleFilter("sedan")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                vehicleFilter === "sedan" ? "bg-navy text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Sedans (Dzire, Etios)
            </button>
            <button
              type="button"
              onClick={() => setVehicleFilter("suv")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                vehicleFilter === "suv" ? "bg-navy text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              SUVs (Ertiga, Crysta, Carens, Scorpio)
            </button>
            <button
              type="button"
              onClick={() => setVehicleFilter("van")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all ${
                vehicleFilter === "van" ? "bg-navy text-white shadow" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Van / Group (Tempo Traveller)
            </button>
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredVehicles.map((car) => (
            <div
              key={car.id}
              className={`rounded-2xl border p-5 transition-all flex flex-col justify-between ${
                car.popular
                  ? "border-primary bg-gradient-to-br from-white via-blue-50/30 to-white shadow-md ring-1 ring-primary/30"
                  : "border-gray-200 bg-white shadow-sm hover:shadow"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">{car.vehicle}</h3>
                    <p className="text-xs text-gray-500">{car.type}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500 block">Starting From</span>
                    <span className="text-lg font-black text-primary">₹{car.oneWayMin.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-md bg-gray-100 px-2 py-1 text-gray-700 font-medium">
                    👥 {car.seats}
                  </span>
                  <span className="rounded-md bg-gray-100 px-2 py-1 text-gray-700 font-medium">
                    🧳 {car.luggage}
                  </span>
                  <span className="rounded-md bg-emerald-50 text-emerald-800 font-bold px-2 py-1">
                    ₹{car.perKm} / km
                  </span>
                </div>

                <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                  <strong>Ideal for:</strong> {car.idealFor}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {car.features.map((feat, i) => (
                    <span key={i} className="inline-flex items-center gap-1 text-[11px] text-gray-600">
                      <CheckIcon className="h-3 w-3 text-emerald-600" />
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                <span className="text-xs text-gray-500">
                  Round trip: <strong>₹{car.roundTripMin.toLocaleString()}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => openBooking(`Mumbai to Mahabaleshwar - ${car.vehicle}`)}
                  className="rounded-xl bg-navy px-3.5 py-1.5 text-xs font-bold text-white shadow hover:bg-navy/90 transition-all"
                >
                  Book {car.vehicle}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-600 leading-relaxed">
          All vehicles listed above are AC, well-maintained, and regularly serviced. Every vehicle undergoes quality checks before outstation assignments. If you are travelling in a larger group, a Tempo Traveller or a similar bigger vehicle may be a better fit than booking two separate cars. Tempo Travellers (AC and Non-AC, 12-seater) and Mini Bus (32-seater) are available for this route.
        </p>

        {/* CTA Strip 3 (Page 4) */}
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50/50 p-4 text-xs sm:text-sm text-gray-800">
          <p className="font-bold text-red-900">Still deciding on the right vehicle?</p>
          <p className="mt-1">
            <Link href="/fleet" className="font-bold text-primary underline hover:text-navy">
              View our full fleet
            </Link>{" "}
            ·{" "}
            <a
              href={waLink("Hi Book A Cab, I need help deciding the right cab for my family trip to Mahabaleshwar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-800 underline hover:text-emerald-900"
            >
              WhatsApp for Help
            </a>{" "}
            ·{" "}
            <a href={`tel:${PHONE_TEL}`} className="font-bold text-navy underline hover:text-primary">
              Call {PHONE_NUMBER}
            </a>
          </p>
          <p className="mt-1 text-xs text-gray-600">Tell us your group size &amp; luggage — we'll suggest the best fit.</p>
        </div>
      </section>

      {/* 06: H2 - Section 3: Distance, Route and Travel Time */}
      <section className="mx-auto max-w-[1080px] px-4 mt-14">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Mumbai to Mahabaleshwar Distance, Route and Travel Time
        </h2>
        <div className="mt-3 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            The distance between Mumbai and Mahabaleshwar is approximately 263 kilometres, and the journey usually takes around 5 to 6 hours by road, depending on traffic and the route taken.
          </p>
          <p>
            Most cabs take the Mumbai-Pune Expressway before moving towards Wai and Poladpur, eventually climbing into the Mahabaleshwar hill section. This route is generally smoother than older highway alternatives, though travel time can increase during monsoon season or on weekends when traffic on the expressway and Ghat sections is heavier.
          </p>
        </div>

        {/* IMAGE 4: Route / Map Visual (<80KB WebP) */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="/images/mumbai-to-mahabaleshwar-cab-route-map.webp"
            title="Mumbai to Mahabaleshwar cab route via Pune expressway"
            alt="Mumbai to Mahabaleshwar cab route via Pune expressway — 263 km, 5–6 hours"
            width={800}
            height={450}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <figcaption className="p-3 text-center text-xs font-medium text-gray-600 italic">
            Mumbai to Mahabaleshwar cab route via Pune expressway
          </figcaption>
        </figure>

        {/* INTERACTIVE ROUTE MILESTONE TIMELINE */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-slate-50 p-5 sm:p-6 shadow-sm">
          <h3 className="text-lg font-bold text-navy mb-3">
            Interactive Journey Timeline (Mumbai → Mahabaleshwar)
          </h3>
          <p className="text-xs text-gray-600 mb-5">
            Click any milestone along the 263 km drive to check altitude, travel duration, and driver advice:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {ROUTE_MILESTONES.map((m, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveMilestoneIdx(idx)}
                className={`flex flex-col items-start rounded-xl p-3 text-left border transition-all ${
                  activeMilestoneIdx === idx
                    ? "border-navy bg-navy text-white shadow"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className={`text-[11px] font-bold ${activeMilestoneIdx === idx ? "text-amber-400" : "text-primary"}`}>
                  {m.distanceFromMumbai}
                </span>
                <span className="mt-1 text-xs font-bold line-clamp-1">{m.title}</span>
                <span className={`text-[10px] mt-0.5 ${activeMilestoneIdx === idx ? "text-gray-300" : "text-gray-500"}`}>
                  Alt: {m.altitude}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 rounded-xl bg-white p-4 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-2">
              <span className="font-bold text-navy text-sm sm:text-base">
                {ROUTE_MILESTONES[activeMilestoneIdx].title}
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Approx Duration: {ROUTE_MILESTONES[activeMilestoneIdx].approxDuration}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
              {ROUTE_MILESTONES[activeMilestoneIdx].description}
            </p>
            <div className="mt-3 rounded-lg bg-amber-50 p-2.5 text-xs text-amber-900 border border-amber-200/60">
              💡 <strong>Travel Tip:</strong> {ROUTE_MILESTONES[activeMilestoneIdx].recommendation}
            </div>
          </div>
        </div>

        {/* 07: H3 - Sub-section 3: Best Time to Start Your Journey */}
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
          <h3 className="font-display text-xl font-bold text-navy">
            Best Time to Start Your Journey
          </h3>
          <div className="mt-2 space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              Starting early in the morning, ideally before 6 or 7 AM, helps you avoid heavy traffic near Mumbai and Pune, and also means you reach Mahabaleshwar with enough daylight left to settle in or start sightseeing.
            </p>
            <p>
              During monsoon months, the Ghat section near Mahabaleshwar can have reduced visibility and slower moving traffic, so keeping some extra buffer time in your plan is a sensible approach.
            </p>
          </div>
        </div>
      </section>

      {/* 08: H2 - Section 4: Why Book Your Mumbai to Mahabaleshwar Cab with Book A Cab */}
      <section className="mx-auto max-w-[1080px] px-4 mt-14">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Why Book Your Mumbai to Mahabaleshwar Cab with Book A Cab
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          There are several cab options available for this route, from large travel platforms to local operators. Here is what actually matters when choosing between them, and what you can expect from us.
        </p>

        {/* IMAGE 5: Why Choose Us / Trust Visual (<90KB WebP) */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="/images/book-a-cab-outstation-service.webp"
            title="Book A Cab cab for outstation Mumbai to Mahabaleshwar trip"
            alt="Book A Cab cab for outstation Mumbai to Mahabaleshwar trip — verified drivers & transparent fares"
            width={800}
            height={450}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <figcaption className="p-3 text-center text-xs font-medium text-gray-600 italic">
            Book A Cab cab for outstation Mumbai to Mahabaleshwar trip
          </figcaption>
        </figure>

        {/* USP Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
            <p className="font-bold text-sm text-navy">🛡️ Verified drivers</p>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              All our drivers are background-checked and trained before they are assigned to any trip. You get a verified professional, not just anyone with a car.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
            <p className="font-bold text-sm text-navy">💰 Transparent pricing</p>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Fares are shown upfront per kilometre with driver allowance included — no hidden charges, no surprise additions at the end of the trip. If toll, parking, or entry fees apply, they are communicated clearly at booking.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
            <p className="font-bold text-sm text-navy">📍 GPS tracking</p>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Real-time GPS tracking is available for your trip, so you and your family can have peace of mind about the journey.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
            <p className="font-bold text-sm text-navy">🕒 24/7 availability</p>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Bookings and support are available around the clock — whether you are travelling early morning, late night, or on a holiday.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
            <p className="font-bold text-sm text-navy">✨ Well-maintained fleet</p>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Every vehicle in our fleet of 120+ cabs undergoes regular maintenance and quality checks. Vehicles are deep cleaned before every ride.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-4 bg-white shadow-sm">
            <p className="font-bold text-sm text-navy">🤝 360-degree support</p>
            <p className="mt-1 text-xs text-gray-600 leading-relaxed">
              Our team handles everything from booking confirmation to driver and vehicle details being shared with you before your pickup date. If anything changes, you have a real contact to reach.
            </p>
          </div>
        </div>

        {/* Real Experience Review Signal */}
        <div className="mt-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 p-4 sm:p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-900">Proven On This Route • Customer Review</p>
          <blockquote className="mt-2 text-sm italic text-gray-800">
            &ldquo;Excellent cab service. As a tourist, I felt very safe and comfortable. Driver was professional and helpful. Highly recommended.&rdquo;
          </blockquote>
          <p className="mt-1 text-xs font-bold text-navy">— Suresh Jadhav, Mumbai to Mahabaleshwar Passenger</p>
          <p className="mt-3 text-xs text-gray-600">
            We would rather tell you exactly what we do than use generic words like reliable or trusted without backing them up. Every claim above reflects what our operations actually look like day to day.
          </p>
        </div>
      </section>

      {/* 09: H2 - Section 5: How to Book Your Cab */}
      <section className="mx-auto max-w-[1080px] px-4 mt-14">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          How to Book Your Cab
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          Booking a Mumbai to Mahabaleshwar cab with Book A Cab is meant to be simple. Here is how the process works.
        </p>

        {/* IMAGE 6: Booking Process Visual (<80KB WebP) */}
        <figure className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <img
            src="/images/steps-to-book-mahabaleshwar-cab.webp"
            title="Steps to book Mumbai to Mahabaleshwar cab online"
            alt="4 steps to book Mumbai to Mahabaleshwar cab online with Book A Cab"
            width={800}
            height={350}
            loading="lazy"
            className="h-auto w-full object-cover"
          />
          <figcaption className="p-3 text-center text-xs font-medium text-gray-600 italic">
            Steps to book Mumbai to Mahabaleshwar cab online
          </figcaption>
        </figure>

        {/* Interactive 4 Steps Accordion */}
        <div className="mt-6 space-y-3">
          {[
            {
              step: 1,
              title: "Choose your cab and share trip details",
              desc: "Visit our booking form on the website, select your preferred vehicle from the fleet, and fill in your pickup location, drop location (Mahabaleshwar), travel date, and number of passengers. Alternatively, you can call us or send a WhatsApp message with the same details.",
            },
            {
              step: 2,
              title: "Receive your fare quote",
              desc: "Our team will confirm the fare for your selected vehicle based on the distance, trip type (one way or round trip), and date of travel. The fare breakdown, including what is included and what may be charged separately, is shared with you at this step.",
            },
            {
              step: 3,
              title: "Confirm and make payment",
              desc: "Once you agree to the fare, a booking confirmation is initiated. An advance payment (typically 20–30% of the total fare) via UPI, bank transfer, or online payment secures your booking. The balance is paid to the driver on the day of the trip. Full payment in advance is also accepted.",
            },
            {
              step: 4,
              title: "Receive driver and vehicle details",
              desc: "Once your booking is confirmed, you will receive your driver's name, contact number, vehicle type, and vehicle number before your pickup date — so you know exactly who and what to expect at pickup.",
            },
          ].map((s) => (
            <div
              key={s.step}
              onClick={() => setActiveBookingStep(s.step)}
              className={`cursor-pointer rounded-xl border p-4 transition-all ${
                activeBookingStep === s.step
                  ? "border-primary bg-primary/5 shadow-sm ring-1 ring-primary/20"
                  : "border-gray-200 bg-white hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    activeBookingStep === s.step ? "bg-primary text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {s.step}
                </span>
                <span className="font-bold text-sm text-navy">{s.title}</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed pl-10">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-gray-600">
          You can also reach us directly for custom requirements — group bookings, specific vehicle preferences, or multi-stop itineraries around Mahabaleshwar and Panchgani.{" "}
          <Link href="/contact" className="font-bold text-primary underline hover:text-navy">
            Contact us to book
          </Link>.
        </p>

        {/* CTA Strip 4 (Page 6) */}
        <div className="mt-6 rounded-xl bg-gradient-to-r from-emerald-800 to-navy p-4 text-white shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm font-semibold">
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span className="font-bold uppercase tracking-wider text-amber-400">CONFIRM YOUR BOOKING</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openBooking("Mumbai to Mahabaleshwar Cab")}
                className="underline hover:text-amber-300"
              >
                Use Booking Form at bookacab.co.in
              </button>
              <span>•</span>
              <a
                href={waLink("Hi Book A Cab, I want to confirm my Mumbai to Mahabaleshwar cab.")}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-emerald-300"
              >
                WhatsApp to Confirm: {PHONE_NUMBER}
              </a>
              <span>•</span>
              <a href={`tel:${PHONE_TEL}`} className="underline hover:text-amber-300">
                Call to Book: {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10: H2 - Section 6: Mumbai Pickup Locations We Serve */}
      <section className="mx-auto max-w-[1080px] px-4 mt-14">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Mumbai Pickup Locations We Serve
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          We understand that Mumbai is spread across several suburbs, and knowing whether pickup is available near you matters before you book. Book A Cab arranges Mumbai to Mahabaleshwar cab pickup from the following areas.
        </p>

        {/* Interactive Pickup Directory Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {PICKUP_LOCATIONS.map((loc, idx) => (
            <div key={idx} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-2">
                <h3 className="font-bold text-sm text-navy">{loc.area}</h3>
                <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                  Doorstep Pickup
                </span>
              </div>
              <p className="mt-1.5 text-xs text-primary font-medium">{loc.subtitle}</p>
              <ul className="mt-2 space-y-1 text-xs text-gray-600">
                {loc.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-emerald-600">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 rounded bg-slate-50 p-2 text-[11px] text-gray-500">
                ⏱️ <strong>Pickup Timing:</strong> {loc.bufferTime}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11: H2 - Section 7: Cancellation, Rescheduling and Booking Policies */}
      <section className="mx-auto max-w-[1080px] px-4 mt-14">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Cancellation, Rescheduling and Booking Policies
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          Plans change, and it helps to know where you stand before you book. Here is our policy for cancellations and rescheduling.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800">
              Free 24h+ Cancellation
            </span>
            <h3 className="mt-3 font-bold text-base text-navy">Cancellation Policy</h3>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              Free cancellation with full refund if you cancel at least 24 hours before your scheduled pickup time. If you cancel within 24 hours of pickup, 50% of the confirmed fare (or the advance amount, whichever is higher) is charged. Cancellations on the day of travel or no-shows are charged at the full confirmed fare.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold text-blue-800">
              Easy Date Shift
            </span>
            <h3 className="mt-3 font-bold text-base text-navy">Rescheduling Policy</h3>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              Rescheduling to a different date is allowed with at least 24 hours notice, subject to vehicle availability on the new date. A rescheduling request within 24 hours of pickup may incur a rescheduling charge.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">
              20% – 30% Advance
            </span>
            <h3 className="mt-3 font-bold text-base text-navy">Advance Payment Policy</h3>
            <p className="mt-2 text-xs text-gray-600 leading-relaxed">
              An advance payment of 20–30% of the total fare is required to confirm your booking. This advance is adjustable against the final fare. If the booking is cancelled within the free cancellation window, the advance is refunded in full. After that window, the applicable cancellation charge is deducted from the advance refund.
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-gray-500 italic">
          We keep this policy visible upfront so you are not caught off guard if your travel dates shift. Read our full{" "}
          <Link href="/terms-conditions" className="font-bold text-primary underline hover:text-navy">
            terms and cancellation policy
          </Link>.
        </p>
      </section>

      {/* 12: H2 - Section 8: Frequently Asked Questions (12 FAQs Exact Match) */}
      <section className="mx-auto max-w-[1080px] px-4 mt-14">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-gray-200 pb-4">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Showing {filteredFaqs.length} of {MAHABALESHWAR_FAQS.length} answers
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={expandAllFaqs}
              className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-200"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={collapseAllFaqs}
              className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-200"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <input
            type="text"
            placeholder="Search questions (e.g., toll, airport, cancellation, tempo traveller)..."
            value={faqQuery}
            onChange={(e) => setFaqQuery(e.target.value)}
            className="rounded-xl border border-gray-300 px-3.5 py-2 text-xs sm:text-sm focus:border-primary focus:outline-none flex-1"
          />
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: "all", label: "All" },
              { id: "pricing", label: "Pricing & Tolls" },
              { id: "routes", label: "Route & Timing" },
              { id: "vehicles", label: "Fleet & Bags" },
              { id: "policies", label: "Policies" },
            ].map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setFaqCategory(c.id as any)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                  faqCategory === c.id
                    ? "bg-navy text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-6 space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isExpanded = expandedFaqs[idx] ?? false;
            return (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 bg-white transition-all overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left hover:bg-gray-50/80 transition-colors"
                  aria-expanded={isExpanded}
                >
                  <h3 className="font-bold text-sm sm:text-base text-navy">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="border-t border-gray-100 bg-slate-50/50 p-4 pt-3">
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 13: H2 - Section 9: Contact Us */}
      <section className="mx-auto max-w-[1080px] px-4 mt-14">
        <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
          Contact Us
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
          Have a question about your Mumbai to Mahabaleshwar cab booking, need a custom quote, or want to discuss a group itinerary? Reach out to Book A Cab through any of the channels below — our team is available 24/7.
        </p>

        {/* Contact Table Form */}
        <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-navy text-white text-xs uppercase tracking-wider">
              <tr>
                <th scope="col" className="px-4 py-3">Channel</th>
                <th scope="col" className="px-4 py-3">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="px-4 py-3.5 font-bold text-navy whitespace-nowrap">
                  <span className="flex items-center gap-1.5">
                    <PhoneIcon className="h-4 w-4 text-primary" />
                    <span>Phone / Call Now</span>
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <a href={`tel:${PHONE_TEL}`} className="font-bold text-primary hover:underline">
                    {PHONE_NUMBER}
                  </a>
                  <span className="ml-2 text-xs text-emerald-700 font-medium">(Available 24/7)</span>
                </td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3.5 font-bold text-navy whitespace-nowrap">
                  <span className="flex items-center gap-1.5">
                    <WhatsAppIcon className="h-4 w-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <a
                    href={waLink("Hi Book A Cab, I want to inquire about Mumbai to Mahabaleshwar cab.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-700 hover:underline"
                  >
                    {PHONE_NUMBER}
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Send your pickup location, drop location, travel date, and vehicle preference for a quick response
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 font-bold text-navy whitespace-nowrap">Email</td>
                <td className="px-4 py-3.5">
                  <a href="mailto:bookings@bookacab.co.in" className="text-gray-800 hover:underline">
                    bookings@bookacab.co.in
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="px-4 py-3.5 font-bold text-navy whitespace-nowrap">Website Booking Form</td>
                <td className="px-4 py-3.5">
                  <button
                    type="button"
                    onClick={() => openBooking("Mumbai to Mahabaleshwar Cab")}
                    className="font-bold text-primary underline hover:text-navy"
                  >
                    Use the booking form on bookacab.co.in
                  </button>
                  <span className="text-gray-600 ml-1">to select your cab and submit your trip details</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3.5 font-bold text-navy whitespace-nowrap">Address</td>
                <td className="px-4 py-3.5 text-gray-700">Near Airport, Mumbai, Maharashtra, India</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-gray-500 italic">
          For urgent pickup changes, same-day re-scheduling, or any issue on the day of travel, calling or WhatsApp is the fastest way to reach us.
        </p>

        {/* CTA Strip 5 (Page 10) */}
        <div className="mt-6 rounded-xl bg-navy p-4 text-white shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span>✋</span>
              <span className="font-bold uppercase tracking-wider text-amber-400">GET IN TOUCH &amp; BOOK</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waLink("Hi Book A Cab, I want to book a Mumbai to Mahabaleshwar cab.")}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-emerald-400"
              >
                WhatsApp: {PHONE_NUMBER}
              </a>
              <span>•</span>
              <a href={`tel:${PHONE_TEL}`} className="underline hover:text-amber-300">
                Call: {PHONE_NUMBER}
              </a>
              <span>•</span>
              <button
                type="button"
                onClick={() => openBooking("Mumbai to Mahabaleshwar Cab")}
                className="rounded-lg bg-emerald-600 px-3 py-1 font-semibold text-white hover:bg-emerald-500 transition-colors"
              >
                Book Online Now at bookacab.co.in
              </button>
            </div>
          </div>
        </div>

        {/* Final CTA Box (Page 10) */}
        <div className="mt-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-r from-amber-50 to-orange-50/50 p-6 text-center shadow-sm">
          <h3 className="font-display text-xl sm:text-2xl font-black text-navy">
            Ready to Book Your Mumbai to Mahabaleshwar Cab?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Prefer to discuss your trip first? Send your travel date, number of passengers, and any special requirements via WhatsApp — our team will share your exact fare and vehicle options within minutes.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold">
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-xl bg-navy px-5 py-2.5 text-white shadow hover:bg-navy/90 transition-all"
            >
              Call Now to Book
            </a>
            <a
              href={waLink("Hi Book A Cab, I would like to book a cab from Mumbai to Mahabaleshwar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-600 px-5 py-2.5 text-white shadow hover:bg-emerald-500 transition-all flex items-center gap-1.5"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>WhatsApp to Book</span>
            </a>
            <button
              type="button"
              onClick={() => openBooking("Mumbai to Mahabaleshwar Cab")}
              className="rounded-xl border border-navy/30 bg-white px-5 py-2.5 text-navy shadow hover:bg-gray-50 transition-all"
            >
              Book Online
            </button>
          </div>
          <p className="mt-4 text-[11px] text-gray-500">
            Powered by{" "}
            <Link href="/" className="font-bold text-navy hover:underline">
              Book A Cab
            </Link>{" "}
            • 24/7 Outstation Cab Services Across Maharashtra
          </p>
        </div>
      </section>
    </article>
  );
}
