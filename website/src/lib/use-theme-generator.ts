import { useLayoutEffect } from 'react'
import { token } from 'styled-system/tokens'
import { getBorderRadiiTokens } from './get-border-raddii-tokens'
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
      body: JSON.stringify({ colorPlaette: currentColorPalette, borderRadii: currentBorderRadii }),
    }).then((res) => res.json())

    updateThemeConfig(result.data)
  }

  useLayoutEffect(() => {
    syncColorPalette(currentColorPalette, colorMode)
  }, [currentColorPalette, colorMode])

  useLayoutEffect(() => {
    syncGrayPalette(currentGrayPalette)
  }, [currentGrayPalette])

  useLayoutEffect(() => {
    syncFontFamily(currentFontFamily)
  }, [currentFontFamily])

  useLayoutEffect(() => {
    syncBorderRadii(currentBorderRadii)
  }, [currentBorderRadii])

  return {
    colorPlaettes,
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
export const grayPalettes = [
  { label: 'Neutral', value: 'neutral' },
  { label: 'Stone', value: 'stone' },
  { label: 'Zinc', value: 'zinc' },
  { label: 'Gray', value: 'gray' },
  { label: 'Slate', value: 'slate' },
] as const

export const syncGrayPalette = (color: GrayPalette) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  const hues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const
  if (root) {
    hues.map((value) => {
      root.style.setProperty(
        `--colors-gray-palette-${value}`,
        token.var(`colors.${color.value}.${value}`),
      )
    })
  }
}

export type ColorPalette = ElementType<typeof colorPlaettes>
export const colorPlaettes = [
  { label: 'Neutral', value: 'neutral' },
  { label: 'Rose', value: 'rose' },
  { label: 'Pink', value: 'pink' },
  { label: 'Fuchsia', value: 'fuchsia' },
  { label: 'Purple', value: 'purple' },
  { label: 'Violet', value: 'violet' },
  { label: 'Indigo', value: 'indigo' },
  { label: 'Blue', value: 'blue' },
  { label: 'Sky', value: 'sky' },
  { label: 'Cyan', value: 'cyan' },
  { label: 'Teal', value: 'teal' },
  { label: 'Green', value: 'green' },
] as const

const syncColorPalette = (color: ColorPalette, colorMode: 'light' | 'dark') => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (root) {
    if (color.value === 'neutral') {
      root.style.setProperty(
        '--colors-accent-default',
        token.var(colorMode === 'light' ? 'colors.neutral.950' : 'colors.white'),
      )
      root.style.setProperty(
        '--colors-accent-emphasized',
        token.var(`colors.neutral.${colorMode === 'light' ? '700' : '200'}`),
      )
      root.style.setProperty(
        '--colors-accent-fg',
        token.var(colorMode === 'light' ? 'colors.white' : 'colors.neutral.950'),
      )
      root.style.setProperty(
        '--colors-border-accent',
        token.var(colorMode === 'light' ? 'colors.neutral.950' : 'colors.white'),
      )
    } else {
      root.style.setProperty(
        '--colors-accent-default',
        token.var(`colors.${color.value}.${colorMode === 'light' ? '600' : '300'}`),
      )
      root.style.setProperty(
        '--colors-accent-emphasized',
        token.var(`colors.${color.value}.${colorMode === 'light' ? '700' : '400'}`),
      )
      root.style.setProperty(
        '--colors-accent-fg',
        token.var(colorMode === 'light' ? 'colors.white' : 'colors.neutral.950'),
      )
      root.style.setProperty(
        '--colors-border-accent',
        token.var(`colors.${color.value}.${colorMode === 'light' ? '600' : '300'}`),
      )
    }
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
    label: 'Fira Code',
    value: 'var(--font-code)',
  },
] as const

const syncFontFamily = (fontFamily: FontFamily) => {
  const root = document.querySelector<HTMLBodyElement>('body')
  if (root) {
    root.style.fontFamily = fontFamily.value
  }
}

export type BorderRadii = 0 | 1 | 2 | 3 | 4 | 5 | 6
const syncBorderRadii = (currentBorderRadii: BorderRadii) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (root) {
    const borderRadiiTokens = getBorderRadiiTokens(currentBorderRadii)
    Object.entries(borderRadiiTokens).map(([key, value]) => {
      root.style.setProperty(`--radii-${key}`, token.var(value))
    })
  }
}

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never
