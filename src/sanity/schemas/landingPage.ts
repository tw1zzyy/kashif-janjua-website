// src/sanity/schemas/landingPage.ts
export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    { name: 'heroTitleEn', title: 'Hero Title (EN)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'heroTitleCs', title: 'Hero Title (CS)', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'heroSubtitleEn', title: 'Hero Subtitle (EN)', type: 'text' },
    { name: 'heroSubtitleCs', title: 'Hero Subtitle (CS)', type: 'text' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    { name: 'aboutTextEn', title: 'About Text (EN)', type: 'text' },
    { name: 'aboutTextCs', title: 'About Text (CS)', type: 'text' },
    { name: 'aboutImage', title: 'About Image', type: 'image', options: { hotspot: true } },
    // Linked References
    { name: 'featuredBooks', title: 'Featured Books', type: 'array', of: [{ type: 'reference', to: [{ type: 'book' }] }] },
    { name: 'featuredArticles', title: 'Featured Articles', type: 'array', of: [{ type: 'reference', to: [{ type: 'article' }] }] },
  ],
};
