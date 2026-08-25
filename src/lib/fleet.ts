export type VehicleCategory = "SUV" | "Hatchback" | "Sedan" | "Bus";

export type Vehicle = {
  id: string;
  name: string;
  category: VehicleCategory;
  seats: string;
  luggage: string;
  fuel: string;
  climate: string;
  ratePerKm: string;
  ratePerHour: string;
  rating: string;
  image: string;
  popular?: boolean;
};

export const VEHICLES: Vehicle[] = [
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    category: "SUV",
    seats: "6+1",
    luggage: "5 Bags",
    fuel: "Diesel",
    climate: "AC",
    ratePerKm: "₹20/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/innova-crysta.webp",
    popular: true,
  },
  {
    id: "honda-city",
    name: "Honda City",
    category: "Sedan",
    seats: "4+1",
    luggage: "2 Bags",
    fuel: "Petrol",
    climate: "AC",
    ratePerKm: "₹18/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/honda-city.webp",
    popular: true,
  },
  {
    id: "toyota-etios",
    name: "Toyota Etios",
    category: "Hatchback",
    seats: "4+1",
    luggage: "2 Bags",
    fuel: "Diesel",
    climate: "AC",
    ratePerKm: "₹14/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/toyota-etios.webp",
    popular: true,
  },
  {
    id: "ertiga",
    name: "Ertiga",
    category: "SUV",
    seats: "6+1",
    luggage: "4 Bags",
    fuel: "Petrol",
    climate: "AC",
    ratePerKm: "₹16/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/ertiga.webp",
    popular: true,
  },
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    category: "Hatchback",
    seats: "4+1",
    luggage: "2 Bags",
    fuel: "Petrol",
    climate: "AC",
    ratePerKm: "₹13/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/swift-dzire.webp",
    popular: true,
  },
  {
    id: "aura",
    name: "Aura",
    category: "Hatchback",
    seats: "4+1",
    luggage: "2 Bags",
    fuel: "Petrol",
    climate: "AC",
    ratePerKm: "₹13/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/aura.webp",
  },
  {
    id: "innova",
    name: "Innova",
    category: "SUV",
    seats: "6+1",
    luggage: "5 Bags",
    fuel: "Diesel",
    climate: "AC",
    ratePerKm: "₹18/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/innova.webp",
  },
  {
    id: "kia-carens",
    name: "Kia Carens",
    category: "SUV",
    seats: "6+1",
    luggage: "4 Bags",
    fuel: "Petrol",
    climate: "AC",
    ratePerKm: "₹18/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/kia-carens.webp",
  },
  {
    id: "amaze",
    name: "Amaze",
    category: "Hatchback",
    seats: "4+1",
    luggage: "2 Bags",
    fuel: "Petrol",
    climate: "AC",
    ratePerKm: "On Call",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/amaze.webp",
  },
  {
    id: "toyota-corolla",
    name: "Toyota Corolla",
    category: "Sedan",
    seats: "4+1",
    luggage: "3 Bags",
    fuel: "Petrol",
    climate: "AC",
    ratePerKm: "₹17/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/toyota-corolla.webp",
  },
  {
    id: "tempo-traveller-ac",
    name: "Tempo Traveller AC",
    category: "Bus",
    seats: "12",
    luggage: "10 Bags",
    fuel: "Diesel",
    climate: "AC",
    ratePerKm: "₹28/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/tempo-traveller.webp",
  },
  {
    id: "tempo-traveller-non-ac",
    name: "Tempo Traveller Non-AC",
    category: "Bus",
    seats: "12",
    luggage: "10 Bags",
    fuel: "Diesel",
    climate: "Non-AC",
    ratePerKm: "₹26/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/tempo-traveller.webp",
  },
  {
    id: "mini-bus",
    name: "Mini Bus",
    category: "Bus",
    seats: "32",
    luggage: "Large",
    fuel: "Diesel",
    climate: "AC",
    ratePerKm: "₹50/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/mini-bus.webp",
  },
  {
    id: "urbania",
    name: "Force Urbania",
    category: "Bus",
    seats: "17",
    luggage: "12 Bags",
    fuel: "Diesel",
    climate: "AC",
    ratePerKm: "₹35/km",
    ratePerHour: "N/A",
    rating: "4.8",
    image: "/images/urbania.webp",
  },
];

export const FLEET_CATEGORIES: Array<"All" | VehicleCategory> = [
  "All",
  "SUV",
  "Hatchback",
  "Sedan",
  "Bus",
];

export const POPULAR_VEHICLES = VEHICLES.filter((vehicle) => vehicle.popular);

export function vehicleLabel(vehicle: Vehicle) {
  return `${vehicle.name} - ${vehicle.category} (${vehicle.seats} Seats, ${vehicle.luggage}) - ${vehicle.ratePerKm}`;
}

export function getVehicleBgColor(image: string): string {
  if (image.includes("innova-crysta.webp")) return "#e8e8e8";
  if (image.includes("urbania.webp")) return "#e1e1e1";
  if (image.includes("toyota-etios.webp")) return "#f8fafb";
  if (image.includes("swift-dzire.webp")) return "#f7f7f7";
  if (image.includes("tavera.webp")) return "#fafafa";
  if (image.includes("tempo-traveller.webp")) return "#fafafa";
  if (image.includes("kia-carens.webp")) return "#fefefe";
  if (image.includes("mini-bus.webp")) return "#fefefe";
  return "#ffffff";
}
