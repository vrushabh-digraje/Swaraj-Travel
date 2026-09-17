import { SITE } from "@/lib/site";

export type RateCardRow = {
  vehicle: string;
  seats: string;
  ratePerKm: string;
  rate8h80k: string;
  rate10h100k: string;
  rate12h120k: string;
};

export const RATE_CARD: RateCardRow[] = [
  { vehicle: "Swift Dzire", seats: "4+1", ratePerKm: "₹14", rate8h80k: "₹1,120", rate10h100k: "₹1,400", rate12h120k: "₹1,680" },
  { vehicle: "Hyundai Aura", seats: "4+1", ratePerKm: "₹14", rate8h80k: "₹1,120", rate10h100k: "₹1,400", rate12h120k: "₹1,680" },
  { vehicle: "Toyota Etios", seats: "4+1", ratePerKm: "₹15", rate8h80k: "₹1,200", rate10h100k: "₹1,500", rate12h120k: "₹1,800" },
  { vehicle: "Maruti Ertiga", seats: "6+1", ratePerKm: "₹16", rate8h80k: "₹1,280", rate10h100k: "₹1,600", rate12h120k: "₹1,920" },
  { vehicle: "Kia Carens", seats: "6+1", ratePerKm: "₹20", rate8h80k: "₹1,600", rate10h100k: "₹2,000", rate12h120k: "₹2,400" },
  { vehicle: "Toyota Innova", seats: "6+1", ratePerKm: "₹20", rate8h80k: "₹1,600", rate10h100k: "₹2,000", rate12h120k: "₹2,400" },
  { vehicle: "Innova Crysta", seats: "6+1", ratePerKm: "₹24", rate8h80k: "₹1,920", rate10h100k: "₹2,400", rate12h120k: "₹2,880" },
  { vehicle: "Mahindra Scorpio", seats: "8+1", ratePerKm: "₹24", rate8h80k: "₹1,920", rate10h100k: "₹2,400", rate12h120k: "₹2,880" },
  { vehicle: "Chevrolet Tavera", seats: "8+1", ratePerKm: "₹26", rate8h80k: "₹2,080", rate10h100k: "₹2,600", rate12h120k: "₹3,120" },
  { vehicle: "Tempo Traveller", seats: "13 or 17 seater", ratePerKm: "On call", rate8h80k: "On call", rate10h100k: "On call", rate12h120k: "On call" },
  { vehicle: "Mini Bus", seats: "20 seater", ratePerKm: "On call", rate8h80k: "On call", rate10h100k: "On call", rate12h120k: "On call" },
];

export const WORKED_COST_EXAMPLE = [
  { item: "Swift Dzire, 8 hrs and 80 km, at ₹14 per km", amount: "₹1,120", paidTo: SITE.name },
  { item: "Driver allowance", amount: "Charged extra, confirmed at booking", paidTo: SITE.name },
  { item: "Tolls on this route", amount: "Nil on a pure South Mumbai loop", paidTo: "Not applicable" },
  { item: "Parking at three or four stops", amount: "Roughly ₹200 to ₹400 in total", paidTo: "At actual, with receipts" },
  { item: "Entry tickets, museum for four people", amount: "Roughly ₹400 to ₹700", paidTo: "Paid at the venue" },
  { item: "Other stops (Gateway, Marine Drive, Chowpatty, Mahalaxmi, Haji Ali)", amount: "Free entry", paidTo: "Nil" },
];

export const PACKAGE_COMPARISON = [
  {
    package: "Half day",
    hoursKm: "4 hrs, 40 km",
    realisticStops: "2 to 3 stops",
    bestSuited: "Evening coastal route, a single temple visit, or a short South Mumbai loop",
    dzireFare: "₹560",
  },
  {
    package: "Standard full day",
    hoursKm: "8 hrs, 80 km",
    realisticStops: "5 to 6 stops",
    bestSuited: "One side of the city, either South or North, not both",
    dzireFare: "₹1,120",
  },
  {
    package: "Extended day",
    hoursKm: "10 hrs, 100 km",
    realisticStops: "7 to 8 stops",
    bestSuited: "Mixed highlights touching both halves of the city",
    dzireFare: "₹1,400",
  },
  {
    package: "Long day",
    hoursKm: "12 hrs, 120 km",
    realisticStops: "9 to 10 stops, or 6 stops plus one long visit",
    bestSuited: "Elephanta Caves, Sanjay Gandhi National Park, or a relaxed pace with elders and children",
    dzireFare: "₹1,680",
  },
];

