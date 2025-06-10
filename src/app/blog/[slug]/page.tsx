// src/app/blog/[slug]/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import styles from './Post.module.css'
import ctaStyles from '../../Home.module.css'

// Tipos para Next.js 15
interface PageProps {
  params: Promise<{ slug: string }>
}

// Componente da Página
export default async function SinglePostPage({ params }: PageProps) {
  // Await nos params para Next.js 15
  const { slug } = await params
  
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    body,
    publishedAt,
    "categories": categories[]->{title}
  }`
  const post = await client.fetch(query, { slug })

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
            {post.categories?.map((category: {title: string}) => (
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

// Função generateMetadata também precisa ser atualizada se você for adicioná-la de volta
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    "description": excerpt
  }`
  const post = await client.fetch(query, { slug })

  return {
    title: post?.title || 'Post não encontrado',
    description: post?.description || 'Descrição não disponível'
  }
}