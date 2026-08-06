function ResumeModal({ open, onClose }) {


  if (!open) return null;


  return (

    <div
      className="resume-overlay"
      onClick={onClose}
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
          href="/curriculo-caroline-feijo.pdf"
          download="Caroline-Feijo-Desenvolvedora-Front-End.pdf"
          className="download-resume"
        >
          Baixar currículo
        </a>


      </div>


    </div>

  );

}


export default ResumeModal;



const style = document.createElement("style");

style.textContent = `


.resume-overlay {

  position: fixed;

  inset: 0;

  background: rgba(0,0,0,.55);

  display: flex;

  align-items: center;

  justify-content: center;

  z-index: 999;

}



.resume-modal {

  background: var(--surface);

  width: 90%;

  max-width: 850px;

  height: 90vh;

  padding: 30px;

  border-radius: 20px;

  display: flex;

  flex-direction: column;

  gap: 20px;

  animation: resumeShow .25s ease;

}



.resume-modal h3 {

  font-family: "Cormorant Garamond", serif;

  font-size: 32px;

  text-align: center;

  margin: 0;

}



.resume-modal iframe {

  width: 100%;

  flex: 1;

  border: none;

  border-radius: 12px;

}



.download-resume {

  display: flex;

  justify-content: center;

  align-items: center;

  padding: 14px 25px;

  border-radius: 999px;

  background: var(--pink);

  color: white;

  text-decoration: none;

  transition: .3s;

}



.download-resume:hover {

  transform: translateY(-3px);

  opacity: .9;

}



@keyframes resumeShow {


  from {

    opacity: 0;

    transform: translateY(20px);

  }


  to {

    opacity: 1;

    transform: translateY(0);

  }


}




@media(max-width:900px){


  .resume-modal {

    width: 95%;

    height: 85vh;

    padding: 20px;

  }



  .resume-modal h3 {

    font-size: 26px;

  }


}


`;


document.head.appendChild(style);