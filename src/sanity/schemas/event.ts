// src/sanity/schemas/event.ts
export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'titleEn', title: 'Title (EN)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'titleCs', title: 'Title (CS)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titleEn' }, validation: (Rule: any) => Rule.required() },
    { name: 'date', title: 'Event Date & Time', type: 'datetime', validation: (Rule: any) => Rule.required() },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'descriptionEn', title: 'Description (EN)', type: 'text' },
    { name: 'descriptionCs', title: 'Description (CS)', type: 'text' },
    { name: 'contentEn', title: 'Full Content (EN)', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'contentCs', title: 'Full Content (CS)', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'registrationLink', title: 'Registration Link', type: 'url' },
    { name: 'image', title: 'Event Image', type: 'image', options: { hotspot: true } },
  ],
};
