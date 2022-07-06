import styles from './About.module.scss';
import ImgDiana from 'assets/about/about-1.jpeg';

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.about__container}>
          <h2 className={styles.about__title}>Quem Sou</h2>
          <img className={styles.about__img} src={ImgDiana} alt="Foto Diana" />
          <div className={styles.about__container___contentBox}>
            <p className={styles.about__content}>
              Oi, deixa eu me apresentar...
              <br />
              Meu nome é Diana, a artesã do ateliê
              <span>{`${' DIANITA COSTURA CRIATIVA'}`}</span>.
              <br />
              - Sou técnica de enfermagem e instrumentadora cirúrgica de formação,
              porém, o artesanal sempre fez parte da minha vida, nas mais
              diferentes técnicas. Em meados de 2018, conheci a costura criativa
              e me encantei, logo tomei coragem, comprei minha primeira máquina
              e foi o início de tudo.
              <br />
              - Fui aprendendo e a cada peça que confeccionava, procurava me
              aprimorar nas técnicas. Hoje continuo me dividindo entre o CLT e o
              ATELIÊ, e buscando trazer em minhas peças um diferencial que
              atenda a necessidade dos meus clientes e também encante os olhos.
              Essa sou eu, empreendendo com amor e dedicação.
              <br />
              <br />
              DIANA(Dianita costura criativa).
            </p>
            <a href="https://wa.me/5519983723718" target="_blank" rel="noreferrer">
            </a>
          </div>
          <button className={styles.about__botaoSaibaMais}>
            Saiba Mais
          </button>
        </div>
      </section>
    </>
  );
}
