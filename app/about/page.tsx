import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { sanityFetch } from "@/lib/sanity";
import { v2TimelineQuery, v2ResearchQuery, v2TeamQuery } from "@/lib/queries";

function formatTimelineDate(dateString: string) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default async function AboutPage() {
  // Fetching data passing the mandatory 3 arguments for your project's specific setup
  const timeline = await sanityFetch(v2TimelineQuery, {}, []) || [];
  const research = await sanityFetch(v2ResearchQuery, {}, []) || [];
  const team = await sanityFetch(v2TeamQuery, {}, []) || [];

  return (
    <main className="min-h-screen bg-stone-50 flex flex-col">
      <SiteHeader />

      {/* 1. Our Origins */}
      <section className="px-5 pt-48 pb-24 max-w-5xl mx-auto text-center flex-grow">
        <h4 className="text-canopy font-bold tracking-widest text-sm uppercase mb-6">Our Origins</h4>
        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-16 leading-tight max-w-4xl mx-auto">
          Rooted in a deep, multi-generational relationship with East Indian Rosewood.
        </h1>
        <div className="grid md:grid-cols-2 gap-12 text-left pt-8 border-t border-stone-200">
          <div>
            <h3 className="text-2xl font-serif text-stone-900 mb-4">The Catalyst</h3>
            <p className="text-stone-600 leading-relaxed">
              The Aranya Niran Rosewood Foundation blossomed from the heart of Overseas Traders, a third-generation family business supplying acoustic and electric guitar makers globally. Having worked with Dalbergia latifolia for over 40 years, we recognized the urgent need to give back to the species that has given the music world so much.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif text-stone-900 mb-4">CITES & Science</h3>
            <p className="text-stone-600 leading-relaxed">
              In 2016, the Dalbergia genus was listed in CITES Appendix II. This pivotal moment revealed a stark scarcity of scientific data regarding the natural regeneration of East Indian Rosewood. Fueled by a profound interest in securing the species' future, we initiated independent field studies and reforestation efforts.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Zig-Zag Timeline */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif text-canopy mb-4">Timeline & Milestones</h2>
            <div className="w-16 h-px bg-canopy/30 mx-auto"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Central Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-canopy/20 -translate-x-1/2"></div>
            
            {timeline.map((event: any, index: number) => {
              const isEven = index % 2 === 0;
              return (
                <div key={event._id} className={`relative flex flex-col md:flex-row justify-between mb-16 md:mb-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                   
                   {/* Timeline Dot */}
                   <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-canopy border-4 border-white -translate-x-1/2 mt-1.5 md:mt-0 md:top-1 z-10"></div>
                   
                   {/* Content Box */}
                   <div className="ml-8 md:ml-0 md:w-[45%]">
                     <span className="text-canopy font-bold tracking-widest text-sm uppercase">
                       {formatTimelineDate(event.date)}
                     </span>
                     <h3 className="text-2xl font-serif text-stone-900 mt-2 mb-3">{event.title}</h3>
                     <p className="text-stone-600 leading-relaxed">{event.description}</p>
                   </div>
                   
                   {/* Empty spacer for the alternating layout */}
                   <div className="hidden md:block md:w-[45%]"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Research Reports */}
      {research && research.length > 0 && (
        <section className="py-24 bg-stone-50 border-t border-stone-200">
          <div className="max-w-4xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif text-stone-900 mb-4">Research & Documentation</h2>
              <div className="w-16 h-px bg-canopy/30 mx-auto"></div>
            </div>
            <div className="space-y-4">
              {research.map((doc: any) => (
                <a 
                  key={doc._id} 
                  href={doc.fileUrl || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block p-6 bg-white border border-stone-200 hover:border-canopy hover:shadow-md transition duration-300 flex justify-between items-center group"
                >
                  <h3 className="text-lg font-serif text-stone-900 group-hover:text-canopy transition-colors">{doc.title}</h3>
                  <span className="text-canopy text-sm uppercase tracking-widest font-bold">Read &rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Team Section */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Our Team</h2>
          <div className="w-16 h-px bg-canopy/30 mx-auto mb-16"></div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {team && team.map((member: any) => (
              <div key={member._id} className="w-full sm:w-[45%] md:w-[22%] max-w-[260px] text-center group">
                <div className="aspect-[3/4] mb-6 overflow-hidden bg-stone-100">
                  {member.imageUrl ? (
                    <img 
                      src={member.imageUrl} 
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-stone-200"></div>
                  )}
                </div>
                <h3 className="text-lg font-serif text-stone-900">{member.name}</h3>
                <p className="text-canopy uppercase tracking-[0.18em] text-[11px] font-bold mt-3">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}