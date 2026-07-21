import { useState, useEffect } from 'react';
import styles from "../css/TextRotator.module.css";

const titles = [
  'Reveal Your Natural Beauty',
  'Glow With Confidence',
  'Luxury Beauty Starts Here',
  'Because You Deserve To Shine',
];

const TextRotator = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % titles.length);
        setIsVisible(true);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Split the title to highlight the last word with glow effect
  const currentTitle = titles[index];
  const words = currentTitle.split(' ');
  const lastWord = words.pop();
  const restOfTitle = words.join(' ');

  return (
    <h1 className={styles.title}>
      <span
        className={`${styles.textWrapper} ${isVisible ? styles.visible : styles.hidden}`}
      >
        <span className={styles.staticText}>{restOfTitle} </span>
        <span className={styles.glowText}>{lastWord}</span>
      </span>
    </h1>
  );
};

export default TextRotator;