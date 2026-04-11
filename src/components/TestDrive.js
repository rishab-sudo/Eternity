import React,{useState} from "react";
import FormPopup from "./FormPopup";
import "./TestDrive.css";

const TestDrive = () => {
    const [showPopup, setShowPopup] = useState(false);
  return (
    <section className="testdrive-section">
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

           <button className="testdrive-btn" onClick={() => setShowPopup(true)}>Book Test Drive</button>

      <FormPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
        </div>

        {/* RIGHT MAP */}
        <div className="testdrive-right">
         <iframe
  title="location-map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.9247834384882!2d81.08340243243329!3d26.89579357711344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995fed9bb8e997%3A0x38f7bab851d63829!2sVinfast%20Lucknow!5e0!3m2!1sen!2sin!4v1775909630856!5m2!1sen!2sin"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
        </div>

      </div>
    </section>
  );
};

export default TestDrive;