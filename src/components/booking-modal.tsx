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
  const [tripType, setTripType] = useState("");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [datetime, setDatetime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [touched, setTouched] = useState({
    cab: false,
    tripType: false,
    pickup: false,
    drop: false,
    datetime: false,
    name: false,
    phone: false,
  });

  const validations = {
    cab: cab !== "",
    tripType: tripType !== "",
    pickup: pickup.trim().length >= 3,
    drop: drop.trim().length >= 3,
    datetime: datetime !== "",
    name: name.trim().length >= 3,
    phone: /^[0-9+\s-]{10,15}$/.test(phone),
  };

  const getInputClassName = (field: keyof typeof validations) => {
    const defaultStyle = "w-full rounded-xl border pl-3 pr-10 py-2.5 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 ";
    if (!touched[field]) {
      return defaultStyle + "border-gray-200 focus:border-primary";
    }
    return validations[field]
      ? defaultStyle + "border-green-500 focus:border-green-500 focus:ring-green-500/10 bg-green-50/[0.02]"
      : defaultStyle + "border-red-400 focus:border-red-400 focus:ring-red-500/10 bg-red-50/[0.02]";
  };

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
    setTouched({
      cab: true,
      tripType: true,
      pickup: true,
      drop: true,
      datetime: true,
      name: true,
      phone: true,
    });

    const isValid = Object.values(validations).every(Boolean);
    if (!isValid) return;

    const message = [
      `New cab enquiry from ${SITE.name} website`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Cab: ${cab || "Not selected"}`,
      `Trip type: ${tripType}`,
      `Pickup: ${pickup}`,
      `Drop: ${drop}`,
      `Date & time: ${datetime}`,
    ].join("\n");

    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
    closeBooking();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity"
        aria-label="Close booking form"
        onClick={closeBooking}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative max-h-[95vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8 animate-fade-in-scale"
      >
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 id="booking-title" className="font-display text-2xl font-bold text-navy">
              Book Your Ride
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Fill in the details and send the enquiry on WhatsApp.
            </p>
          </div>
          <button
            type="button"
            onClick={closeBooking}
            className="rounded-full p-2 hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Select Cab">
              <div className="relative mt-1">
                <select
                  name="cab"
                  value={cab}
                  onChange={(event) => {
                    setCab(event.target.value);
                    setTouched(prev => ({ ...prev, cab: true }));
                  }}
                  onBlur={() => setTouched(prev => ({ ...prev, cab: true }))}
                  className={`w-full rounded-xl border pl-3 pr-10 py-2.5 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 bg-white ${
                    touched.cab && !validations.cab ? "border-red-400" : "border-gray-200 focus:border-primary"
                  }`}
                  required
                >
                  <option value="">Choose your cab</option>
                  {VEHICLES.map((vehicle) => (
                    <option key={vehicle.id} value={vehicle.name}>
                      {vehicleLabel(vehicle)}
                    </option>
                  ))}
                </select>
              </div>
            </Field>

            <Field label="Trip Type">
              <div className="relative mt-1">
                <select 
                  name="tripType" 
                  value={tripType}
                  onChange={(event) => {
                    setTripType(event.target.value);
                    setTouched(prev => ({ ...prev, tripType: true }));
                  }}
                  onBlur={() => setTouched(prev => ({ ...prev, tripType: true }))}
                  className={`w-full rounded-xl border pl-3 pr-10 py-2.5 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 bg-white ${
                    touched.tripType && !validations.tripType ? "border-red-400" : "border-gray-200 focus:border-primary"
                  }`} 
                  required
                >
                  <option value="" disabled>
                    Select trip type
                  </option>
                  {tripTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>
            </Field>
          </div>

          {selected ? (
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-light p-3 text-sm md:grid-cols-4 animate-fade-in-scale">
              <Meta label="Seating" value={selected.seats} />
              <Meta label="Luggage" value={selected.luggage} />
              <Meta label="Category" value={selected.category} />
              <Meta label="Rate" value={selected.ratePerKm} />
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Pickup Location">
              <div className="relative mt-1">
                <input 
                  name="pickup" 
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, pickup: true }))}
                  className={getInputClassName("pickup")} 
                  required 
                  placeholder="Pickup location" 
                />
                {touched.pickup && (
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                    {validations.pickup ? (
                      <svg className="h-5 w-5 text-green-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-red-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                  </div>
                )}
              </div>
            </Field>
            <Field label="Drop Location">
              <div className="relative mt-1">
                <input 
                  name="drop" 
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, drop: true }))}
                  className={getInputClassName("drop")} 
                  required 
                  placeholder="Drop location" 
                />
                {touched.drop && (
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                    {validations.drop ? (
                      <svg className="h-5 w-5 text-green-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-red-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                  </div>
                )}
              </div>
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Pickup Date & Time">
              <div className="relative mt-1">
                <input 
                  name="datetime" 
                  type="datetime-local" 
                  value={datetime}
                  onChange={(e) => setDatetime(e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, datetime: true }))}
                  className={`w-full rounded-xl border pl-3 pr-10 py-2.5 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 ${
                    touched.datetime && !validations.datetime ? "border-red-400" : "border-gray-200 focus:border-primary"
                  }`} 
                  required 
                />
              </div>
            </Field>
            <Field label="Full Name">
              <div className="relative mt-1">
                <input 
                  name="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
                  className={getInputClassName("name")} 
                  required 
                  placeholder="Your name" 
                />
                {touched.name && (
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                    {validations.name ? (
                      <svg className="h-5 w-5 text-green-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-red-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                  </div>
                )}
              </div>
            </Field>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Phone Number">
              <div className="relative mt-1">
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
                  className={getInputClassName("phone")}
                  required
                  placeholder="10-digit mobile number"
                />
                {touched.phone && (
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                    {validations.phone ? (
                      <svg className="h-5 w-5 text-green-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-red-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    )}
                  </div>
                )}
              </div>
            </Field>
            <div className="flex items-end">
              <Button type="submit" className="w-full h-[46px]" size="md">
                Send Inquiry on WhatsApp
              </Button>
            </div>
          </div>
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
