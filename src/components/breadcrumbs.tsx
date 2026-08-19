import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

type Crumb = {
  name: string;
  path: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
      <JsonLd data={breadcrumbSchema(trail)} />
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((item, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last ? (
                <span className="font-medium text-navy" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-primary">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
