// src/sanity/client.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: import.meta.env.SANITY_DATASET,
  apiVersion: import.meta.env.SANITY_API_VERSION,
  useCdn: false, // Set to true for cached public responses, false if you want fresh/draft content
  token: import.meta.env.SANITY_READ_TOKEN,
});
