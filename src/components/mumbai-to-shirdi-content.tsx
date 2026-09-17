"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  TaxiIcon,
  UsersIcon,
  LuggageIcon,
  ClockIcon,
  ShieldIcon,
  StarIcon,
  RouteIcon,
  PinIcon,
  TagIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { useBooking } from "@/lib/booking-context";
import {
  SHIRDI_FARES,
  SHIRDI_INCLUSIONS_EXCLUSIONS,
  SHIRDI_ROUTE_MILESTONES,
  SHIRDI_TESTIMONIALS,
  SHIRDI_PICKUP_HUBS,
  SHIRDI_FAQS,
  ShirdiFareItem,
} from "@/lib/mumbai-to-shirdi";

const PHONE_NUMBER = "+91-8856904131";
const PHONE_TEL = "+918856904131";
const WHATSAPP_NUMBER = "918856904131";

function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function MumbaiToShirdiContent() {
  const { openBooking } = useBooking();

  // 1. Interactive Fare Estimator State
  const [tripType, setTripType] = useState<"oneway" | "roundtrip">("oneway");
  const [selectedCabId, setSelectedCabId] = useState<string>("suv");
  const [selectedHubIdx, setSelectedHubIdx] = useState<number>(0);
  const [includeShaniShingnapur, setIncludeShaniShingnapur] = useState<boolean>(false);
  const [includeTrimbakeshwar, setIncludeTrimbakeshwar] = useState<boolean>(false);

  // 2. Inclusions / Exclusions Filter State
  const [incFilter, setIncFilter] = useState<"all" | "included" | "separate">("all");

  // 3. Vehicle Showcase Selection
  const [showcaseVehicleId, setShowcaseVehicleId] = useState<string>("innova-crysta");

  // 4. Route Milestone Timeline State
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState<number>(0);

  // 5. Booking Process Stepper State
  const [activeBookingStep, setActiveBookingStep] = useState<number>(1);

  // 6. FAQ State: Search and Category
  const [faqQuery, setFaqQuery] = useState<string>("");
  const [faqCategory, setFaqCategory] = useState<"all" | "pricing" | "routes" | "vehicles" | "policies">("all");
  const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({ 0: true, 1: true });

  // Selected vehicle for Estimator
  const currentVehicle: ShirdiFareItem = useMemo(() => {
    return SHIRDI_FARES.find((v) => v.id === selectedCabId) || SHIRDI_FARES[1];
  }, [selectedCabId]);

  // Selected vehicle for Showcase
  const showcaseVehicle: ShirdiFareItem = useMemo(() => {
    return SHIRDI_FARES.find((v) => v.id === showcaseVehicleId) || SHIRDI_FARES[2];
  }, [showcaseVehicleId]);

  // Computed Fare Estimate
  const estimatedFare = useMemo(() => {
    let base = tripType === "oneway" ? currentVehicle.oneWayFare : currentVehicle.roundTripFare;
    if (includeShaniShingnapur) {
      base += currentVehicle.id === "sedan" ? 1200 : currentVehicle.id === "suv" ? 1500 : 1800;
    }
    if (includeTrimbakeshwar) {
      base += currentVehicle.id === "sedan" ? 1500 : currentVehicle.id === "suv" ? 1800 : 2200;
    }
    return base;
  }, [tripType, currentVehicle, includeShaniShingnapur, includeTrimbakeshwar]);

  // Filtered Inclusions
  const filteredInclusions = useMemo(() => {
    if (incFilter === "all") return SHIRDI_INCLUSIONS_EXCLUSIONS;
    return SHIRDI_INCLUSIONS_EXCLUSIONS.filter((item) => item.category === incFilter);
  }, [incFilter]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return SHIRDI_FAQS.filter((faq) => {
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
    SHIRDI_FAQS.forEach((_, i) => (all[i] = true));
    setExpandedFaqs(all);
  };

  const collapseAllFaqs = () => {
    setExpandedFaqs({});
  };

  return (
    <article className="min-h-screen bg-white text-gray-900 pb-20">
      {/* 01: Top Banner / Hero Header Section */}
      <header className="relative bg-gradient-to-b from-amber-50/70 via-white to-white border-b border-amber-100/60 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
          {/* Visible Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/outstation" className="hover:text-primary transition-colors">Outstation Cabs</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Mumbai to Shirdi Cab</span>
          </nav>

          {/* H1 - Exact match per Developer Guide: Top of page, inside hero banner section, above the fold */}
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Mumbai to Shirdi Cab Service
          </h1>

          {/* Intro Paragraphs with Planned Internal Links */}
          <div className="mt-4 space-y-3 text-base text-gray-700 leading-relaxed md:text-lg">
            <p>
              A trip to Shirdi is usually about one thing, reaching your destination peacefully without worrying about the drive itself. Swaraj Travel&apos;s Mumbai to Shirdi cab service is built around exactly that. Whether you are travelling with family for darshan, going alone for a quiet visit, or planning a group pilgrimage, you can book a comfortable, well maintained cab with a verified driver behind the wheel.
            </p>
            <p>
              Book Mumbai cabs for airport transfers, local rides, and outstation trips across Maharashtra, with 24/7 support, verified drivers, and instant booking on WhatsApp. Your Mumbai to Shirdi cab can be booked for early morning departures too, which many pilgrims prefer to avoid daytime heat and heavy traffic on the highway. Explore all our{" "}
              <Link href="/outstation" className="font-semibold text-primary underline underline-offset-4 hover:text-navy">
                outstation cab options
              </Link>{" "}
              for sacred temple visits across Maharashtra.
            </p>
          </div>

          {/* CTA Button 1: Directly below intro per Developer Guide instructions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openBooking("Mumbai to Shirdi Cab Service")}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-base font-bold text-navy shadow-md hover:bg-amber-400 hover:shadow-lg transition-all"
            >
              <TaxiIcon className="h-5 w-5" />
              <span>BOOK YOUR SHIRDI CAB NOW</span>
            </button>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <PhoneIcon className="h-4 w-4 text-emerald-600" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
            <a
              href={waLink("Hi Swaraj Travels, I want to book a Mumbai to Shirdi cab for darshan.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>

          {/* Image 1: Hero Banner (placed directly below H1 / CTA, above the fold, loading="eager") */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-xl">
            <div className="relative aspect-[16/9] w-full max-h-[500px]">
              <Image
                src="/images/mumbai-to-shirdi-cab-service.webp"
                alt="Mumbai to Shirdi cab service by Swaraj Travel"
                title="Mumbai to Shirdi Cab Service by Swaraj Travel"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-6 text-white">
                <p className="text-sm sm:text-base font-medium">
                  Comfortable outstation cab ready for a Mumbai to Shirdi pilgrimage trip
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-amber-300">
                  <span className="inline-flex items-center gap-1 rounded bg-black/40 px-2 py-0.5 backdrop-blur-sm">
                    <CheckIcon className="h-3.5 w-3.5 text-emerald-400" /> Verified MH Registered Commercial Fleet
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-black/40 px-2 py-0.5 backdrop-blur-sm">
                    <CheckIcon className="h-3.5 w-3.5 text-emerald-400" /> 24/7 Doorstep Mumbai & Airport Pickup
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Tool 1: Live Pilgrimage Trip & Fare Estimator */}
          <div className="mt-8 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 p-5 sm:p-7 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Interactive Pilgrimage Calculator</span>
                <div className="text-lg sm:text-xl font-bold text-navy">Plan Your Mumbai to Shirdi Journey</div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                <CheckIcon className="h-3.5 w-3.5" /> All-Inclusive Base Fare
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
              {/* Trip Type Selector */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">1. Trip Schedule</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setTripType("oneway")}
                    className={`rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold border transition-all ${
                      tripType === "oneway"
                        ? "bg-navy text-white border-navy shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    One Way Drop
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType("roundtrip")}
                    className={`rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold border transition-all ${
                      tripType === "roundtrip"
                        ? "bg-navy text-white border-navy shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    Round Trip Darshan
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  {tripType === "oneway"
                    ? "Direct drop at your Shirdi hotel or Bhakta Niwas."
                    : "Vehicle stays with you in Shirdi and brings you back safely."}
                </p>
              </div>

              {/* Vehicle Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">2. Preferred Vehicle</label>
                <div className="space-y-1.5">
                  {SHIRDI_FARES.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedCabId(v.id)}
                      className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs sm:text-sm font-medium border text-left transition-all ${
                        selectedCabId === v.id
                          ? "bg-amber-100/90 text-navy border-amber-400 font-semibold shadow-xs"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span>{v.id === "sedan" ? "Sedan (Dzire/Etios)" : v.id === "suv" ? "SUV (Ertiga)" : "Innova Crysta"}</span>
                      <span className="font-bold text-primary">
                        {tripType === "oneway" ? v.oneWayFareStr : v.roundTripFareStr}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pilgrimage Addons & Pickup Hub */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">3. Pickup & Sacred Stops</label>
                <select
                  value={selectedHubIdx}
                  onChange={(e) => setSelectedHubIdx(Number(e.target.value))}
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 font-medium focus:border-primary focus:outline-none"
                >
                  {SHIRDI_PICKUP_HUBS.map((hub, idx) => (
                    <option key={hub.name} value={idx}>
                      {hub.name} ({hub.estDriveTime})
                    </option>
                  ))}
                </select>

                <div className="mt-3 space-y-2">
                  <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeShaniShingnapur}
                      onChange={(e) => setIncludeShaniShingnapur(e.target.checked)}
                      className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                    />
                    <span>Add Shani Shingnapur Darshan (+70 km)</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeTrimbakeshwar}
                      onChange={(e) => setIncludeTrimbakeshwar(e.target.checked)}
                      className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                    />
                    <span>Add Trimbakeshwar Jyotirlinga stop</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Estimated Total & Action */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-navy p-4 text-white">
              <div>
                <div className="text-xs text-gray-300">Estimated Indicative Total ({tripType === "oneway" ? "One Way" : "Round Trip"})</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                  ₹{estimatedFare.toLocaleString("en-IN")}
                </div>
                <div className="text-xs text-gray-400">
                  Includes {currentVehicle.vehicle} • Fuel & Chauffeur allowance included
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => openBooking(`Mumbai to Shirdi Cab (${tripType === "oneway" ? "One Way" : "Round Trip"}) - ${currentVehicle.vehicle}`)}
                  className="rounded-xl bg-amber-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-navy hover:bg-amber-400 transition-colors shadow"
                >
                  Confirm This Cab
                </button>
                <a
                  href={waLink(
                    `Hi Swaraj Travels, I would like to book a ${tripType === "oneway" ? "One Way" : "Round Trip"} Mumbai to Shirdi cab (${currentVehicle.vehicle}) starting from ${SHIRDI_PICKUP_HUBS[selectedHubIdx].name}.${
                      includeShaniShingnapur ? " Including Shani Shingnapur." : ""
                    }${includeTrimbakeshwar ? " Including Trimbakeshwar." : ""} Please share final confirmation.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="mx-auto max-w-[1080px] px-4 sm:px-6 pt-12 space-y-16">
        {/* SECTION 1: Fare and What's Included */}
        <section id="fares" className="scroll-mt-20">
          {/* H2 - Exact match: Immediately after intro paragraph, first major section */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Mumbai to Shirdi Cab Fare and What&apos;s Included
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Most people searching for a Mumbai to Shirdi cab want one simple thing first, a clear idea of what the trip will actually cost, not just a starting number that changes once tolls and extra charges are added.
          </p>

          {/* Fare Table */}
          <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm text-gray-800">
              <thead className="bg-navy text-xs uppercase tracking-wider text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Vehicle Type</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Suitable For</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Indicative One Way Fare*</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Indicative Round Trip Fare*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {SHIRDI_FARES.map((fare) => (
                  <tr key={fare.id} className="hover:bg-amber-50/40 transition-colors">
                    <td className="px-5 py-4 font-bold text-navy">
                      <div className="flex items-center gap-2">
                        <span>{fare.vehicle}</span>
                        {fare.popular && (
                          <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-800">
                            Popular
                          </span>
                        )}
                      </div>
                      <span className="text-xs font-normal text-gray-500">{fare.type}</span>
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      {fare.suitableFor}
                    </td>
                    <td className="px-5 py-4 font-bold text-emerald-700">
                      Starting from {fare.oneWayFareStr}
                    </td>
                    <td className="px-5 py-4 font-bold text-primary">
                      Starting from {fare.roundTripFareStr}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs italic text-gray-500">
            *Fares shown are indicative starting prices for planning purposes. Your final fare is confirmed at the time of booking based on pickup location, travel date, and vehicle availability.
          </p>

          {/* CTA Button 2: GET EXACT FARE ON WHATSAPP (Per Content Brief & Handoff) */}
          <div className="mt-5">
            <a
              href={waLink("Hi Swaraj Travels, I want to get the exact fare for Mumbai to Shirdi cab for my travel dates.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-emerald-700 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>GET EXACT FARE ON WHATSAPP</span>
            </a>
          </div>

          {/* H3: Vehicle Options - Nested inside Fare section, directly below fare table */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50/50 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Vehicle Options
            </h3>
            <div className="mt-3 space-y-3 text-base text-gray-700 leading-relaxed">
              <p>
                Experience luxury on wheels with our premium fleet, offering safe, comfortable, and punctual rides across Crysta, available 24/7. Depending on the size of your group and how much luggage you are carrying, you can choose between a sedan for smaller groups, an SUV for slightly larger families, or an Innova Crysta if you want extra legroom and comfort on the long drive to Shirdi.
              </p>
              <p>
                Families travelling with elderly parents or small children generally find the Innova Crysta the most comfortable option for this route, since the extra space makes the four to five hour journey noticeably easier.
              </p>
            </div>

            {/* Image 2: Vehicle Comparison Image (placed inside H3 Vehicle Options, below the fare table, loading="lazy") */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
              <div className="relative aspect-[16/9] w-full max-h-[460px]">
                <Image
                  src="/images/innova-crysta-mumbai-shirdi-cab.webp"
                  alt="Innova Crysta cab for Mumbai to Shirdi outstation trip"
                  title="Innova Crysta Cab for Mumbai to Shirdi Trip"
                  fill
                  loading="lazy"
                  className="object-cover object-center"
                  sizes="(max-width: 1080px) 100vw, 1080px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                  <p className="text-sm font-semibold">
                    Innova Crysta available for family bookings on the Mumbai to Shirdi route
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Vehicle Showcase Selector */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3">
                {SHIRDI_FARES.map((veh) => (
                  <button
                    key={veh.id}
                    type="button"
                    onClick={() => setShowcaseVehicleId(veh.id)}
                    className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                      showcaseVehicleId === veh.id
                        ? "bg-navy text-white shadow"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {veh.id === "sedan" ? "Sedan (Dzire)" : veh.id === "suv" ? "SUV (Ertiga)" : "Innova Crysta"}
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-white p-5 border border-gray-200 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-lg font-bold text-navy">{showcaseVehicle.vehicle}</div>
                    <p className="text-xs text-gray-500">{showcaseVehicle.type} • Commercial MH Plates</p>
                    <p className="mt-2 text-sm text-gray-700">{showcaseVehicle.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Starting From</div>
                    <div className="text-2xl font-extrabold text-primary">{showcaseVehicle.oneWayFareStr}</div>
                    <div className="text-xs text-gray-500">Round Trip: {showcaseVehicle.roundTripFareStr}</div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-gray-100 pt-3 text-xs">
                  <div className="flex items-center gap-2 text-gray-700">
                    <UsersIcon className="h-4 w-4 text-primary" />
                    <span><strong>Seating:</strong> {showcaseVehicle.passengers}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <LuggageIcon className="h-4 w-4 text-primary" />
                    <span><strong>Luggage:</strong> {showcaseVehicle.luggage}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <ShieldIcon className="h-4 w-4 text-emerald-600" />
                    <span><strong>Safety:</strong> Commercial Chauffeur</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {showcaseVehicle.features.map((feat) => (
                    <span key={feat} className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 border border-amber-200">
                      <CheckIcon className="h-3 w-3 text-emerald-600" />
                      {feat}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openBooking(`Mumbai to Shirdi Cab - ${showcaseVehicle.vehicle}`)}
                    className="rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-navy hover:bg-amber-400 transition-colors"
                  >
                    Book {showcaseVehicle.vehicle.split(" ")[0]}
                  </button>
                  <a
                    href={waLink(`Hi Swaraj Travels, I want to book a ${showcaseVehicle.vehicle} for Mumbai to Shirdi trip.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    <span>Inquire Availability</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* H3: What's Included and What's Not - Nested inside Fare section, directly below Vehicle Options */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              What&apos;s Included and What&apos;s Not
            </h3>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              Here is what is typically covered in your fare, and what is billed separately, so there are no surprises on the day of travel.
            </p>

            {/* Interactive Filter Pills */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setIncFilter("all")}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                  incFilter === "all" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Breakdown ({SHIRDI_INCLUSIONS_EXCLUSIONS.length})
              </button>
              <button
                type="button"
                onClick={() => setIncFilter("included")}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                  incFilter === "included" ? "bg-emerald-700 text-white shadow-xs" : "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100"
                }`}
              >
                Usually Included (3)
              </button>
              <button
                type="button"
                onClick={() => setIncFilter("separate")}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                  incFilter === "separate" ? "bg-amber-700 text-white shadow-xs" : "bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
                }`}
              >
                Usually Charged Separately (4)
              </button>
            </div>

            {/* Inclusions / Exclusions Cards */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Usually Included */}
              {(incFilter === "all" || incFilter === "included") && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm sm:text-base border-b border-emerald-200 pb-2">
                    <CheckIcon className="h-5 w-5 text-emerald-600" />
                    <span>Usually included:</span>
                  </div>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-800">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <div>
                        <strong>Driver allowance:</strong> Covered in your base booking quote. Zero daily driver food or stay requests.
                      </div>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-800">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <div>
                        <strong>Fuel for the booked route:</strong> Complete diesel/petrol for the entire 240+ km journey between Mumbai and Shirdi is included.
                      </div>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-800">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <div>
                        <strong>Base vehicle rental for the trip:</strong> Dedicated commercial AC vehicle reserved solely for you and your travelling group.
                      </div>
                    </li>
                  </ul>
                </div>
              )}

              {/* Usually Charged Separately */}
              {(incFilter === "all" || incFilter === "separate") && (
                <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-5">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base border-b border-amber-200 pb-2">
                    <TagIcon className="h-5 w-5 text-amber-700" />
                    <span>Usually charged separately:</span>
                  </div>
                  <ul className="mt-3 space-y-3">
                    <li className="flex items-start gap-2 text-sm text-gray-800">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                      <div>
                        <strong>Toll and parking charges:</strong> As actually incurred along NH 160 or temple parking gates with physical toll receipts.
                      </div>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-800">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                      <div>
                        <strong>State tax or permit charges:</strong> Applicable on the Mumbai to Shirdi route (already included in MH registered vehicles for intra-state travel).
                      </div>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-800">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                      <div>
                        <strong>Waiting time beyond the standard free waiting window:</strong> Generous free window included for temple darshan; nominal waiting charges apply thereafter.
                      </div>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-800">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                      <div>
                        <strong>Any extra kilometres driven beyond the quoted route distance:</strong> Standard per-km billing if you make unreserved local detours.
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <p className="mt-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg border border-gray-100">
              Your driver or our booking team will confirm the complete cost breakup before your trip is finalised, so you know the total amount in advance.
            </p>
          </div>
        </section>

        {/* SECTION 2: Distance, Route and Travel Time */}
        <section id="route" className="scroll-mt-20">
          {/* H2 - Exact match: Second major section, after Fare section */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Distance, Route and Travel Time
          </h2>
          <div className="mt-3 space-y-3 text-base text-gray-700 leading-relaxed">
            <p>
              The road distance between Mumbai and Shirdi is approximately 240 kilometres. Travel time usually falls between 4.5 and 6 hours, depending on traffic, your exact pickup point within Mumbai, and the time of day you leave.
            </p>
            <p>
              If you are travelling with elderly family members or young children, leaving early morning is generally the more comfortable option, since traffic on the highway is lighter and the ride feels less rushed. Planning around a realistic time range, rather than the fastest possible estimate, makes the whole trip far less stressful.
            </p>
          </div>

          {/* Image 3: Route Map (placed inside H2 Distance, Route and Travel Time, loading="lazy") */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full max-h-[460px]">
              <Image
                src="/images/mumbai-to-shirdi-route-map.webp"
                alt="Mumbai to Shirdi cab route and distance map"
                title="Mumbai to Shirdi Cab Route Map"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <p className="text-sm font-semibold">
                  Road route map showing distance between Mumbai and Shirdi
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Route Milestones & Highway Guide */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-200 pb-3">
              <div className="text-lg font-bold text-navy flex items-center gap-2">
                <RouteIcon className="h-5 w-5 text-primary" />
                <span>Mumbai to Shirdi Milestone Timeline</span>
              </div>
              <span className="text-xs text-gray-500 font-medium">Click each stage to see highway conditions</span>
            </div>

            {/* Stepper Tabs */}
            <div className="mt-4 flex overflow-x-auto gap-2 pb-2">
              {SHIRDI_ROUTE_MILESTONES.map((mile, idx) => (
                <button
                  key={mile.title}
                  type="button"
                  onClick={() => setActiveMilestoneIdx(idx)}
                  className={`shrink-0 rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                    activeMilestoneIdx === idx
                      ? "bg-navy text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  <span className="block font-bold">{mile.title.split(" ")[0]}</span>
                  <span className="text-[10px] opacity-80">{mile.distance}</span>
                </button>
              ))}
            </div>

            {/* Active Milestone Card */}
            <div className="mt-4 rounded-xl bg-white p-5 border border-gray-200 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                <div>
                  <div className="text-base font-bold text-navy">
                    {SHIRDI_ROUTE_MILESTONES[activeMilestoneIdx].title}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                    <span><strong>Distance:</strong> {SHIRDI_ROUTE_MILESTONES[activeMilestoneIdx].distance}</span>
                    <span>•</span>
                    <span><strong>Elapsed:</strong> {SHIRDI_ROUTE_MILESTONES[activeMilestoneIdx].duration}</span>
                  </div>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                  Stage {activeMilestoneIdx + 1} of 5
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-700">
                {SHIRDI_ROUTE_MILESTONES[activeMilestoneIdx].description}
              </p>
              <div className="mt-3 rounded-lg bg-amber-50/70 p-3 text-xs text-amber-900 border border-amber-200">
                <strong>Chauffeur Travel Tip:</strong> {SHIRDI_ROUTE_MILESTONES[activeMilestoneIdx].tip}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: One Way vs Round Trip */}
        <section id="oneway-vs-roundtrip" className="scroll-mt-20">
          {/* H2 - Exact match: Third major section */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            One Way vs Round Trip, Which One to Choose
          </h2>
          <div className="mt-3 space-y-3 text-base text-gray-700 leading-relaxed">
            <p>
              This is one of the most common questions first time Shirdi travellers have, and it deserves a clear answer rather than just two prices shown side by side.
            </p>
            <p>
              If you plan to stay in Shirdi overnight or for a few days before heading back, a one way drop is usually the simpler and more practical choice. You are not paying for the cab to sit idle while you complete your darshan and visit nearby places.
            </p>
            <p>
              If you plan to complete your darshan and return to Mumbai the same day, or within a day or two, a round trip booking works out more convenient. The same driver and vehicle wait for you or return on your chosen date, which also tends to work out more economical than booking two separate one way trips. Many pilgrims also pair their visit with our{" "}
              <Link href="/mumbai-to-nashik-cab" className="font-semibold text-primary underline underline-offset-4 hover:text-navy">
                Mumbai to Nashik cab
              </Link>{" "}
              service to seek blessings at Trimbakeshwar Jyotirlinga and Panchavati during the same trip.
            </p>
          </div>

          {/* Side by Side Comparison Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* One Way Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-amber-300 transition-colors">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="text-lg font-bold text-navy">One Way Drop Option</div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                  From ₹3,000
                </span>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Ideal for:</strong> Multi-day pilgrims staying at hotels or Bhakta Niwas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>No idle cab charge:</strong> Zero waiting or overnight vehicle retention costs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Flexibility:</strong> Stay in Shirdi as long as you desire without strict departure times.</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => openBooking("Mumbai to Shirdi One Way Drop")}
                  className="w-full rounded-xl bg-navy py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition-colors"
                >
                  Book One Way Drop
                </button>
              </div>
            </div>

            {/* Round Trip Card */}
            <div className="rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-amber-50/40 via-white to-amber-50/20 p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-amber-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <div className="text-lg font-bold text-navy">Round Trip Pilgrimage</div>
                  <span className="rounded bg-amber-500 px-2 py-0.5 text-[10px] font-extrabold uppercase text-navy">
                    Recommended
                  </span>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  From ₹5,500
                </span>
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Ideal for:</strong> Same-day darshan or 1-2 day pilgrimage with elderly relatives.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Dedicated Driver:</strong> Same chauffeur handles your temple waiting & baggage custody.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>More Economical:</strong> Significant savings compared to booking two separate one-way rides.</span>
                </li>
              </ul>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => openBooking("Mumbai to Shirdi Round Trip Darshan")}
                  className="w-full rounded-xl bg-amber-500 py-2.5 text-xs sm:text-sm font-bold text-navy hover:bg-amber-400 transition-colors shadow"
                >
                  Book Round Trip Pilgrimage
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: How Booking Works */}
        <section id="booking-process" className="scroll-mt-20">
          {/* H2 - Exact match: Fourth major section */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            How Booking Works
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Booking your Mumbai to Shirdi cab with Swaraj Travel is simple and does not involve long forms or waiting on hold.
          </p>

          {/* 4 Steps numbered list per brief */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div
              onClick={() => setActiveBookingStep(1)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                activeBookingStep === 1
                  ? "border-primary bg-amber-50/70 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  1
                </span>
                <span className="text-xs text-gray-500 font-medium">Step 1</span>
              </div>
              <div className="mt-3 text-sm font-bold text-navy">WhatsApp Request</div>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Message us on WhatsApp with your travel date, pickup location, and preferred vehicle.
              </p>
            </div>

            <div
              onClick={() => setActiveBookingStep(2)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                activeBookingStep === 2
                  ? "border-primary bg-amber-50/70 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  2
                </span>
                <span className="text-xs text-gray-500 font-medium">Step 2</span>
              </div>
              <div className="mt-3 text-sm font-bold text-navy">Fare Confirmation</div>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Our team confirms availability and shares the final fare along with driver and vehicle details.
              </p>
            </div>

            <div
              onClick={() => setActiveBookingStep(3)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                activeBookingStep === 3
                  ? "border-primary bg-amber-50/70 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  3
                </span>
                <span className="text-xs text-gray-500 font-medium">Step 3</span>
              </div>
              <div className="mt-3 text-sm font-bold text-navy">Instant Confirmation</div>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Your booking is confirmed instantly, and you receive driver contact details before pickup.
              </p>
            </div>

            <div
              onClick={() => setActiveBookingStep(4)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                activeBookingStep === 4
                  ? "border-primary bg-amber-50/70 shadow-md"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  4
                </span>
                <span className="text-xs text-gray-500 font-medium">Step 4</span>
              </div>
              <div className="mt-3 text-sm font-bold text-navy">Peaceful Departure</div>
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                Your driver arrives on time at your pickup point, and your journey to Shirdi begins.
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Instant booking on WhatsApp means you can confirm your cab in a few messages, without the back and forth of long phone calls. Need custom assistance? Feel free to contact our support desk via our{" "}
            <Link href="/contact" className="font-semibold text-primary underline underline-offset-4 hover:text-navy">
              contact page
            </Link>.
          </p>

          {/* CTA Button 3: BOOK NOW ON WHATSAPP (Per Content Brief & Handoff) */}
          <div className="mt-5">
            <a
              href={waLink("Hi Swaraj Travels, I want to book a Mumbai to Shirdi cab now.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-emerald-700 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>BOOK NOW ON WHATSAPP</span>
            </a>
          </div>
        </section>

        {/* SECTION 5: Driver, Vehicle and Safety Standards */}
        <section id="safety" className="scroll-mt-20">
          {/* H2 - Exact match: Fifth major section */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Driver, Vehicle and Safety Standards
          </h2>
          <div className="mt-3 space-y-3 text-base text-gray-700 leading-relaxed">
            <p>
              On a long route like Mumbai to Shirdi, who is driving matters as much as which car you are sitting in. Every cab booked through Swaraj Travel comes with a verified driver, and support is available 24/7 if you need any assistance during your journey.
            </p>
            <p>
              Real feedback from past passengers reflects this. One customer travelling to Shirdi with family shared that the driver was polite and helped them throughout the journey, calling it a peaceful and tension free trip. Another customer on a separate long distance trip mentioned that the driver was experienced on ghats and drove safely, adding that the whole family enjoyed the trip. A tourist on another journey said they felt very safe and comfortable, describing the driver as professional and helpful throughout.
            </p>
            <p>
              Vehicles are maintained for cleanliness and safety before every outstation trip, so you are not stepping into a cab that has not been checked.
            </p>
          </div>

          {/* Image 4: Driver/Safety Image (placed inside H2 Driver, Vehicle and Safety Standards, loading="lazy") */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full max-h-[460px]">
              <Image
                src="/images/verified-driver-mumbai-shirdi-taxi.webp"
                alt="Verified driver for Mumbai to Shirdi cab"
                title="Verified Driver for Mumbai to Shirdi Taxi"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <p className="text-sm font-semibold">
                  Professional verified driver assigned for Mumbai to Shirdi outstation cab booking
                </p>
              </div>
            </div>
          </div>

          {/* Safety Standards Feature Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <ShieldIcon className="h-6 w-6 text-emerald-600 mb-2" />
              <div className="text-sm font-bold text-navy">Police Verified Chauffeurs</div>
              <p className="mt-1 text-xs text-gray-600">
                Thoroughly vetted commercial drivers with clean state police records and verified badge IDs.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <RouteIcon className="h-6 w-6 text-primary mb-2" />
              <div className="text-sm font-bold text-navy">Kasara Ghat Specialists</div>
              <p className="mt-1 text-xs text-gray-600">
                Extensive experience navigating mountain ghat curves and highway expressways smoothly and safely.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <CheckIcon className="h-6 w-6 text-emerald-600 mb-2" />
              <div className="text-sm font-bold text-navy">Sanitized AC Cabs</div>
              <p className="mt-1 text-xs text-gray-600">
                Multi-point pre-trip inspection, sanitized interiors, working seatbelts, and fresh upholstery.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <ClockIcon className="h-6 w-6 text-primary mb-2" />
              <div className="text-sm font-bold text-navy">24/7 Ride Monitoring</div>
              <p className="mt-1 text-xs text-gray-600">
                Dedicated support desk reachable via call and WhatsApp for real-time ride assistance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: Cancellation and Rescheduling Policy */}
        <section id="cancellation" className="scroll-mt-20">
          {/* H2 - Exact match: Sixth major section */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Cancellation and Rescheduling Policy
          </h2>
          <div className="mt-3 space-y-3 text-base text-gray-700 leading-relaxed">
            <p>
              We understand that pilgrimage plans can change due to family schedules, festival dates, or last minute darshan timing changes.
            </p>
            <p>
              Cancellations made well in advance of your travel date are generally free of charge. Cancellations made closer to the pickup time may attract a partial charge, since the vehicle and driver are already blocked for your trip. Rescheduling to a different date is usually possible, subject to vehicle availability, and our team will always try to accommodate a genuine date change wherever possible.
            </p>
            <p>
              For exact cancellation timelines and charges applicable to your specific booking, our team will confirm this clearly at the time of booking, so you know where you stand before you pay.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <span className="text-xs font-bold uppercase text-emerald-700">Advance Notice</span>
              <div className="mt-1 text-sm font-bold text-navy">Free Early Cancellation</div>
              <p className="mt-1 text-xs text-gray-600">
                Cancel in advance of departure with zero penalty fees on confirmed pilgrimage rides.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <span className="text-xs font-bold uppercase text-primary">Flexibility</span>
              <div className="mt-1 text-sm font-bold text-navy">Hassle-Free Date Change</div>
              <p className="mt-1 text-xs text-gray-600">
                Darshan slot shifted? Reschedule to an alternate day subject to car availability.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4">
              <span className="text-xs font-bold uppercase text-navy">No Hidden Traps</span>
              <div className="mt-1 text-sm font-bold text-navy">Upfront Clarity</div>
              <p className="mt-1 text-xs text-gray-600">
                All applicable policies are shared directly on WhatsApp prior to trip confirmation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: What Our Customers Say */}
        <section id="testimonials" className="scroll-mt-20">
          {/* H2 - Exact match: Seventh major section, testimonials block */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Real experiences from real trips say more than any promotional line ever could.
          </p>

          {/* Exact quotes from brief */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {SHIRDI_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-amber-300 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="text-sm font-semibold italic text-navy">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                    {t.comment}
                  </p>
                </div>
                <div className="mt-5 border-t border-gray-100 pt-3">
                  <div className="text-xs font-bold text-navy">{t.name}</div>
                  <div className="text-[11px] text-gray-500">{t.location} • {t.tripType}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button 4: BOOK YOUR TRIP LIKE THEY DID (Per Content Brief & Handoff) */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => openBooking("Mumbai to Shirdi Pilgrimage Cab")}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-navy shadow hover:bg-amber-400 transition-colors"
            >
              <TaxiIcon className="h-4 w-4" />
              <span>BOOK YOUR TRIP LIKE THEY DID</span>
            </button>
          </div>

          {/* Image 5: Testimonial Visual (placed inside H2 What Our Customers Say, loading="lazy") */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full max-h-[460px]">
              <Image
                src="/images/shirdi-cab-customer-review.webp"
                alt="Customer review for Mumbai to Shirdi cab trip"
                title="Customer Review for Shirdi Cab Trip"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <p className="text-sm font-semibold">
                  Real customer feedback for a Mumbai to Shirdi cab trip with Swaraj Travel
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: Frequently Asked Questions */}
        <section id="faq" className="scroll-mt-20">
          {/* H2 - Exact match: Final content section, before footer */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Find immediate, transparent answers regarding fares, routes, vehicle types, darshan waiting times, and cancellation policies for your Mumbai to Shirdi cab trip.
          </p>

          {/* Interactive FAQ Search & Filter Controls */}
          <div className="mt-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search questions (e.g. fare, waiting, Shani Shingnapur)..."
                value={faqQuery}
                onChange={(e) => setFaqQuery(e.target.value)}
                className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none"
              />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={expandAllFaqs}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Expand All
                </button>
                <button
                  type="button"
                  onClick={collapseAllFaqs}
                  className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-100"
                >
                  Collapse
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setFaqCategory("all")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  faqCategory === "all" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All ({SHIRDI_FAQS.length})
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("pricing")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  faqCategory === "pricing" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Fares & Pricing
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("routes")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  faqCategory === "routes" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Routes & Stops
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("vehicles")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  faqCategory === "vehicles" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Vehicles & Comfort
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("policies")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  faqCategory === "policies" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Policies & ID Proof
              </button>
            </div>
          </div>

          {/* FAQ Accordion Items */}
          <div className="mt-6 space-y-3">
            {filteredFaqs.map((faq, idx) => {
              const originalIdx = SHIRDI_FAQS.findIndex((f) => f.question === faq.question);
              const isExpanded = !!expandedFaqs[originalIdx];
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-all shadow-xs hover:border-gray-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(originalIdx)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-navy hover:bg-amber-50/40 transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <span className="shrink-0 text-gray-400">
                      {isExpanded ? (
                        <ChevronUpIcon className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  {isExpanded && (
                    <div className="border-t border-gray-100 bg-gray-50/50 p-4 text-sm text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Final Outstation Links and Floating / Bottom Strip */}
        <section className="rounded-2xl bg-gradient-to-r from-navy via-slate-800 to-navy p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Ready for Darshan?</span>
              <div className="text-xl sm:text-2xl font-extrabold mt-1">Book Your Mumbai to Shirdi Pilgrimage Cab</div>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-xl">
                Verified drivers, clean sanitized cabs, doorstep pickup across Mumbai & Mumbai Airport (T1/T2). Instant WhatsApp booking with transparent pricing.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openBooking("Mumbai to Shirdi Cab")}
                className="rounded-xl bg-amber-500 px-5 py-3 font-bold text-navy hover:bg-amber-400 transition-colors shadow"
              >
                BOOK NOW
              </button>
              <a
                href={waLink("Hi Swaraj Travels, I want to book a cab from Mumbai to Shirdi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
            <div>
              <span>Other Popular Outstation Pilgrimage Routes: </span>
              <Link href="/mumbai-to-nashik-cab" className="text-amber-300 underline hover:text-amber-200 mr-2">Mumbai to Nashik</Link>
              <Link href="/mumbai-to-pune-cab" className="text-amber-300 underline hover:text-amber-200 mr-2">Mumbai to Pune</Link>
              <Link href="/mumbai-to-mahabaleshwar-cab" className="text-amber-300 underline hover:text-amber-200">Mumbai to Mahabaleshwar</Link>
            </div>
            <div>
              <span>Need help? Call </span>
              <a href={`tel:${PHONE_TEL}`} className="text-white font-bold hover:underline">{PHONE_NUMBER}</a>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
}
