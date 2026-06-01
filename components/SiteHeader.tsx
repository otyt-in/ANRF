import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "What We Do" },
  { href: "/stories", label: "Stories" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header
      className={
        overlay
          ? "absolute left-0 right-0 top-0 z-30 bg-gradient-to-b from-[#071611]/85 via-[#071611]/20 to-transparent"
          : "sticky top-0 z-30 border-b border-canopy/10 bg-linen/95 backdrop-blur"
      }
    >
      <nav className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-5 ${overlay ? "text-white" : "text-canopy"}`}>
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold">ANRF</span>
          <span className={`mt-1 hidden text-[10px] font-bold uppercase tracking-[0.18em] md:block ${overlay ? "text-linen/75" : "text-canopy/65"}`}>
            Aranya Niran Rosewood Foundation
          </span>
        </Link>
        <div className="hidden gap-7 text-xs font-bold uppercase tracking-widest md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
