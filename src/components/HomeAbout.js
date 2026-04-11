import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HomeAbout.css"

const HomeAbout = () => {
  return (
    <section className="homeabout">
      <Container fluid>
        <Container>

          <Row className="align-items-center">

            {/* Left Content */}
            <Col lg={6} md={6}>
              <div className="homeabout-content">
                <h2>About Our Vehicles</h2>

                <p>
           At Eternity VinFast Lucknow, we bring you the future of mobility with premium electric vehicles crafted for performance, comfort, and sustainability. Our EV range combines 
           cutting-edge technology, intelligent safety features, and elegant design to deliver a smooth, powerful, and eco-friendly driving experience.
                </p>

                <p>
                From smart city drives to long-distance journeys, VinFast electric cars are built to match the needs of modern drivers. With advanced battery technology, luxurious interiors, and innovative features, we are committed to redefining the way 
                Lucknow drives cleaner, smarter, and more connected.
                </p>
              </div>
            </Col>

            {/* Right Image */}
            <Col lg={6} md={6}>
              <div className="homeabout-image">
                <img
                  src= {require("../assets/et-homeAbout.png")}
                  alt="Premium modern vehicle design"
                  className="img-fluid"
                />
              </div>
            </Col>

          </Row>

        </Container>
      </Container>
    </section>
  );
};

export default HomeAbout;