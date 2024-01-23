import type { AccentColor, BorderRadius, GrayColor } from '@park-ui/panda-preset'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { FontFamily } from './use-theme-generator'

export type JSFramework = (typeof jsFrameworks)[number]
export const jsFrameworks = ['react', 'solid', 'vue'] as const

export type CSSFramework = (typeof cssFrameworks)[number]
export const cssFrameworks = ['panda', 'tailwind'] as const

type State = {
  accentColor: AccentColor
  borderRadius: BorderRadius
  cssFramework: CSSFramework
  fontFamily: FontFamily
  grayColor: GrayColor
  jsFramework: JSFramework
}

type Actions = {
  setAccentColor: (color: AccentColor) => void
  setGrayColor: (color: GrayColor) => void
  setFontFamily: (font: FontFamily) => void
  setBorderRadius: (radius: BorderRadius) => void
  setJSFramework: (jsFramework: JSFramework) => void
  setCSSFramework: (cssFramework: CSSFramework) => void
  reset: () => void
}

const initialState: State = {
  accentColor: 'neutral',
  borderRadius: 'sm',
  cssFramework: 'panda',
  fontFamily: { label: 'Jakarta', value: 'var(--font-jakarta)' },
  grayColor: 'neutral',
  jsFramework: 'react',
}

export const useThemeStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setAccentColor: (accentColor) => set(() => ({ accentColor })),
        setBorderRadius: (borderRadius) => set(() => ({ borderRadius })),
        setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
        setGrayColor: (grayColor) => set(() => ({ grayColor })),
        setJSFramework: (jsFramework) => set(() => ({ jsFramework })),
        setCSSFramework: (cssFramework) => set(() => ({ cssFramework })),
        reset: () => {
          set(initialState)
        },
      }),
      {
        name: 'park-ui-store',
        version: 3,
      },
    ),
  ),
)
