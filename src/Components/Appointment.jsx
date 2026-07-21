import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/Appointment.css";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
];

const Appointment = () => {
  const location = useLocation();

  const selectedService = location.state?.service || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: selectedService,
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Appointment booked:", formData);

    alert("Thank you! Your appointment request has been sent.");
  };

  return (
    <section className="contact-section">

      {/* Decorative flowers */}
      <svg 
        className="contact-deco-flower contact-deco-flower-1" 
        viewBox="0 0 100 100" 
        fill="none"
      >
        <circle cx="50" cy="50" r="15" fill="#EBB4C6"/>
        <circle cx="50" cy="25" r="12" fill="#EBB4C6" opacity="0.6"/>
        <circle cx="50" cy="75" r="12" fill="#EBB4C6" opacity="0.6"/>
        <circle cx="25" cy="50" r="12" fill="#EBB4C6" opacity="0.6"/>
        <circle cx="75" cy="50" r="12" fill="#EBB4C6" opacity="0.6"/>
      </svg>


      <svg 
        className="contact-deco-flower contact-deco-flower-2" 
        viewBox="0 0 100 100" 
        fill="none"
      >
        <circle cx="50" cy="50" r="12" fill="#EBB4C6"/>
        <circle cx="50" cy="30" r="10" fill="#EBB4C6" opacity="0.5"/>
        <circle cx="50" cy="70" r="10" fill="#EBB4C6" opacity="0.5"/>
        <circle cx="30" cy="50" r="10" fill="#EBB4C6" opacity="0.5"/>
        <circle cx="70" cy="50" r="10" fill="#EBB4C6" opacity="0.5"/>
      </svg>


      {/* Sparkles */}
      <svg 
        className="contact-deco-sparkle contact-deco-sparkle-1" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none"
      >
        <path 
          d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" 
          fill="#d4af37"
        />
      </svg>


      <svg 
        className="contact-deco-sparkle contact-deco-sparkle-2" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none"
      >
        <path 
          d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" 
          fill="#d4af37"
        />
      </svg>


      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">
            Book Your <span>Appointment</span>
          </h2>

          <p className="contact-subtitle">
            Fill out the form below and our team will get back to you to confirm your booking.
          </p>

        </div>


        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>


          <div className="form-row">

            <div className="form-group">
              <label className="form-label">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                className="form-input"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>


            <div className="form-group">

              <label className="form-label">
                Email
              </label>

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

          </div>



          <div className="form-row">

            <div className="form-group">

              <label className="form-label">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="+212 ..."
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>



            <div className="form-group">

              <label className="form-label">
                Choose Service
              </label>

              <select
                name="service"
                className="form-select"
                value={formData.service}
                onChange={handleChange}
                required
              >

                <option value="Luxury Facial">Luxury Facial</option>

                <option value="Luxury Facial">Luxury Facial</option>

                <option value="Bridal Makeup">Bridal Makeup</option>

                <option value="Hair Styling">Hair Styling</option>

                <option value="Gel Nails">Gel Nails</option>

                <option value="Lash Extensions">Lash Extensions</option>

                <option value="Massage">Massage</option>

              </select>

            </div>

          </div>




          <div className="form-row">

            <div className="form-group">

              <label className="form-label">
                Preferred Date
              </label>

              <input
                type="date"
                name="date"
                className="form-input"
                value={formData.date}
                onChange={handleChange}
                required
              />

            </div>



            <div className="form-group">

              <label className="form-label">
                Preferred Time
              </label>


              <select
                name="time"
                className="form-select"
                value={formData.time}
                onChange={handleChange}
                required
              >

                <option value="" disabled>
                  Select a time
                </option>


                {timeSlots.map((slot)=>(
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}


              </select>

            </div>


          </div>




          <div className="form-group">

            <label className="form-label">
              Message
            </label>


            <textarea
              name="message"
              className="form-textarea"
              placeholder="Tell us about your request..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />


          </div>



          <button 
            type="submit" 
            className="form-submit"
          >

            <span>
              Confirm Appointment
            </span>

          </button>



        </form>


      </div>


    </section>
  );
};


export default Appointment;