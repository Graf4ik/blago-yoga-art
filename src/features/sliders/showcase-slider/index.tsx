'use client'

import { FC } from 'react'
import Slider from 'react-slick'

import styles from './style.module.scss'
import { ArrowSlider } from '../client-comment/ui/arrow-slider'
import Card from '@entities/showcase-card'

export type TCard = {
  img: string
  alt: string
  title: string
  description: string
}

interface IProps {
  cards: TCard[]
}

const ShowCaseSlider: FC<IProps> = ({ cards }) => (
  <Slider
    className={styles.slider}
    slidesToScroll={1}
    slidesToShow={3}
    infinite
    speed={500}
    nextArrow={<ArrowSlider arrow='right' />}
    prevArrow={<ArrowSlider arrow='left' />}
    responsive={[
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ]}
  >
    {cards.map((card, idx) => (
      <Card key={idx} card={card} />
    ))}
  </Slider>
)

export default ShowCaseSlider