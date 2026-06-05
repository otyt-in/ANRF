import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  description: "Controls the editable text, impact numbers, images and featured video on the website homepage.",
  initialValue: {
    heroEyebrow: "Sanavalli, Mundgod, Karnataka",
    heroTitle: "Where Nature & Communities Thrive",
    heroText:
      "A 100-year conservation effort for East Indian Rosewood, paired with rural women's empowerment around the land that sustains it.",
    impact: [
      { value: "2000+", label: "Rosewood saplings planted" },
      { value: "30", label: "Acres secured near Mundgod" },
      { value: "2", label: "Forest pilot plots identified" },
      { value: "1", label: "Women-led initiative growing" },
    ],
    longViewTitle: "A rosewood tree asks for patience.",
    longViewText:
      "ANRF's digital home should feel grounded, patient, field-based and credible. The CMS will let the foundation publish updates, documentation, videos and photo essays as the work unfolds over years.",
    videoTitle: "Show the field, not just the mission.",
    videoText:
      "The homepage is prepared for your ANRF film. Later, Sanity can control the video URL, poster image and supporting copy.",
  },
  fields: [
    defineField({ name: "heroEyebrow", title: "Hero eyebrow", type: "string", description: "Small uppercase text above the main homepage headline." }),
    defineField({ name: "heroTitle", title: "Hero title", type: "string", description: "Main homepage headline.", validation: (Rule) => Rule.required() }),
    defineField({ name: "heroText", title: "Hero text", type: "text", rows: 3, description: "Short supporting copy below the main headline." }),
    defineField({ name: "heroImage", title: "Hero image", type: "image", description: "Large background image at the top of the homepage.", options: { hotspot: true } }),
    defineField({
      name: "impact",
      title: "Impact numbers",
      description: "Numbers shown in the homepage impact strip. Add, remove or reorder as needed.",
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
    defineField({ name: "longViewTitle", title: "Long-view section title", type: "string", description: "Headline for the section about long-term rosewood conservation." }),
    defineField({ name: "longViewText", title: "Long-view section text", type: "text", rows: 3 }),
    defineField({ name: "longViewImage", title: "Long-view image", type: "image", options: { hotspot: true } }),
    defineField({ name: "videoTitle", title: "Video section title", type: "string", description: "Headline beside the homepage video." }),
    defineField({ name: "videoText", title: "Video section text", type: "text", rows: 3 }),
    defineField({ name: "featuredVideoUrl", title: "Featured video URL", type: "url", description: "Use a specific YouTube video URL, not the channel URL." }),
    defineField({ name: "videoPosterImage", title: "Video poster image", type: "image", description: "Shown only when no featured video URL is set.", options: { hotspot: true } }),
    defineField({ name: "workBackgroundImage", title: "Work section background image", type: "image", options: { hotspot: true } }),
    defineField({ name: "rosewoodImage", title: "Rosewood conservation card image", type: "image", options: { hotspot: true } }),
    defineField({ name: "socialSupportImage", title: "Social support card image", type: "image", options: { hotspot: true } }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
