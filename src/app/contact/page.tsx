import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactCards } from "@/components/contact-cards";
import { ContactForm } from "@/components/contact-form";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { InteractiveMap } from "@/components/interactive-map";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact Swaraj Travel | Mumbai Booking & Support",
  description:
    "Contact Swaraj Travel for Mumbai cab booking and 24/7 support. Call +91-8856904131, WhatsApp, or email travelsswaraj69@gmail.com. Near Airport, Mumbai.",
  path: "/contact",
});

const faqs = [
  {
    question: "How do I book a cab?",
    answer:
      "Use Book Now on the website, call us, or send a WhatsApp message with pickup, drop, date, and vehicle.",
  },
  {
    question: "What are your service areas?",
    answer:
      "We cover Mumbai, Pune, Nashik, Shirdi, Mahabaleshwar, Nagpur, and 50+ cities across Maharashtra.",
  },
  {
    question: "Do you provide airport transfers?",
    answer:
      "Yes. Mumbai Airport T1/T2 pickup and drop with flight tracking and meet & greet.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Cash, UPI, cards, and digital wallets. Corporate clients can request monthly billing.",
  },
  {
    question: "Are your drivers verified?",
    answer:
      "Yes. Drivers go through background verification and training before they are assigned trips.",
  },
  {
    question: "What if I need to cancel my booking?",
    answer:
      "You can cancel up to 2 hours before pickup. Charges may apply based on the booking terms.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Questions or a last-minute airport pickup? Our team is available 24/7 on call and WhatsApp."
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
        <ContactCards />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <InteractiveMap />
        </div>
      </div>
      <FaqSection items={faqs} />
      <CtaBanner
        title="Ready to book your ride?"
        description="Contact us now and experience dependable cab service in Mumbai."
      />
    </>
  );
}
