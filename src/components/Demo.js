import React, { useState } from "react";
import "./Demo.css";
import steering from "../assets/specification/vf-spf3.jpg"; // your image

const Demo = () => {

  const [position, setPosition] = useState(0);

  const moveLeft = () => {
    setPosition(position - 40);
  };

  const moveRight = () => {
    setPosition(position + 40);
  };

  return (
    <div className="steering-container">

      <button className="nav-btn left" onClick={moveLeft}>
        ◀
      </button>

      <div className="steering-wrapper">
        <img
          src={steering}
          alt="steering"
          style={{ transform: `translateX(${position}px)` }}
        />
      </div>

      <button className="nav-btn right" onClick={moveRight}>
        ▶
      </button>

    </div>
  );
};

export default Demo;