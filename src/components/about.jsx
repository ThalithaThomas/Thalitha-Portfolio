import "./about.css";
import officegirl from "../assets/techgirl.jpg";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div id="about" className="about-section">
        <img src={officegirl} alt="image.jpg" />

        <div className="about-p">
          <h1>
            About <span style={{ color: "orange" }}>Me</span>
          </h1>
          <h3>Front end Developer!</h3>
          <p>
            Hello! I&apos;m an aspiring Front-End Developer with a strong
            enthusiasm for web design and user experience. Although I may not
            have formal experience yet, I&apos;m eager to learn and apply my
            skills in creating visually appealing and intuitive websites.
            I&apos;ve spent time developing my knowledge of HTML, CSS, React and
            JavaScript, while also keeping up with current design trends.
          </p>

          <p>
            I believe in continuous learning and am actively working on personal
            projects to strengthen my skills. I&apos;m excited about the
            opportunity to collaborate with others and bring unique ideas to
            life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
