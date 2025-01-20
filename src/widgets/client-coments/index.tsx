'use client'

import React from 'react'

import Image from 'next/image'
import img from '/public/photos/1.jpg'

import styles from './style.module.scss'
import ClientCommentSlider from '@features/sliders/client-comment'

const ClientComents = () => (
  <div className={styles.wrap}>
    <div className={styles.post}>
      <h2>What our clients are saying</h2>
      <ClientCommentSlider />
    </div>
    <div className={styles.img}>
      <Image src={img} height={400} width={400} alt='coment' />
    </div>
  </div>
)

export default ClientComents