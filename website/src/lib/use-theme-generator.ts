import { accentColors, grayColors, type AccentColor, type GrayColor } from '@park-ui/presets'
import { useEffect } from 'react'
import { useThemeStore } from './use-theme-store'

export const useThemeGenerator = () => {
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
    syncAccentColor(currentColorPalette)
  }, [currentColorPalette])

  useEffect(() => {
    syncGrayColor(currentGrayPalette)
  }, [currentGrayPalette])

  useEffect(() => {
    syncFontFamily(currentFontFamily)
  }, [currentFontFamily])

  useEffect(() => {
    syncBorderRadii(currentBorderRadii)
  }, [currentBorderRadii])

  return {
    accentColors,
    grayColors,
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

export const syncGrayColor = (color: GrayColor) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (root) {
    root.setAttribute('data-gray-color', color)
  }
}

const syncAccentColor = (color: AccentColor) => {
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
