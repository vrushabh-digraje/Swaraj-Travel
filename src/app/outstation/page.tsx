import { Breadcrumbs } from "@/components/breadcrumbs";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { OutstationList } from "@/components/outstation-list";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Outstation Cabs from Mumbai | Pune, Nashik, Shirdi, Mahabaleshwar",
  description:
    "Book outstation cabs from Mumbai to Pune, Nashik, Shirdi, and Mahabaleshwar. One-way and round-trip taxis with airport pickup and transparent per-km rates.",
  path: "/outstation",
  keywords: [
    "Mumbai outstation cab",
    "Mumbai to Pune taxi",
    "Mumbai to Shirdi cab",
  ],
});

const faqs = [
  {
    question: "Do you offer one-way outstation cabs?",
    answer:
      "Yes. One-way fares are charged for the distance you travel. Round-trip packages are available if you need the same car for return.",
  },
  {
    question: "Can I get pickup from Mumbai Airport for outstation trips?",
    answer:
      "Yes. We provide T1/T2 airport pickup for Pune, Nashik, Shirdi, Mahabaleshwar, and other Maharashtra destinations.",
  },
  {
    question: "Are tolls included?",
    answer:
      "Tolls, parking, and driver allowance are usually extra as actuals. Ask for an all-inclusive quote on WhatsApp.",
  },
];

export default function OutstationPage() {
  return (
    <>
      <PageHero
        eyebrow="Outstation Cabs"
        title="Mumbai Outstation Taxi Service"
        description="Door-to-door cabs from Mumbai to Pune, Nashik, Shirdi, Mahabaleshwar, and more. One-way, round-trip, and airport transfers."
        stats={[
          { value: "4", label: "Featured routes" },
          { value: "From ₹14/km", label: "Starting fare" },
          { value: "24/7", label: "Pickup" },
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[{ name: "Outstation", path: "/outstation" }]} />
        <OutstationList />
      </div>
      <FaqSection items={faqs} />
      <CtaBanner
        title="Need another outstation route?"
        description="We cover 50+ cities across Maharashtra. Call or WhatsApp with your pickup and drop."
      />
    </>
  );
}
