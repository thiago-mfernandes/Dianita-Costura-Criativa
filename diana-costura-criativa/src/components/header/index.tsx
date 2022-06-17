import { ReactComponent as Logo } from "assets/logo-preto.svg";
import styles from "./Header.module.scss";
import { FaMapPin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdFacebook } from "react-icons/md";

export default function Header() {
  return (
    <>
      {/* header */}
      {/* pré cabecalho */}
      <section className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__box}>
            <FaMapPin className={styles.icone} />
            <p className="header__content">Piracicaba - São Paulo, Brazil</p>
            <MdEmail className={styles.icone} />
            <p className="header__content">info@example.com</p>
          </div>

          <div className={styles.header__box}>
            <p className="header__content">Redes Sociais:</p>
            <MdFacebook className={styles.icone} />
            <FaInstagram className={styles.icone} />
            <FaWhatsapp className={styles.icone} />
          </div>
        </div>
        {/* cabecalho */}
        <div>
          <Logo />
          <nav>
            <ul>
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>Sobre</p>
              </li>
              <li>
                <p>Produtos</p>
              </li>
              <li>
                <p>Contato</p>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          {/*container do titulo principal e botao */}
          <div>
            <div>
              <h2>Feitos à mão com</h2>
              <h1>Paixão</h1>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                corporis ducimus tempora reiciendis error, quaerat totam, quam,
                labore aspernatur beatae nemo.
              </p>
              <button>Saiba Mais</button>
            </div>
          </div>
          {/*container da imagem de capa */}
          <div>
            <img src="assets/produto-ex.png" alt="Produto" />
          </div>
        </div>
      </section>
    </>
  );
}
