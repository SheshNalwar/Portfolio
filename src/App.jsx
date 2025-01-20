import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Skills } from "./components/skillSection/Skills";
import Project from "./components/projectSection/Project";
import Test from "./Test";
const App = () => {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills"><Skills /></section>
      <section id="Projects"> <Project /> </section>


    </>
  );
};

export default App;
