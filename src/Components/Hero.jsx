import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import TextRotator from "./TextRotator";
import styles from "../css/Hero.module.css";

const Hero = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const goToServices = () => {
    navigate("/");

    setTimeout(() => {
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <section id="Home" className={styles.hero}>
      {/* Decorative blurred circles */}
      <div className={styles.decorCircle1} />
      <div className={styles.decorCircle2} />
      <div className={styles.decorCircle3} />
      <div className={styles.decorCircle4} />
      <div className={styles.decorCircle5} />
      <div className={styles.decorCircle6} />

      {/* Sparkles */}
      <div className={`${styles.sparkle} ${styles.sparkle1}`}>✦</div>
      <div className={`${styles.sparkle} ${styles.sparkle2}`}>✧</div>
      <div className={`${styles.sparkle} ${styles.sparkle3}`}>✦</div>
      <div className={`${styles.sparkle} ${styles.sparkle4}`}>✧</div>
      <div className={`${styles.sparkle} ${styles.sparkle5}`}>✦</div>

      <div className={styles.content}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <TextRotator />

          <p className={styles.description}>
            Glow Beauty offers luxury beauty treatments, skincare, makeup,
            hair styling, and relaxing salon experiences designed to make you
            feel confident, radiant, and beautiful every day.
          </p>

          <div className={styles.buttons}>
            <Link to="/appointment" className={styles.btnPrimary}>
              <span>Book Appointment</span>
            </Link>

            <button
              onClick={goToServices}
              className={styles.btnSecondary}
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right} ref={containerRef}>
          {products.map((product) => (
            <div
              key={product.id}
              className={styles.product}
              style={{
                "--product-width": product.style.width,
                "--product-top": product.style.top,
                "--product-left": product.style.left,
                "--product-rotate": product.style.rotate,
                "--product-z": product.style.zIndex,
                "--anim-duration": product.style.animDuration,
                "--anim-delay": product.style.animDelay,
                "--move-x": product.style.moveX,
                "--move-y": product.style.moveY,
                "--rotate-anim": product.style.rotateAnim,
                "--mouse-x": `${mousePos.x * 20}px`,
                "--mouse-y": `${mousePos.y * 20}px`,
              }}
            >
              <img
                src={product.src}
                alt={product.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;