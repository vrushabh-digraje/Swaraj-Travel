import { notFound } from "next/navigation";
import { RoutePage } from "@/components/route-page";
import { getRoute } from "@/lib/routes";
import { createMetadata } from "@/lib/site";

const slug = "mumbai-to-pune-cab";

export const metadata = (() => {
  const route = getRoute(slug);
  if (!route) return {};
  return createMetadata({
    title: route.metaTitle,
    description: route.metaDescription,
    path: `/${route.slug}`,
    keywords: [
      "Mumbai to Pune cab",
      "Mumbai Airport to Pune taxi",
      "one way Pune cab",
    ],
  });
})();

export default function MumbaiToPunePage() {
  const route = getRoute(slug);
  if (!route) notFound();
  return <RoutePage route={route} />;
}
