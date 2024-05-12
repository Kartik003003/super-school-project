import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Snackbar from "@mui/material/Snackbar";
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Extracting form data
    const formData = new FormData(form.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Constructing the message
    const { from_name, contact_number, from_email, message } = data;
    const fullMessage = `Name: ${from_name}\nContact Number: ${contact_number}\nEmail: ${from_email}\nMessage: ${message}`;

    // Sending the email
    emailjs
      .send(
        "service_6fba6ot",
        "template_jtaowm3",
        {
          from_name,
          contact_number,
          from_email,
          message: fullMessage, // Sending all details in the message
        },
        "kfmE6H6G0rNxfEtky"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
          console.log("Email sent successfully:", result.text);
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };


  return (
    <>
      <div className="contact_fixed_image">
        <div ref={ref} className="contact-container" id="contact">

          <div className="container">

            <div className="row">
              <div className="col-lg-6">
                <div className="contact-wrapper">

                  <div className="contact-title">Super School</div><br />
                  <address className="contact-address ">
                    <i className="fas fa-map-marker-alt class_icon"></i>
                    &nbsp;&nbsp;&nbsp;
                    <strong className="class_strong_contact">411-006, Regus Skye One &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unit No 101,</strong><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kalyani Nagar,<br />
                    {/* <br /> */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pune - 411-006 
                    <br /><br />

                    <FontAwesomeIcon icon={faPhoneAlt} className="class_icon" />                &nbsp;&nbsp;&nbsp;
                    <a href="tel:+9195195119521" className="contact-link">+91 801 077 8440</a> <br /> <br />
                    <i className="fas fa-envelope class_icon"></i>
                    &nbsp;&nbsp;&nbsp;
                    <a href="mailto:info@cyboardschool.com" className="contact-link">info@numetry.in</a>

                  </address>


                </div>
              </div>
              <div className="col-lg-6">
                <form ref={form} onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-subtitle">Contact Us 🚀</div>
                  <input
                    className="contact-input"
                    placeholder="Your Name"
                    name="from_name"
                  />
                  <input
                    className="contact-input"
                    placeholder="Your Contact Number"
                    name="contact_number"
                  />
                  <input
                    className="contact-input"
                    placeholder="Your Email"
                    name="from_email"
                  />
                  <textarea
                    className="contact-input-message"
                    placeholder="Message"
                    rows="4"
                    name="message"
                  />
                  <input
                    type="submit"
                    className="contact-submit"
                    value="Send"
                  />
                </form>
              </div>
            </div>


            <div className="col-lg-12 gmap-cont">
              <div className="googleMap">
                <h1>Google Map</h1>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.678722542555!2d73.90151357465265!3d18.5434150684771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11abf26f343%3A0xb1c7f997b16b5a61!2sRegus%20-%20Pune%2C%20Kalyani%20Nagar!5e0!3m2!1sen!2sin!4v1714640938506!5m2!1sen!2sin"
                  style={{ border: 0, width: '100%', minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
          <Snackbar
            className="Snackbar"
            open={open}
            autoHideDuration={6000}
            onClose={() => setOpen(false)}
            message="Email sent successfully!"
            severity="success"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
