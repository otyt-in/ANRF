import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";
import { v2FooterQuery, v2SiteSettingsQuery, v2NavigationQuery } from "@/lib/queries";

export async function SiteFooter() {
  const footerData = await sanityFetch<any>(v2FooterQuery, {}, null);
  const settingsData = await sanityFetch<any>(v2SiteSettingsQuery, {}, null);
  const navData = await sanityFetch<any>(v2NavigationQuery, {}, null);

  const links = navData?.links || [];
  
  // Updated fallback text for broader community support
  const description = footerData?.description || "Aranya Niran Rosewood Foundation conserves East Indian Rosewood and fosters community-driven rural support and empowerment around Sanavalli, Mundgod, Karnataka.";
  
  const location = settingsData?.location || "Sanavalli, Mundgod, Karnataka, India";

  return (
    <footer className="bg-[#071611] px-5 py-14 text-linen">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.6fr_0.6fr_0.8fr]">
        <div className="pr-10">
          <Link href="/" className="inline-flex flex-col">
            <span className="font-serif text-3xl font-semibold">ANRF</span>
            <span className="mt-1 text-xs font-black uppercase tracking-[0.18em] text-sage">
              Aranya Niran Rosewood Foundation
            </span>
          </Link>
          <p className="mt-5 text-sm leading-7 text-linen/70">{description}</p>
        </div>
        
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-sage">Explore</p>
          <div className="mt-5 grid gap-3 text-sm text-linen/75">
            {links.map((link: any) => (
              <Link key={link._key} href={link.url || "#"} className="hover:text-white transition-colors">{link.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-sage">Connect</p>
          <div className="mt-5 grid gap-3 text-sm text-linen/75">
            {settingsData?.instagramUrl && (
              <Link href={settingsData.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</Link>
            )}
            {settingsData?.youtubeUrl && (
              <Link href={settingsData.youtubeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</Link>
            )}
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-sage">Location</p>
          <p className="mt-5 text-sm leading-7 text-linen/75">{location}</p>
        </div>
      </div>
    </footer>
  );
}