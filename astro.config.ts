import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
	site: 'https://inialum.org',
	trailingSlash: 'never',
	integrations: [react()],
	i18n: {
		defaultLocale: 'ja',
		locales: ['ja', 'en'],
	},
	vite: {
		plugins: [tailwindcss()],
	},
})
