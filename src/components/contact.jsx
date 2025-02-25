import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { FaGithub, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xoiv3lz", "template_ecc5mcq", form.current, {
        publicKey: "qD2naP3wAp7yMR8DS",
      })
      .then(
        () => {
          alert("Message sent!");
        },
        (error) => {
          alert("message failed...", error.text);
        }
      );
  };
  return (
    <div className="contact-container" id="contact">
      <div className="contact">
        <h1>Send me a message!</h1>
        <p>
          Please fill out the form below <br /> to discuss any work
          opportunities.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter your name" />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
          <input
            type="text"
            required
            name="message"
            placeholder="Enter your message"
          />

          <button type="submit" value="Send" className="btn">
            Submit
          </button>
        </form>
        <ul className="contact-icons">
          <li>
            <a href="https://www.linkedin.com/in/thalitha-sambo-50919011b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
              <FaLinkedinIn size={20} style={{ color: "white" }} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/27720191566">
              <FaWhatsapp size={20} style={{ color: "white" }} />
            </a>
          </li>
          <li>
            <a href="https://github.com/ThalithaThomas">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
