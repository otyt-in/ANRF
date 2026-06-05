import { defineField, defineType } from "sanity";

export const story = defineType({
  name: "story",
  title: "Story",
  type: "document",
  description: "Content for the Stories page and homepage story cards: blogs, documentation, field updates, videos or photo stories.",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: "Controls the label shown on story cards.",
      options: {
        list: ["Blog", "Documentation", "Field update", "Photo story", "Video", "Announcement"],
      },
    }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3, description: "Short summary shown on story cards." }),
    defineField({ name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } }),
    defineField({ name: "publishedAt", title: "Published at", type: "datetime" }),
    defineField({ name: "videoUrl", title: "Video URL", type: "url" }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
  ],
});
