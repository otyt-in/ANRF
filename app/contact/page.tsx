import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Aranya Niran Rosewood Foundation in Sanavalli, Mundgod, Karnataka.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <main className="bg-linen px-5 py-24">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.24em] text-clay">Contact</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-canopy">Connect with Aranya Niran Rosewood Foundation.</h1>
        <div className="mt-10 bg-white p-8 text-base leading-8 text-ink/78">
          <p>Location: Sanavalli, Mundgod, Karnataka, India</p>
          <p className="mt-4">Contact form and email details can be added once the preferred public contact address is confirmed.</p>
        </div>
      </section>
      </main>
    </PageShell>
  );
}
