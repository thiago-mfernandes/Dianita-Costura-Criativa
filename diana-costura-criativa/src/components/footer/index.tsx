import styles from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo-branco.svg';
import { MdFacebook } from 'react-icons/md';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Footer() {

  const rotas = [{
    label: 'Home', 
    to: '/'
  },{
    label: 'Sobre', 
    to: '/sobre'
  },{
    label: 'Produtos', 
    to: '/produtos'
  },{
    label: 'Contato', 
    to: '/contato'
  }];
  
  return (
    <>
      <section className={styles.section}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContainer__section}>
            <div className={styles.footerContainer__box}>
              <Logo className={styles.footerContainer__box___logo} />
              <p className={styles.footerContainer__box___content}>
                Peças com personalidade e <br />
                originalidade você encontra aqui.
              </p>
              <div className={styles.footerContainer__icontainer}>
                <a
                  className={styles.footerContainer__icontainer___link}
                  href="https://www.facebook.com/profile.php?id=100063636849048"
                  target="_blank" rel="noreferrer"
                >
                  <MdFacebook className={styles.footerContainer__icontainer___icon} />
                </a>
                <a
                  className={styles.footerContainer__icontainer___link}
                  href="https://www.instagram.com/dianitacosturacriativa/"
                  target="_blank" rel="noreferrer"
                >
                  <FaInstagram className={styles.footerContainer__icontainer___icon} />
                </a>
                <a 
                  className={styles.footerContainer__icontainer___link}
                  href="https://wa.me/5519983723718" 
                  target="_blank" rel="noreferrer"
                >
                  <FaWhatsapp className={styles.footerContainer__icontainer___icon} />
                </a>
              </div>
            </div>
            
            <article className={styles.footerContainer__address}>
              <h2 className={styles.footerContainer__address___title}>
                Localização
              </h2>
              <address className={styles.footerContainer__address___box}>
                <FiMapPin
                  className={styles.footerContainer__address___box____icon}
                />
                <p className={styles.footerContainer__address___box____content}>
                  Piracicaba - São Paulo - Brasil
                </p>
              </address>
              <address className={styles.footerContainer__address___box}>
                <FiPhone
                  className={styles.footerContainer__address___box____icon}
                />
                <p className={styles.footerContainer__address___box____content}>
                  +55 19 983561522
                </p>
              </address>
              <address className={styles.footerContainer__address___box}>
                <FiMail
                  className={styles.footerContainer__address___box____icon}
                />
                <p className={styles.footerContainer__address___box____content}>
                  info@example.com
                </p>
              </address>
            </article>
          </div>

          <div className={styles.footerContainer__section}>
            <div className={styles.footerContainer__links}>
              <h2 className={styles.footerContainer__links___title}>Links</h2>
              {
                rotas.map((rota, index) => (
                  <p 
                    key={index} 
                    className={styles.footerContainer__links___content} 
                  >
                    <Link to={rota.to}>
                      {rota.label}
                    </Link>
                  </p>
                ))
              }
            </div>

            <div className={styles.footerContainer__newsletter}>
              <h2 className={styles.footerContainer__newsletter___title}>
                Novidades
              </h2>
              <p className={styles.footerContainer__newsletter___content}>
                Cadastre seu email para receber notificações de novos produtos
              </p>
              <input
                className={styles.footerContainer__newsletter___input}
                type="text"
                placeholder="info@example.com"
              />
              <button className={styles.footerContainer__newsletter___button}>
                Assinar
              </button>
            </div>
          </div>

          <div className={styles.footerContainer__copyright}>
            <p>
              &copy;{' '}
              <span>
                dianitacosturacriativa.com.br
                <br />
              </span>{' '}
              Todos os direitos Reservados.
            </p>
            <p>
              Designed by{' '}
              <a
                href="https://www.instagram.com/thiago_mfernandes/"
                target="_blank"
                rel="noreferrer"
              >
                Thiago Fernandes
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
