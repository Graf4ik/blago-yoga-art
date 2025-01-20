'use client'

import { useState } from 'react'
import Slider from 'react-slick'


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './style.module.scss'
import SliderItem from './ui/slider-item'
import { ISliderItem, mockData } from './models/main-slider-model'

const MainSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  return (
    <Slider
      className={styles.slider}
      customPaging={(index) => (
        <a
          className={activeSlide === index ? styles.active : ''}>
          <span onClick={() => setActiveSlide(index)} />
          0{index + 1}
        </a>
      )}
      autoplay={true}
      slidesToScroll={1}
      slidesToShow={1}
      infinite={true}
      speed={500}
      dots
    >
      {mockData.map((item: ISliderItem) => (
        <SliderItem 
          key={item.index} 
          title={item?.title} 
          imgSrc={item?.imgSrc} 
          description={item?.description} 
        />
      ))}
    </Slider>
  )
}

export default MainSlider