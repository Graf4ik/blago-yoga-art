'use client'

import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import { socialMedia } from '../model/constants';
import { SocialIcon } from 'react-social-icons';

const Messengers:FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const toggleClass = () => setShow(!show);

  return (
    <div className={styles.messengers}>
      <div className={show ? styles.open : styles.closed}>
        {socialMedia.map(({ title, url, id }) => (
        <div key={id}>
                <SocialIcon
                className={styles.iconSocial}
                target="_blank"
                fgColor="#fff"
                url={url}
                />
            </div>
        ))}
      </div>
      <div
        className={show ? styles.backgroundBtn : styles.messengersBtn}
        onClick={toggleClass}
      >
        {show ? (
          <img
            className={styles.iconMessageImg}
            src="/iconClose.svg"
            alt="iconClose"
          />
        ) : (
          <img
            className={styles.iconMessageImg}
            src="/iconMessage.svg"
            alt="iconMessageBtn"
          />
        ) }
      </div>
    </div>
  );
};

export default Messengers;
