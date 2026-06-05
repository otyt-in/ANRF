import imageUrlBuilder from "@sanity/image-url";
import { isSanityConfigured, sanityClient } from "./sanity";

type SanityImage = {
  asset?: {
    _ref?: string;
    _id?: string;
    url?: string;
  };
};

const builder = imageUrlBuilder(sanityClient);

export function getImageUrl(image: SanityImage | null | undefined, fallback: string, width = 1600) {
  if (!isSanityConfigured || !image?.asset) {
    return fallback;
  }

  try {
    return builder.image(image).width(width).auto("format").fit("max").url();
  } catch {
    return fallback;
  }
}
