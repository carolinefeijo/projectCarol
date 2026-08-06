import { useEffect, useState } from "react";


function ScrollButton() {

  const [showButton, setShowButton] = useState(false);


  useEffect(() => {

    function handleScroll() {

      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

    }


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };


  }, []);



  function scrollTop() {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }



  return (

    showButton && (

      <button
        className="scroll-button"
        onClick={scrollTop}
      >
        ↑
      </button>

    )

  );

}

const style = document.createElement("style");

style.textContent = `

.scroll-button {

  position: fixed;

  right: 30px;

  bottom: 30px;

  width: 52px;

  height: 52px;

  border-radius: 50%;

  border: none;

  background: var(--pink);

  color: white;

  font-size: 24px;

  cursor: pointer;

  z-index: 999;

  transition: .3s;

}


.scroll-button:hover {

  transform: translateY(-5px);

}


@media(max-width:900px){

  .scroll-button {

    right:20px;

    bottom:20px;

  }

}

`;

document.head.appendChild(style);


export default ScrollButton;