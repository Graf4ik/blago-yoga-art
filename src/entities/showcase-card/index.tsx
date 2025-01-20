import React, { FC } from 'react'

import Image from 'next/image'

import styles from './style.module.scss'
import { TCard } from '@widgets/projects/model/constants'
import Button from '@shared/ui/btns/btn'

type TProps = {
  card: TCard
}

const Card: FC<TProps> = ({ card }) => (
  <div className={styles.card}>
    <Image src={card.img} alt={card.alt} width={390} height={345} />

    <div className={styles.content}>
      <h4 className={styles.title}>{card.title}</h4>
      <p className={styles.description}>{card.description}</p>
      <div className={styles.btn}>
        <Button title='View Project' size='large' solid />
      </div>
    </div>
  </div>
)

export default Card
