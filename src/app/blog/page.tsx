// src/app/blog/page.tsx

import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import type { Post } from '@/sanity/types'
import styles from './Blog.module.css'

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    mainImage,
    excerpt,
    publishedAt
  }`
  const posts = await client.fetch(query)
  return posts
}

async function getCategories(): Promise<Category[]> {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug
  }`
  const categories = await client.fetch(query)
  return categories
}

export default async function BlogPage() {
  const posts = await getPosts()
  const categories = await getCategories()

  return (
    <>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1>Blog</h1>
          <p>Reflexões sobre saúde mental, bem-estar e psicologia.</p>
        </div>
      </header>
      
      {/* Nova Seção de Categorias */}
      <section className={styles.categorySection}>
        <div className="container">
          <h2>Navegue por Categoria</h2>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/blog/categoria/${category.slug.current}`}
                className={styles.categoryLink}
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção dos Posts */}
      <section className={`${styles.postsSection} container`}>
        <h2>Todos os Posts</h2>
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <article key={post._id} className={styles.postCard}>
              {post.slug && <Link href={`/blog/${post.slug}`}>
                <div className={styles.imageContainer}>
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
              <div className={styles.cardContent}>
                <h3>
                  {post.slug && <Link href={`/blog/${post.slug}`}>{post.title}</Link>}
                </h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                {post.publishedAt && <p className={styles.date}>
                  {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}