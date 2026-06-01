import Link from "next/link";
import { ArrowRight, Instagram, Play, Youtube } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { homePageFallback, impactFallback, siteSettingsFallback, stories } from "@/lib/content";
import { homePageQuery, siteSettingsQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanity";

type HomePageContent = typeof homePageFallback & {
  impact?: Array<{ value: string; label: string }>;
};

export default async function Home() {
  const fetchedContent = await sanityFetch<HomePageContent | null>(homePageQuery, {}, {
    ...homePageFallback,
    impact: impactFallback,
  });
  const content: HomePageContent = {
    ...homePageFallback,
    ...(fetchedContent || {}),
  };
  const fetchedSettings = await sanityFetch<typeof siteSettingsFallback | null>(siteSettingsQuery, {}, siteSettingsFallback);
  const settings = {
    ...siteSettingsFallback,
    ...(fetchedSettings || {}),
  };
  const impacts = content.impact?.length ? content.impact : impactFallback;

  return (
    <main>
      <SiteHeader overlay />
      <section className="relative min-h-[94vh] overflow-hidden bg-[#071611] text-white">
        <div className="absolute inset-0 scale-[1.02] bg-[url('https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=2200&q=82')] bg-cover bg-center opacity-75" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,22,17,.96),rgba(16,45,34,.58)_44%,rgba(7,22,17,.1)),linear-gradient(0deg,rgba(7,22,17,.98),transparent_42%)]" />
        <div className="relative z-10 mx-auto grid min-h-[94vh] max-w-7xl items-end gap-12 px-5 pb-12 pt-28 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-linen/80">{content.heroEyebrow}</p>
            <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] md:text-8xl">{content.heroTitle}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-linen/90">
              {content.heroText}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/work/rosewood-conservation" className="inline-flex min-h-12 items-center gap-2 bg-linen px-6 text-xs font-extrabold uppercase tracking-widest text-canopy">
                Explore the work <ArrowRight size={16} />
              </Link>
              <Link href="/stories" className="inline-flex min-h-12 items-center gap-2 border border-white/70 px-6 text-xs font-extrabold uppercase tracking-widest text-white">
                Read field stories
              </Link>
            </div>
          </div>
          <aside className="border-t border-white/30 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <strong className="block font-serif text-6xl leading-none text-sage">100</strong>
            <span className="mt-4 block text-base leading-7 text-linen/80">
              Years for a rosewood tree to reach maturity. ANRF is building for that horizon, not for a campaign cycle.
            </span>
          </aside>
        </div>
      </section>

      <section className="bg-linen px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-clay">The model</p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-canopy md:text-6xl">Conservation that begins with land, science and community.</h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-ink/75">
              ANRF was born from a long relationship with East Indian Rosewood and the people around Mundgod. The work joins farmland reforestation, nursery development, pilot forest plots, documentation and Naya Nari's rural empowerment initiative.
            </p>
            <div className="mt-12 grid border-y border-canopy/15 md:grid-cols-4">
              {impacts.map(({ value, label }) => (
                <div key={label} className="border-b border-canopy/15 p-6 md:border-b-0 md:border-r last:md:border-r-0">
                  <strong className="block font-serif text-4xl leading-none text-[#6f3024]">{value}</strong>
                  <span className="mt-3 block text-xs font-extrabold uppercase leading-5 tracking-widest text-ink/60">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-canopy px-5 py-24 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2200&q=82')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-linen/75">What we do</p>
          <h2 className="mt-4 max-w-4xl font-serif text-5xl leading-none md:text-6xl">Two threads, one foundation.</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {[
              ["Rosewood Conservation", "/work/rosewood-conservation", "Farmland planting, nursery care, pilot forest plots and documentation for East Indian Rosewood regeneration.", "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=82"],
              ["Social Support", "/work/social-support", "Naya Nari supports women around Sanavalli through craft skills, exhibitions and alternative income pathways.", "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=82"],
            ].map(([title, href, copy, image]) => (
              <Link key={title} href={href} className="group relative flex min-h-[430px] overflow-hidden border border-white/20 p-8">
                <div className="absolute inset-0 bg-cover bg-center opacity-75 transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071611] via-[#071611]/35 to-transparent" />
                <div className="relative z-10 mt-auto max-w-xl">
                  <h3 className="font-serif text-4xl leading-none">{title}</h3>
                  <p className="mt-4 text-base leading-7 text-linen/85">{copy}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="min-h-[440px] border-[18px] border-linen bg-[url('https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?auto=format&fit=crop&w=1200&q=82')] bg-cover bg-center shadow-2xl shadow-canopy/20" />
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-clay">The long view</p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-canopy md:text-6xl">{content.longViewTitle}</h2>
            <p className="mt-6 text-lg leading-9 text-ink/75">
              {content.longViewText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#071611] px-5 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative aspect-video overflow-hidden bg-black shadow-2xl shadow-black/40">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=82')] bg-cover bg-center opacity-80" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-linen text-canopy">
                <Play fill="currentColor" size={30} />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-linen/75">Video</p>
            <h2 className="mt-4 font-serif text-5xl leading-none">{content.videoTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-linen/80">
              {content.videoText}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-clay">Follow the field</p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-canopy">Let video and social updates carry the living story.</h2>
            <p className="mt-5 text-base leading-7 text-ink/70">
              YouTube can host longer films and field documentation. Instagram can carry quick visual updates from planting, nursery work, exhibitions and Naya Nari.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={settings.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-44 flex-col justify-between border border-canopy/15 bg-linen p-6 text-canopy"
            >
              <Youtube size={34} />
              <div>
                <h3 className="font-serif text-3xl">YouTube</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">Films, interviews and field documentation.</p>
              </div>
            </Link>
            <Link
              href={settings.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-44 flex-col justify-between border border-canopy/15 bg-linen p-6 text-canopy"
            >
              <Instagram size={34} />
              <div>
                <h3 className="font-serif text-3xl">Instagram</h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">Photos, reels, exhibitions and quick updates.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-linen px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.68fr_1.32fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-clay">Stories</p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-canopy md:text-6xl">A content hub for blogs, field notes, documents and media.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {stories.slice(0, 3).map((story) => (
              <Link key={story.slug} href={`/stories/${story.slug}`} className="border border-canopy/15 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-moss">{story.category}</p>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-canopy">{story.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{story.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
