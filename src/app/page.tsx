// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import type { Post } from "@/sanity/types";
import styles from './Home.module.css';

async function getLatestPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) [0...3] {
    _id, title, "slug": slug.current, mainImage, excerpt, publishedAt
  }`;
  const posts = await client.fetch(query);
  return posts;
}

const services = [
  { icon: "💬", title: "Psicoterapia Individual", description: "Um espaço seguro para explorar suas emoções, pensamentos e comportamentos." },
  { icon: "🌱", title: "Apoio a Adolescentes", description: "Orientação e suporte para os desafios da adolescência, identidade e autoestima." },
  { icon: "❤️‍🩹", title: "Apoio em Luto e Perdas", description: "Acolhimento profissional para ressignificar dores e perdas afetivas." }
];

const testimonials = [
  { quote: "A terapia com a Vitória foi um divisor de águas. Aprendi a lidar com minha ansiedade e hoje me sinto muito mais confiante.", author: "J. S., 29 anos" },
];

export default async function HomePage() {
  const latestPosts = await getLatestPosts();

  return (
    <>
      {/* Seção Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Cuidar da mente é um ato de coragem. Vamos juntas?</h1>
          <p>Estou aqui para caminhar com você em sua jornada de autoconhecimento e bem-estar. Encontre um espaço seguro e acolhedor para explorar seus sentimentos.</p>
          <Link href="/contato" className={styles.heroButton}>
            Quero Agendar uma Conversa
          </Link>
        </div>
      </section>

      {/* Seção de Apresentação Rápida */}
      <section className={`${styles.section} container`}>
        <div className={styles.introGrid}>
          <div className={styles.introImageContainer}>
          <Image
      src="/vitoria-dandara-perfil.jpeg" // O caminho para a imagem na pasta 'public'
      alt="Foto profissional da psicóloga Vitória Dandara da Cunha"
      fill // A propriedade 'fill' faz a imagem preencher o container
      style={{ objectFit: 'cover' }} // Garante que a imagem cubra o espaço sem distorcer
    />
          </div>
          <div className={styles.introText}>
            <h3>Sou Vitória Dandara, sua psicóloga.</h3>
            <p>Com uma abordagem acolhedora e baseada em evidências, meu trabalho é te ajudar a construir ferramentas para uma vida mais leve e consciente. Formada pelo Centro Universitário Sete de Setembro e em contínua formação em Terapia Cognitivo-Comportamental, ofereço um espaço de escuta, ética e compromisso para você ressignificar suas dores.</p>
            <Link href="/sobre" className={styles.introLink}>
              Conheça minha história &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Serviços em Destaque */}
      <section className={`${styles.section} ${styles.servicesSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Como posso te ajudar</h2>
          <div className={styles.servicesGrid}>
            {services.map(service => (
              <div key={service.title} className={styles.serviceCard}>
                <div className={styles.icon}>{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Últimos Posts do Blog */}
      {latestPosts && latestPosts.length > 0 && (
        <section className={`${styles.section} ${styles.blogSection}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Últimas do Blog</h2>
            <div className={styles.servicesGrid}>
              {latestPosts.map((post) => (
                <article key={post._id} className={styles.postCard}>
                  {post.slug && <Link href={`/blog/${post.slug}`}>
                    <div className={styles.imageContainer}>
                      {post.mainImage && (<Image src={urlForImage(post.mainImage)?.url() || ''} alt={`Imagem do post ${post.title}`} fill style={{ objectFit: 'cover' }}/>)}
                    </div>
                  </Link>}
                  <div className={styles.cardContent}>
                    <h2>{post.slug ? <Link href={`/blog/${post.slug}`}>{post.title}</Link> : post.title}</h2>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    {post.publishedAt && <p className={styles.date}>{new Date(post.publishedAt).toLocaleDateString('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'})}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Seção de Depoimentos */}
      <section className={`${styles.section} ${styles.testimonialsSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>O que dizem sobre a terapia</h2>
          <div className={styles.testimonialCard}>
            {/* CORREÇÃO APLICADA AQUI */}
            <p>&ldquo;{testimonials[0].quote}&rdquo;</p>
            <h4>- {testimonials[0].author}</h4>
          </div>
        </div>
      </section>

      {/* Chamada Final para Ação */}
      <section className={`${styles.section} ${styles.finalCtaSection}`}>
          <div className="container">
             <h2 className={styles.sectionTitle}>Está pronta para cuidar da sua saúde emocional?</h2>
             <p className="text-white text-xl mb-10">O primeiro passo é o mais corajoso de todos.</p>
             <Link href="/contato" className={styles.heroButton}>
                Sim, quero começar
            </Link>
          </div>
      </section>
    </>
  );
}