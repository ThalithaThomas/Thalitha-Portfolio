import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./navbar.css";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const handleClickMenu = () => {
    setClick(false);
  };

  return (
    <nav className="navbar" id="navbar">
      <h2>Thalitha sambo</h2>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <RouterLink activeClass="active" to="/" onClick={handleClickMenu}>
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            activeClass="active"
            to="/aboutme"
            onClick={handleClickMenu}
          >
            About
          </RouterLink>
        </li>
        <li>
          <ScrollLink
            to="skills"
            activeClass="active"
            onClick={handleClickMenu}
          >
            Skills
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            offset={-40}
            duration={500}
            onClick={handleClickMenu}
          >
            Project
          </ScrollLink>
        </li>
        <li>
          <button className="sayHi">
            <ScrollLink
              activeClass="active"
              to="contact"
              spy={true}
              offset={-40}
              duration={500}
              onClick={handleClickMenu}
            >
              Say Hello
            </ScrollLink>
          </button>
        </li>
      </ul>
      <div className="menu" onClick={handleClick}>
        {click ? <FaTimes className="faBars" /> : <FaBars className="faBars" />}
      </div>
    </nav>
  );
};

export default Navbar;
