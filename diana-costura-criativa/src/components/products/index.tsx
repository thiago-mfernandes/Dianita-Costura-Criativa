import styles from "./Produtos.module.scss";
import prdt1 from "assets/produtos/necessaire-tradicional/neces-trad-1.jpeg";

export default function Products() {
  return (
    <>
      {/* produtos header*/}
      <section className={styles.container}>
        <div className={styles.produtosHeader}>
          <h2 className={styles.produtosHeader__title}>Meus Produtos</h2>
          <p className={styles.produtosHeader__content}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            facere tenetur deleniti nostrum assumenda quisquam tempore laborum
            eligendi.
          </p>
        </div>

        {/* produtos filtros */}
        <div className={styles.produtosFilter}>
          <button className={styles.produtosFilter__button}>Bolsas</button>
          <button className={styles.produtosFilter__button}>Bolsas</button>
          <button className={styles.produtosFilter__button}>Bolsas</button>
          <button className={styles.produtosFilter__button}>Bolsas</button>
        </div>

        {/* card produto */}
        <div className={styles.produtosCard}>
          <img
            className={styles.produtosCard__img}
            src={prdt1}
            alt="Necessaire Tradicional"
          />
          <h3 className={styles.produtosCard__title}>
            Necessáire Tradicional <br />
            <span>R$30.00</span>
          </h3>
          <p className={styles.produtosCard__content}>
            Material externo nylon e forro 100% algodão.
          </p>
          <div className={styles.produtosAction}>
            <button className={styles.produtosAction__btn}>Comprar</button>
            <button className={styles.produtosAction__btnDetails}>
              <span className="material-symbols-outlined">info</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
