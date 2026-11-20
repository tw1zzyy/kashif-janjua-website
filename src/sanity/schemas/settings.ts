// src/sanity/schemas/settings.ts
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'siteTitle', title: 'Site Title', type: 'string' },
    { name: 'email', title: 'Contact Email', type: 'string' },
    { name: 'socialLinks', title: 'Social Links', type: 'array', of: [{ type: 'object', fields: [{ name: 'platform', type: 'string' }, { name: 'url', type: 'url' }] }] },
  ],
};
