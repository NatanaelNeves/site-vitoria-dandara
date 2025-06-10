// src/app/contato/ContactForm.tsx
import styles from './ContactForm.module.css'

export function ContactForm() {
  return (
    // O action aponta para a sua URL única do Formspree
    <form 
      action="https://formspree.io/f/mvgrkvbe" 
      method="POST" 
      className={styles.form}
    >
      <div className={styles.formGroup}>
        <label htmlFor="name">Seu nome</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Seu e-mail</label>
        <input type="email" id="email" name="_replyto" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Mensagem</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit" className={styles.submitButton}>
        Enviar Mensagem
      </button>
    </form>
  )
}