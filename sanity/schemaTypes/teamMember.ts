import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "role", title: "Role / Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "image", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Display Order (1, 2, 3...)", type: "number", description: "Controls the order they appear on the website." }),
  ],
});