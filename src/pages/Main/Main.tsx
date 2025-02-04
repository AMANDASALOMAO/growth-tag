import React, { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import Navbar from '../../components/NavBar/NavBar';

function Main() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p>Construindo Marcas, Impulsionando Negócios. Descubra como podemos elevar a sua marca!</p>
        <div className={styles.stickyImageContainer}>
          <img
            className={styles.stickyImage}
            style={{ bottom: `${Math.max(10 - scrollPosition * 0.1, 0)}%` }}
            src={'mainImage.png'}
            alt={'main'}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
