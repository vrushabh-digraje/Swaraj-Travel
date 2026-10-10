export type FaqItem = {
  question: string;
  answer: string;
};

export type RouteStop = {
  title: string;
  body: string;
};

export type RouteFareRow = {
  vehicle: string;
  seats: string;
  ratePerKm: number;
  oneWayBaseFare: number;
  bestFor?: string;
};

export type TransportComparisonRow = {
  option: string;
  doorToDoor: string;
  luggage: string;
  timingControl: string;
  bestFor: string;
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

  // AEO + SEO additions from Developer Handoff doc
  quickAnswer?: string;
  fareTable?: RouteFareRow[];
  fareTableNote?: string;
  included?: string[];
  extraAtActuals?: string[];
  pickupAreas?: string;
  dropAreas?: string;
  bestTimeToTravel?: string;
  whyBook?: {
    title: string;
    content: string;
    highlightLinkText?: string;
    highlightLinkHref?: string;
  };
  comparisonTable?: TransportComparisonRow[];
  airportNote?: string;
  contextualLinks?: Array<{ title: string; href: string }>;
};

export const OUTSTATION_ROUTES: OutstationRoute[] = [
  {
    slug: "mumbai-to-pune-cab",
    from: "Mumbai",
    to: "Pune",
    title: "Mumbai to Pune Cab",
    metaTitle: "Mumbai to Pune Cab from ₹1,924 | One Way & Round Trip",
    metaDescription:
      "Book a Mumbai to Pune cab: one-way from ₹1,924 for 148 km. Airport T1/T2 pickup, drop anywhere in Pune. Dzire, Innova, Ertiga, Tempo Traveller. Call +91-9970294122.",
    distance: "148 km",
    duration: "3 to 3.5 hours",
    badge: "Most Popular Route",
    headline: "Mumbai to Pune Cab: One Way & Round Trip Taxi",
    intro:
      "One-way and round-trip cabs from Mumbai to Pune. Door-to-door pickup, airport Terminal 1 and 2 service, booking 24 hours.",
    quickAnswer:
      "A Mumbai to Pune cab covers about 148 km via the Yashwantrao Chavan Mumbai-Pune Expressway in roughly 3 to 3.5 hours. One-way base fares start at ₹1,924 for a Swift Dzire (₹13/km), ₹2,664 for an Innova and ₹2,960 for an Innova Crysta. Toll, parking and driver allowance are extra at actuals. Book on call or WhatsApp at +91-9970294122.",
    highlights: [
      { title: "Transparent Pricing", body: "Clear per-km rates with no surprise add-ons." },
      { title: "Door-to-Door Pickup", body: "Home, office, hotel, or Mumbai Airport pickup." },
      { title: "Expressway Experts", body: "Chauffeurs who know the Mumbai-Pune Expressway." },
      { title: "Safety First", body: "Serviced, sanitized vehicles for family and business travel." },
    ],
    stats: [
      { value: "148 km", label: "Distance" },
      { value: "3 to 3.5 hrs", label: "Duration" },
      { value: "₹1,924", label: "Starting Fare" },
    ],
    fareTable: [
      { vehicle: "Swift Dzire / Aura", seats: "4+1", ratePerKm: 13, oneWayBaseFare: 1924, bestFor: "2 to 3 people, light luggage" },
      { vehicle: "Toyota Etios", seats: "4+1", ratePerKm: 14, oneWayBaseFare: 2072, bestFor: "2 to 3 people" },
      { vehicle: "Honda City", seats: "4+1", ratePerKm: 18, oneWayBaseFare: 2664, bestFor: "Comfort sedan" },
      { vehicle: "Ertiga", seats: "6+1", ratePerKm: 16, oneWayBaseFare: 2368, bestFor: "Families of 4 to 5" },
      { vehicle: "Innova", seats: "6+1", ratePerKm: 18, oneWayBaseFare: 2664, bestFor: "Families with luggage" },
      { vehicle: "Kia Carens", seats: "6+1 / 7+1", ratePerKm: 18, oneWayBaseFare: 2664, bestFor: "Families, more legroom" },
      { vehicle: "Innova Crysta", seats: "6+1", ratePerKm: 20, oneWayBaseFare: 2960, bestFor: "Premium comfort, elders" },
      { vehicle: "Tempo Traveller AC", seats: "12", ratePerKm: 28, oneWayBaseFare: 4144, bestFor: "Groups" },
      { vehicle: "Force Urbania", seats: "17", ratePerKm: 35, oneWayBaseFare: 5180, bestFor: "Larger groups" },
    ],
    fareTableNote:
      "Base fare = 148 km x rate per km. Expressway toll (approximately ₹320 for a car one way, paid by FASTag), parking and driver allowance (₹300 per day) are extra at actuals. Round trips are charged on total kilometres travelled, minimum 250 km per day. For an all-inclusive quote, message us on WhatsApp.",
    included: [
      "AC vehicle and fuel for the booked distance",
      "Experienced expressway chauffeur",
      "Door-to-door pickup and drop",
      "Flexible short pitstops for food, tea or photography",
    ],
    extraAtActuals: [
      "Expressway toll (approx ₹320 for car one-way via FASTag)",
      "Parking charges at pickup/drop venues (with receipts)",
      "Driver allowance (₹300 per day)",
      "State taxes and waiting charges beyond agreed schedule",
    ],
    pickupAreas:
      "Mumbai Airport Terminal 1 and Terminal 2, Andheri, Bandra, Dadar, Powai, Ghatkopar, Chembur, Thane, Navi Mumbai (Vashi, Nerul, Kharghar, Panvel), South Mumbai.",
    dropAreas:
      "Pune Airport, Pune Railway Station, Shivajinagar, Deccan, Kothrud, Hinjewadi, Baner, Wakad, Viman Nagar, Kharadi, Hadapsar, Magarpatta.",
    bestTimeToTravel:
      "Early morning (before 7 am) and late evening (after 8 pm) are the smoothest for the expressway. Friday evenings and Sunday evenings, long weekends and monsoon weekends can add 45 to 90 minutes around Khandala and Lonavala. If you have a flight or meeting in Pune, add a buffer of one hour to the standard 3-hour estimate.",
    comparisonTable: [
      { option: "Private Cab", doorToDoor: "Yes", luggage: "Easy", timingControl: "You decide", bestFor: "Families, groups, airport trips, business" },
      { option: "Train", doorToDoor: "No (station to station)", luggage: "Manageable", timingControl: "Fixed timetable", bestFor: "Solo traveller on a budget" },
      { option: "Bus", doorToDoor: "No", luggage: "Limited", timingControl: "Fixed timetable", bestFor: "Budget travel" },
      { option: "Self-Drive", doorToDoor: "Yes", luggage: "Easy", timingControl: "You decide", bestFor: "Confident drivers who want to drive" },
    ],
    airportNote:
      "We pick up from Terminal 1 and Terminal 2. Share your flight number and the driver tracks your arrival, so he is at arrivals when you land. Airport parking is charged at actuals. Typical airport to Pune door-to-door time is 3.5 to 4 hours depending on traffic.",
    contextualLinks: [
      { title: "Mumbai to Nashik cab", href: "/mumbai-to-nashik-cab" },
      { title: "Mumbai to Mahabaleshwar cab", href: "/mumbai-to-mahabaleshwar-cab" },
      { title: "Pune to Mumbai cab", href: "/pune-to-mumbai-cab" },
      { title: "Mumbai Darshan cab", href: "/mumbai-darshan-cab" },
      { title: "Fleet page", href: "/fleet" },
      { title: "Tour packages", href: "/packages" },
    ],
    faqs: [
      {
        question: "How long does it take to travel from Mumbai to Pune by cab?",
        answer:
          "About 3 to 3.5 hours for 148 km via the Mumbai-Pune Expressway. Peak weekends and monsoon can add 45 to 90 minutes.",
      },
      {
        question: "What is the cheapest cab from Mumbai to Pune?",
        answer:
          "A Swift Dzire or Aura at ₹13/km, which is a base fare of ₹1,924 one way, plus toll and driver allowance at actuals.",
      },
      {
        question: "Which cab is best for a family of five from Mumbai to Pune?",
        answer:
          "An Ertiga (₹16/km) or Kia Carens (₹18/km) fits five people with moderate luggage. For heavy luggage or elders, choose an Innova or Innova Crysta.",
      },
      {
        question: "Can I stop on the way?",
        answer:
          "Yes. Short stops for food, photos or a break are fine. Long waiting beyond the agreed time may be charged. Tell us your plan when booking.",
      },
      {
        question: "Can you drop me at Pune Airport or Pune Railway Station?",
        answer:
          "Yes. We drop anywhere in Pune, including Pune Airport and Pune Railway Station.",
      },
      {
        question: "Do you offer night travel from Mumbai to Pune?",
        answer:
          "Yes, 24/7. Night charges apply between 12:00 am and 6:00 am.",
      },
      {
        question: "Do you provide Mumbai Airport to Pune cab service?",
        answer:
          "Yes. We specialize in Mumbai Airport T1/T2 to Pune drops. Drivers track your flight so they are ready at arrivals.",
      },
      {
        question: "Is the Mumbai-Pune Expressway toll included?",
        answer:
          "Expressway toll (approx ₹320 for a car one way) is extra as actuals paid by FASTag, or we can share an all-inclusive quote on WhatsApp.",
      },
      {
        question: "Can I book a one-way taxi from Mumbai to Pune?",
        answer:
          "Yes. On one-way trips you pay only for the distance you travel (148 km base). Return fare is not charged.",
      },
    ],
    guideTitle: "Must-visit stops on a Mumbai to Pune road trip",
    guideIntro:
      "The drive from Mumbai to Pune via the Yashwantrao Chavan Expressway is roughly 3 to 3.5 hours. Our drivers run this route every day and know the best food and viewpoint stops.",
    routeMap: {
      primary: "Mumbai → Panvel → Khopoli → Khandala → Lonavala → Talegaon → Pune",
      via: "Mumbai-Pune Expressway (Yashwantrao Chavan Expressway)",
      toll: "approx ₹320 (car, one way)",
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
    metaTitle: "Mumbai to Nashik Cab from ₹2,171 | One Way & Round Trip",
    metaDescription:
      "Book a Mumbai to Nashik cab: one-way from ₹2,171 for 167 km. Trimbakeshwar, Sula, Shirdi add-ons. Dzire, Ertiga, Innova. Call +91-9970294122.",
    distance: "167 km",
    duration: "3.5 to 4 hours",
    badge: "Wine Country & Pilgrimage",
    headline: "Mumbai to Nashik Cab: One Way & Round Trip Taxi",
    intro:
      "A Mumbai to Nashik cab covers about 167 km in roughly 3.5 to 4 hours via the Mumbai-Nashik highway through Kasara Ghat. One-way base fares start at ₹2,171 for a Swift Dzire, ₹3,006 for an Innova and ₹3,340 for an Innova Crysta. Toll, parking and driver allowance are extra at actuals.",
    quickAnswer:
      "A Mumbai to Nashik cab covers about 167 km in roughly 3.5 to 4 hours via the Mumbai-Nashik highway through Kasara Ghat. One-way base fares start at ₹2,171 for a Swift Dzire, ₹3,006 for an Innova and ₹3,340 for an Innova Crysta. Toll, parking and driver allowance are extra at actuals.",
    highlights: [
      { title: "Transparent Pricing", body: "Clear per-km rates with no surprise add-ons." },
      { title: "Door-to-Door Pickup", body: "Home, office, or Mumbai Airport pickup." },
      { title: "Ghat Route Specialists", body: "Chauffeurs trained for Kasara Ghat curves and fog." },
      { title: "Pilgrim & Wine Add-ons", body: "Trimbakeshwar and Sula Vineyards same-day options." },
    ],
    stats: [
      { value: "167 km", label: "Distance" },
      { value: "3.5 to 4 hrs", label: "Duration" },
      { value: "₹2,171", label: "Starting Fare" },
    ],
    fareTable: [
      { vehicle: "Swift Dzire / Aura", seats: "4+1", ratePerKm: 13, oneWayBaseFare: 2171, bestFor: "2 to 3 people, light luggage" },
      { vehicle: "Toyota Etios", seats: "4+1", ratePerKm: 14, oneWayBaseFare: 2338, bestFor: "2 to 3 people" },
      { vehicle: "Ertiga", seats: "6+1", ratePerKm: 16, oneWayBaseFare: 2672, bestFor: "Families of 4 to 5" },
      { vehicle: "Innova", seats: "6+1", ratePerKm: 18, oneWayBaseFare: 3006, bestFor: "Families with luggage" },
      { vehicle: "Kia Carens", seats: "6+1 / 7+1", ratePerKm: 18, oneWayBaseFare: 3006, bestFor: "Families, more legroom" },
      { vehicle: "Innova Crysta", seats: "6+1", ratePerKm: 20, oneWayBaseFare: 3340, bestFor: "Premium comfort, elders" },
    ],
    fareTableNote:
      "Base fare = 167 km x rate per km. Toll, parking and driver allowance (₹300 per day) are extra at actuals. Round trips are charged on total kilometres travelled, minimum 250 km per day. For an all-inclusive quote, message us on WhatsApp.",
    included: [
      "AC vehicle and fuel for the booked distance",
      "Experienced ghat chauffeur",
      "Door-to-door pickup across Mumbai",
      "Flexible short pitstops for breakfast and viewpoints",
    ],
    extraAtActuals: [
      "Highway tolls paid via FASTag at actuals",
      "Parking charges at temples/vineyards with receipts",
      "Driver allowance (₹300 per day)",
      "Waiting beyond agreed time",
    ],
    whyBook: {
      title: "Why Travellers Book a Mumbai to Nashik Cab",
      content:
        "Most Nashik trips fall into three groups: pilgrims heading to Trimbakeshwar and Panchavati, wine-tourism visitors going to the Sula and Gangapur Road vineyards, and business travellers. A private cab lets you combine stops, such as Nashik city, Trimbakeshwar (about 28 km further) and a vineyard visit, without changing vehicles.",
      highlightLinkText: "Want to continue to Sai Baba's temple after Nashik? See Mumbai to Shirdi cab.",
      highlightLinkHref: "/mumbai-to-shirdi-cab",
    },
    pickupAreas:
      "Mumbai Airport, Andheri, Bandra, Dadar, Thane, Navi Mumbai and all Mumbai areas.",
    dropAreas:
      "Nashik Road railway station, CBS, Gangapur Road, College Road, Panchavati, Trimbakeshwar, and hotels or wedding venues in Nashik.",
    bestTimeToTravel:
      "Monsoon (July to September) is scenic but the ghat is slow in fog. October to February is comfortable and good for vineyards. For Trimbakeshwar darshan, leave early to avoid queue time, especially on Mondays and during Shravan.",
    comparisonTable: [
      { option: "Private Cab", doorToDoor: "Yes", luggage: "Easy", timingControl: "You decide", bestFor: "Trimbakeshwar pilgrims, wine lovers, families" },
      { option: "Train", doorToDoor: "No (Nashik Road)", luggage: "Manageable", timingControl: "Fixed timetable", bestFor: "Solo business trips to city" },
      { option: "Bus", doorToDoor: "No", luggage: "Limited", timingControl: "Fixed timetable", bestFor: "Budget travel" },
    ],
    contextualLinks: [
      { title: "Mumbai to Shirdi cab", href: "/mumbai-to-shirdi-cab" },
      { title: "Mumbai to Pune cab", href: "/mumbai-to-pune-cab" },
      { title: "Fleet page", href: "/fleet" },
      { title: "Tour packages", href: "/packages" },
    ],
    faqs: [
      {
        question: "How far is Nashik from Mumbai by road?",
        answer: "About 167 km, usually 3.5 to 4 hours via NH160 through Kasara Ghat.",
      },
      {
        question: "What is the cab fare from Mumbai to Nashik?",
        answer:
          "A one-way base fare starts at ₹2,171 for a Swift Dzire. An Ertiga is ₹2,672 and an Innova ₹3,006. Toll, parking and driver allowance are extra.",
      },
      {
        question: "Can I add Trimbakeshwar or Sula Vineyards?",
        answer:
          "Yes. Share your plan at booking and we quote the extra kilometres and waiting time without vehicle change.",
      },
      {
        question: "Do you do Mumbai to Nashik and Shirdi in one trip?",
        answer:
          "Yes. Nashik to Shirdi is a common add-on. Ask for a combined multi-destination quote on WhatsApp.",
      },
      {
        question: "Do you pick up from Mumbai Airport for Nashik?",
        answer:
          "Yes, Terminal 1 and Terminal 2 with flight tracking and terminal meet-and-greet.",
      },
      {
        question: "Are there clean food stops on the Mumbai-Nashik route?",
        answer:
          "Drivers know family restaurants near Padgha, Shahapur, and Igatpuri for breakfast or lunch.",
      },
    ],
    guideTitle: "Best pit-stops on a Mumbai to Nashik road trip",
    guideIntro:
      "Route: Mumbai, Thane, Bhiwandi, Shahapur, Kasara Ghat, Igatpuri, Nashik. The Kasara Ghat section is winding and foggy in monsoon, so we use experienced ghat drivers.",
    routeMap: {
      primary: "Mumbai → Thane → Bhiwandi → Igatpuri → Nashik",
      via: "Mumbai-Nashik Highway (NH-160)",
      toll: "₹250-350",
      mapsUrl: "https://maps.google.com/?q=Mumbai+to+Nashik",
    },
    stops: [
      {
        title: "Kasara Ghat Viewpoint",
        body: "Scenic viewpoint overlooking misty valley drops, especially picturesque between July and September.",
      },
      {
        title: "Igatpuri & Myanmar Gate",
        body: "Golden pagoda landmark and quick photo stop near the Vipassana centre before entering Nashik.",
      },
      {
        title: "Trimbakeshwar Temple",
        body: "One of the 12 sacred Jyotirlingas, located 28 km before Nashik. Ideal for early morning darshan.",
      },
      {
        title: "Panchavati & Kalaram Temple",
        body: "Historic Ramayana pilgrimage site on the banks of Godavari river in the heart of old Nashik.",
      },
      {
        title: "Pandavleni Caves",
        body: "Ancient rock-cut Buddhist caves dating from the 1st century BCE on Trivashmi Hill.",
      },
      {
        title: "Sula Vineyards",
        body: "India's premier wine-tourism destination with vineyard tours, tasting rooms, and restaurants.",
      },
    ],
  },
  {
    slug: "mumbai-to-shirdi-cab",
    from: "Mumbai",
    to: "Shirdi",
    title: "Mumbai to Shirdi Cab",
    metaTitle: "Mumbai to Shirdi Cab from ₹3,120 | Kakad Aarti Cab Booking",
    metaDescription:
      "Book a Mumbai to Shirdi cab: one-way from ₹3,120 for 240 km. Early start for Kakad Aarti, family-friendly Innova and Ertiga. Call +91-9970294122.",
    distance: "240 km",
    duration: "5 to 6 hours",
    badge: "Pilgrimage Express",
    headline: "Mumbai to Shirdi Cab: One Way & Round Trip Taxi",
    intro:
      "A Mumbai to Shirdi cab covers about 240 km in roughly 5 to 6 hours. One-way base fares start at ₹3,120 for a Swift Dzire, ₹4,320 for an Innova and ₹4,800 for an Innova Crysta. Toll, parking and driver allowance are extra at actuals. For Kakad Aarti, leave Mumbai the previous afternoon or evening.",
    quickAnswer:
      "A Mumbai to Shirdi cab covers about 240 km in roughly 5 to 6 hours. One-way base fares start at ₹3,120 for a Swift Dzire, ₹4,320 for an Innova and ₹4,800 for an Innova Crysta. Toll, parking and driver allowance are extra at actuals. For Kakad Aarti, leave Mumbai the previous afternoon or evening.",
    highlights: [
      { title: "Pilgrimage Timing", body: "Custom departure for early morning Kakad Aarti." },
      { title: "Doorstep Pickup", body: "Direct pickup from Mumbai homes or Airport T1/T2." },
      { title: "Spacious Family SUVs", body: "Ertiga & Innova Crysta with ample luggage space." },
      { title: "Shani Shingnapur Combo", body: "Convenient combo packages covering both shrines." },
    ],
    stats: [
      { value: "240 km", label: "Distance" },
      { value: "5 to 6 hrs", label: "Duration" },
      { value: "₹3,120", label: "Starting Fare" },
    ],
    fareTable: [
      { vehicle: "Swift Dzire / Aura", seats: "4+1", ratePerKm: 13, oneWayBaseFare: 3120, bestFor: "2 to 3 people" },
      { vehicle: "Toyota Etios", seats: "4+1", ratePerKm: 14, oneWayBaseFare: 3360, bestFor: "2 to 3 people" },
      { vehicle: "Ertiga", seats: "6+1", ratePerKm: 16, oneWayBaseFare: 3840, bestFor: "Families of 4 to 5" },
      { vehicle: "Innova", seats: "6+1", ratePerKm: 18, oneWayBaseFare: 4320, bestFor: "Families with luggage" },
      { vehicle: "Kia Carens", seats: "6+1 / 7+1", ratePerKm: 18, oneWayBaseFare: 4320, bestFor: "Families, more legroom" },
      { vehicle: "Innova Crysta", seats: "6+1", ratePerKm: 20, oneWayBaseFare: 4800, bestFor: "Premium comfort, elders" },
      { vehicle: "Tempo Traveller AC", seats: "12", ratePerKm: 28, oneWayBaseFare: 6720, bestFor: "Groups" },
    ],
    fareTableNote:
      "Base fare = 240 km x rate per km. Toll, parking and driver allowance (₹300 per day) are extra at actuals. Round trips are charged on total kilometres travelled, minimum 250 km per day. For an all-inclusive quote, message us on WhatsApp.",
    included: [
      "AC vehicle, fuel, and experienced highway chauffeur",
      "Door-to-door pickup across Mumbai",
      "Flexible short breaks for dining and tea",
      "Drop directly at Shirdi temple, hotel, or ashram",
    ],
    extraAtActuals: [
      "Highway toll charges via FASTag",
      "Parking fees at temple parking complex",
      "Driver allowance (₹300 per day)",
      "Shani Shingnapur add-on kms if requested",
    ],
    whyBook: {
      title: "Planning Your Shirdi Trip by Cab",
      content:
        "Most families do Shirdi as a one-night trip. A common plan: leave Mumbai in the afternoon, reach Shirdi by evening, rest, attend the early-morning Kakad Aarti and darshan, and return the same day. Aarti and darshan timings change by season and festival, so check the Shri Saibaba Sansthan website before you finalise. A private cab is easier for elders and children because the car waits for you, you control the start time, and you avoid changing buses or trains.",
      highlightLinkText: "Want to visit Nashik on the way? See Mumbai to Nashik cab.",
      highlightLinkHref: "/mumbai-to-nashik-cab",
    },
    pickupAreas:
      "Pickup anywhere in Mumbai, Thane and Navi Mumbai, including Mumbai Airport.",
    dropAreas:
      "Drop at your hotel, dharamshala or the temple area in Shirdi. Shirdi Airport and Sainagar railway station drops are also available.",
    bestTimeToTravel:
      "Early mornings (around 4-5 am) avoid city congestion. If attending Kakad Aarti (5:15 am), we advise leaving Mumbai the previous afternoon so you are well rested before entering darshan queues.",
    comparisonTable: [
      { option: "Private Cab", doorToDoor: "Yes", luggage: "Easy", timingControl: "You decide", bestFor: "Families with elders, children, luggage" },
      { option: "Train", doorToDoor: "No (Sainagar Shirdi)", luggage: "Heavy to carry", timingControl: "Fixed timetable", bestFor: "Budget solo travellers" },
      { option: "Bus", doorToDoor: "No", luggage: "Limited", timingControl: "Fixed timetable", bestFor: "Overnight budget transit" },
    ],
    contextualLinks: [
      { title: "Mumbai to Nashik cab", href: "/mumbai-to-nashik-cab" },
      { title: "Mumbai to Pune cab", href: "/mumbai-to-pune-cab" },
      { title: "Fleet page", href: "/fleet" },
    ],
    faqs: [
      {
        question: "How many hours from Mumbai to Shirdi by cab?",
        answer: "About 5 to 6 hours for 240 km, depending on traffic and route.",
      },
      {
        question: "What is the Mumbai to Shirdi cab fare?",
        answer:
          "A one-way base fare starts at ₹3,120 for a Swift Dzire, ₹3,840 for an Ertiga and ₹4,320 for an Innova. Toll, parking and driver allowance are extra.",
      },
      {
        question: "Which cab is best for a family going to Shirdi?",
        answer:
          "An Ertiga or Innova for families of 4 to 6. For elders, an Innova or Innova Crysta has easier seating and more luggage space.",
      },
      {
        question: "Can we go for Kakad Aarti?",
        answer:
          "Yes. We recommend travelling the previous day. Our driver can start at the time you choose. Check current aarti timings with Shri Saibaba Sansthan.",
      },
      {
        question: "Can I book a round trip with a stay in Shirdi?",
        answer:
          "Yes. Driver allowance of ₹300 per day applies for each day of the trip, and round trips are charged on total kilometres, minimum 250 km per day.",
      },
      {
        question: "Can we include Shani Shingnapur?",
        answer:
          "Yes. Shani Shingnapur is about 70 km from Shirdi. We can easily arrange a combo pilgrimage quote on WhatsApp.",
      },
    ],
    guideTitle: "Mumbai to Shirdi Route and Stop Details",
    guideIntro:
      "Mumbai, Thane, Kasara, Igatpuri, Nashik, Sinnar, Shirdi. Our driver chooses the fastest route on the day. Toll varies by route.",
    routeMap: {
      primary: "Mumbai → Thane → Kasara → Igatpuri → Nashik → Sinnar → Shirdi",
      via: "NH-160 and Samruddhi Mahamarg Corridor",
      toll: "₹400-500",
      mapsUrl: "https://maps.google.com/?q=Mumbai+to+Shirdi",
    },
    stops: [
      {
        title: "Kasara Ghat Viewpoint",
        body: "Quick roadside viewpoint for fresh air before climbing into Ahmednagar district.",
      },
      {
        title: "Igatpuri Pagoda",
        body: "Scenic golden landmark and peace centre right off the expressway.",
      },
      {
        title: "Sinnar Food Court",
        body: "Modern highway food plaza offering clean restrooms, South Indian breakfasts, and tea.",
      },
      {
        title: "Shani Shingnapur (Optional Detour)",
        body: "Famous temple of Lord Shani with roofless shrine, located about 70 km from Shirdi.",
      },
      {
        title: "Sai Teerth Theme Park",
        body: "Devotional spiritual theme park in Shirdi featuring animatronics and laser shows for kids.",
      },
    ],
  },
  {
    slug: "mumbai-to-mahabaleshwar-cab",
    from: "Mumbai",
    to: "Mahabaleshwar",
    title: "Mumbai to Mahabaleshwar Cab",
    metaTitle: "Mumbai to Mahabaleshwar Cab from ₹3,419 | One Way & Round Trip",
    metaDescription:
      "Book a Mumbai to Mahabaleshwar cab: one-way from ₹3,419 for 263 km. Ghat-experienced drivers, Panchgani and Pratapgad add-ons. Call +91-9970294122.",
    distance: "263 km",
    duration: "6 hours",
    badge: "Scenic Hill Station",
    headline: "Mumbai to Mahabaleshwar Cab: One Way & Round Trip Taxi",
    intro:
      "A Mumbai to Mahabaleshwar cab covers about 263 km in roughly 6 hours. One-way base fares start at ₹3,419 for a Swift Dzire, ₹4,734 for an Innova and ₹5,260 for an Innova Crysta. Toll, parking and driver allowance are extra at actuals. The final climb is a ghat road, so we assign experienced hill drivers.",
    quickAnswer:
      "A Mumbai to Mahabaleshwar cab covers about 263 km in roughly 6 hours. One-way base fares start at ₹3,419 for a Swift Dzire, ₹4,734 for an Innova and ₹5,260 for an Innova Crysta. Toll, parking and driver allowance are extra at actuals. The final climb is a ghat road, so we assign experienced hill drivers.",
    highlights: [
      { title: "Hill-Climb Specialists", body: "Chauffeurs experienced on Pasarni Ghat and steep hairpin turns." },
      { title: "Airport Direct Pickup", body: "Door-to-door transfer directly from Mumbai Airport T1/T2." },
      { title: "Local Sightseeing Ready", body: "Keep the cab for Arthur's Seat, Venna Lake & Mapro Garden." },
      { title: "Family Luggage Ready", body: "Innova Crysta and Ertiga for comfortable mountain rides." },
    ],
    stats: [
      { value: "263 km", label: "Distance" },
      { value: "6 hours", label: "Duration" },
      { value: "₹3,419", label: "Starting Fare" },
    ],
    fareTable: [
      { vehicle: "Swift Dzire / Aura", seats: "4+1", ratePerKm: 13, oneWayBaseFare: 3419, bestFor: "2 to 3 people" },
      { vehicle: "Toyota Etios", seats: "4+1", ratePerKm: 14, oneWayBaseFare: 3682, bestFor: "2 to 3 people" },
      { vehicle: "Ertiga", seats: "6+1", ratePerKm: 16, oneWayBaseFare: 4208, bestFor: "Families of 4 to 5" },
      { vehicle: "Innova", seats: "6+1", ratePerKm: 18, oneWayBaseFare: 4734, bestFor: "Families with luggage" },
      { vehicle: "Kia Carens", seats: "6+1 / 7+1", ratePerKm: 18, oneWayBaseFare: 4734, bestFor: "Families, more legroom" },
      { vehicle: "Innova Crysta", seats: "6+1", ratePerKm: 20, oneWayBaseFare: 5260, bestFor: "Premium comfort, elders" },
      { vehicle: "Tempo Traveller AC", seats: "12", ratePerKm: 28, oneWayBaseFare: 7364, bestFor: "Groups" },
    ],
    fareTableNote:
      "Base fare = 263 km x rate per km. Toll, parking and driver allowance (₹300 per day) are extra at actuals. Round trips are charged on total kilometres travelled, minimum 250 km per day. For an all-inclusive quote, message us on WhatsApp.",
    included: [
      "AC vehicle, fuel, and experienced hill-climb chauffeur",
      "Door-to-door pickup across Mumbai",
      "Flexible short halts at Food Malls and Mapro Garden",
      "Drop at any hotel or resort in Mahabaleshwar or Panchgani",
    ],
    extraAtActuals: [
      "Expressway & NH48 toll fees via FASTag",
      "Parking charges at viewpoints and Venna Lake",
      "Driver allowance (₹300 per day)",
      "Local sightseeing waiting time beyond agreed hours",
    ],
    whyBook: {
      title: "Planning a Mahabaleshwar Weekend by Cab",
      content:
        "Mahabaleshwar works best with a car at your disposal for the stay, because the viewpoints are spread across the plateau. Common local stops: Venna Lake, Arthur's Seat, Elephant's Head Point, Mapro Garden, Pratapgad Fort and the table land at Panchgani. If you plan a multi-day trip with local sightseeing, ask for a package with the driver on night halt. Driver allowance is ₹300 per day, and halt details are confirmed at booking.",
    },
    pickupAreas:
      "Pickup from anywhere in Mumbai, Thane and Navi Mumbai, including the airport.",
    dropAreas:
      "Drop to your resort or hotel in Mahabaleshwar, Panchgani or Wai.",
    bestTimeToTravel:
      "June to September is lush and misty, but ghat roads are slow with fog and some viewpoints get crowded or restricted in heavy rain. October to February is cool and clear, and strawberry season typically runs from November to February. March to May is warm but less crowded on weekdays.",
    comparisonTable: [
      { option: "Private Cab", doorToDoor: "Yes", luggage: "Easy", timingControl: "You decide", bestFor: "Families, multi-stop plateau sightseeing" },
      { option: "Bus", doorToDoor: "No", luggage: "Limited", timingControl: "Fixed timetable", bestFor: "Budget backpackers" },
      { option: "Self-Drive", doorToDoor: "Yes", luggage: "Easy", timingControl: "You decide", bestFor: "Drivers comfortable with Pasarni ghat curves" },
    ],
    contextualLinks: [
      { title: "Mumbai to Pune cab", href: "/mumbai-to-pune-cab" },
      { title: "Mumbai to Goa cab", href: "/mumbai-to-goa-cab" },
      { title: "Fleet page", href: "/fleet" },
    ],
    faqs: [
      {
        question: "How far is Mahabaleshwar from Mumbai?",
        answer: "About 263 km by road, usually 6 hours.",
      },
      {
        question: "What is the cab fare from Mumbai to Mahabaleshwar?",
        answer:
          "A one-way base fare starts at ₹3,419 for a Swift Dzire, ₹4,208 for an Ertiga and ₹4,734 for an Innova. Toll, parking and driver allowance are extra.",
      },
      {
        question: "Is the Mahabaleshwar ghat road safe in monsoon?",
        answer:
          "We use experienced hill drivers and may adjust timing in heavy fog or rain. Ask us about current road conditions before you leave.",
      },
      {
        question: "Can I keep the cab for local sightseeing in Mahabaleshwar?",
        answer:
          "Yes, on a round-trip or multi-day package. Share your dates and we quote total kilometres and halts.",
      },
      {
        question: "Can you drop me in Panchgani?",
        answer: "Yes. Mahabaleshwar and Panchgani drops are both available.",
      },
      {
        question: "Can we visit Pratapgad Fort on this trip?",
        answer:
          "Yes. Pratapgad Fort is 22 km from Mahabaleshwar market and can be easily added to your sightseeing itinerary.",
      },
    ],
    guideTitle: "Scenic Route & Pitstops on the Mahabaleshwar Drive",
    guideIntro:
      "Take the Mumbai-Pune Expressway, then NH48 towards Satara, followed by the Pasarni Ghat climb through Wai and Panchgani.",
    routeMap: {
      primary: "Mumbai → Expressway → NH48 → Wai → Panchgani → Mahabaleshwar",
      via: "Mumbai-Pune Expressway, NH48, and Pasarni Ghat",
      toll: "Expressway & NH tolls at actuals",
      mapsUrl: "https://maps.google.com/?q=Mumbai+to+Mahabaleshwar",
    },
    stops: [
      { title: "Mapro Garden, Panchgani", body: "Famous for strawberry and fresh cream, handcrafted chocolates, and wood-fired pizza." },
      { title: "Table Land, Panchgani", body: "Asia's second longest mountain plateau offering horse riding and paragliding." },
      { title: "Venna Lake", body: "Tranquil boat rides surrounded by lush eucalyptus trees in central Mahabaleshwar." },
      { title: "Arthur's Seat", body: "Panoramic cliff-side viewpoint overlooking Savitri River and deep valleys." },
      { title: "Elephant's Head Point", body: "Unique rock needle structure looking like an elephant trunk." },
      { title: "Pratapgad Fort", body: "Historic Maratha hilltop fortress featuring Shivaji Maharaj's monument and museum." },
    ],
  },
  {
    slug: "mumbai-to-goa-cab",
    from: "Mumbai",
    to: "Goa",
    title: "Mumbai to Goa Cab",
    metaTitle: "Mumbai to Goa Cab from ₹7,735 | One Way & Round Trip Taxi",
    metaDescription:
      "Book a Mumbai to Goa cab: one-way from ₹7,735 for 595 km via NH66. Comfortable Innova and Ertiga for long trips. Call +91-9970294122.",
    distance: "595 km",
    duration: "10 to 12 hours",
    badge: "Coastal Holiday Route",
    headline: "Mumbai to Goa Cab: One Way & Round Trip Taxi",
    intro:
      "A Mumbai to Goa cab covers about 595 km via NH66 in roughly 10 to 12 hours. One-way base fares start at ₹7,735 for a Swift Dzire, ₹10,710 for an Innova and ₹11,900 for an Innova Crysta. Toll, parking, driver allowance and Goa entry or interstate taxes are extra at actuals. For comfort and safety we recommend leaving early morning.",
    quickAnswer:
      "A Mumbai to Goa cab covers about 595 km via NH66 in roughly 10 to 12 hours. One-way base fares start at ₹7,735 for a Swift Dzire, ₹10,710 for an Innova and ₹11,900 for an Innova Crysta. Toll, parking, driver allowance and Goa entry or interstate taxes are extra at actuals. For comfort and safety we recommend leaving early morning.",
    highlights: [
      { title: "Door-to-Door Pickup", body: "Direct doorstep pickup from anywhere in Mumbai, Thane, or Navi Mumbai." },
      { title: "Long-Haul Specialists", body: "Verified drivers trained for 10+ hour highway routes with regular rest breaks." },
      { title: "North & South Goa Drops", body: "Drops to Calangute, Baga, Panaji, Margao, or Dabolim/Mopa airports." },
      { title: "Spacious Holiday Fleet", body: "Comfortable Ertiga, Carens, and Innova Crysta for luggage-heavy journeys." },
    ],
    stats: [
      { value: "595 km", label: "Distance" },
      { value: "10 to 12 hrs", label: "Duration" },
      { value: "₹7,735", label: "Starting Fare" },
    ],
    fareTable: [
      { vehicle: "Swift Dzire / Aura", seats: "4+1", ratePerKm: 13, oneWayBaseFare: 7735, bestFor: "2 to 3 people" },
      { vehicle: "Toyota Etios", seats: "4+1", ratePerKm: 14, oneWayBaseFare: 8330, bestFor: "2 to 3 people" },
      { vehicle: "Ertiga", seats: "6+1", ratePerKm: 16, oneWayBaseFare: 9520, bestFor: "Families of 4 to 5" },
      { vehicle: "Innova", seats: "6+1", ratePerKm: 18, oneWayBaseFare: 10710, bestFor: "Families with luggage" },
      { vehicle: "Kia Carens", seats: "6+1 / 7+1", ratePerKm: 18, oneWayBaseFare: 10710, bestFor: "Families, more legroom" },
      { vehicle: "Innova Crysta", seats: "6+1", ratePerKm: 20, oneWayBaseFare: 11900, bestFor: "Premium comfort, elders" },
      { vehicle: "Tempo Traveller AC", seats: "12", ratePerKm: 28, oneWayBaseFare: 16660, bestFor: "Groups" },
    ],
    fareTableNote:
      "Base fare = 595 km x rate per km. Toll, parking, driver allowance (₹300 per day) and interstate permit/entry tax for Goa are extra at actuals.",
    included: [
      "AC vehicle, fuel, and experienced long-distance chauffeur",
      "Doorstep pickup across Mumbai suburbs",
      "Rest halts every 3 to 4 hours for driver alertness and dining",
      "Drop at any hotel, resort, or airport in North or South Goa",
    ],
    extraAtActuals: [
      "Highway tolls paid via FASTag at actuals",
      "Interstate vehicle entry tax / permit for Goa",
      "Driver allowance (₹300 per day)",
      "Parking charges at drop venue",
    ],
    whyBook: {
      title: "Planning a Long Trip to Goa by Cab",
      content:
        "Mumbai to Goa is a full-day drive. Most guests leave between 4 and 6 am and reach North Goa by evening. Options: a single day with a long drive, or an overnight halt in Chiplun, Ratnagiri or Kolhapur side. Our drivers take a rest break every 3 to 4 hours on long routes, and for 2-day plans we plan an overnight halt. Because NH66 has sections under repair at times, check travel time with us on the day you book.",
    },
    pickupAreas:
      "Pickup from any doorstep in Mumbai, Thane, Navi Mumbai, or Mumbai Airport T1/T2.",
    dropAreas:
      "North Goa: Calangute, Baga, Candolim, Anjuna, Vagator, Mapusa. Central: Panaji. South Goa: Margao, Colva, Benaulim, Palolem. Airports: Dabolim and Mopa. Railway: Madgaon, Thivim.",
    bestTimeToTravel:
      "We strongly recommend starting between 4:00 AM and 6:00 AM. This avoids the heavy morning commute in Panvel and allows you to cross the Konkan ghats during daylight hours, reaching Goa comfortably by sunset.",
    comparisonTable: [
      { option: "Private Cab", doorToDoor: "Yes", luggage: "Easy", timingControl: "You decide", bestFor: "Families, pet owners, excessive luggage, groups" },
      { option: "Flight", doorToDoor: "No (airport to airport)", luggage: "Strict weight limits", timingControl: "Fixed", bestFor: "Fastest single-passenger transit" },
      { option: "Train", doorToDoor: "No (station to station)", luggage: "Manageable", timingControl: "Fixed", bestFor: "Budget overnight travellers" },
      { option: "Bus", doorToDoor: "No", luggage: "Limited", timingControl: "Fixed", bestFor: "Sleeper bus budget travel" },
    ],
    contextualLinks: [
      { title: "Mumbai to Pune cab", href: "/mumbai-to-pune-cab" },
      { title: "Mumbai to Mahabaleshwar cab", href: "/mumbai-to-mahabaleshwar-cab" },
      { title: "Fleet page", href: "/fleet" },
      { title: "Tour packages", href: "/packages" },
    ],
    faqs: [
      {
        question: "How many hours from Mumbai to Goa by road?",
        answer: "About 10 to 12 hours for 595 km, depending on traffic and road work on NH66.",
      },
      {
        question: "What is the cab fare from Mumbai to Goa?",
        answer:
          "A one-way base fare starts at ₹7,735 for a Swift Dzire, ₹9,520 for an Ertiga and ₹10,710 for an Innova. Toll, parking, driver allowance and taxes are extra.",
      },
      {
        question: "Can we take a cab from Mumbai to Goa overnight?",
        answer:
          "Yes. Night charges apply between 12:00 am and 6:00 am, and we recommend a rest halt on long routes.",
      },
      {
        question: "Which cab is best for Mumbai to Goa?",
        answer:
          "For comfort on 10+ hours, an Innova, Innova Crysta, Kia Carens or Ertiga. For groups, a Tempo Traveller.",
      },
      {
        question: "Do you drop at Goa airport?",
        answer: "Yes, both Dabolim (GOI) and Manohar Mopa (GOX) airports.",
      },
      {
        question: "Is interstate tax included?",
        answer:
          "Commercial vehicle entry tax for Goa is billed at actual state border checkposts.",
      },
    ],
    guideTitle: "Scenic Highway Route & Coastal Stops (NH66)",
    guideIntro:
      "Mumbai, Panvel, Mangaon, Mahad, Chiplun, Ratnagiri, Kudal, Goa. Useful stops: Chiplun (lunch), Ganpatipule (short detour), Ratnagiri (Alphonso mango season, April to June), Sindhudurg side beaches.",
    routeMap: {
      primary: "Mumbai → Panvel → Mangaon → Mahad → Chiplun → Ratnagiri → Kudal → Goa",
      via: "NH-66 Coastal Highway & Konkan Expressway sections",
      toll: "State border & NH tolls at actuals",
      mapsUrl: "https://maps.google.com/?q=Mumbai+to+Goa",
    },
    stops: [
      { title: "Chiplun Riverside Bridge", body: "Scenic stop overlooking the Vashishti River for traditional Konkani lunch." },
      { title: "Ganpatipule Beach Temple (Detour)", body: "Famous swayambhu Ganpati shrine on pristine virgin Konkan shoreline." },
      { title: "Ratnagiri Mango Belt", body: "Heart of world-renowned Alphonso mango orchards and historic Thibaw Palace." },
      { title: "Kudal & Malvan Junction", body: "Ideal evening tea stop before entering the Goa state border." },
      { title: "North Goa Beaches", body: "Direct drop to Calangute, Baga, Candolim, Anjuna, or Vagator." },
    ],
  },
  {
    slug: "pune-to-mumbai-cab",
    from: "Pune",
    to: "Mumbai",
    title: "Pune to Mumbai Cab",
    metaTitle: "Pune to Mumbai Cab | Reliable One Way & Round Trip Taxi @ ₹13/km",
    metaDescription:
      "Book a Pune to Mumbai cab with Book A Cab. Comfortable one-way drops, airport transfers to Mumbai T1/T2, and round trips via the Expressway from ₹13/km.",
    distance: "148 km",
    duration: "3 to 3.5 hours",
    badge: "Business Express Route",
    headline: "Pune to Mumbai Cab: One Way & Round Trip Taxi",
    intro:
      "Need a dependable ride? Book A Cab offers premium Pune to Mumbai taxi service via the Mumbai-Pune Expressway. Perfect for business meetings, airport drops to Mumbai T1/T2, or weekend trips in clean, air-conditioned hatchbacks, sedans, and SUVs from ₹1,924.",
    quickAnswer:
      "A Pune to Mumbai cab covers 148 km via the Mumbai-Pune Expressway in about 3 to 3.5 hours. One-way base fares start at ₹1,924 for a Swift Dzire (₹13/km), ₹2,368 for Ertiga, and ₹2,960 for Innova Crysta. Toll and driver allowance are extra at actuals.",
    highlights: [
      { title: "Transparent Pricing", body: "Clear per-km rates with no surprise add-ons." },
      { title: "Mumbai Airport Drops", body: "Direct drop to Mumbai T1 or T2 airport departures." },
      { title: "Expressway Experts", body: "Chauffeurs who know the Expressway and ghat routes." },
      { title: "Clean AC Vehicles", body: "Serviced, sanitized cabs for safe city-to-city travel." },
    ],
    stats: [
      { value: "148 km", label: "Distance" },
      { value: "3 to 3.5 hrs", label: "Duration" },
      { value: "₹1,924", label: "Starting Fare" },
    ],
    fareTable: [
      { vehicle: "Swift Dzire / Aura", seats: "4+1", ratePerKm: 13, oneWayBaseFare: 1924, bestFor: "2 to 3 people" },
      { vehicle: "Toyota Etios", seats: "4+1", ratePerKm: 14, oneWayBaseFare: 2072, bestFor: "2 to 3 people" },
      { vehicle: "Ertiga", seats: "6+1", ratePerKm: 16, oneWayBaseFare: 2368, bestFor: "Families of 4 to 5" },
      { vehicle: "Innova", seats: "6+1", ratePerKm: 18, oneWayBaseFare: 2664, bestFor: "Families with luggage" },
      { vehicle: "Innova Crysta", seats: "6+1", ratePerKm: 20, oneWayBaseFare: 2960, bestFor: "Premium comfort, elders" },
    ],
    fareTableNote:
      "Base fare = 148 km x rate per km. Expressway toll (approx ₹320 paid by FASTag) and driver allowance are extra at actuals.",
    included: [
      "AC vehicle and fuel for 148 km",
      "Expressway trained chauffeur",
      "Doorstep pickup in Pune",
      "Direct drop to any Mumbai suburb or airport",
    ],
    extraAtActuals: [
      "Expressway toll paid via FASTag at actuals",
      "Airport parking fee if applicable",
      "Driver allowance (₹300 per day)",
    ],
    pickupAreas: "Anywhere in Pune: Hinjewadi, Wakad, Baner, Kothrud, Viman Nagar, Kharadi, Magarpatta, Station, Airport.",
    dropAreas: "Anywhere in Mumbai: T1/T2 Airport, Dadar, Bandra, Andheri, Borivali, Thane, Navi Mumbai, South Mumbai.",
    bestTimeToTravel:
      "Early mornings (before 7:00 AM) or after 8:00 PM are fastest for the Expressway. Leave with at least 4.5 hours buffer if you have a departing flight from Mumbai Airport.",
    faqs: [
      {
        question: "How much is the cab fare from Pune to Mumbai?",
        answer:
          "Pune to Mumbai cab fares start from ₹13/km. A Swift Dzire one-way base fare is ₹1,924, an Ertiga is ₹2,368, and Innova Crysta is ₹2,960. Tolls and driver allowance are extra.",
      },
      {
        question: "Do you provide Pune to Mumbai Airport cab service?",
        answer:
          "Yes. We specialize in drops to Mumbai Airport T1 and T2. Our drivers plan for highway traffic so you reach departures on time.",
      },
      {
        question: "Which route do you take?",
        answer:
          "We travel via the Mumbai-Pune Expressway (toll road) for a fast, comfortable, and smooth 3 to 3.5 hour journey.",
      },
      {
        question: "Can I book a one-way cab?",
        answer: "Yes, one-way bookings are available 24/7 without return charges.",
      },
    ],
    guideTitle: "Pune to Mumbai Road Trip Guide",
    guideIntro:
      "The drive between Pune and Mumbai via the Expressway is one of the most popular and scenic highway routes in Maharashtra, crossing the beautiful Western Ghats.",
    routeMap: {
      primary: "Pune → Lonavala → Khalapur → Panvel → Mumbai",
      via: "Mumbai-Pune Expressway",
      toll: "approx ₹320",
      mapsUrl: "https://maps.google.com/maps?q=Pune+to+Mumbai",
    },
    stops: [
      {
        title: "Lonavala Food Plazas",
        body: "The famous mid-way pitstops offering hot Chikki, South Indian snacks, Vada Pav, and clean restroom facilities.",
      },
      {
        title: "Khandala Ghat Scenic Points",
        body: "Beautiful valley views during the monsoon season. Our drivers are trained to navigate the steep descent safely.",
      },
    ],
  },
];

export function getRoute(slug: string) {
  return OUTSTATION_ROUTES.find((route) => route.slug === slug);
}

export function relatedRoutes(slug: string) {
  return OUTSTATION_ROUTES.filter((route) => route.slug !== slug);
}
