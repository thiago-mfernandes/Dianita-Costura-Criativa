import styles from "./Depoiments.module.scss";
import { Slider, SliderProps, Slide } from "./slider";
import data from "./testimonials.json";

export default function Depoiments() {
  
  let windowWidth = window.screen.width;

  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: windowWidth < 767 ? 1 : 2,
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
        <h2 className={styles.depoiments__title}>Depoimentos</h2>
        <p className={styles.depoiments__content}>
          Saiba o que dizem nossos melhores clientes a respeito dos produtos
          adquiridos:
        </p>

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
