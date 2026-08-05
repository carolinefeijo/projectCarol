import "./styles.css";

function About() {
  return (
    <section className="about">

      <div className="about-content">

        <span className="about-subtitle">
          Sobre mim
        </span>


        <h2>
          Tecnologia com um olhar
          <span> humano</span>
        </h2>


        <p>
          Minha trajetória une educação, tecnologia e criatividade.
          Antes de me tornar desenvolvedora, minha formação em Pedagogia
          me ensinou a compreender pessoas, necessidades e diferentes
          formas de aprendizado.
        </p>


        <p>
          Encontrei na tecnologia uma nova forma de transformar esse olhar
          em experiências digitais. Hoje atuo como Desenvolvedora Front-End
          e UI/UX Designer, criando interfaces que equilibram organização,
          estética e usabilidade.
        </p>


        <p>
          Sou apaixonada por transformar ideias em produtos digitais,
          buscando sempre criar soluções simples, intuitivas e que façam
          sentido para quem utiliza.
        </p>


      </div>



<div className="about-highlight">

  <div>
    <strong>Front-End</strong>
    <span>
      Desenvolvimento de interfaces modernas, responsivas e focadas na experiência do usuário
    </span>
  </div>


  <div>
    <strong>Design</strong>
    <span>
      Criação de experiências visuais intuitivas, funcionais e alinhadas ao produto
    </span>
  </div>


  <div>
    <strong>Comunicação</strong>
    <span>
      Facilidade em entender pessoas, organizar ideias e transformar necessidades em soluções
    </span>
  </div>


  <div>
    <strong>Visão Humana</strong>
    <span>
      Tecnologia criada com empatia, criatividade e foco em quem utiliza
    </span>
  </div>

</div>
















      {/* <div className="about-highlight">

        <div>
          <strong>Front-End</strong>
          <span>Desenvolvimento de interfaces</span>
        </div>


        <div>
          <strong>UI/UX</strong>
          <span>Experiências digitais</span>
        </div>


        <div>
          <strong>Educação</strong>
          <span>Olhar centrado nas pessoas</span>
        </div>

      </div> */}


    </section>
  );
}

export default About;