export type LandmarkItem = {
  landmark: string;
  area: string;
  hours: string;
  closed: string;
  entry: string;
  timeToAllow: string;
  cabNote: string;
};

export const SOUTH_MUMBAI_CIRCUIT: LandmarkItem[] = [
  {
    landmark: "Gateway of India",
    area: "Colaba",
    hours: "Open access, best 7 am to 6 pm",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "30 to 45 min",
    cabNote: "Driver waits in the Colaba parking area, parking charged at actual",
  },
  {
    landmark: "Taj Mahal Palace exterior",
    area: "Colaba",
    hours: "Photo stop",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "10 min",
    cabNote: "Adjacent to Gateway, same halt",
  },
  {
    landmark: "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
    area: "Fort",
    hours: "Exterior viewing any time",
    closed: "Open daily",
    entry: "Free from outside",
    timeToAllow: "20 to 30 min",
    cabNote: "Short halt, heavy traffic zone",
  },
  {
    landmark: "CSMVS Museum (Prince of Wales)",
    area: "Fort",
    hours: "Around 10:15 am to 6 pm",
    closed: "Check public holidays",
    entry: "Around ₹150 for Indian adults, extra for camera",
    timeToAllow: "60 to 90 min",
    cabNote: "Paid parking on site",
  },
  {
    landmark: "Jehangir Art Gallery",
    area: "Kala Ghoda",
    hours: "Around 11 am to 7 pm",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "30 min",
    cabNote: "Street parking, walk from museum",
  },
  {
    landmark: "Flora Fountain, Hutatma Chowk",
    area: "Fort",
    hours: "Open area",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "10 to 15 min",
    cabNote: "Drive past or short photo halt",
  },
  {
    landmark: "Marine Drive",
    area: "Churchgate to Nariman Point",
    hours: "Open all hours",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "20 to 30 min",
    cabNote: "Halting is restricted on the main stretch, driver drops and circles",
  },
  {
    landmark: "Nariman Point",
    area: "Nariman Point",
    hours: "Open area",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "15 min",
    cabNote: "Drive past",
  },
  {
    landmark: "Girgaon Chowpatty",
    area: "Girgaon",
    hours: "Open all hours, liveliest after 5 pm",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "30 to 40 min",
    cabNote: "Roadside parking available",
  },
  {
    landmark: "Hanging Gardens and Kamala Nehru Park",
    area: "Malabar Hill",
    hours: "Around 5 am to 9 pm",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "30 min",
    cabNote: "Parking on the hill road",
  },
  {
    landmark: "Mahalaxmi Temple",
    area: "Mahalaxmi",
    hours: "Around 6 am to 10 pm",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "30 to 45 min",
    cabNote: "Narrow approach lane, drop at the lane entrance",
  },
  {
    landmark: "Haji Ali Dargah",
    area: "Worli",
    hours: "Around 5:30 am to 10 pm",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "45 to 60 min",
    cabNote: "Causeway access depends on the tide",
  },
  {
    landmark: "Crawford Market",
    area: "Fort",
    hours: "Around 11 am to 8 pm",
    closed: "Sunday",
    entry: "Free",
    timeToAllow: "30 to 45 min",
    cabNote: "Congested, short halt only",
  },
  {
    landmark: "Dhobi Ghat",
    area: "Mahalaxmi",
    hours: "Daylight hours",
    closed: "Open daily",
    entry: "Free from the bridge",
    timeToAllow: "15 min",
    cabNote: "Viewpoint halt from Mahalaxmi bridge",
  },
  {
    landmark: "Mani Bhavan",
    area: "Gamdevi",
    hours: "Around 9:30 am to 6 pm",
    closed: "Open daily",
    entry: "Small entry fee",
    timeToAllow: "30 to 45 min",
    cabNote: "Quiet lane, easy halt",
  },
];

