import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site title", type: "string" }),
    defineField({ name: "description", title: "SEO description", type: "text", rows: 3 }),
    defineField({ name: "contactEmail", title: "Contact email", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
