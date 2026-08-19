"use client";

import { useState } from "react";
import { BookNowButton } from "@/components/book-now-button";
import { Card } from "@/components/card";
import { CheckIcon } from "@/components/icons";
import { SERVICES } from "@/lib/services";

const CATEGORIES = [
  { id: "All", label: "All Services" },
  { id: "local", label: "Local & Airport" },
  { id: "outstation", label: "Long Distance" },
  { id: "premium", label: "Premium & Events" },
];

export function ServicesList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices = SERVICES.filter((service) => {
    // Categorize services based on slug
    let cat = "local";
    if (service.slug === "outstation-trips") {
      cat = "outstation";
    } else if (
      service.slug === "corporate-services" ||
      service.slug === "wedding-services"
    ) {
      cat = "premium";
    }

    const matchesCategory = activeCategory === "All" || cat === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Search & Filter controls */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs">
          <input
            type="text"
            placeholder="Search service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 pl-10 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
          />
          <svg
            className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {filteredServices.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <Card
              key={`${activeCategory}-${service.slug}`}
              className="flex flex-col p-6 border border-transparent hover:border-primary/20 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 group animate-fade-in-scale"
            >
              <h3 className="font-display text-2xl font-bold text-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-semibold text-primary">{service.price}</p>
              <div className="mt-auto pt-5">
                <BookNowButton cab={service.title} className="w-full" />
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
          <svg
            className="mx-auto h-12 w-12 text-gray-300 mb-4 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="font-display text-lg font-bold text-navy mb-1">
            No services found
          </h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            We couldn&apos;t find any services matching &quot;{searchQuery}&quot; under the selected category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="mt-5 text-sm font-bold text-primary hover:underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
