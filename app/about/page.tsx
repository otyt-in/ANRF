import Link from "next/link";
import type { Metadata } from "next";
import { NextStepCta } from "@/components/NextStepCta";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ANRF's origin, East Indian Rosewood conservation focus and work near Sanavalli, Mundgod, Karnataka.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <main className="bg-linen">
      <section className="bg-canopy px-5 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.24em] text-linen/70">About us</p>
          <h1 className="mt-4 font-serif text-5xl leading-tight md:text-6xl">A foundation born from a long relationship with East Indian Rosewood.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-linen/85">
            Aranya Niran Rosewood Foundation grew from Overseas Traders, a third-generation family business working with East Indian Rosewood for more than 40 years.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr]">
        <div className="font-serif text-3xl text-canopy">Why now?</div>
        <div className="space-y-6 text-base leading-8 text-ink/78">
          <p>
            East Indian Rosewood, Dalbergia latifolia, has played an important role in acoustic and electric guitar construction. Its conservation is now essential for future artisans, musicians and ecosystems.
          </p>
          <p>
            After the Dalbergia genus was listed in CITES Appendix II in 2016, a closer look at the species revealed a shortage of scientific data and a worrying lack of regeneration.
          </p>
          <p>
            ANRF is located near Sanavalli, Mundgod, Karnataka, in the native region for East Indian Rosewood. The foundation has secured farmland, planted saplings, built nursery capacity and begun collaboration around forest pilot plots.
          </p>
          <Link href="/work" className="inline-flex border border-canopy px-5 py-3 text-sm font-semibold text-canopy">See what we do</Link>
        </div>
      </section>
      <NextStepCta
        eyebrow="Explore the work"
        title="See how conservation and community support come together."
        text="Move from the origin story into ANRF's two core work areas: rosewood conservation and Naya Nari."
        href="/work"
        label="What we do"
      />
      </main>
    </PageShell>
  );
}
