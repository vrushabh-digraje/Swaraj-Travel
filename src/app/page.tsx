"use client";

import Link from "next/link";
import { Button } from "@/components/button";
import { JsonLd } from "@/components/json-ld";
import { Card } from "@/components/card";
import { CtaBanner } from "@/components/cta-banner";
import { FleetGrid } from "@/components/fleet-grid";
import { ReviewsSection } from "@/components/reviews-section";
import {
  ClockIcon,
  RouteIcon,
  ShieldIcon,
  TagIcon,
} from "@/components/icons";
import { HomeHero } from "@/components/home-hero";
import { POPULAR_VEHICLES } from "@/lib/fleet";
import { OUTSTATION_ROUTES } from "@/lib/routes";
import { SERVICES } from "@/lib/services";
import { useBooking } from "@/lib/booking-context";

const reasons = [
  {
    title: "24/7 Availability",
    body: "Book a ride anytime, anywhere across Maharashtra.",
    icon: ClockIcon,
  },
  {
    title: "Verified Drivers",
    body: "All drivers are background-checked and trained.",
    icon: ShieldIcon,
  },
  {
    title: "Best Prices",
    body: "Competitive rates with no hidden charges.",
    icon: TagIcon,
  },
  {
    title: "GPS Tracking",
    body: "Real-time tracking for your peace of mind.",
    icon: RouteIcon,
  },
];

const steps = [
  {
    title: "Choose Location",
    body: "Select your pickup and drop location with date and time.",
  },
  {
    title: "Select Cab",
    body: "Choose from our range of hatchbacks, sedans, SUVs, and buses.",
  },
  {
    title: "Confirm Booking",
    body: "Review details and confirm your booking on WhatsApp.",
  },
  {
    title: "Enjoy Ride",
    body: "Sit back and enjoy a comfortable, punctual ride.",
  },
];

function homeUnifiedSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bookacab.co.in/#organization",
        name: "Book A Cab",
        legalName: "Book A Cab",
        url: "https://bookacab.co.in/",
        logo: {
          "@type": "ImageObject",
          "@id": "https://bookacab.co.in/#logo",
          url: "https://bookacab.co.in/logo.png",
          caption: "Book A Cab",
        },
        image: {
          "@id": "https://bookacab.co.in/#logo",
        },
        email: "bookings@bookacab.co.in",
        telephone: "+919970294122",
        foundingDate: "2010",
        founder: {
          "@type": "Person",
          name: "Rajesh Sharma",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near Airport, Andheri East",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400099",
          addressCountry: "IN",
        },
        sameAs: ["https://wa.me/919970294122"],
      },
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": "https://bookacab.co.in/#localbusiness",
        name: "Book A Cab",
        description:
          "Mumbai based cab service offering Mumbai Darshan sightseeing tours, airport transfers and outstation taxi to Pune, Shirdi, Nashik, Mahabaleshwar and Goa. Published per-km rates, itemised billing and verified drivers.",
        url: "https://bookacab.co.in/",
        image: {
          "@id": "https://bookacab.co.in/#logo",
        },
        logo: {
          "@id": "https://bookacab.co.in/#logo",
        },
        parentOrganization: {
          "@id": "https://bookacab.co.in/#organization",
        },
        telephone: "+919970294122",
        email: "bookings@bookacab.co.in",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near Airport, Andheri East",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400099",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 19.0989,
          longitude: 72.8656,
        },
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=19.0989,72.8656",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted:
          "Cash, UPI, Credit Card, Debit Card, Digital Wallet",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Navi Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Nashik" },
          { "@type": "City", name: "Shirdi" },
          { "@type": "City", name: "Mahabaleshwar" },
          { "@type": "City", name: "Lonavala" },
          { "@type": "City", name: "Goa" },
        ],
        sameAs: ["https://wa.me/919970294122"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+919970294122",
            contactType: "reservations",
            areaServed: "IN",
            availableLanguage: ["en", "hi", "mr"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://bookacab.co.in/#website",
        url: "https://bookacab.co.in/",
        name: "Book A Cab",
        publisher: {
          "@id": "https://bookacab.co.in/#organization",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "WebPage",
        "@id": "https://bookacab.co.in/#webpage",
        url: "https://bookacab.co.in/",
        name: "Mumbai Cab Booking | Airport, Outstation & Local Taxi - Book A Cab",
        description:
          "Book Mumbai cabs for airport transfers, local rides, and outstation trips across Maharashtra. 24/7 support, verified drivers, and instant booking on WhatsApp.",
        isPartOf: {
          "@id": "https://bookacab.co.in/#website",
        },
        about: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        inLanguage: "en-IN",
        dateModified: "2026-09-21",
      },
      {
        "@type": "ItemList",
        "@id": "https://bookacab.co.in/#services",
        name: "Book A Cab services",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Mumbai Darshan Cab",
            url: "https://bookacab.co.in/mumbai-darshan-cab/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Outstation Cabs",
            url: "https://bookacab.co.in/outstation/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Tour Packages",
            url: "https://bookacab.co.in/packages/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Our Fleet",
            url: "https://bookacab.co.in/fleet/",
          },
        ],
      },
    ],
  };
}

