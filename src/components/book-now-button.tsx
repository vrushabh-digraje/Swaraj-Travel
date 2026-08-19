"use client";

import { Button } from "@/components/button";
import { useBooking } from "@/lib/booking-context";

export function BookNowButton({
  cab,
  className,
  children = "Book Now",
}: {
  cab?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { openBooking } = useBooking();
  return (
    <Button className={className} onClick={() => openBooking(cab)}>
      {children}
    </Button>
  );
}
