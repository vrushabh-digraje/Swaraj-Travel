import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { MumbaiToGoaContent } from "@/components/mumbai-to-goa-content";
import { GOA_FAQS } from "@/lib/mumbai-to-goa";

export const metadata: Metadata = {
  title: "Mumbai to Goa Cab | Fixed Fare, Verified Drivers | Swaraj Travel",
  description:
    "Book Mumbai to Goa cab with Swaraj Travel. Fixed fare, no hidden charges, ghat-experienced drivers & instant WhatsApp booking 24/7. 50,000+ happy riders.",
  alternates: {
    canonical: "https://www.swarajtravel.com/mumbai-to-goa-cab",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mumbai to Goa Cab | Fixed Fare, Verified Drivers | Swaraj Travel",
    description:
      "Book Mumbai to Goa cab with Swaraj Travel. Fixed fare, no hidden charges, ghat-experienced drivers & instant WhatsApp booking 24/7. 50,000+ happy riders.",
    url: "https://www.swarajtravel.com/mumbai-to-goa-cab",
    siteName: "Swaraj Travel",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.swarajtravel.com/images/mumbai-to-goa-cab-swaraj-travel-hero.webp",
        width: 1440,
        height: 600,
        alt: "Mumbai to Goa cab booking service by Swaraj Travel with verified driver on NH66 Konkan coastal highway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumbai to Goa Cab | Fixed Fare, Verified Drivers | Swaraj Travel",
    description:
      "Book Mumbai to Goa cab with Swaraj Travel. Fixed fare, no hidden charges, ghat-experienced drivers & instant WhatsApp booking 24/7. 50,000+ happy riders.",
    images: ["https://www.swarajtravel.com/images/mumbai-to-goa-cab-swaraj-travel-hero.webp"],
  },
};

// Schema 1 — Local Business
function schemaLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Swaraj Travel",
    url: "https://www.swarajtravel.com",
    logo: "https://www.swarajtravel.com/logo.png",
    image: "https://www.swarajtravel.com/images/mumbai-to-goa-cab-swaraj-travel-hero.webp",
    description:
      "Swaraj Travel provides Mumbai to Goa cab booking with fixed fare, verified drivers, and instant WhatsApp booking available 24/7. 50,000+ happy riders across Maharashtra outstation routes.",
    telephone: "+918856904131",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Goa" },
      { "@type": "State", name: "Maharashtra" },
    ],
    openingHoursSpecification: {
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
    priceRange: "₹₹",
    sameAs: ["https://www.swarajtravel.com"],
  };
}

// Schema 2 — Service (Mumbai to Goa Cab)
function schemaService() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mumbai to Goa Cab Service",
    serviceType: "Outstation Cab Booking",
    provider: {
      "@type": "LocalBusiness",
      name: "Swaraj Travel",
      url: "https://www.swarajtravel.com",
    },
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Goa" },
    ],
    description:
      "One-way and round trip cab booking from Mumbai to Goa via NH66. Fixed fare, no hidden charges, verified drivers with ghat experience, WhatsApp booking available 24/7.",
    offers: [
      {
        "@type": "Offer",
        name: "Hatchback One-Way Mumbai to Goa",
        price: "7500",
        priceCurrency: "INR",
        description: "One-way hatchback cab from Mumbai to Goa. Seats 4, 2 bags, toll included.",
      },
      {
        "@type": "Offer",
        name: "Sedan One-Way Mumbai to Goa",
        price: "8500",
        priceCurrency: "INR",
        description: "One-way sedan cab from Mumbai to Goa. Seats 4+1, 3 bags, toll included.",
      },
      {
        "@type": "Offer",
        name: "SUV One-Way Mumbai to Goa",
        price: "11000",
        priceCurrency: "INR",
        description: "One-way SUV cab from Mumbai to Goa. Seats 6+1, 4 bags, toll included.",
      },
      {
        "@type": "Offer",
        name: "Innova Crysta One-Way Mumbai to Goa",
        price: "13500",
        priceCurrency: "INR",
        description: "One-way Innova Crysta cab from Mumbai to Goa. Seats 6+1, 5 bags, toll included.",
      },
      {
        "@type": "Offer",
        name: "Tempo Traveller One-Way Mumbai to Goa",
        price: "18000",
        priceCurrency: "INR",
        description: "One-way Tempo Traveller from Mumbai to Goa. Seats 12, 8 bags, toll included.",
      },
    ],
  };
}

