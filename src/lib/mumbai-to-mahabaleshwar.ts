import { SITE } from "@/lib/site";

export interface MahabaleshwarFareItem {
  id: string;
  vehicle: string;
  type: string;
  seats: string;
  luggage: string;
  perKm: number;
  oneWayMin: number;
  oneWayMax: number;
  roundTripMin: number;
  roundTripMax: number;
  idealFor: string;
  features: string[];
  popular?: boolean;
}

export const MAHABALESHWAR_FARES: MahabaleshwarFareItem[] = [
  {
    id: "dzire",
    vehicle: "Swift Dzire",
    type: "Hatchback / Sedan, AC",
    seats: "4 Passengers (5 seats with driver)",
    luggage: "2 Bags",
    perKm: 13,
    oneWayMin: 4200,
    oneWayMax: 4800,
    roundTripMin: 5900,
    roundTripMax: 6800,
    idealFor: "Solo travellers, couples, 2-3 passengers with light luggage",
    features: ["Chilled AC", "Comfortable Suspension", "Best for Couples & Solos"],
  },
  {
    id: "etios",
    vehicle: "Toyota Etios",
    type: "Sedan / Hatchback, AC",
    seats: "4 Passengers (5 seats with driver)",
    luggage: "2 Bags",
    perKm: 15,
    oneWayMin: 4300,
    oneWayMax: 4900,
    roundTripMin: 6000,
    roundTripMax: 6900,
    idealFor: "Small families, 4 passengers, budget-conscious trips",
    features: ["Generous Legroom", "Reliable Toyota Engine", "Fuel Efficient & Stable"],
  },
  {
    id: "ertiga",
    vehicle: "Ertiga",
    type: "SUV / MUV, AC",
    seats: "6 Passengers (7 seats with driver)",
    luggage: "4 Bags",
    perKm: 16,
    oneWayMin: 4700,
    oneWayMax: 5400,
    roundTripMin: 6600,
    roundTripMax: 7600,
    idealFor: "Families of 4-6, extra luggage space needed",
    features: ["Flexible Seating", "Rear AC Vents", "Great Value for Families"],
    popular: true,
  },
  {
    id: "carens",
    vehicle: "Kia Carens",
    type: "SUV / MPV, AC",
    seats: "6 Passengers (7 seats with driver)",
    luggage: "4 Bags",
    perKm: 20,
    oneWayMin: 5500,
    oneWayMax: 6300,
    roundTripMin: 7800,
    roundTripMax: 8800,
    idealFor: "Families, 6 passengers, comfortable long drive",
    features: ["Sunroof & Modern Cabin", "One-Touch Tumble Seats", "Smooth Highway Stability"],
  },
  {
    id: "innova-crysta",
    vehicle: "Innova Crysta",
    type: "SUV, AC, 6+1",
    seats: "6 Passengers (6+1 = 7 seats with driver)",
    luggage: "5 Bags",
    perKm: 20,
    oneWayMin: 6500,
    oneWayMax: 7500,
    roundTripMin: 9100,
    roundTripMax: 10400,
    idealFor: "Families & small groups, premium comfort, 5 bags luggage",
    features: ["Executive Captain Seats", "High Ground Clearance for Ghats", "Most Popular for Outstation"],
    popular: true,
  },
  {
    id: "scorpio",
    vehicle: "Scorpio",
    type: "Rugged SUV, AC",
    seats: "6-7 Passengers (7 seats with driver)",
    luggage: "4 Bags",
    perKm: 24,
    oneWayMin: 7200,
    oneWayMax: 8000,
    roundTripMin: 10100,
    roundTripMax: 11300,
    idealFor: "Groups of 6-7, rugged SUV comfort",
    features: ["High Seating Stance", "Tough Ghat Performance", "Ample Road Presence"],
  },
  {
    id: "tempo-traveller",
    vehicle: "Tempo Traveller AC",
    type: "12 Seater Luxury Van, AC",
    seats: "10-12 Passengers",
    luggage: "10 Bags",
    perKm: 32,
    oneWayMin: 9600,
    oneWayMax: 11000,
    roundTripMin: 13400,
    roundTripMax: 15000,
    idealFor: "Group travel, 10-12 passengers, events, family reunions",
    features: ["Pushback Bucket Seats", "Dedicated Large Luggage Bay", "Individual AC Vents & Music System"],
  },
];

