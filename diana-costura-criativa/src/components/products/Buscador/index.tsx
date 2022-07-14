import React, { memo } from 'react';
import styles from './Buscador.module.scss';

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

function Buscador({ busca, setBusca }: Props) {
  return (
    <>
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className={styles.busca}
        placeholder="Filtre por categoria"
      />      
    </>
  );
}

export default memo(Buscador);
