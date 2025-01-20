import React, { FC } from 'react'

import styles from './style.module.scss'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  size: 'large' | 'regular' | 'small'
  solid?: boolean
  fill?: boolean
  disabled?: boolean
}

const Button: FC<IButtonProps> = ({ title, fill, solid, size, disabled, ...props }) => (
  <button
    className={[
      styles.button,
      solid ? styles.solid : null,
      fill ? styles.fill : null,
      styles[size],
      disabled ? styles.disabled : null,
    ].join(' ')}
    {...props}
    disabled={disabled}
  >
    {title}
  </button>
)

export default Button
