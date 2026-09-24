import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { MumbaiToMahabaleshwarContent } from "@/components/mumbai-to-mahabaleshwar-content";

export const metadata: Metadata = {
  title: "Mumbai to Mahabaleshwar Cab | Transparent Fares, Book A Cab",
  description:
    "Book a Mumbai to Mahabaleshwar cab with clear fares, no hidden charges, and easy online booking. One way and round trip options available.",
  alternates: {
    canonical: "https://bookacab.co.in/mumbai-to-mahabaleshwar-cab/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mumbai to Mahabaleshwar Cab — Transparent Fare Booking | Book A Cab",
    description:
      "Book a reliable Mumbai to Mahabaleshwar cab with clear upfront fares. One way & round trip options. Call/WhatsApp: +91-8856904131",
    url: "https://bookacab.co.in/mumbai-to-mahabaleshwar-cab/",
    siteName: "Book A Cab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://bookacab.co.in/images/mahabaleshwar-cab-hero-book-a-cab.webp",
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
    images: ["https://bookacab.co.in/images/mahabaleshwar-cab-hero-book-a-cab.webp"],
  },
};

function mahabaleshwarUnifiedSchema() {
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
        "@id": "https://bookacab.co.in/mumbai-to-mahabaleshwar-cab/#breadcrumb",
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
            name: "Mumbai to Mahabaleshwar Cab",
            item: "https://bookacab.co.in/mumbai-to-mahabaleshwar-cab/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://bookacab.co.in/mumbai-to-mahabaleshwar-cab/#webpage",
        url: "https://bookacab.co.in/mumbai-to-mahabaleshwar-cab/",
        name: "Mumbai to Mahabaleshwar Cab | Transparent Fares, Book A Cab",
        description:
          "Book a Mumbai to Mahabaleshwar cab with clear fares, no hidden charges, and easy online booking. One way and round trip options available.",
        isPartOf: {
          "@id": "https://bookacab.co.in/#website",
        },
        about: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        inLanguage: "en-IN",
        dateModified: "2026-09-21",
        breadcrumb: {
          "@id": "https://bookacab.co.in/mumbai-to-mahabaleshwar-cab/#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://bookacab.co.in/mumbai-to-mahabaleshwar-cab/#service",
        name: "Mumbai to Mahabaleshwar Cab Service",
        description:
          "Book a Mumbai to Mahabaleshwar cab with clear fares, no hidden charges, and easy online booking. One way and round trip options available.",
        serviceType: "Outstation taxi service",
        provider: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Mahabaleshwar" },
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: 3800,
          offerCount: 9,
          availability: "https://schema.org/InStock",
          url: "https://bookacab.co.in/mumbai-to-mahabaleshwar-cab/",
          seller: {
            "@id": "https://bookacab.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://bookacab.co.in/mumbai-to-mahabaleshwar-cab/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the distance between Mumbai and Mahabaleshwar by road?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The road distance between Mumbai and Mahabaleshwar is approximately 263 kilometres, and the drive typically takes around 5 to 6 hours depending on traffic conditions, including the Mumbai-Pune Expressway and the Mahabaleshwar ghat section.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a Mumbai to Mahabaleshwar cab cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The fare depends on the vehicle type and whether you choose a one way or round trip booking. At Book A Cab, one way fares for this route start from approximately ₹4,200 for a Swift Dzire (hatchback) and go up to around ₹9,600+ for a 12-seater Tempo Traveller AC. Innova Crysta, one of our most popular options, is priced in the ₹6,500–₹7,500 range for a one way trip. Contact us or use our booking form to get an exact quote for your date and vehicle choice.",
            },
          },
          {
            "@type": "Question",
            name: "Is a one way cab cheaper than a round trip cab for this route?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A one way cab is generally more economical if you do not need the vehicle for the return journey, since you are not paying for the driver and vehicle's trip back to Mumbai. A round trip works out better if you plan to use the same cab for multiple days around Mahabaleshwar and Panchgani. For round trip bookings, the return leg is typically charged at 1.4x to 1.5x of the one way fare rather than double.",
            },
          },
          {
            "@type": "Question",
            name: "What is included in the quoted cab fare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The quoted fare includes fuel, air-conditioning, and driver allowance for the full trip. Toll charges, parking charges, and local entry/pollution fees at Mahabaleshwar are charged separately at actuals and communicated to you at the time of booking. No charges are added silently after the trip.",
            },
          },
          {
            "@type": "Question",
            name: "What vehicle options are available for this route?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer Swift Dzire, Toyota Etios, Ertiga, Kia Carens, Innova Crysta, Scorpio, and Tempo Traveller (AC and Non-AC, 12-seater) for the Mumbai to Mahabaleshwar route. All vehicles are AC and available in different seating capacities to match your group size and luggage needs. For larger groups, a Tempo Traveller or Mini Bus (32-seater) can be arranged.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book a cab for Mumbai airport to Mahabaleshwar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer pickup from both T1 and T2 terminals at Mumbai's Chhatrapati Shivaji Maharaj International Airport (CSIA). When booking, mention your terminal and flight arrival time so we can align pickup accordingly. Allow some buffer for baggage collection and terminal exit.",
            },
          },
          {
            "@type": "Question",
            name: "What is your cancellation policy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can cancel free of charge with a full refund if you cancel at least 24 hours before your scheduled pickup. Cancellations within 24 hours of pickup incur a 50% charge (or the advance amount, whichever is higher). Same-day cancellations or no-shows are charged at the full confirmed fare. Rescheduling is allowed with 24 hours notice, subject to vehicle availability.",
            },
          },
          {
            "@type": "Question",
            name: "How are drivers verified for outstation trips?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All drivers in our fleet are background-checked and trained before they are assigned to any trip. We do not assign unverified drivers to outstation routes. Before your pickup, you will receive the driver's name and contact number so you know who to expect.",
            },
          },
          {
            "@type": "Question",
            name: "Is night travel available on this route?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we offer pickup for this route at night as well. Since our service is available 24/7, early morning and late night pickups can be scheduled. However, the Mahabaleshwar ghat section can be challenging at night during monsoon, so we recommend discussing any specific timing concerns with our team when booking.",
            },
          },
          {
            "@type": "Question",
            name: "What is the luggage limit for each vehicle?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Luggage capacity varies by vehicle: Swift Dzire and Toyota Etios carry 2 bags; Ertiga and Kia Carens carry 4 bags; Innova Crysta and Innova carry 5 bags; Scorpio carries 4 bags; Tempo Traveller carries 10 bags. If you have unusual luggage needs, mention them at the time of booking and we will confirm the right vehicle for you.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide a Tempo Traveller for group travel to Mahabaleshwar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we provide Tempo Traveller (12-seater, AC and Non-AC) for group travel to Mahabaleshwar. For very large groups, a Mini Bus (32-seater) is also available. Group bookings can be confirmed by sharing the number of passengers and date of travel with our team.",
            },
          },
          {
            "@type": "Question",
            name: "How do I confirm my Mumbai to Mahabaleshwar cab booking?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can confirm your booking by calling us at +91-8856904131, sending a WhatsApp message to +91-8856904131, or using the booking form on our website. After confirmation, you will receive your driver's name, contact number, vehicle type, and vehicle number before your pickup date.",
            },
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
