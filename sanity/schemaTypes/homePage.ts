import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "heroText", title: "Hero text", type: "text", rows: 3 }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "impact",
      title: "Impact numbers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
        },
      ],
    }),
    defineField({ name: "longViewTitle", title: "Long-view section title", type: "string" }),
    defineField({ name: "longViewText", title: "Long-view section text", type: "text", rows: 3 }),
    defineField({ name: "longViewImage", title: "Long-view image", type: "image", options: { hotspot: true } }),
    defineField({ name: "videoTitle", title: "Video section title", type: "string" }),
    defineField({ name: "videoText", title: "Video section text", type: "text", rows: 3 }),
    defineField({ name: "featuredVideoUrl", title: "Featured video URL", type: "url" }),
    defineField({ name: "videoPosterImage", title: "Video poster image", type: "image", options: { hotspot: true } }),
    defineField({ name: "workBackgroundImage", title: "Work section background image", type: "image", options: { hotspot: true } }),
    defineField({ name: "rosewoodImage", title: "Rosewood conservation card image", type: "image", options: { hotspot: true } }),
    defineField({ name: "socialSupportImage", title: "Social support card image", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
