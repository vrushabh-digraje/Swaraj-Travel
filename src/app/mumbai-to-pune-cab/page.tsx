import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { RoutePage } from "@/components/route-page";
import { getRoute } from "@/lib/routes";
import { createMetadata } from "@/lib/site";

const slug = "mumbai-to-pune-cab";

export const metadata = (() => {
  const route = getRoute(slug);
  if (!route) return {};
  return createMetadata({
    title: route.metaTitle,
    description: route.metaDescription,
    path: `/${route.slug}`,
    keywords: [
      "Mumbai to Pune cab",
      "Mumbai Airport to Pune taxi",
      "one way Pune cab",
    ],
  });
})();

function mumbaiToPuneUnifiedSchema() {
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
        "@id": "https://bookacab.co.in/mumbai-to-pune-cab/#breadcrumb",
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
            name: "Outstation",
            item: "https://bookacab.co.in/outstation/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mumbai to Pune Cab",
            item: "https://bookacab.co.in/mumbai-to-pune-cab/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://bookacab.co.in/mumbai-to-pune-cab/#webpage",
        url: "https://bookacab.co.in/mumbai-to-pune-cab/",
        name: "Mumbai to Pune Cab | Reliable One Way & Round Trip Taxi @ ₹13/km",
        description:
          "Book a Mumbai to Pune cab with Book A Cab. One-way and round-trip taxis via the Expressway, airport drops from T1/T2, Innova Crysta and Dzire from ₹13/km.",
        isPartOf: {
          "@id": "https://bookacab.co.in/#website",
        },
        about: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        inLanguage: "en-IN",
        dateModified: "2026-09-21",
        breadcrumb: {
          "@id": "https://bookacab.co.in/mumbai-to-pune-cab/#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://bookacab.co.in/mumbai-to-pune-cab/#service",
        name: "Mumbai to Pune Cab Service",
        description:
          "Book a Mumbai to Pune cab with Book A Cab. One-way and round-trip taxis via the Expressway, airport drops from T1/T2, Innova Crysta and Dzire from ₹13/km.",
        serviceType: "Outstation taxi service",
        provider: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Pune" },
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: 2100,
          offerCount: 9,
          availability: "https://schema.org/InStock",
          url: "https://bookacab.co.in/mumbai-to-pune-cab/",
          seller: {
            "@id": "https://bookacab.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://bookacab.co.in/mumbai-to-pune-cab/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much is the cab fare from Mumbai to Pune?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Mumbai to Pune cab fares start from ₹13/km. The total depends on the car type and whether you choose one-way or round trip. Tolls and parking are extra as actuals.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide Mumbai Airport to Pune cab service?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We specialize in Mumbai Airport T1/T2 to Pune drops. Drivers track your flight so they are ready at arrivals.",
            },
          },
          {
            "@type": "Question",
            name: "Is the Mumbai-Pune Expressway toll included?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To keep base rates transparent, expressway tolls and state taxes are usually extra. We can share an all-inclusive quote on WhatsApp.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book a one-way taxi from Mumbai to Pune?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You pay only for the distance you travel on a one-way booking. Return fare is not charged.",
            },
          },
        ],
      },
    ],
  };
}

export default function MumbaiToPunePage() {
  const route = getRoute(slug);
  if (!route) notFound();
  return (
    <>
      <JsonLd data={mumbaiToPuneUnifiedSchema()} />
      <RoutePage route={route} />
    </>
  );
}

