import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdFacebook } from 'react-icons/md';
import styles from './Contact.module.scss';
import { motion } from 'framer-motion';
import { titleOfSectionVariants } from 'animation/titleOfSectionVariants';
import { allCards } from 'animation/allCards';
import emailjs from 'emailjs-com';

function sendEmail(e:any) {
  e.preventDefault();

  emailjs.sendForm('dianitaMessage', 'dianitaTemplate', e.target, 'IPIHhrT_YpoRh8ivr')
    .then((result) => {
      alert('Mensagem enviada com sucesso!');
    }, (error) => {
      alert(error.message);
    });
  e.target.reset();
}

export default function Contact() {
  return (
    <>
      <section className={styles.container} id="contato">
        
        <div className={styles.boxTitle}>
          <motion.h2 
            variants={titleOfSectionVariants}
            initial='offScreen'
            whileInView='onScreen'
            viewport={{ once: true, amount: 0.8, margin: '10px' }} 
            className={styles.boxTitle__title}
          >
            Contato
          </motion.h2>
          <p className={styles.boxTitle__content}>
            Para maiores informações sobre nossos produtos, preços e prazos de entrega, por favor informe seus dados no formulário abaixo e clique em enviar. Responderemos sua solicitação o mais breve possível.
          </p>
        </div>
        
        <motion.div 
          variants={allCards}
          initial='offScreen'
          whileInView='onScreen'
          viewport={{ once:true, amount: 0.8, margin: '400px' }} 
          className={styles.boxMyInfo}
        >
          <h3 className={styles.boxMyInfo__title}>Telefone</h3>
          <p className={styles.boxMyInfo__content}>55 19 983723718</p>
          <h3 className={styles.boxMyInfo__title}>Email</h3>
          <p className={styles.boxMyInfo__content}>dianita@costuracriativa.com</p>
          <h3 className={styles.boxMyInfo__title}>Localização</h3>
          <p className={styles.boxMyInfo__content}>Piracicaba - São Paulo - Brazil</p>
          <h3 className={styles.boxMyInfo__title}>Redes Sociais</h3>
          <div className={styles.boxSocialMedia}>
            <a 
              className={styles.boxSocialMedia__link}
              href="https://www.facebook.com/profile.php?id=100063636849048"
              target="_blank" rel="noreferrer"
            >
              <MdFacebook className={styles.boxSocialMedia__icon} />
            </a>
            <a 
              className={styles.boxSocialMedia__link}
              href="https://www.instagram.com/dianitacosturacriativa/"
              target="_blank" rel="noreferrer"
            >
              <FaInstagram className={styles.boxSocialMedia__icon} />
            </a>
            <a 
              className={styles.boxSocialMedia__link}
              href="https://wa.me/5519983723718" 
              target="_blank" rel="noreferrer"
            >
              <FaWhatsapp className={styles.boxSocialMedia__icon} />
            </a>
          </div>
        </motion.div>
       

        <form className={styles.form} onSubmit={sendEmail}>
          <p className={styles.boxMyInfo__content}>
            Preencha todos os campos do formulário e deixe sua mensagem:
          </p>
          <div className={styles.form__box}>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Informe seu nome.."
              className={styles.form__input}
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Informe seu email.."
              className={styles.form__input}
            />
          </div>
          <div className={styles.form__box}>
            <input
              type="text"
              name="user_subject"
              required
              placeholder="Informe seu assunto.."
              className={styles.form__input}
            />
            <textarea
              name="user_message"
              required
              placeholder="Informe sua mensagem.."
              className={styles.form__input}
              maxLength={500}
              minLength={2}
              rows={300}
              cols={300}
            />
          </div>
          <button className={styles.botao} type='submit'>Enviar Mensagem</button>
        </form>
      </section>
    </>
  );
}
