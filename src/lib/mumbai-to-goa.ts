export interface GoaFareItem {
  id: string;
  carType: string;
  oneWayFare: number;
  oneWayFareStr: string;
  seats: string;
  luggage: string;
  tolls: string;
  extraKmRate: string;
  nightCharge: string;
  bestFor: string;
  popular?: boolean;
}

export const GOA_FARES: GoaFareItem[] = [
  {
    id: "hatchback",
    carType: "Hatchback (Swift / WagonR)",
    oneWayFare: 7500,
    oneWayFareStr: "₹7,500",
    seats: "4",
    luggage: "2 bags",
    tolls: "Included",
    extraKmRate: "₹14 per km",
    nightCharge: "₹300",
    bestFor: "Solo traveler or couple, light bags",
  },
  {
    id: "sedan",
    carType: "Sedan (Dzire / Etios)",
    oneWayFare: 8500,
    oneWayFareStr: "₹8,500",
    seats: "4+1",
    luggage: "3 bags",
    tolls: "Included",
    extraKmRate: "₹16 per km",
    nightCharge: "₹300",
    bestFor: "Couple or small family, comfortable ride",
    popular: true,
  },
  {
    id: "suv",
    carType: "SUV (Ertiga / Scorpio)",
    oneWayFare: 11000,
    oneWayFareStr: "₹11,000",
    seats: "6+1",
    luggage: "4 bags",
    tolls: "Included",
    extraKmRate: "₹18 per km",
    nightCharge: "₹400",
    bestFor: "Family of 4 to 5 with full holiday luggage",
    popular: true,
  },
  {
    id: "innova-crysta",
    carType: "Innova Crysta",
    oneWayFare: 13500,
    oneWayFareStr: "₹13,500",
    seats: "6+1",
    luggage: "5 bags",
    tolls: "Included",
    extraKmRate: "₹20 per km",
    nightCharge: "₹500",
    bestFor: "Group of 6, premium long-distance comfort",
    popular: true,
  },
  {
    id: "tempo-traveller",
    carType: "Tempo Traveller",
    oneWayFare: 18000,
    oneWayFareStr: "₹18,000",
    seats: "12",
    luggage: "8 bags",
    tolls: "Included",
    extraKmRate: "₹22 per km",
    nightCharge: "₹600",
    bestFor: "Large group of 8 to 12",
  },
];

export interface CarSelectionGuideItem {
  who: string;
  car: string;
  why: string;
}

export const CAR_SELECTION_GUIDE: CarSelectionGuideItem[] = [
  {
    who: "Solo traveler or couple, weekend bags",
    car: "Sedan (Dzire / Etios)",
    why: "Fuel-efficient, comfortable, good boot space for 2",
  },
  {
    who: "Family of 3 to 4, moderate luggage",
    car: "SUV (Ertiga)",
    why: "Wide cabin, smooth on long highway stretches",
  },
  {
    who: "Family of 5 to 6, full Goa holiday luggage",
    car: "Innova Crysta",
    why: "Best-in-class cabin width, reliable suspension on ghat and coastal roads, ample boot",
  },
  {
    who: "Group of 7 to 12",
    car: "Tempo Traveller",
    why: "Most economical per-person rate, designed for long group trips",
  },
  {
    who: "Business or corporate travel",
    car: "Sedan or Innova Crysta",
    why: "Professional appearance, clean interiors, punctual drivers",
  },
];

export interface GoaRouteStage {
  title: string;
  distance: string;
  description: string;
}

export const GOA_ROUTE_STAGES: GoaRouteStage[] = [
  {
    title: "Mumbai to Mahad",
    distance: "175 km",
    description: "Fast, flat highway. Smooth driving. Good first break zone.",
  },
  {
    title: "Mahad to Chiplun",
    distance: "95 km",
    description: "Konkan begins. Road narrows pleasantly. River views start appearing. Vashishthi bridge at Chiplun is a favorite photo stop.",
  },
  {
    title: "Chiplun to Ratnagiri",
    distance: "75 km",
    description: "Midpoint of your journey. Best place for a proper sit-down meal.",
  },
  {
    title: "Ratnagiri to Sawantwadi",
    distance: "145 km",
    description: "Coastal scenery opens up. Traffic lightens significantly after Kankavli.",
  },
  {
    title: "Sawantwadi to Goa",
    distance: "30 km",
    description: "Final stretch. Goa border crossing, then your destination.",
  },
];

