import { Card } from "@/components/card";
import { StarIcon } from "@/components/icons";
import { REVIEWS } from "@/lib/reviews";

export function ReviewsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-navy md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Real experiences from real people
          </p>
        </div>
        <div className="scrollbar-none -mx-4 flex gap-6 overflow-x-auto px-4 pb-6 snap-x snap-mandatory md:mx-0 md:grid md:grid-cols-2 md:px-0 md:pb-0 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={`${review.name}-${review.route}`}
              className="w-[85vw] shrink-0 snap-center sm:w-[60vw] md:w-auto md:shrink md:snap-align-none"
            >
              <Card className="h-full p-6 transition duration-300 hover:shadow-md">
                <div className="mb-3 flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <StarIcon key={index} className="h-4 w-4 text-accent" />
                  ))}
                </div>
                <blockquote className="text-gray-600">
                  “{review.quote}”
                </blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.route}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
