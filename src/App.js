// App.js
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("preloaderShown");

    // if already visited in same tab session → no preloader
    if (hasVisited) {
      setLoading(false);
      return;
    }

    // force exact 8 sec loader
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("preloaderShown", "true");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <div className="loader-box">
            <div className="loader-ring"></div>

            <h1 className="loader-text">
              Eternity
              <span>VinFast Lucknow</span>
            </h1>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;