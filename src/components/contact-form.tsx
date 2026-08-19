"use client";

import { FormEvent } from "react";
import { Button } from "@/components/button";
import { SITE, whatsappHref } from "@/lib/site";

export function ContactForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      `Website message for ${SITE.name}`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Subject: ${data.get("subject")}`,
      `Message: ${data.get("message")}`,
    ].join("\n");
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-md md:p-8">
      <h2 className="font-display text-2xl font-bold text-navy">
        Send us a Message
      </h2>
      <p className="text-sm text-gray-500">
        Fill out the form and we will get back to you on WhatsApp.
      </p>
      <label className="block text-sm font-medium">
        Full Name *
        <input name="name" required className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5" />
      </label>
      <label className="block text-sm font-medium">
        Phone Number *
        <input name="phone" type="tel" required className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5" />
      </label>
      <label className="block text-sm font-medium">
        Email Address *
        <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5" />
      </label>
      <label className="block text-sm font-medium">
        Subject *
        <select name="subject" required defaultValue="Booking Inquiry" className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5">
          <option>Booking Inquiry</option>
          <option>Corporate Services</option>
          <option>Complaint</option>
          <option>Feedback</option>
          <option>Partnership</option>
          <option>Other</option>
        </select>
      </label>
      <label className="block text-sm font-medium">
        Message *
        <textarea name="message" required rows={5} className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5" />
      </label>
      <Button type="submit" className="w-full" size="lg">
        Send Message
      </Button>
    </form>
  );
}
