import styles from 'Contact.module.scss';

export default function Contact() {
  return (
    <>
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
    </>
  );
}
