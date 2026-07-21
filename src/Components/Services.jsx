import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Services.module.css";
import { services } from "../data/services";
import ServiceModal from "./ServiceModal";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [selectedService, setSelectedService] = useState(null);
  const sectionRef = useRef(null);

  const navigate = useNavigate();
  const handleBookNow = (service) => {
    navigate("/appointment", {
      state: {
        service: service.name,
      },
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.dataset.id);
            setVisibleCards((prev) => {
              const updated = new Set(prev);
              updated.add(id);
              return updated;
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll(
      `.${styles.card}`
    );

    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section
        className={styles.services}
        id="services"
        ref={sectionRef}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            Our Premium <span className={styles.glowText}>Beauty Services</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((service) => (
            <div
              key={service.id}
              data-id={service.id}
              className={`${styles.card} ${
                visibleCards.has(service.id)
                  ? styles.cardVisible
                  : ""
              }`}
              style={{
                transitionDelay: `${service.id * 100}ms`,
              }}
            >
              {/* Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={service.image}
                  alt={service.name}
                  className={styles.image}
                  loading="lazy"
                />

                {service.badge && (
                  <span
                    className={styles.badge}
                    style={{
                      backgroundColor: service.badgeColor,
                    }}
                  >
                    {service.badge}
                  </span>
                )}

                <div className={styles.imageOverlay} />
              </div>

              {/* Content */}
              <div className={styles.content}>
                <span className={styles.category}>
                  {service.category}
                </span>

                <h3 className={styles.name}>{service.name}</h3>

                <p className={styles.description}>
                  {service.description}
                </p>

                <div className={styles.meta}>
                  <span className={styles.duration}>
                    ⏱ {service.duration}
                  </span>
                  <span className={styles.price}>
                    {service.price}
                  </span>
                </div>

                {/* Buttons */}
                <div className={styles.buttons}>
                  <button
                    className={styles.viewDetailsBtn}
                    onClick={() => openModal(service)}>
                    View Details
                  </button>
                  <button className={styles.bookBtn} onClick={() => handleBookNow(service)}>
                      Book Now
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Services;