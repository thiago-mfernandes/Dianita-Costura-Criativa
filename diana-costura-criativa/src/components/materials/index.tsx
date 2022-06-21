import styles from "./Materials.module.scss";
import Linhas from "assets/flaticon/yarn.svg";

export default function Materials() {
  return (
    <>
      {/* meus materiais */}
      <section className={styles.materials}>
        <div className={styles.materials__container}>
          <h2 className={styles.materials__title}>Meus Materiais</h2>
          <p className={styles.materials__content}>
            Todos os itens que compõe cada peça da nossa linha são
            criteriosamente escolhidos, um a um, para que o acabamento final e
            qualidade de cada unidade seja o mais alto e belo possível, porque
            faço com <span>dedicação!</span>
          </p>
        </div>

        <div className={styles.materials__container}>
          {/* card material */}
          <div className={styles.materials__card}>
            <img src={Linhas} alt="Ilustração de Linhas" className={styles.materials__card___icon}/>
            <h3 className={styles.materials__card___title}>Linhas Premium</h3>
            <p className={styles.materials__card___content}>
              Linha de costura não é tudo igual! Cada linha tem a sua indicação de uso. Linhas de algodão utilizadas para tecidos de fibras naturais e linhas sintéticas para tecidos sintéticos e naturais! Por aqui, escolhemos sempre o uso mais adequado.
            </p>
          </div>

          <div className={styles.materials__card}>
            <img src={Linhas} alt="Ilustração de Linhas" className={styles.materials__card___icon}/>
            <h3 className={styles.materials__card___title}>Linhas Premium</h3>
            <p className={styles.materials__card___content}>
              Linha de costura não é tudo igual! Cada linha tem a sua indicação de uso. Linhas de algodão utilizadas para tecidos de fibras naturais e linhas sintéticas para tecidos sintéticos e naturais! Por aqui, escolhemos sempre o uso mais adequado.
            </p>
          </div>

          <div className={styles.materials__card}>
            <img src={Linhas} alt="Ilustração de Linhas" className={styles.materials__card___icon}/>
            <h3 className={styles.materials__card___title}>Linhas Premium</h3>
            <p className={styles.materials__card___content}>
              Linha de costura não é tudo igual! Cada linha tem a sua indicação de uso. Linhas de algodão utilizadas para tecidos de fibras naturais e linhas sintéticas para tecidos sintéticos e naturais! Por aqui, escolhemos sempre o uso mais adequado.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
