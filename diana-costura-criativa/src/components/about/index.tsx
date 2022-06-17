import styles from "./About.module.scss";

export default function About() {
  return (
    <>
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
    </>
  );
}
