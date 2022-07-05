import styles from "./Itens.module.scss";
import { IoIosAdd } from "react-icons/io";

interface Props {
  id: number;
  title: string;
  preco: string;
  description: string;
  photo: string;
}

export default function Item({ id, title, preco, description, photo }: Props) {
  return (
    <>
      <div className={styles.produtosCard} key={id}>
        <img
          className={styles.produtosCard__img}
          src={`${photo}`}
          alt={title}
        />
        <h3 className={styles.produtosCard__title}>
          {title}
          <br />
          <span>{preco}</span>
        </h3>
        <p className={styles.produtosCard__content}>{description}</p>
        <div className={styles.produtosAction}>
          <a href="https://wa.me/5519983723718" target="_blank">
            <button className={styles.produtosAction__btn}>Comprar</button>
            <button className={styles.produtosAction__btnDetails}>
              <IoIosAdd className={styles.produtosAction__btnDetails___icon} />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
