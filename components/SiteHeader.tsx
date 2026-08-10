import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";
import { v2NavigationQuery } from "@/lib/queries";

export async function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const navData = await sanityFetch<any>(v2NavigationQuery, {}, null);
  const links = navData?.links || [];

  return (
    <header className={`absolute left-0 right-0 top-0 z-50 flex min-h-24 items-center px-5 ${overlay ? "text-white" : "bg-linen text-canopy border-b border-canopy/10"}`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-bold tracking-wide">
          ANRF
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link: any) => (
            <Link key={link._key} href={link.url || "#"} className="text-xs font-extrabold uppercase tracking-widest hover:opacity-70">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav (Pure CSS Toggle) */}
        <div className="md:hidden">
          <input type="checkbox" id="mobile-menu" className="peer hidden" />
          
          <label htmlFor="mobile-menu" className="relative z-50 block cursor-pointer text-xs font-extrabold uppercase tracking-widest">
            Menu
          </label>

          {/* Full Screen Mobile Dropdown */}
          <div className="fixed inset-0 -z-10 hidden h-screen w-full flex-col bg-[#071611] px-5 pt-32 text-white peer-checked:flex">
             <div className="flex flex-col gap-8">
                <Link href="/" className="border-b border-white/10 pb-4 font-serif text-3xl">Home</Link>
                {links.map((link: any) => (
                  <Link key={link._key} href={link.url || "#"} className="border-b border-white/10 pb-4 font-serif text-3xl">
                    {link.label}
                  </Link>
                ))}
             </div>
          </div>
        </div>
      </div>
    </header>
  );
}