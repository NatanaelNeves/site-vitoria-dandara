// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Mim', href: '/sobre' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            Vitória Dandara
            <span>Psicóloga • CRP 11/20899</span>
          </Link>
        </div>
        <nav className={styles.navLinks}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className={styles.ctaButton}>
          <Link href="/contato">Agendar Consulta</Link>
        </div>
      </div>
    </header>
  );
}