import { notFound } from "next/navigation";
import { RoutePage } from "@/components/route-page";
import { getRoute } from "@/lib/routes";
import { createMetadata } from "@/lib/site";

const slug = "pune-to-mumbai-cab";

export const metadata = (() => {
  const route = getRoute(slug);
  if (!route) return {};
  return createMetadata({
    title: route.metaTitle,
    description: route.metaDescription,
    path: `/${route.slug}`,
    keywords: [
      "Pune to Mumbai cab",
      "Pune to Mumbai Airport taxi",
      "one way Mumbai cab",
    ],
  });
})();

export default function PuneToMumbaiPage() {
  const route = getRoute(slug);
  if (!route) notFound();
  return <RoutePage route={route} />;
}
