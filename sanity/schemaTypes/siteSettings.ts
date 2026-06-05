import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  description: "Global website settings such as social links, location and future contact details.",
  initialValue: {
    title: "Aranya Niran Rosewood Foundation",
    description: "ANRF conserves East Indian Rosewood and supports rural women around Sanavalli, Mundgod, Karnataka.",
    location: "Sanavalli, Mundgod, Karnataka, India",
    youtubeUrl: "https://www.youtube.com/channel/UC8XItbqN1YjizVAoo6MaAlw",
    instagramUrl: "https://www.instagram.com/thearanyaniran/",
  },
  fields: [
    defineField({ name: "title", title: "Site title", type: "string", description: "Full organization name." }),
    defineField({ name: "description", title: "SEO description", type: "text", rows: 3, description: "Short description used for search/social metadata later." }),
    defineField({ name: "contactEmail", title: "Contact email", type: "string", description: "Public email address when ready." }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "youtubeUrl", title: "YouTube URL", type: "url", description: "Used by the homepage social card." }),
    defineField({ name: "instagramUrl", title: "Instagram URL", type: "url", description: "Used by the homepage social card." }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
