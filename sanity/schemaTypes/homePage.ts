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
      of: [
        // 1. Hero Block
        defineArrayMember({
          name: "heroBlock",
          title: "Hero Section",
          type: "object",
          fields: [
            defineField({ name: "kicker", title: "Eyebrow / Location", type: "string", description: "e.g., Sanavalli, Mundgod, Karnataka" }),
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "subheading", title: "Subheading", type: "text", rows: 2 }),
            defineField({ name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } }),
            defineField({ name: "statValue", title: "Sidebar Stat Value", type: "string" }),
            defineField({ name: "statText", title: "Sidebar Stat Text", type: "text", rows: 2 }),
            defineField({
              name: "ctas",
              title: "Hero Buttons",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "label", title: "Label", type: "string" }),
                    defineField({ name: "url", title: "URL", type: "string" }),
                    defineField({ name: "isPrimary", title: "Is Primary?", type: "boolean" })
                  ]
                }
              ]
            })
          ],
          preview: { prepare: () => ({ title: "Hero Section" }) },
        }),
        
        // 2. The Model Block
        defineArrayMember({
          name: "modelBlock",
          title: "The Model (Text + Impact)",
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Section Heading", type: "string" }),
            defineField({ name: "body", title: "Body Text", type: "text", rows: 4 }),
            defineField({
              name: "metrics",
              title: "Impact Metrics",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "value", title: "Number", type: "string" }),
                    defineField({ name: "label", title: "Label", type: "string" }),
                  ],
                }
              ],
            }),
          ],
          preview: { prepare: () => ({ title: "The Model (Text + Impact)" }) },
        }),

        // 3. What We Do (Two Threads) Block
        defineArrayMember({
          name: "workThreadsBlock",
          title: "What We Do (Two Threads)",
          type: "object",
          fields: [
            defineField({ name: "kicker", title: "Small Kicker Text", type: "string" }),
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } }),
            defineField({
              name: "cards",
              title: "Work Cards",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "title", title: "Card Title", type: "string" }),
                    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
                    defineField({ name: "url", title: "Link URL", type: "string" }),
                    defineField({ name: "image", title: "Background Image", type: "image", options: { hotspot: true } })
                  ]
                }
              ]
            })
          ],
          preview: { prepare: () => ({ title: "What We Do (Two Threads)" }) },
        }),

        // 4. Image with Text Block (Long View)
        defineArrayMember({
          name: "imageWithTextBlock",
          title: "Image & Text Split",
          type: "object",
          fields: [
            defineField({ name: "kicker", title: "Small Kicker Text", type: "string" }),
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body Text", type: "text", rows: 4 }),
            defineField({ name: "image", title: "Side Image", type: "image", options: { hotspot: true } }),
          ],
          preview: { prepare: () => ({ title: "Image & Text Split" }) },
        }),

        // 5. Video Block
        defineArrayMember({
          name: "videoBlock",
          title: "Featured Video",
          type: "object",
          fields: [
            defineField({ name: "kicker", title: "Small Kicker Text", type: "string" }),
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body Text", type: "text", rows: 3 }),
            defineField({ name: "videoUrl", title: "YouTube Embed URL", type: "string", description: "Use the embed URL format." }),
            defineField({ name: "posterImage", title: "Video Poster Image", type: "image", options: { hotspot: true } }),
          ],
          preview: { prepare: () => ({ title: "Featured Video" }) },
        }),

        // 6. Follow the Field (Social) Block
        defineArrayMember({
          name: "socialBlock",
          title: "Follow the Field (Social)",
          type: "object",
          fields: [
            defineField({ name: "kicker", title: "Small Kicker Text", type: "string" }),
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body Text", type: "text", rows: 3 }),
          ],
          preview: { prepare: () => ({ title: "Follow the Field (Social)" }) },
        }),

        // 7. Partners Block
        defineArrayMember({
          name: "partnersBlock",
          title: "Partners Grid",
          type: "object",
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({
              name: "partners",
              title: "Partners",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "name", title: "Partner Name", type: "string" }),
                    defineField({ name: "description", title: "Short Description", type: "text", rows: 2 }),
                    defineField({ name: "logo", title: "Partner Logo", type: "image" }),
                  ]
                }
              ]
            })
          ],
          preview: { prepare: () => ({ title: "Partners Grid" }) },
        }),

        // 8. Get Involved / Donate CTA Block
        defineArrayMember({
          name: "ctaBlock",
          title: "Get Involved / Donate",
          type: "object",
          fields: [
            defineField({ name: "kicker", title: "Small Kicker Text", type: "string" }),
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body Text", type: "text", rows: 2 }),
            defineField({ name: "buttonText", title: "Primary Button Text", type: "string" }),
            defineField({ name: "buttonUrl", title: "Primary Button URL", type: "string" }),
          ],
          preview: { prepare: () => ({ title: "Get Involved / Donate" }) },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page Layout" }),
  },
});