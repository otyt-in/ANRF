export const homePageQuery = `*[_type == "homePage"][0]{
  heroEyebrow,
  heroTitle,
  heroText,
  longViewTitle,
  longViewText,
  videoTitle,
  videoText,
  featuredVideoUrl,
  heroImage,
  workBackgroundImage,
  rosewoodImage,
  socialSupportImage,
  longViewImage,
  videoPosterImage,
  "impact": impact[]{value, label}
}`;

export const storiesQuery = `*[_type == "story"] | order(publishedAt desc, _createdAt desc) {
  title,
  "slug": slug.current,
  category,
  excerpt
}`;

export const storyBySlugQuery = `*[_type == "story" && slug.current == $slug][0]{
  title,
  "slug": slug.current,
  category,
  excerpt,
  body
}`;

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  youtubeUrl,
  instagramUrl
}`;


export const v2SiteSettingsQuery = `*[_type == "siteSettings"][0]`;
export const v2NavigationQuery = `*[_type == "navigation"][0]`;
export const v2FooterQuery = `*[_type == "footer"][0]`;

export const v2HomePageQuery = `*[_type == "homePage"][0]{ sections }`;
