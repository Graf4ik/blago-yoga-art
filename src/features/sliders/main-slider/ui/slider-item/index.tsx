import React from 'react'
import Image from 'next/image'


import styles from './style.module.scss';

const MainSliderItem = ({title, description, imgSrc}: any) => {
  return (
    <div className={styles.sliderItem}>
        <div className={styles.sliderContent}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      <Image src={imgSrc} alt='slider' fill />
    </div>
  )
}

export default MainSliderItem