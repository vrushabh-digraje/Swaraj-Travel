export interface PuneRateItem {
  vehicle: string;
  category: "Hatchback" | "Sedan" | "SUV" | "Bus";
  seats: string;
  luggage: string;
  fuel: "Petrol" | "Diesel";
  ratePerKm: number | string;
  ratePerKmStr: string;
  sample150KmFare?: number;
  popular?: boolean;
  desc?: string;
}

export const PUNE_MUMBAI_RATES: PuneRateItem[] = [
  {
    vehicle: "Swift Dzire",
    category: "Hatchback",
    seats: "5",
    luggage: "2 bags",
    fuel: "Petrol",
    ratePerKm: 14,
    ratePerKmStr: "₹14",
    sample150KmFare: 2100,
    popular: true,
    desc: "Air conditioned Swift Dzire for Pune to Mumbai bookings, seats 5 with 2 bags.",
  },
  {
    vehicle: "Aura",
    category: "Hatchback",
    seats: "5",
    luggage: "2 bags",
    fuel: "Petrol",
    ratePerKm: 14,
    ratePerKmStr: "₹14",
    sample150KmFare: 2100,
  },
  {
    vehicle: "Toyota Etios",
    category: "Hatchback",
    seats: "5",
    luggage: "2 bags",
    fuel: "Diesel",
    ratePerKm: 15,
    ratePerKmStr: "₹15",
    sample150KmFare: 2250,
    desc: "Toyota Etios diesel sedan for Pune to Mumbai trips, seats 5 with 2 bags.",
  },
  {
    vehicle: "Ertiga",
    category: "SUV",
    seats: "7",
    luggage: "4 bags",
    fuel: "Petrol",
    ratePerKm: 16,
    ratePerKmStr: "₹16",
    sample150KmFare: 2400,
    popular: true,
    desc: "Maruti Ertiga for family trips on the Pune to Mumbai route, seats 7 with 4 bags.",
  },
  {
    vehicle: "Honda City",
    category: "Sedan",
    seats: "5",
    luggage: "2 bags",
    fuel: "Petrol",
    ratePerKm: 16,
    ratePerKmStr: "₹16",
    sample150KmFare: 2400,
  },
  {
    vehicle: "Toyota Corolla",
    category: "Sedan",
    seats: "5",
    luggage: "3 bags",
    fuel: "Petrol",
    ratePerKm: 17,
    ratePerKmStr: "₹17",
    sample150KmFare: 2550,
  },
  {
    vehicle: "Innova Crysta",
    category: "SUV",
    seats: "7",
    luggage: "5 bags",
    fuel: "Diesel",
    ratePerKm: 20,
    ratePerKmStr: "₹20",
    sample150KmFare: 3000,
    popular: true,
    desc: "Toyota Innova Crysta, the most requested vehicle on this route, seats 7 with 5 bags.",
  },
  {
    vehicle: "Kia Carens",
    category: "SUV",
    seats: "7",
    luggage: "4 bags",
    fuel: "Petrol",
    ratePerKm: 20,
    ratePerKmStr: "₹20",
    sample150KmFare: 3000,
  },
  {
    vehicle: "Innova",
    category: "SUV",
    seats: "7",
    luggage: "5 bags",
    fuel: "Diesel",
    ratePerKm: 24,
    ratePerKmStr: "₹24",
    sample150KmFare: 3600,
  },
  {
    vehicle: "Scorpio",
    category: "SUV",
    seats: "7",
    luggage: "4 bags",
    fuel: "Diesel",
    ratePerKm: 24,
    ratePerKmStr: "₹24",
    sample150KmFare: 3600,
  },
  {
    vehicle: "Tavera",
    category: "SUV",
    seats: "12",
    luggage: "8 bags",
    fuel: "Diesel",
    ratePerKm: 26,
    ratePerKmStr: "₹26",
    sample150KmFare: 3900,
  },
  {
    vehicle: "Audi",
    category: "Sedan",
    seats: "5",
    luggage: "3 bags",
    fuel: "Petrol",
    ratePerKm: 27,
    ratePerKmStr: "₹27",
    sample150KmFare: 4050,
  },
  {
    vehicle: "Tempo Traveller Non AC",
    category: "Bus",
    seats: "12",
    luggage: "10 bags",
    fuel: "Diesel",
    ratePerKm: 28,
    ratePerKmStr: "₹28",
    sample150KmFare: 4200,
  },
  {
    vehicle: "Tempo Traveller AC",
    category: "Bus",
    seats: "12",
    luggage: "10 bags",
    fuel: "Diesel",
    ratePerKm: 32,
    ratePerKmStr: "₹32",
    sample150KmFare: 4800,
    desc: "Air conditioned Tempo Traveller for groups, seats 12 with 10 bags.",
  },
  {
    vehicle: "Mini Bus",
    category: "Bus",
    seats: "32",
    luggage: "Large capacity",
    fuel: "Diesel",
    ratePerKm: 55,
    ratePerKmStr: "₹55",
    sample150KmFare: 8250,
    desc: "32 seater mini bus for weddings, corporate groups and pilgrimage travel.",
  },
  {
    vehicle: "Honda Amaze",
    category: "Hatchback",
    seats: "5",
    luggage: "2 bags",
    fuel: "Petrol",
    ratePerKm: "Call for rate",
    ratePerKmStr: "Call for rate",
  },
];

