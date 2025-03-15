import "./ProjectButton.css";
import PropTypes from "prop-types";
const ProjectBtn = ({ href }) => {
  return (
    <div>
      <a href={href}>
        <button className="simple-button">
          <span>View Project →</span>
        </button>
      </a>
    </div>
  );
};
ProjectBtn.propTypes = {
  href: PropTypes.string.isRequired,
};
export default ProjectBtn;
