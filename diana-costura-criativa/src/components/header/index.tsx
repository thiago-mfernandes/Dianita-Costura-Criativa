import { ReactComponent as Logo } from "assets/logo-preto.svg";
import styles from "./Header.module.scss";
import style from "./Nav.module.scss";
import { FaMapPin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdFacebook } from "react-icons/md";
import Produto from 'assets/produtos/produto-ex.png';

export default function Header() {
  return (
    <>
      {/* header */}

      {/* pré cabecalho */}
      <header className={styles.header}>
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
        <div className={style.navContainer}>
          <Logo className={style.logo} />
          <nav className={style.navContainer__nav}>
            {/* menu hamburguer mobile */}
            <button className={style.navContainer__hamburguer}>
              <div className={style.navContainer__hamburguer___line}></div>
              <div className={style.navContainer__hamburguer___line}></div>
              <div className={style.navContainer__hamburguer___line}></div>
            </button>

            <ul className={style.navContainer__ul}>
              <li>Home</li>
              <li>Sobre</li>
              <li>Produtos</li>
              <li>Contato</li>
            </ul>
          </nav>
        </div>

        <div className={styles.header__containerContent}>
          {/*container do titulo principal e botao */}
          <div>
            <div>
              <h2 className={styles.header__containerContent___subtitle}>
                Feitos à mão com
              </h2>
              <h1 className={styles.header__containerContent___title}>
                Paixão
              </h1>
            </div>
            <div>
              <p className={styles.header__containerContent___content}>
                Peças com personalidade e originalidade você encontra aqui.
              </p>
            </div>
          </div>

          {/*container da imagem de capa */}
          <div className={styles.header__containerImg}>
            <img src={Produto} alt="Produto" className={styles.header__containerImg___imgProduto}/>
          </div>

          <button className={styles.header__botao}>Saiba Mais</button>
        </div>
      </header>
    </>
  );
}
