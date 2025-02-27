import "./project.css";
import Todo from "../assets/todo.jpg";
import tsongaQ from "../assets/tsongaQ.png";
import Tmg from "../assets/Tmg.jpg";

const Project = () => {
  return (
    <div className="flex justify-center" id="portfolio">
      <h1>My Portfolio</h1>
      <p>I am excited to showcase my work</p>
      <div className="wrapper">
        <div className="ProjectImage">
          <img src={Todo} alt="" />
          <div className="ProjecContent">
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div className="ProjectImage">
          <img src={tsongaQ} alt="" />
          <div className="ProjecContent">
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div className="ProjectImage">
          <img src={Tmg} alt="" />
          <div className="ProjecContent">
            <h1></h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
