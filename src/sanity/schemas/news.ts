// src/sanity/schemas/news.ts
export default {
  name: 'news',
  title: 'News Entry',
  type: 'document',
  fields: [
    { name: 'titleEn', title: 'Title (EN)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'titleCs', title: 'Title (CS)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'date', title: 'Date', type: 'datetime' },
    { name: 'contentEn', title: 'Content (EN)', type: 'text' },
    { name: 'contentCs', title: 'Content (CS)', type: 'text' },
  ],
};
