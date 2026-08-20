"use client";

import { useState } from "react";
import { Card } from "@/components/card";

const TABS = [
  {
    id: "mission",
    label: "Our Mission",
    title: "Our Mission",
    image: "/about-reception.webp",
    text: "To be a trusted transportation partner in Maharashtra, delivering value through safe, reliable, and customer-first cab services for airport, local, and outstation travel."
  },
  {
    id: "vision",
    label: "Our Vision",
    title: "Our Vision",
    image: "https://www.swarajtravel.com/assets/images/fleet/swift-dzire.webp",
    text: "To revolutionize city and outstation travel in Maharashtra by combining standard-setting passenger safety, certified local chauffeurs, and a transparent zero-hidden-fee pricing structure."
  },
  {
    id: "guarantee",
    label: "Our Guarantee",
    title: "Our Guarantee",
    image: "https://www.swarajtravel.com/assets/images/fleet/ertiga.webp",
    text: "We guarantee 100% on-time arrivals, freshly sanitized vehicles, and professional, background-verified highway drivers for all airport, local, and outstation trips."
  }
];

export function AboutMissionCard() {
  const [activeTab, setActiveTab] = useState("mission");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayTab, setDisplayTab] = useState("mission");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const current = TABS.find(t => t.id === displayTab)!;

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setIsTransitioning(true);
    setActiveTab(tabId);
    setTimeout(() => {
      setDisplayTab(tabId);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <>
      <Card className="p-0 overflow-hidden border border-gray-100 shadow-md flex flex-col h-full hover:shadow-lg transition-all duration-300 w-full max-w-[440px] mx-auto">
        {/* Top Image Container with zoom click action */}
        <div 
          onClick={() => setIsLightboxOpen(true)}
          className="relative h-56 w-full overflow-hidden bg-gray-100 cursor-zoom-in group/img"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.image}
            alt={current.title}
            className={`h-full w-full object-cover transition-all duration-300 ease-in-out group-hover/img:scale-105 ${
              isTransitioning ? "opacity-40 blur-[2px]" : "opacity-100 blur-0"
            }`}
          />
          {/* Hover Overlay Zoom Indicator */}
          <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white/95 text-navy text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Click to Enlarge
            </span>
          </div>
        </div>
        
        {/* Interactive Tabs Navigation */}
        <div className="flex border-b border-gray-150 bg-gray-50/50">
          {TABS.map(t => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => handleTabChange(t.id)}
                className={`flex-1 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer relative active:scale-95 ${
                  isActive
                    ? "bg-white text-primary"
                    : "text-gray-400 hover:text-navy hover:bg-gray-100/50"
                }`}
              >
                {t.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary animate-fade-in-scale" />
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom text */}
        <div className={`p-6 flex-grow flex flex-col justify-start min-h-[160px] transition-all duration-300 ${
          isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}>
          <h3 className="font-display text-xl font-bold text-navy">
            {current.title}
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            {current.text}
          </p>
        </div>
      </Card>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-4 transition-all duration-300 animate-fade-in cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div 
            className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl bg-white p-2 shadow-2xl animate-fade-in-scale"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.image}
              alt={current.title}
              className="max-w-full max-h-[80vh] rounded-xl object-contain"
            />
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-all cursor-pointer font-bold text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
