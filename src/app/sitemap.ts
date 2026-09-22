import type { MetadataRoute } from "next";

import { OUTSTATION_ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

type ChangeFreq = MetadataRoute.Sitemap[number]["changeFrequency"];

type StaticEntry = {
  path: string;
  priority: number;
  changeFrequency: ChangeFreq;
  /** ISO date — sirf tab badlo jab is page ka content SACH ME change ho. */
  lastModified: string;
};

/**
 * `new Date()` yahan intentionally use NAHI kiya gaya.
 * Har build pe saari dates badal jaati thi, Google ko lagta tha poori site
 * roz update hoti hai, aur wo lastmod signal pe bharosa karna band kar deta hai.
 */
const STATIC_PAGES: StaticEntry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-09-21" },
  { path: "/mumbai-darshan-cab", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-09-22" },
  { path: "/packages", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/fleet", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/services", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/outstation", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/cities", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-09-21" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly", lastModified: "2026-09-21" },
  { path: "/about", priority: 0.5, changeFrequency: "yearly", lastModified: "2026-09-21" },
  { path: "/terms-conditions", priority: 0.2, changeFrequency: "yearly", lastModified: "2026-09-21" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly", lastModified: "2026-09-21" },
];

/** Outstation routes ka fallback date. Kisi route ka content update ho to us
 * route object me `updatedAt` add kar dena — wo automatically use hoga. */
const ROUTES_LAST_MODIFIED = "2026-09-21";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: new Date(page.lastModified),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const routeEntries: MetadataRoute.Sitemap = OUTSTATION_ROUTES.map((route) => ({
    url: absoluteUrl(route.slug),
    lastModified: new Date(
      (route as { updatedAt?: string }).updatedAt ?? ROUTES_LAST_MODIFIED,
    ),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...routeEntries];
}
