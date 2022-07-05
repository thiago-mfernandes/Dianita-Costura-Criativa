import styles from "./Produtos.module.scss";
import data from "./products.json";
import Buscador from "./Buscador";
import Filtros from "./Filtros";
import { useState } from "react";
import Ordenador from "./Ordenador";
import Item from "./Itens";

export default function Products() {
  //o estado do buscador fica um nivel acima dele mesmo
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");

  return (
    <>
      {/* produtos header*/}
      <section className={styles.container}>
        <div className={styles.produtosHeader}>
          <h2 className={styles.produtosHeader__title}>Meus Produtos</h2>
          <p className={styles.produtosHeader__content}>
            A marca Dianita costura criativa, é especialista em oferecer
            produtos para a organização e praticidade ao seu dia a dia no
            trabalho e/ou lazer, aliada a muito estilo e bom gosto. E aquele
            acabamento perfeito com detalhes que você só encontra em um produto
            artesanal.
          </p>
        </div>

        {/* produtos buscador */}
        {/* buscador possui um atributo busca que eh o ESTADO de busca que esta no pai, e uma funcao de busca. Passar via props para ser renderizado no componente*/}
        <div className={styles.produtosContainerBuscarOrdenar}>
          <Buscador busca={busca} setBusca={setBusca} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>

        {/* produtos filtros */}
        <div className={styles.produtosFilter}>
          <p className={styles.produtosHeader__content}>
            Selecione seu tipo preferido:
          </p>
          {/* passo para o componente receber o estado e a funcao */}
          <Filtros filtro={filtro} setFiltro={setFiltro} />
        </div>

        {/* card produto */}
        <div className={styles.produtosContainerCard}>
          {data.produtcs.map((product) => (
            <>
              <Item key={product.id} {...product} />
            </>
          ))}
        </div>
      </section>
    </>
  );
}
