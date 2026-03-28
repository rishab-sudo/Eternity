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
                  At Eternity, we bring you the next generation of electric vehicles with cutting-edge technology, superior performance, and a commitment to sustainability. Experience innovation, reliability, and a smarter way to drive.
                </p>

                <div className="social-icons">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaInstagram /></a>
                </div>

              </div>
            </Col>

            {/* Column 2 */}
            <Col className="footer-col" lg={4} md={6}>
              <div className="footer-inner">

                <h5 className="footer-heading">Quick Links</h5>

                <ul className="footer-links">
                  <li><a href="/home">Home</a></li>
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
                  123 Industrial Area,<br/>
                  Sector 10, Delhi, India<br/>
                  Phone: +91 9876543210<br/>
                  Email: info@example.com
                </p>

                <button className="brochure-btn">
                  Download Brochure
                </button>

              </div>
            </Col>

          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;