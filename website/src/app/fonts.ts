import { Inter, Outfit, Plus_Jakarta_Sans, Raleway, Roboto_Mono } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
export const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
export const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
export const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

export type Font = 'Inter' | 'Jakarta' | 'Outfit' | 'Raleway' | 'Roboto Mono'

export const fonts: Record<Font, string> = {
  Inter: 'var(--font-inter)',
  Jakarta: 'var(--font-jakarta)',
  Outfit: 'var(--font-outfit)',
  Raleway: 'var(--font-raleway)',
  'Roboto Mono': 'var(--font-roboto-mono)',
}
