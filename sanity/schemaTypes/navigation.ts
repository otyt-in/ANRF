import { defineField, defineType } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Global Navigation",
  type: "document",
  description: "Manage the links in the top header menu.",
  fields: [
    defineField({
      name: "links",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ 
              name: "label", 
              title: "Label", 
              type: "string", 
              description: "The text shown in the menu (e.g., About Us)",
              validation: (Rule) => Rule.required() 
            }),
            defineField({ 
              name: "href", 
              title: "URL / Path", 
              type: "string", 
              description: "The destination path (e.g., /about)",
              validation: (Rule) => Rule.required() 
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Global Navigation" }),
  },
});