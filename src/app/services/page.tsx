import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { ServicesList } from "@/components/services-list";
import { ServicesSteps } from "@/components/services-steps";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Mumbai Cab Services | Airport, Local & Outstation - Book A Cab",
  description:
    "Book A Cab cab services in Mumbai: airport transfers, city rides, outstation trips, hourly rental, corporate transport, and wedding cars. Book 24/7.",
  path: "/services",
  keywords: [
    "Mumbai airport cab",
    "local taxi Mumbai",
    "outstation cab service",
    "corporate cab Mumbai",
  ],
});

const faqs = [
  {
    question: "Do you provide Mumbai Airport pickup?",
    answer:
      "Yes. We offer T1/T2 pickup with flight tracking, meet & greet, and luggage help, 24/7.",
  },
  {
    question: "Can I book hourly rental inside Mumbai?",
    answer:
      "Hourly rental is available for local travel with a 4-hour minimum. Extra km and waiting may apply.",
  },
  {
    question: "Do you issue GST invoices for companies?",
    answer:
      "Yes. Corporate accounts can request monthly billing and GST invoices.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Services"
        title="Our Services"
        description="Airport transfers, local rides, outstation trips, hourly rental, corporate travel, and wedding cars across Maharashtra."
        stats={[
          { value: "50K+", label: "Happy customers" },
          { value: "120+", label: "Vehicles" },
          { value: "1M+", label: "Km travelled" },
          { value: "4.8", label: "Average rating" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
        <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy md:text-4xl">
          Comprehensive Transportation
        </h2>
        <ServicesList />
        <p className="mt-8 text-center text-gray-600">
          Planning a long-distance trip? See{" "}
          <Link href="/outstation" className="font-semibold text-primary">
            outstation routes
          </Link>{" "}
          and{" "}
          <Link href="/cities" className="font-semibold text-primary">
            cities we cover
          </Link>
          .
        </p>
      </div>
      <ServicesSteps />
      <FaqSection items={faqs} />
      <CtaBanner
        title="Ready to experience premium service?"
        description="Book your ride now and see why travellers choose Book A Cab."
      />
    </>
  );
}
