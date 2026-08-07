import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Trajectory from "./components/Trajectory";

export default function App() {
  return(
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Trajectory />
        <Contact />
      </main>
    </div>
  );
}