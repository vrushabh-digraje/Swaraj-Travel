import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { RoutePage } from "@/components/route-page";
import { getRoute } from "@/lib/routes";
import { createMetadata } from "@/lib/site";

const slug = "mumbai-to-nashik-cab";

export const metadata = (() => {
  const route = getRoute(slug);
  if (!route) return {};
  return createMetadata({
    title: route.metaTitle,
    description: route.metaDescription,
    path: `/${route.slug}`,
    keywords: ["Mumbai to Nashik cab", "Mumbai Airport to Nashik taxi"],
  });
})();

function nashikUnifiedSchema() {
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
        "@id": "https://bookacab.co.in/mumbai-to-nashik-cab/#breadcrumb",
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
            name: "Mumbai to Nashik Cab",
            item: "https://bookacab.co.in/mumbai-to-nashik-cab/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://bookacab.co.in/mumbai-to-nashik-cab/#webpage",
        url: "https://bookacab.co.in/mumbai-to-nashik-cab/",
        name: "Mumbai to Nashik Cab | Reliable One Way & Round Trip Taxi @ ₹13/km",
        description:
          "Book a Mumbai to Nashik cab for wine tours, Trimbakeshwar darshan, or airport drops. One-way and round-trip taxis on NH160 with 24/7 pickup.",
        isPartOf: {
          "@id": "https://bookacab.co.in/#website",
        },
        about: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        inLanguage: "en-IN",
        dateModified: "2026-09-21",
        breadcrumb: {
          "@id": "https://bookacab.co.in/mumbai-to-nashik-cab/#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://bookacab.co.in/mumbai-to-nashik-cab/#service",
        name: "Mumbai to Nashik Cab Service",
        description:
          "Book a Mumbai to Nashik cab for wine tours, Trimbakeshwar darshan, or airport drops. One-way and round-trip taxis on NH160 with 24/7 pickup.",
        serviceType: "Outstation taxi service",
        provider: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Nashik" },
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: 2400,
          offerCount: 9,
          availability: "https://schema.org/InStock",
          url: "https://bookacab.co.in/mumbai-to-nashik-cab/",
          seller: {
            "@id": "https://bookacab.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://bookacab.co.in/mumbai-to-nashik-cab/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the fastest route from Mumbai to Nashik?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We travel via the Mumbai-Nashik Highway (NH160). It usually takes about 4 hours. Early morning departures help avoid Thane traffic.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer Trimbakeshwar darshan packages?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Same-day or multi-day packages from Mumbai to Trimbakeshwar with Nashik sightseeing are available on request.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book a one-way drop from Mumbai Airport to Nashik?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We provide 24/7 pickup from Mumbai Airport and wait if your flight is delayed.",
            },
          },
          {
            "@type": "Question",
            name: "Are there clean food stops on the Mumbai-Nashik route?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Drivers know family restaurants near Padgha, Shahapur, and Igatpuri for breakfast or lunch.",
            },
          },
        ],
      },
    ],
  };
}

export default function MumbaiToNashikPage() {
  const route = getRoute(slug);
  if (!route) notFound();
  return (
    <>
      <JsonLd data={nashikUnifiedSchema()} />
      <RoutePage route={route} />
    </>
  );
}

