import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { MumbaiDarshanContent } from "@/components/mumbai-darshan-content";
import { MUMBAI_DARSHAN_FAQS } from "@/lib/mumbai-darshan";
import { SITE, absoluteUrl, createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Mumbai Darshan Cab | Fixed Fares and Full Day Itinerary",
  description:
    "Book a Mumbai Darshan cab from ₹1,120 for 8 hours and 80 km. Real itinerary, place timings, entry fees and every extra cost shown before you pay. Call " +
    SITE.phoneDisplay +
    ".",
  path: "/mumbai-darshan-cab",
  keywords: [
    "Mumbai Darshan Cab",
    "mumbai darshan cab booking",
    "cab service",
    "cabs",
    "Mumbai sightseeing cab",
    "private car hire Mumbai",
    "full day cab Mumbai",
  ],
});

function mumbaiDarshanUnifiedSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bookacab.co.in/#organization",
        "name": "Book A Cab",
        "legalName": "Book A Cab",
        "url": "https://bookacab.co.in/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://bookacab.co.in/#logo",
          "url": "https://bookacab.co.in/logo.png",
          "caption": "Book A Cab",
        },
        "image": {
          "@id": "https://bookacab.co.in/#logo",
        },
        "email": "bookings@bookacab.co.in",
        "telephone": "+919970294122",
        "foundingDate": "2010",
        "founder": {
          "@type": "Person",
          "name": "Rajesh Sharma",
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near Airport, Andheri East",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400099",
          "addressCountry": "IN",
        },
        "sameAs": ["https://wa.me/919970294122"],
      },
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": "https://bookacab.co.in/#localbusiness",
        "name": "Book A Cab",
        "description":
          "Mumbai based cab service offering Mumbai Darshan sightseeing tours, airport transfers and outstation taxi to Pune, Shirdi, Nashik, Mahabaleshwar and Goa. Published per-km rates, itemised billing and verified drivers.",
        "url": "https://bookacab.co.in/",
        "image": {
          "@id": "https://bookacab.co.in/#logo",
        },
        "logo": {
          "@id": "https://bookacab.co.in/#logo",
        },
        "parentOrganization": {
          "@id": "https://bookacab.co.in/#organization",
        },
        "telephone": "+919970294122",
        "email": "bookings@bookacab.co.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Near Airport, Andheri East",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400099",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.0989,
          "longitude": 72.8656,
        },
        "hasMap": "https://www.google.com/maps/search/?api=1&query=19.0989,72.8656",
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Credit Card, Debit Card, Digital Wallet",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            "opens": "00:00",
            "closes": "23:59",
          },
        ],
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Navi Mumbai" },
          { "@type": "City", "name": "Thane" },
          { "@type": "City", "name": "Pune" },
          { "@type": "City", "name": "Nashik" },
          { "@type": "City", "name": "Shirdi" },
          { "@type": "City", "name": "Mahabaleshwar" },
          { "@type": "City", "name": "Lonavala" },
          { "@type": "City", "name": "Goa" },
        ],
        "sameAs": ["https://wa.me/919970294122"],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+919970294122",
            "contactType": "reservations",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi", "mr"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://bookacab.co.in/#website",
        "url": "https://bookacab.co.in/",
        "name": "Book A Cab",
        "publisher": {
          "@id": "https://bookacab.co.in/#organization",
        },
        "inLanguage": "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://bookacab.co.in/mumbai-darshan-cab/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://bookacab.co.in/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://bookacab.co.in/services/",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Mumbai Darshan Cab",
            "item": "https://bookacab.co.in/mumbai-darshan-cab/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://bookacab.co.in/mumbai-darshan-cab/#webpage",
        "url": "https://bookacab.co.in/mumbai-darshan-cab/",
        "name": "Mumbai Darshan Cab | Fixed Fares and Full Day Itinerary",
        "description":
          "Book a Mumbai Darshan cab from ₹1,120 for 8 hours and 80 km. Real itinerary, place timings, entry fees and every extra cost shown before you pay. Call +91-9970294122.",
        "isPartOf": {
          "@id": "https://bookacab.co.in/#website",
        },
        "about": {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        "inLanguage": "en-IN",
        "dateModified": "2026-09-22",
        "breadcrumb": {
          "@id": "https://bookacab.co.in/mumbai-darshan-cab/#breadcrumb",
        },
      },
      {
        "@type": "TouristTrip",
        "@id": "https://bookacab.co.in/mumbai-darshan-cab/#trip",
        "name": "Mumbai Darshan Full Day Sightseeing Cab Tour",
        "description":
          "Private car with driver for a full day of Mumbai sightseeing. 8 hours and 80 km covering Gateway of India, Marine Drive, Siddhivinayak, Haji Ali and Juhu Beach.",
        "url": "https://bookacab.co.in/mumbai-darshan-cab/",
        "provider": {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        "touristType": ["Families", "Couples", "Senior citizens", "Groups"],
        "itinerary": {
          "@type": "ItemList",
          "numberOfItems": 12,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "TouristAttraction",
                "name": "Gateway of India",
              },
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "TouristAttraction",
                "name": "Taj Mahal Palace",
              },
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "TouristAttraction",
                "name": "Chhatrapati Shivaji Maharaj Terminus",
              },
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "TouristAttraction",
                "name": "CSMVS Museum",
              },
            },
            {
              "@type": "ListItem",
              "position": 5,
              "item": {
                "@type": "TouristAttraction",
                "name": "Marine Drive",
              },
            },
            {
              "@type": "ListItem",
              "position": 6,
              "item": {
                "@type": "TouristAttraction",
                "name": "Girgaon Chowpatty",
              },
            },
            {
              "@type": "ListItem",
              "position": 7,
              "item": {
                "@type": "TouristAttraction",
                "name": "Hanging Gardens",
              },
            },
            {
              "@type": "ListItem",
              "position": 8,
              "item": {
                "@type": "TouristAttraction",
                "name": "Mahalaxmi Temple",
              },
            },
            {
              "@type": "ListItem",
              "position": 9,
              "item": {
                "@type": "TouristAttraction",
                "name": "Haji Ali Dargah",
              },
            },
            {
              "@type": "ListItem",
              "position": 10,
              "item": {
                "@type": "TouristAttraction",
                "name": "Siddhivinayak Temple",
              },
            },
            {
              "@type": "ListItem",
              "position": 11,
              "item": {
                "@type": "TouristAttraction",
                "name": "Bandra Worli Sea Link",
              },
            },
            {
              "@type": "ListItem",
              "position": 12,
              "item": {
                "@type": "TouristAttraction",
                "name": "Juhu Beach",
              },
            },
          ],
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": 1120,
          "availability": "https://schema.org/InStock",
          "url": "https://bookacab.co.in/mumbai-darshan-cab/",
          "seller": {
            "@id": "https://bookacab.co.in/#localbusiness",
          },
        },
      },
      {
        "@type": "Service",
        "@id": "https://bookacab.co.in/mumbai-darshan-cab/#service",
        "name": "Mumbai Darshan Cab Hire",
        "description":
          "Full day private sightseeing car hire in Mumbai with driver, 8 hours and 80 km packages.",
        "serviceType": "Sightseeing taxi service",
        "provider": {
          "@id": "https://bookacab.co.in/#localbusiness",
        },
        "areaServed": [{ "@type": "City", "name": "Mumbai" }],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": 1120,
          "highPrice": 3120,
          "offerCount": 9,
          "availability": "https://schema.org/InStock",
          "url": "https://bookacab.co.in/mumbai-darshan-cab/",
          "seller": {
            "@id": "https://bookacab.co.in/#localbusiness",
          },
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Mumbai Darshan Cab Hire — vehicle options",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mumbai Darshan Cab Hire — Swift Dzire",
                "description": "Swift Dzire, 4+1 seater",
              },
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": 14,
                "priceCurrency": "INR",
                "unitCode": "KMT",
                "unitText": "per kilometre",
              },
              "availability": "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mumbai Darshan Cab Hire — Hyundai Aura",
                "description": "Hyundai Aura, 4+1 seater",
              },
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": 14,
                "priceCurrency": "INR",
                "unitCode": "KMT",
                "unitText": "per kilometre",
              },
              "availability": "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mumbai Darshan Cab Hire — Toyota Etios",
                "description": "Toyota Etios, 4+1 seater",
              },
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": 15,
                "priceCurrency": "INR",
                "unitCode": "KMT",
                "unitText": "per kilometre",
              },
              "availability": "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mumbai Darshan Cab Hire — Maruti Ertiga",
                "description": "Maruti Ertiga, 6+1 seater",
              },
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": 16,
                "priceCurrency": "INR",
                "unitCode": "KMT",
                "unitText": "per kilometre",
              },
              "availability": "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mumbai Darshan Cab Hire — Kia Carens",
                "description": "Kia Carens, 6+1 seater",
              },
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": 20,
                "priceCurrency": "INR",
                "unitCode": "KMT",
                "unitText": "per kilometre",
              },
              "availability": "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mumbai Darshan Cab Hire — Toyota Innova",
                "description": "Toyota Innova, 6+1 seater",
              },
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": 20,
                "priceCurrency": "INR",
                "unitCode": "KMT",
                "unitText": "per kilometre",
              },
              "availability": "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mumbai Darshan Cab Hire — Innova Crysta",
                "description": "Innova Crysta, 6+1 seater",
              },
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": 24,
                "priceCurrency": "INR",
                "unitCode": "KMT",
                "unitText": "per kilometre",
              },
              "availability": "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mumbai Darshan Cab Hire — Mahindra Scorpio",
                "description": "Mahindra Scorpio, 8+1 seater",
              },
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": 24,
                "priceCurrency": "INR",
                "unitCode": "KMT",
                "unitText": "per kilometre",
              },
              "availability": "https://schema.org/InStock",
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mumbai Darshan Cab Hire — Chevrolet Tavera",
                "description": "Chevrolet Tavera, 8+1 seater",
              },
              "priceCurrency": "INR",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": 26,
                "priceCurrency": "INR",
                "unitCode": "KMT",
                "unitText": "per kilometre",
              },
              "availability": "https://schema.org/InStock",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://bookacab.co.in/mumbai-darshan-cab/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does a Mumbai Darshan cab cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "A full day Mumbai Darshan cab starts at ₹1,120 for a Swift Dzire on an 8 hour and 80 km package, calculated at ₹14 per km. An Ertiga is ₹1,280, an Innova ₹1,600 and an Innova Crysta ₹1,920 for the same package. The fare covers the vehicle, not each person. Driver allowance, tolls, parking and entry tickets are extra.",
            },
          },
          {
            "@type": "Question",
            "name": "Are toll, parking and entry tickets included in the fare?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "No. The package fare covers the vehicle, fuel and driver for the booked hours and kilometres. Tolls and parking are billed at actual with receipts, driver allowance is charged extra, and entry tickets you pay at each venue. The worked example on this page shows what these typically add up to across a full day.",
            },
          },
          {
            "@type": "Question",
            "name": "What will the whole day actually cost, all in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "For a family of four doing a six stop South Mumbai circuit in a Swift Dzire, expect roughly ₹1,900 to ₹2,400 in total. That is the ₹1,120 package fare plus driver allowance, around ₹200 to ₹400 of parking and roughly ₹400 to ₹700 of museum entry for four people. A South Mumbai loop attracts no toll. We give you a specific estimate for your route before you book.",
            },
          },
          {
            "@type": "Question",
            "name": "Can Mumbai Darshan be done in one day?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The main landmarks can be covered in a well planned 10 to 12 hour day. All of Mumbai cannot. Elephanta Caves, Sanjay Gandhi National Park and Film City each need most of a day on their own. An 8 hour package realistically covers one half of the city, South or North, at a comfortable pace.",
            },
          },
          {
            "@type": "Question",
            "name": "What happens if we exceed 8 hours or 80 km?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Extra time is ₹150 per hour and extra distance is charged at your vehicle's per km rate, for example ₹14 per km for a Swift Dzire. Both appear as separate lines on your bill. There is no penalty rate. If your plan looks likely to overrun, we recommend a longer package at the booking stage instead.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I customise the itinerary and skip stops?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. The car is yours for the booked hours. Add stops, drop stops or stay longer somewhere, the only constraint is the total hours and kilometres in your package. Tell the driver as the day goes along, nothing has to be locked in advance.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I cancel or reschedule my booking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "You can cancel up to 2 hours before pickup. Cancellation charges may apply depending on how close to pickup you cancel and whether a vehicle has already been dispatched. Rescheduling to another date is usually easy if you let us know the day before.",
            },
          },
          {
            "@type": "Question",
            "name": "When do I get the driver's name and number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Before your pickup, not on the morning of the trip. You receive the driver's name, mobile number and the vehicle registration number in advance, and our support line stays available 24 hours if you need to reach anyone.",
            },
          },
          {
            "@type": "Question",
            "name": "Which Mumbai attractions are closed on Mondays?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Elephanta Caves, Nehru Planetarium, Taraporewala Aquarium and Sanjay Gandhi National Park with Kanheri Caves are all typically closed on Mondays. Temples, beaches, Marine Drive and the Gateway of India stay open. If your trip falls on a Monday we build the route around those closures.",
            },
          },
          {
            "@type": "Question",
            "name": "Is Elephanta Caves possible on the same day as a city tour?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Only on a 12 hour package. The ferry from the Gateway of India, the crossing, the climb and the return take four to five hours together. The caves shut on Mondays and ferries are suspended during the monsoon. With one day in Mumbai, choose either Elephanta or the city circuit rather than both.",
            },
          },
          {
            "@type": "Question",
            "name": "Which vehicle suits five adults with airport luggage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "An Innova or Innova Crysta. Five adults technically fit in an Ertiga but not comfortably alongside four or five suitcases across a full day. When you arrive from the airport with bags, book one category above what your headcount alone suggests.",
            },
          },
          {
            "@type": "Question",
            "name": "Is Mumbai Darshan suitable for senior citizens?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, with route planning. The cab waits at every stop so there is no walking between sites and no parking to manage. Haji Ali involves a long exposed causeway walk and Elephanta needs a boat plus a steep climb, so both are worth reconsidering for anyone with limited mobility. We suggest an Innova for easier boarding and a 10 or 12 hour package so the same stops fit at a slower pace.",
            },
          },
          {
            "@type": "Question",
            "name": "Is a private cab better than the Mumbai Darshan bus or an Ola or Uber rental?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "For three or more people a private cab usually works out similar per head to a bus tour while letting you control the route and the time at each stop. A bus tour is better value for solo travellers and couples on a budget. App cab hourly rentals suit one or two short hops but get awkward across a full day of long waits.",
            },
          },
          {
            "@type": "Question",
            "name": "Can you pick up from Thane or Navi Mumbai, and does it cost more?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we cover Thane and Navi Mumbai. The per km rate is the same, but the distance to your first landmark eats more of your package, so a 12 hour and 120 km booking is usually right from these areas rather than an 8 hour one. From Navi Mumbai the Atal Setu is normally the faster route, with the toll charged separately.",
            },
          },
          {
            "@type": "Question",
            "name": "Is the monsoon a bad time for Mumbai Darshan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Not bad, just different. Elephanta ferries are suspended and heavy rain can add a lot to travel times on low lying stretches. Coastal stops are spectacular in the rain, and indoor sites make a sensible backbone for a monsoon itinerary. We plan monsoon days with more indoor stops and more buffer time.",
            },
          },
          {
            "@type": "Question",
            "name": "Does the driver act as a guide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Our drivers know Mumbai routes, parking, temple timings and traffic patterns well, and will happily point things out along the way. They are experienced drivers rather than licensed tour guides, so if you want detailed historical commentary a licensed guide is the better option and we can discuss arranging one.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the best time to start the tour?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Between 7:30 and 8:30 am. An early start means thinner crowds at your first two stops and gets you ahead of the morning commute. Starting at 10 am typically costs you one full stop by the end of the day.",
            },
          },
          {
            "@type": "Question",
            "name": "Is there a half day Mumbai Darshan option?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, a 4 hour and 40 km package from ₹560 in a Swift Dzire, covering two or three stops. Four hours is our minimum hourly booking. It works well for an evening coastal route, a single temple visit or a short South Mumbai loop.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I do a temple only pilgrimage circuit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. A temple circuit follows aarti timings and queue patterns rather than traffic, and typically covers Siddhivinayak, Mahalaxmi, Haji Ali, Mumbadevi and ISKCON Juhu. Tell us which temples matter most and we plan the day backwards from those.",
            },
          },
          {
            "@type": "Question",
            "name": "Do you provide cabs for school, corporate or group Mumbai Darshan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes. Tempo Travellers in 13 and 17 seater configurations, a 20 seater mini bus and larger buses from 32 to 52 seats are available, priced on call. Corporate bookings can run on monthly billing with a GST invoice and a dedicated point of contact.",
            },
          },
          {
            "@type": "Question",
            "name": "How do I book a Mumbai Darshan cab today?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Tell us your date, your pickup address and roughly what you would like to see via call, WhatsApp, or our website booking modal. We come back with a suggested itinerary, the right package and a fare, before you commit to anything.",
            },
          },
        ],
      },
    ],
  };
}

export default function MumbaiDarshanPage() {
  return (
    <>
      <JsonLd data={mumbaiDarshanUnifiedSchema()} />
      <div className="mx-auto max-w-6xl px-4 pt-24 sm:pt-28 md:pt-32">
        <Breadcrumbs
          items={[
            { name: "Services", path: "/services" },
            { name: "Mumbai Darshan Cab", path: "/mumbai-darshan-cab" },
          ]}
        />
      </div>
      <MumbaiDarshanContent />
    </>
  );
}
