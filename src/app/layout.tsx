// src/app/layout.tsx
import type { Metadata } from "next";
// Importando as novas fontes
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Configurando as fontes
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ['400', '700'],
  variable: '--font-playfair' // Ligando à variável CSS
});
const lato = Lato({ 
  subsets: ["latin"], 
  weight: ['400', '700'],
  variable: '--font-lato' // Ligando à variável CSS
});

export const metadata: Metadata = {
  title: "Psicóloga Vitória Dandara da Cunha",
  description: "Psicóloga em Fortaleza, especialista em escuta terapêutica, saúde mental e Terapia Cognitivo-Comportamental.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Aplicando as variáveis das fontes ao HTML
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}