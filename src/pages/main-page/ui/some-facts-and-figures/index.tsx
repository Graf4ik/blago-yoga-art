import React from 'react'

import Image from 'next/image'
import Wrap from '@/shared/ui/wrap'

import styles from './style.module.scss'
import { someFactsInfo } from './lib/constants'

const SomeFacts = () => (
  <div className={styles.wrap}>
    {/* <Image src='/photos/3.jpg' alt='some-facts' width={560} height={670} /> */}
    <Wrap>
      <div className={styles.wrapContent}>
        <h2>Some facts and figures</h2>

        <ul>
          {someFactsInfo.map((item, idx) => (
            <li key={idx}>
              <span style={{
                background: `conic-gradient(${item.color} 0% ${item.percent}%, transparent 0% ${item.percent}%, transparent ${item.percent}% 100%)`,
              }}>
                <span>
                {item.count}
                </span>
              </span>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Wrap>
  </div>
)

export default SomeFacts