export interface IncludedFareItem {
  id: string;
  title: string;
  category: "included" | "separate";
  description: string;
  badge: string;
}

export const FARE_INCLUSIONS_EXCLUSIONS: IncludedFareItem[] = [
  {
    id: "fuel",
    title: "Fuel Charges",
    category: "included",
    badge: "Included (Zero Extra)",
    description: "All fuel costs for the full 263+ km trip distance are factored into the transparent per-kilometre rate.",
  },
  {
    id: "ac",
    title: "Air-Conditioning (AC)",
    category: "included",
    badge: "Included (Zero Extra)",
    description: "All vehicles in our fleet are 100% AC; air conditioning remains on throughout your expressway and ghat journey with no hidden surcharge.",
  },
  {
    id: "driver-allowance",
    title: "Driver Allowance & Salary",
    category: "included",
    badge: "Included (Zero Extra)",
    description: "Fixed driver allowance and salary for the outstation journey are covered within the fare structure, so no extra food/lodging claims are made on you.",
  },
  {
    id: "tolls",
    title: "Toll Charges",
    category: "separate",
    badge: "Charged at Actuals",
    description: "Tolls on Mumbai-Pune Expressway & Pune-Satara NH48 (estimated ₹300–₹500 one way) are charged at actuals with receipts provided.",
  },
  {
    id: "parking",
    title: "Parking Charges",
    category: "separate",
    badge: "Charged at Actuals",
    description: "Parking fees at viewpoints (Arthur's Seat, Venna Lake, Elephant's Head) or hotels are paid at actuals if applicable.",
  },
  {
    id: "entry-fee",
    title: "Mahabaleshwar Entry / Pollution Tax",
    category: "separate",
    badge: "Charged at Actuals",
    description: "Local hill station checkpost fee (approximately ₹30 per vehicle + ₹20 per passenger) charged at the Mahabaleshwar entry gate.",
  },
  {
    id: "waiting",
    title: "Waiting Charges (if applicable)",
    category: "separate",
    badge: "Communicated Upfront",
    description: "Only applicable if pickup is delayed significantly beyond the scheduled time or for unplanned extra waiting.",
  },
];

export interface PickupLocationZone {
  area: string;
  subtitle: string;
  keyPoints: string[];
  bufferTime: string;
}

export const PICKUP_LOCATIONS: PickupLocationZone[] = [
  {
    area: "Mumbai Airport (CSIA)",
    subtitle: "Terminals T1 (Domestic) & T2 (International / Domestic)",
    keyPoints: [
      "Direct curbside pickup or designated airport parking pickup.",
      "Driver tracks your flight arrival in real-time.",
      "Meet-and-greet assistance with luggage.",
    ],
    bufferTime: "Allow 30-45 mins after landing for baggage retrieval and terminal exit.",
  },
  {
    area: "Major Railway Stations",
    subtitle: "Mumbai Central (MMCT), Bandra Terminus (BDTS), LTT Kurla, CSMT, Dadar",
    keyPoints: [
      "Designated pickup near station main exits or taxi bays.",
      "Driver coordinates via phone/WhatsApp prior to train arrival.",
      "Luggage assistance directly to the boot.",
    ],
    bufferTime: "Driver arrives 15 minutes before scheduled train arrival.",
  },
  {
    area: "Western Suburbs",
    subtitle: "Andheri, Borivali, Kandivali, Malad, Goregaon, Powai & surrounding areas",
    keyPoints: [
      "Doorstep pickup right from your apartment, bungalow, or hotel.",
      "Swift connection via Western Express Highway & JVLR / Eastern Freeway.",
    ],
    bufferTime: "Start early (before 6:30 AM) to bypass suburban morning bottlenecks.",
  },
  {
    area: "Central & South Mumbai",
    subtitle: "Dadar, Chembur, Ghatkopar, Vashi, and Kharghar (Navi Mumbai)",
    keyPoints: [
      "Immediate access to Eastern Freeway, Sion-Panvel Highway, or Atal Setu (MTHL).",
      "Shortest transit onto Mumbai-Pune Expressway entrance at Kalamboli.",
    ],
    bufferTime: "Expressway entry in just 20-30 minutes from Navi Mumbai.",
  },
  {
    area: "Other Pickup Locations & Custom Stops",
    subtitle: "Thane, Mira Road, Kalyan, Dombivli, or en-route pickups",
    keyPoints: [
      "Can easily arrange multiple pickup stops for family members along the highway.",
      "Custom outstation itineraries with prior notice.",
    ],
    bufferTime: "Confirm multi-stop details at booking time for transparent route planning.",
  },
];

