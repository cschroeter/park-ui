import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { ColorPalette } from './use-theme-generator'

type Palette = {
  label: string
  value: string
}

interface ThemeStore {
  colorPalette: ColorPalette
  grayPalette: Palette
  setColorPalette: (palette: ColorPalette) => void
  setGrayPalette: (palette: Palette) => void
}

export const useThemeStore = create<ThemeStore>()(
  devtools(
    persist(
      (set) => ({
        colorPalette: { label: 'Neutral', value: 'neutral' },
        grayPalette: { label: 'Neutral', value: 'neutral' },
        setColorPalette: (color) => set(() => ({ colorPalette: color })),
        setGrayPalette: (color) => set(() => ({ grayPalette: color })),
      }),
      {
        name: 'park-ui-theme-store',
      },
    ),
  ),
)
