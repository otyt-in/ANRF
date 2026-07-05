import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { NextStepCta } from "@/components/NextStepCta";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { sanityFetch } from "@/lib/sanity";
import { v2ProgrammesQuery, v2SiteSettingsQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "What We Do",
  description: "Explore ANRF's conservation and rural social support work in Karnataka.",
};

export default async function WorkPage() {
  // Fetch Programmes and Global Settings (for the Instagram link)
  const programmes = await sanityFetch<any[]>(v2ProgrammesQuery, {}, []);
  const settings = await sanityFetch<any>(v2SiteSettingsQuery, {}, null);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <SiteHeader />
      
      <div className="flex-grow">
        <section className="texture px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.24em] text-clay">What we do</p>
            <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-canopy md:text-6xl">
              Conservation and community support, designed to last.
            </h1>
            
            {/* Dynamic Programme Cards */}
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {programmes.length === 0 ? (
                <p className="text-ink/60">No programmes published in Sanity yet.</p>
              ) : (
                programmes.map((item) => (
                  <Link key={item.slug} href={`/work/${item.slug}`} className="group border border-canopy/15 bg-linen p-7 transition hover:bg-canopy/5">
                    <h2 className="font-serif text-3xl text-canopy">{item.title}</h2>
                    <p className="mt-5 min-h-24 text-base leading-8 text-ink/75">{item.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay">
                      Explore <ArrowRight className="transition group-hover:translate-x-1" size={16} />
                    </span>
                  </Link>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Upgraded Instagram CTA using V1 NextStepCta component */}
        {settings?.instagramUrl && (
          <NextStepCta
            eyebrow="The Living Journal"
            title="Follow our day-to-day progress in the field."
            text="We document sapling growth, nursery updates, and community initiatives directly on Instagram."
            href={settings.instagramUrl}
            label="Open Instagram"
          />
        )}
      </div>

      <SiteFooter />
    </main>
  );
}