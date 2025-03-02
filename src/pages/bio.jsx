import About from "../components/about";
import "../App.css";
import Skills from "../components/skills";
import Projects from "../components/project";
import Contact from "../components/contact";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
