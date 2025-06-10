// src/components/Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>Vitória Dandara da Cunha</h3>
            <p>Psicóloga • CRP 11/20899</p>
            <p>Atendimento online para todo o Brasil.</p>
          </div>
          <div className={styles.column}>
            <h3>Navegação</h3>
            <ul>
              <li><Link href="/sobre">Sobre Mim</Link></li>
              <li><Link href="/servicos">Serviços</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Contato</h3>
            <p>vitoriadandara.psi@email.com</p>
            <p>(85) 99939-1395</p>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Vitória Dandara da Cunha. Todos os direitos reservados.</p>
          <p>Site desenvolvido com ❤️</p>
        </div>
      </div>
    </footer>
  );
}