export const NORTH_MUMBAI_CIRCUIT: LandmarkItem[] = [
  {
    landmark: "Siddhivinayak Temple",
    area: "Prabhadevi",
    hours: "Around 5:30 am to 9:30 pm",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "45 to 90 min",
    cabNote: "Drop near the temple road, parking is tight",
  },
  {
    landmark: "Worli Sea Face",
    area: "Worli",
    hours: "Open all hours",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "15 to 20 min",
    cabNote: "Easy roadside halt",
  },
  {
    landmark: "Bandra Worli Sea Link",
    area: "Worli to Bandra",
    hours: "Drive through only",
    closed: "Open daily",
    entry: "Toll applies",
    timeToAllow: "10 min",
    cabNote: "No stopping permitted on the bridge",
  },
  {
    landmark: "Bandra Bandstand",
    area: "Bandra West",
    hours: "Open all hours",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "20 to 30 min",
    cabNote: "Parking near the promenade",
  },
  {
    landmark: "Mount Mary Church",
    area: "Bandra West",
    hours: "Around 6 am to 7 pm",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "20 to 30 min",
    cabNote: "Uphill road, drop at the gate",
  },
  {
    landmark: "Linking Road",
    area: "Bandra West",
    hours: "Around 11 am to 9 pm",
    closed: "Most shops shut Sunday",
    entry: "Free",
    timeToAllow: "45 to 60 min",
    cabNote: "Shopping halt, paid parking",
  },
  {
    landmark: "Juhu Beach",
    area: "Juhu",
    hours: "Open all hours, liveliest evenings",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "45 to 60 min",
    cabNote: "Paid beach parking",
  },
  {
    landmark: "ISKCON Temple",
    area: "Juhu",
    hours: "4:30 am to 1 pm & 4 pm to 9 pm",
    closed: "Open daily",
    entry: "Free",
    timeToAllow: "30 to 45 min",
    cabNote: "On site parking",
  },
  {
    landmark: "Nehru Planetarium & Science Centre",
    area: "Worli",
    hours: "Around 10 am to 5 pm",
    closed: "Monday",
    entry: "Ticketed, modest",
    timeToAllow: "60 to 90 min",
    cabNote: "On site parking",
  },
  {
    landmark: "Taraporewala Aquarium",
    area: "Marine Lines",
    hours: "Around 10 am to 8 pm",
    closed: "Monday",
    entry: "Ticketed, modest",
    timeToAllow: "45 min",
    cabNote: "Roadside parking",
  },
  {
    landmark: "Sanjay Gandhi National Park",
    area: "Borivali",
    hours: "Around 7:30 am to 6 pm",
    closed: "Monday",
    entry: "Ticketed, separate vehicle charge",
    timeToAllow: "Half day",
    cabNote: "Vehicle entry charged separately",
  },
  {
    landmark: "Kanheri Caves",
    area: "Inside Sanjay Gandhi National Park, Borivali",
    hours: "Around 7:30 am to 5 pm",
    closed: "Monday",
    entry: "Separate ticket from the park",
    timeToAllow: "2 to 3 hrs",
    cabNote: "Inside the park, separate access",
  },
  {
    landmark: "Film City",
    area: "Goregaon East",
    hours: "Prior permission or booked studio tour only",
    closed: "Varies",
    entry: "Tour charged separately",
    timeToAllow: "Half day",
    cabNote: "Cannot be visited casually",
  },
];

