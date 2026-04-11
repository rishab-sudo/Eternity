// MpvSpecs.jsx
import React from "react";
import "./MpvSpecs.css";

const specs = [
  { label: "Overall dimension (LxWxH) (mm)", value: "4740 x 1872 x 1734" },
  { label: "Wheel base (mm)", value: "2840 mm" },
  { label: "Acceleration (0-100 kph) (s)", value: "< 10s" },
  { label: "Regeneration brake mode", value: "Off, Low, Medium, High" },
  { label: "Selectable driving mode", value: "Eco / Normal / Sport" },
  { label: "Usable Battery Capacity", value: "60.13 kWh" },
  { label: "Fast Charging 10% to 70%", value: "30 mins" },
  { label: "Wheel and Tyre", value: "235/50 R19" },
  {
    label: "Steering wheel",
    value: "D-cut, leatherette wrap, multi-function, tilt & telescopic",
  },
  { label: "Seat upholstery", value: "Leatherette" },
  {
    label: "Windows",
    value: "All windows auto up/down with anti pinch",
  },
  { label: "Tire Pressure Monitoring System (TPMS)", value: "dTPMS" },
  {
    label: "Braking & Stability Assistance",
    value: "ABS, EBD, BA, ESC, TCS, HSA, ROM",
  },
  { label: "All Disc Brakes", value: "YES" },
  { label: "Electronic Parking Brake with Auto Hold", value: "YES" },
];

const MpvSpecs = () => {
  return (
    <div className="mpv-specs-page">
      {/* Heading */}
      <h2 className="mpv-heading">MPV Specifications</h2>

      {/* Image */}
      <div className="mpv-image-container">
        <img
          src={require("../assets/products/Vinhero1 jpg.jpeg")} // apni image path daal do
          alt="MPV Car"
          className="mpv-image"
        />

        <div className="mpv-image-text">
          {/* <h2>VF MPV 7</h2> */}
          <h3>Book Now</h3>
        </div>
      </div>

      {/* Table */}
      <div className="mpv-table-wrapper">
        <table className="mpv-table">
          <tbody>
            {specs.map((item, index) => (
              <tr key={index}>
                <td>{item.label}</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MpvSpecs;