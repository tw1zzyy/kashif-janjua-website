// src/sanity/schemas/book.ts
export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    { name: 'titleEn', title: 'Title (EN)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'titleCs', title: 'Title (CS)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'titleEn' }, validation: (Rule: any) => Rule.required() },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'publicationDate', title: 'Publication Date', type: 'date' },
    { name: 'publisher', title: 'Publisher', type: 'string' },
    { name: 'isbn', title: 'ISBN', type: 'string' },
    { name: 'descriptionEn', title: 'Description (EN)', type: 'text' },
    { name: 'descriptionCs', title: 'Description (CS)', type: 'text' },
    { name: 'pdfFile', title: 'PDF / Book File', type: 'file', options: { accept: '.pdf,.epub,.mobi' } },
  ],
};
