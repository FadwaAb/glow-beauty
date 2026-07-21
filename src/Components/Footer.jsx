import React from "react";
import { HashLink } from "react-router-hash-link";
import styles from "../css/Footer.module.css";
import logo from "../assets/logo1.png";

// SVG Icons (Social Media)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Contact Icons
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Navigation — About: intern (/aboutus)
  const navigationLinks = [
    { label: "Home", href:  "/#Home" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
  ];
  // Quick Links — Contact: intern (#contact, scroll l section)
  const quickLinks = [
    { label: "Gallery", href: "/#gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    { 
      icon: <PhoneIcon />, 
      text: '+212 6 12 34 56 78',
      href: 'tel:+212612345678'
    },
    { 
      icon: <MailIcon />, 
      text: 'contact@glowbeauty.com',
      href: 'mailto:contact@glowbeauty.com'
    },
    { 
      icon: <MapPinIcon />, 
      text: 'Casablanca, Morocco',
      href: '#'
    },
  ];

  const socialLinks = [
    { icon: <InstagramIcon />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FacebookIcon />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <TiktokIcon />, href: 'https://tiktok.com', label: 'TikTok' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        {/* Brand Column */}
        <div className={styles['brand-column']}>
          <div className={styles['logo-wrapper']}>
            <img 
              src={logo}
              alt="Glow Beauty" 
              className={styles.logo}
            />
          </div>
          <p className={styles['brand-description']}>
            Be your own kind of beautiful <span className={styles.heart}>♡</span>
          </p>
        </div>

        {/* Navigation Column */}
        <div className={styles['nav-column']}>
          <h4>Navigation</h4>
          <ul className={styles['nav-list']}>
            {navigationLinks.map((link, index) => (
              <li key={index}>
               <HashLink smooth to={link.href} className={styles["nav-link"]}>
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className={styles['quick-links-column']}>
          <h4>Quick Links</h4>
          <ul className={styles['quick-links-list']}>
            {quickLinks.map((link, index) => (
              <li key={index}>
                <HashLink smooth to={link.href} className={styles["quick-link"]}>
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className={styles['contact-column']}>
          <h4>Contact</h4>
          <ul className={styles['contact-list']}>
            {contactInfo.map((item, index) => (
              <li key={index} className={styles['contact-item']}>
                <span className={styles['contact-icon']}>{item.icon}</span>
                <a href={item.href} className={styles['contact-link']}>
                  <span className={styles['contact-text']}>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Column */}
        <div className={styles['social-column']}>
          <h4>Follow Us</h4>
          <div className={styles['social-icons']}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={styles['social-link']}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <span className={styles['social-icon']}>{social.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className={styles['footer-divider']}>
        <hr className={styles['footer-divider-line']} />
      </div>

      {/* Bottom Bar */}
      <div className={styles['footer-bottom']}>
        <p className={styles.copyright}>
          © {currentYear} <span className={styles['brand-name']}>Glow Beauty</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;