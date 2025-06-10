// src/app/blog/categoria/[slug]/page.tsx

import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import type { Post } from '@/sanity/types'
// Apenas UM import de CSS, com o caminho corrigido para subir duas pastas
import blogStyles from '../../Blog.module.css' 

interface CategoryData {
  categoryTitle: string;
  posts: Post[];
}

// Interface para Next.js 15
interface PageProps {
  params: Promise<{ slug: string }>
}

async function getDataForCategory(slug: string): Promise<CategoryData> {
  const query = `{
    "categoryTitle": *[_type == "category" && slug.current == $slug][0].title,
    "posts": *[_type == "post" && references(*[_type=="category" && slug.current == $slug]._id)] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      excerpt,
      publishedAt
    }
  }`
  const data = await client.fetch(query, { slug })
  return data
}

export default async function CategoryPage({ params }: PageProps) {
  // Await nos params para Next.js 15
  const { slug } = await params
  const { categoryTitle, posts } = await getDataForCategory(slug);

  return (
    <>
      <header className={blogStyles.pageHeader}>
        <div className="container">
          <p style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Posts sobre o tema:</p>
          <h1>{categoryTitle || 'Categoria'}</h1>
        </div>
      </header>

      <section className={`${blogStyles.postsSection} container`}>
        <div className={blogStyles.postsGrid}>
          {posts && posts.length > 0 ? posts.map((post) => (
            <article key={post._id} className={blogStyles.postCard}>
              {post.slug && <Link href={`/blog/${post.slug}`}>
                <div className={blogStyles.imageContainer}>
                  {post.mainImage && (
                    <Image
                      src={urlForImage(post.mainImage)?.url() || ''}
                      alt={`Imagem de capa do post ${post.title}`}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  )}
                </div>
              </Link>}
              <div className={blogStyles.cardContent}>
                <h3>
                  {post.slug && <Link href={`/blog/${post.slug}`}>{post.title}</Link>}
                </h3>
                <p className={blogStyles.excerpt}>{post.excerpt}</p>
                {post.publishedAt && <p className={blogStyles.date}>
                  {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>}
              </div>
            </article>
          )) : (
            <p>Nenhum post encontrado para esta categoria.</p>
          )}
        </div>

        <div className={blogStyles.backLinkContainer}>
          <Link href="/blog" className={blogStyles.backLink}>
            &larr; Ver todos os posts
          </Link>
        </div>

      </section>
    </>
  )
}

// Função generateMetadata para SEO (opcional)
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  
  const query = `*[_type == "category" && slug.current == $slug][0]{
    title,
    description
  }`
  const category = await client.fetch(query, { slug })

  return {
    title: `Posts sobre ${category?.title || 'Categoria'} | Seu Site`,
    description: category?.description || `Veja todos os posts sobre ${category?.title || 'esta categoria'}`
  }
}