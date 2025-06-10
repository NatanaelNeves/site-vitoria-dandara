// src/app/servicos/page.tsx
import Link from 'next/link';
import pageStyles from '../Page.module.css'; // Estilos gerais da página
import ctaStyles from '../Home.module.css';   // Estilos do botão de CTA
import serviceStyles from './Servicos.module.css'; // Nossos novos estilos de serviço

export default function ServicosPage() {
  return (
    <>
      <div className={pageStyles.pageWrapper}>
        <div className={`container ${pageStyles.content}`}>
          <h1>Modalidades de Atendimento</h1>
          <p style={{textAlign: 'center', fontSize: '1.2rem'}}>
            Um espaço de cuidado pensado para suas necessidades, onde cada jornada é única e respeitada.
          </p>

          <div style={{marginTop: '4rem'}}>
            {/* Bloco 1: Psicoterapia Individual */}
            <div className={serviceStyles.serviceBlock}>
              <h2>Psicoterapia Individual Online</h2>
              <p>
                Dedicado a adultos que buscam um espaço seguro para o autoconhecimento, o alívio de sofrimentos emocionais e o desenvolvimento de uma vida com mais propósito.
              </p>
              
              <h3>Para quem é?</h3>
              <p>
                Para você que se sente sobrecarregado(a) pela ansiedade, paralisado(a) pelo estresse, enfrenta os desafios do luto, ou simplesmente sente que algo precisa mudar, mas não sabe por onde começar.
              </p>

              <h3>O que trabalhamos:</h3>
              <ul className={serviceStyles.topicsList}>
                <li>Ansiedade e Estresse</li>
                <li>Baixa autoestima e autoconfiança</li>
                <li>Processos de Luto e Perdas</li>
                <li>Dificuldades em relacionamentos</li>
                <li>Transições de carreira e de vida</li>
                <li>Busca por autoconhecimento</li>
              </ul>
            </div>

            {/* Bloco 2: Psicoterapia para Adolescentes */}
            <div className={serviceStyles.serviceBlock}>
              <h2>Acompanhamento para Adolescentes</h2>
              <p>
                A adolescência é uma fase de intensas transformações. Ofereço um ambiente de confiança e sem julgamentos para que o adolescente possa navegar por suas questões com mais segurança e autonomia.
              </p>
              
              <h3>Para quem é?</h3>
              <p>
                Para adolescentes que estão lidando com a pressão social e escolar, questões de identidade, conflitos familiares, ansiedade sobre o futuro ou dificuldades de se sentirem compreendidos.
              </p>

              <h3>O que trabalhamos:</h3>
              <ul className={serviceStyles.topicsList}>
                <li>Identidade e Autoestima</li>
                <li>Ansiedade social e de desempenho</li>
                <li>Dificuldades de relacionamento com pais e amigos</li>
                <li>Orientação vocacional e de carreira</li>
                <li>Questões escolares</li>
                <li>Habilidades de comunicação</li>
              </ul>
            </div>

            {/* Bloco 3: Como Funciona */}
            <div className={serviceStyles.serviceBlock}>
              <h2>Como Funcionam as Sessões?</h2>
              <p>
                Meu trabalho é pautado na escuta ativa e em intervenções baseadas em evidências da <strong>Terapia Cognitivo-Comportamental (TCC)</strong>, sempre adaptadas à sua realidade.
              </p>
              
              <h3>Estrutura do Atendimento:</h3>
              <ul className={serviceStyles.topicsList}>
                <li><strong>Modalidade:</strong> 100% Online, via videochamada.</li>
                <li><strong>Duração:</strong> Sessões de 50 minutos.</li>
                <li><strong>Frequência:</strong> Encontros semanais.</li>
                <li><strong>Ambiente:</strong> Sigiloso, seguro e acolhedor.</li>
                <li><strong>Abordagem:</strong> Focada, colaborativa e prática.</li>
                <li><strong>Flexibilidade:</strong> Atendo em todo o Brasil e no exterior.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Final de Chamada para Ação */}
      <section className={`${ctaStyles.section} ${ctaStyles.finalCtaSection}`} style={{marginTop: 0, paddingTop: '4rem'}}>
          <div className="container">
             <h2 className={ctaStyles.sectionTitle}>Pronto(a) para dar o primeiro passo?</h2>
             <p className="text-white text-xl mb-10">Sua jornada de cuidado começa com uma conversa.</p>
             <Link href="/contato" className={ctaStyles.heroButton}>
                Agende sua consulta
            </Link>
          </div>
      </section>
    </>
  );
}