"use client";

import { useState } from "react";

const OFFICES = {
  mumbai: {
    label: "Mumbai HQ (Airport)",
    q: "Chhatrapati Shivaji Maharaj International Airport Mumbai",
    directions: "https://maps.google.com/?q=Near+Airport,+Mumbai,+Maharashtra",
    desc: "Located near Terminal 1 & 2 for direct airport pick-ups."
  },
  pune: {
    label: "Pune Branch (Station)",
    q: "Pune Railway Station",
    directions: "https://maps.google.com/?q=Pune+Railway+Station,+Pune,+Maharashtra",
    desc: "Centrally located at Pune Station for regional outstation dispatches."
  }
};

export function InteractiveMap() {
  const [activeOffice, setActiveOffice] = useState<"mumbai" | "pune">("mumbai");
  const [isActive, setIsActive] = useState(false);

  const currentOffice = OFFICES[activeOffice];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <h2 className="font-display text-2xl font-bold text-navy">
          Find Us on Map
        </h2>
        {/* Office Toggle Tabs */}
        <div className="flex bg-gray-100 p-1 rounded-xl self-start sm:self-auto">
          {(Object.keys(OFFICES) as Array<keyof typeof OFFICES>).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setActiveOffice(key);
                setIsActive(false); // Relock map zoom when switching office
              }}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all duration-300 ${
                activeOffice === key
                  ? "bg-white text-primary shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {key === "mumbai" ? "Mumbai HQ" : "Pune Office"}
            </button>
          ))}
        </div>
      </div>

      <div 
        className="relative overflow-hidden rounded-3xl bg-white shadow-md h-[530px] w-full group border border-gray-100/50"
        onMouseLeave={() => setIsActive(false)}
      >
        <iframe
          title={`Book A Cab office in ${currentOffice.label}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(currentOffice.q)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
          className={`h-full w-full border-0 transition-all duration-300 ${
            isActive ? "pointer-events-auto scale-[1.01]" : "pointer-events-none"
          }`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Lock Overlay */}
        {!isActive && (
          <div 
            onClick={() => setIsActive(true)}
            className="absolute inset-0 bg-navy/5 backdrop-blur-[0.5px] hover:backdrop-blur-none cursor-pointer flex flex-col items-center justify-center transition-all duration-300"
          >
            <div className="bg-navy/90 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg border border-navy/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              Activate Interactive Map
            </div>
            <p className="text-[10px] text-navy/60 mt-2 font-semibold bg-white/80 px-2 py-0.5 rounded-md">
              Tap to zoom and explore {activeOffice === "mumbai" ? "Mumbai Airport" : "Pune Station"} area
            </p>
          </div>
        )}

        {/* Active Overlay Tag */}
        {isActive && (
          <div className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg shadow-md animate-fade-in-scale flex items-center gap-1 pointer-events-none">
            <span className="h-1.5 w-1.5 bg-white rounded-full animate-ping" />
            Interactive Mode Active
          </div>
        )}
      </div>

      <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-xs text-gray-500 font-medium">
          {currentOffice.desc}
        </p>
        <a
          href={currentOffice.directions}
          className="font-semibold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-1 text-sm self-start sm:self-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions in Google Maps
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
