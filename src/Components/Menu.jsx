import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";
import styles from "../css/Menu.module.css";
import logo1 from "../assets/logo1.png";

const links = ["Home", "Services", "About", "Galerie", "Contact"];

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <nav
        className={`${styles.menu} ${
          scrolled ? styles.menuScrolled : ""
        }`}
      >
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img
            src={logo1}
            alt="Glow Beauty Logo"
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.links}>
            {links.map((link) => (
                <li key={link}>
                {link === "Home" ? (
                    <HashLink smooth to="/#Home" className={styles.link}>
                        Home
                   </HashLink>
                ) : link === "Services" ? (
                    <HashLink smooth to="/#services" className={styles.link}>
                    Services
                    </HashLink>
                ) : link === "Galerie" ? (
                    <HashLink smooth to="/#gallery" className={styles.link}>
                    Galerie
                    </HashLink>
                ) : link === "About" ? (
                    <HashLink smooth to="/#about" className={styles.link}>
                    About
                    </HashLink>
                ) : (
                    <Link to="/contact" className={styles.link}>
                    Contact
                    </Link>
                )}
                </li>
            ))}
        </ul>

        {/* Right Side */}
        <div className={styles.right}>
          <Link to="/appointment" className={styles.btnBook}>
            <span>Book Appointment</span>
          </Link>

          <button
            className={`${styles.hamburger} ${
              mobileOpen ? styles.hamburgerActive : ""
            }`}
            onClick={toggleMobile}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${
          mobileOpen ? styles.mobileMenuActive : ""
        }`}
      >
        {links.map((link) =>
          link === "Home" ? (
            <Link
              key={link}
              to="/"
              className={styles.mobileLink}
              onClick={toggleMobile}
            >
              {link}
            </Link>
          ) : link === "Contact" ? (
            <Link
              key={link}
              to="/contact"
              className={styles.mobileLink}
              onClick={toggleMobile}
            >
              {link}
            </Link>
          ) : (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={styles.mobileLink}
              onClick={toggleMobile}
            >
              {link}
            </a>
          )
        )}

        <Link
          to="/appointment"
          className={styles.mobileBtn}
          onClick={toggleMobile}
        >
          Book Appointment
        </Link>
      </div>
    </>
  );
};

export default Menu;