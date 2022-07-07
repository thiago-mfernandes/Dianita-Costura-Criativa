import styles from './Item.module.scss';
import { IoIosAdd } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: number;
  title: string;
  preco: string;
  description: string;
  photo: string;
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

export default function Item({ id, title, preco, description, photo }: Props) {
  
  const productVerMais = {
    id: id, 
    title: title, 
    preco: preco, 
    description: description, 
    photo: photo
  };

  const rota = {
    label: 'Ver Mais',
    to: '/verMais'
  };

  {/*
    1. crio esta funcao para passar por parametro o objeto que esta sendo visto com mais detalhes para o componente Ver Mais
    2. import useNavigate;
    3. const navigate = useNavigate();
  */}

  const navigate = useNavigate();
  function redirecionarParaVerMais(productVerMais: Props) {
    navigate(`/verMais/${productVerMais.id}`, {state: {...productVerMais}});
  }

  return (
    <>
      <div className={styles.produtosCard} key={id}>
        <img className={styles.produtosCard__img} src={photo} alt={title} />
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
          <Link to='/verMais'>
            <button 
              className={styles.produtosAction__btnDetails}
              onClick={() => redirecionarParaVerMais(productVerMais)}
            >
              <IoIosAdd className={styles.produtosAction__btnDetails___icon} />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