export interface FlightTimingGuide {
  flightDeparture: string;
  type: "Domestic" | "International";
  suggestedPunePickup: string;
}

export const FLIGHT_TIMING_GUIDE: FlightTimingGuide[] = [
  { flightDeparture: "6:00 am", type: "Domestic", suggestedPunePickup: "Around 11:00 pm the previous night" },
  { flightDeparture: "8:00 am", type: "Domestic", suggestedPunePickup: "Around 1:00 am" },
  { flightDeparture: "10:00 am", type: "Domestic", suggestedPunePickup: "Around 3:00 am" },
  { flightDeparture: "1:00 pm", type: "Domestic", suggestedPunePickup: "Around 6:00 am" },
  { flightDeparture: "6:00 am", type: "International", suggestedPunePickup: "Around 10:00 pm the previous night" },
  { flightDeparture: "10:00 am", type: "International", suggestedPunePickup: "Around 2:00 am" },
  { flightDeparture: "3:00 pm", type: "International", suggestedPunePickup: "Around 7:00 am" },
];

export interface PuneReviewItem {
  quote: string;
  author: string;
  route: string;
}

export const PUNE_REVIEWS: PuneReviewItem[] = [
  {
    quote: "Very smooth experience. Driver came on time, car was clean and driving was safe. Pune trip was comfortable even with traffic. Will book again.",
    author: "Rahul Sharma",
    route: "Mumbai to Pune",
  },
  {
    quote: "Excellent cab service. As a tourist, I felt very safe and comfortable. Driver was professional and helpful. Highly recommended.",
    author: "Michael Brown",
    route: "Mumbai to Pune",
  },
  {
    quote: "Long trip but very comfortable. Driver was experienced on ghats and drove safely. Family enjoyed a lot.",
    author: "Suresh Jadhav",
    route: "Mumbai to Mahabaleshwar",
  },
  {
    quote: "Weekend trip to Lonavala was awesome. Car was neat and AC worked perfectly. On time pickup and friendly driver.",
    author: "Pooja Deshmukh",
    route: "Mumbai to Lonavala",
  },
  {
    quote: "Booked cab for Shirdi with family. Driver was polite and helped us throughout the journey. Peaceful and tension free trip.",
    author: "Sneha Patil",
    route: "Mumbai to Shirdi",
  },
];

export interface PuneFaqItem {
  question: string;
  answer: string;
}

