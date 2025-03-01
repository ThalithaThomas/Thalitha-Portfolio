import { Link } from "react-scroll";
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
          <Link
            activeClass="active"
            to="home"
            spy={true}
            offset={-100}
            duration={500}
            onClick={handleClickMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            offset={-100}
            duration={500}
            onClick={handleClickMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            offset={-100}
            duration={500}
            onClick={handleClickMenu}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            offset={-100}
            duration={500}
            onClick={handleClickMenu}
          >
            Project
          </Link>
        </li>
        <li>
          <button className="sayHi">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              offset={-40}
              duration={500}
              onClick={handleClickMenu}
            >
              Say Hello
            </Link>
          </button>
        </li>
      </ul>
      <div className="menu" onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "white" }} />
        ) : (
          <FaBars className="faBars" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
