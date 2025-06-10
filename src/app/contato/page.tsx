// src/app/contato/page.tsx
import styles from '../Page.module.css';
import { ContactForm } from './ContactForm';
import formStyles from './ContactForm.module.css'; // Importando também os estilos do formulário

export default function ContatoPage() {
  // Lembre-se de colocar o número de WhatsApp correto aqui
  const whatsappLink = "https://wa.me/5585999391395?text=Olá,%20Dandara!%20Encontrei%20seu%20site%20e%20gostaria%20de%20mais%20informações.";

  return (
    <div className={styles.pageWrapper}>
      <div className={`container ${styles.content}`}>
        <h1>Vamos Conversar?</h1>
        <p>
          Você pode me enviar uma mensagem diretamente pelo formulário abaixo ou, se preferir uma resposta mais rápida, clique no botão para falar comigo no WhatsApp. Estou à disposição para te acolher.
        </p>

        <div style={{marginTop: '3rem'}}>
          <ContactForm />

          <div className={formStyles.divider}>OU</div>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={formStyles.whatsappButton}
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}