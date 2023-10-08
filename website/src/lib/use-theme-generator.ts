import {
  accentColors,
  borderRadii,
  grayColors,
  type AccentColor,
  type BorderRadius,
  type GrayColor,
} from '@park-ui/presets'
import { useEffect } from 'react'
import { useThemeStore } from './use-theme-store'

export const useThemeGenerator = () => {
  const currentAccentColor = useThemeStore((state) => state.accentColor)
  const currentGrayColor = useThemeStore((state) => state.grayColor)
  const currentFontFamily = useThemeStore((state) => state.fontFamily)
  const currentBorderRadii = useThemeStore((state) => state.borderRadius)

  const updateAccentColor = useThemeStore((state) => state.setAccentColor)
  const updateGrayColor = useThemeStore((state) => state.setGrayColor)
  const updateFontFamily = useThemeStore((state) => state.setFontFamily)
  const updateBorderRadius = useThemeStore((state) => state.setBorderRadius)

  const reset = useThemeStore((state) => state.reset)

  useEffect(() => {
    syncAccentColor(currentAccentColor)
  }, [currentAccentColor])

  useEffect(() => {
    syncGrayColor(currentGrayColor)
  }, [currentGrayColor])

  useEffect(() => {
    syncFontFamily(currentFontFamily)
  }, [currentFontFamily])

  useEffect(() => {
    syncBorderRadii(currentBorderRadii)
  }, [currentBorderRadii])

  const config = baseConfig
    .replace('__ACCENT_COLOR__', currentAccentColor)
    .replace('__GRAY_COLOR__', currentGrayColor)
    .replace('__BORDER_RADIUS__', currentBorderRadii)

  return {
    accentColors,
    borderRadii,
    config,
    fontFamilies,
    grayColors,
    currentAccentColor,
    currentBorderRadii,
    currentFontFamily,
    currentGrayColor,
    updateAccentColor,
    updateGrayColor,
    updateFontFamily,
    updateBorderRadius,
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

const syncBorderRadii = (borderRadius: BorderRadius) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (root) {
    root.setAttribute('data-radius', borderRadius)
  }
}

export type FontFamily = (typeof fontFamilies)[number]
export const fontFamilies = [
  {
    label: 'Jakarta',
    value: 'var(--font-jakarta)',
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
    value: 'var(--font-roboto-mono)',
  },
] as const

const syncFontFamily = (fontFamily: FontFamily) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (root) {
    root.style.setProperty('--fonts-body', fontFamily.value)
  }
}

const baseConfig = `import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/presets'

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
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
})
`
