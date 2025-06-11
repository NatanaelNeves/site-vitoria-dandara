// src/app/sobre/page.tsx
'use client'; 

import Link from 'next/link';
import Image from 'next/image'; // Importe o componente Image
import styles from '../Page.module.css';
import homeStyles from '../Home.module.css'; 

export default function SobrePage() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={`container ${styles.content}`}>

          {/* IMAGEM ADICIONADA AQUI */}
          <div className={styles.aboutImageContainer}>
            <Image
              src="/vitoria-dandara-perfil.jpeg"
              alt="Foto da psicóloga Vitória Dandara"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <h1>Meu Caminho até Você</h1>

          <p style={{textAlign: 'center', fontSize: '1.2rem', fontStyle: 'italic'}}>
            Acredito que a terapia é um ato de coragem e um profundo gesto de autocuidado. Meu papel é ser a facilitadora segura e ética da sua jornada.
          </p>

          {/* ... (o resto do arquivo continua o mesmo) ... */}
          <h2>A Escolha pela Psicologia: O Meu &ldquo;Porquê&rdquo;</h2>
          <p>
            Desde cedo, fui movida por uma inquietação sobre as complexidades da mente humana e pela potência dos laços afetivos. A psicologia não foi apenas uma escolha profissional, mas um chamado para entender e acolher as histórias que cada pessoa carrega. Essa paixão me guiou para uma prática clínica que valoriza não apenas a técnica, mas principalmente a escuta empática e a construção de uma relação de confiança mútua.
          </p>
          <h2>Da Teoria à Prática: Uma Formação Completa e Humanizada</h2>
          <p>
            Minha base acadêmica foi construída no curso de Psicologia do <strong>Centro Universitário Sete de Setembro (UNI7)</strong>, onde tive uma formação sólida e crítica. Mas foi além da sala de aula que minha experiência floresceu:
          </p>
          <ul>
            <li><strong>Psicologia Escolar:</strong> Através de estágios em colégios renomados, desenvolvi uma sensibilidade especial para as dores e os desafios da adolescência, trabalhando diretamente com jovens, pais e educadores.</li>
            <li><strong>Saúde Mental Coletiva:</strong> Conduzi diversas <strong>rodas de conversa</strong> sobre saúde mental e valorização da vida, aprendendo o poder da comunidade e do diálogo na prevenção e no apoio.</li>
            <li><strong>Estudo do Luto:</strong> Minha participação no <strong>Grupo de Tanatologia da Universidade Federal do Ceará (UFC)</strong> aprofundou meu conhecimento e minha capacidade de oferecer um acolhimento ético e especializado para aqueles que enfrentam perdas.</li>
            <li><strong>Foco em TCC:</strong> Estou em <strong>formação contínua em Terapia Cognitivo-Comportamental (TCC)</strong>, buscando sempre as intervenções mais eficazes e baseadas em evidências para te ajudar a alcançar resultados concretos.</li>
          </ul>
          <style jsx>{`
            ul { list-style-type: none; padding-left: 0; }
            li { background-color: var(--light-beige); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border-left: 4px solid var(--teal); }
            li strong { color: var(--lilac); font-family: var(--font-display); }
          `}</style>
          <h2>Como Eu Trabalho: Nossa Jornada Terapêutica</h2>
          <p>
            Minha abordagem terapêutica é a <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, mas meu estilo de trabalho é, acima de tudo, <strong>colaborativo e humano</strong>. Em nosso espaço terapêutico, que é livre de julgamentos, vamos trabalhar juntos para:
          </p>
          <ul>
              <li><strong>Entender a raiz dos problemas:</strong> Identificar os padrões de pensamento e comportamento que geram sofrimento.</li>
              <li><strong>Criar novas estratégias:</strong> Desenvolver ferramentas práticas e personalizadas para que você possa lidar com os desafios do dia a dia de forma mais saudável.</li>
              <li><strong>Promover autonomia:</strong> Meu maior objetivo é que, ao longo do processo, você se torne seu próprio terapeuta, equipado(a) com autoconhecimento e recursos para construir uma vida com mais significado e bem-estar.</li>
          </ul>
        </div>
      </div>
      <section className={`${homeStyles.section} ${homeStyles.finalCtaSection}`} style={{marginTop: '4rem', padding: '4rem 1rem'}}>
          <div className="container">
             <h2 className={homeStyles.sectionTitle}>Vamos começar essa jornada juntos?</h2>
             <p className="text-white text-xl mb-10">Se você sente que é o momento de cuidar da sua saúde emocional, eu estou aqui para ajudar.</p>
             <Link href="/contato" className={homeStyles.heroButton}>
                Agendar uma conversa
            </Link>
          </div>
      </section>
    </>
  );
}