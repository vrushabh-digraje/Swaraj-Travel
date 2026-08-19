"use client";

import { useBooking } from "@/lib/booking-context";
import { Card } from "@/components/card";

const STEPS = [
  ["Choose Location", "Pickup, drop, date and time"],
  ["Select Cab", "Hatchback, sedan, SUV or bus"],
  ["Confirm Booking", "WhatsApp confirmation"],
  ["Enjoy Ride", "On-time, comfortable travel"],
];

export function ServicesSteps() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center font-display text-3xl font-bold text-navy">
          How It Works
        </h2>
        <div className="scrollbar-none -mx-4 flex gap-6 overflow-x-auto px-4 pb-6 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-4 md:px-0 md:pb-0">
          {STEPS.map(([title, body], index) => (
            <button
              key={title}
              onClick={() => openBooking()}
              className="w-[75vw] shrink-0 snap-center sm:w-[45vw] md:w-auto md:shrink md:snap-align-none text-left cursor-pointer focus:outline-none"
            >
              <Card className="h-full p-6 text-center border border-transparent transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/20 hover:ring-2 hover:ring-primary/5 group">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-navy font-bold text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                  {index + 1}
                </div>
                <h3 className="font-display font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{body}</p>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
