import styles from './VerMais.module.scss';
import { useLocation } from 'react-router-dom'; 

interface Props {
  id: number;
  title: string;
  preco: string;
  description: string;
  photo: string;
}

export default function VerMais() {
  console.log(useLocation());
  return (
    <>
      <p> teste </p>
    </>
  );
}