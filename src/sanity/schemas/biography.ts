// src/sanity/schemas/biography.ts
export default {
  name: 'biography',
  title: 'Biography',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content (EN)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'contentCs',
      title: 'Content (CS)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'portrait',
      title: 'Portrait Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
