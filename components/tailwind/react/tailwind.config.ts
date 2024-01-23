import { parkwindPlugin } from '@park-ui/tailwind-plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [parkwindPlugin],
  parkUI: {
    accentColor: 'neutral',
    grayColor: 'neutral',
    borderRadius: 'md',
  },
  darkMode: ['class'],
}
export default config
