import type { NextConfig } from "next";

const phpPages = [
  "packages",
  "fleet",
  "services",
  "cities",
  "about",
  "contact",
  "outstation",
  "terms-conditions",
  "privacy-policy",
  "mumbai-to-pune-cab",
  "mumbai-to-nashik-cab",
  "mumbai-to-shirdi-cab",
  "mumbai-to-mahabaleshwar-cab",
  "mumbai-darshan-cab",
  "mumbai-to-goa-cab",
  "pune-to-mumbai-cab",
];

const nextConfig: NextConfig = {
  // /packages -> 308 -> /packages/
  // lib/site.ts ke TRAILING_SLASH se match hona chahiye.
  trailingSlash: true,
  async redirects() {
    return [
      // www safety net — abhi www ka DNS nahi hai, par future me add ho jaye
      // to ye duplicate domain banne se rokega.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bookacab.co.in" }],
        destination: "https://bookacab.co.in/:path*",
        permanent: true,
      },
      {
        source: "/pune-to-mumbai-cab-service",
        destination: "/pune-to-mumbai-cab",
        permanent: true,
      },
      {
        source: "/pune-to-mumbai-cab-service/",
        destination: "/pune-to-mumbai-cab",
        permanent: true,
      },
      ...phpPages.map((path) => ({
        source: `/${path}.php`,
        destination: `/${path}`,
        permanent: true,
      })),
      {
        source: "/our-fleet",
        destination: "/fleet",
        permanent: true,
      },
      {
        source: "/cities-covered",
        destination: "/cities",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
