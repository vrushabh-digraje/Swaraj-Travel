import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { ReviewsSection } from "@/components/reviews-section";
import { CitiesList } from "@/components/cities-list";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Cities We Cover | Cab Service Across Maharashtra - Book A Cab",
  description:
    "Book A Cab covers 50+ cities in Maharashtra including Mumbai, Pune, Nashik, Shirdi, Mahabaleshwar, Nagpur, and Konkan. Book local and outstation cabs.",
  path: "/cities",
  keywords: [
    "cab service Maharashtra",
    "Mumbai taxi coverage",
    "Pune cab booking",
  ],
});

export default function CitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pan-Maharashtra Coverage"
        title="Cities We Cover"
        description="Premium cab services across major cities and towns in Maharashtra. Airport, local, and outstation rides wherever you travel."
        stats={[
          { value: "50+", label: "Cities covered" },
          { value: "400+", label: "Pin codes served" },
          { value: "24/7", label: "Service" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[{ name: "Cities", path: "/cities" }]} />
        <h2 className="mb-8 font-display text-3xl font-bold text-navy">
          Major Cities
        </h2>
        <CitiesList />
      </div>
      <ReviewsSection />
      <CtaBanner
        title="Ready to book your ride?"
        description="Available in 50+ cities across Maharashtra. Book now for airport, local, or outstation travel."
      />
    </>
  );
}
