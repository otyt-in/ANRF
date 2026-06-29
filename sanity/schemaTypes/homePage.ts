import { defineField, defineType, defineArrayMember } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  description: "Manage the modular sections of the homepage.",
  fields: [
    defineField({
      name: "title",
      title: "Internal Title",
      type: "string",
      initialValue: "Home Page Settings",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      description: "Add, edit, and reorder sections on the homepage.",
      of: [
        // 1. Hero Block
        defineArrayMember({
          name: "heroBlock",
          title: "Hero Section",
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "subheading", title: "Subheading", type: "text", rows: 2 }),
            defineField({ name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } }),
          ],
          preview: { prepare: () => ({ title: "Hero Section" }) },
        }),
        
        // 2. Mission Block
        defineArrayMember({
          name: "missionBlock",
          title: "Mission Section",
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Section Heading", type: "string" }),
            defineField({ name: "body", title: "Body Text", type: "text", rows: 4 }),
          ],
          preview: { prepare: () => ({ title: "Mission Section" }) },
        }),

        // 3. Impact Metrics Block
        defineArrayMember({
          name: "impactBlock",
          title: "Impact Numbers",
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Section Heading", type: "string" }),
            defineField({
              name: "metrics",
              title: "Metrics",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "value", title: "Number (e.g., 2000+)", type: "string" }),
                    defineField({ name: "label", title: "Label (e.g., Saplings Planted)", type: "string" }),
                  ],
                }
              ],
            }),
          ],
          preview: { prepare: () => ({ title: "Impact Numbers" }) },
        }),

        // 4. Call To Action Block
        defineArrayMember({
          name: "ctaBlock",
          title: "Call To Action",
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "buttonText", title: "Button Text", type: "string" }),
            defineField({ name: "buttonUrl", title: "Button URL", type: "string" }),
          ],
          preview: { prepare: () => ({ title: "Call To Action" }) },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page Layout" }),
  },
});