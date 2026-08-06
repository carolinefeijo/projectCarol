import { useState } from "react";
import "./styles.css";
import profile from "../../assets/profile.png";
import ResumeModal from "../ResumeModal";


function Hero() {

  const [showResume, setShowResume] = useState(false);


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


          <a href="#contato">
            Entre em contato
          </a>



          <a
            onClick={() => setShowResume(true)}
          >
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





      <ResumeModal

        open={showResume}

        onClose={() => setShowResume(false)}

      />


    </section>

  );

}


export default Hero;