"use client";

import { useState } from "react";
import { Card } from "@/components/card";

const TABS = [
  {
    id: "mission",
    label: "Our Mission",
    title: "Our Mission",
    image: "/about-reception.png",
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
  const current = TABS.find(t => t.id === activeTab)!;

  return (
    <Card className="p-0 overflow-hidden border border-gray-100 shadow-md flex flex-col h-full">
      {/* Top Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.image}
          alt={current.title}
          className="h-full w-full object-cover transition-all duration-500 ease-in-out hover:scale-105"
        />
      </div>
      
      {/* Interactive Tabs Navigation */}
      <div className="flex border-b border-gray-100 bg-gray-50/50">
        {TABS.map(t => (
          <button
            key={t.id}
            type="button"
            onClick={() => setActiveTab(t.id)}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
              activeTab === t.id
                ? "bg-white text-primary border-t-2 border-primary"
                : "text-gray-400 hover:text-navy hover:bg-gray-100/50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Bottom text */}
      <div className="p-6 flex-grow flex flex-col justify-center min-h-[140px]">
        <h3 className="font-display text-xl font-bold text-navy">
          {current.title}
        </h3>
        <p className="mt-3 text-gray-600 leading-relaxed text-sm">
          {current.text}
        </p>
      </div>
    </Card>
  );
}
