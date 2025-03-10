import Home from "./pages/home";
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
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
