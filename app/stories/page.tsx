import Link from "next/link";
import type { Metadata } from "next";
import { NextStepCta } from "@/components/NextStepCta";
import { PageShell } from "@/components/PageShell";
import { stories } from "@/lib/content";
import { storiesQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Stories",
  description: "Read ANRF blogs, documentation, field notes, photo stories and video updates.",
};

export default async function StoriesPage() {
  const fetchedStories = await sanityFetch<typeof stories | null>(storiesQuery, {}, stories);
  const storyItems = fetchedStories?.length ? fetchedStories : stories;

  return (
    <PageShell>
      <main className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.24em] text-clay">Stories</p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-canopy md:text-6xl">Blogs, documentation, photo stories and videos.</h1>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {storyItems.map((story) => (
            <Link key={story.slug} href={`/stories/${story.slug}`} className="border border-canopy/15 bg-linen p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-moss">{story.category}</p>
              <h2 className="mt-4 font-serif text-2xl text-canopy">{story.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/75">{story.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
      </main>
      <NextStepCta
        eyebrow="Contact"
        title="Have a collaboration, documentation or media question?"
        text="Use the contact page as the simple next step while the CMS content grows."
        href="/contact"
        label="Contact ANRF"
      />
    </PageShell>
  );
}
