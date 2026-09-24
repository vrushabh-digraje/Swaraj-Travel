import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { MumbaiToGoaContent } from "@/components/mumbai-to-goa-content";

export const metadata: Metadata = {
  title: "Mumbai to Goa Cab | Fixed Fare, Verified Drivers | Book A Cab",
  description:
    "Book Mumbai to Goa cab with Book A Cab. Fixed fare, no hidden charges, ghat-experienced drivers & instant WhatsApp booking 24/7. 50,000+ happy riders.",
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
      "Book Mumbai to Goa cab with Book A Cab. Fixed fare, no hidden charges, ghat-experienced drivers & instant WhatsApp booking 24/7. 50,000+ happy riders.",
    url: "https://bookacab.co.in/mumbai-to-goa-cab/",
    siteName: "Book A Cab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://bookacab.co.in/images/mumbai-to-goa-cab-book-a-cab-hero.webp",
        width: 1440,
        height: 600,
        alt: "Mumbai to Goa cab booking service by Book A Cab with verified driver on NH66 Konkan coastal highway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mumbai to Goa Cab | Fixed Fare, Verified Drivers | Book A Cab",
    description:
      "Book Mumbai to Goa cab with Book A Cab. Fixed fare, no hidden charges, ghat-experienced drivers & instant WhatsApp booking 24/7. 50,000+ happy riders.",
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
            name: "Outstation",
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
        name: "Mumbai to Goa Cab | Fixed Fare, Verified Drivers | Book A Cab",
        description:
          "Book Mumbai to Goa cab with Book A Cab. Fixed fare, no hidden charges, ghat-experienced drivers & instant WhatsApp booking 24/7. 50,000+ happy riders.",
        isPartOf: {
          "@id": "https://bookacab.co.in/#website",
        },
        about: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        inLanguage: "en-IN",
        dateModified: "2026-09-21",
        breadcrumb: {
          "@id": "https://bookacab.co.in/mumbai-to-goa-cab/#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://bookacab.co.in/mumbai-to-goa-cab/#service",
        name: "Mumbai to Goa Cab Service",
        description:
          "Book Mumbai to Goa cab with Book A Cab. Fixed fare, no hidden charges, ghat-experienced drivers & instant WhatsApp booking 24/7. 50,000+ happy riders.",
        serviceType: "Outstation taxi service",
        provider: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Goa" },
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: 8500,
          offerCount: 9,
          availability: "https://schema.org/InStock",
          url: "https://bookacab.co.in/mumbai-to-goa-cab/",
          seller: {
            "@id": "https://bookacab.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://bookacab.co.in/mumbai-to-goa-cab/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the distance from Mumbai to Goa by road?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The road distance from Mumbai to Goa via NH66 is approximately 595 km. This is the most commonly used and well-maintained route for the journey.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a Mumbai to Goa cab take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under normal conditions, the journey takes 10 to 12 hours including 1 to 2 short break stops. Traffic near Panvel and Khopoli during morning hours can add 45 to 90 minutes. A 4 AM to 5 AM departure or a 10 PM to 11 PM departure gives you the smoothest and fastest drive.",
            },
          },
          {
            "@type": "Question",
            name: "Which route does Book A Cab use for Mumbai to Goa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We use NH66, the coastal highway passing through Panvel, Mahad, Chiplun, Ratnagiri, Kankavli, and Sawantwadi before entering Goa. This is the most reliable, scenic, and consistently maintained route for this journey. If you specifically need the expressway and Kolhapur route, mention this at booking and we will accommodate it.",
            },
          },
          {
            "@type": "Question",
            name: "What is the cab fare from Mumbai to Goa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Book A Cab's one-way Mumbai to Goa cab fare starts at ₹7,500 for a Hatchback, ₹8,500 for a Sedan, ₹11,000 for an SUV, ₹13,500 for an Innova Crysta, and ₹18,000 for a Tempo Traveller. All fares include tolls and driver charges. Your exact confirmed fare is sent to you on WhatsApp before you book.",
            },
          },
          {
            "@type": "Question",
            name: "Are tolls included in the Mumbai to Goa cab fare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Toll charges applicable on the NH66 route are included in the Book A Cab one-way fare. The only additional government charge is the Maharashtra to Goa interstate state permit fee, which is charged at actuals. We inform you of this separately before you confirm your booking.",
            },
          },
          {
            "@type": "Question",
            name: "Are there any hidden charges in the Book A Cab fare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Book A Cab charges no platform fee, no booking commission, and no surprise additions. The fare confirmed on WhatsApp is what you pay. The only variables outside our control are the interstate state permit fee and the night allowance for pickups between 11 PM and 5 AM, both of which are communicated clearly before confirmation.",
            },
          },
          {
            "@type": "Question",
            name: "Does the Mumbai to Goa cab fare change during peak season?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "During high-demand periods such as Christmas, New Year, Diwali, and summer vacations from April to June, cab availability reduces and fares may reflect current market demand. We recommend booking 3 to 5 days in advance during these periods. Contact us on WhatsApp for your travel date's exact fare and availability.",
            },
          },
          {
            "@type": "Question",
            name: "How do I book a Mumbai to Goa cab with Book A Cab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Send us a WhatsApp message with your travel date, pickup location in Mumbai, preferred car type, and drop point in Goa. We confirm your fare and booking within minutes. No app is required, no advance payment is needed to hold your booking.",
            },
          },
          {
            "@type": "Question",
            name: "How far in advance should I book a Mumbai to Goa cab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For weekday trips, 1 to 2 days in advance is usually sufficient. For weekend getaways, long weekends, and peak season dates, book 3 to 5 days ahead to secure your preferred vehicle type and fare.",
            },
          },
          {
            "@type": "Question",
            name: "Can I change my Goa drop location after booking?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Minor changes within the same Goa zone, such as switching between two hotels in Calangute, can usually be accommodated without a fare change. A significant change such as switching from North Goa to South Goa will involve a fare adjustment. Message us on WhatsApp as early as possible if your plans change and we will sort it out transparently.",
            },
          },
          {
            "@type": "Question",
            name: "Is it safe to travel Mumbai to Goa by cab at night?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. NH66 is a national highway with consistent lighting for most of its length. Night traffic is lighter, making for a smoother and faster drive compared to daytime. Book A Cab assigns only experienced long-distance drivers for overnight trips. You receive your driver's direct contact number 2 hours before pickup, our support team is reachable on WhatsApp at all hours, and live location sharing is available throughout the journey.",
            },
          },
          {
            "@type": "Question",
            name: "Are Book A Cab drivers experienced on the ghat sections of the Mumbai to Goa route?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our outstation drivers are specifically selected for their long-distance route experience. They know the NH66 coastal highway, the ghat approaches near Mahad and Poladpur, and the river bridge sections that require careful speed management. One of our customers confirmed this directly: \"Driver was experienced on ghats and drove safely. Family enjoyed a lot.\" That standard applies to every Mumbai to Goa trip we operate.",
            },
          },
          {
            "@type": "Question",
            name: "What happens if my cab breaks down during the Mumbai to Goa journey?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our support team is reachable on WhatsApp and call 24 hours a day, 7 days a week. In the event of a breakdown, we coordinate roadside assistance and arrange an alternate vehicle to continue your journey from that point. You will always have a live point of contact from Book A Cab and will never be left without a clear resolution.",
            },
          },
          {
            "@type": "Question",
            name: "Which car is best for a family of 5 traveling Mumbai to Goa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For a family of 5 with full Goa holiday luggage, the Innova Crysta is the best choice. It seats 6+1 comfortably, carries 5 large bags in the boot, and handles both coastal highway and ghat road conditions better than a standard sedan on a 10 to 12 hour drive. An Ertiga SUV is a good option for a family of 4 with moderate luggage.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book a one-way cab from Mumbai to Goa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. One-way cab booking is our most popular Mumbai to Goa option. You pay only for the trip you need. There is no return journey cost included in a one-way fare.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide Goa to Mumbai cab service as well?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Book A Cab operates return cabs from Goa to Mumbai with the same standard of verified drivers and well-maintained vehicles. If you want to book both legs together, mention this when you message us on WhatsApp and we arrange both in one conversation.",
            },
          },
          {
            "@type": "Question",
            name: "Can I stop for sightseeing between Mumbai and Goa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Standard bookings are point-to-point from Mumbai to your Goa drop location. If you want to include a specific stop such as Ganpatipule, Tarkarli, or another coastal point, mention this at the time of booking. Extended detours beyond the standard route may involve an additional fare based on extra distance and time. We always confirm any adjustment with you before it applies.",
            },
          },
          {
            "@type": "Question",
            name: "Do your drivers speak Marathi or English?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most Book A Cab drivers are fluent in Marathi and conversational in Hindi. A working level of English is available. If you have a specific language preference, mention it at booking and we will do our best to match you accordingly.",
            },
          },
          {
            "@type": "Question",
            name: "How long is the free waiting time at my Mumbai pickup?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "15 minutes of free waiting time applies at all standard pickup locations. For Mumbai Airport pickups, 60 minutes of free waiting time is provided from the flight landing time. Waiting charges apply after the free waiting period ends.",
            },
          },
        ],
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
