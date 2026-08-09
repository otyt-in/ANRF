import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NextStepCta } from "@/components/NextStepCta";
import { sanityFetch } from "@/lib/sanity";
import { v2ProgrammeBySlugQuery, v2SiteSettingsQuery } from "@/lib/queries";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const programme = await sanityFetch<any>(v2ProgrammeBySlugQuery, { slug }, null);
  if (!programme) return { title: "Programme Not Found" };
  return { title: programme.title, description: programme.excerpt };
}

export default async function ProgrammePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const programme = await sanityFetch<any>(v2ProgrammeBySlugQuery, { slug }, null);
  const settings = await sanityFetch<any>(v2SiteSettingsQuery, {}, null);

  if (!programme) notFound();

  const blocks = programme.blocks || [];

  return (
    <main className="flex min-h-screen flex-col bg-linen">
      <SiteHeader />

      <div className="flex-grow">
        {/* V1 Green Hero Section */}
        <section className="bg-canopy px-5 py-24 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm uppercase tracking-[0.24em] text-linen/70">{programme.heroKicker || "Programme"}</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">{programme.heroHeading || programme.title}</h1>
          </div>
        </section>

        {/* Dynamic V1 Smart Blocks */}
        {blocks.map((block: any, index: number) => {
           
           if (block._type === "gridBlock") {
             return (
               <section key={index} className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3">
                 {block.items?.map((item: any, i: number) => (
                   <article key={i} className="bg-white p-6 shadow-sm">
                     <h2 className="font-serif text-3xl text-canopy">{item.title}</h2>
                     <p className="mt-4 text-sm leading-7 text-ink/75">{item.copy}</p>
                   </article>
                 ))}
               </section>
             );
           }

           if (block._type === "badgeBlock") {
             return (
               <section key={index} className="mx-auto max-w-4xl px-5 py-16 text-base leading-8 text-ink/78">
                 <div className="mb-10 flex flex-col gap-5 border border-canopy/15 bg-white p-6 sm:flex-row sm:items-center">
                   <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-[#f3d7cd] font-serif text-3xl text-[#6f3024]">
                     {block.badgeInitials || "NN"}
                   </div>
                   <div>
                     <p className="text-xs font-black uppercase tracking-[0.22em] text-clay">Initiative identity</p>
                     <h2 className="mt-2 font-serif text-3xl leading-none text-canopy">{block.badgeTitle}</h2>
                     <p className="mt-3 text-sm leading-6 text-ink/70">{block.badgeSubtitle}</p>
                   </div>
                 </div>
                 <div className="prose prose-lg prose-p:text-ink/80 max-w-none">
                   {block.body && <PortableText value={block.body} />}
                 </div>
               </section>
             );
           }

           return null;
        })}

        {/* Upgraded Instagram CTA */}
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