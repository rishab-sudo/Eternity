import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import "./HomeProduct.css";

const HomeProduct = () => {
  const productData = {
    vf6: {
      name: "VF6",
      products: [
        { img: require("../assets/products/vf6-zenith-grey.png") },
        { img: require("../assets/products/vf6-urban-mint.png") },
        { img: require("../assets/products/vf6-desat-silver.png") },
        { img: require("../assets/products/vf6-infinity-blanc.png") },
        { img: require("../assets/products/vf6-jet-black.png") },
        { img: require("../assets/products/vf6-crimson-red.png") },
      ],
      colors: [
        {
          img: require("../assets/products/color-icon-Zenith-Grey.png"),
          name: "Zenith Grey",
        },
        {
          img: require("../assets/products/color-icon-Urban-Mint.png"),
          name: "Urban Mint",
        },
        {
          img: require("../assets/products/color-icon-jet-black.png"),
          name: "Jet Black",
        },
        {
          img: require("../assets/products/color-icon-infinity.png"),
          name: "Infinity Blanc",
        },
       
         {
          img: require("../assets/products/color-icon-desat-silver.png"),
          name: "Desat Silver",
        },
        {
          img: require("../assets/products/color-icon-Crimson-Red.png"),
          name: "Crimson Red",
        },
      ],
    },

    vf7: {
      name: "VF7",
      products: [
        { img: require("../assets/products/vf7-grey.png") },
        { img: require("../assets/products/vf7-urban-mint.png") },
        { img: require("../assets/products/vf7-silver.png") },
        { img: require("../assets/products/vf7-infinity.png") },
        { img: require("../assets/products/vf7-black.png") },
        { img: require("../assets/products/vf7-crimson-red.png") },
      ],
      colors: [
        {
          img: require("../assets/products/color-icon-Zenith-Grey.png"),
          name: "Zenith Grey",
        },
        {
          img: require("../assets/products/color-icon-Urban-Mint.png"),
          name: "Urban Mint",
        },
        {
          img: require("../assets/products/color-icon-desat-silver.png"),
          name: "Desat Silver",
        },
        {
          img: require("../assets/products/color-icon-infinity.png"),
          name: "Infinity Blanc",
        },
        {
          img: require("../assets/products/color-icon-jet-black.png"),
          name: "Jet Black",
        },
        {
          img: require("../assets/products/color-icon-Crimson-Red.png"),
          name: "Crimson Red",
        },
      ],
    },

    vfmpv7: {
      name: "VF MPV 7",
      products: [
        { img: require("../assets/products/overview-3-v3.jpg") },
        { img: require("../assets/products/overview-1-v3.jpg") },
        { img: require("../assets/products/overview-2-v3.jpg") },
      ],
      colors: [
        // {
        //   img: require("../assets/products/color-icon-Zenith-Grey.png"),
        //   name: "Zenith Grey",
        // },
        // {
        //   img: require("../assets/products/color-icon-jet-black.png"),
        //   name: "Jet Black",
        // },
        // {
        //   img: require("../assets/products/color-icon-infinity.png"),
        //   name: "Infinity Blanc",
        // },
      ],
    },
  };

  const [selectedModel, setSelectedModel] = useState("vf6");
  const [index, setIndex] = useState(0);

  const currentProducts = productData[selectedModel].products;
  const currentColors = productData[selectedModel].colors;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleColorClick = (colorIndex) => {
    setIndex(colorIndex);
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
    setIndex(0);
  };

  const activeColor = currentColors[index]?.name;

  return (
    <Container fluid className="home-product">
      <Container>
        <div className="product-heading">
          <h2>Our Products</h2>
          <p className="hp-tagline">Available in premium colours</p>
        </div>

        {/* Model Filter Buttons */}
        <div className="model-filter">
          <button
            className={`model-btn ${
              selectedModel === "vf6" ? "active-model" : ""
            }`}
            onClick={() => handleModelChange("vf6")}
          >
            VF6
          </button>

          <button
            className={`model-btn ${
              selectedModel === "vf7" ? "active-model" : ""
            }`}
            onClick={() => handleModelChange("vf7")}
          >
            VF7
          </button>

          <button
            className={`model-btn ${
              selectedModel === "vfmpv7" ? "active-model" : ""
            }`}
            onClick={() => handleModelChange("vfmpv7")}
          >
            VF MPV 7
          </button>
        </div>

        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={3000}
          indicators={false}
          nextIcon={<span className="carousel-btn">{">"}</span>}
          prevIcon={<span className="carousel-btn">{"<"}</span>}
        >
          {currentProducts.map((product, i) => (
            <Carousel.Item key={i}>
              <img
                className="product-img"
                src={product.img}
                alt={`VinFast ${selectedModel}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <p className="active-color hp-tagline">{activeColor}</p>

        <div className="color-selector">
          {currentColors.map((color, i) => (
            <div
              key={i}
              className={`color-circle ${index === i ? "active" : ""}`}
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