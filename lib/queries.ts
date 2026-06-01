export const homePageQuery = `*[_type == "homePage"][0]{
  heroEyebrow,
  heroTitle,
  heroText,
  longViewTitle,
  longViewText,
  videoTitle,
  videoText,
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
