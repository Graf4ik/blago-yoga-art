import React, { FC } from 'react'
import clsx from 'clsx'

import FactCards from '@/widgets/facts/ui/fact-cards'

import styles from './style.module.scss'
import { TCard } from '@features/sliders/showcase-slider'
import Wrap from '@shared/ui/wrap'
import Button from '@shared/ui/btns/btn'

interface IProps {
  children: React.ReactNode
  darkTheme?: boolean
  buttonText?: string
  cards: TCard[]
}

const Facts: FC<IProps> = ({ children, buttonText, darkTheme, cards }) => (
  <div className={clsx(styles.wrap, { [styles.darkTheme]: darkTheme })}>
    <Wrap>
      {children}
      <FactCards cards={cards} darkTheme={darkTheme} />
    </Wrap>
    {buttonText && <Button title={buttonText} size='large' solid />}
  </div>
)

export default Facts