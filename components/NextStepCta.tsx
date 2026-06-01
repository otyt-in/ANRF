import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function NextStepCta({
  eyebrow = "Next",
  title,
  text,
  href,
  label,
}: {
  eyebrow?: string;
  title: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <section className="bg-linen px-5 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-y border-canopy/15 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-clay">{eyebrow}</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-none text-canopy">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink/70">{text}</p>
        </div>
        <Link href={href} className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-canopy px-5 text-xs font-extrabold uppercase tracking-widest text-linen">
          {label} <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
