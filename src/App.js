import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import Home from "./pages/Home";
import VF6 from "./pages/VF6";
import VF7 from "./pages/VF7";
import MPV from "./pages/MPV";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  // 👇 initialize directly (important fix)
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("preloaderShown");
  });

  useEffect(() => {
    // agar already shown hai → kuch mat karo
    if (sessionStorage.getItem("preloaderShown")) return;

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("preloaderShown", "true");
    }, 2500); // duration control

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader">
        <div className="loader-box">
          <div className="loader-ring"></div>

          <h1 className="loader-text">
            Eternity
            <span>VinFast Lucknow</span>
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <FloatingButtons />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mpv" element={<MPV />} />
        <Route path="/vf6" element={<VF6 />} />
        <Route path="/vf7" element={<VF7 />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;