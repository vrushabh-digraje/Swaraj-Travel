import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { SITE, createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy | Swaraj Travel",
  description:
    "How Swaraj Travel collects and uses booking details such as name, phone number, and trip information for cab enquiries.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="We only collect the information needed to confirm your cab booking and support your trip."
      />
      <div className="mx-auto max-w-3xl px-4 py-8">
        <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="font-display text-2xl font-bold text-navy">
              Information we collect
            </h2>
            <p className="mt-2">
              When you send an enquiry we may collect your name, phone number,
              email, pickup and drop locations, travel date, and vehicle
              preference.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-navy">
              How we use it
            </h2>
            <p className="mt-2">
              We use this information to confirm bookings, share quotes, provide
              driver and vehicle details, and offer customer support. We do not
              sell your personal information.
            </p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-bold text-navy">
              Contact
            </h2>
            <p className="mt-2">
              For privacy questions, email {SITE.email} or call {SITE.phoneDisplay}.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
