import styles from "./Produtos.module.scss";
import {ReactComponent as Logo} from "assets/logo-preto.svg"

export default function Produtos() {
  return (
    <>
    {/*pré cabecalho */}
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

      {/*cabecalho */}
      <section>
        <div>
          <Logo />
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </div>

        <div>
          {/*container do titulo principal e botao */}
          <div>
            <div>
              <p>Feitos à mão com</p>
              <p>Paixão</p>
            </div>
            <div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel corporis ducimus tempora reiciendis error, quaerat totam, quam, labore aspernatur beatae nemo.</p>
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
