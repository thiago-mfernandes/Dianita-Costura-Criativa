import styles from './Item.module.scss';
import { memo } from 'react';

interface Props {
  id: number;
  title: string;
  preco: string;
  description: string;
  photo: string;
  photoSlider: string[];
}

{
  /*
  
    aqui eh onde estou fazendo o map dos itens, portanto aqui aplico o filtro:
    1. crio um estado de uma lista, que comeca com o objeto data.products
    2. aplico a lista no map, antes era data.produtcs.map
    3. toda vez que um estado (busca, filtro ou ordenador mudar) um hoks precisa ser ativado pra lista ser re-renderizada
    4. o primeiro parametro do useEffect eh uma arrow function e o segundo um array de dependencias[sempre que busca ou filtro atualizar, useEffect funciona]
  
    */
}

function Item({ id, title, preco, description, photo}: Props) {
  
  const rota = [{to: 'produto'}];
  //id === 1 && console.log(title);
  return (
    <>
      <div className={styles.produtosCard} key={id}>
        <img src={`${photo}`} alt={title} className={styles.produtosCard__img}/>
        <h3 className={styles.produtosCard__title}>
          {title}
          <br />
          <span>{preco}</span>
        </h3>
        <p className={styles.produtosCard__content}>{description}</p>
        <div className={styles.produtosAction}>
          <button className={styles.produtosAction__btn}>
            Comprar
            <a href="https://wa.me/5519983723718" target="_blank" rel="noreferrer"></a>
          </button> 
        </div>
      </div>       
    </>
  );
}

export default memo(Item);