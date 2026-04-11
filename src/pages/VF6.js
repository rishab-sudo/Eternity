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
      title: "High Strength",
      desc: "Durable panels with excellent structural performance.",
    },
    {
      img: require("../assets/products/vinfast_vf7-02.jpg"),
      title: "Weather Resistant",
      desc: "Designed to withstand harsh weather conditions.",
    },
    {
      img: require("../assets/products/vinfast_vf7-03.jpg"),
      title: "Fire Safety",
      desc: "Manufactured with high fire resistance standards.",
    },
    {
      img: require("../assets/products/vinfast_vf7-04.jpg"),
      title: "Eco Friendly",
      desc: "Sustainable and environmentally safe materials.",
    },
    {
      img: require("../assets/products/vinfast_vf7-05.jpg"),
      title: "Eco Friendly",
      desc: "Sustainable and environmentally safe materials.",
    },
    {
      img: require("../assets/products/vinfast_vf7-06.jpg"),
      title: "Eco Friendly",
      desc: "Sustainable and environmentally safe materials.",
    },
    {
      img: require("../assets/products/vinfast_vf7-07.jpg"),
      title: "Eco Friendly",
      desc: "Sustainable and environmentally safe materials.",
    },
    {
      img: require("../assets/products/vinfast_vf7-08.jpg"),
      title: "Eco Friendly",
      desc: "Sustainable and environmentally safe materials.",
    },
    {
      img: require("../assets/products/vinfast_vf7-09.jpg"),
      title: "Eco Friendly",
      desc: "Sustainable and environmentally safe materials.",
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