import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { AboutInteractive } from "@/components/about-interactive";
import { AboutMissionCard } from "@/components/about-mission-card";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About Us | Swaraj Travel Mumbai Cab Service",
  description:
    "Learn about Swaraj Travel, a Mumbai cab company offering airport transfers, local taxis, and outstation rides across Maharashtra with verified drivers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Swaraj Travel"
        title="Your Trusted Transportation Partner"
        description="Safe, reliable, and comfortable cab services across Maharashtra — from a small fleet to a trusted travel network."
        stats={[
          { value: "50K+", label: "Happy customers" },
          { value: "50+", label: "Cities covered" },
          { value: "120+", label: "Premium cabs" },
          { value: "24/7", label: "Support" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold tracking-wide text-primary uppercase">
              Our Story
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">
              From Vision to Reality
            </h2>
            <p className="mt-4 text-gray-600">
              Swaraj Travel was founded with a simple mission: safe, reliable,
              and affordable transportation across Maharashtra. What started as
              a small fleet has grown into a trusted cab network serving
              travellers every day from Mumbai.
            </p>
            <p className="mt-4 text-gray-600">
              We operate a modern fleet of well-maintained vehicles and work
              with professional drivers trained for city traffic, airport
              pickups, expressways, and ghat routes. Customer safety, driver
              welfare, and clear pricing remain our priorities as we expand
              across more cities.
            </p>
          </div>
          <AboutMissionCard />
        </section>
        <div className="mt-16">
          <AboutInteractive />
        </div>
      </div>
      <CtaBanner
        title="Ready to experience the difference?"
        description="Join thousands of travellers who trust Swaraj Travel for Mumbai and Maharashtra trips."
      />
    </>
  );
}
