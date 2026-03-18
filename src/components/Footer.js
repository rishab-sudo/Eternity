import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Container>
          <Row className="gy-4">

            {/* Column 1 */}
            <Col lg={4} md={6}>
              <img
                src="/logo.png"
                alt="logo"
                className="footer-logo"
              />

              <p className="footer-desc">
                We provide high quality products and services with a strong
                commitment to innovation, reliability, and customer satisfaction.
              </p>

              <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaYoutube /></a>
              </div>
            </Col>

            {/* Column 2 */}
            <Col lg={4} md={6}>
              <h5 className="footer-heading">Quick Links</h5>

              <ul className="footer-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/Vf6">VF6</a></li>
                <li><a href="/Vf7">VF7</a></li>
                <li><a href="/Enquery">Contact Us</a></li>
              </ul>
            </Col>

            {/* Column 3 */}
            <Col lg={4} md={12}>
              <h5 className="footer-heading">Address</h5>

              <p className="footer-address">
                123 Industrial Area,<br/>
                Sector 10, Delhi, India<br/>
                Phone: +91 9876543210<br/>
                Email: info@example.com
              </p>

              <button className="brochure-btn">
                Download Brochure
              </button>
            </Col>

          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;