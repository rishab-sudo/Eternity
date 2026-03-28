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
  { name: "Sophia Garcia", text: "Excellent experience!", img: user1 },
  { name: "Isabella Lee", text: "Smooth process.", img: user2 },
  { name: "Ethan Patel", text: "Loved the service.", img: user3 },
  { name: "Samuel Brown", text: "Very professional.", img: user4 },
  { name: "Daniel Smith", text: "Highly recommended.", img: user5 },
  { name: "Olivia Johnson", text: "Amazing support.", img: user6 },
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