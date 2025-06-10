# Site Profissional para Psicóloga Vitória Dandara

Este é o repositório do site profissional desenvolvido para a psicóloga Vitória Dandara da Cunha (CRP 11/20899). O projeto foi criado com Next.js e Sanity.io para ser uma presença online acolhedora, profissional e informativa, servindo como um canal de contato e uma plataforma de conteúdo sobre saúde mental.

**Acesse a versão ao vivo:** [hhttps://site-vitoria-dandara.vercel.app](https://site-vitoria-dandara.vercel.app)

---

## 🚀 Principais Funcionalidades

-   **Páginas Institucionais Completas:** Home, Sobre Mim e Serviços com conteúdo estratégico para gerar confiança e autoridade.
-   **Design Responsivo:** Interface adaptada para uma ótima experiência em desktops, tablets e celulares.
-   **Blog com CMS Integrado:** Blog completo com gerenciamento de conteúdo via Sanity.io, permitindo que a psicóloga crie, edite e publique posts de forma autônoma.
-   **Sistema de Categorias:** Os posts do blog podem ser organizados e filtrados por categorias, melhorando a navegação do usuário.
-   **Formulário de Contato Funcional:** Integrado com o Formspree para um envio de e-mails simples e eficaz.
-   **Botão de WhatsApp:** Acesso rápido para contato direto na página de Contato.
-   **Otimização para SEO:** Estrutura de metadados implementada para melhor ranqueamento no Google.

## 🛠️ Tecnologias Utilizadas

-   **Frontend:** [Next.js](https://nextjs.org/) (com App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
-   **Estilização:** [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
-   **CMS (Headless):** [Sanity.io](https://www.sanity.io/) (com Embedded Studio)
-   **Formulários:** [Formspree](https://formspree.io/)
-   **Deployment:** [Vercel](https://vercel.com/)

---

## 💻 Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e rodar o projeto na sua máquina.

### Pré-requisitos

-   [Node.js](https://nodejs.org/) (versão 18 ou superior)
-   [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/NatanaelNeves/site-vitoria-dandara.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd site-psicologa-vitoria
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as Variáveis de Ambiente:**
    - Crie uma cópia do arquivo `.env.local.example` (se você criar um) ou crie um novo arquivo chamado `.env.local` na raiz do projeto.
    - Adicione as seguintes variáveis:
      ```
      NEXT_PUBLIC_SANITY_PROJECT_ID="SEU_ID_DE_PROJETO_DO_SANITY"
      NEXT_PUBLIC_SANITY_DATASET="production"
      ```
    - Você pode encontrar seu `projectId` no painel do Sanity.io.

5.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

-   O site estará acessível em `http://localhost:3000`.
-   O Sanity Studio (painel de administração) estará acessível em `http://localhost:3000/studio`.

---

## 🚀 Deploy

O deploy deste projeto é feito de forma contínua e automática pela **Vercel**. Qualquer `push` para a branch `main` no GitHub iniciará um novo processo de build e publicação.

Para que o deploy funcione corretamente, as variáveis de ambiente mencionadas acima devem ser configuradas no painel do projeto na Vercel (em Settings > Environment Variables).

Além disso, a URL de produção (ex: `https://site-vitoria-dandara.vercel.app`) deve ser adicionada à lista de **CORS origins** no painel do Sanity (em API > CORS Origins).

## 💡 Possíveis Melhorias Futuras

-   Implementar uma funcionalidade de **busca** no blog.
-   Adicionar **paginação** na página principal do blog para lidar com um grande volume de posts.
-   Reativar o `generateMetadata` na página de post, encontrando uma solução para o bug de build do ambiente Vercel.
-   Criar uma seção de **Depoimentos** gerenciável pelo Sanity.

---

Desenvolvido por **[Seu Nome ou Usuário do GitHub aqui]**.