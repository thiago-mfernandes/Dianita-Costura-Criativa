import styles from "./About.module.scss";
import ImgDiana from 'assets/diana-perfil.png'

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.about__container}>
          <h2 className={styles.about__title}>Quem Sou</h2>
          <img className={styles.about__img} src={ImgDiana} alt="Foto Diana" />
          <div className={styles.about__container}>
            <p className={styles.about__content}>
              Qualificações: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dicta porro ullam aut obcaecati voluptatibus quidem quos
              blanditiis recusandae! Atque ea earum, harum nulla itaque iusto
              animi numquam voluptatibus ratione libero!
            </p>
            <button className={styles.about__button}>Saiba Mais</button>
          </div>
        </div>
      </section>
    </>
  );
}
