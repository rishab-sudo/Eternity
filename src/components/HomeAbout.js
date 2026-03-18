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
                  We deliver premium vehicles designed with advanced technology,
                  exceptional comfort, and powerful performance. Our focus is to
                  combine innovation, safety, and luxury to provide the best
                  driving experience.
                </p>

                <p>
                  From modern electric vehicles to high-performance machines,
                  our range is built to meet the needs of today's drivers while
                  shaping the future of mobility.
                </p>
              </div>
            </Col>

            {/* Right Image */}
            <Col lg={6} md={6}>
              <div className="homeabout-image">
                <img
                  src="/images/about-car.png"
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