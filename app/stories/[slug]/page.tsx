import { notFound } from "next/navigation";
import { stories } from "@/lib/content";
import { storyBySlugQuery } from "@/lib/queries";
import { sanityFetch } from "@/lib/sanity";

type Story = (typeof stories)[number] & {
  body?: unknown[];
};

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fallback = stories.find((item) => item.slug === slug) as Story | undefined;
  const fetchedStory = await sanityFetch<Story | null | undefined>(storyBySlugQuery, { slug }, fallback);
  const story = fetchedStory || fallback;

  if (!story) {
    notFound();
  }

  return (
    <main className="bg-linen px-5 py-24">
      <article className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.24em] text-clay">{story.category}</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-canopy">{story.title}</h1>
        <p className="mt-8 text-xl leading-9 text-ink/75">{story.excerpt}</p>
        <div className="mt-10 space-y-6 text-base leading-8 text-ink/78">
          <p>This is starter content. Once Sanity is connected, this page will render editable story body content, galleries, video embeds and attached documents.</p>
          <p>Use this section for field updates, technical documentation, project notes, interviews and visual stories from the ANRF site.</p>
        </div>
      </article>
    </main>
  );
}
