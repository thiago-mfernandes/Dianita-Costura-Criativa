import styles from "./Footer.module.scss";
import { ReactComponent as Logo } from "assets/logo-branco.svg";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContainer__box}>
            <Logo className={styles.footerContainer__box___logo} />
            <p className={styles.footerContainer__box___content}>
              Peças com personalidade e originalidade você encontra aqui.
            </p>
            <div className={styles.footerContainer__icontainer}>
              <MdFacebook
                className={styles.footerContainer__icontainer___icon}
              />
              <FaInstagram
                className={styles.footerContainer__icontainer___icon}
              />
              <FaWhatsapp
                className={styles.footerContainer__icontainer___icon}
              />
            </div>
          </div>

          <address>
            <p>123 Street, New York, USA</p>
            <p>+012 345 67890</p>
            <p>info@example.com</p>
          </address>

          <div>
            <h2>Link's Rápidos</h2>
            <p>Home</p>
            <p>Sobre</p>
            <p>Produtos</p>
            <p>Contato</p>
          </div>

          <div>
            <h2>Novidades</h2>
            <p>
              Cadastre seu email para receber notificações de novos produtos
            </p>
            <input type="text" placeholder="info@example.com" />
            <button>Assinar</button>
          </div>
          <hr />
          <div>
            <p>
              &copy;{" "}
              <span>
                dianitacosturacriativa.com.br
                <br />
              </span>{" "}
              Todos os direitos Reservados.
            </p>
            <p>
              Designed by{" "}
              <a
                href="https://www.instagram.com/thiago_mfernandes/"
                target="_blank"
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
