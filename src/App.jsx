import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Skills } from "./components/skillSection/Skills";
import Projects from "./components/projects/projects";
import Test from "./Test";
const App = () => {
  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills"><Skills /></section>
      <section id="Projects"> <Projects /> </section>
      <section id="Portfolio">Parallax</section>
      <section id="Contact">Contact</section>
      {/* <Test /> */}

    </>
  );
};

export default App;
