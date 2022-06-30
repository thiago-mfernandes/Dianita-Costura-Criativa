import styles from "./Materials.module.scss";
import Linhas from "assets/flaticon/yarn.svg";
import Tecido from "assets/flaticon/tecido.svg";
import Botao from  "assets/flaticon/botao.svg";
import Agulha from "assets/flaticon/agulha.svg";

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
            <img
              src={Linhas}
              alt="Ilustração de Linhas"
              className={styles.materials__card___icon}
            />
            <h3 className={styles.materials__card___title}>Linhas de Poliamida</h3>
            <p className={styles.materials__card___content}>
              Linha de costura não é tudo igual! Cada linha tem a sua indicação
              de uso. Linhas de algodão utilizadas para tecidos de fibras
              naturais e linhas sintéticas para tecidos sintéticos e naturais!
              Por aqui, escolhemos sempre o uso mais adequado.
            </p>
          </div>

          <div className={styles.materials__card}>
            <img
              src={Tecido}
              alt="Tecido 100% Algodão"
              className={styles.materials__card___icon}
            />
            <h3 className={styles.materials__card___title}>
              Tecido 100% Algodão
            </h3>
            <p className={styles.materials__card___content}>
            Conforto nos dias mais quentes, versatilidade de cores e formas e maior durabilidade são alguns dos motivos para o sucesso do algodão.
            </p>
          </div>

          <div className={styles.materials__card}>
            <img
              src={Botao}
              alt="Botões de Plástico de Metal"
              className={styles.materials__card___icon}
            />
            <h3 className={styles.materials__card___title}>Botões de Plástico de Metal</h3>
            <p className={styles.materials__card___content}>
              Feitos de Resina plastica altamente durável ou ligas metálicas que evitam a oxidação, um problema muito inconveniente.
            </p>
          </div>

          <div className={styles.materials__card}>
            <img
              src={Agulha}
              alt="Material Sintético"
              className={styles.materials__card___icon}
            />
            <h3 className={styles.materials__card___title}>Material Sintético</h3>
            <p className={styles.materials__card___content}>
            A produção de peças em material sintético é menos custosa do que as das criadas a partir do couro. Por isso, seu preço final (que chega até o consumidor) tende a ser mais barato. A textura das peças de material sintético é muito similar às de couro legítimo.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
