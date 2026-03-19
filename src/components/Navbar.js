import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [carDropdown, setCarDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close dropdown when clicking anywhere
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setCarDropdown(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const toggleCars = () => {
  //   setCarDropdown(!carDropdown);
  // };

  return (
    <>
      <div className={`navbar ${showNav ? "show" : ""}`}>
        <Container fluid className="d-flex justify-content-between align-items-center">

          <div className="navbar-logo">
            <img src= {require("../assets/eternity-logo.png")} alt="logo" height="40" />
          </div>

     <div className="navbar-links">

  <a className="links" href="/">Home</a>
  <a className="links" href="/vf7">Vf7</a>
  <a className="links" href="/vf6">Vf6</a>
  <a className="links" href="/contact">Contact</a>

  <a className="enquiry-btn" href="/enquiry">
    Enquiry
  </a>

</div>
          <div className="navbar-menu" onClick={toggleMenu}>
            {menuOpen ? "✕" : "☰"}
          </div>

        </Container>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>

        <div className="sidebar-logo">
          <img src="/logo.png" alt="logo" height="40" />
        </div>

        <a className="links" href="/">Home</a>
        {/* <a className="links" href="/about">About</a> */}

        {/* <div className="sidebar-dropdown">
          <div className="links" onClick={toggleCars}>
            Our Cars
            <span className={`arrow ${carDropdown ? "rotate" : ""}`}>▾</span>
          </div>

          <div className={`sidebar-submenu ${carDropdown ? "show" : ""}`}>
            <a href="/VF6">VF 6</a>
            <a href="/VF7">VF 7</a>
          
          </div>
        </div> */}

        <a className="links" href="/contact">Contact</a>

      </div>
    </>
  );
};

export default Navbar;