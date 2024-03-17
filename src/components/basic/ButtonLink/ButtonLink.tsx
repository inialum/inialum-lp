'use client'

import clsx from 'clsx'
import { type ComponentPropsWithRef } from 'react'

import styles from './ButtonLink.module.css'

type Props = ComponentPropsWithRef<'a'> & {
  colorTheme?: 'primary' | 'secondary' | 'white'
  size?: 'small' | 'medium' | 'large' | 'fullWidth'
  styleType?: 'filled' | 'outlined'
  radius?: 'none' | 'rounded' | 'more-rounded'
  disabled?: boolean
}

export const ButtonLink = ({
  colorTheme = 'primary',
  size = 'medium',
  styleType = 'filled',
  radius = 'none',
  rel: _rel,
  className,
  children,
  ...rest
}: Props) => {
  let rel = _rel
  if (rest.target === '_blank' && typeof rel === 'undefined') {
    rel = 'noopener'
  }
  return (
    <a
      {...rest}
      rel={rel}
      className={clsx(
        className,
        styles.ButtonLink,
        colorTheme === 'primary' && styles['ButtonLink--primary'],
        colorTheme === 'secondary' && styles['ButtonLink--secondary'],
        colorTheme === 'white' && styles['ButtonLink--white'],
        size === 'small' && styles['ButtonLink--small'],
        size === 'medium' && styles['ButtonLink--medium'],
        size === 'large' && styles['ButtonLink--large'],
        size === 'fullWidth' && styles['ButtonLink--fullWidth'],
        styleType === 'filled' && styles['ButtonLink--filled'],
        styleType === 'outlined' && styles['ButtonLink--outlined'],
        radius === 'rounded' && styles['ButtonLink--rounded'],
        radius === 'more-rounded' && styles['ButtonLink--more-rounded'],
        rest.disabled && styles['ButtonLink--disabled'],
      )}
    >
      {children}
    </a>
  )
}
