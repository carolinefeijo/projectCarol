import "./styles.css";
import profile from "../../assets/profile.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-subtitle">
          Desenvolvedora Front-end • UI/UX Designer
        </span>

        <h1>
          Caroline <span>Feijó</span>
        </h1>

        <p>
          Entre código, design e experiência do usuário, encontro a forma de transformar ideias em soluções digitais. Como desenvolvedora Front-End, meu propósito é criar interfaces que vão além da estética: experiências intuitivas, funcionais e cuidadosamente construídas para tornar a tecnologia mais simples, acessível e próxima das pessoas.
        </p>

        <div className="hero-buttons">

          <a href="#contact">
            Entre em contato
          </a>

          <a href="/curriculo.pdf" target="_blank">
            Ver currículo
          </a>

        </div>

      </div>


      <div className="hero-image">

        <img
          src={profile}
          alt="Caroline Feijó"
        />

      </div>

    </section>
  );
}

export default Hero;