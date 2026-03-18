import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Customer.css";

const Customer = () => {
  return (
    <section className="customer-section">
      <Container fluid className="g-0">
        <Container >
          <Row className="align-items-center">

            {/* Image Left */}
            <Col lg={6} md={6}>
              <div className="customer-image">
                <img src= {require("../assets/specification/231023_vf-6_deep-ocean_exterior_mg_7106-1.jpg")} alt="customer" />
              </div>
            </Col>

            {/* Text Right */}
            <Col lg={6} md={6}>
              <div className="customer-content">
                <h2>Built For Every Journey</h2>
                <p>
                  Experience the perfect balance of innovation, comfort,
                  and performance. Designed with cutting-edge technology
                  and premium features to deliver an exceptional driving
                  experience for every journey.
                </p>
              </div>
            </Col>

          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Customer;