import { memories } from '@inialum/memories-css'
import { type Config } from 'tailwindcss'

const config = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@inialum/memories-react/**/*.js',
  ],
  plugins: [memories],
} satisfies Config

export default config
