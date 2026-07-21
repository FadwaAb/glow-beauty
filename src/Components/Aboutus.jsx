import React from 'react';
import '../css/Aboutus.css';
import Aboutusimg from "../assets/B1.png";

const Aboutus = () => {
  return (
    <section id="about" className="about-section">
      {/* Decorative flowers */}
      <svg className="about-deco-flower about-deco-flower-1" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="15" fill="#E8AEB7"/>
        <circle cx="50" cy="25" r="12" fill="#E8AEB7" opacity="0.6"/>
        <circle cx="50" cy="75" r="12" fill="#E8AEB7" opacity="0.6"/>
        <circle cx="25" cy="50" r="12" fill="#E8AEB7" opacity="0.6"/>
        <circle cx="75" cy="50" r="12" fill="#E8AEB7" opacity="0.6"/>
      </svg>

      <svg className="about-deco-flower about-deco-flower-2" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="12" fill="#E8AEB7"/>
        <circle cx="50" cy="30" r="10" fill="#E8AEB7" opacity="0.5"/>
        <circle cx="50" cy="70" r="10" fill="#E8AEB7" opacity="0.5"/>
        <circle cx="30" cy="50" r="10" fill="#E8AEB7" opacity="0.5"/>
        <circle cx="70" cy="50" r="10" fill="#E8AEB7" opacity="0.5"/>
      </svg>

      {/* Sparkles */}
      <svg className="about-deco-sparkle about-deco-sparkle-1" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#d4af37"/>
      </svg>

      <svg className="about-deco-sparkle about-deco-sparkle-2" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" fill="#d4af37"/>
      </svg>

      <div className="about-container">
        {/* Header - Title only, NO description */}
        <div className="about-header">
          <h2 className="about-title">The Story Behind<br />Your <span>Glow</span></h2>
        </div>

        {/* Grid: Image LEFT, Text RIGHT */}
        <div className="about-grid">
          {/* Image - LEFT SIDE */}
          <div className="about-image-wrapper">
            <img 
              className="about-image-main" 
              src={Aboutusimg} 
              alt="Glow Beauty Salon Interior"
            />
            <div className="about-image-frame"></div>
            <div className="about-image-badge">
              <div className="about-badge-number">15+</div>
              <div className="about-badge-text">Years Experience</div>
            </div>
          </div>

          {/* Content - RIGHT SIDE */}
          <div className="about-content">
            <h3>A Sanctuary of Beauty & Relaxation</h3>
            <p>
              Founded in 2014, Glow Beauty began with a simple vision: to create a space where every woman 
              feels pampered, valued, and truly glowing. What started as a small studio has blossomed into 
              one of Morocco's most beloved beauty destinations.
            </p>
            <p>
              Our team of certified beauty specialists brings together expertise from across the globe, 
              blending international techniques with a warm, personal touch that makes every visit feel 
              like coming home.
            </p>
            <p>
              We believe beauty is not just about looking good — it's about feeling confident, empowered, 
              and radiant from within. That's why every treatment at Glow is designed to nurture both 
              your outer glow and your inner light.
            </p>

            {/* Stats */}
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">5K<span className="gold-plus">+</span></div>
                <div className="about-stat-label">Happy Clients</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">15<span className="gold-plus">+</span></div>
                <div className="about-stat-label">Years Experience</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">50<span className="gold-plus">+</span></div>
                <div className="about-stat-label">Luxury Services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;