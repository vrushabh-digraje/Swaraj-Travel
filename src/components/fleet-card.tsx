"use client";

import { Card } from "@/components/card";
import { Button } from "@/components/button";
import {
  FuelIcon,
  LuggageIcon,
  SnowflakeIcon,
  StarIcon,
  UsersIcon,
} from "@/components/icons";
import { useBooking } from "@/lib/booking-context";
import type { Vehicle } from "@/lib/fleet";

const categoryColor: Record<Vehicle["category"], string> = {
  SUV: "bg-emerald-500",
  Hatchback: "bg-sky-500",
  Sedan: "bg-violet-500",
  Bus: "bg-orange-500",
};

export function FleetCard({ vehicle }: { vehicle: Vehicle }) {
  const { openBooking } = useBooking();

  return (
    <Card className="overflow-hidden group">
      <div
        className="relative h-44 md:h-56 w-full overflow-hidden bg-white border-b border-gray-100 flex items-center justify-center p-5"
        aria-hidden="true"
      >
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-103"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`${categoryColor[vehicle.category]} rounded-full px-3 py-1 text-xs font-bold text-white shadow-sm`}
          >
            {vehicle.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-sm font-bold text-navy shadow-sm">
          <StarIcon className="h-3.5 w-3.5 text-accent" />
          {vehicle.rating}
        </div>
        <div className="absolute bottom-3 left-3 z-10 rounded-full bg-success px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
          Available now
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-navy">
          {vehicle.name}
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <Spec icon={<UsersIcon className="h-4 w-4 text-primary" />} label="Seats" value={vehicle.seats} />
          <Spec icon={<LuggageIcon className="h-4 w-4 text-primary" />} label="Luggage" value={vehicle.luggage} />
          <Spec icon={<FuelIcon className="h-4 w-4 text-primary" />} label="Fuel" value={vehicle.fuel} />
          <Spec icon={<SnowflakeIcon className="h-4 w-4 text-primary" />} label="Climate" value={vehicle.climate} />
        </div>
        <div className="mt-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/10 p-3">
          <p className="text-xs text-gray-500">Per kilometre</p>
          <p className="font-display text-2xl font-black text-primary">
            {vehicle.ratePerKm}
          </p>
        </div>
        <Button
          className="mt-4 w-full"
          onClick={() => openBooking(vehicle.name)}
        >
          Book Now
        </Button>
      </div>
    </Card>
  );
}

function Spec({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
        {icon}
      </div>
      <div>
        <p className="text-[11px] text-gray-500">{label}</p>
        <p className="font-semibold text-navy">{value}</p>
      </div>
    </div>
  );
}
