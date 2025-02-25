import "./hero.css";
import thali from "../assets/tha.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={thali} alt="image.jpg" />
      <div className="hero-section">
        <h1 style={{ color: "yellow" }}>Front-end Developer</h1>
        <p>
          Hi,I&apos;m Thalitha Sambo a Passionate front end developer
          specialising in <br />
          translating design concepts into seamless and interactive web
          experiences <br />
          using HTML,CSS,JavaScript and React.
        </p>
        <button className="btn">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            offset={-40}
            duration={500}
          >
            Contact me
          </Link>
        </button>
        <button className="btn-light">
          <a href="thalithaCv.pdf">Resume</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
