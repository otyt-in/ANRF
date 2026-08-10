import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { sanityFetch } from "@/lib/sanity";
import { v2TimelineQuery, v2ResearchQuery, v2TeamQuery } from "@/lib/queries";
import { FileText, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "The history, mission, and scientific research of the Aranya Niran Rosewood Foundation.",
};

export default async function AboutPage() {
  const timeline = await sanityFetch<any[]>(v2TimelineQuery, {}, []);
  const research = await sanityFetch<any[]>(v2ResearchQuery, {}, []);
  const team = await sanityFetch<any[]>(v2TeamQuery, {}, []);

  return (
    <main className="flex min-h-screen flex-col bg-linen">
      <SiteHeader />
      
      <div className="flex-grow">
        {/* Narrative Section */}
        <section className="px-5 pt-48 pb-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-clay">Our Origins</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-canopy md:text-6xl">
              Rooted in a deep, multi-generational relationship with East Indian Rosewood.
            </h1>
          </div>
          
          <div className="mx-auto mt-20 grid max-w-6xl gap-12 md:grid-cols-2">
            <div className="border-t border-canopy/20 pt-6">
              <h2 className="font-serif text-3xl text-canopy">The Catalyst</h2>
              <p className="mt-4 text-lg leading-8 text-ink/80">
                The Aranya Niran Rosewood Foundation blossomed from the heart of Overseas Traders, a third-generation family business supplying acoustic and electric guitar makers globally. Having worked with <em>Dalbergia latifolia</em> for over 40 years, we recognized the urgent need to give back to the species that has given the music world so much.
              </p>
            </div>
            <div className="border-t border-canopy/20 pt-6">
              <h2 className="font-serif text-3xl text-canopy">CITES & Science</h2>
              <p className="mt-4 text-lg leading-8 text-ink/80">
                In 2016, the Dalbergia genus was listed in CITES Appendix II. This pivotal moment revealed a stark scarcity of scientific data regarding the natural regeneration of East Indian Rosewood. Fueled by a profound interest in securing the species' future, we initiated independent field studies and reforestation efforts.
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Timeline Section */}
        <section className="bg-white px-5 py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-4xl text-canopy">Timeline & Milestones</h2>
            <div className="mt-16 grid gap-6">
              {timeline.length === 0 ? (
                <p className="text-center text-ink/60">No timeline events published yet.</p>
              ) : (
                timeline.map((item) => (
                  <div key={item._id} className="flex flex-col gap-4 border-b border-canopy/10 pb-6 sm:flex-row sm:items-center sm:gap-10">
                    <div className="font-serif text-4xl font-bold text-sage sm:w-32">{item.year}</div>
                    <div className="text-lg text-ink/80">{item.event}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Dynamic Research & Documentation Section */}
        <section className="texture bg-bone px-5 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-serif text-4xl text-canopy">Research & Documentation</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink/70">
              We believe true conservation is guided by data. Download our independent studies and field reports below.
            </p>
            
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {research.length === 0 ? (
                <p className="col-span-full text-center text-ink/60">No research reports published yet.</p>
              ) : (
                research.map((doc) => (
                  <a 
                    key={doc._id} 
                    href={doc.fileUrl || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5 border border-canopy/15 bg-white p-6 transition hover:border-canopy hover:shadow-md"
                  >
                    <div className="mt-1 text-clay"><FileText size={28} /></div>
                    <div className="flex-grow">
                      <h3 className="font-serif text-2xl text-canopy group-hover:underline">{doc.title}</h3>
                      {doc.date && <p className="mt-2 text-sm text-ink/60">{new Date(doc.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>}
                    </div>
                    <div className="text-canopy/40 transition group-hover:text-canopy"><Download size={20} /></div>
                  </a>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Dynamic Team Section */}
        <section className="bg-white px-5 py-24">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-serif text-4xl text-canopy">Our Team</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink/70">
              A collective of conservationists, scientists, and creators dedicated to a 100-year horizon.
            </p>
            
            <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-14">
              {team.length === 0 ? (
                <p className="w-full text-center text-ink/60">No team members published yet.</p>
              ) : (
                team.map((member) => (
                  <div key={member._id} className="group w-full max-w-[260px] text-center">
                    <div className="mx-auto aspect-[3/4] w-full overflow-hidden bg-linen shadow-sm">
                      {member.imageUrl ? (
                        <img 
                          src={member.imageUrl} 
                          alt={member.name} 
                          className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-sm text-ink/30">No Image</div>
                      )}
                    </div>
                    <h3 className="mt-7 font-serif text-[26px] leading-tight text-canopy">{member.name}</h3>
                    <p className="mt-3 text-[11px] font-black tracking-[0.18em] text-clay uppercase leading-relaxed">{member.role}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

      </div>
      <SiteFooter />
    </main>
  );
}