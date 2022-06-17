import styles from 'Produtos.module.scss';

export default function Products() {
    return (
        <>
        {/* produtos */}
      <section>
        <div>
          <h2>Meus Produtos</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            facere tenetur deleniti nostrum assumenda quisquam tempore laborum
            eligendi.
          </p>
        </div>
        <div>
          <button>Bolsas</button>
          <button>Bolsas</button>
          <button>Bolsas</button>
          <button>Bolsas</button>
        </div>
        {/* card produto */}
        <div>
          <img src="assets/produto-ex.png" alt="" />
          <h3>Necessaire</h3>
          <p>Valor R$20.00</p>
          <div>
            <button>
              <p>Comprar</p>
            </button>
            <i>details</i>
          </div>
        </div>
      </section>
        </>
    )
}