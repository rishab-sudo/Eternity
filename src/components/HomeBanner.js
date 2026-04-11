// HomeBanner.js
import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "./HomeBanner.css";

const slides = [
  {
    img: require("../assets/banner/vf7-banner1.png"),
  },
  {
    img: require("../assets/products/Vinhero1 jpg.jpeg"),
  },
  
  
];

const HomeBanner = () => {
  return (
    <Container fluid className="banner-section p-0">
      <Carousel
        slide
        controls={true}
        indicators={true}
        interval={4000}
        pause={false}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="banner-image-wrapper">
              <img
                className="d-block w-100 banner-carousel-img"
                src={slide.img}
                alt={`slide-${index}`}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default HomeBanner;