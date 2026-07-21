import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/ServiceModal.module.css";
const ServiceModal = ({ service, onClose }) => {
  const navigate = useNavigate();
  const handleBookAppointment = () => {
  navigate("/appointment", {
      state: {
        service: service.name,
      },
    });
  };
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.content}>
          {/* Left - Details */}
          <div className={styles.details}>
            <span className={styles.category}>{service.category}</span>
            <h2 className={styles.name}>{service.name}</h2>
            <p className={styles.description}>{service.fullDescription}</p>

            {/* Benefits */}
            <div className={styles.benefits}>
              <h4 className={styles.benefitsTitle}> Benefits</h4>
              <ul className={styles.benefitsList}>
                {service.benefits.map((benefit, index) => (
                  <li key={index} className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Meta */}
            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration</span>
                <span className={styles.metaValue}>⏱ {service.duration}</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Price</span>
                <span className={styles.metaValue}>{service.price}</span>
              </div>
            </div>

            {/* CTA */}
            <button className={styles.bookBtn} onClick={handleBookAppointment} >
              Book Appointment
            </button>
          </div>

          {/* Right - Image */}
          <div className={styles.imageWrapper}>
            <img
              src={service.image}
              alt={service.name}
              className={styles.image}
            />
            {service.badge && (
              <span
                className={styles.badge}
                style={{ backgroundColor: service.badgeColor }}
              >
                {service.badge}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;