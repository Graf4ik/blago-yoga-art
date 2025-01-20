import React from 'react'
import Slider from 'react-slick'


import styles from './style.module.scss'
import { ArrowSlider } from './ui/arrow-slider'
import ClientCommentItem from '@entities/client-comment'

const ClientCommentSlider = () => (
  <div className={styles.slider}>
    <Slider
      slidesToScroll={1}
      slidesToShow={1}
      infinite={true}
      speed={500}
      nextArrow={<ArrowSlider arrow='right' />}
      prevArrow={<ArrowSlider arrow='left' />}
    >
      <ClientCommentItem />
      <ClientCommentItem />
    </Slider>
  </div>
)

export default ClientCommentSlider