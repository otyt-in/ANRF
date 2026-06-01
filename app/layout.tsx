import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anrf-chi.vercel.app"),
  title: {
    default: "Aranya Niran Rosewood Foundation",
    template: "%s | ANRF",
  },
  description:
    "ANRF conserves East Indian Rosewood and supports rural women around Sanavalli, Mundgod, Karnataka.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aranya Niran Rosewood Foundation",
    description:
      "East Indian Rosewood conservation and rural women empowerment around Sanavalli, Mundgod, Karnataka.",
    url: "https://anrf-chi.vercel.app",
    siteName: "ANRF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aranya Niran Rosewood Foundation",
    description:
      "East Indian Rosewood conservation and rural women empowerment around Sanavalli, Mundgod, Karnataka.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${sourceSans.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
