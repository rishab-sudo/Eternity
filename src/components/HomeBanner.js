// HomeBanner.js
import React from "react";
import { Container } from "react-bootstrap";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <Container fluid className="homebanner p-0">
      <div className="homebanner-video-wrapper">
        <video
          className="homebanner-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={require("../assets/video/eternity.mp4")}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Bottom Left Content */}
        <div className="homebanner-content">
          <h1>Eternity VinFast Lucknow</h1>
          <p>Drive the Future with Style, Innovation & Comfort.</p>
        </div>
      </div>
    </Container>
  );
};

export default HomeBanner;