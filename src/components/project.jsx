import "./project.css";
import landingpage from "../assets/landingpage.jpg";
import todo from "../assets/todo.jpg";

const Project = () => {
  return (
    <div className="portfolio-section" id="portfolio">
      <h1>My Portfolio</h1>
      <p>I am excited to showcase my work</p>
      <ul className="projects">
        <li>
          <a href="https://github.com/ThalithaThomas/Thomas-Micro-lending-group">
            <img src={landingpage} alt="image.jpg" />
          </a>
        </li>
        <li>
          <a href="https://github.com/ThalithaThomas/To-do-list">
            <img src={todo} alt="image.jpg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Project;
