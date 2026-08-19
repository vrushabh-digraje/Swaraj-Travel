import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Terms & Conditions | Swaraj Travel",
  description:
    "Booking, cancellation, fare, and liability terms for Swaraj Travel cab services in Mumbai and across Maharashtra.",
  path: "/terms-conditions",
});

const sections = [
  {
    title: "Bookings",
    body: "Bookings are confirmed after you share pickup details and receive acknowledgement on call or WhatsApp. Vehicle availability is subject to confirmation.",
  },
  {
    title: "Fares",
    body: "Listed rates are per kilometre unless an all-inclusive quote is agreed. Driver allowance, toll, parking, interstate tax, and GST are extra as actuals.",
  },
  {
    title: "Duty hours",
    body: "Standard duty is 6:00 AM to 10:00 PM. Extra and night charges may apply outside this window. Daily running is typically limited to 300 km unless agreed otherwise.",
  },
  {
    title: "Cancellations",
    body: "Please cancel at least 2 hours before pickup. Late cancellations or no-shows may attract charges depending on the trip type and vehicle assigned.",
  },
  {
    title: "Passenger responsibility",
    body: "Passengers must provide accurate pickup information, keep valuables secure, and follow driver and traffic safety instructions.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="Please read these terms before booking a Swaraj Travel cab."
      />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <Breadcrumbs items={[{ name: "Terms & Conditions", path: "/terms-conditions" }]} />
        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-bold text-navy">
                {section.title}
              </h2>
              <p className="mt-2 text-gray-600">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
