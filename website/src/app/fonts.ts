import { Fira_Code, Inter, Outfit, Plus_Jakarta_Sans, Raleway } from 'next/font/google'

export const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body' })
export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
export const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
export const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-code' })

export const fonts = [
  {
    label: 'Jakarta',
    value: 'var(--font-body)',
  },
  {
    label: 'Inter',
    value: 'var(--font-inter)',
  },
  {
    label: 'Outfit',
    value: 'var(--font-outfit)',
  },
  {
    label: 'Raleway',
    value: 'var(--font-raleway)',
  },
  {
    label: 'Fira Code',
    value: 'var(--font-code)',
  },
]
