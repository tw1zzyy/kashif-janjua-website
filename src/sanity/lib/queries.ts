import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import { client } from '../client';

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Helper to fetch content for any document type with localization
export async function getDocumentBySlug(type: string, slug: string, lang: string) {
  const suffix = lang === 'cs' ? 'Cs' : 'En';
  const query = `*[_type == $type && slug.current == $slug][0]{
    "title": title${type === 'biography' ? '' : suffix},
    "content": content${type === 'biography' ? (lang === 'cs' ? 'Cs' : '') : suffix},
    "image": image.asset->url,
    "portrait": portrait.asset->url
  }`;
  return await client.fetch(query, { type, slug });
}
