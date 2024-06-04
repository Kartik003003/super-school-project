import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./PrincipalMessage.css";

const PrincipalDesk = () => {
  // useEffect to add animation on component mount
  useEffect(() => {
    const principalImg = document.getElementById("principal-img");
    const messageContainer = document.getElementById("message-container");

    if (principalImg && messageContainer) {
      principalImg.classList.add("animate__animated", "animate__fadeInLeft");
      messageContainer.classList.add(
        "animate__animated",
        "animate__fadeInRight"
      );
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row text-center mb-4">
        <div className="col-md-12">
          <h2 className="display-4">Welcome to Our Super School</h2>
          <h4 className="font-italic">Where Learning Knows No Bounds</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center mb-4">
          <div id="principal-img" className="img-container text-center">
            <img
              src="https://th.bing.com/th/id/OIP.dMaE6590tldGboXAS7Co6QAAAA?rs=1&pid=ImgDetMain"
              alt="Principal"
              className="img-fluid rounded-circle"
              style={{ height: "390px", width: "390px", objectFit: "cover" }}
            />
            <div className="additional-info mt-3 text-center">
              <h5 className="font-weight-bold text-primary">
                Dr. Ushvindera Kaur
              </h5>
              <p className="mb-1">
                <strong className="text-secondary">Qualifications:</strong> PhD
                in Education
              </p>
              <p className="mb-1">
                <strong className="text-secondary">Experience:</strong> 20 years
                in Education Leadership
              </p>
              <p className="mb-3">
                <strong className="text-secondary">Contact:</strong>{" "}
                ssprincipal@gmail.com
              </p>
              <div className="social-icons d-flex justify-content-center mt-4">
                <a href="https://www.facebook.com" className="icon-link mx-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="icon text-primary"
                  />
                </a>
                <a href="https://www.instagram.com" className="icon-link mx-2">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon text-danger"
                  />
                </a>
                <a href="https://www.twitter.com" className="icon-link mx-2">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="icon text-info"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="message-container"
          className="col-md-6 d-flex align-items-center"
        >
          <div className="message-container">
            <img
              src="https://th.bing.com/th/id/OIP.dMaE6590tldGboXAS7Co6QAAAA?rs=1&pid=ImgDetMain"
              alt="School"
              className="img-fluid mb-3"
              style={{ width: "100px", height: "auto" }}
            />
            <div className="message bg-light p-4 rounded shadow-xl">
              <p>
                I extend a warm welcome to you and your family. I am very proud
                to be the principal of this wonderful school. It is a privilege
                for me to work with our students, our staff, and our families to
                make our school the very best it can be. We aim to create a
                safe, nurturing yet challenging environment that is built on
                relationships. We care for and appreciate each of our students
                as the unique individuals that they are, each with distinct
                learning styles. We want each of our students to leave school
                with the values of respect, cooperation, persistence, and
                striving for excellence underpinning all that they do. Our
                students develop responsibility for their own behavior and the
                choices they make, and also a communal responsibility to assist
                their peers to do the same.
              </p>
              <span className="principal-name font-italic">
                Dr. Ushvindera Kaur
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center mt-5">
        <div className="col-md-12">
          <h4 className="font-italic pb-5">
            Empowering Students to Reach Their Full Potential
          </h4>
        </div>
      </div>
    </div>
  );
};

// PropTypes for prop validation
PrincipalDesk.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default PrincipalDesk;
