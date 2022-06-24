import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionContainer}>

          <div>
            <img src="" alt="logotipo" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              eligendi ullam provident.
            </p>
            <p>facebook</p>
            <p>instagram</p>
            <p>whats</p>
          </div>

          <address>
            <p>123 Street, New York, USA</p>
            <p>+012 345 67890</p>
            <p>info@example.com</p>
          </address>

          <div>
            <h2>Link's Rápidos</h2>
            <p>Home</p>
            <p>Sobre</p>
            <p>Produtos</p>
            <p>Contato</p>
          </div>

          <div>
            <h2>Novidades</h2>
            <p>
              Cadastre seu email para receber notificações de novos produtos
            </p>
            <input type="text" placeholder="info@example.com" />
            <button>Assinar</button>
          </div>
          <hr />
          <div>
            <p>
              &copy; <span>dianitacosturacriativa.com.br<br/></span> Todos os
              direitos Reservados.
            </p>
            <p>
              Designed by <a href="https://www.instagram.com/thiago_mfernandes/" target="_blank">Thiago Fernandes</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
