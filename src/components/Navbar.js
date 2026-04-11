import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import FormPopup from "./FormPopup";
import "./Navbar.css";


const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <div className={`navbar ${showNav ? "show" : ""}`}>
        <Container fluid className="d-flex justify-content-between align-items-center">

          <div className="navbar-logo">
            <a href="/home">
              <img
                src={require("../assets/eternity-logo-white.png")}
                alt="logo"
              />
            </a>
          </div>

          <div className="navbar-links">
            <a className="links" href="/">Home</a>
            <a className="links" href="/mpv">VF MPV 7</a>
            <a className="links" href="/vf7">VF 7</a>
            <a className="links" href="/vf6">VF 6</a>
            <a className="links" href="/contact">Contact</a>

           <button className="enquiry-btn" onClick={() => setShowPopup(true)}>Enquiry</button>

      <FormPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
          </div>

          <div className="navbar-menu" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </div>

        </Container>
      </div>

      {/* SIDEBAR */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>

        <div className="sidebar-logo">
          <img src="/logo.png" alt="logo" height="40" />
        </div>

        <a className="links" href="/" onClick={() => setMenuOpen(false)}>Home</a>
                <a className="links" href="/mpv" onClick={() => setMenuOpen(false)}>MPV7</a>
        <a className="links" href="/vf7" onClick={() => setMenuOpen(false)}>VF 7</a>
        <a className="links" href="/vf6" onClick={() => setMenuOpen(false)}>VF 6</a>
        <a className="links" href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a className="links" href="/enquiry" onClick={() => setMenuOpen(false)}>Enquiry</a>

      </div>
    </>
  );
};

export default Navbar;