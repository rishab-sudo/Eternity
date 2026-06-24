import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "./HomeSpecification.css";

const HomeSpecification = ({
  image,
  title,
  tagline,
  price,
  battery,
  wheel,
  adas
}) => {

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          setTimeout(() => {
            setVisible(true);
          }, 800); // 1 second delay

        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-spec g-0" ref={sectionRef}>

      <Container fluid className="spec-container g-0">

        <div className="spec-wrapper">

          {/* TEXT SECTION */}
{/* TEXT SECTION */}
<div className={`spec-text ${visible ? "show" : ""}`}>

  <h2>{title}</h2>
  <p className="tagline">{tagline}</p>

  <h3 className="price">{price}</h3>

  {/* Mobile / Tablet image */}
  <div className="mobile-spec-img">
    <img src={image} alt={title} />
  </div>

  <div className="spec-box">
    <div>
      <span>Battery Capacity*</span>
      <h5>{battery}</h5>
    </div>

    <div>
      <span>Wheel Size*</span>
      <h5>{wheel}</h5>
    </div>

    <div>
      <span>ADAS</span>
      <h5>{adas}</h5>
    </div>
  </div>

</div>

          {/* IMAGE SECTION */}
          <div className={`spec-img ${visible ? "show" : ""}`}>
            <img  src={image} alt={title} />
          </div>

        </div>

      </Container>

    </section>
  );
};

export default HomeSpecification;