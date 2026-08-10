import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { sanityFetch } from "@/lib/sanity";
import { v2SiteSettingsQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Contact & Support",
  description: "Connect with Aranya Niran Rosewood Foundation to support conservation in Karnataka.",
};

export default async function ContactPage() {
  // Fetch global settings for contact details
  const settings = await sanityFetch<any>(v2SiteSettingsQuery, {}, null);
  const email = settings?.contactEmail || "hello@thearanyaniran.com";
  const location = settings?.location || "Sanavalli, Mundgod, Karnataka, India";

  return (
    <main className="flex min-h-screen flex-col bg-linen">
      <SiteHeader />
      
      <div className="flex-grow px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-clay">Get in touch</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-canopy md:text-7xl">Connect with the foundation.</h1>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            
            {/* General Inquiries Card */}
            <div className="border-t-4 border-canopy bg-white p-10 shadow-sm">
              <h2 className="font-serif text-3xl text-canopy">General Inquiries</h2>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                For questions about our conservation work, Naya Nari, or media requests, please reach out to us via email.
              </p>
              <div className="mt-10 space-y-6">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-ink/50">Email</span>
                  <a href={`mailto:${email}`} className="mt-1 block text-lg font-medium text-canopy hover:underline">{email}</a>
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-widest text-ink/50">Location</span>
                  <p className="mt-1 text-lg font-medium text-canopy">{location}</p>
                </div>
              </div>
            </div>

            {/* Support & Donations Card */}
            <div className="border-t-4 border-sage bg-canopy p-10 text-linen shadow-sm">
              <h2 className="font-serif text-3xl text-white">Support & Donations</h2>
              <p className="mt-4 text-base leading-relaxed text-linen/80">
                Conservation operates on nature's timeline, demanding patience and collective effort. We welcome partnerships, institutional support, and private donations.
              </p>
              <p className="mt-6 text-base leading-relaxed text-linen/80">
                To discuss funding a pilot plot, supporting our nursery capacity, or contributing to Naya Nari, please contact our team directly.
              </p>
              <div className="mt-10">
                {/* Fixed standard anchor tag for mailto link */}
                <a href={`mailto:${email}?subject=Support and Donations`} className="inline-flex min-h-12 items-center justify-center gap-2 bg-linen px-8 text-xs font-extrabold uppercase tracking-widest text-canopy transition hover:bg-white">
                  Discuss Support
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}