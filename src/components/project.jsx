import "./projectStyle.css";
import tsongaQ from "../assets/tsongaQ.png";
import todo from "../assets/todo.jpg";
import tmg from "../assets/Tmg.jpg";
const Project = () => {
  return (
    <div className=" porfolio-container flex  flex-col sm:flex-row  ">
      <h1 className="md:text-2xl font-semibold mb-4">My Projects</h1>
      <p className="hidden sm:block">
        Welcome to my portfolio! Here you can find my personal <br />
        projects that showcase my skills and experience as a developer. Feel
        free to explore <br />
        my projects and check out the links to their live demos and source code!
      </p>

      <div className="flex flex-wrap justify-center">
        <div className="projectwrapper" id="portfolio">
          <div className="image-wrapper">
            <img src={tsongaQ} alt="" />
            <div className="project-content">
              <h1 className="text-xl ">E-commerce website</h1>
              <p>
                A fully functional online store built with React and Redux.
                Features include product listings, a shopping cart,
              </p>
              <a href="#">
                <button className=" btn">view website</button>
              </a>
            </div>
          </div>
        </div>
        <div className="projectwrapper" id="portfolio">
          <div className="image-wrapper">
            <img src={tmg} alt="" />
            <div className="project-content">
              <h1 className="text-xl ">Landing Page</h1>
              <p>
                A responsive landing page designed for a fictional product using
                HTML, CSS, and JavaScript.
              </p>
              <a href="#">
                <button className=" btn">view website</button>
              </a>
            </div>
          </div>
        </div>
        <div className="projectwrapper" id="portfolio">
          <div className="image-wrapper">
            <img src={todo} alt="" />
            <div className="project-content">
              <h1 className="text-xl mb-5">To-Do List App</h1>
              <p>
                A simple to-do list application allowing users to add, remove,
                and mark tasks as complete.
              </p>
              <a href="#">
                <button className=" btn">view website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
