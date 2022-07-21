import styles from './Header.module.scss';
import { useState } from 'react';
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

  const rotas = [{
    label: 'Home', 
    to: '/home'
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
      <header className={styles.header}>        
        <div className={styles.header__containerContent}>
          <div>
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
        <a href="https://wa.me/5519983723718">
          <button className={styles.header__botao}>Saiba Mais</button>
        </a>
      </header>
    </>
  );
}
