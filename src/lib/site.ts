import type { Metadata } from "next";

export const SITE_URL = "https://www.bookacab.co.in";

export const SITE = {
  name: "Book A Cab",
  tagline: "Your Ride, Your Way",
  shortTagline: "Premium Rides",
  description:
    "Book Mumbai cabs for airport transfers, local rides, and outstation trips across Maharashtra. 24/7 support, verified drivers, and instant booking on WhatsApp.",
  phone: "+918856904131",
  phoneDisplay: "+91-8856904131",
  email: "bookings@bookacab.co.in",
  whatsapp: "918856904131",
  address: "Near Airport, Mumbai, Maharashtra, India",
  city: "Mumbai",
  region: "Maharashtra",
  country: "IN",
  hours: "24/7",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/fleet", label: "Fleet" },
  { href: "/services", label: "Services" },
  { href: "/cities", label: "Cities" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function telHref() {
  return `tel:${SITE.phone}`;
}

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
