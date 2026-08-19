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
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
