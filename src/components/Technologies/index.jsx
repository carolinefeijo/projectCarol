import { useEffect, useRef } from "react";
import "./styles.css";


function Technologies() {

  const sectionRef = useRef(null);


  useEffect(() => {

    const section = sectionRef.current;


    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {

          section.classList.add("show");

          observer.disconnect();

        }

      },
      {
        threshold: 0.2,
      }
    );


    observer.observe(section);


    return () => observer.disconnect();

  }, []);



 const groups = [

{
 title: "Desenvolvimento",
 items: [
  "React",
  "Vue.js",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Styled Components",
  "React Native",
  "Node.js",
  "Express.js",
  "REST API",
  "PostgreSQL",
  "Prisma ORM",
  "Quasar Framework"
 ]
},

{
  title: "Design & Experiência",
  items: [
    "Figma",
    "UI Design",
    "UX Design",
    "Design System",
    "Componentes UI",
    "Prototipação",
    "Wireframes",
    "User Flow",
    "Design Tokens",
    "Auto Layout",
    "Variantes no Figma",
    "Bibliotecas de Componentes",
    "Responsive Design",
    "Mobile First",
    "Acessibilidade"
  ]
},

{
  title: "Ferramentas",
  items: [
    "Git",
    "GitHub",
    "VS Code",
    "Figma",
    "Figma Dev Mode",
    "Jira",
    "Trello",
    "Monday.com",
    "ClickUp",
    "Postman",
    "Insomnia",
    "Vercel",
    "NPM",
    "Chrome DevTools"
  ]
},

{
 title: "Gestão & Colaboração",
 items: [
  "Jira",
  "Trello",
  "ClickUp",
  "Monday",
  "Scrum",
  "Kanban"
 ]
},

{
 title: "Boas práticas",
 items: [
  "Clean Code",
  "Componentização",
  "Mobile First",
  "Performance Web",
  "Acessibilidade",
  "Integração com APIs"
 ]
}

];



  return (

    <section 
      className="technologies"
      ref={sectionRef}
    >


      <div className="technologies-header">

        <span>
          Tecnologias
        </span>


        <h2>
          Ferramentas que transformam
          <span> ideias </span>
          em soluções digitais
        </h2>


      </div>



      <div className="technologies-grid">


        {groups.map((group) => (

          <div 
            className="technology-card"
            key={group.title}
          >


            <h3>
              {group.title}
            </h3>



            <div className="technology-tags">

              {group.items.map((item) => (

                <span key={item}>
                  {item}
                </span>

              ))}

            </div>


          </div>

        ))}


      </div>


    </section>

  );

}


export default Technologies;