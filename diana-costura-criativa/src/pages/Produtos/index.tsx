import styles from "./Produtos.module.scss";
import { ReactComponent as Logo } from "assets/logo-preto.svg";

export default function Produtos() {
  return (
    <>

      {/*cabecalho */}

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

      {/* about/sobre */}
      <section>
        <div>
          <img src="assets/diana-perfil.png" alt="Foto de perfil da Diana" />
          <div>
            <h2>Quem Sou</h2>
            <p>
              Qualificações: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Dicta porro ullam aut obcaecati voluptatibus quidem quos
              blanditiis recusandae! Atque ea earum, harum nulla itaque iusto
              animi numquam voluptatibus ratione libero!
            </p>
            <button>Saiba Mais</button>
          </div>
        </div>
      </section>

      {/* meus materiais */}
      <section>
        <div>
          <h2>Meus Materiais</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
            temporibus reiciendis exercitationem ullam inventore voluptas sit
            deleniti dolores quam porro blanditiis alias modi, eum aliquid
            praesentium, ad eos! Veritatis, quisquam?
          </p>
        </div>
        <div>
          {/* card material */}
          <div>
            <img src="" alt="ilustracao do material" />
            <h3>Linhas Premium</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
              aliquid. In explicabo repudiandae
            </p>
          </div>
          {/* card material */}
          <div>
            <img src="" alt="ilustracao do material" />
            <h3>Linhas Premium</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
              aliquid. In explicabo repudiandae
            </p>
          </div>
          {/* card material */}
          <div>
            <img src="" alt="ilustracao do material" />
            <h3>Linhas Premium</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
              aliquid. In explicabo repudiandae
            </p>
          </div>
        </div>
      </section>

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

      {/* localizacao */}
      <section>
        <h2>localizacao</h2>
        <img src="" alt="" />
      </section>

      {/* depoimentos carrosel*/}
      <section>
        <h2>depoimentos</h2>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla modi,
            nobis minima est harum omnis impedit, culpa totam et, quos
            recusandae provident voluptas soluta iste cumque. Dolorem in natus
            ab.
          </p>
          <div>
            <img src="" alt="" />
            <div>
              <h3>Thiago Fernandes</h3>
              <p>Programador</p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              modi, nobis minima est harum omnis impedit, culpa totam et, quos
              recusandae provident voluptas soluta iste cumque. Dolorem in natus
              ab.
            </p>
            <div>
              <img src="" alt="" />
              <div>
                <h3>Thiago Fernandes</h3>
                <p>Programador</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contato */}
      <section>
        <div>
          <h2>Contato</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            suscipit repudiandae blanditiis at corporis, nam inventore eaque ea,
            repellendus quia soluta porro aut adipisci recusandae dicta
            assumenda, velit ipsam ex.
          </p>
        </div>
        <div>
          <div>
            <h3>Telefone</h3>
            <p>00.00000.0000</p>
            <h3>Email</h3>
            <p>00.00000.0000</p>
            <h3>Localização</h3>
            <p>00.00000.0000</p>
            <h3>Redes Sociais</h3>
            <div>
              <i>face</i>
              <i>insta</i>
              <i>whats</i>
            </div>
          </div>
        </div>

        <form action="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            dignissimos soluta atque veniam porro, laudantium impedit inventore
            quis voluptatem aliquid dolorem ratione perspiciatis magnam sit
            fugit explicabo natus provident molestiae.
          </p>
          <div>
            <input
              type="text"
              name="nome"
              required
              placeholder="Informe seu nome.."
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Informe seu email.."
            />
          </div>
          <input
            type="text"
            name="assunto"
            required
            placeholder="Informe seu assunto.."
          />
          <input
            type="message"
            name="message"
            required
            placeholder="Informe sua mensagem.."
          />
          <button>Enviar Mensagem</button>
        </form>
      </section>

      {/* footer*/}
      <footer>
        <div>
          <img src="" alt="Logotipo Dianita Costura Criativa" />
          <p>Feitos à mão com paixão</p>
          <div>
            <div>
              <i>facebook</i>
            </div>
            <div>
              <i>instagram</i>
            </div>
            <div>
              <i>whatsapp</i>
            </div>
          </div>
        </div>

        <div>
          <h3>Localização</h3>
          <p>
            <i>pin</i>Piracicaba - São Paulo - Brazil
          </p>
          <p>
            <i>tel</i>+55 19 99999-9999
          </p>
          <p>
            <i>mail</i>info@example.com
          </p>
        </div>

        <div>
          <h3>Links</h3>
          <p>link - Home</p>
          <p>link - Sobre</p>
          <p>link - Produtos</p>
          <p>link - Contato</p>
        </div>

        <div>
          <h3>Novidades</h3>
          <p>Cadastre seu email e receba nossas novidades!</p>
          <input type="email" name="email" placeholder="info@example.com" />
          <button>Cadastrar</button>          
        </div>
      </footer>

    </>
  )
}
