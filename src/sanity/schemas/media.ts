// src/sanity/schemas/media.ts
export default {
  name: 'mediaItem',
  title: 'Media Item',
  type: 'document',
  fields: [
    { name: 'titleEn', title: 'Title (EN)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'titleCs', title: 'Title (CS)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'mediaType', title: 'Media Type', type: 'string', options: { list: ['Video', 'Podcast', 'Interview', 'Lecture'] } },
    { name: 'embedUrl', title: 'Embed/External URL', type: 'url', validation: (Rule: any) => Rule.required() },
    { name: 'date', title: 'Publication Date', type: 'datetime' },
  ],
};
