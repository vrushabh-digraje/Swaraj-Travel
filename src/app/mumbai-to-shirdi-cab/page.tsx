import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { MumbaiToShirdiContent } from "@/components/mumbai-to-shirdi-content";
import { SHIRDI_FAQS } from "@/lib/mumbai-to-shirdi";

export const metadata: Metadata = {
  title: "Mumbai to Shirdi Cab Service | Swaraj Travel",
  description:
    "Book your Mumbai to Shirdi cab with verified drivers, 24/7 support and instant WhatsApp booking. Safe, comfortable rides for family and solo pilgrims.",
  alternates: {
    canonical: "https://www.swarajtravel.com/mumbai-to-shirdi-cab",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mumbai to Shirdi Cab Service | Swaraj Travel",
    description:
      "Book your Mumbai to Shirdi cab with verified drivers, 24/7 support and instant WhatsApp booking. Safe, comfortable rides for family and solo pilgrims.",
    url: "https://www.swarajtravel.com/mumbai-to-shirdi-cab",
    siteName: "Swaraj Travels",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.swarajtravel.com/images/mumbai-to-shirdi-cab-service.webp",
        width: 1200,
        height: 600,
        alt: "Mumbai to Shirdi cab service by Swaraj Travel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumbai to Shirdi Cab Service | Swaraj Travel",
    description:
      "Book your Mumbai to Shirdi cab with verified drivers, 24/7 support and instant WhatsApp booking. Safe, comfortable rides for family and solo pilgrims.",
    images: ["https://www.swarajtravel.com/images/mumbai-to-shirdi-cab-service.webp"],
  },
};

function shirdiUnifiedSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.swarajtravel.com/mumbai-to-shirdi-cab#service",
        serviceType: "Outstation Cab Service",
        name: "Mumbai to Shirdi Cab Service",
        provider: {
          "@type": "Organization",
          name: "Swaraj Travel",
          url: "https://www.swarajtravel.com/",
        },
        areaServed: {
          "@type": "Place",
          name: "Mumbai to Shirdi, Maharashtra",
        },
        description:
          "Mumbai to Shirdi cab service with verified drivers, 24/7 support, and instant WhatsApp booking for one way and round trip pilgrimage travel.",
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: "3000",
            priceCurrency: "INR",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.swarajtravel.com/mumbai-to-shirdi-cab#faq",
        mainEntity: SHIRDI_FAQS.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.swarajtravel.com/mumbai-to-shirdi-cab#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.swarajtravel.com/",
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
            name: "Mumbai to Shirdi Cab",
            item: "https://www.swarajtravel.com/mumbai-to-shirdi-cab",
          },
        ],
      },
    ],
  };
}

export default function MumbaiToShirdiPage() {
  return (
    <>
      <JsonLd data={shirdiUnifiedSchema()} />
      <MumbaiToShirdiContent />
    </>
  );
}
