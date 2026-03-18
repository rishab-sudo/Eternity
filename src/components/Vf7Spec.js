import React, { useState } from "react";
import "./Vf6Spec.css";

const Vf7Spec = () => {


  const variants = {
  earth: {
    name: "VF7 Earth",
    price: "₹25,00,000",
    image: require("../assets/vf6_Banner.jpg"),

    specs: {

      drivetrain: {
        title: "Electric Drivetrain",
        rows: [
          ["Max. power (kW)", "130"],
          ["Max. torque (Nm)", "250"],
          ["Driveline", "FWD"],
          ["Range (km)", "468"],
          ["Acceleration 0–100 km/h (s)", "9.12"]
        ]
      },

      battery: {
        title: "Battery and Charging",
        rows: [
          ["Usable Battery Capacity", "59.6 kWh"],
          ["Charge port", "CCS2"],
          ["AC Charging", "Up to 7.2 kW"],
          ["DC Charging", "100 kW"],
          ["Fast Charging (minutes)", "25 (10% to 70%)"]
        ]
      },

      dimensions: {
        title: "Dimensions",
        rows: [
          ["Length (mm)", "4241"],
          ["Width (mm)", "1834"],
          ["Height (mm)", "1615"],
          ["Wheel base (mm)", "2730"],
          ["Ground clearance - No Load (mm)", "190"],
          ["Boot space (L)", "423"]
        ]
      }

    }
  }
};
  const [variant, setVariant] = useState("earth");
  const [open, setOpen] = useState(null);

  const data = variants[variant];

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };

  return (

    <section className="productSpec">

      {/* heading + dropdown */}

      <div className="productSpecTop">

        <h2 className="productSpecHeading">
          VF7 Specifications
        </h2>

        <select
          className="variantDropdown"
          value={variant}
          onChange={(e)=> {
            setVariant(e.target.value);
            setOpen(null);
          }}
        >
          <option value="earth">VF7 Earth</option>
          <option value="wind">VF7 Wind</option>
        </select>

      </div>


      {/* image */}

      <div className="productImage">

        <img src={data.image} alt={data.name} />

        <div className="imageInfo">

          <h3>{data.name}</h3>
          <p>{data.price}</p>

        </div>

      </div>


      {/* accordion */}

   <div className="specAccordion">

  {Object.entries(data.specs).map(([key, section]) => (

    <div className={`specItem ${open === key ? "active" : ""}`} key={key}>

      <div
        className="specTitle"
        onClick={() => toggle(key)}
      >

        {section.title}

        <span className="arrow"></span>

      </div>

      <div className={`specContent ${open === key ? "show" : ""}`}>

        <table className="specTable">

          <tbody>

            {section.rows.map((row, i) => (

              <tr key={i}>
                <td className="specLabel">{row[0]}</td>
                <td className="specValue">{row[1]}</td>
              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  ))}

</div>

    </section>

  );
};

export default Vf7Spec;