import { Inter, Outfit, Plus_Jakarta_Sans, Raleway, Roboto_Mono } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
export const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
export const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })
export const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono' })

export type FontFamily = keyof typeof fonts

export const fonts = {
  Jakarta: jakarta,
  Inter: inter,
  Outfit: outfit,
  Raleway: raleway,
}
