export type PackageRate = {
  vehicle: string;
  seating: string;
  rate: string;
  driverFood: string;
  toll: string;
  category: "Sedan" | "SUV" | "Luxury" | "Bus";
};

export const PACKAGE_RATES: PackageRate[] = [
  { vehicle: "Innova", seating: "6+1", rate: "₹18/km", driverFood: "Extra", toll: "Extra", category: "SUV" },
  { vehicle: "Innova Crysta", seating: "6+1", rate: "₹20/km", driverFood: "Extra", toll: "Extra", category: "SUV" },
  { vehicle: "Swift Dzire", seating: "4+1", rate: "₹13/km", driverFood: "Extra", toll: "Extra", category: "Sedan" },
  { vehicle: "Aura", seating: "4+1", rate: "₹13/km", driverFood: "Extra", toll: "Extra", category: "Sedan" },
  { vehicle: "Toyota Etios", seating: "4+1", rate: "₹14/km", driverFood: "Extra", toll: "Extra", category: "Sedan" },
  { vehicle: "Honda City", seating: "4+1", rate: "₹18/km", driverFood: "Extra", toll: "Extra", category: "Sedan" },
  { vehicle: "Ertiga", seating: "6+1", rate: "₹16/km", driverFood: "Extra", toll: "Extra", category: "SUV" },
  { vehicle: "Kia Carens", seating: "6+1 / 7+1", rate: "₹18/km", driverFood: "Extra", toll: "Extra", category: "SUV" },
  { vehicle: "Tempo Traveller AC", seating: "12 seater", rate: "₹28/km", driverFood: "Extra", toll: "Extra", category: "Bus" },
  { vehicle: "Tempo Traveller Non-AC", seating: "12 seater", rate: "₹26/km", driverFood: "Extra", toll: "Extra", category: "Bus" },
  { vehicle: "Mini Bus", seating: "32 seater", rate: "₹50/km", driverFood: "Extra", toll: "Extra", category: "Bus" },
  { vehicle: "Force Urbania", seating: "17 seater", rate: "₹35/km", driverFood: "Extra", toll: "Extra", category: "Bus" },
  { vehicle: "Bus", seating: "32-52", rate: "On Call", driverFood: "Extra", toll: "Extra", category: "Bus" },
];

export const PACKAGE_RULES = [
  "Driver allowance is charged extra.",
  "Cab running km is limited to 300 km per day.",
  "Time starts from 6:00 AM to 10:00 PM. After 10:00 PM extra charges apply. Night charges apply from 12:00 AM to 6:00 AM.",
  "Time and kilometres are calculated from office to office.",
  "Interstate taxes, toll taxes, parking, and GST are charged as actuals.",
  "Extra charges apply for extra km and hours. Government taxes are charged as per rules.",
  "Quoted charges are based on current fuel prices and may vary if fuel prices change.",
];