export const VEHICLE_LUGGAGE_DATA = [
  {
    vehicle: "Swift Dzire, Aura, Etios",
    adults: "3",
    children: "2 adults + 2 kids",
    largeBags: "2",
    bootReality: "Fine for daypacks, tight with suitcases",
    bestFor: "Couples, small families, city only days",
  },
  {
    vehicle: "Ertiga",
    adults: "5",
    children: "4 adults + 2 kids",
    largeBags: "4",
    bootReality: "Usable with the third row up",
    bestFor: "Families of five or six, moderate luggage",
  },
  {
    vehicle: "Kia Carens",
    adults: "5 to 6",
    children: "4 adults + 2 kids",
    largeBags: "4",
    bootReality: "Good third row access",
    bestFor: "Families who want more space than an Ertiga",
  },
  {
    vehicle: "Innova and Innova Crysta",
    adults: "6",
    children: "5 adults + 2 kids",
    largeBags: "5",
    bootReality: "Genuinely spacious",
    bestFor: "Long days, elders, airport arrivals with bags",
  },
  {
    vehicle: "Scorpio, Tavera",
    adults: "6 to 8",
    children: "6 adults + 2 kids",
    largeBags: "4",
    bootReality: "High seating, firm ride",
    bestFor: "Larger groups on a budget",
  },
  {
    vehicle: "Tempo Traveller",
    adults: "12 to 16",
    children: "Full group",
    largeBags: "10",
    bootReality: "Dedicated luggage space",
    bestFor: "Group tours, school and corporate trips",
  },
];

export const PICKUP_ZONES = [
  { zone: "Andheri, Vile Parle, Juhu", kmImpact: "Low", package: "8 or 10 hours", notes: "Closest to our base, most efficient start" },
  { zone: "Bandra, Khar, Santacruz", kmImpact: "Low", package: "8 hours, 80 km", notes: "Well placed for the North circuit" },
  { zone: "Goregaon, Malad, Kandivali", kmImpact: "Moderate", package: "10 hours, 100 km", notes: "8 hours is usually tight" },
  { zone: "Borivali, Dahisar", kmImpact: "Moderate to long", package: "10 or 12 hours", notes: "Convenient for the national park and Kanheri" },
  { zone: "Dadar, Prabhadevi, Worli", kmImpact: "Moderate", package: "8 hours, 80 km", notes: "Central, works for either circuit" },
  { zone: "Colaba, Fort, Churchgate", kmImpact: "Moderate", package: "10 hours, 100 km", notes: "Ideal for a South Mumbai day once you are there" },
  { zone: "Powai, Chembur, Ghatkopar", kmImpact: "Moderate", package: "10 hours, 100 km", notes: "Eastern corridor traffic is the variable" },
  { zone: "Thane", kmImpact: "Long", package: "12 hours, 120 km", notes: "8 hours is not realistic from here" },
  { zone: "Navi Mumbai: Vashi, Nerul, Kharghar", kmImpact: "Long", package: "12 hours, 120 km", notes: "Atal Setu shortens the drive, toll charged extra" },
  { zone: "Kalyan, Dombivli", kmImpact: "Long", package: "12 hours, 120 km or more", notes: "Expect extra km charges, we estimate them upfront" },
  { zone: "Airport Terminal 1 and Terminal 2", kmImpact: "Low", package: "8 or 10 hours", notes: "Airport parking charged at actual" },
  { zone: "CSMT, LTT, Bandra Terminus", kmImpact: "Moderate", package: "8 or 10 hours", notes: "Convenient for arriving rail passengers" },
];

export const TRANSPORT_COMPARISON = [
  {
    feature: "Cost pattern",
    privateCab: "Fixed fare per vehicle, split across your group",
    busTour: "Lowest cost per head",
    appCab: "Variable, surge pricing applies",
    selfDrive: "Rental plus fuel, tolls and parking",
  },
  {
    feature: "Itinerary control",
    privateCab: "Full, you choose stops and timing",
    busTour: "None, fixed route and timings",
    appCab: "Partial, drivers may refuse long waits",
    selfDrive: "Full",
  },
  {
    feature: "Time at each stop",
    privateCab: "As long as you want",
    busTour: "Strictly limited",
    appCab: "Waiting charges keep running",
    selfDrive: "As long as you want",
  },
  {
    feature: "Comfort",
    privateCab: "Private AC vehicle, your group only",
    busTour: "Shared, often crowded",
    appCab: "Varies by vehicle",
    selfDrive: "Depends on the car",
  },
  {
    feature: "Local knowledge",
    privateCab: "Driver knows routes, parking and timings",
    busTour: "Guide commentary usually included",
    appCab: "Rarely",
    selfDrive: "None",
  },
  {
    feature: "Parking hassle",
    privateCab: "None, the driver handles it",
    busTour: "None",
    appCab: "None",
    selfDrive: "Significant, South Mumbai parking is genuinely hard",
  },
  {
    feature: "Best for",
    privateCab: "Groups of three or more, families with elders or children, anyone who wants to control the day",
    busTour: "Solo travellers and couples on a tight budget",
    appCab: "One or two short hops, not a full day",
    selfDrive: "Confident drivers with prior Mumbai experience",
  },
];

