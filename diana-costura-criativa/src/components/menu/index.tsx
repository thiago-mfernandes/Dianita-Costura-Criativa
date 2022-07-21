import { useState } from 'react';
import { FaInstagram, FaMapPin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdFacebook } from 'react-icons/md';
import { ReactComponent as LogoPreto } from 'assets/logo-preto.svg';
import { ReactComponent as LogoBranco } from 'assets/logo-branco.svg';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import style from './Nav.module.scss';



export default function Menu() {
  
  // --mobileMenu é referente a tag nav que contem a lista de links
  const [mobileMenu, setState] = useState(false);
  // --desktopMenu é referente a o estado fixo do menu ao scrolar
  const [desktopMenu, setdesktopMenu] = useState(false);


  function scrollPosition(){
    if(scrollY > 50) {
      setdesktopMenu(true);
    } else {
      setdesktopMenu(false);
    }
  }
  window.addEventListener('scroll', scrollPosition);
  

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
      {/* pré cabecalho */}
      <div className={styles.menu__container}>
        <div className={styles.menu__box}>
          <FaMapPin className={styles.icone} />
          <p className={styles.menu__box___content}>
              Piracicaba - São Paulo, Brazil
          </p>
          <MdEmail className={styles.icone} />
          <p className={styles.menu__box___content}>info@example.com</p>
        </div>

        <div className={styles.menu__box}>
          <p className={styles.menu__content}>Redes Sociais:</p>
          <a
            href="https://www.facebook.com/profile.php?id=100063636849048"
            target="_blank" rel="noreferrer"
          >
            <MdFacebook className={styles.icone} />
          </a>
          <a
            href="https://www.instagram.com/dianitacosturacriativa/"
            target="_blank" rel="noreferrer"
          >
            <FaInstagram className={styles.icone} />
          </a>
          <a 
            href="https://wa.me/5519983723718" 
            target="_blank" rel="noreferrer"
          >
            <FaWhatsapp className={styles.icone} />
          </a>
        </div>
      </div>

      {/* cabecalho */}
      <div className={
        desktopMenu 
          ? `${style.desktopActive}` 
          : `${style.navContainer}`}
      >
        {desktopMenu 
          ? <LogoBranco className={style.logo} /> 
          : <LogoPreto className={style.logo} />
        }

        <button
          className={style.navContainer__hamburguer}
          onClick={() => setState(!mobileMenu)}
        >
          <div className={
            //se o desktopMenu for false (position: none): icone marrom
            //se o desktopMenu for true (position : sticky): icone branco
            desktopMenu
              ? `${style.navContainer__hamburguer___whiteLine}`
              : `${style.navContainer__hamburguer___brownLine}`
          }></div>
          <div className={
            desktopMenu
              ? `${style.navContainer__hamburguer___whiteLine}`
              : `${style.navContainer__hamburguer___brownLine}`
          }></div><div className={
            desktopMenu
              ? `${style.navContainer__hamburguer___whiteLine}`
              : `${style.navContainer__hamburguer___brownLine}`
          }></div>
        </button>

        <nav
          className={
            mobileMenu 
              ? `${style.navContainer__navOpen}` 
              : `${style.navContainer__navClose}`
          }
        >
          {/* menu hamburguer mobile */}
          

          {/* a ul recebe uma classe aberto ou fechado */}
          <ul
            className={
              mobileMenu
                ? `${style.navContainer__ulOpen}`
                : `${style.navContainer__ulClose}`
            }
          >
            {
              rotas.map((rota, index) => (
                <li 
                  key={index} 
                  className={style.item} 
                  onClick={() => setState(!mobileMenu)}
                >
                  <Link to={rota.to}>
                    {rota.label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </>
  );
}

