import { ReactComponent as Logo } from "assets/logo-preto.svg";
import styles from "./Header.module.scss";
import style from "./Nav.module.scss";
import { FaMapPin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdFacebook } from "react-icons/md";

import { useState } from "react";
/* 
1.a constante active armazena o estado do menu entre aberto e fechado
comecando em false;
2.a funcao ToggleMode alterna o estado da constante active atraves do setMode
*/

export default function Header() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <>
      {/* header */}

      {/* pré cabecalho */}
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__box}>
            <FaMapPin className={styles.icone} />
            <p className={styles.header__box___content}>Piracicaba - São Paulo, Brazil</p>
            <MdEmail className={styles.icone} />
            <p className={styles.header__box___content}>info@example.com</p>
          </div>

          <div className={styles.header__box}>
            <p className={styles.header__container}>Redes Sociais:</p>
            <MdFacebook className={styles.icone} />
            <FaInstagram className={styles.icone} />
            <FaWhatsapp className={styles.icone} />
          </div>
        </div>
        {/* cabecalho */}
        <div className={style.navContainer}>
          <Logo className={style.logo} />

          <nav
            className={
              active
                ? style.navContainer__navOpen
                : style.navContainer__navClose
            }
          >
            {/* menu hamburguer mobile */}
            <button
              className={style.navContainer__hamburguer}
              onClick={ToggleMode}
            >
              <div className={style.navContainer__hamburguer___line}></div>
              <div className={style.navContainer__hamburguer___line}></div>
              <div className={style.navContainer__hamburguer___line}></div>
            </button>

            {/* a ul recebe uma classe aberto ou fechado */}
            <ul
              className={
                active
                  ? style.navContainer__ulOpen
                  : style.navContainer__ulClose
              }
            >
              <li className={styles.navContainer__ulOpen___item}>Home</li>
              <li className={styles.navContainer__ulOpen___item}>Sobre</li>
              <li className={styles.navContainer__ulOpen___item}>Produtos</li>
              <li className={styles.navContainer__ulOpen___item}>Contato</li>
            </ul>
          </nav>
        </div>

        <div className={styles.header__containerContent}>
          {/*container do titulo principal e botao */}
          <div >
            <div>
              <h2 className={styles.header__containerContent___subtitle}>
                Feitos à mão com
              </h2>
              <h1 className={styles.header__containerContent___title}>
                Paixão
              </h1>
            </div>
            <div className={styles.header__containerContent___box}>
              <p className={styles.header__containerContent___content}>
                Peças com personalidade e originalidade você encontra aqui.
              </p>
            </div>
          </div>
        </div>
          <button className={styles.header__botao}>Saiba Mais</button>
      </header>
    </>
  );
}
