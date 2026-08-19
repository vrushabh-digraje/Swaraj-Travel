"use client";

import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/button";
import { CloseIcon } from "@/components/icons";
import { useBooking } from "@/lib/booking-context";
import { VEHICLES, vehicleLabel } from "@/lib/fleet";
import { SITE, whatsappHref } from "@/lib/site";

const tripTypes = ["One Way Trip", "Round Trip", "Hourly Rental"];

export function BookingModal() {
  const { isOpen } = useBooking();
  if (!isOpen) return null;
  return <BookingModalInner />;
}

function BookingModalInner() {
  const { closeBooking, preselectedCab } = useBooking();
  const [cab, setCab] = useState(preselectedCab);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [closeBooking]);

  const selected = VEHICLES.find((vehicle) => vehicle.name === cab);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `New cab enquiry from ${SITE.name} website`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Cab: ${data.get("cab") || "Not selected"}`,
      `Trip type: ${data.get("tripType")}`,
      `Pickup: ${data.get("pickup")}`,
      `Drop: ${data.get("drop")}`,
      `Date & time: ${data.get("datetime")}`,
    ].join("\n");

    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    closeBooking();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        aria-label="Close booking form"
        onClick={closeBooking}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl"
      >
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h2 id="booking-title" className="font-display text-2xl font-bold text-navy">
              Book Your Ride
            </h2>
            <p className="text-sm text-gray-500">
              Fill in the details and send the enquiry on WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={closeBooking}
            className="rounded-full p-2 hover:bg-gray-100"
            aria-label="Close"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <Field label="Select Cab">
            <select
              name="cab"
              value={cab}
              onChange={(event) => setCab(event.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 focus:outline-2 focus:outline-primary"
              required
            >
              <option value="">Choose your cab</option>
              {VEHICLES.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.name}>
                  {vehicleLabel(vehicle)}
                </option>
              ))}
            </select>
          </Field>

          {selected ? (
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-light p-3 text-sm md:grid-cols-4">
              <Meta label="Seating" value={selected.seats} />
              <Meta label="Luggage" value={selected.luggage} />
              <Meta label="Category" value={selected.category} />
              <Meta label="Rate" value={selected.ratePerKm} />
            </div>
          ) : null}

          <Field label="Trip Type">
            <select name="tripType" className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 focus:outline-2 focus:outline-primary" required defaultValue="">
              <option value="" disabled>
                Select trip type
              </option>
              {tripTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </Field>
          <Field label="Pickup Location">
            <input name="pickup" className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 focus:outline-2 focus:outline-primary" required placeholder="Pickup location" />
          </Field>
          <Field label="Drop Location">
            <input name="drop" className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 focus:outline-2 focus:outline-primary" required placeholder="Drop location" />
          </Field>
          <Field label="Pickup Date & Time">
            <input name="datetime" type="datetime-local" className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 focus:outline-2 focus:outline-primary" required />
          </Field>
          <Field label="Full Name">
            <input name="name" className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 focus:outline-2 focus:outline-primary" required placeholder="Your name" />
          </Field>
          <Field label="Phone Number">
            <input
              name="phone"
              type="tel"
              inputMode="tel"
              className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 focus:outline-2 focus:outline-primary"
              required
              placeholder="10-digit mobile number"
            />
          </Field>
          <Button type="submit" className="w-full" size="lg">
            Send Inquiry on WhatsApp
          </Button>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block text-sm font-medium text-navy">
      <span className="mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] text-gray-500">{label}</p>
      <p className="font-semibold text-navy">{value}</p>
    </div>
  );
}
