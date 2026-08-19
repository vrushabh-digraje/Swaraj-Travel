export type Review = {
  name: string;
  route: string;
  rating: number;
  quote: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Rahul Sharma",
    route: "Mumbai → Pune",
    rating: 5,
    quote:
      "Very smooth experience. Driver came on time, car was clean and driving was safe. Pune trip was comfortable even with traffic. Will book again.",
  },
  {
    name: "Sneha Patil",
    route: "Mumbai → Shirdi",
    rating: 5,
    quote:
      "Booked cab for Shirdi with family. Driver was polite and helped us throughout the journey. Peaceful and tension-free trip.",
  },
  {
    name: "Amit Kulkarni",
    route: "Mumbai → Nashik",
    rating: 4,
    quote:
      "Good service at reasonable price. Nashik trip was smooth and driver knew all routes well. Overall mast experience.",
  },
  {
    name: "Pooja Deshmukh",
    route: "Mumbai → Lonavala",
    rating: 5,
    quote:
      "Weekend trip to Lonavala was awesome. Car was neat and AC worked perfectly. On-time pickup and friendly driver.",
  },
  {
    name: "Suresh Jadhav",
    route: "Mumbai → Mahabaleshwar",
    rating: 5,
    quote:
      "Long trip but very comfortable. Driver was experienced on ghats and drove safely. Family enjoyed a lot.",
  },
  {
    name: "Michael Brown",
    route: "Mumbai → Pune",
    rating: 5,
    quote:
      "Excellent cab service. As a tourist, I felt very safe and comfortable. Driver was professional and helpful. Highly recommended.",
  },
];
