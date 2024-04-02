import React, { useState } from 'react';
import styles from './Slider.module.scss';

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const prevIndex = (currentImage - 1 + images.length) % images.length;
  const nextIndex = (currentImage + 1) % images.length;

  return (
    <div className={styles.container}>
      <button className={styles.arrowLeft} onClick={prevImage}>
        &lt;
      </button>
    <div className={styles.carousel}>
        <div className={styles.imagesPrev}>
          <img className={styles.image} src={images[prevIndex]} alt={`${prevIndex + 1}`} />
        </div>

        <div className={styles.imagesContainer}>
          <img className={styles.image} src={images[currentImage]} alt={`${currentImage + 1}`} />
        </div>

        <div className={styles.imagesNext}>
          <img className={styles.image} src={images[nextIndex]} alt={`${nextIndex + 1}`} />
        </div>
    </div>
      <button className={styles.arrowRight} onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
