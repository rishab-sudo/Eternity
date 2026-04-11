// VF6.js
import React from "react";
import { motion } from "framer-motion";

import ProductPageBanner from "../components/ProductPageBanner";
import "./VF6.css";
import OverView from "../components/OverView";
import HomeSpecification from "../components/HomeSpecification";
import Vf6Spec from "../components/Vf6Spec";
import TestDrive from "../components/TestDrive";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const MotionSection = ({ children }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
};

const VF6 = () => {
const overviewData = [
  {
    img: require("../assets/products/vinfast_vf7-01.jpg"),
    title: "Bold Exterior Design",
    desc: "A striking front profile with premium styling and aerodynamic elegance.",
  },
  {
    img: require("../assets/products/vinfast_vf7-02.jpg"),
    title: "Panoramic Sunroof",
    desc: "Enjoy an open, airy cabin with natural light and a luxurious driving feel.",
  },
  {
    img: require("../assets/products/vinfast_vf7-03.jpg"),
    title: "Adjustable Comfort",
    desc: "Smart seat height adjustment with ergonomic support for a personalized drive.",
  },
  {
    img: require("../assets/products/vinfast_vf7-04.jpg"),
    title: "Strong Body Build",
    desc: "High-strength body structure designed for safety, durability, and confidence.",
  },
  {
    img: require("../assets/products/vinfast_vf7-05.jpg"),
    title: "Premium Alloy Wheels",
    desc: "Stylish and durable alloy wheels built for stability and road presence.",
  },
  {
    img: require("../assets/products/vinfast_vf7-06.jpg"),
    title: "Efficient EV Performance",
    desc: "Experience smooth electric power, instant torque, and an eco-friendly ride.",
  },
  {
    img: require("../assets/products/vinfast_vf7-07.jpg"),
    title: "360° Camera View",
    desc: "Advanced surround-view camera system for safer parking and easier maneuvering.",
  },
  {
    img: require("../assets/products/vinfast_vf7-08.jpg"),
    title: "Smart ORVMs",
    desc: "Stylish side mirrors with enhanced visibility, safety, and modern convenience.",
  },
  {
    img: require("../assets/products/vinfast_vf7-09.jpg"),
    title: "Premium Cabin Experience",
    desc: "A spacious interior crafted for comfort, luxury, and every journey.",
  },
];
  return (
    <>
      <MotionSection>
        <ProductPageBanner
          images={[
            {
              src: require("../assets/banner/vf6-banner1.png"),
              alt: "Banner 1",
            },
            {
               src: require("../assets/banner/vf6-banner1.png"),
              alt: "Banner 2",
            },
            {
                 src: require("../assets/banner/vf6-banner1.png"),
              alt: "Banner 3",
            },
          ]}
        />
      </MotionSection>

      <MotionSection>
        <HomeSpecification
          reverse
          title="VF 6"
          tagline="A compact and stylish electric SUV"
          price="₹ 18,50,000"
          battery="59.6kWh"
          wheel="45cm"
          adas="Level 2"
          image={require("../assets/vf6-intro.png")}
        />
      </MotionSection>

      <MotionSection>
        <OverView title="Product Over View" data={overviewData} />
      </MotionSection>

      <MotionSection>
        <Vf6Spec />
      </MotionSection>

      <MotionSection>
        <TestDrive />
      </MotionSection>
    </>
  );
};

export default VF6;