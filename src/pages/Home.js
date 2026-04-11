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
      title: "High Strength",
      desc: "Durable panels with excellent structural performance.",
    },
    {
      img: require("../assets/specification/vf-spf2.jpg"),
      title: "Weather Resistant",
      desc: "Designed to withstand harsh weather conditions.",
    },
    {
      img: require("../assets/specification/vf-spf1.jpg"),
      title: "Fire Safety",
      desc: "Manufactured with high fire resistance standards.",
    },
    {
      img: require("../assets/specification/vf-spf4.jpg"),
      title: "Eco Friendly",
      desc: "Sustainable and environmentally safe materials.",
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