import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/card";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { PackageTable } from "@/components/package-table";
import { PageHero } from "@/components/page-hero";
import { PACKAGE_RULES } from "@/lib/packages";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Tour Packages | Cab Rates in Mumbai - Swaraj Travel",
  description:
    "Swaraj Travel tour package pricing for Innova Crysta, Dzire, Ertiga, Tempo Traveller, and buses. Transparent per-km rates for Mumbai outstation trips.",
  path: "/packages",
  keywords: ["Mumbai cab packages", "Innova Crysta rate", "outstation cab fare"],
});

const faqs = [
  {
    question: "What is included in the package rate?",
    answer:
      "The listed rate is the per-km vehicle charge. Driver allowance, toll, parking, and GST are extra as actuals unless an all-inclusive quote is requested.",
  },
  {
    question: "Is there a daily kilometre limit?",
    answer:
      "Yes. Cab running is limited to 300 km per day unless you book extra kilometres in advance.",
  },
  {
    question: "Can I customise a package?",
    answer:
      "Yes. Share your route, dates, and vehicle on WhatsApp for a custom quote covering sightseeing, waiting, or multi-city trips.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Tour Packages"
        title="Explore Maharashtra"
        description="Choose from our range of tour packages with competitive rates and professional drivers."
        stats={[
          { value: "Best Rates", label: "Transparent pricing" },
          { value: "Safe", label: "Verified drivers" },
          { value: "Premium", label: "Clean AC fleet" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[{ name: "Packages", path: "/packages" }]} />
      </div>
      <PackageTable />
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy">
            Rules & Guidelines
          </h2>
          <ol className="space-y-4">
            {PACKAGE_RULES.map((rule, index) => (
              <Card key={rule} as="li" className="flex gap-4 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-gray-700">{rule}</p>
              </Card>
            ))}
          </ol>
        </div>
      </section>
      <FaqSection items={faqs} />
      <CtaBanner
        title="Need a custom package?"
        description="Call or WhatsApp for special requirements, group travel, and multi-day itineraries."
      />
    </>
  );
}
