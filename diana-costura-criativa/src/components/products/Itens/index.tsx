import data from 'data/products.json';
import Item from '../Itens/Item/';
import styles from './Itens.module.scss';
import { useState, useEffect } from 'react';
import ItemNotFound from './ItemNotFound';

{
  /*
    aqui eh onde estou fazendo o map dos itens, portanto aqui aplico o filtro:
    1. crio um estado de uma lista, que comeca com o objeto data.products
    2. aplico a lista no map, antes era data.produtcs.map
    3. toda vez que um estado (busca, filtro ou ordenador mudar) um hooks precisa ser ativado pra lista ser re-renderizada
    4. o primeiro parametro do useEffect eh uma arrow function e o segundo um array de dependencias[sempre que busca ou filtro atualizar, useEffect funciona]
  */
}

interface Props {
  busca: string;
  filtro: string | null;
  ordenador: string;
}

export default function Itens(props: Props) {
  const { busca, filtro } = props;
  const [lista, setLista] = useState(data.products);
  
  useEffect(() => {
    const novaLista = data.products.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.type)
    );
    setLista(novaLista);
  }, [busca, filtro]);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(type: string) {
    //se existir um um filtro, retorna o id dele. Se nao for, retorna false e nao exibe nada.
    if (filtro !== null) return filtro === type;
    return true;
  }

  {/*
    function ordenar(novaLista: typeof data.products) {
    switch (ordenador) {
      case "estojo_escolar":
        return novaLista.sort((a, b) => (a.title > b.title ? 1 : -1));
      case "fone_carregador":
        return novaLista.sort((a, b) => (a.title > b.title ? 1 : -1));
      case "kits":
        return novaLista.sort((a, b) => (a.title > b.title ? 1 : -1));
      case "mini_necessaire":
        return novaLista.sort((a, b) => (a.title > b.title ? 1 : -1));
      case "higiene_bucal":
        return novaLista.sort((a, b) => (a.title > b.title ? 1 : -1));
      case "porta_oculos":
        return novaLista.sort((a, b) => (a.title > b.title ? 1 : -1));
      case "porta_talheres":
        return novaLista.sort((a, b) => (a.title > b.title ? 1 : -1));
      default:
        return novaLista;
    }
  }
  */}  

  return (
    <>
      <div className={styles.produtosContainerCard}>
        {lista.length < 1 ? <ItemNotFound /> : 
          lista.map((product) => (
            <Item key={product.id} {...product} />
          ))}
      </div>
    </>
  );
}
