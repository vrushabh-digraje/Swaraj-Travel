import type { MetadataRoute } from "next";

import { OUTSTATION_ROUTES } from "@/lib/routes";
import { SITE_URL } from "@/lib/site";

const staticPaths = [
  "/",
  "/packages",
  "/fleet",
  "/services",
  "/outstation",
  "/cities",
  "/about",
  "/contact",
  "/terms-conditions",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const routeEntries = OUTSTATION_ROUTES.map((route) => ({
    url: `${SITE_URL}/${route.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...routeEntries];
}
