"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/card";
import { OUTSTATION_ROUTES } from "@/lib/routes";

export function OutstationList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRoutes = OUTSTATION_ROUTES.filter((route) => {
    return (
      route.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.intro.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.to.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div>
      {/* Search Filter input */}
      <div className="mb-8 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
        <div className="text-navy font-semibold text-lg hidden sm:block">
          Featured Destinations
        </div>
        <div className="relative w-full sm:max-w-xs">
          <input
            type="text"
            placeholder="Search destination..."
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

      {filteredRoutes.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredRoutes.map((route) => (
            <Link key={route.slug} href={`/${route.slug}`} className="group">
              <Card className="flex h-full flex-col justify-between border border-transparent p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-2xl hover:ring-2 hover:ring-primary/5">
                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {route.badge}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                    {route.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">{route.intro}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-semibold text-navy/70">
                    {route.distance} · {route.duration}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                    <span>Explore Route</span>
                    <svg
                      className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Card>
            </Link>
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
            No routes found
          </h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            We couldn&apos;t find any routes matching &quot;{searchQuery}&quot;. Please check your spelling.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="mt-5 text-sm font-bold text-primary hover:underline cursor-pointer"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
