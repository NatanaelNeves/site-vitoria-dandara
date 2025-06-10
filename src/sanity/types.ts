// src/sanity/types.ts

import type { Image as SanityImage, Slug as SanitySlug } from 'sanity'
import type { PortableTextBlock } from '@portabletext/types'

// Definindo a estrutura de um Post
export interface Post {
  _id: string;
  _type: 'post';
  title?: string;
  slug?: SanitySlug;
  mainImage?: SanityImage;
  excerpt?: string;
  publishedAt?: string;
  body?: PortableTextBlock[]; // <-- CORREÇÃO APLICADA AQUI
}