import { Inter, Outfit, Plus_Jakarta_Sans, Raleway, Roboto_Mono } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
export const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
export const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
export const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

export interface Font {
  label: string
  value: string
}

export const fonts = [
  { label: 'Inter', value: 'var(--font-inter)' },
  { label: 'Jakarta', value: 'var(--font-jakarta)' },
  { label: 'Outfit', value: 'var(--font-outfit)' },
  { label: 'Raleway', value: 'var(--font-raleway)' },
  { label: 'Roboto Mono', value: 'var(--font-roboto-mono)' },
]
