import React from "react";
import "./All5.css";

const All5 = () => {
  return (
    <section className="all5">

      {/* Heading */}
      <div className="all5-heading">
        {/* <h1>Our Projects</h1> */}
      </div>

      {/* Image Section */}
      <div className="all5-image-wrapper">
        <img
          src={require("../assets/Eternity-all 5.png")} // change image if needed
          alt="project"
          className="all5-image"
        />

        {/* Hover Content */}
        <div className="all5-overlay">
          <h2>Explore Our EV Lineup</h2>
          <p>Experience intelligent design, unmatched comfort,
             and advanced innovation in every VinFast model. Explore our range of premium electric vehicles crafted to deliver performance, luxury, and a smarter driving experience.</p>
        </div>
      </div>

    </section>
  );
};

export default All5;