import { useLayoutEffect } from 'react'
import { token, type Token } from 'styled-system/tokens'
import { match } from 'ts-pattern'
import { useColorMode } from './use-color-mode'
import { useThemeStore } from './use-theme-store'

export const useThemeGenerator = () => {
  const { colorMode } = useColorMode()

  const currentColorPalete = useThemeStore((state) => state.colorPalette)
  const currentGrayPalette = useThemeStore((state) => state.grayPalette)
  const currentFontFamily = useThemeStore((state) => state.fontFamily)
  const currentBorderRadii = useThemeStore((state) => state.borderRadii)

  const updateColorPalette = useThemeStore((state) => state.setColorPalette)
  const updateGrayPalette = useThemeStore((state) => state.setGrayPalette)
  const updateFontFamily = useThemeStore((state) => state.setFontFamily)
  const updateBorderRadii = useThemeStore((state) => state.setBorderRadii)

  const reset = useThemeStore((state) => state.reset)

  useLayoutEffect(() => {
    syncColorPalette(currentColorPalete, colorMode)
  }, [currentColorPalete, colorMode])

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
    currentColorPalete,
    currentGrayPalette,
    currentFontFamily,
    currentBorderRadii,
    updateColorPalette,
    updateGrayPalette,
    updateFontFamily,
    updateBorderRadii,
    reset,
  }
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
    root.style.setProperty('--radii-l1', token.var('radii.xs'))
    const map = match<BorderRadii, Record<'l1' | 'l2' | 'l3', Token>>(currentBorderRadii)
      .with(0, () => ({
        l1: 'radii.none',
        l2: 'radii.none',
        l3: 'radii.none',
      }))
      .with(1, () => ({
        l1: 'radii.2xs',
        l2: 'radii.xs',
        l3: 'radii.sm',
      }))
      .with(2, () => ({
        l1: 'radii.xs',
        l2: 'radii.sm',
        l3: 'radii.md',
      }))
      .with(3, () => ({
        l1: 'radii.sm',
        l2: 'radii.md',
        l3: 'radii.lg',
      }))
      .with(4, () => ({
        l1: 'radii.md',
        l2: 'radii.lg',
        l3: 'radii.xl',
      }))
      .with(5, () => ({
        l1: 'radii.lg',
        l2: 'radii.xl',
        l3: 'radii.2xl',
      }))
      .with(6, () => ({
        l1: 'radii.xl',
        l2: 'radii.2xl',
        l3: 'radii.3xl',
      }))
      .exhaustive()

    Object.entries(map).map(([key, value]) => {
      root.style.setProperty(`--radii-${key}`, token.var(value))
    })
  }
}

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never

// .with(0, () => ({
//   l1: 'radii.none',
//   l2: 'radii.none',
//   l3: 'radii.none',
// }))
// .with(1, () => ({
//   l1: 'radii.none',
//   l2: 'radii.2xs',
//   l3: 'radii.xs',
// }))
// .with(2, () => ({
//   l1: 'radii.2xs',
//   l2: 'radii.xs',
//   l3: 'radii.sm',
// }))
// .with(3, () => ({
//   l1: 'radii.xs',
//   l2: 'radii.sm',
//   l3: 'radii.lg',
// }))
// .with(4, () => ({
//   l1: 'radii.sm',
//   l2: 'radii.lg',
//   l3: 'radii.2xl',
// }))
