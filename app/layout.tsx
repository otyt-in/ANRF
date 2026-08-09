import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { sanityFetch } from "@/lib/sanity";
import { v2SeoQuery } from "@/lib/queries";
import { Analytics } from "@vercel/analytics/react";

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  // Fetch the Global SEO document from Sanity
  const seo = await sanityFetch<any>(v2SeoQuery, {}, null);

  return {
    title: {
      template: "%s | ANRF",
      default: seo?.metaTitle || "Aranya Niran Rosewood Foundation",
    },
    description: seo?.metaDescription || "Conserving East Indian Rosewood and fostering community-driven rural support in Karnataka.",
    openGraph: {
      images: seo?.ogImage ? [{ url: seo.ogImage }] : [],
    },
  };
}

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
