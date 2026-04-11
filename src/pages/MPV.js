import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import ProductPageBanner from "../components/ProductPageBanner";
import TestDrive from "../components/TestDrive";
import MpvSpecs from "../components/MpvSpecs";
import "./MPV.css";

const MPV = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
          }, 800);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProductPageBanner
        images={[
          {
            src: require("../assets/products/Vinhero1 jpg.jpeg"),
            alt: "Banner 1",
          },
          {
            src: require("../assets/products/Vinhero1 jpg.jpeg"),
            alt: "Banner 2",
          },
          {
            src: require("../assets/products/Vinhero1 jpg.jpeg"),
            alt: "Banner 3",
          },
        ]}
      />

      {/* MPV Intro Section */}
      <section className="mvp-intro" ref={sectionRef}>
        <Container fluid className="mvp-intro-container">
          <div className="mvp-intro-wrapper">
            
            {/* TEXT SECTION */}
            <div className={`mvp-intro-text ${visible ? "show" : ""}`}>
              <h2>VF MPV 7</h2>

              <p className="mvp-intro-tagline">
                A space curated with intention — bringing together comfort,
                technology, and design in one complete experience.
              </p>

              <div className="mvp-intro-table">
                <div className="mvp-intro-row">
                  <span>Wheel Base</span>
                  <h5>2840 mm</h5>
                </div>

                <div className="mvp-intro-row">
                  <span>Battery Capacity</span>
                  <h5>60.13 kWh</h5>
                </div>

                <div className="mvp-intro-row">
                  <span>Wheel & Tyre</span>
                  <h5>R19</h5>
                </div>
              </div>
            </div>

            {/* IMAGE SECTION */}
            <div className={`mvp-intro-img ${visible ? "show" : ""}`}>
              <img
                src={require("../assets/vf6-intro.png")}
                alt="VF MPV 7"
              />
            </div>
          </div>
        </Container>
      </section>

      <MpvSpecs />
      <TestDrive />
    </>
  );
};

export default MPV;