import { type Metadata } from 'next'

import { PageContainer } from '@/app/_components/PageContainer/PageContainer'

export const metadata: Metadata = {
  title: 'INIAD同窓会「INIALUM」',
  description: 'INIAD同窓会「INIALUM」',
}

const HomePage = () => {
  return <>{<PageContainer />}</>
}

export default HomePage
