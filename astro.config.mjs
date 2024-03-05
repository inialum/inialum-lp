import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [react()],
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"]
  }
})
