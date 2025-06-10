// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import type { Post } from '@/sanity/types'
import styles from './Post.module.css'
import ctaStyles from '../../Home.module.css'

type Props = {
  params: { slug: string }
}

// Interface para os dados do post que usaremos na página
interface PostPageData extends Post {
  categories?: { title: string }[];
}

// Função para gerar o SEO da página dinamicamente
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    excerpt
  }`
  const post: Post = await client.fetch(query, { slug: params.slug })

  if (!post) {
    return { title: 'Post não encontrado' }
  }

  return {
    title: `${post.title} | Blog Vitória Dandara`,
    description: post.excerpt,
  }
}

// Função para buscar os dados completos do post
async function getPost(slug: string): Promise<PostPageData> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    body,
    publishedAt,
    "categories": categories[]->{title}
  }`
  const post = await client.fetch(query, { slug })
  return post
}

export default async function SinglePostPage({ params }: Props) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <article className="container">
        <header className={styles.postHeader}>
          {post.publishedAt && (
            <p className={styles.date}>
              {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          )}
          <h1>{post.title}</h1>
          <div className={styles.categories}>
            {post.categories?.map((category) => (
              <span key={category.title} className={styles.categoryTag}>
                {category.title}
              </span>
            ))}
          </div>
        </header>

        {post.mainImage && (
          <div className={styles.mainImage}>
            <Image
              src={urlForImage(post.mainImage)?.width(1200).url() || ''}
              alt={`Imagem de capa do post ${post.title}`}
              fill
            />
          </div>
        )}

        {post.body && (
          <div className={styles.postBody}>
            <PortableText value={post.body} />
          </div>
        )}
      </article>

      {/* Seção de CTA no final do post */}
      <section className={`${ctaStyles.section} ${ctaStyles.finalCtaSection}`} style={{marginTop: '5rem', padding: '4rem 1rem'}}>
          <div className="container">
             <h2 className={ctaStyles.sectionTitle}>Este conteúdo te ajudou?</h2>
             <p className="text-white text-xl mb-10">Esse é só o começo. A terapia é o espaço para aprofundar essas e outras questões. Vamos conversar?</p>
             <Link href="/contato" className={ctaStyles.heroButton}>
                Agendar uma sessão
            </Link>
          </div>
      </section>
    </>
  )
}