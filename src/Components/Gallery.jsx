import React, { useState, useEffect } from "react";
import "../css/Gallery.css";
import { galleryImages } from "../data/Gallery";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        (prev + 1) % galleryImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const prev =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;

    const next =
      (currentIndex + 1) % galleryImages.length;

    return [
      galleryImages[prev],
      galleryImages[currentIndex],
      galleryImages[next],
    ];
  };


  const handlePrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };


  const handleNext = () => {
    setCurrentIndex(
      (prev) =>
        (prev + 1) % galleryImages.length
    );
  };


  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };


  const [left, center, right] = getVisibleImages();


  return (
    <section id="gallery" className="gallery-section">


      {/* Decorative leaves */}
      <svg 
        className="gallery-leaf gallery-leaf-1" 
        viewBox="0 0 120 120" 
        fill="none"
      >
        <path
          d="M60 10C60 10 20 30 20 60C20 90 60 110 60 110C60 110 100 90 100 60C100 30 60 10 60 10Z"
          fill="#EBB4C6"
        />
        <circle cx="60" cy="60" r="8" fill="#EBB4C6" opacity="0.5"/>
        <circle cx="40" cy="45" r="5" fill="#EBB4C6" opacity="0.4"/>
        <circle cx="80" cy="45" r="5" fill="#EBB4C6" opacity="0.4"/>
        <circle cx="40" cy="75" r="5" fill="#EBB4C6" opacity="0.4"/>
        <circle cx="80" cy="75" r="5" fill="#EBB4C6" opacity="0.4"/>
      </svg>


      <svg 
        className="gallery-leaf gallery-leaf-2" 
        viewBox="0 0 120 120" 
        fill="none"
      >
        <path
          d="M60 10C60 10 20 30 20 60C20 90 60 110 60 110C60 110 100 90 100 60C100 30 60 10 60 10Z"
          fill="#EBB4C6"
        />
        <circle cx="60" cy="60" r="6" fill="#EBB4C6" opacity="0.5"/>
        <circle cx="42" cy="48" r="4" fill="#EBB4C6" opacity="0.4"/>
        <circle cx="78" cy="48" r="4" fill="#EBB4C6" opacity="0.4"/>
      </svg>



      <div className="gallery-container">


        {/* Header */}
        <div className="gallery-header">

          <h2 className="gallery-title">
            Salon <span>Interior</span>
          </h2>

          <p className="gallery-subtitle">
            Step into a world of elegance and comfort. Our salon is designed
            to make every visit feel like a luxurious escape.
          </p>

        </div>



        {/* Slider */}
        <div className="gallery-slider-wrapper">


          {/* Previous */}
          <button
            className="gallery-nav-btn"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>



          {/* Images */}
          <div className="gallery-images">

            {[left, center, right].map((image, index) => (

              <div
                key={image.id}
                className={`gallery-image-card ${
                  index === 1 ? "center" : "side"
                }`}
              >

                <img
                  src={image.src}
                  alt={image.alt}
                />


                <div className="gallery-image-overlay">

                  <svg viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                    <path d="M11 8v6M8 11h6"/>
                  </svg>

                </div>


              </div>

            ))}

          </div>




          {/* Next */}
          <button
            className="gallery-nav-btn"
            onClick={handleNext}
            aria-label="Next image"
          >

            <svg viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6"/>
            </svg>

          </button>


        </div>





        {/* Dots */}
        <div className="gallery-dots">

          {galleryImages.map((_, index) => (

            <button
              key={index}
              className={`gallery-dot ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to image ${index + 1}`}
            />

          ))}

        </div>


      </div>


    </section>
  );
};


export default Gallery;