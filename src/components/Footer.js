import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Container>
          <Row className="gy-4">
            {/* Column 1 */}
            <Col className="footer-col" lg={4} md={6}>
              <div className="footer-inner">
                <img
                  src={require("../assets/eternity-logo-white.png")}
                  alt="logo"
                  className="footer-logo"
                />

                <p className="footer-tagline">Go Electric. Drive the Future.</p>

                <p className="footer-desc">
                  At Eternity, we bring you the next generation of electric
                  vehicles with cutting-edge technology, superior performance,
                  and a commitment to sustainability. Experience innovation,
                  reliability, and a smarter way to drive.
                </p>

                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/profile.php?id=61588650280727"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="https://www.instagram.com/eternity.lucknow/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </Col>

            {/* Column 2 */}
            <Col className="footer-col" lg={4} md={6}>
              <div className="footer-inner">
                <h5 className="footer-heading">Quick Links</h5>

                <ul className="footer-links">
                  <li><a href="/home">Home</a></li>
                  <li><a href="/Mpv">VF MPV 7</a></li>
                  <li><a href="/Vf6">VF6</a></li>
                  <li><a href="/Vf7">VF7</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>
            </Col>

            {/* Column 3 */}
            <Col className="footer-col" lg={4} md={12}>
              <div className="footer-inner">
                <h5 className="footer-heading">Address</h5>

                <p className="footer-address">
                  Anaura Kala, NH 24, Ayodhya - Lucknow Rd, <br />
                  Near Indira Canal, Faizabad,
                  <br />
                  Lucknow, Uttar Pradesh 227105
                  <br />
                  <br />
                  Phone:{" "}
                  <a href="tel:+918679309990" className="footer-contact-link">
                    +91 8679309990
                  </a>
                  ,{" "}
                  <a href="tel:+918679509990" className="footer-contact-link">
                    +91 8679509990
                  </a>
                  <br />
                  Email:{" "}
                  <a
                    href="mailto:eternity.lko@gmail.com"
                    className="footer-contact-link"
                  >
                    eternity.lko@gmail.com
                  </a>
                </p>

                <button className="brochure-btn">Download Brochure</button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;