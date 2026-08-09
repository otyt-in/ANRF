import { defineField, defineType } from "sanity";
export const research = defineType({
  name: "research",
  title: "Research Report",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "date", title: "Publication Date", type: "date" }),
    defineField({ name: "file", title: "PDF Document", type: "file" }),
  ],
});