import styles from './Item.module.scss';
import { memo } from 'react';
import { motion } from 'framer-motion';
import { allCards } from 'animation/allCards';

interface Props {
  id: number;
  title: string;
  preco: string;
  description: string;
  photo: string;
  photoSlider: string[];
  link?: string
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

function Item({ id, title, preco, description, photo, link}: Props) {
  
  //const rota = [{to: 'produto'}];
  //id === 1 && console.log(title);
  return (
    <motion.div 
      variants={allCards}
      initial='offScreen'
      whileInView='onScreen'
      viewport={{ once:true, amount: 0.8, margin: '450px' }} 
      className={styles.produtosCard} 
      key={id} 
      data-testid="produto" 
      role='product_Item'
    >
      <img 
        src={`${photo}`} 
        alt={title} 
        className={styles.produtosCard__img} 
        role='imagemDoProduto' 
      />
      <h3 className={styles.produtosCard__title} role='tituloDoProduto'>
        {title}
        <br />
        <span role='preçoDoProduto'>{preco}</span>
      </h3>
      <p className={styles.produtosCard__content} role='descriçãoDoProduto'>{description}</p>
      <div className={styles.produtosAction}>
        <a href="https://wa.me/5519983723718" target="_blank" rel="noreferrer">
          <button aria-roledescription='botaoCompraProduto' className={styles.produtosAction__btn}>
            Comprar            
          </button> 
        </a>
        {
          link 
            ? <button className={styles.produtosAction__howUse}>
              <a
                href={link}
                target='_blank'
                rel='noreferrer'>
                  Como Usar?
              </a>
            </button>
            : ''
        }
      </div>
    </motion.div> 
  );
}

export default memo(Item);