export interface GoaRoadTripStop {
  stop: string;
  distance: string;
  whatToDo: string;
  recommendedTime: string;
}

export const GOA_ROAD_TRIP_STOPS: GoaRoadTripStop[] = [
  {
    stop: "Khopoli",
    distance: "80 km",
    whatToDo: "Breakfast, fuel, stretch",
    recommendedTime: "20 to 30 minutes",
  },
  {
    stop: "Mahad",
    distance: "175 km",
    whatToDo: "Tea break, clean restrooms, riverside town",
    recommendedTime: "15 to 20 minutes",
  },
  {
    stop: "Chiplun",
    distance: "270 km",
    whatToDo: "Lunch at riverside dhaba or restaurant, river views",
    recommendedTime: "30 to 45 minutes",
  },
  {
    stop: "Ratnagiri",
    distance: "345 km",
    whatToDo: "Proper meal, seasonal Alphonso fruit stalls, sea breeze",
    recommendedTime: "30 minutes",
  },
  {
    stop: "Sawantwadi",
    distance: "490 km",
    whatToDo: "Light snack, famous for lacquerware, final break before Goa",
    recommendedTime: "15 to 20 minutes",
  },
];

export interface TransportComparisonItem {
  mode: string;
  cost: string;
  time: string;
  doorToDoor: string;
  flexibility: string;
  bestFor: string;
  highlight?: boolean;
}

export const TRANSPORT_COMPARISON: TransportComparisonItem[] = [
  {
    mode: "Private Cab (Book A Cab)",
    cost: "₹8,500 to ₹18,000",
    time: "10 to 12 hours",
    doorToDoor: "Yes, fully",
    flexibility: "Complete — stop anywhere, any time",
    bestFor: "Families, groups, luggage-heavy travelers, anyone wanting door-to-door service",
    highlight: true,
  },
  {
    mode: "Konkan Railway (Train)",
    cost: "₹500 to ₹2,000",
    time: "10 to 12 hours",
    doorToDoor: "Station to station only",
    flexibility: "Fixed schedule, no en-route stops",
    bestFor: "Budget solo travelers with light luggage",
  },
  {
    mode: "AC Volvo Bus",
    cost: "₹800 to ₹1,800",
    time: "12 to 14 hours",
    doorToDoor: "Depot to depot only",
    flexibility: "Fixed schedule",
    bestFor: "Budget backpackers",
  },
  {
    mode: "Flight",
    cost: "₹2,500 to ₹8,000+",
    time: "1.5 hours flight plus 4 to 5 hours airport time",
    doorToDoor: "Airport transfers needed at both ends",
    flexibility: "Fixed schedule, strict luggage limits",
    bestFor: "Time-critical solo business travelers",
  },
];

export interface CustomerReviewItem {
  id: string;
  author: string;
  route: string;
  rating: number;
  quote: string;
}

export const GOA_REVIEWS: CustomerReviewItem[] = [
  {
    id: "rev-1",
    author: "R.",
    route: "Mumbai to Pune",
    rating: 5,
    quote: "Very smooth experience. Driver came on time, car was clean and driving was safe. Pune trip was comfortable even with traffic. Will book again.",
  },
  {
    id: "rev-2",
    author: "S.",
    route: "Mumbai to Shirdi",
    rating: 4,
    quote: "Booked cab for Shirdi with family. Driver was polite and helped us throughout the journey. Peaceful and tension-free trip.",
  },
  {
    id: "rev-3",
    author: "A.",
    route: "Mumbai to Nashik",
    rating: 5,
    quote: "Good service at reasonable price. Nashik trip was smooth and driver knew all routes well. Overall mast experience.",
  },
  {
    id: "rev-4",
    author: "Customer",
    route: "Mumbai to Lonavala",
    rating: 5,
    quote: "Weekend trip to Lonavala was awesome. Car was neat and AC worked perfectly. On-time pickup and friendly driver.",
  },
  {
    id: "rev-5",
    author: "S.",
    route: "Long Ghat Route Trip",
    rating: 5,
    quote: "Long trip but very comfortable. Driver was experienced on ghats and drove safely. Family enjoyed a lot.",
  },
  {
    id: "rev-6",
    author: "Tourist Customer",
    route: "Mumbai",
    rating: 5,
    quote: "Excellent cab service. As a tourist, I felt very safe and comfortable. Driver was professional and helpful. Highly recommended.",
  },
];

