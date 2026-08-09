import { defineField, defineType } from "sanity";
export const timeline = defineType({
  name: "timeline",
  title: "Timeline Event",
  type: "document",
  fields: [
    defineField({ name: "year", title: "Year", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "event", title: "Event", type: "string" }),
  ],
  preview: { select: { title: "event", subtitle: "year" } },
});