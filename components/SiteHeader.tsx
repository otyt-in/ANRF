"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { sanityFetch } from "@/lib/sanity";
import { v2NavigationQuery } from "@/lib/queries";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [links, setLinks] = useState<any[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    async function fetchNav() {
      const navData = await sanityFetch<any>(v2NavigationQuery, {}, null);
      if (navData?.links) {
        setLinks(navData.links);
      }
    }
    fetchNav();
  }, []);

  return (
    <header className={`absolute left-0 right-0 top-0 z-50 flex min-h-24 items-center px-5 ${overlay ? "text-white" : "bg-linen text-canopy border-b border-canopy/10"}`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-2xl font-bold tracking-wide">
          ANRF
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link: any) => {
            const targetPath = link.url || link.href || "#";
            return (
              <Link key={link._key} href={targetPath} scroll={true} className="text-xs font-extrabold uppercase tracking-widest hover:opacity-70">
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 block cursor-pointer text-xs font-extrabold uppercase tracking-widest"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          {/* Full Screen Mobile Dropdown */}
          {menuOpen && (
            <div className="fixed inset-0 -z-10 flex h-screen w-full flex-col bg-[#071611] px-5 pt-32 text-white">
               <div className="flex flex-col gap-8">
                  <Link href="/" onClick={() => setMenuOpen(false)} className="border-b border-white/10 pb-4 font-serif text-3xl">Home</Link>
                  {links.map((link: any) => {
                    const targetPath = link.url || link.href || "#";
                    return (
                      <Link 
                        key={link._key} 
                        href={targetPath} 
                        scroll={true}
                        onClick={() => setMenuOpen(false)}
                        className="border-b border-white/10 pb-4 font-serif text-3xl"
                      >
                        {link.label}
                      </Link>
                    );
                  })}
               </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}