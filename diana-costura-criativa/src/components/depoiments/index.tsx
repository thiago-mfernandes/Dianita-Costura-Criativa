import styles from './Depoiments.module.scss';
import { Slider, SliderProps, Slide } from './slider';
import data from 'data/testimonials.json';
import { motion } from 'framer-motion';
import { titleOfSectionVariants } from 'animation/titleOfSectionVariants';
import { showContentVariants } from 'animation/showContentVariants';

export default function Depoiments() {
  
  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: data.testimonials.length >= 3,
    draggable: data.testimonials.length >= 3,
    loop: data.testimonials.length >= 1,
    pagination: data.testimonials.length >= 1 && {
      clickable: true,
    },
  };

  return (
    <>
      {/* depoimentos carrosel */}
      <section className={styles.depoiments}>
        <motion.h2 
          variants={titleOfSectionVariants}
          initial='offScreen'
          whileInView='onScreen'
          viewport={{ once: true, amount: 0.8, margin: '10px' }} 
          className={styles.depoiments__title}
        >
          Depoimentos
        </motion.h2>
        <motion.p 
          variants={showContentVariants}
          initial='offScreen'
          whileInView='onScreen'
          viewport={{ once: true, amount: 0.8, margin: '10px' }}
          className={styles.depoiments__content}
        >
          Saiba o que dizem nossos melhores clientes a respeito dos produtos
          adquiridos:
        </motion.p>

        <Slider settings={settings}>
          {data.testimonials.map((testimonial) => (
            <Slide key={testimonial.id}>
              <div className={styles.cardDepoiments}>
                <article className={styles.cardDepoiments__content}>
                  {testimonial.text}
                </article>
                <h3 className={styles.cardDepoiments__author}>
                  {testimonial.author}
                </h3>
                <p className={styles.cardDepoiments__authorSubtitle}>
                  {testimonial.subTitle}
                </p>
              </div>
            </Slide>
          ))}
        </Slider>
      </section>
    </>
  );
}
