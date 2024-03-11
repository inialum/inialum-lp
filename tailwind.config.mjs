const blue = {
  100: '#f2f8fa',
  200: '#cceffb',
  300: '#2ed3ff',
  400: '#00b0eb',
  500: '#006a8d',
  600: '#003547',
}

const pink = {
  100: '#feeaf8',
  200: '#fdd5f2',
  300: '#f62dbd',
  400: '#b41387',
  500: '#7a0159',
}

const gray = {
  100: '#003547',
  200: '#e7e8e8',
  300: '#c4c6c7',
  400: '#a6a8a9',
  500: '#898b8c',
  600: '#4d5051',
  700: '#2e3031',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        inialumBlue: blue,
        inialumPink: pink,
        inialumGray: gray,
        base: {
          WHITE: '#ffffff',
          BLACK: '#221716',
          BLOCK: '#f2f8fa',
        },
        primary: {
          DEFAULT: blue[400],
          LIGHT: blue[300],
        },
        accent: {
          DEFAULT: pink[300],
          LIGHT: pink[200],
          DARK: pink[400],
        },
        semantic: {
          ERROR: '#ca1206',
          WARNING: '#c7a805',
        },
      },
    },
  },
  plugins: [],
  prefix: 'tw-',
}
