// src/sanity/schemaTypes/postType.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post do Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Post',
      type: 'string',
      validation: Rule => Rule.required().error('Um título é obrigatório.'),
    }),
    defineField({
      name: 'slug',
      title: 'URL (Slug)',
      type: 'slug',
      description: 'Clique em "Generate" para criar a URL a partir do título.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem de Destaque',
      type: 'image',
      description: 'Imagem que aparecerá no topo do post e na listagem do blog.',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      description: 'Associe uma ou mais categorias a este post.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo (Chamada)',
      type: 'text',
      description: 'Um resumo curto do post para a página principal do blog (até 200 caracteres).',
      rows: 3,
      validation: Rule => Rule.max(200).error('O resumo não pode ter mais de 200 caracteres.'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo do Post',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: {hotspot: true} },
      ],
      description: 'Aqui é onde você escreve o artigo completo.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})