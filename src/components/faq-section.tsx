import { faqSchema } from "@/lib/schema";
import type { FaqItem } from "@/lib/routes";
import { JsonLd } from "@/components/json-ld";

export function FaqSection({
  items,
  title = "Frequently Asked Questions",
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <JsonLd data={faqSchema(items)} />
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy md:text-4xl">
          {title}
        </h2>
        <div className="space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <summary className="cursor-pointer list-none font-display text-lg font-semibold text-navy marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-primary transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
