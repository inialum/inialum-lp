'use client'

import clsx from 'clsx'
import { type ComponentPropsWithRef } from 'react'

import styles from './Button.module.css'

type Props = ComponentPropsWithRef<'button'> & {
  color?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  styleType?: 'filled' | 'outlined'
  radius?: 'rounded' | 'more-rounded'
}

export const Button = ({
  color = 'primary',
  size = 'medium',
  styleType = 'filled',
  radius,
  className,
  children,
  ...rest
}: Props) => {
  return (
    <button
      {...rest}
      className={clsx(
        className,
        styles.Button,
        color === 'primary' && styles['Button--primary'],
        color === 'secondary' && styles['Button--secondary'],
        size === 'small' && styles['Button--small'],
        size === 'medium' && styles['Button--medium'],
        size === 'large' && styles['Button--large'],
        styleType === 'filled' && styles['Button--filled'],
        styleType === 'outlined' && styles['Button--outlined'],
        radius === 'rounded' && styles['Button--rounded'],
        radius === 'more-rounded' && styles['Button--more-rounded'],
      )}
    >
      {children}
    </button>
  )
}
