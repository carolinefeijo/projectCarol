import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Links from "./components/Links";
import ScrollButton from "./components/Scrollbutton";

function App() {
  return (
    <>
      <Hero />
      <About /> 
      <Technologies />
      <Links />

            <ScrollButton />

    </>
  );
}

export default App;