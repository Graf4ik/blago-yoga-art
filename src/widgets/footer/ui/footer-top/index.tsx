import Icon from '@/shared/svg'
import { footerIcons } from '@/widgets/footer/lib/constants'
import SuscrbeForm from '@/widgets/footer/ui/form'

import styles from './style.module.scss'

export const FooterTop = () => (
  <div className={styles.top}>
    <div className={styles.left}>
      <ul>
        {footerIcons.map((icon, index) => (
          <li key={index}>
            <a href='#'><Icon name={icon} className={styles.icon} /></a>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.right}>
      <h4>Остаться со мной на связи</h4>
      <SuscrbeForm />
    </div>
  </div>
)