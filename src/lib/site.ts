import type { Metadata } from "next";

/**
 * Canonical domain — single source of truth.
 *
 * www.bookacab.co.in ka DNS A record NAHI hai (domain resolve nahi hota).
 * Isliye SITE_URL hamesha non-www rahega. Ise kabhi "www." ke saath mat karna.
 *
 * NOTE: URL ke end me slash mat lagana — helper khud add karta hai.
 */
export const SITE_URL = "https://bookacab.co.in";

export const SITE_NAME = "Book A Cab";

export const SITE = {
  name: "Book A Cab",
  tagline: "Your Ride, Your Way",
  shortTagline: "Premium Rides",
  description:
    "Book a Mumbai cab for airport transfers, local rides and outstation trips to Pune, Nashik, Shirdi, Goa. Clear per-km rates, verified drivers. Call +91-9970294122.",
  phone: "+919970294122",
  phoneDisplay: "+91-9970294122",
  email: "bookings@bookacab.co.in",
  whatsapp: "919970294122",
  address: "Near Airport, Andheri East, Mumbai, Maharashtra 400099",
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

/**
 * next.config.js ke `trailingSlash` se ye EXACTLY match hona chahiye.
 * Mismatch hua to sitemap ka har URL ek extra 301 hop karega.
 */
export const TRAILING_SLASH = true;

/** Kisi bhi path ko poore canonical URL me badalta hai. */
export function absoluteUrl(path = "/"): string {
  if (path === "/" || path === "") return `${SITE_URL}/`;

  const clean = `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}`;
  return TRAILING_SLASH ? `${SITE_URL}${clean}/` : `${SITE_URL}${clean}`;
}

export function createMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = {
    url: image
      ? image.url.startsWith("http")
        ? image.url
        : `${SITE_URL}${image.url.startsWith("/") ? "" : "/"}${image.url}`
      : `${SITE_URL}/assets/images/routes/pune-to-mumbai/pune-to-mumbai-og.jpg`,
    width: image?.width || 1200,
    height: image?.height || 630,
    alt: image?.alt || `${title} | Book A Cab`,
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_IN",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
