export interface ShirdiFareItem {
  id: string;
  vehicle: string;
  type: string;
  suitableFor: string;
  passengers: string;
  luggage: string;
  oneWayFare: number;
  oneWayFareStr: string;
  roundTripFare: number;
  roundTripFareStr: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const SHIRDI_FARES: ShirdiFareItem[] = [
  {
    id: "sedan",
    vehicle: "Sedan (Dzire, Etios or similar)",
    type: "Sedan, AC",
    suitableFor: "1 to 4 passengers, light luggage",
    passengers: "1 - 4 passengers",
    luggage: "2 bags",
    oneWayFare: 3000,
    oneWayFareStr: "₹3,000",
    roundTripFare: 5500,
    roundTripFareStr: "₹5,500",
    description: "Economical and comfortable for solo pilgrims, couples, and small families travelling light.",
    features: ["Chilled AC", "Comfortable Suspension", "Fuel & Driver Allowance Included"],
  },
  {
    id: "suv",
    vehicle: "SUV (Ertiga or similar)",
    type: "SUV, AC",
    suitableFor: "4 to 6 passengers, medium luggage",
    passengers: "4 - 6 passengers",
    luggage: "4 bags",
    oneWayFare: 4200,
    oneWayFareStr: "₹4,200",
    roundTripFare: 7500,
    roundTripFareStr: "₹7,500",
    description: "Spacious multi-utility vehicle ideal for families of 4 to 6 with medium luggage.",
    features: ["Rear AC Vents", "Flexible 3-Row Seating", "Comfortable Highway Ride"],
    popular: true,
  },
  {
    id: "innova-crysta",
    vehicle: "Innova Crysta",
    type: "Luxury SUV, AC, 6+1",
    suitableFor: "5 to 6 passengers, full luggage, most comfortable for long pilgrimage drives",
    passengers: "5 - 6 passengers",
    luggage: "5 bags",
    oneWayFare: 5500,
    oneWayFareStr: "₹5,500",
    roundTripFare: 9500,
    roundTripFareStr: "₹9,500",
    description: "The gold standard for Shirdi pilgrimage drives. Extra legroom, plush captain seats, and whisper-quiet suspension ensure elderly parents and kids travel effortlessly.",
    features: ["Plush Captain Recliner Seats", "Supreme Ghat Comfort", "Recommended for Senior Citizens"],
    popular: true,
  },
];

export interface ShirdiInclusionItem {
  id: string;
  title: string;
  category: "included" | "separate";
  description: string;
  badge: string;
}

export const SHIRDI_INCLUSIONS_EXCLUSIONS: ShirdiInclusionItem[] = [
  {
    id: "driver-allowance",
    title: "Driver Allowance",
    category: "included",
    badge: "Included (Zero Extra)",
    description: "Driver food and outstation day allowance are covered in your fare.",
  },
  {
    id: "fuel",
    title: "Fuel for the Booked Route",
    category: "included",
    badge: "Included (Zero Extra)",
    description: "Complete fuel charges for the 240+ km journey between Mumbai and Shirdi are included.",
  },
  {
    id: "base-rental",
    title: "Base Vehicle Rental",
    category: "included",
    badge: "Included (Zero Extra)",
    description: "Clean, commercial AC vehicle dedicated exclusively to your family or group for the trip.",
  },
  {
    id: "toll-parking",
    title: "Toll & Parking Charges",
    category: "separate",
    badge: "Charged at Actuals",
    description: "Tolls on NH 160 / Samruddhi Expressway and temple parking fees are charged as actually incurred with receipts.",
  },
  {
    id: "state-tax",
    title: "State Tax or Permit Charges",
    category: "separate",
    badge: "Charged at Actuals",
    description: "Any applicable route or local taxes on the Mumbai to Shirdi highway route.",
  },
  {
    id: "waiting-charges",
    title: "Waiting Time Beyond Free Limit",
    category: "separate",
    badge: "Free Window Included",
    description: "A standard free waiting window is included for darshan. Nominal waiting charges apply only if exceeded.",
  },
  {
    id: "extra-km",
    title: "Extra Kilometres Driven",
    category: "separate",
    badge: "Per Published Rate",
    description: "Billed at standard per-km rates if you take unplanned side detours beyond the agreed route.",
  },
];

export interface ShirdiMilestone {
  title: string;
  distance: string;
  duration: string;
  description: string;
  tip: string;
}

export const SHIRDI_ROUTE_MILESTONES: ShirdiMilestone[] = [
  {
    title: "Mumbai Doorstep Pickup",
    distance: "0 km",
    duration: "Start",
    description: "Chauffeur arrives at your home, hotel, or Mumbai Airport (T1/T2) on time.",
    tip: "Depart early (between 5:00 AM and 6:30 AM) to avoid Mumbai-Thane morning bottlenecks.",
  },
  {
    title: "Thane & Bhiwandi Bypass",
    distance: "35 km",
    duration: "45 mins",
    description: "Crossing Mumbai metropolitan region onto the smooth Mumbai-Nashik Highway (NH 160).",
    tip: "Smooth transit via Eastern Express Highway and Majiwada flyover.",
  },
  {
    title: "Kasara Ghat & Igatpuri",
    distance: "115 km",
    duration: "2.5 hours",
    description: "Ascending the scenic Western Ghats pass through misty hills and winding roads.",
    tip: "Popular breakfast stop at Igatpuri or Food Plaza for piping hot chai and Maharashtrian breakfast.",
  },
  {
    title: "Ghoti – Sinnar Highway",
    distance: "185 km",
    duration: "4 hours",
    description: "Smooth countryside expressway connection bypassing Nashik city traffic towards Shirdi.",
    tip: "Wide, straight multi-lane highway offering a relaxing ride for children and seniors.",
  },
  {
    title: "Shirdi Sai Baba Temple Arrival",
    distance: "240 km",
    duration: "4.5 - 5.5 hours",
    description: "Direct drop at Sai Baba Samadhi Temple Gate, your hotel, or Bhakta Niwas complex.",
    tip: "Driver drops you nearest to the temple entry gate and assists with baggage to hotel lobby.",
  },
];

export interface ShirdiFaq {
  question: string;
  answer: string;
  category: "pricing" | "routes" | "vehicles" | "policies";
}

export const SHIRDI_FAQS: ShirdiFaq[] = [
  {
    question: "What is the fare for a Mumbai to Shirdi cab?",
    answer: "Fares typically start from around ₹3,000 one way for a sedan, and go higher for SUVs and Innova Crysta depending on vehicle type and travel date. Message us on WhatsApp for the exact fare for your travel date.",
    category: "pricing",
  },
  {
    question: "What is the distance between Mumbai and Shirdi?",
    answer: "The road distance between Mumbai and Shirdi is approximately 240 kilometres, and the journey usually takes between 4.5 and 6 hours depending on traffic and your pickup point.",
    category: "routes",
  },
  {
    question: "Can I book a one way cab from Mumbai to Shirdi?",
    answer: "Yes, one way cabs are available if you plan to stay in Shirdi and do not need the same vehicle to bring you back to Mumbai.",
    category: "pricing",
  },
  {
    question: "What happens if darshan takes longer than expected and the driver has to wait?",
    answer: "A standard free waiting window is included in your booking. If your darshan or visit takes longer than that, a waiting charge applies beyond the free limit, which will be confirmed to you at the time of booking.",
    category: "policies",
  },
  {
    question: "Is there an extra charge for early morning pickup from Mumbai?",
    answer: "Our service runs 24/7, so early morning pickups are available without any special booking process. Any applicable night charge, if relevant to your exact pickup time, will be shared upfront before you confirm.",
    category: "routes",
  },
  {
    question: "Can the cab also stop at Shani Shingnapur or other nearby places on the way?",
    answer: "Yes, additional stops can usually be arranged. Let our team know your planned stops while booking so the route and fare can be adjusted accordingly.",
    category: "routes",
  },
  {
    question: "What is the cancellation or rescheduling policy?",
    answer: "Cancellations made well in advance are generally free, while last minute cancellations may attract a partial charge since the vehicle is already blocked for you. Rescheduling is usually possible depending on vehicle availability.",
    category: "policies",
  },
  {
    question: "Which vehicle is best for a family travelling with luggage?",
    answer: "For most families with moderate luggage, an SUV works well. For larger families or those who want extra comfort on the long drive, the Innova Crysta is generally the better choice.",
    category: "vehicles",
  },
  {
    question: "Do I need to carry ID proof for the trip?",
    answer: "Yes, carrying a valid photo ID is a good practice for any outstation trip and is recommended for your Mumbai to Shirdi journey as well.",
    category: "policies",
  },
  {
    question: "Is one driver sufficient for a same day return trip from Mumbai to Shirdi?",
    answer: "For most same day return trips, one driver is sufficient given the moderate distance. If you have specific concerns about a very tight schedule, let our team know while booking so we can plan the trip accordingly.",
    category: "vehicles",
  },
];

export interface ShirdiCustomerReview {
  id: string;
  name: string;
  location: string;
  tripType: string;
  vehicle: string;
  quote: string;
  comment: string;
  rating: number;
}

export const SHIRDI_TESTIMONIALS: ShirdiCustomerReview[] = [
  {
    id: "review-1",
    name: "Rajesh & Sunita Kulkarni",
    location: "Dadar, Mumbai",
    tripType: "Family Pilgrimage Darshan",
    vehicle: "Innova Crysta",
    quote: "Booked cab for Shirdi with family. Driver was polite and helped us throughout the journey. Peaceful and tension-free trip.",
    comment: "We travelled with our 72-year-old mother for Thursday Kakad Aarti. Chauffeur Santosh arrived at 4:30 AM sharp in Dadar with an immaculate Innova Crysta. He drove smoothly across the Kasara Ghat section, helped my mother with wheelchair entry near Gate 2, and waited patiently. Truly tension-free pilgrimage.",
    rating: 5,
  },
  {
    id: "review-2",
    name: "Amitabh Sengupta & Family",
    location: "Andheri West, Mumbai",
    tripType: "Round Trip (Shirdi + Shani Shingnapur)",
    vehicle: "Ertiga SUV",
    quote: "Long trip but very comfortable. Driver was experienced on ghats and drove safely. Family enjoyed a lot.",
    comment: "We booked an Ertiga for 5 passengers with moderate luggage. The highway ride was relaxed, AC cooling was excellent throughout the afternoon heat, and the driver took care of the ghat curves safely. Transparent billing with zero unexpected surprises.",
    rating: 5,
  },
  {
    id: "review-3",
    name: "Elena & David Miller",
    location: "Mumbai Airport (T2 Arrival)",
    tripType: "One Way Drop to Shirdi Bhakta Niwas",
    vehicle: "Sedan (Dzire)",
    quote: "Excellent cab service. As a tourist, I felt very safe and comfortable.",
    comment: "Landing late night at Mumbai Airport, we arranged our pickup via WhatsApp. Our chauffeur met us at Terminal 2 arrival pillar with a greeting placard. Clean car, pleasant drive, and he dropped us safely at our Shirdi hotel reception early morning.",
    rating: 5,
  },
];

export interface ShirdiPickupHub {
  name: string;
  zone: string;
  estDriveTime: string;
  popularFor: string;
}

export const SHIRDI_PICKUP_HUBS: ShirdiPickupHub[] = [
  {
    name: "South Mumbai / Colaba / Dadar",
    zone: "South & Central Mumbai",
    estDriveTime: "5 - 5.5 hrs",
    popularFor: "Direct Eastern Freeway connection to Thane & Nashik Highway",
  },
  {
    name: "Bandra / Andheri / Borivali",
    zone: "Western Suburbs",
    estDriveTime: "4.5 - 5 hrs",
    popularFor: "Western Express Highway to Ghodbunder / Majiwada route",
  },
  {
    name: "Mumbai Airport T1 & T2",
    zone: "Airport Transfers",
    estDriveTime: "4.5 hrs",
    popularFor: "Flight-to-Darshan direct pickups with luggage assistance",
  },
  {
    name: "Thane / Mulund / Navi Mumbai",
    zone: "Eastern & Navi Mumbai",
    estDriveTime: "4 - 4.5 hrs",
    popularFor: "Quickest access to NH 160 Mumbai-Nashik Expressway",
  },
];
