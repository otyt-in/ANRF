import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Global Site Settings",
  type: "document",
  description: "Global brand variables, contact details, and social links.",
  fields: [
    defineField({ 
      name: "title", 
      title: "Organization Name", 
      type: "string", 
      description: "e.g., Aranya Niran Rosewood Foundation",
      validation: (Rule) => Rule.required() 
    }),
    defineField({ 
      name: "contactEmail", 
      title: "Public Contact Email", 
      type: "string", 
      validation: (Rule) => Rule.email() 
    }),
    defineField({ 
      name: "location", 
      title: "Headquarters Location", 
      type: "string",
      description: "e.g., Sanavalli, Mundgod, Karnataka, India"
    }),
    defineField({ 
      name: "instagramUrl", 
      title: "Instagram URL", 
      type: "url", 
      description: "The primary living journal for ANRF." 
    }),
    defineField({ 
      name: "youtubeUrl", 
      title: "YouTube URL", 
      type: "url" 
    }),
  ],
  preview: {
    prepare: () => ({ title: "Global Site Settings" }),
  },
});