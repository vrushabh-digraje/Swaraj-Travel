"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Button } from "@/components/button";
import {
  ChevronDownIcon,
  CloseIcon,
  LogoIcon,
  MenuIcon,
  PhoneIcon,
  RouteIcon,
  TaxiIcon,
} from "@/components/icons";
import { useBooking } from "@/lib/booking-context";
import { OUTSTATION_ROUTES } from "@/lib/routes";
import { NAV_LINKS, SITE, telHref } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [outstationOpen, setOutstationOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const menuId = useId();

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOutstationOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-40 md:top-3">
      <div className="mx-auto max-w-7xl md:px-4">
        <nav
          className="border-gray-100 bg-white/95 shadow-xl backdrop-blur md:rounded-2xl md:border"
          aria-label="Main"
        >
          <div className="flex items-center justify-between px-3 py-2 md:px-5 md:py-3">
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <img src="/logo.png" alt="Book A Cab Logo" className="h-10 w-auto md:h-12 object-contain" />
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-primary font-semibold"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="relative">
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    pathname.includes("-cab") || pathname.startsWith("/outstation")
                      ? "text-primary font-semibold"
                      : "text-gray-600"
                  }`}
                  aria-expanded={outstationOpen}
                  aria-controls={menuId}
                  onClick={() => setOutstationOpen((open) => !open)}
                  onMouseEnter={() => setOutstationOpen(true)}
                  onMouseLeave={() => setOutstationOpen(false)}
                >
                  Outstation
                  <ChevronDownIcon className="h-3.5 w-3.5" />
                </button>
                <div
                  id={menuId}
                  className={`absolute top-full left-0 w-72 rounded-xl border border-gray-100 bg-white py-2 shadow-2xl ${
                    outstationOpen ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                  onMouseEnter={() => setOutstationOpen(true)}
                  onMouseLeave={() => setOutstationOpen(false)}
                >
                  <Link
                    href="/outstation"
                    className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
                  >
                    All outstation routes
                  </Link>
                  {OUTSTATION_ROUTES.map((route) => (
                    <Link
                      key={route.slug}
                      href={`/${route.slug}`}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary/5"
                    >
                      <RouteIcon className="h-4 w-4 text-primary" />
                      <span>
                        <span className="block text-sm font-semibold text-navy">
                          {route.from} to {route.to}
                        </span>
                        <span className="text-xs text-gray-500">
                          {route.distance} • {route.duration}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </li>
              {NAV_LINKS.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-primary font-semibold"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Button size="sm" onClick={() => openBooking()}>
                <TaxiIcon className="h-4 w-4" />
                Book Now
              </Button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((open) => !open)}
              >
                {mobileOpen ? (
                  <CloseIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu overlay"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative h-full w-80 max-w-[85vw] overflow-y-auto bg-white shadow-2xl">
            <div className="bg-gradient-to-r from-primary to-accent p-5 text-white">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-bold">{SITE.name}</p>
                  <p className="text-xs text-white/80">{SITE.tagline}</p>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-white/20 p-2"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
              <Button variant="white" className="w-full" onClick={() => openBooking()}>
                Book a Ride
              </Button>
            </div>
            <ul className="space-y-1 p-3">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-3 font-medium text-navy hover:bg-primary/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <p className="px-4 pt-2 text-xs font-bold tracking-wide text-gray-400 uppercase">
                  Outstation
                </p>
                <Link
                  href="/outstation"
                  className="block rounded-lg px-4 py-2 text-sm font-semibold text-primary"
                >
                  All routes
                </Link>
                {OUTSTATION_ROUTES.map((route) => (
                  <Link
                    key={route.slug}
                    href={`/${route.slug}`}
                    className="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-primary/5"
                  >
                    {route.from} to {route.to}
                  </Link>
                ))}
              </li>
              {NAV_LINKS.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-4 py-3 font-medium text-navy hover:bg-primary/5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={telHref()}
              className="mx-4 mb-6 flex items-center gap-2 rounded-xl bg-light px-4 py-3 font-semibold text-navy"
            >
              <PhoneIcon className="h-4 w-4 text-primary" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
