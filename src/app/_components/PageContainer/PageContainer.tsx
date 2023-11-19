'use client'
import { type FC, memo } from 'react'

import * as styles from './PageContainer.css'

type Props = {
  children?: React.ReactNode
}

export const PageContainer: FC<Props> = memo(function PageContainer({
  children,
}) {
  return <div className={styles.pageContainer}>{children}</div>
})
