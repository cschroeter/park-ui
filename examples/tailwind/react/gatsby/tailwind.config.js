import { parkwindPlugin } from '@park-ui/tailwind-plugin'

/** @type {import('tailwindcss').Config} */
export const content = [`./src/**/*.{js,jsx,ts,tsx}`]

export const plugins = [parkwindPlugin]

export const parkUI = {
  accentColor: 'neutral',
  grayColor: 'neutral',
  borderRadius: 'md',
}
