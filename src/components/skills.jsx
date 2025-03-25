import "./skills.css";
import { Link as RouterLink } from "react-router-dom";
import thali from "../assets/tha.jpg";
const Skills = () => {
  return (
    <div className="skillsContainer" id="skills">
      <div className="skillsHeading">
        <h1>
          My <span className="skills-title-highlight">Skills </span>
        </h1>
      </div>
      <div className="skillsWrapper">
        <div>
          <img src={thali} alt="image.jpg" />
        </div>
        <div className="bio">
          <div className="skills">
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
            <button>Node.JS</button>
            <button>React </button>
            <button>TailwindCSS</button>
            <button>Redux toolkit</button>

            <button>Python </button>
            <button>SQL</button>
            <button>Flask</button>
            <button>Git</button>
          </div>
          <div className="aboutP">
            <h4>My Quick Story</h4>
            <p>
              My journey began during my mathematics degree, where my analytical
              mindset naturally led me to explore programming. Starting with{" "}
              <strong>Python</strong> and expanding to{" "}
              <strong>full-stack development</strong>, I discovered how my
              mathematical background provided a unique advantage in creating
              efficient, elegant solutions. As I mastered{" "}
              <strong>React.js</strong> and <strong>Flask</strong>, I found joy
              in building applications that not only solve problems but deliver
              exceptional user experiences. Each project has deepened my
              technical expertise while reinforcing my passion for creating
              technology that makes a meaningful impact.
            </p>
            <RouterLink to="/aboutme">keep reading my bio </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
