import React from "react";
import "./TestDrive.css";

const TestDrive = () => {
  return (
    <section className="testdrive-section">
      {/* Overlay */}
      <div className="testdrive-overlay"></div>

      <div className="testdrive-container">
        {/* LEFT CONTENT */}
        <div className="testdrive-left">
          <h2 className="testdrive-heading">
            Experience the Drive Like Never Before
          </h2>
          <p className="testdrive-desc">
            Discover unmatched comfort, performance, and innovation.
            Book your test drive today and feel the difference behind the wheel.
          </p>

          <button className="testdrive-btn">Book Test Drive</button>
        </div>

        {/* RIGHT MAP */}
        <div className="testdrive-right">
          <iframe
            title="location-map"
            src="https://www.google.com/maps?q=28.6139,77.2090&z=15&output=embed"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default TestDrive;