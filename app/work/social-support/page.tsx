import type { Metadata } from "next";
import { NextStepCta } from "@/components/NextStepCta";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Social Support",
  description: "Naya Nari supports women around Sanavalli through skills, craft work, exhibitions and income pathways.",
};

export default function SocialSupportPage() {
  return (
    <PageShell>
      <main className="bg-linen">
      <section className="bg-canopy px-5 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.24em] text-linen/70">Social support</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">Naya Nari helps women around Sanavalli build skill, confidence and income pathways.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-5 py-16 text-base leading-8 text-ink/78">
        <div className="mb-10 flex flex-col gap-5 border border-canopy/15 bg-white p-6 sm:flex-row sm:items-center">
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-[#f3d7cd] font-serif text-3xl text-[#6f3024]">
            NN
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-clay">Initiative identity</p>
            <h2 className="mt-2 font-serif text-3xl leading-none text-canopy">Naya Nari</h2>
            <p className="mt-3 text-sm leading-6 text-ink/70">
              Placeholder for the Naya Nari logo and brand assets. Once shared, this can become a dedicated identity block.
            </p>
          </div>
        </div>
        <p>
          Naya Nari, meaning New Woman, is ANRF's rural empowerment initiative. Women around Sanavalli learn stitching and craft skills, participate in exhibitions and begin to build alternatives for financial independence.
        </p>
        <p className="mt-6">
          The project connects creativity, sustainability and dignity. Over time, its stories, product updates and collaborations can live in the CMS as field notes, photo essays and videos.
        </p>
      </section>
      <NextStepCta
        eyebrow="Naya Nari stories"
        title="Let the work be seen through products, people and progress."
        text="Stories can carry updates from exhibitions, product experiments, collaborations and women-led craft work."
        href="/stories"
        label="Read stories"
      />
      </main>
    </PageShell>
  );
}
