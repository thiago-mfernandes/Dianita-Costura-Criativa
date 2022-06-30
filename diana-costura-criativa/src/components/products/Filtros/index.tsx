import React from "react";
import data from "../products.json";
import styles from "./Filtro.module.scss";

interface IOpcao {
  id: number;
  type: string;
}

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {
  
  function selecionarFiltro(item: IOpcao) {
    if (filtro === item.id) return setFiltro(null);
    return setFiltro(item.id)
  }

  {/* no className do button eu vou colocar uma classe fixa e uma variavel: se o filtro selecionado for igual a opcao atual, ou seja, se for clicado, uma classe ativa sera aplicada */}

  return (
    <>
      {/* fiz um map dos filtros baseado nas categorias de produtos que o site contem */}
      {data.categories.map((item) => (
        <button
          key={item.id}
          onClick={() => selecionarFiltro(item)}
          className={`${styles.produtosFilter__button} ${filtro === item.id ? styles["button--active"] : ""}`}
        >
          {item.type}
        </button>
      ))}
    </>
  );
}