export const BOOKING_STAGES = [
  { stage: "At booking", receive: "Written confirmation of the fare, package hours and km, vehicle category, and the extra hour and extra km rates" },
  { stage: "Before pickup", receive: "Driver name, mobile number and vehicle registration number" },
  { stage: "On the day", receive: "The vehicle at your address at the confirmed time" },
  { stage: "End of trip", receive: "An itemised bill showing package fare, any extra hours or km, driver allowance, tolls and parking" },
];

export const MUMBAI_DARSHAN_FAQS = [
  {
    question: "How much does a Mumbai Darshan cab cost?",
    answer: "A full day Mumbai Darshan cab starts at ₹1,120 for a Swift Dzire on an 8 hour and 80 km package, calculated at ₹14 per km. An Ertiga is ₹1,280, an Innova ₹1,600 and an Innova Crysta ₹1,920 for the same package. The fare covers the vehicle, not each person. Driver allowance, tolls, parking and entry tickets are extra.",
  },
  {
    question: "Are toll, parking and entry tickets included in the fare?",
    answer: "No. The package fare covers the vehicle, fuel and driver for the booked hours and kilometres. Tolls and parking are billed at actual with receipts, driver allowance is charged extra, and entry tickets you pay at each venue. The worked example on this page shows what these typically add up to across a full day.",
  },
  {
    question: "What will the whole day actually cost, all in?",
    answer: "For a family of four doing a six stop South Mumbai circuit in a Swift Dzire, expect roughly ₹1,900 to ₹2,400 in total. That is the ₹1,120 package fare plus driver allowance, around ₹200 to ₹400 of parking and roughly ₹400 to ₹700 of museum entry for four people. A South Mumbai loop attracts no toll. We give you a specific estimate for your route before you book.",
  },
  {
    question: "Can Mumbai Darshan be done in one day?",
    answer: "The main landmarks can be covered in a well planned 10 to 12 hour day. All of Mumbai cannot. Elephanta Caves, Sanjay Gandhi National Park and Film City each need most of a day on their own. An 8 hour package realistically covers one half of the city, South or North, at a comfortable pace.",
  },
  {
    question: "What happens if we exceed 8 hours or 80 km?",
    answer: "Extra time is ₹150 per hour and extra distance is charged at your vehicle's per km rate, for example ₹14 per km for a Swift Dzire. Both appear as separate lines on your bill. There is no penalty rate. If your plan looks likely to overrun, we recommend a longer package at the booking stage instead.",
  },
  {
    question: "Can I customise the itinerary and skip stops?",
    answer: "Yes. The car is yours for the booked hours. Add stops, drop stops or stay longer somewhere, the only constraint is the total hours and kilometres in your package. Tell the driver as the day goes along, nothing has to be locked in advance.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer: "You can cancel up to 2 hours before pickup. Cancellation charges may apply depending on how close to pickup you cancel and whether a vehicle has already been dispatched. Rescheduling to another date is usually easy if you let us know the day before.",
  },
  {
    question: "When do I get the driver's name and number?",
    answer: "Before your pickup, not on the morning of the trip. You receive the driver's name, mobile number and the vehicle registration number in advance, and our support line stays available 24 hours if you need to reach anyone.",
  },
  {
    question: "Which Mumbai attractions are closed on Mondays?",
    answer: "Elephanta Caves, Nehru Planetarium, Taraporewala Aquarium and Sanjay Gandhi National Park with Kanheri Caves are all typically closed on Mondays. Temples, beaches, Marine Drive and the Gateway of India stay open. If your trip falls on a Monday we build the route around those closures.",
  },
  {
    question: "Is Elephanta Caves possible on the same day as a city tour?",
    answer: "Only on a 12 hour package. The ferry from the Gateway of India, the crossing, the climb and the return take four to five hours together. The caves shut on Mondays and ferries are suspended during the monsoon. With one day in Mumbai, choose either Elephanta or the city circuit rather than both.",
  },
  {
    question: "Which vehicle suits five adults with airport luggage?",
    answer: "An Innova or Innova Crysta. Five adults technically fit in an Ertiga but not comfortably alongside four or five suitcases across a full day. When you arrive from the airport with bags, book one category above what your headcount alone suggests.",
  },
  {
    question: "Is Mumbai Darshan suitable for senior citizens?",
    answer: "Yes, with route planning. The cab waits at every stop so there is no walking between sites and no parking to manage. Haji Ali involves a long exposed causeway walk and Elephanta needs a boat plus a steep climb, so both are worth reconsidering for anyone with limited mobility. We suggest an Innova for easier boarding and a 10 or 12 hour package so the same stops fit at a slower pace.",
  },
  {
    question: "Is a private cab better than the Mumbai Darshan bus or an Ola or Uber rental?",
    answer: "For three or more people a private cab usually works out similar per head to a bus tour while letting you control the route and the time at each stop. A bus tour is better value for solo travellers and couples on a budget. App cab hourly rentals suit one or two short hops but get awkward across a full day of long waits.",
  },
  {
    question: "Can you pick up from Thane or Navi Mumbai, and does it cost more?",
    answer: "Yes, we cover Thane and Navi Mumbai. The per km rate is the same, but the distance to your first landmark eats more of your package, so a 12 hour and 120 km booking is usually right from these areas rather than an 8 hour one. From Navi Mumbai the Atal Setu is normally the faster route, with the toll charged separately.",
  },
  {
    question: "Is the monsoon a bad time for Mumbai Darshan?",
    answer: "Not bad, just different. Elephanta ferries are suspended and heavy rain can add a lot to travel times on low lying stretches. Coastal stops are spectacular in the rain, and indoor sites make a sensible backbone for a monsoon itinerary. We plan monsoon days with more indoor stops and more buffer time.",
  },
  {
    question: "Does the driver act as a guide?",
    answer: "Our drivers know Mumbai routes, parking, temple timings and traffic patterns well, and will happily point things out along the way. They are experienced drivers rather than licensed tour guides, so if you want detailed historical commentary a licensed guide is the better option and we can discuss arranging one.",
  },
  {
    question: "What is the best time to start the tour?",
    answer: "Between 7:30 and 8:30 am. An early start means thinner crowds at your first two stops and gets you ahead of the morning commute. Starting at 10 am typically costs you one full stop by the end of the day.",
  },
  {
    question: "Is there a half day Mumbai Darshan option?",
    answer: "Yes, a 4 hour and 40 km package from ₹560 in a Swift Dzire, covering two or three stops. Four hours is our minimum hourly booking. It works well for an evening coastal route, a single temple visit or a short South Mumbai loop.",
  },
  {
    question: "Can I do a temple only pilgrimage circuit?",
    answer: "Yes. A temple circuit follows aarti timings and queue patterns rather than traffic, and typically covers Siddhivinayak, Mahalaxmi, Haji Ali, Mumbadevi and ISKCON Juhu. Tell us which temples matter most and we plan the day backwards from those.",
  },
  {
    question: "Do you provide cabs for school, corporate or group Mumbai Darshan?",
    answer: "Yes. Tempo Travellers in 13 and 17 seater configurations, a 20 seater mini bus and larger buses from 32 to 52 seats are available, priced on call. Corporate bookings can run on monthly billing with a GST invoice and a dedicated point of contact.",
  },
  {
    question: "How do I book a Mumbai Darshan cab today?",
    answer: "Tell us your date, your pickup address and roughly what you would like to see via call, WhatsApp, or our website booking modal. We come back with a suggested itinerary, the right package and a fare, before you commit to anything.",
  },
];
