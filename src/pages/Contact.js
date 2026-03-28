import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  
} from "react-icons/fa";

import ContactForm from "../components/ContactForm";
import "./Contact.css";

const ContactUs = () => {
  return (
    <>
    <section className="contact-hero">
  <div className="hero-overlay"></div>

  {/* animated line */}
  <div className="scroll-line-wrapper">
    <div className="scroll-line"></div>
  </div>
</section>
   
      <section className="contact-us">
        <Container>

          {/* CONTACT INFO + MAP */}
          <Row className="contact-us-main-row">

            {/* CONTACT INFO */}
            <Col lg={5} md={12}>
              <div className="contact-info-box">

                <h4>Get In Touch</h4>

                <div className="contact-item">
                  <FaPhoneAlt />
                  <div>
                    <p className="contact-label"> Phone </p>
                    <p className="contact-text"> (+91) 65xxxxxxxx </p>
                  </div>
                </div>

                <div className="contact-item">
                  <FaEnvelope />
                  <div>
                    <p className="contact-label"> Email </p>
                    <p className="contact-text"> ABC@gmail.com </p>
                  </div>
                </div>

                <div className="contact-item">
                  <FaMapMarkerAlt />
                  <div>
                    <p className="contact-label"> Address </p>
                    <p className="contact-text">
                     NH-24 Ayodhya Road, Road, Anaura Kala, near Indira Canal, Faizabad, Lucknow, Uttar Pradesh 227105
                    </p>
                  </div>
                </div>

                {/* SOCIAL MEDIA */}
                <div className="contact-social">
                  <a href="https://www.facebook.com/profile.php?id=61588345141535"><FaFacebookF /></a>
                  <a href="https://www.instagram.com/megagreencity/"><FaInstagram /></a>
                
                </div>

              </div>
            </Col>

            {/* MAP */}
            <Col lg={7} md={12}>
              <div className="contact-us-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3511.263998718808!2d79.51399507549057!3d28.3508670758197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDIxJzAzLjEiTiA3OcKwMzAnNTkuNyJF!5e0!3m2!1sen!2sin!4v1772103086533!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
            </Col>

          </Row>

          {/* FORM (same position) */}
          <div className="contact-us-form-wrapper">
            <ContactForm />
          </div>

        </Container>
      </section>
    </>
  );
};

export default ContactUs;