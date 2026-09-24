import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PuneToMumbaiContent } from "@/components/pune-to-mumbai-content";


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
function puneToMumbaiUnifiedSchema() {
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
        "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#breadcrumb",
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
            name: "Pune to Mumbai Cab",
            item: "https://bookacab.co.in/pune-to-mumbai-cab/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#webpage",
        url: "https://bookacab.co.in/pune-to-mumbai-cab/",
        name: "Pune to Mumbai Cab Service | Rates from ₹14/km",
        description:
          "Book a Pune to Mumbai cab with rates published upfront, Dzire ₹14/km to Innova Crysta ₹20/km. One way, round trip, airport drops. Call 8830273575.",
        isPartOf: {
          "@id": "https://bookacab.co.in/#website",
        },
        about: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        inLanguage: "en-IN",
        dateModified: "2026-09-21",
        breadcrumb: {
          "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#service",
        name: "Pune to Mumbai Cab Service",
        description:
          "Book a Pune to Mumbai cab with rates published upfront, Dzire ₹14/km to Innova Crysta ₹20/km. One way, round trip, airport drops. Call 8830273575.",
        serviceType: "Outstation taxi service",
        provider: {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "City", name: "Mumbai" },
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: 2100,
          offerCount: 9,
          availability: "https://schema.org/InStock",
          url: "https://bookacab.co.in/pune-to-mumbai-cab/",
          seller: {
            "@id": "https://bookacab.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://bookacab.co.in/pune-to-mumbai-cab/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the fare for a Pune to Mumbai cab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Pune to Mumbai cab with Book A Cab is charged per kilometre, starting at ₹14 per km for a Swift Dzire, ₹16 per km for an Ertiga and ₹20 per km for an Innova Crysta. On a 150 km trip that is roughly ₹2,100 in a Dzire and ₹3,000 in an Innova Crysta, plus toll and driver food as per actual.",
            },
          },
          {
            "@type": "Question",
            name: "Is toll included in the Pune to Mumbai cab fare?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Toll is charged extra as per actual, which keeps the base per km rate lower and transparent. The Mumbai Pune Expressway toll is typically around ₹300 to ₹400 for a car. We do not mark it up. If you prefer a single figure, ask us for an all inclusive quote when you book.",
            },
          },
          {
            "@type": "Question",
            name: "Is the driver allowance charged separately on a one way drop?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Driver food allowance is charged extra on Pune to Mumbai trips, including one way drops, and it is listed separately so you can see exactly what you are paying for. The amount is confirmed on WhatsApp before your booking is accepted.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a night charge for a pickup between midnight and 6 am?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A night charge applies to rides between 11 PM and 6 AM, which covers most early morning airport transfers from Pune. The charge is confirmed at booking, so an overnight run to catch a 6 am flight is priced before you commit, not after.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a minimum kilometre charge on a one way Pune to Mumbai trip?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Billing on this route is per kilometre based on the actual door to door distance, which normally runs around 148 to 150 km, comfortably above any minimum. Your exact kilometre count is confirmed with your quote once you give us your pickup and drop addresses.",
            },
          },
          {
            "@type": "Question",
            name: "How much free waiting time do I get at pickup?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Waiting charges are agreed with you at the time of booking rather than applied automatically from a fixed meter. Tell us if you expect a delay at pickup, for example a late checkout, and we will factor it into the quote so nothing appears unexpectedly on the final bill.",
            },
          },
          {
            "@type": "Question",
            name: "Will the cab drop me at Terminal 1 or Terminal 2 of Mumbai airport?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Book A Cab drops at both Terminal 1 and Terminal 2 of Chhatrapati Shivaji Maharaj International Airport. Tell us your terminal at booking, since T1 at Santacruz and T2 at Andheri East have separate approach roads. If you are unsure, send your airline and flight number and we will note it.",
            },
          },
          {
            "@type": "Question",
            name: "What time should I leave Pune to catch a 9 am flight from Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For a 9 am domestic flight, leave Pune at around 2 am. That allows a 3 to 4 hour drive, an hour of traffic buffer, and 2 hours of airport reporting time. For a 9 am international flight, leave at around 1 am to allow 3 hours reporting. Add extra time during monsoon.",
            },
          },
          {
            "@type": "Question",
            name: "Can the cab pick me up from two different addresses in Pune?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Give us both addresses at the enquiry stage so the driver plans the route in the right order rather than backtracking. Mention it when booking rather than on the day, because a second pickup point changes both the pickup time and the total kilometres billed.",
            },
          },
          {
            "@type": "Question",
            name: "How many suitcases fit in a Dzire compared with an Innova Crysta?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Swift Dzire takes 2 bags and an Innova Crysta takes 5 bags. An Ertiga takes 4 bags and a Tempo Traveller takes 10. For four adults heading to Mumbai airport with full size suitcases, an Ertiga or Innova Crysta is the realistic choice, because four people and four large bags will not fit a Dzire.",
            },
          },
          {
            "@type": "Question",
            name: "What happens if my flight is delayed and I need a later airport pickup?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Message 8830273575 with your new landing time as soon as you know it. Our drivers track flights on airport bookings, so we usually see the delay first. We hold the booking and adjust the pickup where the driver's schedule allows. Any waiting charge is discussed with you, not applied automatically.",
            },
          },
          {
            "@type": "Question",
            name: "Is a round trip cheaper than booking two one way cabs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Usually yes, if you are returning within about 24 hours, because a one way fare has to account for the driver bringing the car back. For longer gaps between legs, two one way bookings can work out better. Send your travel dates to 8830273575 and we will price both options.",
            },
          },
          {
            "@type": "Question",
            name: "Do you cover Navi Mumbai, Thane and BKC at the same rate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The same per km rate applies across Mumbai city, Bandra Kurla Complex, the western suburbs, Navi Mumbai including Vashi, Nerul, Belapur and Panvel, and Thane. Since billing is per kilometre, a shorter run such as Panvel simply costs less than a longer one such as Borivali.",
            },
          },
          {
            "@type": "Question",
            name: "Is the Mumbai Pune Expressway safe at night and during monsoon?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We run this route 24 hours a day, including overnight airport transfers. All vehicles are GPS tracked and drivers are background verified with regular health checks. During monsoon, visibility through the Lonavala and Khandala ghats drops and drivers hold a slower speed on the descent, so allow an extra hour in heavy rain.",
            },
          },
          {
            "@type": "Question",
            name: "What vehicle should I book for a group of ten with luggage?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Book a Tempo Traveller. The AC version is ₹32 per km and the non AC version is ₹28 per km, both seating 12 with room for 10 bags. One Tempo Traveller is usually cheaper and easier to coordinate than two SUVs, and the whole group arrives together. Book a day or two ahead.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need to pay in advance or can I pay after the trip?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No large advance is required. Payment is due before or immediately after the ride, and we accept cash, credit and debit cards, UPI and digital wallets. Corporate clients can arrange monthly billing instead of paying per trip.",
            },
          },
          {
            "@type": "Question",
            name: "What is your cancellation policy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can cancel a booking up to 2 hours before your pickup time. A cancellation charge of 25% of the total fare applies as per our published terms. If your plans are uncertain, tell us early on WhatsApp, since rescheduling is usually easier to arrange than cancelling.",
            },
          },
          {
            "@type": "Question",
            name: "How far in advance should I book a Pune to Mumbai cab?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Same day booking usually works for daytime trips. For an early morning airport transfer, book the previous day so the vehicle and driver are assigned in time. For a Tempo Traveller or Mini Bus, give us a day or two, since those are assigned to a specific group.",
            },
          },
          {
            "@type": "Question",
            name: "Can I stop at Lonavala on the way from Pune to Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Tell us at booking and we will build the stop into your trip. Our drivers know the Old Highway exit and the ghat route through Lonavala and Khandala. Additional stops affect the total kilometres and the driver's time, so we confirm any change to the fare before you travel.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book a Mumbai to Pune cab as well?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We run this route in both directions, including Mumbai Airport T1 and T2 pickups where the driver tracks your flight and waits at arrivals. The same fleet and rate card apply. See our Mumbai to Pune cab page or call 8830273575.",
            },
          },
        ],
      },
    ],
  };
}

export default function PuneToMumbaiPage() {
  return (
    <>
      <JsonLd data={puneToMumbaiUnifiedSchema()} />
      <PuneToMumbaiContent />
    </>
  );
}
