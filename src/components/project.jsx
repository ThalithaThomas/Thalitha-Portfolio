import "./projectStyle.css";
import tsongaQ from "../assets/tsongaQ.png";
import todo from "../assets/todo.jpg";
import tmg from "../assets/Tmg.jpg";
import ImgComponent from "./imgComponent";
import ProjectBtn from "./projectButton";
const Project = () => {
  return (
    <div className=" projectContainer " id="projects">
      <div className="projectHeading">
        <h1>Projects</h1>
      </div>
      <div className="projectwrapper">
        <div className="projectContent">
          <h2>Thomas Micro-Lending Group</h2>
          <div className="projectSkills">
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
          </div>
          <p>
            Thomas Microlending Group is a responsive web solution that clearly
            communicates its mission and services. It enhances user engagement
            through compelling CTAs and a simple, accessible layout, allowing
            users to reach out and receive feedback more efficiently.
          </p>
          <ProjectBtn href="https://tmlg-ce4c0e8e099f.herokuapp.com/" />
        </div>

        <div className="image-wrapper">
          <ImgComponent
            image={tmg}
            href="https://github.com/ThalithaThomas/TMLG-landingpage.git"
          />
        </div>
      </div>
      <div className="projectwrapper">
        <div className="projectContent">
          <h2>Tsonga Queens</h2>
          <div className="projectSkills">
            <button>TailwindCSS</button>
            <button>React js </button>
            <button>Redux toolkit</button>
            <button>Node.JS</button>
          </div>
          <p>
            A fully functional online store built with React and Redux. Features
            include product listings, a shopping cart,
          </p>
          <ProjectBtn href="#" />
        </div>
        <div className="image-wrapper">
          <ImgComponent
            image={tsongaQ}
            href="https://github.com/ThalithaThomas/Tsonga-queens.git"
          />
        </div>
      </div>

      <div className="projectwrapper">
        <div className="projectContent">
          <h2>To-Do List App</h2>
          <div className="projectSkills">
            <button>HTML</button>
            <button>CSS</button>
            <button>JavaScript</button>
            <button>MYSQL</button>
            <button>Flask</button>
          </div>
          <p>
            Designed to empower users in effectively managing their tasks and
            overall productivity. This intuitive application allows users to add
            new tasks to their lists, users can easily remove tasks that are no
            longer relevant, mark tasks as complete, update details such as due
            dates and task descriptions .
          </p>
          <ProjectBtn href="#" />
        </div>
        <div className="image-wrapper">
          <ImgComponent
            image={todo}
            href="https://github.com/ThalithaThomas/TMLG-landingpage.git"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
