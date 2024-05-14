import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import './PrincipalMessage.css'; 

const PrincipalDesk = () => {
  // useEffect to add animation on component mount
  useEffect(() => {
    const principalImg = document.getElementById("principal-img");
    const messageContainer = document.getElementById("message-container");

    if (principalImg && messageContainer) {
      principalImg.classList.add("animate__animated", "animate__fadeInLeft");
      messageContainer.classList.add("animate__animated", "animate__fadeInRight");
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center mb-1">
          <h2 style={{ fontSize: '40px' }}>Welcome to Our Super School</h2>
          <h4 style={{ fontSize: '30px' }}>Where Learning Knows No Bounds</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div id="principal-img" className="d-flex flex-column align-items-center img-container">
            <img
              src="https://img.freepik.com/premium-photo/beautiful-anime-cartoon-american-teacher-woman-classroom-illustration-generative-ai_850810-390.jpg"
              alt="Principal"
              className="img-fluid rounded animate__animated animate__fadeInLeft"
              style={{ height: '390px', width: '500px' }}
            />
            <div className="additional-info">
              <h6><strong style={{color:'black',fontSize:'1.3rem'}}>Dr. Ushvindera Kaur</strong></h6><br />
              <p><strong style={{color:'black',fontSize:'1.3rem'}}>Qualifications:</strong> PhD in Education</p>
              <p><strong style={{color:'black',fontSize:'1.3rem'}}>Experience:</strong> 20 years in Education Leadership</p>
              <p><strong style={{color:'black',fontSize:'1.3rem'}}>Contact:</strong> ssprincipal@gmail.com</p><br />
              <div className="social-icons mt-4">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
                <FontAwesomeIcon icon={faInstagram} className="icon" />
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </div>
            </div>
          </div>
        </div>

        <div id="message-container" className="col-md-6">
          <div className="message-container">
            <img 
              src="https://sms.convalsd.net/wp-content/uploads/sites/13/2015/09/schools-sms-principals-message-1.jpg" 
              alt="" 
              style={{ width: '7em', height: 'auto' }} 
            />

            <div className="message"  >
              <p>
                I extend a warm welcome to you and your family. I am very proud to be the principal of this wonderful school. It is a privilege for me to work with our students, our staff, and our families to make our school the very best it can be. We aim to create a safe, nurturing yet challenging environment that is built  relationships. We care for and appreciate each of our students as the unique individuals that they are, each with distinct differing learning styles. We want each of our students to leave school with the values of respect, cooperation, persistence, and striving for excellence underpinning all that they do. Our students develop responsibility for their own behavior and the choices they make, and also a communal responsibility to assist their peers to do the same.
              </p>
              <span className="principal-name">Dr. Ushvindera Kaur</span>
            </div>
          </div>
        </div>

        <div className="col-md-12 text-center mb-1">
          <h4 style={{ fontSize: '30px', marginTop:'100px' }}>Empowering Students to Reach Their Full Potential</h4>
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
