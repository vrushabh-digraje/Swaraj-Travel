export type FaqItem = {
  question: string;
  answer: string;
};

export type RouteStop = {
  title: string;
  body: string;
};

export type OutstationRoute = {
  slug: string;
  from: string;
  to: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  distance: string;
  duration: string;
  badge: string;
  headline: string;
  intro: string;
  highlights: Array<{ title: string; body: string }>;
  stats: Array<{ value: string; label: string }>;
  faqs: FaqItem[];
  guideTitle: string;
  guideIntro: string;
  routeMap: {
    primary: string;
    via: string;
    toll: string;
    mapsUrl: string;
  };
  stops: RouteStop[];
};

export const OUTSTATION_ROUTES: OutstationRoute[] = [
  {
    slug: "mumbai-to-pune-cab",
    from: "Mumbai",
    to: "Pune",
    title: "Mumbai to Pune Cab",
    metaTitle: "Mumbai to Pune Cab | Reliable One Way & Round Trip Taxi @ ₹14/km",
    metaDescription:
      "Book a Mumbai to Pune cab with Swaraj Travel. One-way and round-trip taxis via the Expressway, airport drops from T1/T2, Innova Crysta and Dzire from ₹14/km.",
    distance: "148 km",
    duration: "3 hours",
    badge: "Most Popular Route",
    headline: "Reliable Mumbai to Pune Cab Service",
    intro:
      "Looking for a stress-free journey? Swaraj Travel offers Mumbai to Pune taxi service via the Mumbai-Pune Expressway. Book a one-way drop from Mumbai Airport T2 or a round-trip package in a clean, air-conditioned sedan or SUV, available 24/7.",
    highlights: [
      { title: "Transparent Pricing", body: "Clear per-km rates with no surprise add-ons." },
      { title: "Door-to-Door Pickup", body: "Home, office, hotel, or Mumbai Airport pickup." },
      { title: "Expressway Experts", body: "Chauffeurs who know the Mumbai-Pune Expressway." },
      { title: "Safety First", body: "Serviced, sanitized vehicles for family and business travel." },
    ],
    stats: [
      { value: "148 km", label: "Distance" },
      { value: "3-4 hours", label: "Duration" },
      { value: "24/7", label: "Available" },
    ],
    faqs: [
      {
        question: "How much is the cab fare from Mumbai to Pune?",
        answer:
          "Mumbai to Pune cab fares start from ₹14/km. The total depends on the car type and whether you choose one-way or round trip. Tolls and parking are extra as actuals.",
      },
      {
        question: "Do you provide Mumbai Airport to Pune cab service?",
        answer:
          "Yes. We specialize in Mumbai Airport T1/T2 to Pune drops. Drivers track your flight so they are ready at arrivals.",
      },
      {
        question: "Is the Mumbai-Pune Expressway toll included?",
        answer:
          "To keep base rates transparent, expressway tolls and state taxes are usually extra. We can share an all-inclusive quote on WhatsApp.",
      },
      {
        question: "Can I book a one-way taxi from Mumbai to Pune?",
        answer:
          "Yes. You pay only for the distance you travel on a one-way booking. Return fare is not charged.",
      },
    ],
    guideTitle: "Must-visit stops on a Mumbai to Pune road trip",
    guideIntro:
      "The drive from Mumbai to Pune via the Yashwantrao Chavan Expressway is more than a 3-hour commute. Our drivers run this route every day and know the best food and viewpoint stops.",
    routeMap: {
      primary: "Mumbai → Panvel → Khopoli → Khandala → Lonavala → Talegaon → Pune",
      via: "Mumbai-Pune Expressway (Yashwantrao Chavan Expressway)",
      toll: "₹300-400",
      mapsUrl: "https://maps.google.com/?q=Mumbai+to+Pune+Expressway",
    },
    stops: [
      {
        title: "Karnala Bird Sanctuary",
        body: "A short nature stop after Navi Mumbai. Ideal for stretching your legs on early morning trips.",
      },
      {
        title: "Shree Datta Snacks, Panvel",
        body: "A classic breakfast halt for vada pav, sabudana khichdi, and kothimbir vada.",
      },
      {
        title: "Duke's Nose, Khandala",
        body: "Quick photo stop with valley views, especially scenic in monsoon.",
      },
      {
        title: "Lonavala Lake & Bhushi Dam",
        body: "A 15-minute detour between June and September for the overflowing dam steps.",
      },
      {
        title: "Karla & Bhaja Caves",
        body: "2nd-century Buddhist caves near Lonavala for travellers who want a heritage stop.",
      },
      {
        title: "Sunny Da Dhaba",
        body: "Popular highway meal stop on the old Mumbai-Pune highway before you enter Pune.",
      },
    ],
  },
  {
    slug: "mumbai-to-nashik-cab",
    from: "Mumbai",
    to: "Nashik",
    title: "Mumbai to Nashik Cab",
    metaTitle: "Mumbai to Nashik Cab | Reliable One Way & Round Trip Taxi @ ₹14/km",
    metaDescription:
      "Book a Mumbai to Nashik cab for wine tours, Trimbakeshwar darshan, or airport drops. One-way and round-trip taxis on NH160 with 24/7 pickup.",
    distance: "167 km",
    duration: "3.5 hours",
    badge: "Wine Country Route",
    headline: "Reliable Mumbai to Nashik Cab Service",
    intro:
      "Book a premium Mumbai to Nashik taxi for Trimbakeshwar, Sula vineyards, or a business meeting. Swaraj Travel offers sanitized, punctual one-way and Mumbai Airport to Nashik cabs.",
    highlights: [
      { title: "Transparent Pricing", body: "Clear per-km rates with no surprise add-ons." },
      { title: "Door-to-Door Pickup", body: "Home, office, or Mumbai Airport pickup." },
      { title: "NH160 Experts", body: "Drivers who know Igatpuri ghats and Nashik traffic." },
      { title: "Safety First", body: "Serviced, sanitized vehicles for family travel." },
    ],
    stats: [
      { value: "167 km", label: "Distance" },
      { value: "3.5-4.5 hours", label: "Duration" },
      { value: "24/7", label: "Available" },
    ],
    faqs: [
      {
        question: "What is the fastest route from Mumbai to Nashik?",
        answer:
          "We travel via the Mumbai-Nashik Highway (NH160). It usually takes about 4 hours. Early morning departures help avoid Thane traffic.",
      },
      {
        question: "Do you offer Trimbakeshwar darshan packages?",
        answer:
          "Yes. Same-day or multi-day packages from Mumbai to Trimbakeshwar with Nashik sightseeing are available on request.",
      },
      {
        question: "Can I book a one-way drop from Mumbai Airport to Nashik?",
        answer:
          "Yes. We provide 24/7 pickup from Mumbai Airport and wait if your flight is delayed.",
      },
      {
        question: "Are there clean food stops on the Mumbai-Nashik route?",
        answer:
          "Drivers know family restaurants near Padgha, Shahapur, and Igatpuri for breakfast or lunch.",
      },
    ],
    guideTitle: "Best pit-stops on a Mumbai to Nashik road trip",
    guideIntro:
      "The Mumbai to Nashik drive is about 167 km on NH160. As you leave the city and enter the Sahyadris, the route opens up to ghats, valleys, and vineyard country.",
    routeMap: {
      primary: "Mumbai → Thane → Bhiwandi → Igatpuri → Nashik",
      via: "Mumbai-Nashik Highway (NH-160)",
      toll: "₹250-350",
      mapsUrl: "https://maps.google.com/?q=Mumbai+to+Nashik",
    },
    stops: [
      {
        title: "Shree Datta Snacks, Padgha",
        body: "A popular Maharashtrian breakfast stop near the Padgha toll for misal pav and vada pav.",
      },
      {
        title: "Manas Mandir, Shahapur",
        body: "White marble Jain temple just off the highway — a calm 20-minute stretch break.",
      },
      {
        title: "Camel Valley, Igatpuri",
        body: "Viewpoint on the Kasara ghat. Especially beautiful in monsoon mist.",
      },
      {
        title: "Myanmar Gate & Vipassana Centre",
        body: "Golden pagoda landmark in Igatpuri and a quick photo stop before Nashik.",
      },
      {
        title: "Vihigaon Waterfall",
        body: "Monsoon detour from the highway for a close-up waterfall stop.",
      },
      {
        title: "Sula Vineyards",
        body: "Wine tasting and vineyard views near Gangapur Dam as you enter Nashik.",
      },
    ],
  },
  {
    slug: "mumbai-to-shirdi-cab",
    from: "Mumbai",
    to: "Shirdi",
    title: "Mumbai to Shirdi Cab",
    metaTitle: "Mumbai to Shirdi Cab | Reliable Taxi Service starting From ₹14/km",
    metaDescription:
      "Book a Mumbai to Shirdi cab for Sai Baba darshan. Airport pickup, Innova Crysta family cars, and Samruddhi Mahamarg route with 24/7 service.",
    distance: "240 km",
    duration: "5 hours",
    badge: "Pilgrimage Route",
    headline: "Seamless Mumbai to Shirdi Cab Booking",
    intro:
      "Travel from Mumbai to Shirdi for Kakad Aarti or a family pilgrimage in a comfortable AC cab. Swaraj Travel offers door-to-door pickup, airport transfers, and experienced highway drivers.",
    highlights: [
      { title: "Expressway Experts", body: "Samruddhi Mahamarg for a smoother 4.5-hour journey." },
      { title: "Punctual Pickups", body: "On-time departures from home or Mumbai Airport." },
      { title: "Family SUVs", body: "Innova Crysta seating for 7 with luggage space." },
      { title: "Pilgrimage Packages", body: "Shirdi, Shani Shingnapur, and Trimbakeshwar combos." },
    ],
    stats: [
      { value: "240 km", label: "Distance" },
      { value: "4.5-5 hours", label: "Duration" },
      { value: "24/7", label: "Door-to-door" },
    ],
    faqs: [
      {
        question: "What is the best time to leave Mumbai for Shirdi?",
        answer:
          "Leave between 4:00 AM and 5:00 AM to avoid Mumbai/Thane traffic and reach Shirdi around 10:00 AM for afternoon darshan.",
      },
      {
        question: "Can we include Shani Shingnapur?",
        answer:
          "Yes. Shani Shingnapur is about 75 km from Shirdi. Round-trip packages can include both temples.",
      },
      {
        question: "Do you provide pickup from Mumbai Airport T2?",
        answer:
          "Yes. The driver can meet you at arrivals with a name board for a direct Shirdi drop.",
      },
      {
        question: "How do I pay for the ride?",
        answer:
          "UPI, cards, or cash to the driver. A small token amount on WhatsApp confirms the booking.",
      },
    ],
    guideTitle: "Mumbai to Shirdi road trip: fastest route and stops",
    guideIntro:
      "Samruddhi Mahamarg has made the Mumbai to Shirdi pilgrimage faster and more comfortable. This guide covers the preferred route and useful stops for families.",
    routeMap: {
      primary: "Mumbai → Thane → Nashik → Shirdi (via Samruddhi Mahamarg)",
      via: "NH-160 to Mumbai-Nagpur Expressway",
      toll: "₹400-500",
      mapsUrl: "https://maps.google.com/?q=Mumbai+to+Shirdi",
    },
    stops: [
      {
        title: "Samruddhi Mahamarg entry",
        body: "NH160 to Igatpuri, then Samruddhi at the Bharvir interchange for an 8-lane expressway.",
      },
      {
        title: "Shree Datta Snacks, Asangaon",
        body: "Traditional breakfast stop before the long highway stretch.",
      },
      {
        title: "Camel Valley & Bhatsa River",
        body: "Short monsoon viewpoint on the Kasara ghat.",
      },
      {
        title: "Myanmar Gate, Igatpuri",
        body: "Peaceful photo stop near the Vipassana centre before the expressway.",
      },
      {
        title: "Samruddhi food plazas",
        body: "Clean washrooms and parking every 50-60 km — useful for seniors and children.",
      },
      {
        title: "Sai Teerth Theme Park",
        body: "Family-friendly stop in Shirdi after temple darshan.",
      },
    ],
  },
  {
    slug: "mumbai-to-mahabaleshwar-cab",
    from: "Mumbai",
    to: "Mahabaleshwar",
    title: "Mumbai to Mahabaleshwar Cab",
    metaTitle: "Mumbai to Mahabaleshwar Cab | Reliable Taxi starting @ ₹3,800",
    metaDescription:
      "Book a Mumbai to Mahabaleshwar taxi with ghat-expert drivers. Airport pickup, Innova Crysta SUVs, Panchgani sightseeing, and round-trip hill-station packages.",
    distance: "263 km",
    duration: "6 hours",
    badge: "Hill Station Route",
    headline: "Refreshing Mumbai to Mahabaleshwar Cab Service",
    intro:
      "Escape the city with a Mumbai to Mahabaleshwar taxi. Swaraj Travel runs powerful AC sedans and SUVs with drivers experienced on Pasarni Ghat, fog, and steep climbs.",
    highlights: [
      { title: "Hill-climb specialists", body: "Drivers trained for Pasarni Ghat and foggy roads." },
      { title: "Airport direct", body: "Pickup from Mumbai Airport T1/T2 for flying visitors." },
      { title: "Sightseeing ready", body: "Full-day options for Pratapgad Fort and Venna Lake." },
      { title: "Modern fleet", body: "Innova Crysta and SUVs for luggage-heavy family trips." },
    ],
    stats: [
      { value: "263 km", label: "Distance" },
      { value: "5.5-6 hours", label: "Duration" },
      { value: "Hill-expert", label: "Drivers" },
    ],
    faqs: [
      {
        question: "Which is the best route from Mumbai to Mahabaleshwar?",
        answer:
          "We take the Mumbai-Pune Expressway, then NH48 via Surur. It is the smoothest and fastest option for most trips.",
      },
      {
        question: "Can we stop at Mapro Garden on the way?",
        answer:
          "Yes. Mapro Garden in Panchgani is a popular stop for strawberry cream, snacks, and a short break.",
      },
      {
        question: "Is it safe to travel to Mahabaleshwar at night?",
        answer:
          "Our drivers are trained for night driving. We still recommend reaching the ghat sections before 8:00 PM for better visibility.",
      },
      {
        question: "Do you offer Pratapgad Fort sightseeing?",
        answer:
          "Yes. Round-trip packages can include Pratapgad Fort, about 22 km from the main market.",
      },
    ],
    guideTitle: "Best places to visit on a Mahabaleshwar trip",
    guideIntro:
      "A cab makes hill-station sightseeing easier. Ask for a waiting package and cover viewpoints, Mapro, and Panchgani without changing cars.",
    routeMap: {
      primary: "Mumbai → Expressway → NH48 → Wai → Panchgani → Mahabaleshwar",
      via: "Mumbai-Pune Expressway and Pasarni Ghat",
      toll: "As actuals",
      mapsUrl: "https://maps.google.com/?q=Mumbai+to+Mahabaleshwar",
    },
    stops: [
      { title: "Arthur's Seat", body: "Known as the Queen of Points for valley views." },
      { title: "Venna Lake", body: "Boat rides surrounded by greenery in the main town." },
      { title: "Mapro Garden", body: "Must-visit for strawberry products and family snacks." },
      { title: "Pratapgad Fort", body: "Historic Maratha fort about 22 km from the market." },
      { title: "Elephant's Head Point", body: "Natural rock formation with a cliff-side view." },
      { title: "Parsi Point, Panchgani", body: "Tea-break viewpoint over the Krishna valley." },
    ],
  },
];

export function getRoute(slug: string) {
  return OUTSTATION_ROUTES.find((route) => route.slug === slug);
}

export function relatedRoutes(slug: string) {
  return OUTSTATION_ROUTES.filter((route) => route.slug !== slug);
}
