import React, { useState } from "react";
import "../css/Contact.css";
import {FaMapMarkerAlt,FaPhoneAlt,FaEnvelope,FaClock,} from "react-icons/fa";

const SERVICES = [
  "Luxury Facial",
  "Bridal Makeup",
  "Gel Nails",
  "Hair Care Treatment",
  "Lash Extensions",
  "Hot Stone Massage",
  "Autre / Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: SERVICES[0],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your booking / email service here
    setSubmitted(true);
  };

  return (
    <section className="glow-contact" id="contact">
      <div className="glow-contact__deco glow-contact__deco--one" />
      <div className="glow-contact__deco glow-contact__deco--two" />

      <div className="glow-contact__header">
        <span className="glow-contact__eyebrow">Contactez-Nous</span>
        <h2 className="glow-contact__title">
          Let&apos;s Talk <span>Beauty</span>
        </h2>
        <p className="glow-contact__subtitle">
          Une question, une réservation, ou juste envie de dire bonjour —
          notre équipe vous répond avec plaisir.
        </p>
      </div>

      <div className="glow-contact__grid">
        {/* Info card */}
        <div className="glow-card glow-card--info">
          <h3>Visit The Salon</h3>

           <div className="glow-info-row">
              <span className="glow-info-icon">
                <FaMapMarkerAlt />
              </span>            
           <div>
              <p className="glow-info-label">Address</p>
              <p className="glow-info-value">25 Boulevard Anfa, Maarif, Casablanca 20250 ,Morocco
              </p>
            </div>
          </div>

          <div className="glow-info-row">
            <span className="glow-info-icon">
              <FaPhoneAlt />
            </span>
            <div>
              <p className="glow-info-label">Phone</p>
              <p className="glow-info-value">+212 6 50 24 43  80</p>
            </div>
          </div>

          <div className="glow-info-row">
            <span className="glow-info-icon">
              <FaEnvelope />
            </span>
            <div>
              <p className="glow-info-label">Email</p>
              <p className="glow-info-value">salonbeauty1@glowbeauty.ma</p>
            </div>
          </div>

          <div className="glow-info-row">
            <span className="glow-info-icon">
              <FaClock />
            </span>
            <div>
              <p className="glow-info-label">Hours</p>
              <p className="glow-info-value">Lun – Sam · 9h00 – 20h00</p>
            </div>
          </div>

        </div>

        {/* Form card */}
        <div className="glow-card glow-card--form">
          {submitted ? (
            <div className="glow-success">
              <div className="glow-success__badge">✓</div>
              <h3>Merci !</h3>
              <p>
                Votre message a bien été envoyé. Notre équipe vous contactera
                très bientôt.
              </p>
              <button
                type="button"
                className="glow-btn glow-btn--outline"
                onClick={() => setSubmitted(false)}
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form className="glow-form" onSubmit={handleSubmit}>
              <div className="glow-form__row">
                <div className="glow-field">
                  <label htmlFor="name">Nom complet</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="glow-field">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+212 6 00 00 00 00"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="glow-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="vous@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="glow-field">
                <label htmlFor="service">Service souhaité</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="glow-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Dites-nous en plus sur votre demande..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="glow-btn glow-btn--fill">
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}