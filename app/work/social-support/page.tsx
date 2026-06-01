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
