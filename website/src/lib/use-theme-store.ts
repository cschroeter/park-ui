import type { AccentColor, BorderRadius, GrayColor, JSXFramework } from '@park-ui/panda-preset'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { FontFamily } from './use-theme-generator'

type State = {
  accentColor: AccentColor
  borderRadius: BorderRadius
  fontFamily: FontFamily
  grayColor: GrayColor
  jsxFramework: JSXFramework
}

type Actions = {
  setAccentColor: (color: AccentColor) => void
  setGrayColor: (color: GrayColor) => void
  setFontFamily: (font: FontFamily) => void
  setBorderRadius: (radius: BorderRadius) => void
  setJsxFramework: (jsxFramework: JSXFramework) => void
  reset: () => void
}

const initialState: State = {
  accentColor: 'neutral',
  borderRadius: 'sm',
  fontFamily: { label: 'Jakarta', value: 'var(--font-jakarta)' },
  grayColor: 'neutral',
  jsxFramework: 'React',
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
        setJsxFramework: (jsxFramework) => set(() => ({ jsxFramework })),
        reset: () => {
          set(initialState)
        },
      }),
      {
        name: 'park-ui-theme-store',
        version: 2,
      },
    ),
  ),
)
