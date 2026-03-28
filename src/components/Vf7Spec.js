import React, { useState } from "react";
import "./Vf6Spec.css";

const Vf7Spec = () => {

  const variants = {

    earth: {
      name: "VF7 Earth",
      price: "₹—",
      image: require("../assets/vf7_Banner.jpg"),

      specs: {
        drivetrain: {
          title: "Electric Drivetrain",
          rows: [
            ["Max. power (kW)", "130"],
            ["Max. torque (Nm)", "250"],
            ["Driveline", "FWD"],
            ["Range (km)", "438"],
            ["Acceleration 0–100 km/h (s)", "10.38"]
          ]
        },
        battery: {
          title: "Battery and Charging",
          rows: [
            ["Usable Battery Capacity", "59.6 kWh"],
            ["Charge port", "CCS2"],
            ["AC Charging", "Up to 7.2 kW"],
            ["DC Charging", "100 kW"],
            ["Fast Charging (minutes)", "24 (10% to 70%)"]
          ]
        },
        dimensions: {
          title: "Dimensions",
          rows: [
            ["Length (mm)", "4550"],
            ["Width (mm)", "1893"],
            ["Height (mm)", "1596"],
            ["Wheel base (mm)", "2840"],
            ["Ground clearance (mm)", "190"],
            ["Boot space (L)", "537"]
          ]
        },
        weight: {
          title: "Weight",
          rows: [["Curb weight (kg)", "2085"]]
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
      name: "VF7 Wind",
      price: "₹—",
      image: require("../assets/vf7_Banner.jpg"),

      specs: {
        drivetrain: {
          title: "Electric Drivetrain",
          rows: [
            ["Max. power (kW)", "150"],
            ["Max. torque (Nm)", "310"],
            ["Driveline", "FWD"],
            ["Range (km)", "532"],
            ["Acceleration 0–100 km/h (s)", "9.5"]
          ]
        },
        battery: {
          title: "Battery and Charging",
          rows: [
            ["Usable Battery Capacity", "70.8 kWh"],
            ["Charge port", "CCS2"],
            ["AC Charging", "Up to 7.2 kW"],
            ["DC Charging", "110 kW"],
            ["Fast Charging (minutes)", "28 (10% to 70%)"]
          ]
        },
        dimensions: {
          title: "Dimensions",
          rows: [
            ["Length (mm)", "4550"],
            ["Width (mm)", "1893"],
            ["Height (mm)", "1596"],
            ["Wheel base (mm)", "2840"],
            ["Ground clearance (mm)", "190"],
            ["Boot space (L)", "537"]
          ]
        },
        weight: {
          title: "Weight",
          rows: [["Curb weight (kg)", "2127"]]
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


    windInfinity: {
  name: "VF7 Wind Infinity",
  price: "₹—",
  image: require("../assets/vf7_Banner.jpg"),

  specs: {
    drivetrain: {
      title: "Electric Drivetrain",
      rows: [
        ["Max. power (kW)", "150"],
        ["Max. torque (Nm)", "310"],
        ["Driveline", "FWD"],
        ["Range (km)", "532"],
        ["Acceleration 0–100 km/h (s)", "9.5"]
      ]
    },

    battery: {
      title: "Battery and Charging",
      rows: [
        ["Usable Battery Capacity", "70.8 kWh"],
        ["Charge port", "CCS2"],
        ["AC Charging", "Up to 7.2 kW"],
        ["DC Charging", "110 kW"],
        ["Fast Charging (minutes)", "28 (10% to 70%)"]
      ]
    },

    dimensions: {
      title: "Dimensions",
      rows: [
        ["Length (mm)", "4550"],
        ["Width (mm)", "1893"],
        ["Height (mm)", "1596"],
        ["Wheel base (mm)", "2840"],
        ["Ground clearance (mm)", "190"],
        ["Boot space (L)", "537"]
      ]
    },

    weight: {
      title: "Weight",
      rows: [["Curb weight (kg)", "2127"]]
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
sky: {
  name: "VF7 Sky",
  price: "₹—",
  image: require("../assets/vf7_Banner.jpg"),

  specs: {

    drivetrain: {
      title: "Electric Drivetrain",
      rows: [
        ["Max. power (kW)", "260"],
        ["Max. torque (Nm)", "500"],
        ["Driveline", "AWD"],
        ["Range (km)", "510"],
        ["Acceleration 0–100 km/h (s)", "5.8"]
      ]
    },

    battery: {
      title: "Battery and Charging",
      rows: [
        ["Usable Battery Capacity", "70.8 kWh"],
        ["Charge port", "CCS2"],
        ["AC Charging", "Up to 7.2 kW"],
        ["DC Charging", "110 kW"],
        ["Fast Charging (minutes)", "28 (10% to 70%)"]
      ]
    },

    dimensions: {
      title: "Dimensions",
      rows: [
        ["Length (mm)", "4550"],
        ["Width (mm)", "1893"],
        ["Height (mm)", "1596"],
        ["Wheel base (mm)", "2840"],
        ["Ground clearance (mm)", "190"],
        ["Boot space (L)", "537"]
      ]
    },

    weight: {
      title: "Weight",
      rows: [
        ["Curb weight (kg)", "2218"]
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


skyInfinity: {
  name: "VF7 Sky Infinity",
  price: "₹—",
  image: require("../assets/vf7_Banner.jpg"),

  specs: {

    drivetrain: {
      title: "Electric Drivetrain",
      rows: [
        ["Max. power (kW)", "260"],
        ["Max. torque (Nm)", "500"],
        ["Driveline", "AWD"],
        ["Range (km)", "510"],
        ["Acceleration 0–100 km/h (s)", "5.8"]
      ]
    },

    battery: {
      title: "Battery and Charging",
      rows: [
        ["Usable Battery Capacity", "70.8 kWh"],
        ["Charge port", "CCS2"],
        ["AC Charging", "Up to 7.2 kW"],
        ["DC Charging", "110 kW"],
        ["Fast Charging (minutes)", "28 (10% to 70%)"]
      ]
    },

    dimensions: {
      title: "Dimensions",
      rows: [
        ["Length (mm)", "4550"],
        ["Width (mm)", "1893"],
        ["Height (mm)", "1596"],
        ["Wheel base (mm)", "2840"],
        ["Ground clearance (mm)", "190"],
        ["Boot space (L)", "537"]
      ]
    },

    weight: {
      title: "Weight",
      rows: [
        ["Curb weight (kg)", "2218"]
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

      <div className="productSpecTop">
        <h2 className="productSpecHeading">VF7 Specifications</h2>

        <select
          className="variantDropdown"
          value={variant}
          onChange={(e) => {
            setVariant(e.target.value);
            setOpen(null);
          }}
        >
          <option value="earth">VF7 Earth</option>
          <option value="wind">VF7 Wind</option>
             <option value="windInfinity">VF7 Wind Infinity</option>
          <option value="sky">VF7 Sky</option>
              <option value="skyInfinity">VF7 Sky Infinity</option>
        </select>
      </div>

      <div className="productImage">
        <img src={data.image} alt={data.name} />
        <div className="imageInfo">
          <h3>{data.name}</h3>
          <p>{data.price}</p>
        </div>
      </div>

      <div className="specAccordion">
        {Object.entries(data.specs).map(([key, section]) => (
          <div className={`specItem ${open === key ? "active" : ""}`} key={key}>

            <div className="specTitle" onClick={() => toggle(key)}>
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