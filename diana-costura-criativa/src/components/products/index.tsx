import styles from "./Produtos.module.scss";
import { IoIosAdd } from "react-icons/io";
import data from "./products.json";

export default function Products() {
  return (
    <>
      {/* produtos header*/}
      <section className={styles.container}>
        <div className={styles.produtosHeader}>
          <h2 className={styles.produtosHeader__title}>Meus Produtos</h2>
          <p className={styles.produtosHeader__content}>
            A marca Dianita costura criativa, é especialista em oferecer
            produtos para a organização e praticidade ao seu dia a dia no
            trabalho e/ou lazer, aliada a muito estilo e bom gosto. E aquele
            acabamento perfeito com detalhes que você só encontra em um produto
            artesanal.
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

        {/* card produto */}
        <div className={styles.produtosContainerCard}>
        {data.produtcs.map((product) => (
            <div className={styles.produtosCard} key={product.id}>
              <img
                className={styles.produtosCard__img}
                src={`${product.photo}`}
                alt={product.title}
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
                  <IoIosAdd className={styles.produtosAction__btnDetails___icon}/>
                </button>
              </div>
            </div>
        ))}
        </div>
      </section>
    </>
  );
}
