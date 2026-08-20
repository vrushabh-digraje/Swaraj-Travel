import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { AboutInteractive } from "@/components/about-interactive";
import { AboutMissionCard } from "@/components/about-mission-card";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About Us | Book A Cab Mumbai Cab Service",
  description:
    "Learn about Book A Cab, a Mumbai cab company offering airport transfers, local taxis, and outstation rides across Maharashtra with verified drivers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Book A Cab"
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
        <section className="grid gap-10 md:grid-cols-2 items-start mt-8">
          <div>
            <p className="text-sm font-bold tracking-wide text-primary uppercase">
              Our Story
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy">
              From Vision to Reality
            </h2>
            <p className="mt-4 text-gray-600">
              Book A Cab was founded with a simple mission: safe, reliable,
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
            
            {/* Interactive CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/fleet"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary/20 px-5 py-2.5 text-sm font-bold text-primary hover:bg-primary/5 hover:border-primary transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Explore Fleet
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/outstation"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-primary-dark hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Plan Outstation Trip
              </a>
            </div>

            {/* Micro Feature Badges */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-gray-100 pt-6">
              {[
                { label: "Safe Travel", desc: "SOS support & GPS tracking", icon: "🛡️" },
                { label: "On-Time Cab", desc: "Guaranteed pickups", icon: "⏱️" },
                { label: "Transparent Fares", desc: "No hidden charges", icon: "💰" }
              ].map(badge => (
                <div 
                  key={badge.label}
                  className="rounded-xl border border-gray-100 bg-gray-50/30 p-3 hover:border-primary/20 hover:bg-white hover:shadow-md transition-all duration-300 group cursor-default"
                >
                  <span className="text-lg group-hover:scale-125 inline-block transform transition-transform duration-300">{badge.icon}</span>
                  <h4 className="font-bold text-navy text-xs mt-1.5">{badge.label}</h4>
                  <p className="text-[10px] text-gray-500 leading-tight mt-0.5">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <AboutMissionCard />
        </section>
        <div className="mt-16">
          <AboutInteractive />
        </div>
      </div>
      <CtaBanner
        title="Ready to experience the difference?"
        description="Join thousands of travellers who trust Book A Cab for Mumbai and Maharashtra trips."
      />
    </>
  );
}
