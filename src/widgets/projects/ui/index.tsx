import { FC } from 'react'

import Wrap from '@/shared/ui/wrap'

import styles from './style.module.scss'
import { TCard } from '../model/constants'
import ShowCaseSlider from '@features/sliders/showcase-slider'
import FooterBlock from '@shared/ui/footer-block'
import Button from '@shared/ui/btns/btn'

interface IProps {
  title: string
  cards: TCard[]
}

const Projects: FC<IProps> = ({ cards, title }) => (
  <Wrap>
    <div className={styles.showcase}>
      <h2 className={styles.title}>{title}</h2>
      <ShowCaseSlider cards={cards} />
      <FooterBlock title='Explore all our works'>
        <Button title='View portfolio' size='large' solid />
      </FooterBlock>
    </div>
  </Wrap>
)

export default Projects;
