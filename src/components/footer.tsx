import Link from "next/link";
import {
  MailIcon,
  PhoneIcon,
  PinIcon,
  TaxiIcon,
} from "@/components/icons";
import { OUTSTATION_ROUTES } from "@/lib/routes";
import { SITE, telHref } from "@/lib/site";

const quickLinks = [
  { href: "/fleet", label: "Our Fleet" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact Us" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <TaxiIcon className="h-5 w-5" />
            </span>
            <strong className="font-display text-lg">{SITE.name}</strong>
          </div>
          <p className="text-sm text-gray-400">
            Your trusted partner for comfortable and safe travel across
            Maharashtra.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-white">Contact Info</h2>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <PhoneIcon className="mt-0.5 h-4 w-4 text-primary" />
              <a href={telHref()} className="hover:text-primary">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MailIcon className="mt-0.5 h-4 w-4 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <PinIcon className="mt-0.5 h-4 w-4 text-primary" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-white">
            Outstation Cabs
          </h2>
          <ul className="space-y-2 text-sm text-gray-400">
            {OUTSTATION_ROUTES.map((route) => (
              <li key={route.slug}>
                <Link href={`/${route.slug}`} className="hover:text-primary">
                  {route.from} to {route.to}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
