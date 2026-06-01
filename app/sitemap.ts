import type { MetadataRoute } from "next";
import { stories } from "@/lib/content";

const baseUrl = "https://anrf-chi.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/work", "/work/rosewood-conservation", "/work/social-support", "/stories", "/contact"];
  const storyRoutes = stories.map((story) => `/stories/${story.slug}`);

  return [...routes, ...storyRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));
}
