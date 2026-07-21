import React from 'react';
import styles from "../css/Whychose.module.css";
import { Sparkles, Flower2, HeartHandshake, Gem } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'Expert Beauty Specialists', description: 'Professional artists dedicated to your beauty.' },
  { icon: Flower2, title: 'Premium Products', description: 'We use high-quality products for the best results.' },
  { icon: HeartHandshake, title: 'Relaxing Experience', description: 'Enjoy a peaceful and luxurious beauty journey.' },
  { icon: Gem, title: 'Personalized Care', description: 'Treatments designed for your unique needs.' }
];

const WhyChooseGlow = () => {
  return (
    <section className={styles['why-choose-glow']}>
      <div className={styles.container}>
        <h2 className={styles['section-title']}>
          Why Choose <span>Glow Beauty?</span>
        </h2>

        <div className={styles['features-grid']}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div className={styles['feature-card']} key={index}>
                <div className={styles['feature-icon']}>
                  <IconComponent size={40} strokeWidth={1.5} />
                </div>
                <h3 className={styles['feature-title']}>{feature.title}</h3>
                <p className={styles['feature-description']}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseGlow;