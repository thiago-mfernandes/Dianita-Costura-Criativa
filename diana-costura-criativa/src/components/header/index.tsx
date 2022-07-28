import styles from './Header.module.scss';

export default function Header() {

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
        <a href="https://wa.me/5519983723718"target="_blank" rel="noreferrer">
          <button className={styles.header__botao}>Saiba Mais</button>
        </a>
      </header>
    </>
  );
}
