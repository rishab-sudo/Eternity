import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HomeBanner.css";

const slides = [
  {
    heading: "Luxury Performance",
    desc: "Experience unmatched luxury and power with our premium vehicles.",
    img: require("../assets/130a1158copy_0.jpg"),
  },
  {
    heading: "Next Generation Design",
    desc: "A perfect combination of futuristic design and technology.",
    img: require("../assets/130a1158copy_0.jpg"),
  },
  {
    heading: "Electric Innovation",
    desc: "Drive the future with sustainable and powerful EV technology.",
    img: require("../assets/130a1158copy_0.jpg"),
  },
  {
    heading: "Built For Speed",
    desc: "Feel the thrill with precision engineering and high performance.",
    img: require("../assets/130a1158copy_0.jpg"),
  },
  {
    heading: "Ultimate Comfort",
    desc: "Luxury interiors designed for maximum comfort and elegance.",
     img: require("../assets/130a1158copy_0.jpg"),
  },
];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container fluid className="banner-section">
      <Row className="align-items-center">

        {/* LEFT TEXT */}
        <Col lg={6} className="">
        <div className="banner-text">
          <h1 key={slides[current].heading} className="slide-left">
            {slides[current].heading}
          </h1>

          <p className="slide-left delay">
            {slides[current].desc}
          </p>

          <Button className="banner-btn slide-left delay2">
            Explore Now
          </Button>
          </div>
        </Col>

        {/* RIGHT IMAGE */}
        <Col lg={6} className="banner-image">
          <img
            key={slides[current].img}
            src={slides[current].img}
            alt="car"
            className="slide-right"
          />
        </Col>

      </Row>
    </Container>
  );
};

export default HomeBanner;