"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/card";
import { CITIES, REGIONS } from "@/lib/cities";

const REGION_TABS = [
  "All Regions",
  "Western Maharashtra",
  "North Maharashtra",
  "Mumbai Metropolitan",
  "Vidarbha",
  "Marathwada",
  "Konkan",
];

function getCityImage(name: string) {
  const n = name.toLowerCase();
  if (n.includes("mumbai")) {
    return "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=500&q=80";
  }
  if (n.includes("pune")) {
    return "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=500&q=80";
  }
  if (n.includes("nashik")) {
    return "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=500&q=80";
  }
  if (n.includes("shirdi")) {
    return "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&w=500&q=80";
  }
  if (n.includes("mahabaleshwar")) {
    return "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=80";
  }
  if (n.includes("lonavala")) {
    return "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=500&q=80";
  }
  if (n.includes("thane")) {
    return "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=500&q=80";
  }
  if (n.includes("nagpur")) {
    return "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=500&q=80"; // Lake sunset view (Futala Lake)
  }
  if (n.includes("sambhajinagar")) {
    return "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=80"; // Stone carved monument (Ellora/Ajanta Caves)
  }
  if (n.includes("kolhapur")) {
    return "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?auto=format&fit=crop&w=500&q=80"; // Maharaja Palace view
  }
  if (n.includes("alibag")) {
    return "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"; // Beach sunset
  }
  if (n.includes("satara")) {
    return "https://images.unsplash.com/photo-1434064511983-18c6dae20ed5?auto=format&fit=crop&w=500&q=80"; // Scenic valleys/waterfalls (Thoseghar)
  }
  return "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=80";
}

export function CitiesList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState("All Regions");

  const filteredCities = CITIES.filter((city) => {
    const matchesRegion =
      activeRegion === "All Regions" || city.region === activeRegion;
    const matchesSearch =
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const handleRegionClick = (regionName: string) => {
    setActiveRegion(regionName);
    const citiesHeader = document.getElementById("cities-grid-header");
    if (citiesHeader) {
      citiesHeader.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div id="cities-grid-header" className="scroll-mt-6" />
      {/* Search & Filter Bar */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        {/* Region Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {REGION_TABS.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 active:scale-95 cursor-pointer ${
                activeRegion === region
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs">
          <input
            type="text"
            placeholder="Search city..."
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

      {filteredCities.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCities.map((city) => (
            <Card
              key={`${activeRegion}-${city.name}`}
              className="flex flex-col p-0 overflow-hidden border border-transparent hover:border-primary/20 hover:-translate-y-1.5 hover:shadow-2xl hover:ring-2 hover:ring-primary/5 transition-all duration-300 group animate-fade-in-scale"
            >
              {/* Top city image (No padding, full width, slightly reduced height) */}
              <div className="relative h-40 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getCityImage(city.name)}
                  alt={city.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text content with slightly tighter padding */}
              <div className="flex flex-col flex-grow p-5">
                <div>
                  <span className="text-xs font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-lg">
                    {city.region}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                    {city.name}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {city.description}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100 mt-4">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Popular route linkages
                  </h4>
                  <ul className="space-y-2 text-sm">
                    {city.routes.map((route) => (
                      <li key={route.label}>
                        <Link
                          href={route.href}
                          className="inline-flex items-center gap-1 text-gray-700 hover:text-primary transition-colors font-medium group/link"
                        >
                          <span className="group-hover/link:underline">{route.label}</span>
                          <svg
                            className="h-3.5 w-3.5 transform transition-transform duration-300 group-hover/link:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
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
            No cities found
          </h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            We couldn&apos;t find any coverage cities matching &quot;{searchQuery}&quot; under the selected region.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveRegion("All Regions");
            }}
            className="mt-5 text-sm font-bold text-primary hover:underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Interactive Regional Coverage Section */}
      <section className="bg-white py-16 mt-16 border-t border-gray-150 -mx-4 px-4 sm:-mx-8 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-center font-display text-3xl font-bold text-navy">
            Regional Coverage
          </h2>
          <p className="mb-8 text-center text-gray-500 text-sm">
            Click any region to filter the major cities above
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((region) => {
              const isActive = activeRegion === region.name;
              return (
                <button
                  key={region.name}
                  onClick={() => handleRegionClick(region.name)}
                  className={`text-left rounded-2xl p-6 transition-all duration-300 border w-full cursor-pointer group active:scale-[0.98] shadow-sm ${
                    isActive
                      ? "bg-primary/[0.03] border-primary ring-4 ring-primary/5"
                      : "bg-white border-gray-100 hover:border-primary/20 hover:shadow-md hover:-translate-y-1"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`font-display text-lg font-bold transition-colors ${isActive ? "text-primary" : "text-navy"}`}>
                      {region.name}
                    </h3>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "bg-gray-50 text-gray-500 group-hover:bg-primary group-hover:text-white"
                    }`}>
                      {isActive ? "Active" : "Filter"}
                    </span>
                  </div>
                  <p className={`mt-3 text-xs leading-relaxed transition-colors ${isActive ? "text-navy/70" : "text-gray-500"}`}>
                    {region.places.join(" · ")}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
