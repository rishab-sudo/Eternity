import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import "./HomeProduct.css";

const HomeProduct = () => {

  const products = [
    { img: require("../assets/products/vf6-zenith-grey.png") },
    { img: require("../assets/products/vf6-urban-mint.png") },
    { img: require("../assets/products/vf6-desat-silver.png") },
    { img: require("../assets/products/vf6-infinity-blanc.png") },
    { img: require("../assets/products/vf6-jet-black.png") },
    { img: require("../assets/products/vf6-crimson-red.png") },

    { img: require("../assets/products/vf7-grey.png") },
    { img: require("../assets/products/vf7-grey.png") },
    { img: require("../assets/products/vf7-black.png") },
    { img: require("../assets/products/vf7-infinity.png") },
    { img: require("../assets/products/vf7-silver.png") },
    { img: require("../assets/products/vf7-red.png") }
  ];

  // ✅ Add color names here
  const colors = [
    {
      img: require("../assets/products/color-icon-Zenith-Grey.png"),
      name: "Zenith Grey"
    },
    {
      img: require("../assets/products/color-icon-Urban-Mint.png"),
      name: "Urban Mint"
    },
    {
      img: require("../assets/products/color-icon-jet-black.png"),
      name: "Jet Black"
    },
    {
      img: require("../assets/products/color-icon-infinity.png"),
      name: "Infinity Blanc"
    },
    {
      img: require("../assets/products/color-icon-desat-silver.png"),
      name: "Desat Silver"
    },
    {
      img: require("../assets/products/color-icon-Crimson-Red.png"),
      name: "Crimson Red"
    }
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleColorClick = (colorIndex) => {
    const model = index >= 6 ? 1 : 0; // 0 = VF6, 1 = VF7
    setIndex(colorIndex + model * 6);
  };

  // ✅ Active color name
  const activeColor = colors[index % 6]?.name;

  return (
    <Container fluid className="home-product">
      <Container>

        <div className="product-heading">
          <h2>Our Products</h2>
          <p className="hp-tagline">Available in 6 colours</p>
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

        {/* ✅ Dynamic Color Name */}
        <p className="active-color hp-tagline">
          {activeColor}
        </p>

        {/* Color Buttons */}
        <div className="color-selector">
          {colors.map((color, i) => (

            <div
              key={i}
              className={`color-circle ${index % 6 === i ? "active" : ""}`}
              onClick={() => handleColorClick(i)}
            >
              <img src={color.img} alt={color.name} />
            </div>

          ))}
        </div>

      </Container>
    </Container>
  );
};

export default HomeProduct;