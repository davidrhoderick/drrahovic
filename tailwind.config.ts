import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      headings: ['var(--font-fraunces)'],
      body: ['var(--font-open-sans)'],
    },
    colors: {
      darkTeal: '#296f8d',
      mediumTeal: '#75b7d3',
      white: '#fff',
      black: '#323232',
      lightTeal: '#ceeded',
    },
  },
  plugins: [],
}
export default config
