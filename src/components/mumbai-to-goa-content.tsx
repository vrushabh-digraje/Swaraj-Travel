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
  GOA_FARES,
  CAR_SELECTION_GUIDE,
  GOA_ROUTE_STAGES,
  GOA_ROAD_TRIP_STOPS,
  TRANSPORT_COMPARISON,
  GOA_REVIEWS,
  GOA_FAQS,
  GoaFareItem,
} from "@/lib/mumbai-to-goa";

const PHONE_NUMBER = "+91-8856904131";
const PHONE_TEL = "+918856904131";
const WHATSAPP_NUMBER = "918856904131";

function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function MumbaiToGoaContent() {
  const { openBooking } = useBooking();

  // 1. Interactive Fare Estimator State
  const [selectedCabId, setSelectedCabId] = useState<string>("innova-crysta");
  const [tripType, setTripType] = useState<"oneway" | "roundtrip">("oneway");
  const [isNightPickup, setIsNightPickup] = useState<boolean>(false);
  const [selectedMumbaiZone, setSelectedMumbaiZone] = useState<string>("Western Suburbs (Bandra - Borivali)");
  const [selectedGoaZone, setSelectedGoaZone] = useState<string>("North Goa (Calangute, Baga, Anjuna)");

  // 2. Interactive Car Selection Tab
  const [carGuideIndex, setCarGuideIndex] = useState<number>(2);

  // 3. Interactive Route Stage Active Tab
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  // 4. Interactive Stops Filter / Selection
  const [activeStopIndex, setActiveStopIndex] = useState<number>(2);

  // 5. Booking Step Interactive Stepper
  const [activeStep, setActiveStep] = useState<number>(1);

  // 6. Interactive Pickup / Drop Explorer Tab
  const [activePickupTab, setActivePickupTab] = useState<"western" | "central" | "airport" | "thane" | "navimumbai">("western");
  const [activeGoaDropTab, setActiveGoaDropTab] = useState<"north" | "south" | "central" | "hubs">("north");

  // 7. FAQ State
  const [faqQuery, setFaqQuery] = useState<string>("");
  const [faqCategory, setFaqCategory] = useState<"all" | "distance" | "fare" | "booking" | "safety" | "car">("all");
  const [expandedFaqs, setExpandedFaqs] = useState<Record<string, boolean>>({
    "What is the distance from Mumbai to Goa by road?": true,
    "What is the cab fare from Mumbai to Goa?": true,
  });

  const selectedVehicle: GoaFareItem = useMemo(() => {
    return GOA_FARES.find((v) => v.id === selectedCabId) || GOA_FARES[3];
  }, [selectedCabId]);

  // Dynamic Fare Calculation
  const calculatedFare = useMemo(() => {
    let base = selectedVehicle.oneWayFare;
    if (tripType === "roundtrip") {
      base = base * 1.85; // approximate round-trip with driver return discount
    }
    if (isNightPickup) {
      base += parseInt(selectedVehicle.nightCharge.replace(/[^\d]/g, ""), 10) || 300;
    }
    return Math.round(base);
  }, [selectedVehicle, tripType, isNightPickup]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return GOA_FAQS.filter((faq) => {
      const matchCat = faqCategory === "all" || faq.category === faqCategory;
      const matchQuery =
        !faqQuery ||
        faq.question.toLowerCase().includes(faqQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(faqQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [faqCategory, faqQuery]);

  const toggleFaq = (question: string) => {
    setExpandedFaqs((prev) => ({ ...prev, [question]: !prev[question] }));
  };

  const expandAllFaqs = () => {
    const all: Record<string, boolean> = {};
    GOA_FAQS.forEach((f) => (all[f.question] = true));
    setExpandedFaqs(all);
  };

  const collapseAllFaqs = () => {
    setExpandedFaqs({});
  };

  return (
    <article className="min-h-screen bg-white text-gray-900 pb-20">
      {/* SECTION: HERO */}
      <header className="relative bg-gradient-to-b from-sky-50/80 via-white to-white border-b border-sky-100/60 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/outstation" className="hover:text-primary transition-colors">Outstation Cabs</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Mumbai to Goa Cab</span>
          </nav>

          {/* H1 - Exact match per Developer Blueprint */}
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Mumbai to Goa Cab Booking | Fixed Fare, Verified Drivers, WhatsApp Booking 24/7
          </h1>

          {/* Paragraph (intro text — 4 lines max) */}
          <div className="mt-4 space-y-3 text-base text-gray-700 leading-relaxed md:text-lg">
            <p>
              Planning your Mumbai to Goa road trip? Swaraj Travel provides direct cab service from your doorstep anywhere in Mumbai to your exact drop point in Goa. Our drivers are experienced on the NH66 Konkan coastal highway, are comfortable on ghat sections, and have safely completed thousands of long-distance trips for families, groups, couples, and solo travelers.
            </p>
            <p>
              No hidden charges. No app to download. No complicated booking forms. With 50,000+ happy riders, 120+ premium cabs, and a team available around the clock, your Mumbai to Goa cab booking is simple, fast, and completely transparent. Send us a WhatsApp message and we confirm your cab in minutes.
            </p>
          </div>

          {/* CTA BLOCK: WhatsApp Button + Call Button */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={waLink("Hi Swaraj Travel, I want to book a Mumbai to Goa cab. Please share details.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-md hover:bg-emerald-700 hover:shadow-lg transition-all"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Book on WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-bold text-gray-800 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <PhoneIcon className="h-4 w-4 text-emerald-600" />
              <span>Call Us Now</span>
            </a>
            <button
              type="button"
              onClick={() => openBooking("Mumbai to Goa Cab Service")}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3.5 text-sm font-bold text-navy shadow hover:bg-amber-400 transition-colors"
            >
              <TaxiIcon className="h-4 w-4" />
              <span>Book Online</span>
            </button>
          </div>

          <p className="mt-3 text-xs font-medium text-gray-500">
            Pickup from anywhere in Mumbai. Drop anywhere in Goa. Available 24 hours a day, 7 days a week.
          </p>

          {/* Image 1 — Hero Section (Full-width, above fold, directly below H1 heading, eager load) */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-xl">
            <div className="relative aspect-[16/9] w-full max-h-[520px]">
              <Image
                src="/images/mumbai-to-goa-cab-swaraj-travel-hero.webp"
                alt="Mumbai to Goa cab booking service by Swaraj Travel with verified driver on NH66 Konkan coastal highway"
                title="Book Mumbai to Goa Cab with Swaraj Travel — Verified Drivers, Fixed Fare, 24/7 Support"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-6 text-white">
                <p className="text-sm sm:text-base font-medium">
                  Hero banner showing a clean, well-maintained Swaraj Travel cab on the NH66 coastal highway with the Konkan coastline visible, representing the Mumbai to Goa cab journey.
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-amber-300">
                  <span className="inline-flex items-center gap-1 rounded bg-black/40 px-2 py-0.5 backdrop-blur-sm">
                    <CheckIcon className="h-3.5 w-3.5 text-emerald-400" /> All-Inclusive NH66 Tolls Included
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-black/40 px-2 py-0.5 backdrop-blur-sm">
                    <CheckIcon className="h-3.5 w-3.5 text-emerald-400" /> Commercial Maharashtra (MH) Number Plates
                  </span>
                  <span className="inline-flex items-center gap-1 rounded bg-black/40 px-2 py-0.5 backdrop-blur-sm">
                    <CheckIcon className="h-3.5 w-3.5 text-emerald-400" /> 100% Door-to-Door Delivery Across Goa
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Feature 1: Live Trip Estimator Widget */}
          <div className="mt-8 rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50/70 via-white to-sky-50/30 p-5 sm:p-7 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-200/80 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">Interactive NH66 Road Trip Planner</span>
                <div className="text-lg sm:text-xl font-bold text-navy">Calculate Your Exact Mumbai to Goa Fare</div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                <CheckIcon className="h-3.5 w-3.5" /> Direct WhatsApp Booking
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Trip Style & Car Type */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">1. Choose Car Type</label>
                <div className="space-y-1.5">
                  {GOA_FARES.map((car) => (
                    <button
                      key={car.id}
                      type="button"
                      onClick={() => setSelectedCabId(car.id)}
                      className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium border text-left transition-all ${
                        selectedCabId === car.id
                          ? "bg-sky-100 text-navy border-sky-400 font-bold shadow-xs"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span>{car.carType}</span>
                      <span className="font-extrabold text-primary">{car.oneWayFareStr}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule & Night Charge */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">2. Journey Type & Timing</label>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setTripType("oneway")}
                    className={`rounded-xl px-3 py-2 text-xs font-bold border transition-all ${
                      tripType === "oneway"
                        ? "bg-navy text-white border-navy shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    One-Way Drop
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType("roundtrip")}
                    className={`rounded-xl px-3 py-2 text-xs font-bold border transition-all ${
                      tripType === "roundtrip"
                        ? "bg-navy text-white border-navy shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    Round Trip Cab
                  </button>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-3 text-xs space-y-2">
                  <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isNightPickup}
                      onChange={(e) => setIsNightPickup(e.target.checked)}
                      className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                    />
                    <span>Night Departure (11 PM - 5 AM, +{selectedVehicle.nightCharge})</span>
                  </label>
                  <p className="text-[11px] text-gray-500 italic">
                    Night window allows clear highway and arrival in Goa by 8 AM - 10 AM.
                  </p>
                </div>
              </div>

              {/* Pickup & Drop Points */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">3. Pickup & Goa Drop Point</label>
                <div className="space-y-2">
                  <div>
                    <span className="text-[11px] text-gray-500 block mb-1">Mumbai Pickup Area</span>
                    <select
                      value={selectedMumbaiZone}
                      onChange={(e) => setSelectedMumbaiZone(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 font-medium focus:border-primary focus:outline-none"
                    >
                      <option>Western Suburbs (Bandra, Andheri, Borivali)</option>
                      <option>South & Central Mumbai (Dadar, Colaba, Chembur)</option>
                      <option>Mumbai Airport T1 & T2 (60 min free waiting)</option>
                      <option>Thane District (Thane City, Kalyan, Dombivli)</option>
                      <option>Navi Mumbai & Panvel (Vashi, Kharghar, Panvel)</option>
                    </select>
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-500 block mb-1">Goa Drop Zone</span>
                    <select
                      value={selectedGoaZone}
                      onChange={(e) => setSelectedGoaZone(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs text-gray-800 font-medium focus:border-primary focus:outline-none"
                    >
                      <option>North Goa (Calangute, Baga, Anjuna, Candolim)</option>
                      <option>South Goa (Palolem, Colva, Benaulim, Cavelossim)</option>
                      <option>Central Goa (Panaji, Old Goa, Margao, Vasco)</option>
                      <option>Goa Airport (Dabolim / MOPA North Goa)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Fare Display & Booking Trigger */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-navy p-4 text-white">
              <div>
                <div className="text-xs text-sky-200">Estimated Total Fare ({tripType === "oneway" ? "One-Way Fixed" : "Round Trip"})</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                  ₹{calculatedFare.toLocaleString("en-IN")}
                </div>
                <div className="text-xs text-gray-300">
                  {selectedVehicle.carType} • NH66 Tolls Included • Door-to-Door Service
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => openBooking(`Mumbai to Goa Cab (${selectedVehicle.carType}) - ${selectedMumbaiZone} to ${selectedGoaZone}`)}
                  className="rounded-xl bg-amber-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-navy hover:bg-amber-400 transition-colors shadow"
                >
                  Confirm Cab
                </button>
                <a
                  href={waLink(
                    `Hi Swaraj Travel, I would like to book a Mumbai to Goa cab (${selectedVehicle.carType}) from ${selectedMumbaiZone} to ${selectedGoaZone}. Trip: ${tripType === "oneway" ? "One-Way" : "Round Trip"}${isNightPickup ? " (Night Pickup)" : ""}. Please confirm availability and fare.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Instant WhatsApp Confirmation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT BODY */}
      <main className="mx-auto max-w-[1080px] px-4 sm:px-6 pt-12 space-y-16">
        {/* SECTION: FARE */}
        <section id="fare" className="scroll-mt-20">
          {/* H2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Mumbai to Goa Cab Fare and Price Breakdown
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            You deserve to know your complete fare before you confirm your booking, not after. Below is our full one-way fare structure for a Mumbai to Goa cab. Every charge is listed. Nothing is hidden.
          </p>

          {/* Image 2 — Fare Section (Placed ABOVE the fare table) */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full max-h-[420px]">
              <Image
                src="/images/mumbai-to-goa-cab-fare-price-breakdown-swaraj-travel.webp"
                alt="Mumbai to Goa cab fare breakdown by car type showing sedan SUV and Innova Crysta pricing with toll charges included"
                title="Mumbai to Goa Cab Price — Transparent Fare Table by Swaraj Travel"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <p className="text-sm font-semibold">
                  Visual showing car type options with fare labels — hatchback, sedan, SUV, Innova — representing transparent one-way cab pricing from Mumbai to Goa.
                </p>
              </div>
            </div>
          </div>

          {/* H3: One-Way Mumbai to Goa Cab Fare by Car Type */}
          <div className="mt-10">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              One-Way Mumbai to Goa Cab Fare by Car Type
            </h3>

            {/* TABLE (fare table — 5 car types) */}
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-sm text-gray-800">
                <thead className="bg-navy text-xs uppercase tracking-wider text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Car Type</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">One-Way Fare</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Seats</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Luggage Bags</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Tolls</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Extra KM Rate</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Night Charge (11 PM - 5 AM)</th>
                    <th scope="col" className="px-4 py-3.5 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {GOA_FARES.map((car) => (
                    <tr key={car.id} className="hover:bg-sky-50/40 transition-colors">
                      <td className="px-4 py-3.5 font-bold text-navy">
                        <div className="flex items-center gap-1.5">
                          <span>{car.carType}</span>
                          {car.popular && (
                            <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-extrabold uppercase text-amber-800">
                              Popular
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 font-extrabold text-primary text-base">
                        {car.oneWayFareStr}
                      </td>
                      <td className="px-4 py-3.5 text-gray-600">{car.seats}</td>
                      <td className="px-4 py-3.5 text-gray-600">{car.luggage}</td>
                      <td className="px-4 py-3.5 font-medium text-emerald-700">{car.tolls}</td>
                      <td className="px-4 py-3.5 text-gray-600">{car.extraKmRate}</td>
                      <td className="px-4 py-3.5 text-gray-600">{car.nightCharge}</td>
                      <td className="px-4 py-3.5 text-xs text-gray-700">{car.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note block (state permit note) */}
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-xs sm:text-sm text-amber-900">
              <strong>Important note on charges:</strong> Fares above are one-way fixed fares. The Maharashtra to Goa interstate state permit fee is charged at actuals and is a government levy outside any cab operator&apos;s control. We inform you of this separately at the time of booking confirmation, before you pay anything.
            </div>
          </div>

          {/* H3: What Is Included in Your Mumbai to Goa Cab Fare */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50/50 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              What Is Included in Your Mumbai to Goa Cab Fare
            </h3>

            {/* Two-column list (Included / Not Included) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Column 1: Included */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base border-b border-emerald-200 pb-2">
                  <CheckIcon className="h-5 w-5 text-emerald-600" />
                  <span>Included:</span>
                </div>
                <ul className="mt-3 space-y-2.5 text-sm text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>Full fuel cost for the one-way Mumbai to Goa journey</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>Driver charges for the complete trip</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>Toll charges applicable on the NH66 route</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>One well-maintained, clean, air-conditioned vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>Driver name, mobile number, and vehicle number sent 2 hours before pickup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>24/7 WhatsApp and call support throughout your trip</span>
                  </li>
                </ul>
              </div>

              {/* Column 2: Not Included */}
              <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-5">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base border-b border-amber-200 pb-2">
                  <TagIcon className="h-5 w-5 text-amber-700" />
                  <span>Not included:</span>
                </div>
                <ul className="mt-3 space-y-2.5 text-sm text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span>Maharashtra to Goa interstate state permit fee (charged at actuals, communicated clearly before booking confirmation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span>Waiting time beyond 15 minutes at standard pickup locations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span>Waiting time beyond 60 minutes at Mumbai Airport pickup (60 minutes free waiting from flight landing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span>Night allowance for pickups between 11 PM and 5 AM (shown separately in the fare table above)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span>Route detours or additional stops agreed after the booking is confirmed</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              There are no platform fees, no booking commissions, and no surprise GST additions. Swaraj Travel operates on a direct booking model, which is exactly why our fares are honest and straightforward.
            </p>
          </div>

          {/* H3: One-Way vs Round Trip Mumbai to Goa Cab */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              One-Way vs Round Trip Mumbai to Goa Cab
            </h3>
            <div className="mt-4 space-y-3 text-base text-gray-700 leading-relaxed">
              <p>
                <strong>Choose a one-way booking if:</strong> You are returning by flight, train, or Konkan Railway. Your return date is not fixed. You are relocating. You pay only for the trip you actually need.
              </p>
              <p>
                <strong>Choose a round trip booking if:</strong> You want a guaranteed confirmed cab for your return to Mumbai. Round trip bookings include the driver&apos;s Goa stay allowance for the duration of your visit. For stays longer than 3 to 4 days in Goa, two separate one-way bookings often work out more economical. Message us on WhatsApp and we will tell you honestly which option saves you more money for your specific travel dates.
              </p>
              <p className="text-sm text-gray-600 italic">
                For travel during Christmas, New Year, Diwali, and summer holidays (April to June), we recommend booking at least 3 to 5 days in advance to secure your preferred vehicle and fare.
              </p>
            </div>

            {/* CTA BLOCK: Get Fare on WhatsApp */}
            <div className="mt-6">
              <a
                href={waLink("Hi Swaraj Travel, I would like to get my exact fare for Mumbai to Goa cab on [travel date].")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Get My Exact Fare</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: CAR SELECTION */}
        <section id="car-selection" className="scroll-mt-20">
          {/* H2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Choose the Right Cab for Your Mumbai to Goa Trip
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            The right car turns a 595 km journey into a comfortable experience. The wrong car makes it a long and cramped one. Here is a simple guide to help you choose.
          </p>

          {/* H3: Car Selection Guide by Traveler Type */}
          <div className="mt-8">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Car Selection Guide by Traveler Type
            </h3>

            {/* TABLE (traveler type -> car -> why) */}
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-sm text-gray-800">
                <thead className="bg-navy text-xs uppercase tracking-wider text-white">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Who Is Traveling</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Recommended Car</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Why It Works</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {CAR_SELECTION_GUIDE.map((row, idx) => (
                    <tr
                      key={row.who}
                      onClick={() => setCarGuideIndex(idx)}
                      className={`cursor-pointer transition-colors ${
                        carGuideIndex === idx ? "bg-sky-50 font-medium" : "hover:bg-gray-50"
                      }`}
                    >
                      <td className="px-5 py-3.5 font-bold text-navy">{row.who}</td>
                      <td className="px-5 py-3.5 font-semibold text-primary">{row.car}</td>
                      <td className="px-5 py-3.5 text-gray-600">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Honest tip paragraph */}
            <div className="mt-5 rounded-2xl border-l-4 border-primary bg-amber-50/70 p-5 text-sm text-gray-800 leading-relaxed">
              <span className="font-bold text-navy block mb-1">One honest tip:</span>
              Four people with full Goa luggage including trolley bags, beach gear, and a cooler in a standard hatchback means a tight and tiring 10-hour drive. An Innova Crysta costs slightly more but the comfort difference on a 595 km journey is significant. We always tell our customers this before they confirm, so they travel comfortably rather than regret the car choice on the road.
            </div>

            {/* CTA BLOCK: Ask on WhatsApp */}
            <div className="mt-6">
              <a
                href={waLink("Hi Swaraj Travel, I need help deciding which car is right for our group travelling from Mumbai to Goa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Chat With Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: ROUTE GUIDE */}
        <section id="route-guide" className="scroll-mt-20">
          {/* H2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Mumbai to Goa Route Guide via NH66
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            The drive from Mumbai to Goa is one of the finest road journeys in India. NH66, the coastal highway, takes you along the Konkan shoreline, past the Vashishthi River at Chiplun, through Alphonso mango country in Ratnagiri, and across the famous Sawantwadi belt before arriving in Goa. For many of our customers, the journey becomes as memorable as the destination.
          </p>

          {/* H3: The Road from Mumbai to Goa — Stage by Stage */}
          <div className="mt-8">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              The Road from Mumbai to Goa — Stage by Stage
            </h3>

            {/* Distance + time stat block */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 text-navy">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700">Total Highway Distance</div>
                <div className="text-2xl font-extrabold mt-1">Approximately 595 km</div>
                <div className="text-xs text-gray-600 mt-1">Via NH66 scenic Konkan coastal corridor</div>
              </div>
              <div className="rounded-xl border border-sky-200 bg-sky-50/60 p-4 text-navy">
                <div className="text-xs font-bold uppercase tracking-wider text-sky-700">Total Driving Time</div>
                <div className="text-2xl font-extrabold mt-1">10 to 12 hours</div>
                <div className="text-xs text-gray-600 mt-1">Including 1 to 2 short break and meal stops</div>
              </div>
            </div>

            {/* Route list (Mumbai -> Goa) */}
            <div className="mt-4 rounded-xl bg-gray-50 border border-gray-200 p-4 text-xs sm:text-sm text-gray-800 leading-relaxed">
              <span className="font-bold text-navy block mb-1">Complete Route:</span>
              Mumbai → Khopoli → Panvel → Pen → Mangaon → Mahad → Poladpur → Chiplun → Lote → Ratnagiri → Kankavli → Sawantwadi → Goa Border → Your Goa Drop Point
            </div>

            {/* Stage breakdown (5 stages) */}
            <div className="mt-5 space-y-3">
              {GOA_ROUTE_STAGES.map((st, idx) => (
                <div
                  key={st.title}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all ${
                    activeStageIndex === idx
                      ? "border-primary bg-sky-50/70 shadow-xs"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-navy text-sm sm:text-base">
                      Stage {idx + 1}: {st.title} ({st.distance})
                    </span>
                    <span className="text-xs text-gray-500 font-medium">Stage {idx + 1} of 5</span>
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-gray-700">{st.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image 3 — Route Section (Between stage breakdown and stops table) */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full max-h-[460px]">
              <Image
                src="/images/mumbai-to-goa-road-route-nh66-map-stops-swaraj-travel.webp"
                alt="Mumbai to Goa road route map via NH66 showing waypoints Panvel Mahad Chiplun Ratnagiri Sawantwadi and Goa border"
                title="Mumbai to Goa Route Map via NH66 — Swaraj Travel Cab Service with Stop Guide"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <p className="text-sm font-semibold">
                  Illustrated route map showing the Mumbai to Goa NH66 coastal highway path with marked waypoints including Mahad, Chiplun, Ratnagiri, Kankavli, and Sawantwadi, used by Swaraj Travel cabs.
                </p>
              </div>
            </div>
          </div>

          {/* H3: Best Stops on the Mumbai to Goa Road Trip */}
          <div className="mt-12">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Best Stops on the Mumbai to Goa Road Trip
            </h3>

            {/* TABLE (stop / distance / activity / time) */}
            <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-sm text-gray-800">
                <thead className="bg-navy text-xs uppercase tracking-wider text-white">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Stop</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Distance from Mumbai</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">What to Do</th>
                    <th scope="col" className="px-5 py-3.5 font-semibold">Recommended Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {GOA_ROAD_TRIP_STOPS.map((st, idx) => (
                    <tr
                      key={st.stop}
                      onClick={() => setActiveStopIndex(idx)}
                      className={`cursor-pointer transition-colors ${
                        activeStopIndex === idx ? "bg-amber-50 font-medium" : "hover:bg-gray-50"
                      }`}
                    >
                      <td className="px-5 py-3.5 font-bold text-navy">{st.stop}</td>
                      <td className="px-5 py-3.5 text-gray-600">{st.distance}</td>
                      <td className="px-5 py-3.5 text-gray-700">{st.whatToDo}</td>
                      <td className="px-5 py-3.5 font-semibold text-primary">{st.recommendedTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              Our drivers are familiar with the best clean dhabas and rest stops along this entire stretch. You do not need to research pit stops in advance. Ask your driver after boarding and they will guide you from experience.
            </p>
          </div>

          {/* H3: Best Time to Leave Mumbai for Your Goa Cab Trip */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50/60 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Best Time to Leave Mumbai for Your Goa Cab Trip
            </h3>

            {/* 3 departure windows (styled highlight boxes) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4">
                <span className="rounded bg-emerald-200 px-2 py-0.5 text-[10px] font-extrabold uppercase text-emerald-900">
                  Ideal Window
                </span>
                <div className="text-base font-bold text-navy mt-2">4 AM to 5 AM</div>
                <p className="mt-1.5 text-xs text-gray-700 leading-relaxed">
                  Mumbai roads are clear, Panvel and Khopoli traffic is non-existent, and you reach Goa between 3 PM and 5 PM with full daylight to check in and head to the beach before sunset.
                </p>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4">
                <span className="rounded bg-blue-200 px-2 py-0.5 text-[10px] font-extrabold uppercase text-blue-900">
                  Overnight Option
                </span>
                <div className="text-base font-bold text-navy mt-2">10 PM to 11 PM</div>
                <p className="mt-1.5 text-xs text-gray-700 leading-relaxed">
                  Lighter traffic throughout the entire route. You arrive in Goa between 8 AM and 10 AM, fresh and ready to check in. This works especially well for families traveling with children who sleep comfortably in the car.
                </p>
              </div>

              <div className="rounded-xl border border-red-200 bg-red-50/50 p-4">
                <span className="rounded bg-red-200 px-2 py-0.5 text-[10px] font-extrabold uppercase text-red-900">
                  Avoid This Window
                </span>
                <div className="text-base font-bold text-navy mt-2">7 AM to 10 AM</div>
                <p className="mt-1.5 text-xs text-gray-700 leading-relaxed">
                  The Panvel and Khopoli stretch sees significant traffic during morning hours on both weekdays and weekends. This window routinely adds 1 to 2 hours to your total journey.
                </p>
              </div>
            </div>

            {/* Monsoon note paragraph */}
            <div className="mt-5 rounded-xl bg-white border border-gray-200 p-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <strong>Monsoon travel (June to September):</strong> NH66 is breathtaking during the rains. Waterfalls appear on both sides of the road and the Konkan greenery is at its finest. Journey time may extend by 1 to 2 hours due to reduced visibility. Our drivers are experienced with monsoon conditions on this specific highway.
            </div>

            {/* CTA BLOCK: Plan My Trip */}
            <div className="mt-6">
              <a
                href={waLink("Hi Swaraj Travel, I need help planning our departure time for a Mumbai to Goa cab trip.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-slate-800 transition-colors"
              >
                <ClockIcon className="h-4 w-4 text-amber-400" />
                <span>Plan My Trip</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: SAFETY */}
        <section id="safety" className="scroll-mt-20">
          {/* H2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Is It Safe to Travel Mumbai to Goa by Cab?
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Yes. Mumbai to Goa by cab is safe when you travel with the right service. Here is exactly what Swaraj Travel does to ensure your 595 km journey is as safe as it is comfortable.
          </p>

          {/* Image 4 — Safety Section */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full max-h-[460px]">
              <Image
                src="/images/swaraj-travel-verified-driver-mumbai-to-goa-cab-safe-journey.webp"
                alt="Swaraj Travel verified and ghat-experienced driver for safe Mumbai to Goa cab night travel on NH66 coastal highway"
                title="Verified Driver for Mumbai to Goa Cab — Swaraj Travel Safety Standard"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <p className="text-sm font-semibold">
                  Professional Swaraj Travel driver in uniform seated in a clean, well-maintained cab, representing the verified driver safety standard for Mumbai to Goa outstation trips.
                </p>
              </div>
            </div>
          </div>

          {/* H3: Night Travel from Mumbai to Goa by Cab */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Night Travel from Mumbai to Goa by Cab
            </h3>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              Night departures between 10 PM and 11 PM are one of the most popular choices for the Mumbai to Goa trip. NH66 is a national highway with consistent lighting across most of its length. Night traffic is significantly lighter than daytime, which means your driver maintains a steady, comfortable pace without highway congestion. Swaraj Travel assigns only experienced long-distance drivers for overnight departures.
            </p>

            {/* Bullet list (safety measures) */}
            <div className="mt-5 rounded-xl bg-gray-50 border border-gray-200 p-5">
              <div className="text-xs font-bold text-navy uppercase tracking-wider mb-2">What we provide for your safety during night travel:</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Driver name, vehicle number, and mobile number sent 2 hours before pickup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Direct driver contact throughout the journey from the moment of assignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>24/7 WhatsApp and call support reachable for the entire duration of your trip</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Option to share live location with a family member before departure, your driver will help you set this up</span>
                </li>
              </ul>
            </div>

            {/* Solo women traveler note */}
            <div className="mt-4 rounded-xl border border-purple-200 bg-purple-50/50 p-4 text-xs sm:text-sm text-purple-900 leading-relaxed">
              <strong>For solo women travelers:</strong> Save our WhatsApp support number and share your driver details (sent to you before pickup) with a trusted contact before you depart. Our support team responds within minutes at any hour of the night.
            </div>
          </div>

          {/* H3: Our Driver Verification and Selection Process */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Our Driver Verification and Selection Process
            </h3>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              Swaraj Travel has completed 50,000+ trips with background-verified drivers. Every driver on our network is screened before their first trip assignment. For long-distance outstation routes like Mumbai to Goa, our selection goes further.
            </p>

            {/* Bullet list (selection criteria) */}
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div className="font-bold text-navy">Our Mumbai to Goa drivers are selected for:</div>
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>Experience on long-distance routes of 500 km and above</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>Familiarity with NH66 including Konkan coastal stretches, ghat sections near Mahad and Poladpur, and river bridge approaches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>Knowledge of safe pacing across a 10 to 12 hour drive with mandatory break intervals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>Experience driving in monsoon and low-visibility conditions on the coastal highway</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>Professional, respectful communication with families and solo travelers</span>
                </li>
              </ul>
            </div>

            {/* Real customer quote block */}
            <blockquote className="mt-5 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/50 p-4 text-sm font-medium italic text-emerald-950">
              &ldquo;Long trip but very comfortable. Driver was experienced on ghats and drove safely. Family enjoyed a lot.&rdquo;
              <span className="block mt-1 text-xs font-normal not-italic text-emerald-800">
                — Verified Customer Feedback on Ghat Route
              </span>
            </blockquote>

            {/* Vehicle maintenance note */}
            <p className="mt-4 text-xs sm:text-sm text-gray-600">
              All 120+ vehicles in our fleet are regularly maintained with AC, tyres, brakes, and fuel checked before every long-distance departure.
            </p>
          </div>

          {/* H3: What Happens If Something Goes Wrong During Your Journey? */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50/60 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              What Happens If Something Goes Wrong During Your Journey?
            </h3>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              This is the question every traveler thinks about and almost no cab service answers honestly. We will.
            </p>

            {/* 3 scenario blocks (Breakdown / Driver unwell / Any concern) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-xs font-bold uppercase text-primary">Scenario 1</div>
                <div className="text-sm font-bold text-navy mt-1">Vehicle Mechanical Issue</div>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  Contact our 24/7 support team immediately on WhatsApp or call. We coordinate roadside assistance and arrange an alternate vehicle to continue your journey from where you stopped. You will not be left on the highway without a clear point of contact and a resolution.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-xs font-bold uppercase text-primary">Scenario 2</div>
                <div className="text-sm font-bold text-navy mt-1">Driver Becomes Unwell</div>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  We arrange a replacement driver from the nearest available location in our network. This is rare, but our response protocol is clear and our support team handles it from start to finish.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-xs font-bold uppercase text-primary">Scenario 3</div>
                <div className="text-sm font-bold text-navy mt-1">Any Question or Update</div>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">
                  Our team responds within minutes. You have your driver&apos;s direct number, our WhatsApp number, and our call line, all available throughout your journey.
                </p>
              </div>
            </div>

            {/* CTA BLOCK: Book Safe Cab */}
            <div className="mt-6">
              <button
                type="button"
                onClick={() => openBooking("Mumbai to Goa Verified Safe Cab")}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-navy shadow hover:bg-amber-400 transition-colors"
              >
                <ShieldIcon className="h-4 w-4" />
                <span>Book a Safe Goa Cab</span>
              </button>
            </div>
          </div>
        </section>

        {/* SECTION: HOW TO BOOK */}
        <section id="how-to-book" className="scroll-mt-20">
          {/* H2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            How to Book Your Mumbai to Goa Cab with Swaraj Travel
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            No app to download. No account to create. No long forms. No IVR queue. Swaraj Travel runs on the simplest and fastest booking channel available: WhatsApp, the app you already use every day.
          </p>

          {/* Image 5 — How to Book Section */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full max-h-[460px]">
              <Image
                src="/images/swaraj-travel-whatsapp-cab-booking-mumbai-to-goa-step-by-step.webp"
                alt="WhatsApp cab booking process for Mumbai to Goa trip with Swaraj Travel showing instant confirmation steps"
                title="Book Mumbai to Goa Cab on WhatsApp — Instant Confirmation by Swaraj Travel"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <p className="text-sm font-semibold">
                  Visual showing a mobile phone with WhatsApp open, illustrating the 2-minute Mumbai to Goa cab booking process offered by Swaraj Travel with instant WhatsApp confirmation.
                </p>
              </div>
            </div>
          </div>

          {/* H3: Step-by-Step Booking Process */}
          <div className="mt-8">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Step-by-Step Booking Process
            </h3>

            {/* Numbered steps (Step 1 to Step 5) */}
            <div className="mt-6 space-y-3">
              {[
                {
                  step: 1,
                  title: "Send us your trip details on WhatsApp",
                  desc: "Share your travel date, pickup area in Mumbai, preferred car type, and Goa drop location.",
                },
                {
                  step: 2,
                  title: "Receive your confirmed fare",
                  desc: "We send you the exact fixed fare for your trip, with all inclusions clearly mentioned, within minutes.",
                },
                {
                  step: 3,
                  title: "Confirm your booking",
                  desc: "Reply with a simple confirmation. Your cab is held immediately. No advance payment is required to lock in your booking.",
                },
                {
                  step: 4,
                  title: "Receive your driver details",
                  desc: "Two hours before your pickup time, we send you your driver's name, direct mobile number, and vehicle registration number.",
                },
                {
                  step: 5,
                  title: "Start your journey",
                  desc: "Your driver arrives at your doorstep at the agreed time. You have the driver's direct number from the moment of assignment.",
                },
              ].map((s) => (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all flex items-start gap-4 ${
                    activeStep === s.step
                      ? "border-primary bg-sky-50/70 shadow-xs"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    {s.step}
                  </span>
                  <div>
                    <div className="text-sm sm:text-base font-bold text-navy">
                      Step {s.step} — {s.title}
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* One-line summary sentence */}
            <p className="mt-4 text-sm font-bold text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
              The entire booking process takes under 2 minutes.
            </p>

            {/* CTA BLOCK: Start My Booking */}
            <div className="mt-6">
              <a
                href={waLink("Hi Swaraj Travel, I want to start my Mumbai to Goa cab booking right now.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Start My Booking</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION: PICKUP ZONES */}
        <section id="pickup-zones" className="scroll-mt-20">
          {/* H2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Pickup Zones in Mumbai We Cover
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Your Swaraj Travel cab comes to your address. You do not need to travel to a taxi stand, railway station, or hub.
          </p>

          <div className="mt-6 space-y-6">
            {/* H3: Mumbai City and Western Suburbs */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-navy">
                Mumbai City and Western Suburbs
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Andheri, Bandra, Borivali, Kandivali, Malad, Goregaon, Vile Parle, Santacruz, Jogeshwari, Dahisar, Mira Road, Virar, Bhayander
              </p>
            </div>

            {/* H3: Central Mumbai and Eastern Suburbs */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-navy">
                Central Mumbai and Eastern Suburbs
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Dadar, Parel, Lower Parel, Kurla, Chembur, Ghatkopar, Mulund, Bhandup, Vikhroli, Powai
              </p>
            </div>

            {/* H3: Mumbai Airport Pickup */}
            <div className="rounded-xl border border-sky-200 bg-sky-50/50 p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-navy">
                Mumbai Airport Pickup
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Chhatrapati Shivaji Maharaj International Airport — Terminal 1 (T1) and Terminal 2 (T2) both fully covered. 60 minutes free waiting time from your flight landing. Book your dedicated{" "}
                <Link href="/services" className="font-semibold text-primary underline underline-offset-4 hover:text-navy">
                  Mumbai airport cab
                </Link>{" "}
                for a seamless landing-to-Goa transfer.
              </p>
            </div>

            {/* H3: Thane District */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-navy">
                Thane District
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Thane City, Kalyan, Dombivli, Ambernath, Badlapur, Titwala, Ulhasnagar
              </p>
            </div>

            {/* H3: Navi Mumbai and Panvel */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-navy">
                Navi Mumbai and Panvel
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Vashi, Belapur, Kharghar, Nerul, Airoli, Ghansoli, Panvel, Kamothe, Ulwe, Taloja
              </p>
              <p className="mt-3 text-xs italic text-gray-500">
                If your exact location is not listed, send us a WhatsApp message. We confirm pickup availability for any Mumbai location within minutes.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: GOA DROPS */}
        <section id="goa-drops" className="scroll-mt-20">
          {/* H2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Drop Locations We Cover in Goa
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            We drop you at your exact Goa destination. No last-mile auto-rickshaw hunt, no shared taxi from a highway point.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* H3: North Goa */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-navy">
                North Goa
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Calangute, Baga, Anjuna, Vagator, Mapusa, Candolim, Sinquerim, Morjim, Arambol, Pernem, Siolim
              </p>
            </div>

            {/* H3: South Goa */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-navy">
                South Goa
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Palolem, Colva, Benaulim, Agonda, Cavelossim, Varca, Betalbatim, Cabo de Rama area, Canacona
              </p>
            </div>

            {/* H3: Central Goa and City Areas */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-navy">
                Central Goa and City Areas
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Panjim (Panaji), Old Goa, Margao, Vasco da Gama, Cortalim, Ponda, Pilar
              </p>
            </div>

            {/* H3: Goa Transport Hubs */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-navy">
                Goa Transport Hubs
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Goa International Airport (Dabolim), Manohar International Airport (North Goa), Madgaon Railway Station, Vasco da Gama Railway Station
              </p>
            </div>
          </div>

          {/* CTA BLOCK: Confirm Drop Point */}
          <div className="mt-6">
            <a
              href={waLink("Hi Swaraj Travel, I am travelling to a specific hotel in Goa. Can you confirm the exact drop point?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-emerald-700 transition-colors"
            >
              <PinIcon className="h-4 w-4" />
              <span>Confirm My Drop Point</span>
            </a>
          </div>
        </section>

        {/* SECTION: COMPARISON */}
        <section id="comparison" className="scroll-mt-20">
          {/* H2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Mumbai to Goa Cab vs Train vs Bus vs Flight
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Not sure which mode of transport suits your trip best? Here is an honest side-by-side comparison.
          </p>

          {/* TABLE (5 modes compared across 6 dimensions) */}
          <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm text-gray-800">
              <thead className="bg-navy text-xs uppercase tracking-wider text-white">
                <tr>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Mode</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Approx. Cost</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Travel Time</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Door-to-Door</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Flexibility</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {TRANSPORT_COMPARISON.map((row) => (
                  <tr
                    key={row.mode}
                    className={row.highlight ? "bg-amber-50/70 font-semibold" : "hover:bg-gray-50 transition-colors"}
                  >
                    <td className="px-4 py-3.5 font-bold text-navy">
                      <div className="flex items-center gap-1.5">
                        <span>{row.mode}</span>
                        {row.highlight && (
                          <span className="rounded bg-amber-200 px-1.5 py-0.5 text-[10px] font-bold text-navy">
                            Best Value
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3.5 font-bold text-primary">{row.cost}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.time}</td>
                    <td className="px-4 py-3.5 text-gray-700">{row.doorToDoor}</td>
                    <td className="px-4 py-3.5 text-gray-700">{row.flexibility}</td>
                    <td className="px-4 py-3.5 text-xs text-gray-700">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* "When cab wins" bullet list below table */}
          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50/70 p-5">
            <div className="font-bold text-navy text-sm sm:text-base mb-2">When a private cab is the clear, practical choice:</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>You are traveling with children or elderly family members who need flexibility and comfort</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Your group has more luggage than flight baggage allowances permit</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>You want to stop at Chiplun, Ratnagiri, or any scenic point along the way</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>You are departing from a Mumbai suburb where getting to the airport takes 1.5 to 2 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>You want genuine door-to-door service with no connecting stress at either end of the journey</span>
              </li>
            </ul>
            <p className="mt-3 text-xs sm:text-sm font-medium text-navy">
              For a group of 4 or more, splitting a cab fare often works out equal to or cheaper than individual last-minute train tickets, with complete flexibility and comfort built in. Also exploring other routes? Check our popular{" "}
              <Link href="/mumbai-to-pune-cab" className="font-semibold text-primary underline underline-offset-4 hover:text-navy">
                Mumbai to Pune cab
              </Link>{" "}
              and comprehensive{" "}
              <Link href="/outstation" className="font-semibold text-primary underline underline-offset-4 hover:text-navy">
                outstation cabs from Mumbai
              </Link>.
            </p>
          </div>
        </section>

        {/* SECTION: REVIEWS */}
        <section id="reviews" className="scroll-mt-20">
          {/* H2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            What Our Customers Say About Swaraj Travel
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Real reviews from real riders. No edits, no filters.
          </p>

          {/* Image 6 — Reviews Section */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] sm:aspect-[2.5/1] w-full max-h-[340px]">
              <Image
                src="/images/swaraj-travel-50000-happy-riders-mumbai-cab-service-reviews.webp"
                alt="Swaraj Travel 50000 happy riders customer reviews for Mumbai outstation and Goa cab service"
                title="50,000+ Happy Riders — Swaraj Travel Customer Reviews for Mumbai to Goa Cab"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
            </div>
          </div>

          {/* 6x Review Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {GOA_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-sky-300 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(rev.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="text-xs sm:text-sm font-medium italic text-gray-800 leading-relaxed">
                    &ldquo;{rev.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="mt-4 border-t border-gray-100 pt-3 text-xs">
                  <div className="font-bold text-navy">— {rev.author}</div>
                  <div className="text-[11px] text-gray-500">{rev.route}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA BLOCK: Book My Goa Cab */}
          <div className="mt-6">
            <button
              type="button"
              onClick={() => openBooking("Mumbai to Goa Cab Booking")}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-navy shadow hover:bg-amber-400 transition-colors"
            >
              <TaxiIcon className="h-4 w-4" />
              <span>Book My Goa Cab</span>
            </button>
          </div>
        </section>

        {/* SECTION: FAQ */}
        <section id="faq" className="scroll-mt-20">
          {/* H2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Frequently Asked Questions About Mumbai to Goa Cab
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Find immediate answers regarding Mumbai to Goa cab fares, NH66 route, night travel, cancellation, luggage capacity, and WhatsApp booking.
          </p>

          {/* Search bar & quick filter pills */}
          <div className="mt-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search Goa cab questions (e.g. fare, tolls, night travel, breaks)..."
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

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setFaqCategory("all")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  faqCategory === "all" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All (19)
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("distance")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  faqCategory === "distance" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Distance & Route (3)
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("fare")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  faqCategory === "fare" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Fare & Pricing (4)
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("booking")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  faqCategory === "booking" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Booking Process (3)
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("safety")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  faqCategory === "safety" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Safety & Drivers (3)
              </button>
              <button
                type="button"
                onClick={() => setFaqCategory("car")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  faqCategory === "car" ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Car & Trip (6)
              </button>
            </div>
          </div>

          {/* Group 1: H3 - Distance, Route, and Travel Time */}
          {(faqCategory === "all" || faqCategory === "distance") && (
            <div className="mt-8">
              <h3 className="font-display text-lg font-bold text-navy border-b border-gray-200 pb-2">
                Distance, Route, and Travel Time
              </h3>
              <div className="mt-3 space-y-3">
                {GOA_FAQS.filter((f) => f.category === "distance" && (!faqQuery || f.question.toLowerCase().includes(faqQuery.toLowerCase()) || f.answer.toLowerCase().includes(faqQuery.toLowerCase()))).map((faq) => {
                  const isOpen = !!expandedFaqs[faq.question];
                  return (
                    <div key={faq.question} className="rounded-xl border border-gray-200 bg-white shadow-xs overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.question)}
                        className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-navy hover:bg-sky-50/40 transition-colors"
                      >
                        <span className="text-sm sm:text-base">{faq.question}</span>
                        {isOpen ? <ChevronUpIcon className="h-5 w-5 text-primary shrink-0" /> : <ChevronDownIcon className="h-5 w-5 text-gray-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="border-t border-gray-100 bg-gray-50/50 p-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Group 2: H3 - Fare, Pricing, and Charges */}
          {(faqCategory === "all" || faqCategory === "fare") && (
            <div className="mt-8">
              <h3 className="font-display text-lg font-bold text-navy border-b border-gray-200 pb-2">
                Fare, Pricing, and Charges
              </h3>
              <div className="mt-3 space-y-3">
                {GOA_FAQS.filter((f) => f.category === "fare" && (!faqQuery || f.question.toLowerCase().includes(faqQuery.toLowerCase()) || f.answer.toLowerCase().includes(faqQuery.toLowerCase()))).map((faq) => {
                  const isOpen = !!expandedFaqs[faq.question];
                  return (
                    <div key={faq.question} className="rounded-xl border border-gray-200 bg-white shadow-xs overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.question)}
                        className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-navy hover:bg-sky-50/40 transition-colors"
                      >
                        <span className="text-sm sm:text-base">{faq.question}</span>
                        {isOpen ? <ChevronUpIcon className="h-5 w-5 text-primary shrink-0" /> : <ChevronDownIcon className="h-5 w-5 text-gray-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="border-t border-gray-100 bg-gray-50/50 p-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Group 3: H3 - Booking Process */}
          {(faqCategory === "all" || faqCategory === "booking") && (
            <div className="mt-8">
              <h3 className="font-display text-lg font-bold text-navy border-b border-gray-200 pb-2">
                Booking Process
              </h3>
              <div className="mt-3 space-y-3">
                {GOA_FAQS.filter((f) => f.category === "booking" && (!faqQuery || f.question.toLowerCase().includes(faqQuery.toLowerCase()) || f.answer.toLowerCase().includes(faqQuery.toLowerCase()))).map((faq) => {
                  const isOpen = !!expandedFaqs[faq.question];
                  return (
                    <div key={faq.question} className="rounded-xl border border-gray-200 bg-white shadow-xs overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.question)}
                        className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-navy hover:bg-sky-50/40 transition-colors"
                      >
                        <span className="text-sm sm:text-base">{faq.question}</span>
                        {isOpen ? <ChevronUpIcon className="h-5 w-5 text-primary shrink-0" /> : <ChevronDownIcon className="h-5 w-5 text-gray-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="border-t border-gray-100 bg-gray-50/50 p-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Group 4: H3 - Safety and Drivers */}
          {(faqCategory === "all" || faqCategory === "safety") && (
            <div className="mt-8">
              <h3 className="font-display text-lg font-bold text-navy border-b border-gray-200 pb-2">
                Safety and Drivers
              </h3>
              <div className="mt-3 space-y-3">
                {GOA_FAQS.filter((f) => f.category === "safety" && (!faqQuery || f.question.toLowerCase().includes(faqQuery.toLowerCase()) || f.answer.toLowerCase().includes(faqQuery.toLowerCase()))).map((faq) => {
                  const isOpen = !!expandedFaqs[faq.question];
                  return (
                    <div key={faq.question} className="rounded-xl border border-gray-200 bg-white shadow-xs overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.question)}
                        className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-navy hover:bg-sky-50/40 transition-colors"
                      >
                        <span className="text-sm sm:text-base">{faq.question}</span>
                        {isOpen ? <ChevronUpIcon className="h-5 w-5 text-primary shrink-0" /> : <ChevronDownIcon className="h-5 w-5 text-gray-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="border-t border-gray-100 bg-gray-50/50 p-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Group 5: H3 - Car and Trip Questions */}
          {(faqCategory === "all" || faqCategory === "car") && (
            <div className="mt-8">
              <h3 className="font-display text-lg font-bold text-navy border-b border-gray-200 pb-2">
                Car and Trip Questions
              </h3>
              <div className="mt-3 space-y-3">
                {GOA_FAQS.filter((f) => f.category === "car" && (!faqQuery || f.question.toLowerCase().includes(faqQuery.toLowerCase()) || f.answer.toLowerCase().includes(faqQuery.toLowerCase()))).map((faq) => {
                  const isOpen = !!expandedFaqs[faq.question];
                  return (
                    <div key={faq.question} className="rounded-xl border border-gray-200 bg-white shadow-xs overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.question)}
                        className="flex w-full items-center justify-between gap-4 p-4 text-left font-semibold text-navy hover:bg-sky-50/40 transition-colors"
                      >
                        <span className="text-sm sm:text-base">{faq.question}</span>
                        {isOpen ? <ChevronUpIcon className="h-5 w-5 text-primary shrink-0" /> : <ChevronDownIcon className="h-5 w-5 text-gray-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="border-t border-gray-100 bg-gray-50/50 p-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* SECTION: FINAL CTA BLOCK — FULL WIDTH */}
        <section className="rounded-2xl bg-gradient-to-r from-navy via-slate-800 to-navy p-6 sm:p-10 text-white shadow-xl">
          {/* H2 */}
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Book Your Mumbai to Goa Cab?
          </h2>

          {/* Supporting paragraph (2 lines) */}
          <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
            Fixed fare. No hidden charges. Verified driver with ghat experience. WhatsApp booking confirmed in minutes. 50,000+ riders have trusted Swaraj Travel for their journey. Your Goa trip starts here. Pickup from anywhere in Mumbai. Drop anywhere in Goa. Available 24 hours a day, 7 days a week.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {/* WhatsApp CTA Button (primary) */}
            <a
              href={waLink("Hi Swaraj Travel, I am ready to book my Mumbai to Goa cab now.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-emerald-700 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Book My Mumbai to Goa Cab Now</span>
            </a>

            {/* Call CTA Button (secondary) */}
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              <PhoneIcon className="h-4 w-4 text-amber-400" />
              <span>Call to Book ({PHONE_NUMBER})</span>
            </a>
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
            <div>
              <span>Explore More Destinations: </span>
              <Link href="/mumbai-to-pune-cab" className="text-amber-300 underline hover:text-amber-200 mr-3">Mumbai to Pune</Link>
              <Link href="/mumbai-to-nashik-cab" className="text-amber-300 underline hover:text-amber-200 mr-3">Mumbai to Nashik</Link>
              <Link href="/mumbai-to-shirdi-cab" className="text-amber-300 underline hover:text-amber-200 mr-3">Mumbai to Shirdi</Link>
              <Link href="/mumbai-to-mahabaleshwar-cab" className="text-amber-300 underline hover:text-amber-200">Mumbai to Mahabaleshwar</Link>
            </div>
            <div>
              <span>Direct Booking Helpline: </span>
              <a href={`tel:${PHONE_TEL}`} className="text-white font-bold hover:underline">{PHONE_NUMBER}</a>
            </div>
          </div>
        </section>
      </main>
    </article>
  );
}
