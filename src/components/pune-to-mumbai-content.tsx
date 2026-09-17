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
  PUNE_MUMBAI_RATES,
  FLIGHT_TIMING_GUIDE,
  PUNE_REVIEWS,
  PUNE_FAQS,
  PuneRateItem,
} from "@/lib/pune-to-mumbai";

const PHONE_NUMBER = "+91 8830273575";
const PHONE_TEL = "+918830273575";
const WHATSAPP_NUMBER = "918830273575";

function waLink(msg: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function PuneToMumbaiContent() {
  const { openBooking } = useBooking();

  // 1. Interactive Fare Estimator State
  const [selectedVehicleName, setSelectedVehicleName] = useState<string>("Innova Crysta");
  const [estKm, setEstKm] = useState<number>(150);
  const [tripType, setTripType] = useState<"oneway" | "roundtrip" | "hourly">("oneway");
  const [includeToll, setIncludeToll] = useState<boolean>(true);
  const [isNightPickup, setIsNightPickup] = useState<boolean>(false);

  // 2. Rate Card Filter
  const [rateCategoryFilter, setRateCategoryFilter] = useState<"all" | "Hatchback" | "Sedan" | "SUV" | "Bus">("all");

  // 3. Flight Calculator
  const [selectedFlightIndex, setSelectedFlightIndex] = useState<number>(0);

  // 4. FAQ Search and State
  const [faqQuery, setFaqQuery] = useState<string>("");
  const [expandedFaqs, setExpandedFaqs] = useState<Record<string, boolean>>({
    "What is the fare for a Pune to Mumbai cab?": true,
    "Is toll included in the Pune to Mumbai cab fare?": true,
    "Will the cab drop me at Terminal 1 or Terminal 2 of Mumbai airport?": true,
  });

  const selectedVehicle = useMemo(() => {
    return PUNE_MUMBAI_RATES.find((v) => v.vehicle === selectedVehicleName) || PUNE_MUMBAI_RATES[6];
  }, [selectedVehicleName]);

  const filteredRates = useMemo(() => {
    if (rateCategoryFilter === "all") return PUNE_MUMBAI_RATES;
    return PUNE_MUMBAI_RATES.filter((r) => r.category === rateCategoryFilter);
  }, [rateCategoryFilter]);

  // Computed Estimate
  const calculatedEstimate = useMemo(() => {
    const rate = typeof selectedVehicle.ratePerKm === "number" ? selectedVehicle.ratePerKm : 20;
    let distance = estKm;
    if (tripType === "roundtrip") {
      distance = distance * 2;
    }
    let runningFare = distance * rate;
    let toll = includeToll ? (tripType === "roundtrip" ? 800 : 400) : 0;
    let driverFood = tripType === "roundtrip" ? 600 : 300;
    let night = isNightPickup ? 300 : 0;
    return {
      runningFare,
      toll,
      driverFood,
      night,
      total: runningFare + toll + driverFood + night,
    };
  }, [selectedVehicle, estKm, tripType, includeToll, isNightPickup]);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return PUNE_FAQS.filter((faq) => {
      if (!faqQuery) return true;
      return (
        faq.question.toLowerCase().includes(faqQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(faqQuery.toLowerCase())
      );
    });
  }, [faqQuery]);

  const toggleFaq = (q: string) => {
    setExpandedFaqs((prev) => ({ ...prev, [q]: !prev[q] }));
  };

  const expandAllFaqs = () => {
    const all: Record<string, boolean> = {};
    PUNE_FAQS.forEach((f) => (all[f.question] = true));
    setExpandedFaqs(all);
  };

  const collapseAllFaqs = () => {
    setExpandedFaqs({});
  };

  return (
    <article className="min-h-screen bg-white text-gray-900 pb-20">
      {/* 01: Top Banner / Hero Header Section */}
      <header className="relative bg-gradient-to-b from-blue-50/70 via-white to-white border-b border-blue-100/60 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Outstation Cabs</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">Pune to Mumbai Cab Service</span>
          </nav>

          {/* H1 - Exact match per Developer Blueprint */}
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Pune to Mumbai Cab Service
          </h1>

          {/* Intro text */}
          <div className="mt-4 space-y-3 text-base text-gray-700 leading-relaxed md:text-lg">
            <p>
              Swaraj Travel runs Pune to Mumbai cabs around the clock, with one way, round trip and hourly rental options. Our per kilometre rates for all 16 vehicles are published on this page, so you can work out roughly what your trip will cost before you call anyone.
            </p>
            <p>
              Rates start at ₹14 per km for a Swift Dzire and go up to a 32 seat Mini Bus for large groups. Toll, parking and driver food are charged as per actual on top of the running fare, and we tell you exactly what applies before your booking is confirmed.
            </p>
            <p className="text-sm font-semibold text-navy">
              To book, message <a href={`tel:${PHONE_TEL}`} className="text-primary underline hover:text-navy">8830273575</a> on WhatsApp or call the same number.
            </p>
          </div>

          {/* Image 1: IMG-01 Hero (Below H1, loading="eager", fetchpriority="high") */}
          <figure className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-xl">
            <div className="relative aspect-[16/9] w-full max-h-[500px]">
              <Image
                src="/assets/images/routes/pune-to-mumbai/pune-to-mumbai-cab-service.webp"
                alt="Swaraj Travel cab on the Mumbai Pune Expressway for a Pune to Mumbai trip"
                title="Pune to Mumbai Cab Service by Swaraj Travel"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-6 text-white">
                <figcaption className="text-sm sm:text-base font-medium">
                  Hero image of a Swaraj Travel sedan on the Mumbai Pune Expressway, used on the Pune to Mumbai cab service page.
                </figcaption>
              </div>
            </div>
          </figure>

          {/* Quick facts for this route (HTML Table) */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
            <div className="text-base font-bold text-navy mb-3">Quick facts for this route</div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-800">
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <th scope="row" className="py-2.5 pr-4 font-semibold text-gray-900 w-1/3">Road distance</th>
                    <td className="py-2.5 text-gray-700">Around 148 to 150 km via the Expressway</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <th scope="row" className="py-2.5 pr-4 font-semibold text-gray-900">Typical travel time</th>
                    <td className="py-2.5 text-gray-700">3 to 4 hours</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <th scope="row" className="py-2.5 pr-4 font-semibold text-gray-900">Main route</th>
                    <td className="py-2.5 text-gray-700">Mumbai Pune Expressway, also called the Yashwantrao Chavan Expressway</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <th scope="row" className="py-2.5 pr-4 font-semibold text-gray-900">Starting rate</th>
                    <td className="py-2.5 font-bold text-primary">₹14 per km, Swift Dzire</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <th scope="row" className="py-2.5 pr-4 font-semibold text-gray-900">Trip types</th>
                    <td className="py-2.5 text-gray-700">One way, round trip, hourly rental</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <th scope="row" className="py-2.5 pr-4 font-semibold text-gray-900">Availability</th>
                    <td className="py-2.5 text-gray-700">24 hours, every day</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <th scope="row" className="py-2.5 pr-4 font-semibold text-gray-900">Booking</th>
                    <td className="py-2.5 text-gray-700">WhatsApp or call 8830273575</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Group: WhatsApp + Call */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={waLink("Hi Swaraj Travel, I need a cab from Pune to Mumbai. Please share availability and fare.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-emerald-700 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Book on WhatsApp</span>
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-bold text-gray-800 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <PhoneIcon className="h-4 w-4 text-emerald-600" />
              <span>Call 8830273575</span>
            </a>
            <button
              type="button"
              onClick={() => openBooking("Pune to Mumbai Cab Service")}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3.5 text-sm font-bold text-navy hover:bg-amber-400 transition-colors shadow"
            >
              <TaxiIcon className="h-4 w-4" />
              <span>Book Online</span>
            </button>
          </div>

          {/* Interactive Fare Calculator */}
          <div className="mt-8 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 p-5 sm:p-7 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-200/80 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Interactive Expressway Calculator</span>
                <div className="text-lg font-bold text-navy">Calculate Your Pune to Mumbai Trip Cost</div>
              </div>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 rounded-full px-3 py-1">
                Published Per-KM Rates
              </span>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">1. Select Vehicle</label>
                <select
                  value={selectedVehicleName}
                  onChange={(e) => setSelectedVehicleName(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-800 focus:border-primary focus:outline-none"
                >
                  {PUNE_MUMBAI_RATES.map((v) => (
                    <option key={v.vehicle} value={v.vehicle}>
                      {v.vehicle} ({v.ratePerKmStr}/km, {v.seats} seats)
                    </option>
                  ))}
                </select>
                <div className="mt-2 text-xs text-gray-500">
                  Seats: {selectedVehicle.seats} | Bags: {selectedVehicle.luggage} | Fuel: {selectedVehicle.fuel}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">2. Trip Type & Distance</label>
                <div className="grid grid-cols-3 gap-1 mb-2">
                  <button
                    type="button"
                    onClick={() => setTripType("oneway")}
                    className={`rounded-lg py-1.5 text-xs font-bold border transition-all ${
                      tripType === "oneway" ? "bg-navy text-white border-navy" : "bg-white text-gray-700 border-gray-200"
                    }`}
                  >
                    One Way
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType("roundtrip")}
                    className={`rounded-lg py-1.5 text-xs font-bold border transition-all ${
                      tripType === "roundtrip" ? "bg-navy text-white border-navy" : "bg-white text-gray-700 border-gray-200"
                    }`}
                  >
                    Round Trip
                  </button>
                  <button
                    type="button"
                    onClick={() => setTripType("hourly")}
                    className={`rounded-lg py-1.5 text-xs font-bold border transition-all ${
                      tripType === "hourly" ? "bg-navy text-white border-navy" : "bg-white text-gray-700 border-gray-200"
                    }`}
                  >
                    Hourly
                  </button>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-gray-500">Door-to-door est:</span>
                  <input
                    type="number"
                    value={estKm}
                    onChange={(e) => setEstKm(Number(e.target.value) || 150)}
                    min={120}
                    max={250}
                    className="w-16 rounded border border-gray-300 px-1.5 py-0.5 text-xs font-bold text-navy"
                  />
                  <span className="text-gray-500">km</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">3. Extras Options</label>
                <div className="space-y-1.5 text-xs">
                  <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeToll}
                      onChange={(e) => setIncludeToll(e.target.checked)}
                      className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                    />
                    <span>Include Expressway Toll (~₹400)</span>
                  </label>
                  <label className="flex items-center gap-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isNightPickup}
                      onChange={(e) => setIsNightPickup(e.target.checked)}
                      className="rounded border-gray-300 text-primary focus:ring-primary h-4 w-4"
                    />
                    <span>Night Pickup (11 PM - 6 AM, +₹300)</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-navy p-4 text-white">
              <div>
                <div className="text-xs text-blue-200">Total Estimated Bill (Door to Door)</div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                  ₹{calculatedEstimate.total.toLocaleString("en-IN")}
                </div>
                <div className="text-xs text-gray-300 mt-0.5">
                  Running: ₹{calculatedEstimate.runningFare} • Toll: ₹{calculatedEstimate.toll} • Food: ₹{calculatedEstimate.driverFood} {isNightPickup ? "• Night: ₹300" : ""}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => openBooking(`Pune to Mumbai Cab - ${selectedVehicle.vehicle} (${tripType})`)}
                  className="rounded-xl bg-amber-500 px-4 py-2 text-xs sm:text-sm font-bold text-navy hover:bg-amber-400 transition-colors shadow"
                >
                  Book This Vehicle
                </button>
                <a
                  href={waLink(`Hi Swaraj Travel, I would like to book ${selectedVehicle.vehicle} for Pune to Mumbai (${tripType}). Total estimate ₹${calculatedEstimate.total}. Please confirm.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-emerald-600 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-[1080px] px-4 sm:px-6 pt-12 space-y-16">
        {/* SECTION: FARE */}
        <section id="fare" className="scroll-mt-20">
          {/* #2 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Pune to Mumbai Cab Fare and Per KM Rates
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Your fare is built on a per kilometre rate that depends on the vehicle you pick. The rate does not change after booking. Toll, parking and driver food are added as per actual, which we explain in full in the next section.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Here is the complete rate card.
          </p>

          {/* Rate card category filters */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {(["all", "Hatchback", "Sedan", "SUV", "Bus"] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setRateCategoryFilter(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                  rateCategoryFilter === cat ? "bg-navy text-white shadow-xs" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat === "all" ? "All 16 Vehicles" : cat}
              </button>
            ))}
          </div>

          {/* Table: 16 vehicles */}
          <div className="mt-4 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm text-gray-800">
              <thead className="bg-navy text-xs uppercase tracking-wider text-white">
                <tr>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Vehicle</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Category</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Seats</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Luggage</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Fuel</th>
                  <th scope="col" className="px-4 py-3.5 font-semibold">Rate per km</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {filteredRates.map((row) => (
                  <tr key={row.vehicle} className="hover:bg-blue-50/40 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-navy">
                      <div className="flex items-center gap-1.5">
                        <span>{row.vehicle}</span>
                        {row.popular && (
                          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-extrabold uppercase text-amber-800">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-gray-600">{row.category}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.seats}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.luggage}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.fuel}</td>
                    <td className="px-4 py-3.5 font-extrabold text-primary">{row.ratePerKmStr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
            <span>Every vehicle is air conditioned and deep cleaned before the ride.</span>
            <Link href="/fleet" className="font-semibold text-primary underline hover:text-navy">
              view our full fleet
            </Link>
          </div>

          <p className="mt-3 text-sm text-gray-700 leading-relaxed">
            If your group or luggage sits awkwardly between two options, call us. We will tell you which vehicle actually works rather than pushing you to the bigger one.
          </p>

          {/* #3 h3 */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50/60 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              What Is Included in Your Fare
            </h3>
            <p className="mt-3 text-base text-gray-700 leading-relaxed">
              Most complaints about outstation cabs come down to charges nobody mentioned at booking. Here is our position, stated plainly.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Included in the per km rate */}
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-5">
                <div className="text-sm font-bold text-emerald-900 border-b border-emerald-200 pb-2 flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-emerald-600" />
                  <span>Included in the per km rate</span>
                </div>
                <ul className="mt-3 space-y-2.5 text-sm text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>The vehicle and the driver for your trip</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>Fuel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>Air conditioning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>Vehicle servicing and cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>GPS tracking through the journey</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>24 hour phone support on 8830273575</span>
                  </li>
                </ul>
              </div>

              {/* Charged extra, as per actual */}
              <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-5">
                <div className="text-sm font-bold text-amber-900 border-b border-amber-200 pb-2 flex items-center gap-2">
                  <TagIcon className="h-4 w-4 text-amber-700" />
                  <span>Charged extra, as per actual</span>
                </div>
                <ul className="mt-3 space-y-2.5 text-sm text-gray-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span><strong>Toll:</strong> The Mumbai Pune Expressway toll typically runs around ₹300 to ₹400 for a car. You pay the actual amount, we do not mark it up.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span><strong>Driver food allowance:</strong> Charged extra on this route.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span><strong>Parking:</strong> Only if your drop point charges for it.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span><strong>Night charge:</strong> Applies to rides between 11 PM and 6 AM.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span><strong>Cleaning charge:</strong> Only in case of damage or excessive mess in the vehicle.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span><strong>Waiting charge:</strong> Agreed with you at the time of booking rather than applied as a surprise.</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-700 leading-relaxed">
              If you would rather not deal with separate line items, ask us for an all inclusive quote when you message. We can package toll, driver allowance and the running fare into one figure for your specific trip. Every applicable charge is confirmed on WhatsApp before your booking is accepted. The figure you agree to is the figure you pay.
            </p>
          </div>

          {/* #4 h3 */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              One Way, Round Trip or Hourly, Which Costs Less
            </h3>
            <div className="mt-4 space-y-3 text-base text-gray-700 leading-relaxed">
              <p>
                We run three trip types and the right one depends on your plan, not on which looks cheapest at first glance.
              </p>
              <p>
                <strong>One way</strong> suits a journey you are not returning from with us. An airport drop before a flight, a relocation, a one direction transfer. You pay for the distance you travel and nothing more.
              </p>
              <p>
                <strong>Round trip</strong> suits a same day or next day return. A meeting in Mumbai, a hospital visit, a court date, a family function. The car and driver stay with you, so you are not searching for a ride back late at night in an unfamiliar part of the city.
              </p>
              <p>
                <strong>Hourly rental</strong> suits a day where Mumbai itself is the trip, several stops across Andheri, BKC and Dadar rather than one drop point.
              </p>
              <p>
                As a general guide, if you are returning within about 24 hours, a round trip usually works out better than two separate one way bookings, because a one way fare has to account for the driver bringing the car back. Send us your actual travel dates on WhatsApp and we will price both ways so you can see the difference for your trip.
              </p>
            </div>

            {/* #5 h4 */}
            <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h4 className="font-display text-lg font-bold text-navy">
                How Your Final Bill Is Calculated
              </h4>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Here is the arithmetic, so you can repeat it for any vehicle in the table. Say you book an Innova Crysta at ₹20 per km for a one way Pune to Mumbai drop, and the trip runs 150 km door to door:
              </p>
              <div className="mt-3 rounded-lg bg-white p-4 font-mono text-xs sm:text-sm text-gray-800 border border-gray-200 space-y-1">
                <div>150 km × ₹20 = <strong>₹3,000 running fare</strong></div>
                <div>Plus Expressway toll, around ₹300 to ₹400 as per actual</div>
                <div>Plus driver food allowance</div>
                <div>Plus parking, only if applicable at your drop point</div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Swap the vehicle and the running fare changes accordingly. The same 150 km trip is ₹2,100 in a Swift Dzire at ₹14 per km, ₹2,400 in an Ertiga at ₹16 per km, and ₹4,800 in an AC Tempo Traveller at ₹32 per km.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Two things move the kilometre count. Your pickup address in Pune, since a start from Hinjawadi is a shorter run than a start from Hadapsar, and your drop address in Mumbai, since Panvel, Andheri and Colaba are meaningfully different distances. Both are counted door to door, which is why we ask for full addresses at booking rather than just city names.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: CHOOSE CAB */}
        <section id="choose-cab" className="scroll-mt-20">
          {/* #6 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Choose the Right Cab for Your Group and Luggage
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Most people book the wrong car for one reason. They count the seats and forget the bags. Five seats does not mean five suitcases. Use passenger count and luggage count together.
          </p>

          {/* #7 h3: Cabs for Two to Four Passengers */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Cabs for Two to Four Passengers
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              For one to four people with light bags, the Swift Dzire at ₹14 per km or the Aura at ₹14 per km is the sensible choice. Both seat five and take two bags. Step up to the Toyota Etios at ₹15 per km or the Honda City at ₹16 per km if you want a more comfortable seat for a three to four hour drive. On this route that matters more than people expect, particularly through the ghat section.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-red-800 font-semibold bg-red-50 p-2.5 rounded-lg border border-red-200">
              One caution. Four adults with four full size suitcases will not fit a Dzire. That combination needs an Ertiga or larger. If you are flying out of Mumbai with checked luggage, size up.
            </p>
            <p className="mt-2 text-xs text-gray-600">
              For a business trip or an occasion where the car itself matters, the Toyota Corolla at ₹17 per km and the Audi at ₹27 per km are available.
            </p>

            {/* Vehicle Grid: IMG-02 & IMG-03 */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <figure className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/images/routes/pune-to-mumbai/swift-dzire-pune-mumbai-cab.webp"
                    alt="Swift Dzire cab for Pune to Mumbai travel at ₹14 per km"
                    title="Swift Dzire Cab, Pune to Mumbai"
                    fill
                    loading="lazy"
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
                <figcaption className="p-3 bg-white border-t border-gray-200 text-xs text-gray-700 font-medium">
                  Swift Dzire: Seats 5, 2 bags, ₹14/km. Economical & agile.
                </figcaption>
              </figure>

              <figure className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/images/routes/pune-to-mumbai/toyota-etios-cab-pune-mumbai.webp"
                    alt="Toyota Etios AC cab for the Pune to Mumbai route"
                    title="Toyota Etios Cab, Pune to Mumbai"
                    fill
                    loading="lazy"
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
                <figcaption className="p-3 bg-white border-t border-gray-200 text-xs text-gray-700 font-medium">
                  Toyota Etios: Seats 5, 2 bags, ₹15/km. Comfortable highway legroom.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* #8 h3: Cabs for Families of Five to Seven */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Cabs for Families of Five to Seven
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              The Ertiga at ₹16 per km seats seven with four bags and handles most family trips on this route well. The Innova Crysta at ₹20 per km seats seven with five bags. The extra spend buys two things that matter here, ride quality through the Khandala and Lonavala ghats, and boot space that actually takes airport luggage.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-gray-700">
              Also in this range are the Kia Carens at ₹20 per km, the Innova at ₹24 per km and the Scorpio at ₹24 per km. A family of six travelling with six suitcases should take the Innova Crysta rather than the Ertiga. Six people fit in both. Six large bags do not.
            </p>

            {/* Vehicle Grid: IMG-04 & IMG-05 */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <figure className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/images/routes/pune-to-mumbai/ertiga-seven-seater-cab-pune-mumbai.webp"
                    alt="Ertiga seven seater cab for family travel from Pune to Mumbai"
                    title="Ertiga 7 Seater, Pune to Mumbai"
                    fill
                    loading="lazy"
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
                <figcaption className="p-3 bg-white border-t border-gray-200 text-xs text-gray-700 font-medium">
                  Maruti Ertiga: Seats 7, 4 bags, ₹16/km. Perfect for family holiday runs.
                </figcaption>
              </figure>

              <figure className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/images/routes/pune-to-mumbai/innova-crysta-pune-mumbai-cab.webp"
                    alt="Innova Crysta cab for Pune to Mumbai trips with space for five bags"
                    title="Innova Crysta, Pune to Mumbai Cab"
                    fill
                    loading="lazy"
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
                <figcaption className="p-3 bg-white border-t border-gray-200 text-xs text-gray-700 font-medium">
                  Toyota Innova Crysta: Seats 7, 5 bags, ₹20/km. Gold standard ghat comfort.
                </figcaption>
              </figure>
            </div>
          </div>

          {/* #9 h3: Tempo Traveller and Mini Bus for Groups */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Tempo Traveller and Mini Bus for Groups
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Moving eight people or more? You do not need two cars.
            </p>
            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-gray-700">
              <li>• Tavera, ₹26 per km. 12 seats, 8 bags.</li>
              <li>• Tempo Traveller Non AC, ₹28 per km. 12 seats, 10 bags.</li>
              <li>• Tempo Traveller AC, ₹32 per km. 12 seats, 10 bags.</li>
              <li>• Mini Bus, ₹55 per km. 32 seats, large luggage capacity.</li>
            </ul>
            <p className="mt-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
              These suit corporate teams heading to a Mumbai office or event, wedding parties, pilgrimage groups and extended families travelling to the airport together. For a group of eleven with luggage, one AC Tempo Traveller at ₹32 per km is usually cheaper and far easier to coordinate than two SUVs, and everybody arrives at the same time. Book larger vehicles a day or two ahead where you can, since we assign a specific vehicle and driver to your trip.
            </p>

            {/* Vehicle Grid: IMG-06 & IMG-07 */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <figure className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/images/routes/pune-to-mumbai/tempo-traveller-ac-pune-mumbai.webp"
                    alt="AC Tempo Traveller for group travel from Pune to Mumbai"
                    title="AC Tempo Traveller, Pune to Mumbai"
                    fill
                    loading="lazy"
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
                <figcaption className="p-3 bg-white border-t border-gray-200 text-xs text-gray-700 font-medium">
                  Tempo Traveller AC: Seats 12, 10 bags, ₹32/km. Group convenience.
                </figcaption>
              </figure>

              <figure className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/assets/images/routes/pune-to-mumbai/mini-bus-32-seater-pune-mumbai.webp"
                    alt="32 seater mini bus for large group travel between Pune and Mumbai"
                    title="32 Seater Mini Bus, Pune to Mumbai"
                    fill
                    loading="lazy"
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
                <figcaption className="p-3 bg-white border-t border-gray-200 text-xs text-gray-700 font-medium">
                  32 Seater Mini Bus: ₹55/km. Weddings and corporate events.
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* SECTION: ROUTE */}
        <section id="route" className="scroll-mt-20">
          {/* #10 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Pune to Mumbai Distance, Route and Travel Time
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            The road distance between Pune and Mumbai is around 148 to 150 km on the Expressway. The exact figure for your trip depends on where you start and where you finish. A pickup in Wakad dropping at Panvel is a very different run from a pickup in Hadapsar dropping at Colaba, and the gap between those two can be thirty kilometres or more.
          </p>
          <p className="mt-2 text-base text-gray-700 leading-relaxed">
            The drive normally takes 3 to 4 hours. Be sceptical of anyone promising under three hours. It is achievable on an empty road at 5 am. It is not what a Friday evening looks like.
          </p>

          {/* IMG-08 route map */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full max-h-[460px]">
              <Image
                src="/assets/images/routes/pune-to-mumbai/pune-to-mumbai-route-map-expressway.webp"
                alt="Pune to Mumbai route map via the Mumbai Pune Expressway"
                title="Pune to Mumbai Route Map"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <figcaption className="text-sm font-semibold">
                  Route map showing the Expressway path through Talegaon, Lonavala, Khandala, Khopoli and Panvel.
                </figcaption>
              </div>
            </div>
          </figure>

          {/* Table: route-facts */}
          <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm text-gray-800">
              <thead className="bg-navy text-xs uppercase tracking-wider text-white">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Route fact</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3.5 font-bold text-navy">Road distance</td>
                  <td className="px-5 py-3.5 text-gray-700">Around 148 to 150 km</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3.5 font-bold text-navy">Typical drive time</td>
                  <td className="px-5 py-3.5 text-gray-700">3 to 4 hours</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3.5 font-bold text-navy">Main route</td>
                  <td className="px-5 py-3.5 text-gray-700">Mumbai Pune Expressway, also called the Yashwantrao Chavan Expressway</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3.5 font-bold text-navy">Route towns</td>
                  <td className="px-5 py-3.5 text-gray-700">Talegaon, Lonavala, Khandala, Khopoli, Panvel</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3.5 font-bold text-navy">Expressway toll</td>
                  <td className="px-5 py-3.5 text-gray-700">Around ₹300 to ₹400, charged as per actual</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-5 py-3.5 font-bold text-navy">Slower during</td>
                  <td className="px-5 py-3.5 text-gray-700">Peak traffic hours, heavy monsoon rain, Expressway incidents</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* #11 h3: Mumbai Pune Expressway or NH 48 */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Mumbai Pune Expressway or NH 48
            </h3>
            <div className="mt-4 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                There are two ways to make this drive and our drivers choose between them based on conditions on the day rather than habit.
              </p>
              <p>
                The Mumbai Pune Expressway is the default and it is the road we take for most bookings. It is faster, access controlled, and the surface through the ghats is built for the traffic it carries. Leaving Pune, the route runs through Talegaon, then Lonavala and Khandala, down through Khopoli and into Panvel before Mumbai.
              </p>
              <p>
                NH 48, the old highway, becomes the better call when the Expressway is backed up after an incident in the ghat section or during heavy holiday movement. It is slower on a normal day so we do not use it by default, but the point of an experienced driver is that they check conditions before setting off rather than discovering the problem halfway.
              </p>
              <p>
                If you want to stop in Lonavala on the way, tell us at booking. Our drivers know the Old Highway exit and the scenic ghat curves, and we can build a stop into the trip.
              </p>
            </div>

            {/* IMG-09 ghat section */}
            <figure className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full max-h-[440px]">
                <Image
                  src="/assets/images/routes/pune-to-mumbai/mumbai-pune-expressway-ghat-lonavala.webp"
                  alt="Mumbai Pune Expressway ghat section near Lonavala and Khandala"
                  title="Expressway Ghat Section, Lonavala and Khandala"
                  fill
                  loading="lazy"
                  className="object-cover object-center"
                  sizes="(max-width: 1080px) 100vw, 1080px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-3 text-white">
                  <figcaption className="text-xs sm:text-sm font-semibold">
                    The ghat stretch where driver experience matters most on the Pune Mumbai corridor.
                  </figcaption>
                </div>
              </div>
            </figure>
          </div>

          {/* #12 h3: Best Time to Leave Pune to Avoid Traffic */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Best Time to Leave Pune to Avoid Traffic
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Departure time affects this journey more than route choice does.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white border border-emerald-200 p-4">
                <span className="font-bold text-emerald-800 block text-sm">Easier windows:</span>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">
                  Early morning before roughly 7 am, and mid morning between about 10 am and midday.
                </p>
              </div>
              <div className="rounded-xl bg-white border border-red-200 p-4">
                <span className="font-bold text-red-800 block text-sm">Harder windows:</span>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">
                  Sunday evening, when weekend traffic pours back towards Mumbai. Monday morning, with the working week starting. Friday evening in the outbound direction. Long weekend Fridays and the days before major festivals are worse than anything a normal week produces.
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-gray-700">
              If your Mumbai appointment has a hard start time, leave a full hour more than the drive should need. Arriving early costs you nothing. Arriving late can cost you the meeting.
            </p>
          </div>

          {/* #13 h3: Monsoon and Night Driving on This Route */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              Monsoon and Night Driving on This Route
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Two conditions on this route deserve a straight answer rather than reassurance.
            </p>
            <div className="mt-4 space-y-3 text-sm text-gray-700 leading-relaxed">
              <p>
                <strong>Monsoon.</strong> Between June and September, visibility through the ghat section drops sharply and the road holds water. Add an hour to your planning in heavy rain, and expect your driver to hold a slower speed on the descent. That is the correct decision, not a delay. Our drivers work this ghat stretch regularly and know how it behaves in rain.
              </p>
              <p>
                <strong>Night travel.</strong> We run this route 24 hours a day and overnight drives to catch early morning flights are routine work for us. Every vehicle is GPS tracked, so the journey is monitored from our end rather than left entirely to the driver. All drivers are background verified, trained, and put through regular health checks before they carry passengers.
              </p>
              <p className="text-xs text-gray-500 italic">
                If you are travelling alone at night, share your driver and vehicle details with someone before you set off. We send those details to you in advance for exactly that reason.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: AIRPORT */}
        <section id="airport" className="scroll-mt-20">
          {/* #14 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Pune to Mumbai Airport Cab, Terminal 1 and Terminal 2
          </h2>
          <div className="mt-3 space-y-3 text-base text-gray-700 leading-relaxed">
            <p>
              A large share of our Pune to Mumbai bookings end at Chhatrapati Shivaji Maharaj International Airport, and this is the trip where timing stops being a convenience and becomes the entire point. Our main office sits near the airport in Mumbai, so this corridor is everyday work for us.
            </p>
            <p>
              We drop at both terminals. Tell us your terminal at booking, because Terminal 1 at Santacruz and Terminal 2 at Andheri East have separate approach roads and the driver needs to know before entering the airport road:
            </p>
            <ul className="space-y-1 text-sm text-gray-800 list-disc pl-5">
              <li>Terminal 1 handles domestic flights on specific carriers.</li>
              <li>Terminal 2 handles international flights and several domestic operators.</li>
            </ul>
            <p className="text-sm text-gray-600">
              Your ticket states your terminal. If you are not sure, send us your airline and flight number and we will note it against the booking. Confirm with your airline as well, since terminal allocations do change. For the return leg, we run Mumbai Airport to Pune drops too, and our drivers track your flight so they are waiting when you land rather than the other way round.
            </p>
          </div>

          {/* IMG-10 airport */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full max-h-[460px]">
              <Image
                src="/assets/images/routes/pune-to-mumbai/mumbai-airport-cab-terminal-1-terminal-2.webp"
                alt="Pune to Mumbai airport cab drop at CSMIA Terminal 1 and Terminal 2"
                title="Mumbai Airport Cab, T1 and T2"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <figcaption className="text-sm font-semibold">
                  Chhatrapati Shivaji Maharaj International Airport drop points served by Swaraj Travel.
                </figcaption>
              </div>
            </div>
          </figure>

          {/* #15 h3: What Time to Leave Pune for a Morning Flight */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50/50 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              What Time to Leave Pune for a Morning Flight
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Work backwards from the flight, not forwards from your alarm. You need the drive itself at 3 to 4 hours, a traffic and weather buffer of about an hour, and your airport reporting time, commonly 2 hours before a domestic departure and 3 hours before an international one. Always follow the reporting time your airline specifies. Here is how that adds up:
            </p>

            {/* Flight Timing Table */}
            <div className="mt-5 overflow-x-auto rounded-xl border border-gray-200 shadow-xs bg-white">
              <table className="w-full text-left text-sm text-gray-800">
                <thead className="bg-navy text-xs uppercase tracking-wider text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Flight departure</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Type</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Suggested Pune pickup</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {FLIGHT_TIMING_GUIDE.map((row, idx) => (
                    <tr
                      key={idx}
                      onClick={() => setSelectedFlightIndex(idx)}
                      className={`cursor-pointer transition-colors ${
                        selectedFlightIndex === idx ? "bg-blue-50 font-medium" : "hover:bg-gray-50"
                      }`}
                    >
                      <td className="px-4 py-3 font-bold text-navy">{row.flightDeparture}</td>
                      <td className="px-4 py-3 text-gray-600">{row.type}</td>
                      <td className="px-4 py-3 font-semibold text-primary">{row.suggestedPunePickup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
              These are guidance times, not rules. Add more during monsoon, on Sunday evenings running into Monday, or if you are starting from an outer Pune locality. Send us your flight time on WhatsApp and we will recommend a pickup time for your specific address. Note that pickups between 11 PM and 6 AM carry a night charge. We take these bookings every night and the number is answered around the clock.
            </p>
          </div>

          {/* #16 h3: If Your Flight Is Delayed on the Return Leg */}
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              If Your Flight Is Delayed on the Return Leg
            </h3>
            <div className="mt-3 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Flight delays are the part of airport travel nobody plans for, so tell us early and we will work around it.
              </p>
              <p>
                If you have booked a Mumbai airport pickup and your flight is running late, message <a href={`tel:${PHONE_TEL}`} className="text-primary font-bold hover:underline">8830273575</a> with the new landing time as soon as you have it. Our drivers already track flights on airport bookings, so in most cases we will have seen the delay before you message. We hold the booking and adjust the pickup where the driver&apos;s schedule allows.
              </p>
              <p className="text-xs text-gray-600">
                Waiting charges on delayed arrivals are agreed with you rather than applied automatically, and reasonable flight delays are handled as part of the service. If a delay is long enough that the trip needs moving to a different day, contact us as early as you can so we can reschedule rather than cancel.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: PICKUP */}
        <section id="pickup" className="scroll-mt-20">
          {/* #17 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Pickup Areas We Cover in Pune
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            We pick up from your doorstep anywhere across Pune and Pimpri Chinchwad, including:
          </p>
          <ul className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-sm text-gray-800 font-medium">
            {[
              "Hinjawadi", "Wakad", "Baner", "Aundh",
              "Kothrud", "Hadapsar", "Kharadi", "Viman Nagar",
              "Magarpatta", "Camp", "Shivajinagar", "Koregaon Park",
              "Pimpri Chinchwad", "Talegaon", "Pune Airport", "Pune Railway Station"
            ].map((loc) => (
              <li key={loc} className="flex items-center gap-2 rounded-lg bg-gray-50 border border-gray-200 px-3 py-2">
                <PinIcon className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>{loc}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs sm:text-sm text-gray-600">
            Not seeing your area does not mean we do not cover it. Send us the address on WhatsApp and we will confirm. Check all{" "}
            <Link href="/cities" className="font-semibold text-primary underline hover:text-navy">
              cities we cover
            </Link>.
          </p>
          <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50/70 p-4 text-xs sm:text-sm text-gray-700">
            <strong>Two pickup points:</strong> If you need to collect a second passenger on the way, for example one person in Baner and another in Wakad, tell us at the enquiry stage so the driver plans the route in the right order instead of doubling back. Mention it when you book rather than on the day, because it changes both the pickup time and the total kilometres.
          </div>
        </section>

        {/* SECTION: DROP */}
        <section id="drop" className="scroll-mt-20">
          {/* #18 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Drop Locations We Cover in Mumbai
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Our Pune to Mumbai cab service covers the wider metropolitan area, not just south Mumbai:
          </p>
          <div className="mt-4 space-y-2.5 text-sm text-gray-800">
            <div className="p-3 rounded-lg border border-gray-200 bg-white">
              <strong>Mumbai city:</strong> Colaba, Fort, Dadar, Worli, Bandra, Bandra Kurla Complex
            </div>
            <div className="p-3 rounded-lg border border-gray-200 bg-white">
              <strong>Western suburbs:</strong> Andheri, Santacruz, Goregaon, Malad, Borivali
            </div>
            <div className="p-3 rounded-lg border border-gray-200 bg-white">
              <strong>Airport:</strong> CSMIA Terminal 1 and Terminal 2
            </div>
            <div className="p-3 rounded-lg border border-gray-200 bg-white">
              <strong>Navi Mumbai:</strong> Vashi, Nerul, Belapur, Panvel
            </div>
            <div className="p-3 rounded-lg border border-gray-200 bg-white">
              <strong>Thane and beyond:</strong> Thane, Kalyan, Dombivli
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
            Because billing is per kilometre, your fare reflects the distance you actually travel. The same per km rate applies across these areas, so a Panvel drop costs less than a Borivali drop in the same vehicle simply because it is a shorter run. Give us the full drop address at booking so we can estimate the distance properly.
          </p>
        </section>

        {/* SECTION: HOW TO BOOK */}
        <section id="how-to-book" className="scroll-mt-20">
          {/* #19 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            How to Book a Pune to Mumbai Cab with Swaraj Travel
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Four steps, and you deal with a person rather than an app.
          </p>

          <ol className="mt-6 space-y-4">
            <li className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                1
              </span>
              <div>
                <div className="text-base font-bold text-navy">Send us your trip details</div>
                <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                  Use the booking form on our site or message 8830273575 directly on WhatsApp. Tell us your pickup address in Pune, your drop address in Mumbai, the date and time, how many passengers and bags, and whether you want one way, round trip or hourly.
                </p>
              </div>
            </li>

            <li className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                2
              </span>
              <div>
                <div className="text-base font-bold text-navy">We confirm the vehicle and the rate</div>
                <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                  We reply with the vehicle we recommend for your group and luggage, the per km rate, an estimate of the running fare, and exactly which extras apply, toll, driver food, night charge if your pickup falls between 11 PM and 6 AM. Ask for an all inclusive figure at this stage if you prefer one number.
                </p>
              </div>
            </li>

            <li className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                3
              </span>
              <div>
                <div className="text-base font-bold text-navy">You confirm the booking</div>
                <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                  Once you accept the vehicle and the rate, we confirm the booking by SMS or email. Bookings are subject to vehicle availability, so early confirmation matters for airport runs and large vehicles.
                </p>
              </div>
            </li>

            <li className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                4
              </span>
              <div>
                <div className="text-base font-bold text-navy">You get your driver details before pickup</div>
                <p className="mt-1 text-sm text-gray-700 leading-relaxed">
                  We send the driver&apos;s name, number and vehicle details ahead of the journey, so you know who is arriving and can share it with family before you travel.
                </p>
              </div>
            </li>
          </ol>

          <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-5 text-xs sm:text-sm text-gray-700 space-y-2">
            <div><strong>How far ahead to book:</strong> Same day usually works for a daytime trip. For an early morning airport transfer, book the previous day so the vehicle and driver are assigned in good time. For a Tempo Traveller or Mini Bus, give us a day or two.</div>
            <div><strong>Payment:</strong> We accept cash, credit and debit cards, UPI and digital wallets. Payment is due before or immediately after the ride, so you are not asked for money weeks in advance. Corporate clients can arrange monthly billing.</div>
            <div><strong>Cancellation:</strong> You can cancel up to 2 hours before pickup. A cancellation charge of 25% of the total fare applies as per <Link href="/terms-conditions" className="text-primary underline">our terms</Link>, so tell us as early as you can if plans change.</div>
          </div>

          <div className="mt-6">
            <a
              href={waLink("Hi Swaraj Travel, I would like to book a Pune to Mumbai cab.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow hover:bg-emerald-700 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Book on WhatsApp Call 8830273575</span>
            </a>
          </div>
        </section>

        {/* SECTION: WHY US */}
        <section id="why-us" className="scroll-mt-20">
          {/* #20 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Why Travellers Choose Swaraj Travel on This Route
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            No slogans. Here is what you actually get.
          </p>

          {/* IMG-11 driver and vehicle */}
          <figure className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <div className="relative aspect-[16/9] w-full max-h-[460px]">
              <Image
                src="/assets/images/routes/pune-to-mumbai/verified-driver-gps-tracked-cab.webp"
                alt="Background verified Swaraj Travel driver with a GPS tracked cab"
                title="Verified Driver and GPS Tracked Vehicle"
                fill
                loading="lazy"
                className="object-cover object-center"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                <figcaption className="text-sm font-semibold">
                  Swaraj Travel chauffeur beside a serviced, GPS tracked vehicle used on the Pune Mumbai route.
                </figcaption>
              </div>
            </div>
          </figure>

          {/* USP List */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-800">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <div className="font-bold text-navy mb-1 flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Rates published before you call</span>
              </div>
              <p className="text-xs text-gray-600">The per km rate for all 16 vehicles is on this page. You are not waiting on a quote to find out whether the trip is affordable.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <div className="font-bold text-navy mb-1 flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Charges explained upfront</span>
              </div>
              <p className="text-xs text-gray-600">Toll, driver food, parking and night charges are listed in full above rather than discovered at the end of the trip. Ask for an all inclusive quote if you want one figure.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <div className="font-bold text-navy mb-1 flex items-center gap-2">
                <RouteIcon className="h-4 w-4 text-primary shrink-0" />
                <span>Drivers who know this corridor</span>
              </div>
              <p className="text-xs text-gray-600">Our chauffeurs work the Mumbai Pune Expressway regularly, including the Khandala and Lonavala ghat section, which is the part of this drive where experience shows.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <div className="font-bold text-navy mb-1 flex items-center gap-2">
                <ShieldIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Background verified drivers</span>
              </div>
              <p className="text-xs text-gray-600">Every driver goes through background verification, training and regular health checks before carrying passengers.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <div className="font-bold text-navy mb-1 flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>GPS tracked vehicles</span>
              </div>
              <p className="text-xs text-gray-600">Every vehicle is tracked, which matters most on overnight airport runs and in monsoon.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <div className="font-bold text-navy mb-1 flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-primary shrink-0" />
                <span>Available 24 hours</span>
              </div>
              <p className="text-xs text-gray-600">Bookings and support run around the clock on 8830273575, which is the only way an airport service can honestly operate.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <div className="font-bold text-navy mb-1 flex items-center gap-2">
                <TaxiIcon className="h-4 w-4 text-primary shrink-0" />
                <span>Sixteen vehicles, including group transport</span>
              </div>
              <p className="text-xs text-gray-600">From a Swift Dzire for a solo trip to a 32 seat Mini Bus. Most operators on this route will not move a group of thirty.</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-xs">
              <div className="font-bold text-navy mb-1 flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Sanitized before every ride</span>
              </div>
              <p className="text-xs text-gray-600">Vehicles are deep cleaned between trips and serviced on schedule.</p>
            </div>
          </div>

          {/* #21 h3: About Swaraj Travel */}
          <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl">
              About Swaraj Travel
            </h3>
            <div className="mt-3 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Swaraj Travel is a Maharashtra based cab service running airport transfers, outstation trips, local taxi bookings and tour packages across the state. Pune to Mumbai is one of the routes we work most often, alongside Mumbai to Pune, Nashik, Shirdi and Mahabaleshwar.
              </p>
              <p>
                The company was founded by Rajesh Sharma, who brought more than 15 years of experience in the transportation industry to the business. It began with a fleet of five cars and the straightforward aim of running a cab service that people could rely on, with proper attention to customer safety and driver welfare. The fleet today runs to 16 vehicles across four categories, hatchbacks, sedans, SUVs and buses.
              </p>
              <div className="rounded-xl bg-gray-50 p-4 border border-gray-200 text-xs sm:text-sm text-gray-800 space-y-1">
                <div><strong>Office:</strong> Near Airport, Mumbai, Maharashtra, India</div>
                <div><strong>Phone and WhatsApp:</strong> +91 8830273575, answered 24 hours</div>
                <div><strong>Email:</strong> travelsswaraj69@gmail.com</div>
              </div>
              <p className="text-xs text-gray-500">
                Any dispute is handled by our support team within 24 hours of the incident, and our terms are published in full on the site rather than buried. Learn more on our{" "}
                <Link href="/contact" className="text-primary underline font-medium">contact us</Link> page.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: REVIEWS */}
        <section id="reviews" className="scroll-mt-20">
          {/* #22 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Customer Reviews from the Pune Mumbai Route
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PUNE_REVIEWS.map((rev, idx) => (
              <div key={idx} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="text-xs sm:text-sm italic text-gray-800 leading-relaxed">
                    &ldquo;{rev.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="mt-4 border-t border-gray-100 pt-2.5 text-xs">
                  <div className="font-bold text-navy">{rev.author}</div>
                  <div className="text-[11px] text-gray-500">{rev.route}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs italic text-gray-500">
            Reviews are from Swaraj Travel customers. Apply Review schema only once these are published on a public profile that visitors can check independently.
          </p>
        </section>

        {/* SECTION: OTHER ROUTES */}
        <section id="other-routes" className="scroll-mt-20">
          {/* #23 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Other Routes We Serve from Pune and Mumbai
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Pune to Mumbai is one of several routes we run regularly:
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link href="/mumbai-to-pune-cab" className="rounded-xl border border-gray-200 bg-white p-4 hover:border-primary transition-colors block">
              <div className="font-bold text-navy">Mumbai to Pune cab</div>
              <div className="text-xs text-gray-500 mt-1">The same route in reverse, including Mumbai Airport T1 and T2 pickups</div>
            </Link>
            <Link href="/mumbai-to-nashik-cab" className="rounded-xl border border-gray-200 bg-white p-4 hover:border-primary transition-colors block">
              <div className="font-bold text-navy">Mumbai to Nashik cab</div>
              <div className="text-xs text-gray-500 mt-1">167 km via NH 160</div>
            </Link>
            <Link href="/mumbai-to-shirdi-cab" className="rounded-xl border border-gray-200 bg-white p-4 hover:border-primary transition-colors block">
              <div className="font-bold text-navy">Mumbai to Shirdi cab</div>
              <div className="text-xs text-gray-500 mt-1">240 km pilgrimage service</div>
            </Link>
            <Link href="/mumbai-to-mahabaleshwar-cab" className="rounded-xl border border-gray-200 bg-white p-4 hover:border-primary transition-colors block">
              <div className="font-bold text-navy">Mumbai to Mahabaleshwar cab</div>
              <div className="text-xs text-gray-500 mt-1">263 km hill station route</div>
            </Link>
            <Link href="/packages" className="rounded-xl border border-gray-200 bg-white p-4 hover:border-primary transition-colors block">
              <div className="font-bold text-navy">Tour packages</div>
              <div className="text-xs text-gray-500 mt-1">Multi day trips across Maharashtra</div>
            </Link>
            <Link href="/services" className="rounded-xl border border-gray-200 bg-white p-4 hover:border-primary transition-colors block">
              <div className="font-bold text-navy">All services</div>
              <div className="text-xs text-gray-500 mt-1">Airport transfers, outstation and local city travel</div>
            </Link>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-gray-600">
            Same rate card, same fleet, same number. Call or WhatsApp 8830273575.
          </p>
        </section>

        {/* SECTION: CONTACT */}
        <section id="contact" className="scroll-mt-20">
          {/* #24 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Contact Us to Book Your Pune to Mumbai Cab
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            You can reach us at any hour. Bookings, fare questions, changes to an existing trip, all of it goes through the same number, and a person answers it.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* #25 h3: What to Tell Us When You Message */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-navy">
                What to Tell Us When You Message
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                Tell us your pickup address in Pune, your drop address in Mumbai, the date and time, how many passengers and bags, and whether you want one way, round trip or hourly. Mention your flight time if you are catching a plane.
              </p>
            </div>

            {/* #26 h3: How Quickly We Reply */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
              <h3 className="font-display text-lg font-bold text-navy">
                How Quickly We Reply
              </h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                We respond within a few minutes on WhatsApp and immediately on phone calls. Fares, driver details and vehicle allocations are handled around the clock.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3 text-sm font-bold text-white shadow hover:bg-slate-800 transition-colors"
            >
              <PhoneIcon className="h-4 w-4 text-amber-400" />
              <span>Call +91 8830273575</span>
            </a>
            <a
              href={waLink("Hi Swaraj Travel, I want to book a Pune to Mumbai cab.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow hover:bg-emerald-700 transition-colors"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </section>

        {/* SECTION: FAQ */}
        <section id="faq" className="scroll-mt-20">
          {/* #27 h2 */}
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-gray-700 leading-relaxed">
            Find answers to all 20 frequently asked questions regarding Pune to Mumbai cab fares, expressway tolls, airport reporting times, luggage capacities, and cancellation policies.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search all 20 questions (e.g. fare, toll, airport, flight, luggage)..."
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

          {/* All 20 FAQ questions as H3 per developer rules */}
          <div className="mt-6 space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = !!expandedFaqs[faq.question];
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-gray-200 bg-white shadow-xs overflow-hidden transition-colors hover:border-gray-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.question)}
                    className="flex w-full items-center justify-between gap-4 p-4 text-left hover:bg-blue-50/40 transition-colors"
                  >
                    {/* #28 h3: Each of the 20 FAQ questions */}
                    <h3 className="text-sm sm:text-base font-bold text-navy">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUpIcon className="h-5 w-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-400 shrink-0" />
                    )}
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
        </section>
      </main>
    </article>
  );
}
