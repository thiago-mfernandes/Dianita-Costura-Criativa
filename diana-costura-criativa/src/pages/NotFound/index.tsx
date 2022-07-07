import { ReactComponent as PageNotFound } from 'assets/NotFound.svg';
import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';

{/*

  1.importar o useNavigate
  2.o função useNavigate funciona como pilha de dados;
  
  3.criar uma constate e passar como parametro 
  3.1 string( ex.: /home);
  3.2 numero( ex.: -1); que volta na pilha de paginas;

*/}

export default function NotFound() {

  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <button 
        className={styles.botao}
        onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <PageNotFound />
    </div>
  );
}