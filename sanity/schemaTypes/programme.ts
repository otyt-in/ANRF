import { defineField, defineType } from "sanity";

export const programme = defineType({
  name: "programme",
  title: "Programme",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Programme Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ 
      name: "slug", 
      title: "URL Slug", 
      type: "slug", 
      options: { source: "title" }, 
      description: "Click 'Generate' to create a URL-friendly path (e.g., social-support).",
      validation: (Rule) => Rule.required() 
    }),
    defineField({ 
      name: "excerpt", 
      title: "Card Excerpt", 
      type: "text", 
      rows: 3, 
      description: "The short description that appears on the /work hub page cards." 
    }),
  ],
});