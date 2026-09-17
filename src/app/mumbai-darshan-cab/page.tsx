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
  const businessId = `${absoluteUrl("/")}#business`;
  const pageUrl = absoluteUrl("/mumbai-darshan-cab");
  const serviceId = `${pageUrl}#service`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TaxiService",
        "@id": businessId,
        name: SITE.name,
        url: absoluteUrl("/"),
        telephone: SITE.phone,
        email: SITE.email,
        founder: {
          "@type": "Person",
          name: "Rajesh Sharma",
        },
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address,
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          postalCode: "400099",
          addressCountry: SITE.country,
        },
        areaServed: [
          { "@type": "City", name: "Mumbai" },
          { "@type": "City", name: "Thane" },
          { "@type": "City", name: "Navi Mumbai" },
        ],
        openingHoursSpecification: {
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
        sameAs: [`https://wa.me/${SITE.whatsapp}`],
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Mumbai Darshan Cab, Full Day Private Sightseeing Car Hire",
        serviceType: "Sightseeing car rental with driver",
        url: pageUrl,
        provider: {
          "@id": businessId,
        },
        areaServed: {
          "@type": "City",
          name: "Mumbai",
        },
        description:
          "Private chauffeur driven full day Mumbai sightseeing cab in 4, 8, 10 and 12 hour packages with fixed fares and a planned itinerary.",
        termsOfService: absoluteUrl("/terms-conditions"),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Mumbai Darshan Cab Packages",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Half Day, 4 hrs / 40 km",
              price: "560",
              priceCurrency: "INR",
            },
            {
              "@type": "Offer",
              name: "Full Day, 8 hrs / 80 km",
              price: "1120",
              priceCurrency: "INR",
            },
            {
              "@type": "Offer",
              name: "Extended Day, 10 hrs / 100 km",
              price: "1400",
              priceCurrency: "INR",
            },
            {
              "@type": "Offer",
              name: "Long Day, 12 hrs / 120 km",
              price: "1680",
              priceCurrency: "INR",
            },
          ],
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          lowPrice: "560",
          highPrice: "3120",
          priceValidUntil: "2027-03-31",
          availability: "https://schema.org/InStock",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          servicePhone: SITE.phone,
          serviceUrl: pageUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: absoluteUrl("/services"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mumbai Darshan Cab",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: MUMBAI_DARSHAN_FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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