// Schema 3 — FAQ Page
function schemaFaqPage() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GOA_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

// Schema 4 — Breadcrumb
function schemaBreadcrumb() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.swarajtravel.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Outstation Cabs",
        item: "https://www.swarajtravel.com/outstation",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mumbai to Goa Cab",
        item: "https://www.swarajtravel.com/mumbai-to-goa-cab",
      },
    ],
  };
}

// Schema 5 — Aggregate Rating
function schemaAggregateRating() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mumbai to Goa Cab Service by Swaraj Travel",
    description:
      "One-way and round trip cab booking from Mumbai to Goa with fixed fare, verified drivers, ghat experience, and 24/7 WhatsApp support.",
    brand: {
      "@type": "Brand",
      name: "Swaraj Travel",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "50000",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "S." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Long trip but very comfortable. Driver was experienced on ghats and drove safely. Family enjoyed a lot.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "R." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Very smooth experience. Driver came on time, car was clean and driving was safe. Will book again.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "A." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Good service at reasonable price. Trip was smooth and driver knew all routes well. Overall mast experience.",
      },
    ],
  };
}

// Schema 6 — HowTo (Booking Process)
function schemaHowTo() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Book a Mumbai to Goa Cab with Swaraj Travel",
    description:
      "Book your Mumbai to Goa cab in under 2 minutes using WhatsApp. No app required, no advance payment needed.",
    totalTime: "PT2M",
    tool: [{ "@type": "HowToTool", name: "WhatsApp" }],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Send your trip details on WhatsApp",
        text: "Send a WhatsApp message with your travel date, pickup location in Mumbai, preferred car type, and Goa drop point.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Receive your confirmed fare",
        text: "Swaraj Travel sends you the exact fixed fare for your trip, with all inclusions clearly mentioned, within minutes.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Confirm your booking",
        text: "Reply with a simple confirmation on WhatsApp. Your cab is held immediately. No advance payment required.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Receive your driver details",
        text: "Two hours before your pickup time, you receive your driver's name, direct mobile number, and vehicle registration number.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Start your Mumbai to Goa journey",
        text: "Your driver arrives at your doorstep at the agreed time. You have the driver's direct number from the moment of assignment.",
      },
    ],
  };
}

// Schema 7 — WebPage (Page-Level Identity)
function schemaWebPage() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mumbai to Goa Cab | Fixed Fare, Verified Drivers | Swaraj Travel",
    url: "https://www.swarajtravel.com/mumbai-to-goa-cab",
    description:
      "Book Mumbai to Goa cab with Swaraj Travel. Fixed fare, no hidden charges, ghat-experienced drivers and instant WhatsApp booking 24/7. 50,000+ happy riders.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "Swaraj Travel",
      url: "https://www.swarajtravel.com",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.swarajtravel.com/images/mumbai-to-goa-cab-swaraj-travel-hero.webp",
      caption: "Mumbai to Goa cab booking by Swaraj Travel on NH66 coastal highway",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.swarajtravel.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Outstation Cabs",
          item: "https://www.swarajtravel.com/outstation",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Mumbai to Goa Cab",
          item: "https://www.swarajtravel.com/mumbai-to-goa-cab",
        },
      ],
    },
  };
}

export default function MumbaiToGoaPage() {
  return (
    <>
      <JsonLd data={schemaLocalBusiness()} />
      <JsonLd data={schemaService()} />
      <JsonLd data={schemaFaqPage()} />
      <JsonLd data={schemaBreadcrumb()} />
      <JsonLd data={schemaAggregateRating()} />
      <JsonLd data={schemaHowTo()} />
      <JsonLd data={schemaWebPage()} />
      <MumbaiToGoaContent />
    </>
  );
}
