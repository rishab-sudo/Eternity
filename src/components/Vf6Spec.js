import React, { useState } from "react";
import "./Vf6Spec.css";

const Vf6Spec = () => {


const variants = {
  earth: {
    name: "VF6 Earth",
    price: "₹ 17,29,000",
    image: require("../assets/specification/spec-vf6.png"),

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
      },

      weight: {
        title: "Weight",
        rows: [
          ["Curb weight (kg)", "1962"]
        ]
      },

      brakes: {
        title: "Brakes",
        rows: [
          ["Front and Rear", "Disc"],
          ["Electronic Parking Brake", "YES"],
          ["Auto Hold", "YES"]
        ]
      },

      suspension: {
        title: "Suspension",
        rows: [
          ["Front Suspension", "MacPherson independent"],
          ["Rear Suspension", "Control blade independent"]
        ]
      },

      smart: {
        title: "Smart Drive Features",
        rows: [
          ["Regeneration brake modes", "Off, Low, Medium, High"],
          ["Selectable driving modes", "Eco / Normal / Sport"]
        ]
      }

    }
  },

wind: {
  name: "VF6 Wind",
  price: "₹ 18,69,000",
  image: require("../assets/specification/spec-vf6.png"),

  specs: {

    drivetrain: {
      title: "Electric Drivetrain",
      rows: [
        ["Max. power (kW)", "150"],
        ["Max. torque (Nm)", "310"],
        ["Driveline", "FWD"],
        ["Range (km)", "463"],
        ["Acceleration 0–100 km/h (s)", "8.5"]
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
    },

    weight: {
      title: "Weight",
      rows: [
        ["Curb weight (kg)", "2028"]
      ]
    },

    brakes: {
      title: "Brakes",
      rows: [
        ["Front and Rear", "Disc"],
        ["Electronic Parking Brake", "YES"],
        ["Auto Hold", "YES"]
      ]
    },

    suspension: {
      title: "Suspension",
      rows: [
        ["Front Suspension", "MacPherson independent"],
        ["Rear Suspension", "Control blade independent"]
      ]
    },

    smart: {
      title: "Smart Drive Features",
      rows: [
        ["Regeneration brake modes", "Off, Low, Medium, High"],
        ["Selectable driving modes", "Eco/Normal/Sport"]
      ]
    }

  }
},

infinity: {
  name: "VF6 Wind Infinity",
  price: "₹ 19,19,000",
  image: require("../assets/specification/spec-vf6.png"),

  specs: {

    drivetrain: {
      title: "Electric Drivetrain",
      rows: [
        ["Max. power (kW)", "150"],
        ["Max. torque (Nm)", "310"],
        ["Driveline", "FWD"],
        ["Range (km)", "463"],
        ["Acceleration 0–100 km/h (s)", "8.5"]
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
    },

    weight: {
      title: "Weight",
      rows: [
        ["Curb weight (kg)", "2028"]
      ]
    },

    brakes: {
      title: "Brakes",
      rows: [
        ["Front and Rear", "Disc"],
        ["Electronic Parking Brake", "YES"],
        ["Auto Hold", "YES"]
      ]
    },

    suspension: {
      title: "Suspension",
      rows: [
        ["Front Suspension", "MacPherson independent"],
        ["Rear Suspension", "Control blade independent"]
      ]
    },

    smart: {
      title: "Smart Drive Features",
      rows: [
        ["Regeneration brake modes", "Off, Low, Medium, High"],
        ["Selectable driving modes", "Eco/Normal/Sport"]
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
     VF6 Detailed Specifications
        </h2>
<div className="variantDropdownWrapper">
  <select
    className="variantDropdown"
    value={variant}
    onChange={(e)=> {
      setVariant(e.target.value);
      setOpen(null);
    }}
  >
    <option value="earth">VF6 Earth</option>
    <option value="wind">VF6 Wind</option>
    <option value="infinity">VF6 Wind Infinity</option>
  </select>
</div>

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

export default Vf6Spec;