import { Breadcrumbs } from "@/components/breadcrumbs";
import { Card } from "@/components/card";
import { ContactForm } from "@/components/contact-form";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { SITE, createMetadata, telHref, whatsappHref } from "@/lib/site";

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-5">
            <PhoneIcon className="h-6 w-6 text-primary" />
            <h2 className="mt-3 font-display text-lg font-bold">Call Us</h2>
            <a href={telHref()} className="mt-2 block text-sm text-gray-600">
              {SITE.phoneDisplay}
            </a>
          </Card>
          <Card className="p-5">
            <MailIcon className="h-6 w-6 text-primary" />
            <h2 className="mt-3 font-display text-lg font-bold">Email Us</h2>
            <a href={`mailto:${SITE.email}`} className="mt-2 block text-sm text-gray-600">
              {SITE.email}
            </a>
          </Card>
          <Card className="p-5">
            <WhatsAppIcon className="h-6 w-6 text-whatsapp" />
            <h2 className="mt-3 font-display text-lg font-bold">WhatsApp</h2>
            <a
              href={whatsappHref("Hi, I need help with a cab booking.")}
              className="mt-2 block text-sm text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quick chat support
            </a>
          </Card>
          <Card className="p-5">
            <PinIcon className="h-6 w-6 text-primary" />
            <h2 className="mt-3 font-display text-lg font-bold">Visit Us</h2>
            <p className="mt-2 text-sm text-gray-600">{SITE.address}</p>
          </Card>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <ContactForm />
          <div>
            <h2 className="mb-4 font-display text-2xl font-bold text-navy">
              Find Us on Map
            </h2>
            <div className="overflow-hidden rounded-3xl bg-white shadow-md">
              <iframe
                title="Swaraj Travel office near Mumbai Airport"
                src="https://maps.google.com/maps?q=Chhatrapati%20Shivaji%20Maharaj%20International%20Airport%20Mumbai&t=&z=12&ie=UTF8&iwloc=&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Near+Airport,+Mumbai,+Maharashtra"
              className="mt-3 inline-block font-semibold text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions
            </a>
          </div>
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
