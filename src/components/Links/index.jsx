import { useState } from "react";
import "./styles.css";


function Links() {

  const [showEmail, setShowEmail] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const [copied, setCopied] = useState(false);



  function copyEmail() {

    navigator.clipboard.writeText(
      "contatodevcarol@gmail.com"
    );


    setCopied(true);


    setTimeout(() => {
      setCopied(false);
    }, 2000);

  }



  return (

    <section className="links">


      <h2>
        Vamos <span>conversar?</span>
      </h2>


      <p>
        Confira meus projetos, experiências e formas de contato.
      </p>



      <div className="links-container">


        <a 
          href="https://www.linkedin.com/in/caroline-feij%C3%B3-26225a236/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>



        <a 
          href="https://github.com/carolinefeijo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>



        <button
          className="link-button"
          onClick={() => setShowResume(true)}
        >
          Currículo
        </button>



        <a 
          href="https://wa.me/554884397717?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20com%20voc%C3%AA%20!"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>



        <button 
          className="link-button"
          onClick={() => setShowEmail(true)}
        >
          Email
        </button>



       



      </div>





      {/* MODAL EMAIL */}

      {showEmail && (

        <div 
          className="email-overlay"
          onClick={() => setShowEmail(false)}
        >


          <div 
            className="email-modal"
            onClick={(e) => e.stopPropagation()}
          >


            <h3>
              Meu email
            </h3>


            <p>
              contatodevcarol@gmail.com
            </p>



            <button
              onClick={copyEmail}
            >
              {copied ? "Email copiado ✓" : "Copiar email"}
            </button>



          </div>


        </div>

      )}







      {/* MODAL CURRÍCULO */}

      {showResume && (

        <div 
          className="email-overlay"
          onClick={() => setShowResume(false)}
        >


          <div 
            className="resume-modal"
            onClick={(e) => e.stopPropagation()}
          >


            <h3>
              Meu currículo
            </h3>



          <iframe
  src="/curriculo.pdf"
  title="Currículo Caroline Feijó"
/>



            <a
              href="/curriculo.pdf"
              download
              className="download-resume"
            >
              Baixar currículo
            </a>



          </div>


        </div>

      )}



    </section>

  );

}


export default Links;