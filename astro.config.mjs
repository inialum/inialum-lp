import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://inialum.org',
  trailingSlash: 'always',
  integrations: [react(), tailwind()],
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
})