export const PUNE_FAQS: PuneFaqItem[] = [
  {
    question: "What is the fare for a Pune to Mumbai cab?",
    answer: "A Pune to Mumbai cab with Swaraj Travel is charged per kilometre, starting at ₹14 per km for a Swift Dzire, ₹16 per km for an Ertiga and ₹20 per km for an Innova Crysta. On a 150 km trip that is roughly ₹2,100 in a Dzire and ₹3,000 in an Innova Crysta, plus toll and driver food as per actual.",
  },
  {
    question: "Is toll included in the Pune to Mumbai cab fare?",
    answer: "No. Toll is charged extra as per actual, which keeps the base per km rate lower and transparent. The Mumbai Pune Expressway toll is typically around ₹300 to ₹400 for a car. We do not mark it up. If you prefer a single figure, ask us for an all inclusive quote when you book.",
  },
  {
    question: "Is the driver allowance charged separately on a one way drop?",
    answer: "Yes. Driver food allowance is charged extra on Pune to Mumbai trips, including one way drops, and it is listed separately so you can see exactly what you are paying for. The amount is confirmed on WhatsApp before your booking is accepted.",
  },
  {
    question: "Is there a night charge for a pickup between midnight and 6 am?",
    answer: "Yes. A night charge applies to rides between 11 PM and 6 AM, which covers most early morning airport transfers from Pune. The charge is confirmed at booking, so an overnight run to catch a 6 am flight is priced before you commit, not after.",
  },
  {
    question: "Is there a minimum kilometre charge on a one way Pune to Mumbai trip?",
    answer: "Billing on this route is per kilometre based on the actual door to door distance, which normally runs around 148 to 150 km, comfortably above any minimum. Your exact kilometre count is confirmed with your quote once you give us your pickup and drop addresses.",
  },
  {
    question: "How much free waiting time do I get at pickup?",
    answer: "Waiting charges are agreed with you at the time of booking rather than applied automatically from a fixed meter. Tell us if you expect a delay at pickup, for example a late checkout, and we will factor it into the quote so nothing appears unexpectedly on the final bill.",
  },
  {
    question: "Will the cab drop me at Terminal 1 or Terminal 2 of Mumbai airport?",
    answer: "Swaraj Travel drops at both Terminal 1 and Terminal 2 of Chhatrapati Shivaji Maharaj International Airport. Tell us your terminal at booking, since T1 at Santacruz and T2 at Andheri East have separate approach roads. If you are unsure, send your airline and flight number and we will note it.",
  },
  {
    question: "What time should I leave Pune to catch a 9 am flight from Mumbai?",
    answer: "For a 9 am domestic flight, leave Pune at around 2 am. That allows a 3 to 4 hour drive, an hour of traffic buffer, and 2 hours of airport reporting time. For a 9 am international flight, leave at around 1 am to allow 3 hours reporting. Add extra time during monsoon.",
  },
  {
    question: "Can the cab pick me up from two different addresses in Pune?",
    answer: "Yes. Give us both addresses at the enquiry stage so the driver plans the route in the right order rather than backtracking. Mention it when booking rather than on the day, because a second pickup point changes both the pickup time and the total kilometres billed.",
  },
  {
    question: "How many suitcases fit in a Dzire compared with an Innova Crysta?",
    answer: "A Swift Dzire takes 2 bags and an Innova Crysta takes 5 bags. An Ertiga takes 4 bags and a Tempo Traveller takes 10. For four adults heading to Mumbai airport with full size suitcases, an Ertiga or Innova Crysta is the realistic choice, because four people and four large bags will not fit a Dzire.",
  },
  {
    question: "What happens if my flight is delayed and I need a later airport pickup?",
    answer: "Message 8830273575 with your new landing time as soon as you know it. Our drivers track flights on airport bookings, so we usually see the delay first. We hold the booking and adjust the pickup where the driver's schedule allows. Any waiting charge is discussed with you, not applied automatically.",
  },
  {
    question: "Is a round trip cheaper than booking two one way cabs?",
    answer: "Usually yes, if you are returning within about 24 hours, because a one way fare has to account for the driver bringing the car back. For longer gaps between legs, two one way bookings can work out better. Send your travel dates to 8830273575 and we will price both options.",
  },
  {
    question: "Do you cover Navi Mumbai, Thane and BKC at the same rate?",
    answer: "Yes. The same per km rate applies across Mumbai city, Bandra Kurla Complex, the western suburbs, Navi Mumbai including Vashi, Nerul, Belapur and Panvel, and Thane. Since billing is per kilometre, a shorter run such as Panvel simply costs less than a longer one such as Borivali.",
  },
  {
    question: "Is the Mumbai Pune Expressway safe at night and during monsoon?",
    answer: "We run this route 24 hours a day, including overnight airport transfers. All vehicles are GPS tracked and drivers are background verified with regular health checks. During monsoon, visibility through the Lonavala and Khandala ghats drops and drivers hold a slower speed on the descent, so allow an extra hour in heavy rain.",
  },
  {
    question: "What vehicle should I book for a group of ten with luggage?",
    answer: "Book a Tempo Traveller. The AC version is ₹32 per km and the non AC version is ₹28 per km, both seating 12 with room for 10 bags. One Tempo Traveller is usually cheaper and easier to coordinate than two SUVs, and the whole group arrives together. Book a day or two ahead.",
  },
  {
    question: "Do I need to pay in advance or can I pay after the trip?",
    answer: "No large advance is required. Payment is due before or immediately after the ride, and we accept cash, credit and debit cards, UPI and digital wallets. Corporate clients can arrange monthly billing instead of paying per trip.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "You can cancel a booking up to 2 hours before your pickup time. A cancellation charge of 25% of the total fare applies as per our published terms. If your plans are uncertain, tell us early on WhatsApp, since rescheduling is usually easier to arrange than cancelling.",
  },
  {
    question: "How far in advance should I book a Pune to Mumbai cab?",
    answer: "Same day booking usually works for daytime trips. For an early morning airport transfer, book the previous day so the vehicle and driver are assigned in time. For a Tempo Traveller or Mini Bus, give us a day or two, since those are assigned to a specific group.",
  },
  {
    question: "Can I stop at Lonavala on the way from Pune to Mumbai?",
    answer: "Yes. Tell us at booking and we will build the stop into your trip. Our drivers know the Old Highway exit and the ghat route through Lonavala and Khandala. Additional stops affect the total kilometres and the driver's time, so we confirm any change to the fare before you travel.",
  },
  {
    question: "Can I book a Mumbai to Pune cab as well?",
    answer: "Yes. We run this route in both directions, including Mumbai Airport T1 and T2 pickups where the driver tracks your flight and waits at arrivals. The same fleet and rate card apply. See our Mumbai to Pune cab page or call 8830273575.",
  },
];
