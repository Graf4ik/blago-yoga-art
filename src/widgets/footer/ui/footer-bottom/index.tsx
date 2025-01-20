'use client'

import Icon from '@/shared/svg'
import styles from './style.module.scss'

export const FooterBottom = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.bottom}>
      <div className={styles.goTop}>
        <span>В НАЧАЛО</span>
        <button onClick={scrollToTop}>
          <Icon name='chevronsTop' className={styles.icon} />
        </button>
      </div>
    </div>
  )
}