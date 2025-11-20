import { DM_Sans, Inter, Outfit, Roboto_Mono, Space_Grotesk } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
export const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })
export const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
export const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export interface Font {
  label: string
  value: string
}

export const fonts = [
  { label: 'Inter', value: 'var(--font-inter)' },
  { label: 'Outfit', value: 'var(--font-outfit)' },
  { label: 'Roboto Mono', value: 'var(--font-roboto-mono)' },
  { label: 'Space Grotesk', value: 'var(--font-space-grotesk)' },
  { label: 'DM Sans', value: 'var(--font-dm-sans)' },
]
