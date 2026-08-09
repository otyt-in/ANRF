import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Global Footer",
  type: "document",
  description: "Manage the content inside the bottom footer.",
  fields: [
    defineField({
      name: "description",
      title: "Brief Description",
      type: "text",
      rows: 3,
      description: "A short summary of the foundation appearing in the footer.",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Global Footer" }),
  },
});