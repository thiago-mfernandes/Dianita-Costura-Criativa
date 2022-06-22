import styles from "./Depoiments.module.scss";
import { Slider, SliderProps, Slide } from "./slider";


//parado em 24:00



export default function Depoiments() { 
  {/* settings do slider */}
  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    pagination: {
      clickable: true
    }
  }

  const testimonials = [
    {
      text: "O porta-óculos valeu a pena! Além de muito bonito, protege a lente do óculos de riscar dentro da bolsa no dia a dia. Recomendadíssimo..",
      author: "Maria Gabriela",
      subTitle: "Jornalista",
    },
    {
      text: "Presenteei minha filha com o kit porta-esmalte. Ela amou o presente!",
      author: "Leontina Vieira",
      subTitle: "Secretária",
    },
    {
      text: "A bolsa infantil é de excelente qualidade. Possui forro impermeável e bolso interno com zíper para separar coisas dentro. Muito útil quando preciso levar o lanchinho e a madeira do meu filho! Recomendo a todos..",
      author: "Thiago Fernandes",
      subTitle: "Programador",
    }
  ]; 

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
          <Slide>
            <h1>Teste 1</h1>
          </Slide>
          <Slide>
            <h1>Teste 2</h1>
          </Slide>
          <Slide>
            <h1>Teste 3</h1>
          </Slide>
          <Slide>
            <h1>Teste 4</h1>
          </Slide>
        </Slider>

        <div>
          {/* aqui deve ser um article, verificar */}
          <div className={styles.cardDepoiments}>
            <article className={styles.cardDepoiments__content}>
            A bolsa infantil é de excelente qualidade. Possui forro impermeável e bolso interno com zíper para separar coisas dentro. Muito útil quando preciso levar o lanchinho e a madeira do meu filho! Recomendo a todos..
            </article>
            <h3 className={styles.cardDepoiments__author}>
              Thiago Fernandes
            </h3>
            <p className={styles.cardDepoiments__authorSubtitle}>
              Programador
            </p>
          </div>

          {/* controlador do slider 
          
          <div className={styles.controllerContainer}>
            <button
              className={styles.controllerContainer__controller}
              onClick={() => previousTestimonial()}
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              className={styles.controllerContainer__controller}
              onClick={() => nextTestimonial(currentTestimonial)}
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          */}
        </div>
      </section>
    </>
  );
}
