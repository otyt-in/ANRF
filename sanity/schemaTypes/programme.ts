import { defineField, defineType, defineArrayMember } from "sanity";

export const programme = defineType({
  name: "programme",
  title: "Programme",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Internal Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "URL Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "excerpt", title: "Card Excerpt", type: "text", rows: 3, description: "Appears on the /work hub page." }),
    
    // Green Hero Section Fields
    defineField({ name: "heroKicker", title: "Hero Kicker (e.g., Rosewood conservation)", type: "string" }),
    defineField({ name: "heroHeading", title: "Hero Heading", type: "text", rows: 2 }),
    
    // Modular Page Builder for the Programme Body
    defineField({
      name: "blocks",
      title: "Programme Content Blocks",
      type: "array",
      of: [
        // The V1 Rosewood 3-Column Grid
        defineArrayMember({
          name: "gridBlock",
          title: "3-Column Cards Grid",
          type: "object",
          fields: [
            defineField({
              name: "items",
              title: "Grid Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "title", title: "Card Title", type: "string" }),
                    defineField({ name: "copy", title: "Card Text", type: "text", rows: 3 })
                  ]
                }
              ]
            })
          ],
          preview: { prepare: () => ({ title: "3-Column Cards Grid" }) }
        }),
        // The V1 Naya Nari Badge & Text Layout
        defineArrayMember({
          name: "badgeBlock",
          title: "Initiative Badge & Text",
          type: "object",
          fields: [
            defineField({ name: "badgeInitials", title: "Badge Initials (e.g., NN)", type: "string" }),
            defineField({ name: "badgeTitle", title: "Badge Title (e.g., Naya Nari)", type: "string" }),
            defineField({ name: "badgeSubtitle", title: "Badge Subtitle", type: "string" }),
            defineField({ name: "body", title: "Body Text", type: "array", of: [{ type: "block" }] })
          ],
          preview: { prepare: () => ({ title: "Initiative Badge & Text" }) }
        })
      ]
    })
  ],
});