export interface GoaFaqItem {
  question: string;
  answer: string;
  category: "distance" | "fare" | "booking" | "safety" | "car";
}

export const GOA_FAQS: GoaFaqItem[] = [
  // Distance, Route, and Travel Time
  {
    question: "What is the distance from Mumbai to Goa by road?",
    answer: "The road distance from Mumbai to Goa via NH66 is approximately 595 km. This is the most commonly used and well-maintained route for the journey.",
    category: "distance",
  },
  {
    question: "How long does a Mumbai to Goa cab take?",
    answer: "Under normal conditions, the journey takes 10 to 12 hours including 1 to 2 short break stops. Traffic near Panvel and Khopoli during morning hours can add 45 to 90 minutes. A 4 AM to 5 AM departure or a 10 PM to 11 PM departure gives you the smoothest and fastest drive.",
    category: "distance",
  },
  {
    question: "Which route does Book A Cab use for Mumbai to Goa?",
    answer: "We use NH66, the coastal highway passing through Panvel, Mahad, Chiplun, Ratnagiri, Kankavli, and Sawantwadi before entering Goa. This is the most reliable, scenic, and consistently maintained route for this journey. If you specifically need the expressway and Kolhapur route, mention this at booking and we will accommodate it.",
    category: "distance",
  },
  // Fare, Pricing, and Charges
  {
    question: "What is the cab fare from Mumbai to Goa?",
    answer: "Book A Cab's one-way Mumbai to Goa cab fare starts at ₹7,500 for a Hatchback, ₹8,500 for a Sedan, ₹11,000 for an SUV, ₹13,500 for an Innova Crysta, and ₹18,000 for a Tempo Traveller. All fares include tolls and driver charges. Your exact confirmed fare is sent to you on WhatsApp before you book.",
    category: "fare",
  },
  {
    question: "Are tolls included in the Mumbai to Goa cab fare?",
    answer: "Yes. Toll charges applicable on the NH66 route are included in the Book A Cab one-way fare. The only additional government charge is the Maharashtra to Goa interstate state permit fee, which is charged at actuals. We inform you of this separately before you confirm your booking.",
    category: "fare",
  },
  {
    question: "Are there any hidden charges in the Book A Cab fare?",
    answer: "No. Book A Cab charges no platform fee, no booking commission, and no surprise additions. The fare confirmed on WhatsApp is what you pay. The only variables outside our control are the interstate state permit fee and the night allowance for pickups between 11 PM and 5 AM, both of which are communicated clearly before confirmation.",
    category: "fare",
  },
  {
    question: "Does the Mumbai to Goa cab fare change during peak season?",
    answer: "During high-demand periods such as Christmas, New Year, Diwali, and summer vacations from April to June, cab availability reduces and fares may reflect current market demand. We recommend booking 3 to 5 days in advance during these periods. Contact us on WhatsApp for your travel date's exact fare and availability.",
    category: "fare",
  },
  // Booking Process
  {
    question: "How do I book a Mumbai to Goa cab with Book A Cab?",
    answer: "Send us a WhatsApp message with your travel date, pickup location in Mumbai, preferred car type, and drop point in Goa. We confirm your fare and booking within minutes. No app is required, no advance payment is needed to hold your booking.",
    category: "booking",
  },
  {
    question: "How far in advance should I book a Mumbai to Goa cab?",
    answer: "For weekday trips, 1 to 2 days in advance is usually sufficient. For weekend getaways, long weekends, and peak season dates, book 3 to 5 days ahead to secure your preferred vehicle type and fare.",
    category: "booking",
  },
  {
    question: "Can I change my Goa drop location after booking?",
    answer: "Minor changes within the same Goa zone, such as switching between two hotels in Calangute, can usually be accommodated without a fare change. A significant change such as switching from North Goa to South Goa will involve a fare adjustment. Message us on WhatsApp as early as possible if your plans change and we will sort it out transparently.",
    category: "booking",
  },
  // Safety and Drivers
  {
    question: "Is it safe to travel Mumbai to Goa by cab at night?",
    answer: "Yes. NH66 is a national highway with consistent lighting for most of its length. Night traffic is lighter, making for a smoother and faster drive compared to daytime. Book A Cab assigns only experienced long-distance drivers for overnight trips. You receive your driver's direct contact number 2 hours before pickup, our support team is reachable on WhatsApp at all hours, and live location sharing is available throughout the journey.",
    category: "safety",
  },
  {
    question: "Are Book A Cab drivers experienced on the ghat sections of the Mumbai to Goa route?",
    answer: "Yes. Our outstation drivers are specifically selected for their long-distance route experience. They know the NH66 coastal highway, the ghat approaches near Mahad and Poladpur, and the river bridge sections that require careful speed management. One of our customers confirmed this directly: \"Driver was experienced on ghats and drove safely. Family enjoyed a lot.\" That standard applies to every Mumbai to Goa trip we operate.",
    category: "safety",
  },
  {
    question: "What happens if my cab breaks down during the Mumbai to Goa journey?",
    answer: "Our support team is reachable on WhatsApp and call 24 hours a day, 7 days a week. In the event of a breakdown, we coordinate roadside assistance and arrange an alternate vehicle to continue your journey from that point. You will always have a live point of contact from Book A Cab and will never be left without a clear resolution.",
    category: "safety",
  },
  // Car and Trip Questions
  {
    question: "Which car is best for a family of 5 traveling Mumbai to Goa?",
    answer: "For a family of 5 with full Goa holiday luggage, the Innova Crysta is the best choice. It seats 6+1 comfortably, carries 5 large bags in the boot, and handles both coastal highway and ghat road conditions better than a standard sedan on a 10 to 12 hour drive. An Ertiga SUV is a good option for a family of 4 with moderate luggage.",
    category: "car",
  },
  {
    question: "Can I book a one-way cab from Mumbai to Goa?",
    answer: "Yes. One-way cab booking is our most popular Mumbai to Goa option. You pay only for the trip you need. There is no return journey cost included in a one-way fare.",
    category: "car",
  },
  {
    question: "Do you provide Goa to Mumbai cab service as well?",
    answer: "Yes. Book A Cab operates return cabs from Goa to Mumbai with the same standard of verified drivers and well-maintained vehicles. If you want to book both legs together, mention this when you message us on WhatsApp and we arrange both in one conversation.",
    category: "car",
  },
  {
    question: "Can I stop for sightseeing between Mumbai and Goa?",
    answer: "Standard bookings are point-to-point from Mumbai to your Goa drop location. If you want to include a specific stop such as Ganpatipule, Tarkarli, or another coastal point, mention this at the time of booking. Extended detours beyond the standard route may involve an additional fare based on extra distance and time. We always confirm any adjustment with you before it applies.",
    category: "car",
  },
  {
    question: "Do your drivers speak Marathi or English?",
    answer: "Most Book A Cab drivers are fluent in Marathi and conversational in Hindi. A working level of English is available. If you have a specific language preference, mention it at booking and we will do our best to match you accordingly.",
    category: "car",
  },
  {
    question: "How long is the free waiting time at my Mumbai pickup?",
    answer: "15 minutes of free waiting time applies at all standard pickup locations. For Mumbai Airport pickups, 60 minutes of free waiting time is provided from the flight landing time. Waiting charges apply after the free waiting period ends.",
    category: "car",
  },
];
