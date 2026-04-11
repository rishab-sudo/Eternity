import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import "./FloatingButtons.css";

const FloatingButtons = () => {

  const handleWhatsAppClick = () => {
    const phoneNumber = "918679509990"; // replace with your number
    const message = "Hello, I want to know more!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="floating-buttons">

      {/* WhatsApp Button */}
      <div className="circle-btn whatsapp" onClick={handleWhatsAppClick}>
        <FaWhatsapp />
      </div>

      {/* Scroll To Top Button */}
      <div className="circle-btn top" onClick={scrollToTop}>
        <IoIosArrowUp />
      </div>

    </div>
  );
};

export default FloatingButtons;