import Home from "./pages/home";
import SkillsPage from "./pages/skills-page";
import Projectpage from "./pages/project-page";
import ContactPage from "./pages/contact-page";
import AboutMe from "./pages/bio";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<Projectpage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
