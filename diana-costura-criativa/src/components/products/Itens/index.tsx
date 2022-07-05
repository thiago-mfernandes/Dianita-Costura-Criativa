import data from "../products.json";
import Item from "../Itens/Item/";
import styles from "./Itens.module.scss";
import {useState, useEffect} from "react";

{
  /*
    aqui eh onde estou fazendo o map dos itens, portanto aqui aplico o filtro:
    1. crio um estado de uma lista, que comeca com o objeto data.products
    2. aplico a lista no map, antes era data.produtcs.map
    3. toda vez que um estado (busca, filtro ou ordenador mudar) um hoks precisa ser ativado pra lista ser re-renderizada
    4. o primeiro parametro do useEffect eh uma arrow function e o segundo um array de dependencias[sempre que busca ou filtro atualizar, useEffect funciona]
  */
}


interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens(props: Props) {
  const {busca, filtro, ordenador} = props;
  const [lista, setLista] = useState(data.produtcs);
  console.log(lista)

  useEffect(() => {
    const novaLista = data.produtcs.filter(item => testaBusca(item.title) && testaFiltro(item.id));
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    //se existir um um filtro, retorna o id dele. Se nao for, retorna false e nao exibe nada.
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: typeof data) {
    switch(ordenador) {
      case 'Estojo EScolar':
        return novaLista.sort((a, b) => a.)
    }
  }
  
  return (
    <>
      <div className={styles.produtosContainerCard}>
        {lista.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
