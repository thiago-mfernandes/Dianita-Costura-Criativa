import { ReactComponent as Logo } from "assets/logo-preto.svg";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      {/* header */}
      {/* pré cabecalho */}
      <div>
        <div>
          <i>pin</i>
          <p>Piracicaba - São Paulo, Brazil</p>
          <i>email</i>
          <p>info@example.com</p>
        </div>
        <div>
          <p>Redes Sociais:</p>
          <i>face</i>
          <i>insta</i>
          <i>WhatsApp</i>
        </div>
      </div>
      {/* cabecalho */}
      <section>
        <div>
          <Logo />
          <nav>
            <ul>
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>Sobre</p>
              </li>
              <li>
                <p>Produtos</p>
              </li>
              <li>
                <p>Contato</p>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          {/*container do titulo principal e botao */}
          <div>
            <div>
              <h2>Feitos à mão com</h2>
              <h1>Paixão</h1>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
                corporis ducimus tempora reiciendis error, quaerat totam, quam,
                labore aspernatur beatae nemo.
              </p>
              <button>Saiba Mais</button>
            </div>
          </div>
          {/*container da imagem de capa */}
          <div>
            <img src="assets/produto-ex.png" alt="Produto" />
          </div>
        </div>
      </section>
    </>
  );
}
