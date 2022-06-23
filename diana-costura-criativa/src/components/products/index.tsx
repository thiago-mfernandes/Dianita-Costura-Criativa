import styles from "./Produtos.module.scss";
import necessTrad1 from "assets/produtos/necessaire-tradicional/neces-trad-1.jpeg";
import data from "./products.json";


export default function Products() {
  return (
    <>
      {/* produtos header*/}
      <section className={styles.container}>
        <div className={styles.produtosHeader}>
          <h2 className={styles.produtosHeader__title}>Meus Produtos</h2>
          <p className={styles.produtosHeader__content}>
            O que os meus produtos oferecem de beneficios para os meus clientes?
            Porque devo comprá-los?
          </p>
        </div>

        {/* produtos filtros */}
        <div className={styles.produtosFilter}>
          <button className={styles.produtosFilter__button}>Necessàire</button>
          <button className={styles.produtosFilter__button}>
            Porta-Óculos
          </button>
          <button className={styles.produtosFilter__button}>
            Mini-Necessàire
          </button>
          <button className={styles.produtosFilter__button}>Kit</button>
        </div>

        {/* card produto 
        {/* necessaire tradicional */}
        {data.produtcs.map((product) => (
          <div className={styles.produtosCard} key={product.id}>
            <img
              className={styles.produtosCard__img}
              src={`${product.image.url}`}
              alt={product.image.alt}
            />
            <h3 className={styles.produtosCard__title}>
              {product.title}
              <br />
              <span>{product.preco}</span>
            </h3>
            <p className={styles.produtosCard__content}>
              {product.description}
            </p>
            <div className={styles.produtosAction}>
              <button className={styles.produtosAction__btn}>Comprar</button>
              <button className={styles.produtosAction__btnDetails}>
                <span className="material-symbols-outlined">info</span>
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
