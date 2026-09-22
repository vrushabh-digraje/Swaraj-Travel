import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PuneToMumbaiContent } from "@/components/pune-to-mumbai-content";
import { PUNE_FAQS } from "@/lib/pune-to-mumbai";

export const metadata: Metadata = {
  title: "Pune to Mumbai Cab Service | Rates from ₹14/km",
  description:
    "Book a Pune to Mumbai cab with rates published upfront, Dzire ₹14/km to Innova Crysta ₹20/km. One way, round trip, airport drops. Call 8830273575.",
  alternates: {
    canonical: "https://bookacab.co.in/pune-to-mumbai-cab/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Pune to Mumbai Cab Service | Rates from ₹14/km",
    description:
      "Per km rates published upfront for all 16 vehicles. One way, round trip and hourly. Mumbai airport T1 and T2 drops. Call 8830273575.",
    url: "https://bookacab.co.in/pune-to-mumbai-cab/",
    siteName: "Book A Cab",
    locale: "en_IN",
    images: [
      {
        url: "https://bookacab.co.in/assets/images/routes/pune-to-mumbai/pune-to-mumbai-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pune to Mumbai Cab Service by Book A Cab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pune to Mumbai Cab Service | Rates from ₹14/km",
    description:
      "Per km rates published upfront. One way, round trip, airport drops. Call 8830273575.",
    images: ["https://bookacab.co.in/assets/images/routes/pune-to-mumbai/pune-to-mumbai-og.jpg"],
  },
};

// Section 7. Main unified @graph schema block
function puneToMumbaiMainSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TaxiService",
        "@id": "https://bookacab.co.in/#taxiservice",
        name: "Book A Cab",
        url: "https://bookacab.co.in/",
        telephone: "+91-8830273575",
        email: "bookings@bookacab.co.in",
        image: "https://bookacab.co.in/assets/images/routes/pune-to-mumbai/pune-to-mumbai-cab-service.webp",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Digital Wallet",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near Airport",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Navi Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "City", name: "Pimpri-Chinchwad" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-8830273575",
          contactType: "customer service",
          availableLanguage: ["en", "hi", "mr"],
          areaServed: "IN",
        },
      },
      {
        "@type": "Service",
        "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#service",
        name: "Pune to Mumbai Cab Service",
        serviceType: "Outstation Cab Service",
        description:
          "One way, round trip and hourly cab service from Pune to Mumbai with per kilometre rates published upfront, covering Mumbai airport Terminal 1 and Terminal 2, Navi Mumbai and Thane.",
        provider: { "@id": "https://bookacab.co.in/#taxiservice" },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Mumbai" },
        ],
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://bookacab.co.in/pune-to-mumbai-cab/",
          servicePhone: "+91-8830273575",
          availableLanguage: ["en", "hi", "mr"],
        },
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "14",
          highPrice: "55",
          offerCount: "16",
          description: "Per kilometre rates. Toll, parking and driver food charged as per actual.",
          offers: [
            { "@type": "Offer", name: "Swift Dzire", price: "14", priceCurrency: "INR", description: "Hatchback, 5 seats, 2 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Aura", price: "14", priceCurrency: "INR", description: "Hatchback, 5 seats, 2 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Toyota Etios", price: "15", priceCurrency: "INR", description: "Hatchback, 5 seats, 2 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Ertiga", price: "16", priceCurrency: "INR", description: "SUV, 7 seats, 4 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Honda City", price: "16", priceCurrency: "INR", description: "Sedan, 5 seats, 2 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Toyota Corolla", price: "17", priceCurrency: "INR", description: "Sedan, 5 seats, 3 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Innova Crysta", price: "20", priceCurrency: "INR", description: "SUV, 7 seats, 5 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Kia Carens", price: "20", priceCurrency: "INR", description: "SUV, 7 seats, 4 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Innova", price: "24", priceCurrency: "INR", description: "SUV, 7 seats, 5 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Scorpio", price: "24", priceCurrency: "INR", description: "SUV, 7 seats, 4 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Tavera", price: "26", priceCurrency: "INR", description: "SUV, 12 seats, 8 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Audi", price: "27", priceCurrency: "INR", description: "Sedan, 5 seats, 3 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Tempo Traveller Non AC", price: "28", priceCurrency: "INR", description: "Bus, 12 seats, 10 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Tempo Traveller AC", price: "32", priceCurrency: "INR", description: "Bus, 12 seats, 10 bags. Rate per kilometre." },
            { "@type": "Offer", name: "Mini Bus", price: "55", priceCurrency: "INR", description: "Bus, 32 seats, large luggage capacity. Rate per kilometre." },
          ],
        },
      },
      {
        "@type": "Trip",
        "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#trip",
        name: "Pune to Mumbai by Cab",
        description: "Road journey from Pune to Mumbai covering around 148 to 150 km in 3 to 4 hours via the Mumbai Pune Expressway.",
        provider: { "@id": "https://bookacab.co.in/#taxiservice" },
        itinerary: {
          "@type": "ItemList",
          itemListElement: [
            { "@type": "ListItem", position: 1, item: { "@type": "City", name: "Pune" } },
            { "@type": "ListItem", position: 2, item: { "@type": "Place", name: "Talegaon" } },
            { "@type": "ListItem", position: 3, item: { "@type": "Place", name: "Lonavala" } },
            { "@type": "ListItem", position: 4, item: { "@type": "Place", name: "Khandala" } },
            { "@type": "ListItem", position: 5, item: { "@type": "Place", name: "Khopoli" } },
            { "@type": "ListItem", position: 6, item: { "@type": "Place", name: "Panvel" } },
            { "@type": "ListItem", position: 7, item: { "@type": "City", name: "Mumbai" } },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://bookacab.co.in/" },
          { "@type": "ListItem", position: 2, name: "Outstation Cabs", item: "https://bookacab.co.in/outstation/" },
          { "@type": "ListItem", position: 3, name: "Pune to Mumbai Cab Service", item: "https://bookacab.co.in/pune-to-mumbai-cab/" },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#webpage",
        url: "https://bookacab.co.in/pune-to-mumbai-cab/",
        name: "Pune to Mumbai Cab Service | Rates from ₹14/km",
        description: "Book a Pune to Mumbai cab with rates published upfront, Dzire ₹14/km to Innova Crysta ₹20/km. One way, round trip, airport drops.",
        inLanguage: "en-IN",
        isPartOf: { "@type": "WebSite", "@id": "https://bookacab.co.in/#website" },
        primaryImageOfPage: { "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#primaryimage" },
        breadcrumb: { "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#breadcrumb" },
      },
      {
        "@type": "ImageObject",
        "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#primaryimage",
        url: "https://bookacab.co.in/assets/images/routes/pune-to-mumbai/pune-to-mumbai-cab-service.webp",
        width: 1600,
        height: 900,
        caption: "Book A Cab cab on the Mumbai Pune Expressway for a Pune to Mumbai trip",
      },
      {
        "@type": "WebSite",
        "@id": "https://bookacab.co.in/#website",
        url: "https://bookacab.co.in/",
        name: "Book A Cab",
        inLanguage: "en-IN",
        publisher: { "@id": "https://bookacab.co.in/#taxiservice" },
      },
    ],
  };
}

// Section 7.1 Separate FAQPage schema block (All 20 FAQs)
function puneToMumbaiFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#faq",
    mainEntity: PUNE_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export default function PuneToMumbaiPage() {
  return (
    <>
      <JsonLd data={puneToMumbaiMainSchema()} />
      <JsonLd data={puneToMumbaiFaqSchema()} />
      <PuneToMumbaiContent />
    </>
  );
}
