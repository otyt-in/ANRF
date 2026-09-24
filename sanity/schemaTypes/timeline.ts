import { defineField, defineType } from 'sanity';

export const timeline = defineType({
  name: 'timelineEvent',
  title: 'Timeline Event',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: 'Date (Required)',
      description: 'Pick any day in the month. The website will mathematically sort by this date but only display the Month and Year.',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
    },
  },
});