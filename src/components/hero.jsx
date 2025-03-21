import "./hero.css";

import { MdDownload } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="hero-section">
        <h1 style={{ color: "rgb(255,255,255" }}>
          Hi, I&apos;m Thalitha | <br />{" "}
          <span className="highlight">
            <span>Software </span>
          </span>
          <span className="highlight">
            <span>Engineer</span>
          </span>
        </h1>
        <ul className="contactIcons">
          <li>
            <a href="https://www.linkedin.com/in/thalitha-sambo-50919011b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <FaLinkedinIn className="contactIcon" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/27720191566">
              <FaWhatsapp className="contactIcon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/ThalithaThomas">
              <FaGithub className="contactIcon" />
            </a>
          </li>
          <li>
            <a href="mailto:thalithaasambo@gmail.com">
              <MdEmail className="contactIcon" />
            </a>
          </li>
        </ul>
        <p>
          I thrive on exploration and creativity, and I&apos;m a firm <br />{" "}
          believer in lifelong learning.
        </p>
        <button className="dowloadResume ">
          <a href="/Thalitha-Portfolio/thalitha.pdf">
            Resume
            <MdDownload className="DownloadAlt" />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
