import { isSanityConfigured } from "@/lib/sanity";
import { Studio } from "./Studio";

export default function StudioPage() {
  if (isSanityConfigured) {
    return <Studio />;
  }

  return (
    <main className="grid min-h-screen place-items-center bg-linen px-5">
      <div className="max-w-xl bg-white p-8">
        <p className="text-sm uppercase tracking-[0.24em] text-clay">Sanity Studio</p>
        <h1 className="mt-3 font-serif text-4xl text-canopy">CMS route ready.</h1>
        <p className="mt-5 leading-8 text-ink/75">
          Add your Sanity project ID and dataset to Vercel environment variables, then this route becomes the embedded editor for ANRF content.
        </p>
      </div>
    </main>
  );
}
