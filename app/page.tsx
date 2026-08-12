import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { sanityFetch } from "@/lib/sanity";
import { v2HomePageQuery, v2SiteSettingsQuery } from "@/lib/queries";
import { getImageUrl } from "@/lib/image";
import { ArrowRight, Play, Youtube, Instagram } from "lucide-react";



// Helper function to extract YouTube ID and return the secure embed URL
function getYouTubeEmbedUrl(url: string) {
  if (!url) return '';
  // If it's already an embed URL, return it as-is
  if (url.includes('youtube.com/embed/')) return url;
  
  let videoId = '';
  // Handle "youtu.be" short links
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
  } 
  // Handle standard "youtube.com/watch" links
  else if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(url.split('?')[1]);
    videoId = urlParams.get('v') || '';
  }
  
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
}



const DEFAULT_IMAGES = {
  hero: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=2200&q=82",
  longView: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?auto=format&fit=crop&w=1200&q=82",
  workBg: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2200&q=82",
  rosewood: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=82",
  social: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=82",
  video: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=82"
};

export default async function Home() {
  const data = await sanityFetch<any>(v2HomePageQuery, {}, null);
  const settings = await sanityFetch<any>(v2SiteSettingsQuery, {}, null);
  const sections = data?.sections || [];

  return (
    <main>
      <SiteHeader overlay />

      {sections.length === 0 ? (
        <section className="px-5 py-32 text-center text-ink/60">
          <p className="font-serif text-2xl">The homepage is currently empty.</p>
          <p className="mt-2 text-sm">Please add sections via the Sanity Studio.</p>
        </section>
      ) : (
        sections.map((section: any) => {
          switch (section._type) {
            
            case "heroBlock": {
              const bgUrl = section.backgroundImage ? getImageUrl(section.backgroundImage, "", 2200) : DEFAULT_IMAGES.hero;
              return (
                <section key={section._key} className="relative min-h-[94vh] overflow-hidden bg-[#071611] text-white">
                  <div className="absolute inset-0 scale-[1.02] bg-cover bg-center opacity-75" style={{ backgroundImage: `url(${bgUrl})` }} />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,22,17,.96),rgba(16,45,34,.58)_44%,rgba(7,22,17,.1)),linear-gradient(0deg,rgba(7,22,17,.98),transparent_42%)]" />
                  
                  <div className="relative z-10 mx-auto grid min-h-[94vh] max-w-7xl items-end gap-12 px-5 pb-12 pt-32 lg:grid-cols-[1fr_360px]">
                    <div>
                      {section.kicker && (
                        <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-linen/80">{section.kicker}</p>
                      )}
                      <h1 className="max-w-5xl font-serif text-5xl leading-[0.98] md:text-8xl">{section.heading}</h1>
                      {section.subheading && (
                        <p className="mt-7 max-w-3xl text-lg leading-8 text-linen/90">{section.subheading}</p>
                      )}
                      {section.ctas && section.ctas.length > 0 && (
                        <div className="mt-9 flex flex-wrap gap-3">
                          {section.ctas.map((cta: any, i: number) => {
                            const isExternal = cta.url?.startsWith("http");
                            return (
                              <Link 
                                key={i} 
                                href={cta.url || "#"} 
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                                className={`inline-flex min-h-12 items-center gap-2 px-6 text-xs font-extrabold uppercase tracking-widest ${
                                  cta.isPrimary ? "bg-linen text-canopy" : "border border-white/70 text-white hover:bg-white/10"
                                }`}
                              >
                                {cta.label} {cta.isPrimary && <ArrowRight size={16} />}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    {(section.statValue || section.statText) && (
                      <aside className="border-t border-white/30 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                        {section.statValue && <strong className="block font-serif text-6xl leading-none text-sage">{section.statValue}</strong>}
                        {section.statText && <span className="mt-4 block text-base leading-7 text-linen/80">{section.statText}</span>}
                      </aside>
                    )}
                  </div>
                </section>
              );
            }

            case "modelBlock":
              return (
                <section key={section._key} className="bg-linen px-5 py-24">
                  <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.24em] text-clay">The Model</p>
                      <h2 className="mt-4 font-serif text-5xl leading-none text-canopy md:text-6xl">{section.heading}</h2>
                    </div>
                    <div>
                      {section.body && <p className="text-lg leading-9 text-ink/75">{section.body}</p>}
                      {section.metrics && section.metrics.length > 0 && (
                        <div className="mt-12 grid border-y border-canopy/15 md:grid-cols-4">
                          {section.metrics.map((metric: any, i: number) => (
                            <div key={i} className="border-b border-canopy/15 p-6 md:border-b-0 md:border-r last:md:border-r-0">
                              <strong className="block font-serif text-4xl leading-none text-[#6f3024]">{metric.value}</strong>
                              <span className="mt-3 block text-xs font-extrabold uppercase leading-5 tracking-widest text-ink/60">{metric.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );

            case "workThreadsBlock": {
              const bgUrl = section.backgroundImage ? getImageUrl(section.backgroundImage, "", 2200) : DEFAULT_IMAGES.workBg;
              return (
                <section key={section._key} className="relative overflow-hidden bg-canopy px-5 py-24 text-white">
                  <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${bgUrl})` }} />
                  <div className="relative z-10 mx-auto max-w-7xl">
                    {section.kicker && <p className="text-xs font-black uppercase tracking-[0.24em] text-linen/75">{section.kicker}</p>}
                    <h2 className="mt-4 max-w-4xl font-serif text-5xl leading-none md:text-6xl">{section.heading}</h2>
                    {section.cards && section.cards.length > 0 && (
                      <div className="mt-12 grid gap-5 lg:grid-cols-2">
                        {section.cards.map((card: any, i: number) => {
                           const fallbackCardImg = i === 0 ? DEFAULT_IMAGES.rosewood : DEFAULT_IMAGES.social;
                           const cardImgUrl = card.image ? getImageUrl(card.image, "", 1200) : fallbackCardImg;
                           return (
                            <Link key={i} href={card.url || "#"} className="group relative flex min-h-[430px] overflow-hidden border border-white/20 p-8">
                              <div className="absolute inset-0 bg-cover bg-center opacity-75 transition duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${cardImgUrl})` }} />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#071611] via-[#071611]/35 to-transparent" />
                              <div className="relative z-10 mt-auto max-w-xl">
                                <h3 className="font-serif text-4xl leading-none">{card.title}</h3>
                                {card.description && <p className="mt-4 text-base leading-7 text-linen/85">{card.description}</p>}
                              </div>
                            </Link>
                           );
                        })}
                      </div>
                    )}
                  </div>
                </section>
              );
            }

            case "imageWithTextBlock": {
              const imgUrl = section.image ? getImageUrl(section.image, "", 1200) : DEFAULT_IMAGES.longView;
              return (
                <section key={section._key} className="bg-white px-5 py-24">
                  <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="min-h-[440px] border-[18px] border-linen bg-cover bg-center shadow-2xl shadow-canopy/20" style={{ backgroundImage: `url(${imgUrl})` }} />
                    <div>
                      {section.kicker && <p className="text-xs font-black uppercase tracking-[0.24em] text-clay">{section.kicker}</p>}
                      <h2 className="mt-4 font-serif text-5xl leading-none text-canopy md:text-6xl">{section.heading}</h2>
                      {section.body && <p className="mt-6 text-lg leading-9 text-ink/75">{section.body}</p>}
                    </div>
                  </div>
                </section>
              );
            }

          case "videoBlock":
            // Safely check for the URL regardless of what it's named in Sanity
            const rawUrl = section.url || section.videoUrl || section.link || "";
            const embedUrl = getYouTubeEmbedUrl(rawUrl);

            return (
              <section key={section._key} className="py-24 bg-stone-900 text-stone-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-16">
                    {section.kicker && <p className="text-stone-400 uppercase tracking-widest text-sm font-bold mb-4">{section.kicker}</p>}
                    {section.heading && <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">{section.heading}</h2>}
                    {section.body && <p className="text-stone-300 text-lg md:text-xl leading-relaxed">{section.body}</p>}
                  </div>
                  
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
                    
                    {/* 1. Show the Poster Image if one was uploaded */}
                    {section.image && (
                      <img 
                        // Note: If you have a Sanity urlFor helper, you might need: src={urlFor(section.image).url()}
                        src={section.image.asset?.url || section.image} 
                        alt="Video Poster"
                        className="absolute inset-0 w-full h-full object-cover z-0"
                      />
                    )}

                    {/* 2. Show the YouTube Video (this will sit on top of the poster image) */}
                    {embedUrl ? (
                      <iframe
                        src={embedUrl}
                        title="YouTube video player"
                        className="absolute inset-0 w-full h-full border-0 z-10"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="z-20 text-stone-400 bg-black/70 px-4 py-2 rounded">
                        No valid YouTube URL provided.
                      </div>
                    )}
                    
                  </div>
                </div>
              </section>
            );

            case "socialBlock":
               return (
                <section key={section._key} className="bg-white px-5 py-24">
                  <div className="mx-auto max-w-4xl text-center">
                    {section.kicker && <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-clay">{section.kicker}</p>}
                    <h2 className="font-serif text-5xl leading-none text-canopy">{section.heading}</h2>
                    {section.body && <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/75">{section.body}</p>}
                    
                    {settings?.instagramUrl && (
                      <div className="mt-12">
                        <Link href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border border-canopy/20 bg-linen px-8 py-5 text-canopy transition hover:bg-canopy hover:text-linen">
                          <Instagram size={24} />
                          <span className="font-serif text-xl font-medium tracking-wide">Follow the Living Journal</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </section>
               );

            case "partnersBlock":
              return (
                <section key={section._key} className="bg-linen px-5 py-24">
                  <div className="mx-auto max-w-5xl text-center">
                    {section.heading && <h2 className="mb-12 font-serif text-4xl text-canopy">{section.heading}</h2>}
                    {section.partners && section.partners.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-16 pt-8">
                        {section.partners.map((partner: any, i: number) => {
                          const logoUrl = partner.logo ? getImageUrl(partner.logo, "", 600) : null;
                          return (
                            <div key={i} className="w-full max-w-[320px] text-center">
                              {logoUrl ? (
                                <img src={logoUrl} alt={partner.name} className="mx-auto h-32 object-contain grayscale opacity-85 transition hover:grayscale-0 hover:opacity-100" />
                              ) : (
                                <div className="mx-auto flex h-32 items-center justify-center font-serif text-2xl font-bold text-canopy/60">{partner.name}</div>
                              )}
                              {partner.description && <p className="mt-6 text-base leading-relaxed text-ink/75">{partner.description}</p>}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </section>
              );

            case "ctaBlock":
              return (
                <section key={section._key} className="texture border-t border-canopy/15 bg-bone px-5 py-24">
                  <div className="mx-auto max-w-4xl text-center">
                    {section.kicker && <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-clay">{section.kicker}</p>}
                    <h2 className="font-serif text-5xl leading-tight text-canopy md:text-6xl">{section.heading}</h2>
                    {section.body && <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/75">{section.body}</p>}
                    {section.buttonUrl && (
                      <div className="mt-10">
                        <Link href={section.buttonUrl} className="inline-flex min-h-12 items-center justify-center gap-2 bg-canopy px-8 text-xs font-extrabold uppercase tracking-widest text-linen transition hover:bg-ink">
                          {section.buttonText || "Get Involved"} <ArrowRight size={16} />
                        </Link>
                      </div>
                    )}
                  </div>
                </section>
              );

            default:
              return null;
          }
        })
      )}

      <SiteFooter />
    </main>
  );
}