import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { ColorPalette, FontFamily, GrayPalette } from './use-theme-generator'

type State = {
  colorPalette: ColorPalette
  grayPalette: GrayPalette
  fontFamily: FontFamily
}

type Actions = {
  setColorPalette: (palette: ColorPalette) => void
  setGrayPalette: (palette: GrayPalette) => void
  setFontFamily: (font: FontFamily) => void
  reset: () => void
}

const initialState: State = {
  colorPalette: { label: 'Neutral', value: 'neutral' },
  grayPalette: { label: 'Neutral', value: 'neutral' },
  fontFamily: { label: 'Jakarta', value: 'var(--font-body)' },
}

export const useThemeStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setColorPalette: (colorPalette) => set(() => ({ colorPalette })),
        setGrayPalette: (grayPalette) => set(() => ({ grayPalette })),
        setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
        reset: () => {
          set(initialState)
        },
      }),
      {
        name: 'park-ui-theme-store',
      },
    ),
  ),
)
