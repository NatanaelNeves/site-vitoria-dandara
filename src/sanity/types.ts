// src/sanity/types.ts

import type { Image as SanityImage, Slug as SanitySlug } from 'sanity'

// Definindo a estrutura de um Post
export interface Post {
  _id: string;
  _type: 'post';
  title?: string;
  slug?: SanitySlug;
  mainImage?: SanityImage;
  excerpt?: string;
  publishedAt?: string;
  body?: any[]; // O corpo do texto rico (Portable Text)
}