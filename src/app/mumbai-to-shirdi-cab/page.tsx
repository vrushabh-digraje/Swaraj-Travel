import { notFound } from "next/navigation";
import { RoutePage } from "@/components/route-page";
import { getRoute } from "@/lib/routes";
import { createMetadata } from "@/lib/site";

const slug = "mumbai-to-shirdi-cab";

export const metadata = (() => {
  const route = getRoute(slug);
  if (!route) return {};
  return createMetadata({
    title: route.metaTitle,
    description: route.metaDescription,
    path: `/${route.slug}`,
    keywords: ["Mumbai to Shirdi cab", "Sai Baba taxi Mumbai"],
  });
})();

export default function MumbaiToShirdiPage() {
  const route = getRoute(slug);
  if (!route) notFound();
  return <RoutePage route={route} />;
}
