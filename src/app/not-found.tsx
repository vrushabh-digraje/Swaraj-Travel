import Link from "next/link";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-28 text-center">
      <p className="font-display text-6xl font-black text-primary">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-navy">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-gray-600">
        The page you are looking for may have moved. Try the homepage or book a
        cab from here.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Go Home</Button>
        <Button href="/contact" variant="secondary">
          Contact Us
        </Button>
      </div>
      <Link href="/outstation" className="mt-4 text-sm font-semibold text-primary">
        Browse outstation routes
      </Link>
    </section>
  );
}
