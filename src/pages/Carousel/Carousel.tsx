import React from 'react'
import styles from './Carousel.module.scss'
import Slider from '../../components/Slider/Slider'

function Carousel() {
  const images = ['paisage1.jpg', 'hong-kong.jpg', 'mainImage.png']
  return (
    <div className={styles.container}>
      <Slider images={images} />
    </div>
  )
}

export default Carousel
