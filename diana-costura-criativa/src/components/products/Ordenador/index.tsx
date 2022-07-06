import styles from './Ordenador.module.scss';
import opcoes from 'data/opcoes.json';
import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

{
  /*
    1. o componente ordenador possui uma variavel que guarda um estado(aberto) e funcao(setAberto), iniciando em false.
    2. ao clicar no botao, o estado aberto alterna seu valor booleano. Se estiver como false vai pra true, se estiver em true vira false.
    3. o botao tbm tem a funcao onBlur, ao clicar fora das opcoes, o estado eh setado como false 
    4. NO SPAN, se o esta esta true, renderiza um icone de aberto, senao icone fechado
    5. NA DIV OPCOES, no className: em um template string, a primeira interpolcao ${} injeta a classe e a segunda interpolação ${} verifica a condição: o estado esta berto? injeta a classe opcoes--ativo, senao, string vazia
    6. tipar o estado de ordenador e setOrdenador
    7. Quando a div que contem cada opcao for clicada, o setOrdenador vai passar para o estado[ordenador, ...] a opcao.value
    8. O botao do ordenador vai receber uma classe css e e verificar o estado do ordenador: se o estado for diferente de uma string vazia, o ordenador recebe uma classe --ativa
    8. Esse estado com a opcao.value sera exibido dentro do span, porem ele passa o value, entao temos que criar uma constate
*/
}

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);
  {
    /* 
        9. nomeOrdenador recebe = 
        9.1. se o o estado possuir um valor ?
        9.2. entao percorro o objeto opcoes com o metodo find, passando cada opcao como parametro
        9.3.onde verifico se cada opcao.value eh igual ao ordenador. Aqui retorna o objeto que contem o mesmo valor, entao eu concateno a chave -- (opcao.value === ordenador).nome -- pra obter o valor do nome 
        9.4. aplico a variavel nomeOrdenador no span
    */
  }
  const nomeOrdenador =
    ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;

  return (
    <>
      <button
        className={`
            ${styles.ordenador} 
            ${ordenador !== '' ? styles['ordenador--ativo'] : ''}
        `}
        onClick={() => setAberto(!aberto)}
        onBlur={() => setAberto(false)}
      >
        <span>{nomeOrdenador || 'Ordenar Por'}</span>
        {aberto ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}
        <div
          className={`${styles.ordenador__opcoes} ${
            aberto ? styles['ordenador__opcoes--ativo'] : ''
          }`}
        >
          {opcoes.map((opcao) => (
            <div
              className={styles.ordenador__opcao}
              key={opcao.value}
              onClick={() => setOrdenador(opcao.value)}
            >
              {opcao.nome}
            </div>
          ))}
        </div>
      </button>
    </>
  );
}
