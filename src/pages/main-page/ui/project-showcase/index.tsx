
import styles from './style.module.scss'
import { cards } from './lib/constants'
import Projects from '@widgets/projects/ui';

const ProjectShowcase = () => (
  <div className={styles.wrap}>
    <Projects
      title='Browse our selected projects and learn more about our work'
      cards={cards}
    />
  </div>
)

export default ProjectShowcase;
