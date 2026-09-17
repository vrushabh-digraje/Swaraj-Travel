import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { MumbaiToMahabaleshwarContent } from "@/components/mumbai-to-mahabaleshwar-content";
import { MAHABALESHWAR_FAQS } from "@/lib/mumbai-to-mahabaleshwar";

export const metadata: Metadata = {
  title: "Mumbai to Mahabaleshwar Cab | Transparent Fares, Book A Cab",
  description:
    "Book a Mumbai to Mahabaleshwar cab with clear fares, no hidden charges, and easy online booking. One way and round trip options available.",
  alternates: {
    canonical: "https://www.bookacab.co.in/mumbai-to-mahabaleshwar-cab",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mumbai to Mahabaleshwar Cab — Transparent Fare Booking | Book A Cab",
    description:
      "Book a reliable Mumbai to Mahabaleshwar cab with clear upfront fares. One way & round trip options. Call/WhatsApp: +91-8856904131",
    url: "https://www.bookacab.co.in/mumbai-to-mahabaleshwar-cab",
    siteName: "Book A Cab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.bookacab.co.in/images/mahabaleshwar-cab-hero-book-a-cab.webp",
        width: 1200,
        height: 600,
        alt: "Mumbai to Mahabaleshwar cab by Book A Cab on the highway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumbai to Mahabaleshwar Cab — Transparent Fare Booking | Book A Cab",
    description:
      "Book a reliable Mumbai to Mahabaleshwar cab with clear upfront fares. One way & round trip options. Call/WhatsApp: +91-8856904131",
    images: ["https://www.bookacab.co.in/images/mahabaleshwar-cab-hero-book-a-cab.webp"],
  },
};

function mahabaleshwarUnifiedSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.bookacab.co.in/mumbai-to-mahabaleshwar-cab",
        name: "Mumbai to Mahabaleshwar Cab Booking with Book A Cab",
        description:
          "Book a Mumbai to Mahabaleshwar cab with clear fares, no hidden charges, and easy online booking. One way and round trip options available.",
        url: "https://www.bookacab.co.in/mumbai-to-mahabaleshwar-cab",
        headline: "Mumbai to Mahabaleshwar Cab | Transparent Fares, Book A Cab",
        breadcrumb: {
          "@id": "#breadcrumb",
        },
        mainEntity: {
          "@id": "#faq",
        },
        primaryImageOfPage: {
          "@id": "#hero-image",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://www.bookacab.co.in/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "ImageObject",
        "@id": "#hero-image",
        url: "https://www.bookacab.co.in/images/mahabaleshwar-cab-hero-book-a-cab.webp",
        width: 1200,
        height: 600,
        caption: "Mumbai to Mahabaleshwar cab by Book A Cab on the highway",
        name: "Mumbai to Mahabaleshwar cab by Book A Cab on the highway",
      },
      {
        "@type": "FAQPage",
        "@id": "#faq",
        mainEntity: MAHABALESHWAR_FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
      {
        "@type": "Organization",
        "@id": "#org",
        name: "Book A Cab",
        url: "https://www.bookacab.co.in/",
        logo: "https://www.bookacab.co.in/logo.png",
        description:
          "Premium cab booking service in Mumbai offering airport transfers, local rides, and outstation trips across Maharashtra. 24/7 support, verified drivers, transparent fares, fleet of 120+ premium cabs.",
        telephone: "+918856904131",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+918856904131",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
        sameAs: ["https://wa.me/918856904131"],
      },
      {
        "@type": "LocalBusiness",
        "@id": "#local",
        name: "Book A Cab",
        url: "https://www.bookacab.co.in/",
        telephone: "+918856904131",
        email: "bookings@bookacab.co.in",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        priceRange: "$$",
        openingHours: "Mo-Su 00:00-23:59",
        areaServed: {
          "@type": "State",
          name: "Maharashtra",
        },
        serviceArea: [
          {
            "@type": "City",
            name: "Mumbai",
          },
          {
            "@type": "City",
            name: "Mahabaleshwar",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cab Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mumbai to Mahabaleshwar Cab",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mumbai to Pune Cab",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mumbai to Nashik Cab",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mumbai to Shirdi Cab",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.bookacab.co.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Outstation Cabs",
            item: "https://www.bookacab.co.in/outstation",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mumbai to Mahabaleshwar Cab",
            item: "https://www.bookacab.co.in/mumbai-to-mahabaleshwar-cab",
          },
        ],
      },
    ],
  };
}

export default function MumbaiToMahabaleshwarPage() {
  return (
    <>
      <JsonLd data={mahabaleshwarUnifiedSchema()} />
      <MumbaiToMahabaleshwarContent />
    </>
  );
}
