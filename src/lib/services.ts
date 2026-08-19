export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  price: string;
  features: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    description: "Reliable Mumbai airport pickup and drop with flight tracking and meet & greet.",
    price: "Starting from ₹500",
    features: ["Flight tracking", "Meet & greet", "Luggage assistance", "24/7 service"],
  },
  {
    slug: "city-rides",
    title: "City Rides",
    description: "Comfortable local taxi service across Mumbai, Thane, Navi Mumbai, and Pune.",
    price: "₹15/km + ₹50 base",
    features: ["Quick booking", "Multiple stops", "Cashless payment", "Real-time tracking"],
  },
  {
    slug: "outstation-trips",
    title: "Outstation Trips",
    description: "One-way and round-trip cabs from Mumbai to Pune, Nashik, Shirdi, Mahabaleshwar, and more.",
    price: "From ₹14/km",
    features: ["One-way & round trips", "AC vehicles", "Driver allowance", "Toll as actuals"],
  },
  {
    slug: "hourly-rental",
    title: "Hourly Rental",
    description: "Flexible local rental for meetings, shopping, and city sightseeing.",
    price: "₹150/hour",
    features: ["Minimum 4 hours", "Local travel", "Extra km charges", "Waiting charges apply"],
  },
  {
    slug: "corporate-services",
    title: "Corporate Services",
    description: "Employee transport and business travel with GST billing and priority booking.",
    price: "Custom pricing",
    features: ["Dedicated account manager", "Monthly billing", "GST invoice", "Priority booking"],
  },
  {
    slug: "wedding-services",
    title: "Wedding Services",
    description: "Decorated cars and group vehicles for weddings and special occasions.",
    price: "Starting from ₹2000",
    features: ["Decorated vehicles", "Professional drivers", "Flexible packages", "Photography ready"],
  },
];
