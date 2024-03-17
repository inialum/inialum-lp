'use client'

import clsx from 'clsx'
import { type ComponentPropsWithRef } from 'react'

import styles from './Button.module.css'

type Props = ComponentPropsWithRef<'button'> & {
  colorTheme?: 'primary' | 'secondary' | 'white'
  size?: 'small' | 'medium' | 'large' | 'fullWidth'
  styleType?: 'filled' | 'outlined'
  radius?: 'none' | 'rounded' | 'more-rounded'
}

export const Button = ({
  colorTheme = 'primary',
  size = 'medium',
  styleType = 'filled',
  radius = 'none',
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
        colorTheme === 'primary' && styles['Button--primary'],
        colorTheme === 'secondary' && styles['Button--secondary'],
        colorTheme === 'white' && styles['Button--white'],
        size === 'small' && styles['Button--small'],
        size === 'medium' && styles['Button--medium'],
        size === 'large' && styles['Button--large'],
        size === 'fullWidth' && styles['Button--fullWidth'],
        styleType === 'filled' && styles['Button--filled'],
        styleType === 'outlined' && styles['Button--outlined'],
        radius === 'rounded' && styles['Button--rounded'],
        radius === 'more-rounded' && styles['Button--more-rounded'],
        rest.disabled && styles['Button--disabled'],
      )}
    >
      {children}
    </button>
  )
}
