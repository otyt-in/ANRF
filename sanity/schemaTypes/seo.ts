import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "Global SEO",
  type: "document",
  description: "Default search engine and social media metadata.",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Default Meta Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaDescription",
      title: "Default Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "ogImage",
      title: "Default Social Share Image (OG Image)",
      type: "image",
      description: "Recommended size: 1200x630px.",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Global SEO Defaults" }),
  },
});