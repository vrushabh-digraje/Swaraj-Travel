"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { useBooking } from "@/lib/booking-context";
import { PACKAGE_RATES } from "@/lib/packages";

const CATEGORIES = [
  { id: "All", label: "All Vehicles" },
  { id: "Sedan", label: "Sedans" },
  { id: "SUV", label: "SUVs" },
  { id: "Luxury", label: "Luxury" },
  { id: "Bus", label: "Tempos & Buses" },
];

export function PackageTable({ id }: { id?: string }) {
  const { openBooking } = useBooking();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRates = PACKAGE_RATES.filter((row) => {
    const matchesCategory =
      activeCategory === "All" || row.category === activeCategory;
    const matchesSearch = row.vehicle
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id={id} className="bg-light py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
            Tour Package Pricing
          </h2>
          <p className="mt-2 text-gray-600">
            Compare transparent rates across our well-maintained fleet
          </p>
        </div>

        {/* Search & Filter Bar */}
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
              placeholder="Search vehicle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 pl-10 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            />
            <svg
              className="absolute left-3.5 top-2.5 h-4.5 w-4.5 text-gray-400"
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

        {filteredRates.length > 0 ? (
          <>
            {/* Desktop Table View */}
            <div className="hidden overflow-x-auto rounded-2xl bg-white shadow-md border border-gray-100 md:block">
              <table className="w-full min-w-[720px] text-left border-collapse">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-sm">Vehicle</th>
                    <th className="px-6 py-4 text-center font-semibold text-sm">Seating</th>
                    <th className="px-6 py-4 text-center font-semibold text-sm">Rate/KM</th>
                    <th className="px-6 py-4 text-center font-semibold text-sm">Driver Food</th>
                    <th className="px-6 py-4 text-center font-semibold text-sm">Toll/Parking</th>
                    <th className="px-6 py-4 text-center font-semibold text-sm">Book</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRates.map((row) => (
                    <tr
                      key={`${activeCategory}-${row.vehicle}`}
                      className="border-t border-gray-100 hover:bg-gray-50 transition-colors duration-200 animate-fade-in-scale"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            {row.category === "Bus" ? (
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                              </svg>
                            ) : (
                              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16V9a4 4 0 00-4-4h-4M21 16H3" />
                              </svg>
                            )}
                          </div>
                          <span className="font-bold text-navy">{row.vehicle}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-700">
                        <span className="inline-flex items-center gap-1.5 justify-center">
                          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {row.seating}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-bold text-green-600 text-lg">{row.rate}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.driverFood}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{row.toll}</td>
                      <td className="px-6 py-4 text-center">
                        <Button size="sm" onClick={() => openBooking(row.vehicle)}>
                          Book Now
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="grid gap-4 md:hidden">
              {filteredRates.map((row) => (
                <Card
                  key={`${activeCategory}-${row.vehicle}`}
                  className="p-5 border border-transparent hover:border-primary/20 transition-all duration-300 animate-fade-in-scale"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        {row.category === "Bus" ? (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16V9a4 4 0 00-4-4h-4M21 16H3" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-navy text-sm leading-tight">{row.vehicle}</h3>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                          <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          {row.seating} Seater
                        </p>
                      </div>
                    </div>
                    <span className="font-bold text-green-600 text-sm">{row.rate}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-gray-600">
                    <div className="bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wide">Driver Allowance</span>
                      <span className="font-semibold text-navy">{row.driverFood}</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-xl border border-gray-100">
                      <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wide">Toll & Parking</span>
                      <span className="font-semibold text-navy">{row.toll}</span>
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => openBooking(row.vehicle)}
                  >
                    Book Now
                  </Button>
                </Card>
              ))}
            </div>
          </>
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
              No vehicles found
            </h3>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              We couldn&apos;t find any vehicles matching &quot;{searchQuery}&quot; under the selected category. Please check your spelling or clear your search query.
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
    </section>
  );
}
