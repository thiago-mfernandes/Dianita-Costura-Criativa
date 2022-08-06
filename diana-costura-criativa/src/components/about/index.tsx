import styles from './About.module.scss';
import ImgDiana from 'assets/about/about-1.jpg';
import { motion } from 'framer-motion';
import { titleOfSectionVariants } from 'animation/titleOfSectionVariants';
import { showContentVariants } from 'animation/showContentVariants';

export default function About() {
  return (
    <>
      <section className={styles.about} id="sobre">
        <div className={styles.about__container}>
          <motion.h2 
            variants={titleOfSectionVariants}
            initial='offScreen'
            whileInView='onScreen'
            viewport={{ once: true, amount: 0.8, margin: '10px' }}
            className={styles.about__title}>Quem Sou</motion.h2>

          <motion.div 
            variants={showContentVariants}
            initial='offScreen'
            whileInView='onScreen'
            viewport={{ once: true, amount: 0.8, margin: '350px' }}
            className={styles.about__container___contentBox}
          >
            <p className={styles.about__content}>
              Oi, deixa eu me apresentar...
              <br />
              Meu nome é Diana, a artesã do ateliê
              <span>{`${' DIANITA COSTURA CRIATIVA'}`}</span>.
              <br /><br />
              <q>
                Técnica de enfermagem e instrumentadora cirúrgica de formação,
                porém, o artesanal sempre fez parte da minha vida, nas mais
                diferentes técnicas. Em meados de 2018, conheci a costura criativa
                e me encantei, logo tomei coragem, comprei minha primeira máquina
                e foi o início de tudo.
              </q>
              <br /><br />
              <q>
                Fui aprendendo e a cada peça que confeccionava, procurava me
                aprimorar nas técnicas. Hoje continuo me dividindo entre o CLT e o
                ATELIÊ, e buscando trazer em minhas peças um diferencial que
                atenda a necessidade dos meus clientes e também encante os olhos.
                Essa sou eu, empreendendo com amor e dedicação.
              </q>
            </p>
          </motion.div>

          <div className={styles.about__imgDiv}>
            <motion.img 
              variants={showContentVariants}
              initial='offScreen'
              whileInView='onScreen'
              viewport={{ once: true, amount: 0.8, margin: '250px' }}
              className={styles.about__img}  
              src={ImgDiana} 
              alt="Foto Diana" />
          </div>
          <a href="https://wa.me/5519983723718" target="_blank" rel="noreferrer">
            <button className={styles.about__botaoSaibaMais}>
              Saiba Mais
            </button>            
          </a>
        </div>
      </section>
    </>
  );
}
