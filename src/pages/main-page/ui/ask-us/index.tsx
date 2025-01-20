import Wrap from '@/shared/ui/wrap'

import styles from './styles.module.scss'
import AskUsForm from '@features/ask-us'

const AskUs = () => (
<div className={styles.mainWrap}>
  <Wrap>
    <div className={styles.container}>
      <h3>Want to know more? Ask us a question:</h3>
      <div className={styles.form}>
        <AskUsForm />
      </div>
    </div>
  </Wrap>
</div>
)
export default AskUs
