import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {
  BorderRadii,
  ColorPalette,
  FontFamily,
  GrayPalette,
  ThemeConfig,
} from './use-theme-generator'

type State = {
  borderRadii: BorderRadii
  colorPalette: ColorPalette
  fontFamily: FontFamily
  grayPalette: GrayPalette
  themeConfig: ThemeConfig
}

type Actions = {
  setColorPalette: (palette: ColorPalette) => void
  setGrayPalette: (palette: GrayPalette) => void
  setFontFamily: (font: FontFamily) => void
  setBorderRadii: (borderRadii: BorderRadii) => void
  setThemeConfig: (themeConfig: ThemeConfig) => void
  reset: () => void
}

const initialState: State = {
  colorPalette: { label: 'Neutral', value: 'neutral' },
  grayPalette: { label: 'Neutral', value: 'neutral' },
  fontFamily: { label: 'Jakarta', value: 'var(--font-body)' },
  themeConfig: { code: '', config: '' },
  borderRadii: 2,
}

export const useThemeStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setColorPalette: (colorPalette) => set(() => ({ colorPalette })),
        setGrayPalette: (grayPalette) => set(() => ({ grayPalette })),
        setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
        setBorderRadii: (borderRadii) => set(() => ({ borderRadii })),
        setThemeConfig: (themeConfig) => set(() => ({ themeConfig })),
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
