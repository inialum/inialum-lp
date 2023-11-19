'use client'
import { type FC, memo } from 'react'

type Props = {
  children?: React.ReactNode
}

export const PageContainer: FC<Props> = memo(function PageContainer({
  children,
}) {
  return <div>{children}</div>
})
