import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "./ProductPageBanner.css";

const ProductPageBanner = ({ images }) => {
  return (
    <Container fluid className="product-banner g-0">
      <Carousel
        controls={false}       
        indicators={false}     
        interval={3000}        
        pause={false}         
        slide                  
      >
        {images.map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img.src}
              alt={img.alt || `Slide ${index + 1}`}
              className="banner-img"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ProductPageBanner;