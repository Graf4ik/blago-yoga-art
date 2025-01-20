import React, { FC } from 'react'


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './style.module.scss'
import Icon from '@shared/svg';

interface IProps {
  arrow: 'left' | 'right';
  onClick?: () => void;
}

export const ArrowSlider: FC<IProps> = ({ arrow, onClick }) => (
  <button onClick={onClick} className={styles.arrow}>
    {arrow === 'left' ? (
      <Icon name='arrowLeft' className={styles.left} />
    ) : (
      <Icon name='arrowRight' className={styles.right} />
    )}
  </button>
)