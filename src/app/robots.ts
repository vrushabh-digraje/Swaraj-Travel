import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin",
          "/thank-you",
          "/*?*utm_",
          "/*?*fbclid",
          "/*?*gclid",
        ],
      },
      // AI crawlers — inhe allow rakhna hai. Mumbai Darshan page ke fares aur
      // timings AI answers me cite hone layak hain, ye naya traffic channel hai.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // `host` HATA diya — deprecated hai, Google padhta hi nahi (sirf Yandex),
    // aur pehle ye galat www domain point kar raha tha.
  };
}
