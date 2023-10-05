import { useEffect } from 'react'
import { useColorMode } from './use-color-mode'
import { useThemeStore } from './use-theme-store'

export const useThemeGenerator = () => {
  const { colorMode } = useColorMode()

  const currentColorPalette = useThemeStore((state) => state.colorPalette)
  const currentGrayPalette = useThemeStore((state) => state.grayPalette)
  const currentFontFamily = useThemeStore((state) => state.fontFamily)
  const currentBorderRadii = useThemeStore((state) => state.borderRadii)
  const themeConfig = useThemeStore((state) => state.themeConfig)

  const updateColorPalette = useThemeStore((state) => state.setColorPalette)
  const updateGrayPalette = useThemeStore((state) => state.setGrayPalette)
  const updateFontFamily = useThemeStore((state) => state.setFontFamily)
  const updateBorderRadii = useThemeStore((state) => state.setBorderRadii)
  const updateThemeConfig = useThemeStore((state) => state.setThemeConfig)

  const reset = useThemeStore((state) => state.reset)

  const generateConfig = async () => {
    const result = await fetch('/api/code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        borderRadii: currentBorderRadii,
        colorPalette: currentColorPalette,
        grayPalette: currentGrayPalette,
      }),
    }).then((res) => res.json())

    updateThemeConfig(result.data)
  }

  useEffect(() => {
    syncColorPalette(currentColorPalette)
  }, [currentColorPalette])

  useEffect(() => {
    syncGrayPalette(currentGrayPalette)
  }, [currentGrayPalette])

  useEffect(() => {
    syncFontFamily(currentFontFamily)
  }, [currentFontFamily])

  useEffect(() => {
    syncBorderRadii(currentBorderRadii)
  }, [currentBorderRadii])

  return {
    colorPalettes,
    grayPalettes,
    fontFamilies,
    currentColorPalette,
    currentGrayPalette,
    currentFontFamily,
    currentBorderRadii,
    themeConfig,
    generateConfig,
    updateColorPalette,
    updateGrayPalette,
    updateFontFamily,
    updateBorderRadii,
    reset,
  }
}

export type ThemeConfig = {
  code: string
  config: string
}

export type GrayPalette = ElementType<typeof grayPalettes>
export const grayPalettes = ['neutral', 'mauve', 'sage', 'olive', 'slate', 'sand'] as const

export const syncGrayPalette = (color: GrayPalette) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (root) {
    root.setAttribute('data-gray-color', color)
  }
}

export type ColorPalette = ElementType<typeof colorPalettes>
export const colorPalettes = [
  'gray',
  'bronze',
  'brown',
  'yellow',
  'amber',
  'orange',
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
  'lime',
  'mint',
  'sky',
] as const

const syncColorPalette = (color: ColorPalette) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (root) {
    root.setAttribute('data-accent-color', color)
  }
}

export type FontFamily = ElementType<typeof fontFamilies>
export const fontFamilies = [
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
    label: 'Roboto Mono',
    value: 'var(--font-code)',
  },
] as const

const syncFontFamily = (fontFamily: FontFamily) => {
  // const root = document.querySelector<HTMLHtmlElement>(':root')
  // if (root) {
  //   root.style.setProperty('--font-body', fontFamily.value)
  // }
}

export type BorderRadii = 0 | 1 | 2 | 3 | 4 | 5 | 6
const syncBorderRadii = (borderRadii: BorderRadii) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (root) {
    root.setAttribute('data-radius', borderRadii.toString())
  }
}

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never
