import styles from './Header.module.scss';
import { motion } from 'framer-motion';
import { titleVariants } from 'animation/titleVariants';
import { subTitleVariants } from 'animation/subTitleVariants';

export default function Header() {

  return (
    <>
      <header className={styles.header} id="home">        
        <div className={styles.header__containerContent}>
          <div>
            <div>
              <motion.h2
                variants={titleVariants}
                initial='initial'
                animate='animate'
                className={styles.header__containerContent___subtitle}
              >
                Feitos à mão com
              </motion.h2>
              <motion.h1 
                variants={subTitleVariants}
                initial='initial'
                animate='animate'
                className={styles.header__containerContent___title}>
                Paixão
              </motion.h1>
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
