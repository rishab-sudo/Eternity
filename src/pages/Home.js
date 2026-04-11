// Home.js
import React from "react";
import { motion } from "framer-motion";
import HomeBanner from "../components/HomeBanner";
import HomeAbout from "../components/HomeAbout";
import HomeProduct from "../components/HomeProduct";
import All5 from "../components/All5";
import OverView from "../components/OverView";
import Customer from "../components/Customer";
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

const Home = () => {
  const overviewData = [
    {
      img: require("../assets/specification/vf-spf3.jpg"),
title: "Precision Steering",
desc: "Enjoy smooth handling, excellent balance, and advanced drive modes for complete control on every journey.",
    },
    {
      img: require("../assets/specification/vf-spf2.jpg"),
    title: "Comfort Seating",
desc: "Premium heat-resistant seats with ergonomic support ensure maximum comfort and a relaxed drive in every season.",
    },
    {
      img: require("../assets/specification/vf-spf1.jpg"),
    title: "Adjustable Comfort",
desc: "Smart seat height adjustment and ergonomic support ensure a personalized, comfortable driving experience for every journey.",
    },
    {
      img: require("../assets/specification/vf-spf4.jpg"),
title: "Panoramic Sunroof",
desc: "Enjoy an open, airy cabin with a wide panoramic sunroof that adds light, luxury, and a premium driving feel.",
    },
  ];

  return (
    <div>
        <HomeBanner />
    

      <MotionSection>
        <HomeAbout />
      </MotionSection>

      <MotionSection>
        <HomeProduct />
      </MotionSection>

      <MotionSection>
        <All5 />
      </MotionSection>

      <MotionSection>
        <OverView title="Product Over View" data={overviewData} />
      </MotionSection>

      <MotionSection>
        <Customer />
      </MotionSection>

      <MotionSection>
        <TestDrive />
      </MotionSection>
    </div>
  );
};

export default Home;