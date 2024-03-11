import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  site: 'https://inialum.org',
  trailingSlash: 'always',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
  vite: {
    resolve: [
      {
        find: '@Root',
        replacement: resolve(__dirname, '.'),
      },
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  }
})
