'use client'

import clsx from 'clsx'
import { type ComponentPropsWithRef } from 'react'

import styles from './Footer.module.css'

import logoImage from '@/assets/logo/inialum_logo_light_transparent@3x.png'

type Props = ComponentPropsWithRef<'footer'>

export const Footer = ({ className, ...rest }: Props) => {
  const nowYear = new Date().getFullYear()

  return (
    <footer {...rest} className={clsx(className, styles.Footer)}>
      <div className={styles.Footer__Head}>
        <img src={logoImage.src} alt="INIALUM - INIAD Alumni Meetings" className={styles.Footer__Logo} />
        <div className={styles.Footer__Copy}>さらなる連携を、ともに歩んだ仲間と</div>
      </div>
      <nav>
        <ul className={styles.Footer__NavList}>
          <li className={styles.Footer__Item}>
            <a href="/">ホーム</a>
          </li>
          <li className={styles.Footer__Item}>
            <a href="/about">私たちの思い</a>
          </li>
          <li className={styles.Footer__Item}>
            <a href="https://inialum.org/join">入会する</a>
          </li>
        </ul>
      </nav>
      <div className={styles.Footer__Bottom}>
        <div className={styles.Footer__Item}>
          <a
            href="https://inialum.notion.site/4cbf67b190544bff8891deabc64e776c"
            target="_blank"
            rel="noopener"
          >
            同窓会会則
          </a>
          <a
            href="https://inialum.notion.site/d8a7e0dd14224c0dadfd630a6665cee0"
            target="_blank"
            rel="noopener"
          >
            プライバシーポリシー
          </a>
        </div>
        <div className={styles.Footer__Item}>
          &copy; {nowYear} INIALUM - INIAD Alumni Meetings.
        </div>
      </div>
    </footer>
  )
}
