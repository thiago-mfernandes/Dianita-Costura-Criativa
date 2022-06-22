import styles from "./Depoiments.module.scss";
import { useState } from "react";

export default function Depoiments() {
  const [currentTestimonial, setCurrentTestimonial] = useState({
    text: "A bolsa infantil é de excelente qualidade. Possui forro impermeável e bolso interno com zíper para separar coisas dentro. Muito útil quando preciso levar o lanchinho e a madeira do meu filho! Recomendo a todos..",
    author: "Thiago Fernandes",
    subTitle: "Programador",
  });

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

  function nextTestimonial(currentTestimonial: any) {
    {
      /* pegando o text do array testimonial */
    }
    const testimonialText = testimonials.map((testimonial) => testimonial.text);

    {
      /* pegando a posicao do testimonial atual pelo indexOf do testimonialText*/
    }
    const positionOfCurrentTestmonial = testimonialText.indexOf(
      currentTestimonial.text
    );

    {
      /* pegando a posicao do testimonial do proximo item */
    }
    const positionOfNextTestmonial =
      testimonialText.indexOf(currentTestimonial.text) + 1;

    {
      /* proxima posicao */
    }
    const next = testimonialText[positionOfNextTestmonial];

    {
      /* pego o objeto inteiro */
    }
    const nextObjectTestimonial = testimonials.filter((testimonial) => {
      const testimonialPosition = testimonial.text.indexOf(next) + 1;
      return testimonialPosition;
    });

    {
      /* verifico se o tamanho do array eh igual ao item atual + 1 */
    }
    const lastTestimonialInArray =
      testimonials.length === positionOfCurrentTestmonial + 1;

    {
      /* se for o ultimo da posicao, eu seto sendo o primeiro novamente */
    }
    if (lastTestimonialInArray) {
      setCurrentTestimonial(testimonials[0]);
    } else {
      setCurrentTestimonial(nextObjectTestimonial[0]);
    }
  }

  function previousTestimonial() {
    const testimonialText = testimonials.map((testimonial) => testimonial.text);
    const positionOfCurrentTestimonial = testimonialText.indexOf(
      currentTestimonial.text
    );
    const positionOfPreviousTestmonial =
      testimonialText.indexOf(currentTestimonial.text) - 1;

    const previous = testimonialText[positionOfPreviousTestmonial];
    
    const previousObjectTestimonial = testimonials.filter((testimonial) => {
      const testimonialPosition = testimonial.text.indexOf(previous) - 1;
      return testimonialPosition;
    });

    const lastTestimonialInArray =
      testimonials.length === positionOfCurrentTestimonial - 1;

    if (lastTestimonialInArray) {
      setCurrentTestimonial(testimonials[0]);
    } else {
      setCurrentTestimonial(previousObjectTestimonial[0]);
    }

  }

  return (
    <>
      {/* depoimentos carrosel */}
      <section className={styles.depoiments}>
        <h2 className={styles.depoiments__title}>Depoimentos</h2>
        <p className={styles.depoiments__content}>
          Saiba o que dizem nossos melhores clientes a respeito dos produtos
          adquiridos:
        </p>

        <div>
          {/* aqui deve ser um article, verificar */}
          <div className={styles.cardDepoiments}>
            <article className={styles.cardDepoiments__content}>
              {currentTestimonial.text}
            </article>
            <h3 className={styles.cardDepoiments__author}>
              {currentTestimonial.author}
            </h3>
            <p className={styles.cardDepoiments__authorSubtitle}>
              {currentTestimonial.subTitle}
            </p>
          </div>

          {/* controlador do slider */}
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
        </div>
      </section>
    </>
  );
}