export interface RouteMilestone {
  title: string;
  distanceFromMumbai: string;
  approxDuration: string;
  altitude: string;
  description: string;
  recommendation: string;
}

export const ROUTE_MILESTONES: RouteMilestone[] = [
  {
    title: "Mumbai Pickup & Eastern Freeway / Vashi",
    distanceFromMumbai: "0 km",
    approxDuration: "Start",
    altitude: "14 m",
    description: "Doorstep pickup across Mumbai suburbs or Airport. Fast connection via Sion-Panvel Expressway.",
    recommendation: "Best to start between 5:30 am and 6:30 am to beat city rush hour.",
  },
  {
    title: "Mumbai-Pune Expressway & Bhor Ghat",
    distanceFromMumbai: "45 – 95 km",
    approxDuration: "1 hr 15 min",
    altitude: "600 m",
    description: "World-class 6-lane access-controlled expressway passing through scenic tunnels and Khandala cliffs.",
    recommendation: "Ideal breakfast halt at Food Mall (Khalapur / Talegaon) for quick refreshments and clean restrooms.",
  },
  {
    title: "Pune Bypass (NH 48) to Shirwal",
    distanceFromMumbai: "135 – 180 km",
    approxDuration: "2 hr 45 min",
    altitude: "650 m",
    description: "Smooth 6-lane National Highway skirting Pune city towards Satara through rolling agrarian Maharashtra valleys.",
    recommendation: "Driver maintains steady highway cruising; toll plazas accept FASTag.",
  },
  {
    title: "Wai & Pasarni Ghat Ascent",
    distanceFromMumbai: "235 km",
    approxDuration: "4 hr 15 min",
    altitude: "1,150 m",
    description: "Scenic 12-km winding mountain climb with sweeping hairpin bends offering majestic views of Dhom Dam and valley.",
    recommendation: "Our drivers are expert mountain navigators. Windows down for cool Sahyadri mountain air!",
  },
  {
    title: "Panchgani Table Land & Strawberry Farms",
    distanceFromMumbai: "245 km",
    approxDuration: "4 hr 45 min",
    altitude: "1,293 m",
    description: "Famous hill town known for lush strawberry orchards, Mapro Garden, and volcanic Table Land plateau.",
    recommendation: "Great spot for a brief strawberry shake / snack halt before the final 18 km stretch.",
  },
  {
    title: "Mahabaleshwar Hill Station Arrival",
    distanceFromMumbai: "263 km",
    approxDuration: "5 – 6 hours",
    altitude: "1,353 m",
    description: "Drop directly at your resort, hotel, or villa in Mahabaleshwar town or near Venna Lake.",
    recommendation: "Pay the nominal hill municipal entry fee at the checkpost. Ready to begin your vacation!",
  },
];

export interface MahabaleshwarFaq {
  question: string;
  answer: string;
  category: "pricing" | "routes" | "vehicles" | "policies";
}

