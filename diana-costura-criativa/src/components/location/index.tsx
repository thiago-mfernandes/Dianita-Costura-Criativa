import styles from './Location.module.scss';
import { motion } from 'framer-motion';
import { titleOfSectionVariants } from 'animation/titleOfSectionVariants';

export default function Location() {
  return (
    <>
      {/* localizacao */}
      <section className={styles.locale}>
        <motion.h2 
          variants={titleOfSectionVariants}
          initial='offScreen'
          whileInView='onScreen'
          viewport={{ once: true, amount: 0.8, margin: '10px' }} 
          className={styles.locale__title}
        >
          Localização
        </motion.h2>
        <iframe
          className={styles.locale__mapa}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7537390.310130472!2d-52.10442892909039!3d-22.71462032620293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c631c14f4c9d3b%3A0x270ec30013dc341c!2sPiracicaba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1655916173835!5m2!1spt-BR!2sbr"
        />
      </section>
    </>
  );
}