export default function Home() {
  const { openBooking } = useBooking();
  return (
    <>
      <JsonLd data={homeUnifiedSchema()} />
      <HomeHero />
      <CtaBanner
        title="Ready to Ride?"
        description="Book your cab now and get exciting offers on your first ride."
      />

      <section id="services" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy md:text-5xl">
              Why Choose <span className="gradient-text">Book A Cab</span>
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              We provide the best cab booking experience with premium features
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <Card key={reason.title} className="p-8 text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{reason.body}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy md:text-5xl">
              Our <span className="gradient-text">Premium Fleet</span>
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Choose from our wide range of comfortable and well-maintained
              vehicles
            </p>
          </div>
          <FleetGrid vehicles={POPULAR_VEHICLES} showFilter={true} />
          <div className="mt-10 text-center">
            <Button href="/fleet" variant="secondary" showArrow>
              View All Vehicles
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy md:text-5xl">
              Popular Outstation Routes
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              {"Direct cabs to Maharashtra's most booked outstation destinations"}
            </p>
          </div>
          <div className="scrollbar-none -mx-4 flex gap-6 overflow-x-auto px-4 pb-6 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-2 md:px-0 md:pb-0 lg:grid-cols-3">
            {OUTSTATION_ROUTES.map((route) => (
              <Link
                key={route.slug}
                href={`/${route.slug}`}
                className="w-[80vw] shrink-0 snap-center sm:w-[55vw] md:w-auto md:shrink md:snap-align-none"
              >
                <Card className="flex h-full flex-col justify-between border border-transparent p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-2xl hover:ring-2 hover:ring-primary/5 group">
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {route.distance} · {route.duration}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-navy">
                      {route.from} to {route.to}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {route.intro.slice(0, 110)}...
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-primary">
                    <span>Explore Route</span>
                    <svg
                      className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy md:text-5xl">
              How It Works
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Book your ride in just 4 simple steps
            </p>
          </div>
          <div className="scrollbar-none -mx-4 flex gap-6 overflow-x-auto px-4 pb-6 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-4 md:px-0 md:pb-0">
            {steps.map((step, index) => (
              <button
                key={step.title}
                onClick={() => openBooking()}
                className="w-[75vw] shrink-0 snap-center sm:w-[45vw] md:w-auto md:shrink md:snap-align-none text-left cursor-pointer focus:outline-none"
              >
                <Card className="h-full p-6 text-center border border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/20 hover:ring-2 hover:ring-primary/5 group">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-display text-xl font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/25">
                    {index + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{step.body}</p>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
                Services in Mumbai
              </h2>
              <p className="mt-2 text-gray-600">
                Airport, local, outstation, corporate, and wedding cabs.
              </p>
            </div>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 4).map((service) => (
              <Card key={service.slug} className="p-6">
                <h3 className="font-display text-xl font-bold text-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                {service.price && (
                  <p className="mt-3 font-semibold text-primary">{service.price}</p>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-primary/5 p-6 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold text-navy">
                Looking for Full Day City Sightseeing?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Explore our fixed-fare sightseeing packages with personalized routes, verified chauffeurs, and zero hidden costs.
              </p>
            </div>
            <Button href="/mumbai-darshan-cab" className="shrink-0">
              Mumbai Darshan Cab Booking
            </Button>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <CtaBanner
        title="Ready for Your Next Journey?"
        description="Book your cab now and experience the difference."
      />
    </>
  );
}
