import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/card";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { FleetGrid } from "@/components/fleet-grid";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Mumbai Cab Fleet | Hatchback, Sedan, SUV & Bus - Swaraj Travel",
  description:
    "Browse Swaraj Travel’s Mumbai cab fleet: Innova Crysta, Ertiga, Swift Dzire, Tempo Traveller, and mini buses. Well-maintained AC vehicles with 24/7 booking.",
  path: "/fleet",
  keywords: ["Mumbai cab fleet", "Innova Crysta hire", "Tempo Traveller Mumbai"],
});

const faqs = [
  {
    question: "Which car is best for Mumbai to Pune?",
    answer:
      "Swift Dzire or Etios for 3-4 people. Ertiga or Innova Crysta for families with luggage. Tempo Traveller for groups.",
  },
  {
    question: "Are all vehicles air-conditioned?",
    answer:
      "Most of the fleet is AC. Tempo Traveller is available in AC and non-AC options.",
  },
  {
    question: "Can I choose a specific model?",
    answer:
      "Yes. Mention the vehicle in the booking form. If that model is unavailable, we confirm an equivalent option before pickup.",
  },
];

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Collection"
        title="Our Premium Fleet"
        description="Choose from well-maintained, comfortable vehicles — from economical hatchbacks to Innova Crysta and group buses."
        stats={[
          { value: "16+", label: "Vehicles" },
          { value: "4", label: "Categories" },
          { value: "4.8", label: "Avg rating" },
          { value: "24/7", label: "Available" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[{ name: "Fleet", path: "/fleet" }]} />
        <h2 className="mb-6 text-center font-display text-3xl font-bold text-navy">
          Browse by Category
        </h2>
        <FleetGrid showFilter />
      </div>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-4">
          {[
            ["Quality Assured", "Regular maintenance and quality checks"],
            ["100% Safe", "GPS tracking and emergency support"],
            ["Sanitized", "Deep cleaned before every ride"],
            ["Expert Drivers", "Trained and verified professionals"],
          ].map(([title, body]) => (
            <Card key={title} className="p-6 text-center">
              <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-gray-600">{body}</p>
            </Card>
          ))}
        </div>
      </section>
      <FaqSection items={faqs} />
      <CtaBanner
        title="Ready to book your ride?"
        description="Choose your vehicle and send a WhatsApp enquiry for an instant quote."
      />
    </>
  );
}
