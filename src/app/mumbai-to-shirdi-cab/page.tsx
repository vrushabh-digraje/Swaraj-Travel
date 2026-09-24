import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { MumbaiToShirdiContent } from "@/components/mumbai-to-shirdi-content";

export const metadata: Metadata = {
  title: "Mumbai to Shirdi Cab Service | Book A Cab",
  description:
    "Book your Mumbai to Shirdi cab with verified drivers, 24/7 support and instant WhatsApp booking. Safe, comfortable rides for family and solo pilgrims.",
  alternates: {
    canonical: "https://bookacab.co.in/mumbai-to-shirdi-cab/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mumbai to Shirdi Cab Service | Book A Cab",
    description:
      "Book your Mumbai to Shirdi cab with verified drivers, 24/7 support and instant WhatsApp booking. Safe, comfortable rides for family and solo pilgrims.",
    url: "https://bookacab.co.in/mumbai-to-shirdi-cab/",
    siteName: "Book A Cab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://bookacab.co.in/images/mumbai-to-shirdi-cab-service.webp",
        width: 1200,
        height: 600,
        alt: "Mumbai to Shirdi cab service by Book A Cab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumbai to Shirdi Cab Service | Book A Cab",
    description:
      "Book your Mumbai to Shirdi cab with verified drivers, 24/7 support and instant WhatsApp booking. Safe, comfortable rides for family and solo pilgrims.",
    images: ["https://bookacab.co.in/images/mumbai-to-shirdi-cab-service.webp"],
  },
};

function shirdiUnifiedSchema() {
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
        "@id": "https://bookacab.co.in/mumbai-to-shirdi-cab/#breadcrumb",
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
            name: "Mumbai to Shirdi Cab",
            item: "https://bookacab.co.in/mumbai-to-shirdi-cab/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://bookacab.co.in/mumbai-to-shirdi-cab/#webpage",
        url: "https://bookacab.co.in/mumbai-to-shirdi-cab/",
        name: "Mumbai to Shirdi Cab Service | Book A Cab",
        description:
          "Book your Mumbai to Shirdi cab with verified drivers, 24/7 support and instant WhatsApp booking. Safe, comfortable rides for family and solo pilgrims.",
        isPartOf: {
          "@id": "https://bookacab.co.in/#website",
        },
        about: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        inLanguage: "en-IN",
        dateModified: "2026-09-21",
        breadcrumb: {
          "@id": "https://bookacab.co.in/mumbai-to-shirdi-cab/#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://bookacab.co.in/mumbai-to-shirdi-cab/#service",
        name: "Mumbai to Shirdi Cab Service",
        description:
          "Book your Mumbai to Shirdi cab with verified drivers, 24/7 support and instant WhatsApp booking. Safe, comfortable rides for family and solo pilgrims.",
        serviceType: "Outstation taxi service",
        provider: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Shirdi" },
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: 3400,
          offerCount: 9,
          availability: "https://schema.org/InStock",
          url: "https://bookacab.co.in/mumbai-to-shirdi-cab/",
          seller: {
            "@id": "https://bookacab.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://bookacab.co.in/mumbai-to-shirdi-cab/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the fare for a Mumbai to Shirdi cab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fares typically start from around ₹3,000 one way for a sedan, and go higher for SUVs and Innova Crysta depending on vehicle type and travel date. Message us on WhatsApp for the exact fare for your travel date.",
            },
          },
          {
            "@type": "Question",
            name: "What is the distance between Mumbai and Shirdi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The road distance between Mumbai and Shirdi is approximately 240 kilometres, and the journey usually takes between 4.5 and 6 hours depending on traffic and your pickup point.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book a one way cab from Mumbai to Shirdi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, one way cabs are available if you plan to stay in Shirdi and do not need the same vehicle to bring you back to Mumbai.",
            },
          },
          {
            "@type": "Question",
            name: "What happens if darshan takes longer than expected and the driver has to wait?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A standard free waiting window is included in your booking. If your darshan or visit takes longer than that, a waiting charge applies beyond the free limit, which will be confirmed to you at the time of booking.",
            },
          },
          {
            "@type": "Question",
            name: "Is there an extra charge for early morning pickup from Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our service runs 24/7, so early morning pickups are available without any special booking process. Any applicable night charge, if relevant to your exact pickup time, will be shared upfront before you confirm.",
            },
          },
          {
            "@type": "Question",
            name: "Can the cab also stop at Shani Shingnapur or other nearby places on the way?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, additional stops can usually be arranged. Let our team know your planned stops while booking so the route and fare can be adjusted accordingly.",
            },
          },
          {
            "@type": "Question",
            name: "What is the cancellation or rescheduling policy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cancellations made well in advance are generally free, while last minute cancellations may attract a partial charge since the vehicle is already blocked for you. Rescheduling is usually possible depending on vehicle availability.",
            },
          },
          {
            "@type": "Question",
            name: "Which vehicle is best for a family travelling with luggage?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For most families with moderate luggage, an SUV works well. For larger families or those who want extra comfort on the long drive, the Innova Crysta is generally the better choice.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to carry ID proof for the trip?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, carrying a valid photo ID is a good practice for any outstation trip and is recommended for your Mumbai to Shirdi journey as well.",
            },
          },
          {
            "@type": "Question",
            name: "Is one driver sufficient for a same day return trip from Mumbai to Shirdi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For most same day return trips, one driver is sufficient given the moderate distance. If you have specific concerns about a very tight schedule, let our team know while booking so we can plan the trip accordingly.",
            },
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
