import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./OverView.css";

const OverView = ({ title, data }) => {
  return (
    <Container fluid className="spec-section">

      <h2 className=" overview-heading mb-2">{title}</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        loop={true}
        speed={800}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        className="spec-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="spec-slide">

            <div className="spec-card">

              <img src={item.img} alt={item.title} />

              <div className="spec-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </Container>
  );
};

export default OverView;