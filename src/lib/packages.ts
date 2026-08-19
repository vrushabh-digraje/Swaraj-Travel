export type PackageRate = {
  vehicle: string;
  seating: string;
  rate: string;
  driverFood: string;
  toll: string;
  category: "Sedan" | "SUV" | "Luxury" | "Bus";
};

export const PACKAGE_RATES: PackageRate[] = [
  { vehicle: "Innova", seating: "6+1", rate: "₹20/km", driverFood: "Extra", toll: "Extra", category: "SUV" },
  { vehicle: "Innova Crysta", seating: "6+1", rate: "₹24/km", driverFood: "Extra", toll: "Extra", category: "SUV" },
  { vehicle: "Swift Dzire", seating: "4+1", rate: "₹14/km", driverFood: "Extra", toll: "Extra", category: "Sedan" },
  { vehicle: "Aura", seating: "4+1", rate: "₹14/km", driverFood: "Extra", toll: "Extra", category: "Sedan" },
  { vehicle: "Toyota Etios", seating: "4+1", rate: "₹15/km", driverFood: "Extra", toll: "Extra", category: "Sedan" },
  { vehicle: "Ertiga", seating: "6+1", rate: "₹16/km", driverFood: "Extra", toll: "Extra", category: "SUV" },
  { vehicle: "Scorpio", seating: "8+1", rate: "₹24/km", driverFood: "Extra", toll: "Extra", category: "SUV" },
  { vehicle: "Audi", seating: "4+1", rate: "On Call", driverFood: "Extra", toll: "Extra", category: "Luxury" },
  { vehicle: "Tempo Traveller", seating: "13/17 seater", rate: "On Call", driverFood: "Extra", toll: "Extra", category: "Bus" },
  { vehicle: "Mini Bus", seating: "20 seater", rate: "On Call", driverFood: "Extra", toll: "Extra", category: "Bus" },
  { vehicle: "Bus", seating: "32-52", rate: "On Call", driverFood: "Extra", toll: "Extra", category: "Bus" },
  { vehicle: "Tavera", seating: "8+1", rate: "₹26/km", driverFood: "Extra", toll: "Extra", category: "SUV" },
  { vehicle: "Kia Carens", seating: "6+1 / 7+1", rate: "₹20/km", driverFood: "Extra", toll: "Extra", category: "SUV" },
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
