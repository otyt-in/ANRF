import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { NextStepCta } from "@/components/NextStepCta";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "What We Do",
  description: "Explore ANRF's rosewood conservation and rural social support work in Karnataka.",
};

const work = [
  {
    title: "Rosewood Conservation",
    href: "/work/rosewood-conservation",
    copy: "Reforestation, nursery development, pilot forest plots and conservation documentation for East Indian Rosewood.",
  },
  {
    title: "Social Support",
    href: "/work/social-support",
    copy: "Naya Nari promotes rural empowerment by helping local women build practical skills and financial confidence.",
  },
];

export default function WorkPage() {
  return (
    <PageShell>
      <main className="bg-white">
      <section className="texture px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.24em] text-clay">What we do</p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight text-canopy md:text-6xl">Conservation and community support, designed to last.</h1>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {work.map((item) => (
              <Link key={item.href} href={item.href} className="group border border-canopy/15 bg-linen p-7">
                <h2 className="font-serif text-3xl text-canopy">{item.title}</h2>
                <p className="mt-5 min-h-24 text-base leading-8 text-ink/75">{item.copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay">
                  Explore <ArrowRight className="transition group-hover:translate-x-1" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <NextStepCta
        eyebrow="Stories"
        title="Follow field notes, documentation and media from the work."
        text="Stories will become the main reading area for blogs, documentation, photo essays and videos."
        href="/stories"
        label="Read stories"
      />
      </main>
    </PageShell>
  );
}
