import React from 'react'

import Wrap from '@/shared/ui/wrap'

import styles from "./style.module.scss"
import PartnersSlider from '@features/sliders/partners-slider'
import ClientComents from '@widgets/client-coments'

const ClientPartners = () => {
  return (
    <div className={styles.clientWrap}>
      <Wrap>
        <PartnersSlider
          rows={1}
          title='Supported by 12+ partners'
        />
        <ClientComents />
      </Wrap>
    </div>
  )
}

export default ClientPartners