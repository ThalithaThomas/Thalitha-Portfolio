import PropTypes from "prop-types";
import "./projectStyle.css";
const ImgComponent = ({ project }) => {
  return (
    <div className="projectwrapper" id="portfolio">
      <div className="image-wrapper">
        <img src={project.image} alt="" />
        <div className="content">
          <h1 className="text-xl mb-5">{project.title}</h1>
          <p>{project.description}</p>
          <a href="#">
            <button className=" btn">view website</button>
          </a>
        </div>
      </div>
    </div>
  );
};
ImgComponent.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default ImgComponent;
