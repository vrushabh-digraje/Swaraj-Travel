"use client";

import { useMemo, useState } from "react";
import { FleetCard } from "@/components/fleet-card";
import { FLEET_CATEGORIES, VEHICLES, type VehicleCategory } from "@/lib/fleet";

export function FleetGrid({
  vehicles = VEHICLES,
  showFilter = false,
}: {
  vehicles?: typeof VEHICLES;
  showFilter?: boolean;
}) {
  const [category, setCategory] = useState<"All" | VehicleCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [seatingFilter, setSeatingFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const visible = useMemo(() => {
    return vehicles
      .filter((vehicle) => {
        // Category filter
        const matchesCategory = category === "All" || vehicle.category === category;
        
        // Search query filter
        const matchesSearch = vehicle.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        
        // Seating capacity filter
        let matchesSeats = true;
        if (seatingFilter !== "All") {
          // Parse seating number from string (e.g. "6+1" -> 6, "13/17" -> 13)
          const seatCountNum = parseInt(vehicle.seats.replace(/[^0-9]/g, ""));
          if (!isNaN(seatCountNum)) {
            if (seatingFilter === "4") {
              matchesSeats = seatCountNum <= 4;
            } else if (seatingFilter === "6") {
              matchesSeats = seatCountNum > 4 && seatCountNum <= 7;
            } else if (seatingFilter === "8+") {
              matchesSeats = seatCountNum >= 8;
            }
          }
        }
        
        return matchesCategory && matchesSearch && matchesSeats;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc" || sortBy === "price-desc") {
          // Parse rate per km from string (e.g. "₹20/km" -> 20, "On Call" -> 999999 or -1)
          const getPriceValue = (rateStr: string) => {
            const parsed = parseInt(rateStr.replace(/[^0-9]/g, ""));
            return isNaN(parsed) ? (sortBy === "price-asc" ? 999999 : -1) : parsed;
          };
          const priceA = getPriceValue(a.ratePerKm);
          const priceB = getPriceValue(b.ratePerKm);
          return sortBy === "price-asc" ? priceA - priceB : priceB - priceA;
        }
        if (sortBy === "rating") {
          return parseFloat(b.rating) - parseFloat(a.rating);
        }
        return 0; // default (no sorting)
      });
  }, [category, vehicles, searchQuery, seatingFilter, sortBy]);

  return (
    <div>
      {showFilter ? (
        <div className="mb-8 flex flex-col gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          {/* Category Tabs Row */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {FLEET_CATEGORIES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 active:scale-95 cursor-pointer ${
                  category === item
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-gray-50 text-navy hover:bg-gray-100 hover:text-primary"
                }`}
              >
                {item}
                <span className={`ml-1.5 text-xs ${category === item ? "text-white/80" : "text-gray-400"}`}>
                  ({item !== "All"
                    ? vehicles.filter((vehicle) => vehicle.category === item).length
                    : vehicles.length})
                </span>
              </button>
            ))}
          </div>

          {/* Search, Seating & Sort Filter Options Row */}
          <div className="grid gap-3 sm:grid-cols-3">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search vehicle name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 pl-10 text-sm focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <svg
                className="absolute left-3.5 top-3 h-4.5 w-4.5 text-gray-400"
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

            {/* Seating Filter Select */}
            <div>
              <select
                value={seatingFilter}
                onChange={(e) => setSeatingFilter(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-semibold text-navy focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 cursor-pointer"
              >
                <option value="All">All Seating Capacities</option>
                <option value="4">Up to 4 Seats</option>
                <option value="6">5 to 7 Seats</option>
                <option value="8+">8 or More Seats</option>
              </select>
            </div>

            {/* Sort Filter Select */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-semibold text-navy focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 cursor-pointer"
              >
                <option value="default">Default Order</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Rating: Highest First</option>
              </select>
            </div>
          </div>
        </div>
      ) : null}

      {visible.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((vehicle) => (
            <div
              key={`${category}-${vehicle.id}`}
              className="animate-fade-in-scale"
            >
              <FleetCard vehicle={vehicle} />
            </div>
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
            No vehicles found
          </h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            We couldn&apos;t find any vehicles matching your search criteria. Please check your filters or search term.
          </p>
          <button
            onClick={() => {
              setCategory("All");
              setSearchQuery("");
              setSeatingFilter("All");
              setSortBy("default");
            }}
            className="mt-5 text-sm font-bold text-primary hover:underline cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
