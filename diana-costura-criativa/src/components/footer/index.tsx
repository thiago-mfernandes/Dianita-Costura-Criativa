import styles from "Footer.module.scss";

export default function Footer() {
  return (
    <>
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
  );
}
