import React from "react";
import "./Customer.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { motion } from "framer-motion";

import user1 from "../assets/user11.jpg";
import user2 from "../assets/user11.jpg";
import user3 from "../assets/user11.jpg";
import user4 from "../assets/user11.jpg";
import user5 from "../assets/user11.jpg";
import user6 from "../assets/user11.jpg";

const customers = [
  { 
    name: "Aarav Sharma", 
    text: "Switching to an EV felt like a big step, but VinFast Eternity made it effortless. The car is incredibly smooth, silent, and futuristic. Truly a next-gen driving experience.", 
    img: user1 
  },
  { 
    name: "Ishita Verma", 
    text: "From the test drive to delivery, everything was seamless. The team explained every feature patiently, and the car itself feels premium in every sense.", 
    img: user2 
  },
  { 
    name: "Rohan Mehta", 
    text: "The performance surprised me the most—quick acceleration, zero noise, and amazing comfort. VinFast has completely changed how I look at driving.", 
    img: user3 
  },
  { 
    name: "Neha Kapoor", 
    text: "What stands out is their after-sales support. Quick responses, helpful staff, and a genuinely smooth ownership experience. It feels reassuring.", 
    img: user4 
  },
  { 
    name: "Aditya Singh", 
    text: "Charging, range, performance—everything is well balanced. The team at Eternity Lucknow guided me perfectly to choose the right EV for my needs.", 
    img: user5 
  },
  { 
    name: "Priya Nair", 
    text: "The design is sleek, the drive is silent, and the technology inside is impressive. It’s not just a car, it’s a lifestyle upgrade.", 
    img: user6 
  },
  { 
    name: "Karan Malhotra", 
    text: "I was unsure about EVs initially, but VinFast changed my perspective. Low running costs, zero emissions, and a premium feel—couldn’t have asked for more.", 
    img: user1 
  }
];
const Customer = () => {
  return (
    <section className="customer-section">

      {/* 🔥 Heading Animation */}
      <motion.h2
        className="customer-title"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        WHAT ARE OUR CLIENTS SAYING?
      </motion.h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        speed={600} // 👉 smooth slide speed
        autoplay={{
          delay: 1500, // 👉 STOP time (0.5–1s feel)
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {customers.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="customer-card"
              
            >
              <div className="image-wrapper">
                <img src={item.img} alt={item.name} />
              </div>

              <h4>{item.name}</h4>
              <p>{item.text}</p>
              <div className="stars">★★★★★</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Customer;