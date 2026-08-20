"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/button";
import { SITE, whatsappHref } from "@/lib/site";

export function ContactForm() {
  const [contactMethod, setContactMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Live input validation states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("Booking Inquiry");

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });

  const validations = {
    name: name.trim().length >= 3,
    phone: /^[0-9+\s-]{10,15}$/.test(phone),
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    message: message.trim().length >= 5,
  };

  const getInputClassName = (field: keyof typeof validations) => {
    const defaultStyle = "w-full rounded-xl border pl-3 pr-10 py-2.5 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/20 ";
    if (!touched[field]) {
      return defaultStyle + "border-gray-200 focus:border-primary";
    }
    return validations[field]
      ? defaultStyle + "border-green-500 focus:border-green-500 focus:ring-green-500/10 bg-green-50/[0.02]"
      : defaultStyle + "border-red-400 focus:border-red-400 focus:ring-red-500/10 bg-red-50/[0.02]";
  };

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // Mark all touched
    setTouched({ name: true, phone: true, email: true, message: true });
    
    const isValid = Object.values(validations).every(Boolean);
    if (!isValid) return;

    setIsSubmitting(true);

    const messageText = [
      `Website message for ${SITE.name}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      `Message: ${message}`,
    ].join("\n");

    if (contactMethod === "whatsapp") {
      setTimeout(() => {
        window.open(whatsappHref(messageText), "_blank", "noopener,noreferrer");
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 500);
    } else {
      // Simulate Email Dispatch
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white p-6 shadow-md md:p-8 rounded-3xl text-center flex flex-col items-center justify-center min-h-[460px] border border-gray-100/50 animate-fade-in-scale">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500 mb-4 scale-110 animate-pulse">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-navy">Message Dispatched!</h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-xs">
          {contactMethod === "whatsapp" 
            ? "Your WhatsApp chat has been initiated. If the window did not open, please verify your pop-up blocker settings."
            : "Your email inquiry has been received. Our support team will get back to you within 2-4 hours."}
        </p>
        <Button 
          onClick={() => {
            setIsSuccess(false);
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setTouched({ name: false, phone: false, email: false, message: false });
          }} 
          className="mt-6"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-white p-6 shadow-md md:p-8 border border-gray-50">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-navy">Send us a Message</h2>
          <p className="text-xs text-gray-500 mt-1">Select your preferred communication channel below:</p>
        </div>
      </div>

      {/* Channel Choice Tabs */}
      <div className="grid grid-cols-2 gap-2 bg-gray-50 p-1.5 rounded-2xl mb-6">
        <button
          type="button"
          onClick={() => setContactMethod("whatsapp")}
          className={`flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${
            contactMethod === "whatsapp"
              ? "bg-white text-whatsapp shadow-sm"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
            <path d="M12.04 2a9.94 9.94 0 0 0-8.57 15.06L2 22l5.07-1.33A10 10 0 1 0 12.04 2zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.01.79.8-2.93-.2-.3A8.18 8.18 0 1 1 12.04 20.2z" />
          </svg>
          WhatsApp Booking
        </button>
        <button
          type="button"
          onClick={() => setContactMethod("email")}
          className={`flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${
            contactMethod === "email"
              ? "bg-white text-primary shadow-sm"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email Inquiry
        </button>
      </div>

      <label className="block text-sm font-medium text-navy">
        Full Name *
        <div className="relative mt-1">
          <input 
            name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
            required 
            placeholder="e.g. Rahul Sharma"
            className={getInputClassName("name")} 
          />
          {touched.name && (
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              {validations.name ? (
                <svg className="h-5 w-5 text-green-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-red-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
            </div>
          )}
        </div>
        {touched.name && !validations.name && (
          <span className="text-[10px] text-red-500 font-semibold mt-1 block">Name must be at least 3 characters.</span>
        )}
      </label>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Phone Number *
          <div className="relative mt-1">
            <input 
              name="phone" 
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
              required 
              placeholder="10-digit number"
              className={getInputClassName("phone")} 
            />
            {touched.phone && (
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                {validations.phone ? (
                  <svg className="h-5 w-5 text-green-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-red-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )}
              </div>
            )}
          </div>
          {touched.phone && !validations.phone && (
            <span className="text-[10px] text-red-500 font-semibold mt-1 block">Please enter a valid phone number.</span>
          )}
        </label>
        <label className="block text-sm font-medium text-navy">
          Email Address *
          <div className="relative mt-1">
            <input 
              name="email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
              required 
              placeholder="name@example.com"
              className={getInputClassName("email")} 
            />
            {touched.email && (
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                {validations.email ? (
                  <svg className="h-5 w-5 text-green-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5 text-red-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                )}
              </div>
            )}
          </div>
          {touched.email && !validations.email && (
            <span className="text-[10px] text-red-500 font-semibold mt-1 block">Please enter a valid email address.</span>
          )}
        </label>
      </div>

      <label className="block text-sm font-medium text-navy">
        Subject *
        <select 
          name="subject" 
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required 
          className="mt-1 w-full rounded-xl border border-gray-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        >
          <option>Booking Inquiry</option>
          <option>Corporate Services</option>
          <option>Complaint</option>
          <option>Feedback</option>
          <option>Partnership</option>
          <option>Other</option>
        </select>
      </label>

      <label className="block text-sm font-medium text-navy">
        <div className="flex justify-between items-center">
          <span>Message *</span>
          <span className={`text-[10px] font-semibold transition-colors duration-200 ${
            message.length >= 500 ? "text-red-500 font-bold" : "text-gray-400"
          }`}>
            {message.length} / 500 characters
          </span>
        </div>
        <div className="relative mt-1">
          <textarea 
            name="message" 
            value={message}
            onChange={(e) => setMessage(e.target.value.slice(0, 500))}
            onBlur={() => setTouched(prev => ({ ...prev, message: true }))}
            required 
            rows={4} 
            placeholder="Details about your travel plans, route dates, or fleet queries..."
            className={getInputClassName("message")} 
          />
          {touched.message && (
            <div className="absolute right-3.5 top-5 flex items-center pointer-events-none">
              {validations.message ? (
                <svg className="h-5 w-5 text-green-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-red-500 animate-fade-in-scale" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
            </div>
          )}
        </div>
        {touched.message && !validations.message && (
          <span className="text-[10px] text-red-500 font-semibold mt-1 block">Message must be at least 5 characters.</span>
        )}
      </label>

      <Button 
        type="submit" 
        className="w-full relative overflow-hidden" 
        size="lg"
        disabled={isSubmitting}
      >
        <span className="flex items-center justify-center gap-2">
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {contactMethod === "whatsapp" ? "Opening WhatsApp..." : "Transmitting Inquiry..."}
            </>
          ) : (
            <>
              {contactMethod === "whatsapp" ? "Connect on WhatsApp" : "Submit Inquiry"}
            </>
          )}
        </span>
      </Button>
    </form>
  );
}
