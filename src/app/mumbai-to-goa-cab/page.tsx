import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { MumbaiToGoaContent } from "@/components/mumbai-to-goa-content";
import { GOA_FAQS } from "@/lib/mumbai-to-goa";

export const metadata: Metadata = {
  title: "Mumbai to Goa Cab | Fixed Fare, Verified Drivers | Book A Cab",
  description:
    "Mumbai to Goa cab: fixed one-way fares from ₹7,500, tolls included. 595 km via NH66, pickup anywhere in Mumbai. Call +91-9970294122.",
  alternates: {
    canonical: "https://bookacab.co.in/mumbai-to-goa-cab/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mumbai to Goa Cab | Fixed Fare, Verified Drivers | Book A Cab",
    description:
      "Mumbai to Goa cab: fixed one-way fares from ₹7,500, tolls included. 595 km via NH66, pickup anywhere in Mumbai. Call +91-9970294122.",
    url: "https://bookacab.co.in/mumbai-to-goa-cab/",
    siteName: "Book A Cab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://bookacab.co.in/images/mumbai-to-goa-cab-book-a-cab-hero.webp",
        width: 1200,
        height: 630,
        alt: "Mumbai to Goa cab booking service by Book A Cab with verified driver on NH66 Konkan coastal highway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumbai to Goa Cab | Fixed Fare, Verified Drivers | Book A Cab",
    description:
      "Mumbai to Goa cab: fixed one-way fares from ₹7,500, tolls included. 595 km via NH66, pickup anywhere in Mumbai. Call +91-9970294122.",
    images: ["https://bookacab.co.in/images/mumbai-to-goa-cab-book-a-cab-hero.webp"],
  },
};

function mumbaiToGoaUnifiedSchema() {
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
        "@type": "BreadcrumbList",
        "@id": "https://bookacab.co.in/mumbai-to-goa-cab/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://bookacab.co.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Outstation Cabs",
            item: "https://bookacab.co.in/outstation/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mumbai to Goa Cab",
            item: "https://bookacab.co.in/mumbai-to-goa-cab/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://bookacab.co.in/mumbai-to-goa-cab/#webpage",
        url: "https://bookacab.co.in/mumbai-to-goa-cab/",
        name: "Mumbai to Goa Cab: One Way & Round Trip Taxi",
        description:
          "Mumbai to Goa cab: fixed one-way fares from ₹7,500, tolls included. 595 km via NH66, pickup anywhere in Mumbai. Call +91-9970294122.",
        isPartOf: {
          "@id": "https://bookacab.co.in/#website",
        },
        about: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        inLanguage: "en-IN",
        dateModified: "2026-10-09",
        breadcrumb: {
          "@id": "https://bookacab.co.in/mumbai-to-goa-cab/#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://bookacab.co.in/mumbai-to-goa-cab/#service",
        name: "Mumbai to Goa Cab",
        serviceType: "Outstation taxi",
        description:
          "One-way and round-trip cab from Mumbai to Goa via NH66, 595 km, about 10 to 12 hours. Fixed fares with NH66 tolls included.",
        provider: {
          "@type": "TaxiService",
          name: "Book A Cab",
          url: "https://bookacab.co.in/",
          telephone: "+91-9970294122",
        },
        areaServed: ["Mumbai", "Goa"],
        url: "https://bookacab.co.in/mumbai-to-goa-cab/",
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "7500",
          description:
            "One-way fixed fare from Rs 7,500 for a hatchback. NH66 tolls included.",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://bookacab.co.in/mumbai-to-goa-cab/#faq",
        mainEntity: GOA_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export default function MumbaiToGoaPage() {
  return (
    <>
      <JsonLd data={mumbaiToGoaUnifiedSchema()} />
      <MumbaiToGoaContent />
    </>
  );
}
