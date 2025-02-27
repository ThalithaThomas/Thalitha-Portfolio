import "./skills.css";
import SkillsComponent from "./SkillsComponent";

const Skills = () => {
  return (
    <div className="skills-intro" id="skills">
      <h1>Skills</h1>
      <p>My technical skills</p>
      <div className="skills">
        <div className="frontend-skills">
          <h5>Frontend developer</h5>
          <ul className="frontend">
            <SkillsComponent skillName="HTML" />
            <SkillsComponent skillName="CSS" />
            <SkillsComponent skillName="JavaScript" />
            <SkillsComponent skillName="TailwindCSS" />
            <SkillsComponent skillName="React" />
            <SkillsComponent skillName="Redux toolkit" />
          </ul>
        </div>
        <div className="backend-skills">
          <h5>Backend developer</h5>
          <ul className="backend">
            <SkillsComponent skillName="Node JS" />
            <SkillsComponent skillName="Python" />
            <SkillsComponent skillName="SQL" />
            <SkillsComponent skillName="MYSQL" />
            <SkillsComponent skillName="Flask" />
            <SkillsComponent skillName="GitHub" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
