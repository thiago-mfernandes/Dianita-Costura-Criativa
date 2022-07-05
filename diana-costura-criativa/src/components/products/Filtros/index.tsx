import React from "react";
import data from "../products.json";
import styles from "./Filtro.module.scss";

{/*
1. o estado do filtro esta no pai - produtos
2. o componente filtro recebe duas props: estado(filtro) e setState(setFiltro)
3. o componente filtro eh tipado;

--a logica--

4. dentro do componente filtro, a funcao selecionarFiltro recebe como parametro   o VALOR do PRODUCTS.TYPE de cada BOTAO que foi renderizado. 

4.1 o estado(filtro) eh setado com o valor de item.type setFiltro(item.type)
  No map dentro do return, cada botao recebe um id. Assim, o valor do estado pode ser comparado com o item clicado.

4.2 se o estado ja tiver um valor, eh setado com null, para alternar os estados.
  
0*/}

interface IOpcao {
  id: number;
  type: string;
}

interface Props {
  filtro: string | null;
  setFiltro: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function Filtros({ filtro, setFiltro }: Props) {

  function selecionarFiltro(item: IOpcao) {
    if (filtro === item.type) return setFiltro(null);
    return setFiltro(item.type);
  }

  {/* no className do button eu vou colocar uma classe fixa e uma variavel: se o filtro selecionado for igual a opcao atual, ou seja, se for clicado, uma classe ativa sera aplicada */}

  return (
    <>
      {/* fiz um map dos filtros baseado nas categorias de produtos que o site contem */}
      {data.categories.map((item) => (
        <button
          key={item.id}
          onClick={() => selecionarFiltro(item)}
          className={`${styles.produtosFilter__button} ${filtro === item.type ? styles["button--active"] : ""}`}
        >
          {item.type}
        </button>
      ))}
    </>
  );
}
