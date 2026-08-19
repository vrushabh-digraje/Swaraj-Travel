export type City = {
  name: string;
  region: string;
  description: string;
  routes: Array<{ label: string; href: string }>;
};

export const CITIES: City[] = [
  {
    name: "Mumbai",
    region: "Western Maharashtra",
    description: "Airport transfers, local rides, and outstation cabs from Mumbai, Navi Mumbai, and Thane.",
    routes: [
      { label: "Mumbai → Pune", href: "/mumbai-to-pune-cab" },
      { label: "Mumbai → Nashik", href: "/mumbai-to-nashik-cab" },
      { label: "Mumbai → Shirdi", href: "/mumbai-to-shirdi-cab" },
      { label: "Mumbai Airport transfers", href: "/services" },
    ],
  },
  {
    name: "Pune",
    region: "Western Maharashtra",
    description: "IT hub and cultural capital with airport drops, local cabs, and hill-station trips.",
    routes: [
      { label: "Pune → Mumbai", href: "/mumbai-to-pune-cab" },
      { label: "Pune → Lonavala", href: "/cities" },
      { label: "Pune → Mahabaleshwar", href: "/mumbai-to-mahabaleshwar-cab" },
      { label: "Pune Airport transfers", href: "/services" },
    ],
  },
  {
    name: "Nashik",
    region: "North Maharashtra",
    description: "Wine capital and pilgrimage city with Trimbakeshwar and vineyard trips.",
    routes: [
      { label: "Nashik → Mumbai", href: "/mumbai-to-nashik-cab" },
      { label: "Nashik → Shirdi", href: "/mumbai-to-shirdi-cab" },
      { label: "Trimbakeshwar darshan", href: "/mumbai-to-nashik-cab" },
      { label: "Wine tours", href: "/packages" },
    ],
  },
  {
    name: "Shirdi",
    region: "North Maharashtra",
    description: "Sai Baba pilgrimage cabs with airport pickup and multi-temple packages.",
    routes: [
      { label: "Mumbai → Shirdi", href: "/mumbai-to-shirdi-cab" },
      { label: "Nashik → Shirdi", href: "/mumbai-to-nashik-cab" },
      { label: "Shani Shingnapur", href: "/mumbai-to-shirdi-cab" },
      { label: "Airport to Shirdi", href: "/services" },
    ],
  },
  {
    name: "Mahabaleshwar",
    region: "Western Maharashtra",
    description: "Hill-station getaways with ghat-expert drivers and sightseeing packages.",
    routes: [
      { label: "Mumbai → Mahabaleshwar", href: "/mumbai-to-mahabaleshwar-cab" },
      { label: "Panchgani & Mapro", href: "/mumbai-to-mahabaleshwar-cab" },
      { label: "Pratapgad Fort", href: "/mumbai-to-mahabaleshwar-cab" },
      { label: "Weekend packages", href: "/packages" },
    ],
  },
  {
    name: "Lonavala",
    region: "Western Maharashtra",
    description: "Popular monsoon destination on the Mumbai-Pune route for weekend trips.",
    routes: [
      { label: "Mumbai → Lonavala", href: "/mumbai-to-pune-cab" },
      { label: "Pune → Lonavala", href: "/mumbai-to-pune-cab" },
      { label: "Hill station tours", href: "/packages" },
      { label: "Weekend trips", href: "/services" },
    ],
  },
  {
    name: "Thane",
    region: "Mumbai Metropolitan",
    description: "Suburban pickup hub with metro, station, and outstation cab coverage.",
    routes: [
      { label: "Thane → Mumbai", href: "/services" },
      { label: "Thane → Pune", href: "/mumbai-to-pune-cab" },
      { label: "Thane local rides", href: "/services" },
      { label: "Station transfers", href: "/services" },
    ],
  },
  {
    name: "Nagpur",
    region: "Vidarbha",
    description: "Central India connectivity with airport transfers and corporate travel.",
    routes: [
      { label: "Nagpur city rides", href: "/services" },
      { label: "Nagpur Airport transfers", href: "/services" },
      { label: "Corporate services", href: "/services" },
      { label: "Outstation cabs", href: "/outstation" },
    ],
  },
  {
    name: "Sambhajinagar",
    region: "Marathwada",
    description: "Heritage city gateway to Ajanta and Ellora with airport cab support.",
    routes: [
      { label: "Ajanta Caves", href: "/packages" },
      { label: "Ellora Caves", href: "/packages" },
      { label: "Airport transfers", href: "/services" },
      { label: "Heritage tours", href: "/packages" },
    ],
  },
  {
    name: "Kolhapur",
    region: "Western Maharashtra",
    description: "Temple city with pilgrimage, Goa, and Pune connectivity.",
    routes: [
      { label: "Kolhapur → Pune", href: "/outstation" },
      { label: "Temple tours", href: "/packages" },
      { label: "City sightseeing", href: "/services" },
      { label: "Outstation cabs", href: "/outstation" },
    ],
  },
  {
    name: "Alibag",
    region: "Konkan",
    description: "Beach destination weekend getaway from Mumbai with coastal cab packages.",
    routes: [
      { label: "Alibag → Mumbai", href: "/outstation" },
      { label: "Beach tours", href: "/packages" },
      { label: "Fort tours", href: "/packages" },
      { label: "Weekend packages", href: "/packages" },
    ],
  },
  {
    name: "Satara",
    region: "Western Maharashtra",
    description: "Hill-station gateway for Mahabaleshwar, Panchgani, and Pune trips.",
    routes: [
      { label: "Satara → Mahabaleshwar", href: "/mumbai-to-mahabaleshwar-cab" },
      { label: "Satara → Pune", href: "/outstation" },
      { label: "Hill station tours", href: "/packages" },
      { label: "Weekend trips", href: "/packages" },
    ],
  },
];

export const REGIONS = [
  { name: "Western Maharashtra", places: ["Mumbai", "Pune", "Kolhapur", "Satara", "Nashik"] },
  { name: "Konkan", places: ["Ratnagiri", "Alibag", "Raigad", "Sindhudurg"] },
  { name: "Vidarbha", places: ["Nagpur", "Amravati", "Akola", "Chandrapur"] },
  { name: "Marathwada", places: ["Sambhajinagar", "Nanded", "Latur", "Parbhani"] },
  { name: "Khandesh", places: ["Jalgaon", "Dhule", "Nandurbar"] },
];
