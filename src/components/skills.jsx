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
              It all started in my first year of college when I found myself in
              a<strong> C++ course </strong>. The concepts felt foreign at
              first, but as I tackled the challenges, I uncovered the beauty of
              programming. Each project pulled me deeper into this captivating
              world, igniting a passion I never knew I had. I soon decided to
              pursue a<strong> software engineering course</strong>, eager to
              embrace the exciting challenges ahead.
            </p>
            <RouterLink to="/aboutme">keep reading my bio </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
