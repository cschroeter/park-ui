import type { ColorPalette } from '@park-ui/panda-preset'
import { createVariables } from '@park-ui/panda-preset/utils'
import { useEffect } from 'react'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { type Font, fonts } from '~/app/fonts'

const loadColorPalette = async (color: string): Promise<ColorPalette> => {
  const palettes: Record<string, () => Promise<{ default: ColorPalette }>> = {
    amber: () => import('@park-ui/panda-preset/colors/amber'),
    blue: () => import('@park-ui/panda-preset/colors/blue'),
    bronze: () => import('@park-ui/panda-preset/colors/bronze'),
    brown: () => import('@park-ui/panda-preset/colors/brown'),
    crimson: () => import('@park-ui/panda-preset/colors/crimson'),
    cyan: () => import('@park-ui/panda-preset/colors/cyan'),
    gold: () => import('@park-ui/panda-preset/colors/gold'),
    grass: () => import('@park-ui/panda-preset/colors/grass'),
    green: () => import('@park-ui/panda-preset/colors/green'),
    indigo: () => import('@park-ui/panda-preset/colors/indigo'),
    iris: () => import('@park-ui/panda-preset/colors/iris'),
    jade: () => import('@park-ui/panda-preset/colors/jade'),
    lime: () => import('@park-ui/panda-preset/colors/lime'),
    mauve: () => import('@park-ui/panda-preset/colors/mauve'),
    mint: () => import('@park-ui/panda-preset/colors/mint'),
    neutral: () => import('@park-ui/panda-preset/colors/neutral'),
    olive: () => import('@park-ui/panda-preset/colors/olive'),
    orange: () => import('@park-ui/panda-preset/colors/orange'),
    pink: () => import('@park-ui/panda-preset/colors/pink'),
    plum: () => import('@park-ui/panda-preset/colors/plum'),
    purple: () => import('@park-ui/panda-preset/colors/purple'),
    red: () => import('@park-ui/panda-preset/colors/red'),
    ruby: () => import('@park-ui/panda-preset/colors/ruby'),
    sage: () => import('@park-ui/panda-preset/colors/sage'),
    sand: () => import('@park-ui/panda-preset/colors/sand'),
    sky: () => import('@park-ui/panda-preset/colors/sky'),
    slate: () => import('@park-ui/panda-preset/colors/slate'),
    teal: () => import('@park-ui/panda-preset/colors/teal'),
    tomato: () => import('@park-ui/panda-preset/colors/tomato'),
    violet: () => import('@park-ui/panda-preset/colors/violet'),
    yellow: () => import('@park-ui/panda-preset/colors/yellow'),
  }

  const loader = palettes[color]
  if (!loader) {
    throw new Error(`Unknown color palette: ${color}`)
  }

  const module = await loader()
  return module.default
}

export const useTheme = () => {
  const accentColor = useThemeStore((state) => state.accentColor)
  const grayColor = useThemeStore((state) => state.grayColor)
  const font = useThemeStore((state) => state.font)
  const radius = useThemeStore((state) => state.radius)

  const setAccentColor = useThemeStore((state) => state.setAccentColor)
  const setGrayColor = useThemeStore((state) => state.setGrayColor)
  const setFont = useThemeStore((state) => state.setFont)
  const setRadius = useThemeStore((state) => state.setRadius)
  const reset = useThemeStore((state) => state.reset)

  useEffect(() => {
    syncAccentColor(accentColor)
  }, [accentColor])

  useEffect(() => {
    syncGrayColor(grayColor)
  }, [grayColor])

  useEffect(() => {
    syncFontFamily(font)
  }, [font])

  const getConfig = () =>
    baseConfig
      .replace('__ACCENT_COLOR__', accentColor)
      .replace('__GRAY_COLOR__', grayColor)
      .replace('__BORDER_RADIUS__', radius)

  return {
    accentColor,
    font,
    grayColor,
    radius,
    getConfig,
    reset,
    setAccentColor,
    setFont,
    setGrayColor,
    setRadius,
  }
}

const syncAccentColor = async (color: AccentColor) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  const styleStyle = document.querySelector<HTMLStyleElement>('#park-ui-accent')
  if (!styleStyle) return

  const colorPalette = await loadColorPalette(color)
  const cssVariables = createVariables(colorPalette)
  styleStyle.textContent = cssVariables
}

const syncGrayColor = async (color: GrayColor) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  const styleStyle = document.querySelector<HTMLStyleElement>('#park-ui-gray')
  if (!styleStyle) return

  const colorPalette = await loadColorPalette(color)
  const cssVariables = createVariables(colorPalette).replaceAll(color, 'gray')
  styleStyle.textContent = cssVariables
}

const syncFontFamily = (font: Font) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  console.log(font)

  root.style.setProperty('--fonts-body', fonts[font])
}

interface State {
  accentColor: AccentColor
  font: Font
  grayColor: GrayColor
  radius: BorderRadius
}

const initialState: State = {
  accentColor: 'neutral',
  font: 'Outfit',
  grayColor: 'neutral',
  radius: 'sm',
}

interface Actions {
  reset: () => void
  setAccentColor: (color: AccentColor) => void
  setFont: (font: Font) => void
  setGrayColor: (color: GrayColor) => void
  setRadius: (radius: BorderRadius) => void
}

const useThemeStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setAccentColor: (accentColor) => set(() => ({ accentColor })),
        setFont: (font) => set(() => ({ font })),
        setGrayColor: (grayColor) => set(() => ({ grayColor })),
        setRadius: (radius) => set(() => ({ radius })),
        reset: () => set(initialState),
      }),
      {
        name: 'park-ui-store',
        version: 5,
      },
    ),
  ),
)

export type AccentColor = (typeof accentColors)[number]
export const accentColors = [
  'neutral',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky',
] as const

export type GrayColor = (typeof grayColors)[number]
export const grayColors = ['neutral', 'mauve', 'olive', 'sage', 'sand', 'slate'] as const

export type BorderRadius = (typeof borderRadii)[number]
export const borderRadii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

const baseConfig = `import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: '__ACCENT_COLOR__',
      grayColor: '__GRAY_COLOR__',
      borderRadius: '__BORDER_RADIUS__',
    }),
  ],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  jsxFramework: 'react', // or 'solid' or 'vue'
  outdir: 'styled-system',
})
`
