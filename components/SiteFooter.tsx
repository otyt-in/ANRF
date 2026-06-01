import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#071611] px-5 py-14 text-linen">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="font-serif text-3xl font-semibold">
            ANRF
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-linen/70">
            Aranya Niran Rosewood Foundation conserves East Indian Rosewood and supports rural women around Sanavalli, Mundgod, Karnataka.
          </p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-sage">Explore</p>
          <div className="mt-5 grid gap-3 text-sm text-linen/75">
            <Link href="/about">About</Link>
            <Link href="/work">What We Do</Link>
            <Link href="/stories">Stories</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-sage">Location</p>
          <p className="mt-5 text-sm leading-7 text-linen/75">Sanavalli, Mundgod, Karnataka, India</p>
          <Link href="/contact" className="mt-5 inline-flex border border-linen/35 px-4 py-2 text-xs font-bold uppercase tracking-widest">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
