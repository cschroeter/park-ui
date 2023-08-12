import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { ColorPalette, FontFamily, GrayPalette } from './use-theme-generator'

interface ThemeStore {
  colorPalette: ColorPalette
  grayPalette: GrayPalette
  fontFamily: FontFamily
  setColorPalette: (palette: ColorPalette) => void
  setGrayPalette: (palette: GrayPalette) => void
  setFontFamily: (font: FontFamily) => void
}

export const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(
      (set) => ({
        colorPalette: { label: 'Neutral', value: 'neutral' },
        grayPalette: { label: 'Neutral', value: 'neutral' },
        fontFamily: { label: 'Jakarta', value: 'var(--font-body)' },
        setColorPalette: (colorPalette) => set(() => ({ colorPalette })),
        setGrayPalette: (grayPalette) => set(() => ({ grayPalette })),
        setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
      }),
      {
        name: 'park-ui-theme-store',
      },
    ),
  ),
)
