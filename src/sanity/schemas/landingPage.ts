// src/sanity/schemas/landingPage.ts
export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'heroTitleEn',
      title: 'Hero Title (EN)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroTitleCs',
      title: 'Hero Title (CS)',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroSubtitleEn',
      title: 'Hero Subtitle (EN)',
      type: 'text',
    },
    {
      name: 'heroSubtitleCs',
      title: 'Hero Subtitle (CS)',
      type: 'text',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'featuredContentEn',
      title: 'Featured Content (EN)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'featuredContentCs',
      title: 'Featured Content (CS)',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
};