export const MAHABALESHWAR_FAQS: MahabaleshwarFaq[] = [
  {
    question: "What is the distance between Mumbai and Mahabaleshwar by road?",
    answer: "The road distance between Mumbai and Mahabaleshwar is approximately 263 kilometres, and the drive typically takes around 5 to 6 hours depending on traffic conditions, including the Mumbai-Pune Expressway and the Mahabaleshwar ghat section.",
    category: "routes",
  },
  {
    question: "How much does a Mumbai to Mahabaleshwar cab cost?",
    answer: "The fare depends on the vehicle type and whether you choose a one way or round trip booking. At Book A Cab, one way fares for this route start from approximately ₹4,200 for a Swift Dzire (hatchback) and go up to around ₹9,600+ for a 12-seater Tempo Traveller AC. Innova Crysta, one of our most popular options, is priced in the ₹6,500–₹7,500 range for a one way trip. Contact us or use our booking form to get an exact quote for your date and vehicle choice.",
    category: "pricing",
  },
  {
    question: "Is a one way cab cheaper than a round trip cab for this route?",
    answer: "A one way cab is generally more economical if you do not need the vehicle for the return journey, since you are not paying for the driver and vehicle's trip back to Mumbai. A round trip works out better if you plan to use the same cab for multiple days around Mahabaleshwar and Panchgani. For round trip bookings, the return leg is typically charged at 1.4x to 1.5x of the one way fare rather than double.",
    category: "pricing",
  },
  {
    question: "What is included in the quoted cab fare?",
    answer: "The quoted fare includes fuel, air-conditioning, and driver allowance for the full trip. Toll charges, parking charges, and local entry/pollution fees at Mahabaleshwar are charged separately at actuals and communicated to you at the time of booking. No charges are added silently after the trip.",
    category: "pricing",
  },
  {
    question: "What vehicle options are available for this route?",
    answer: "We offer Swift Dzire, Toyota Etios, Ertiga, Kia Carens, Innova Crysta, Scorpio, and Tempo Traveller (AC and Non-AC, 12-seater) for the Mumbai to Mahabaleshwar route. All vehicles are AC and available in different seating capacities to match your group size and luggage needs. For larger groups, a Tempo Traveller or Mini Bus (32-seater) can be arranged.",
    category: "vehicles",
  },
  {
    question: "Can I book a cab for Mumbai airport to Mahabaleshwar?",
    answer: "Yes, we offer pickup from both T1 and T2 terminals at Mumbai's Chhatrapati Shivaji Maharaj International Airport (CSIA). When booking, mention your terminal and flight arrival time so we can align pickup accordingly. Allow some buffer for baggage collection and terminal exit.",
    category: "routes",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel free of charge with a full refund if you cancel at least 24 hours before your scheduled pickup. Cancellations within 24 hours of pickup incur a 50% charge (or the advance amount, whichever is higher). Same-day cancellations or no-shows are charged at the full confirmed fare. Rescheduling is allowed with 24 hours notice, subject to vehicle availability.",
    category: "policies",
  },
  {
    question: "How are drivers verified for outstation trips?",
    answer: "All drivers in our fleet are background-checked and trained before they are assigned to any trip. We do not assign unverified drivers to outstation routes. Before your pickup, you will receive the driver's name and contact number so you know who to expect.",
    category: "policies",
  },
  {
    question: "Is night travel available on this route?",
    answer: "Yes, we offer pickup for this route at night as well. Since our service is available 24/7, early morning and late night pickups can be scheduled. However, the Mahabaleshwar ghat section can be challenging at night during monsoon, so we recommend discussing any specific timing concerns with our team when booking.",
    category: "routes",
  },
  {
    question: "What is the luggage limit for each vehicle?",
    answer: "Luggage capacity varies by vehicle: Swift Dzire and Toyota Etios carry 2 bags; Ertiga and Kia Carens carry 4 bags; Innova Crysta and Innova carry 5 bags; Scorpio carries 4 bags; Tempo Traveller carries 10 bags. If you have unusual luggage needs, mention them at the time of booking and we will confirm the right vehicle for you.",
    category: "vehicles",
  },
  {
    question: "Do you provide a Tempo Traveller for group travel to Mahabaleshwar?",
    answer: "Yes, we provide Tempo Traveller (12-seater, AC and Non-AC) for group travel to Mahabaleshwar. For very large groups, a Mini Bus (32-seater) is also available. Group bookings can be confirmed by sharing the number of passengers and date of travel with our team.",
    category: "vehicles",
  },
  {
    question: "How do I confirm my Mumbai to Mahabaleshwar cab booking?",
    answer: "You can confirm your booking by calling us at +91-8856904131, sending a WhatsApp message to +91-8856904131, or using the booking form on our website. After confirmation, you will receive your driver's name, contact number, vehicle type, and vehicle number before your pickup date.",
    category: "policies",
  },
];
