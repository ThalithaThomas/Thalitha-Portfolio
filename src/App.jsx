import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
