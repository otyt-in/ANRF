import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";
import { v2NavigationQuery } from "@/lib/queries";

export async function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  // Fetch dynamic navigation links from Sanity
  const navData = await sanityFetch<any>(v2NavigationQuery, {}, null);
  const links = navData?.links || [];

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
          {links.length > 0 ? (
            links.map((link: any) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))
          ) : (
            // Temporary fallback if Sanity is empty
            <span className="opacity-50">Setup Navigation in CMS</span>
          )}
        </div>
      </nav>
    </header>
  );
}