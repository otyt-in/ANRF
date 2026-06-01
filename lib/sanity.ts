import { createClient } from "next-sanity";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const isSanityConfigured = Boolean(sanityProjectId && sanityProjectId !== "replace-me");

export const sanityClient = createClient({
  projectId: sanityProjectId || "replace-me",
  dataset: sanityDataset,
  apiVersion: "2026-06-01",
  useCdn: true,
});

export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}, fallback: T): Promise<T> {
  if (!isSanityConfigured) {
    return fallback;
  }

  try {
    return await sanityClient.fetch<T>(query, params, { next: { revalidate: 60 } });
  } catch {
    return fallback;
  }
}
