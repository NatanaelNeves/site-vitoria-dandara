// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'; // Importando o useState e useEffect
import styles from './Header.module.css';

const navLinks = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Mim', href: '/sobre' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
];

// Componente para o ícone do menu, para não poluir o principal
function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6H20M4 12H20M4 18H20" stroke="#5A4B81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efeito para fechar o menu se a rota mudar
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);


  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            Vitória Dandara
            <span>Psicóloga • CRP 11/20899</span>
          </Link>
        </div>

        {/* Navegação para Desktop */}
        <nav className={styles.desktopNav}>
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
          <div className={styles.ctaButton}>
             <Link href="/contato">Agendar Consulta</Link>
          </div>
        </nav>

        {/* Botão do Menu Mobile */}
        <button className={styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menu">
          <MenuIcon />
        </button>
      </div>

      {/* Painel do Menu Mobile (Overlay) */}
      <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}