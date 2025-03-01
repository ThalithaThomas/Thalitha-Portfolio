import "./skills.css";

import thali from "../assets/tha.jpg";
const Skills = () => {
  return (
    <div className="skillsContainer" id="skills">
      <div className="skillsHeading">
        <h1 className="relative"> My Skills </h1>
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
            <button>TailwindCSS</button>
            <button>React </button>
            <button>Redux toolkit</button>
            <button>HTML</button>
            <button>CSS</button>
            <button>Node.JS</button>
            <button>Python </button>
            <button>SQL</button>
            <button>HTML</button>
            <button>MYSQL</button>
            <button>Flask</button>
            <button>GitHub</button>
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
              embrace the exciting challenges ahead. Thus began my love affair
              with coding—a lifelong journey filled with creativity and endless
              possibilities!
            </p>
            <h3 href="#">keep reading my bio {">"} </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
