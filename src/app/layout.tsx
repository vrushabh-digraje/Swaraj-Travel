import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { BookingModal } from "@/components/booking-modal";
import { FloatingActions } from "@/components/floating-actions";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { BookingProvider } from "@/lib/booking-context";
import { localBusinessSchema } from "@/lib/schema";
import { SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Mumbai Cab Booking | Airport, Outstation & Local Taxi - Book A Cab",
    template: "%s",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Mumbai cab booking",
    "Mumbai taxi service",
    "Mumbai airport cab",
    "outstation taxi Mumbai",
    "Book A Cab",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    siteName: SITE.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1A1A2E",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-light font-sans text-navy">
        <JsonLd data={localBusinessSchema()} />
        <BookingProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
          <BookingModal />
        </BookingProvider>
      </body>
    </html>
  );
}
