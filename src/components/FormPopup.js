// FormPopup.jsx
import React, { useState } from "react";
import "./FormPopup.css";

const FormPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit mobile number";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully!");
      setFormData({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
      });
      onClose();
    }
  };

  return (
    <div className="formpopup-overlay" onClick={onClose}>
      <div
        className="formpopup-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="formpopup-close" onClick={onClose}>
          ×
        </button>

        <h2 className="formpopup-title">Book Your Test Drive</h2>

        <form className="formpopup-form" onSubmit={handleSubmit}>
          <div className="formpopup-group">
            <label className="formpopup-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              className="formpopup-input"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <span className="formpopup-error">{errors.fullName}</span>
            )}
          </div>

          <div className="formpopup-group">
            <label className="formpopup-label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="formpopup-input"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="formpopup-error">{errors.email}</span>
            )}
          </div>

          <div className="formpopup-group">
            <label className="formpopup-label">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              className="formpopup-input"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <span className="formpopup-error">{errors.mobile}</span>
            )}
          </div>

          <div className="formpopup-group">
            <label className="formpopup-label">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter your city"
              className="formpopup-input"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && (
              <span className="formpopup-error">{errors.city}</span>
            )}
          </div>

          <button type="submit" className="formpopup-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPopup;