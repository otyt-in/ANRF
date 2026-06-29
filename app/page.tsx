import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { sanityFetch } from "@/lib/sanity";
import { v2HomePageQuery } from "@/lib/queries";
import { getImageUrl } from "@/lib/image";

export default async function Home() {
  // 1. Fetch the modular sections from Sanity
  const data = await sanityFetch<any>(v2HomePageQuery, {}, null);
  const sections = data?.sections || [];

  return (
    <main className="flex min-h-screen flex-col bg-linen">
      <SiteHeader />

      <div className="flex-grow">
        {/* 2. If CMS is empty, show a fallback message instead of fake V1 data */}
        {sections.length === 0 ? (
          <section className="px-5 py-32 text-center text-ink/60">
            <p className="font-serif text-2xl">The homepage is currently empty.</p>
            <p className="mt-2 text-sm">Please add sections via the Sanity Studio.</p>
          </section>
        ) : (
          /* 3. Loop through the Page Builder blocks */
          sections.map((section: any) => {
            switch (section._type) {
              
              case "heroBlock":
                const bgUrl = getImageUrl(section.backgroundImage, "", 2000);
                return (
                  <section key={section._key} className="relative flex min-h-[80vh] items-center overflow-hidden bg-[#071611] px-5 py-24 text-white">
                    {bgUrl && (
                      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${bgUrl})` }} />
                    )}
                    <div className="relative z-10 mx-auto max-w-5xl text-center">
                      <h1 className="font-serif text-5xl leading-tight md:text-7xl">{section.heading}</h1>
                      {section.subheading && (
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-linen/90 md:text-xl">{section.subheading}</p>
                      )}
                    </div>
                  </section>
                );

              case "missionBlock":
                return (
                  <section key={section._key} className="px-5 py-24 text-center">
                    <div className="mx-auto max-w-3xl">
                      <h2 className="font-serif text-4xl text-canopy">{section.heading}</h2>
                      {section.body && (
                        <p className="mt-6 text-lg leading-relaxed text-ink/80">{section.body}</p>
                      )}
                    </div>
                  </section>
                );

              case "impactBlock":
                return (
                  <section key={section._key} className="bg-white px-5 py-24">
                    <div className="mx-auto max-w-6xl">
                      <h2 className="mb-16 text-center font-serif text-4xl text-canopy">{section.heading}</h2>
                      <div className="grid grid-cols-2 gap-8 border-y border-canopy/10 py-10 text-center md:grid-cols-4">
                        {section.metrics?.map((metric: any, i: number) => (
                          <div key={i}>
                            <strong className="block font-serif text-5xl text-[#6f3024]">{metric.value}</strong>
                            <span className="mt-3 block text-xs font-bold uppercase tracking-widest text-ink/60">{metric.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                );

              case "ctaBlock":
                return (
                  <section key={section._key} className="bg-canopy px-5 py-24 text-center text-white">
                    <div className="mx-auto max-w-2xl">
                      <h2 className="font-serif text-4xl">{section.heading}</h2>
                      {section.buttonUrl && (
                        <Link href={section.buttonUrl} className="mt-8 inline-block bg-linen px-8 py-4 text-xs font-bold uppercase tracking-widest text-canopy transition-colors hover:bg-white">
                          {section.buttonText || "Learn More"}
                        </Link>
                      )}
                    </div>
                  </section>
                );

              default:
                return null;
            }
          })
        )}
      </div>

      <SiteFooter />
    </main>
  );
}