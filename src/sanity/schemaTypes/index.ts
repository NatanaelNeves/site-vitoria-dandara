// src/sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { authorType } from './authorType'
import postType from './postType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    categoryType,
    authorType,
    blockContentType
  ],
}