import React from "react";
import { Container } from "react-bootstrap";
import "./ProductPageBanner.css";

const ProductPageBanner = ({ image, alt }) => {
  return (
    <Container fluid className="product-banner">
      <img
        src={image}
        alt={alt || "Product Banner"}
        className="banner-img"
      />
    </Container>
  );
};

export default ProductPageBanner;