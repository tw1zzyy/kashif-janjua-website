// src/sanity/schemas/article.ts
export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'titleEn', title: 'Title (EN)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'titleCs', title: 'Title (CS)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titleEn' }, validation: (Rule: any) => Rule.required() },
    { name: 'publishedAt', title: 'Published Date', type: 'datetime' },
    { name: 'image', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'contentEn', title: 'Content (EN)', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'contentCs', title: 'Content (CS)', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
  ],
};
