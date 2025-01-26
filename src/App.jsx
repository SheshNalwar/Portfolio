// import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Skills } from "./components/skillSection/Skills";
import Project from "./components/projectSection/Project";
import Test from "./Test";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <section id="Homepage" className="w-full h-screen snap-start">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills" className="w-full h-screen flex items-center justify-center snap-center">
        <Skills />
      </section>
      <section id="Projects" className=" h-screen w-full flex items-center justify-center">
        <Project />
      </section>
      {/* <section id="Contact" className="w-full h-screen flex items-center justify-center">
        <Contact />
      </section> */}
    </>
  );
};

export default App;
