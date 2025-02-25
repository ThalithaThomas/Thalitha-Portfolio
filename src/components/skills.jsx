import "./skills.css";
import { FaCheckCircle } from "react-icons/fa";
const Skills = () => {
  return (
    <div className="skills-intro" id="skills">
      <h1>Skills</h1>
      <p>My technical skills</p>
      <div className="skills">
        <div className="frontend-skills">
          <h5>Frontend developer</h5>
          <ul className="frontend">
            <li>
              <FaCheckCircle size={10} /> HTML
            </li>
            <li>
              <FaCheckCircle size={10} /> tailwind CSS
            </li>
            <li>
              <FaCheckCircle size={10} /> JavaScript
            </li>
            <li>
              <FaCheckCircle size={10} /> React
            </li>
            <li>
              <FaCheckCircle size={10} /> CSS
            </li>
            <li>
              <FaCheckCircle size={10} /> Redux toolkit
            </li>
          </ul>
        </div>
        <div className="backend-skills">
          <h5>Backend developer</h5>
          <ul className="backend">
            <li>
              <FaCheckCircle size={10} /> Node Js
            </li>
            <li>
              <FaCheckCircle size={10} /> Python
            </li>
            <li>
              <FaCheckCircle size={10} /> SQL
            </li>
            <li>
              <FaCheckCircle size={10} /> MySQL
            </li>
            <li>
              <FaCheckCircle size={10} /> Flask
            </li>
            <li>
              <FaCheckCircle size={10} /> GitHub
            </li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
};

export default Skills;
