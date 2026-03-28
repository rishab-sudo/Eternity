import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import "./HomeProduct.css";

const HomeProduct = () => {

  const products = [
    { img: require("../assets/products/vf6-zenith-grey.png") },
    { img: require("../assets/products/vf6-urban-mint.png") },
    { img: require("../assets/products/vf6-jet-black.png") },
    { img: require("../assets/products/vf6-infinity-blanc.png") },
    { img: require("../assets/products/vf6-desat-silver.png") },
    { img: require("../assets/products/vf6-crimson-red.png") },

    { img: require("../assets/products/vf7-grey.png") },
    { img: require("../assets/products/vf7-grey.png") },
    { img: require("../assets/products/vf7-black.png") },
    { img: require("../assets/products/vf7-infinity.png") },
    { img: require("../assets/products/vf7-silver.png") },
    { img: require("../assets/products/vf7-red.png") }
  ];

  const colors = [
    require("../assets/products/color-icon-Zenith-Grey.png"),
    require("../assets/products/color-icon-Urban-Mint.png"),
    require("../assets/products/color-icon-jet-black.png"),
    require("../assets/products/color-icon-infinity.png"),
    require("../assets/products/color-icon-desat-silver.png"),
    require("../assets/products/color-icon-Crimson-Red.png")
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleColorClick = (colorIndex) => {

    const model = index >= 6 ? 1 : 0; // 0 = VF6, 1 = VF7
    setIndex(colorIndex + model * 6);

  };

  return (
    <Container fluid className="home-product">
      <Container>

        <div className="product-heading">
          <h2>Our Products</h2>
          <p>Available in 6 colours</p>
        </div>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={3000}
          indicators={false}
          nextIcon={<span className="carousel-btn">{">"}</span>}
          prevIcon={<span className="carousel-btn">{"<"}</span>}
        >

          {products.map((product, i) => (
            <Carousel.Item key={i}>
              <img
                className="product-img"
                src={product.img}
                alt="VinFast Electric Scooter"
              />
            </Carousel.Item>
          ))}

        </Carousel>

        {/* Color Buttons */}

<p>Choose premium</p>
        <div className="color-selector">
          {colors.map((color, i) => (

            <div
              key={i}
              className={`color-circle ${index % 6 === i ? "active" : ""}`}
              onClick={() => handleColorClick(i)}
            >
              <img src={color} alt="color option" />
            </div>

          ))}

        </div>

      </Container>
    </Container>
  );
};

export default HomeProduct;