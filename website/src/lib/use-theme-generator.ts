import {
  accentColors,
  borderRadii,
  grayColors,
  type AccentColor,
  type BorderRadius,
  type GrayColor,
} from '@park-ui/panda-preset'
import { useEffect } from 'react'
import { token } from 'styled-system/tokens'
import { match } from 'ts-pattern'
import { useThemeStore } from './use-theme-store'

export const useThemeGenerator = () => {
  const currentAccentColor = useThemeStore((state) => state.accentColor)
  const currentGrayColor = useThemeStore((state) => state.grayColor)
  const currentFontFamily = useThemeStore((state) => state.fontFamily)
  const currentBorderRadius = useThemeStore((state) => state.borderRadius)

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
    syncBorderRaius(currentBorderRadius)
  }, [currentBorderRadius])

  return {
    accentColors,
    borderRadii,
    fontFamilies,
    grayColors,
    pandaConfig,
    tailwindConfig,
    currentAccentColor,
    currentBorderRadius,
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
  syncColorPalette(color, 'gray')
}

const syncAccentColor = (color: AccentColor) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  syncColorPalette(color, 'accent')

  match(color)
    .with('neutral', () => {
      root.style.removeProperty('--colors-accent-fg')
      root.style.removeProperty('--colors-accent-default')
      root.style.removeProperty('--colors-accent-emphasized')
      root.style.removeProperty('--colors-accent-text')
    })
    .with('amber', 'lime', 'mint', 'sky', 'yellow', () => {
      root.style.setProperty('--colors-accent-fg', token.var(`colors.gray.light.12`))
      root.style.setProperty('--colors-accent-default', token.var(`colors.accent.9`))
      root.style.setProperty('--colors-accent-emphasized', token.var(`colors.accent.10`))
      root.style.setProperty('--colors-accent-text', token.var(`colors.accent.a11`))
    })
    .otherwise(() => {
      root.style.setProperty('--colors-accent-fg', token.var(`colors.white`))
      root.style.setProperty('--colors-accent-default', token.var(`colors.accent.9`))
      root.style.setProperty('--colors-accent-emphasized', token.var(`colors.accent.10`))
      root.style.setProperty('--colors-accent-text', token.var(`colors.accent.a11`))
    })
}

const syncColorPalette = (color: GrayColor | AccentColor, name: 'accent' | 'gray') => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  const hues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const
  const isDefaultColor = color === 'neutral'

  isDefaultColor
    ? hues.map((hue) => {
        root.style.removeProperty(`--colors-${name}-${hue}`)
        root.style.removeProperty(`--colors-${name}-a${hue}`)
      })
    : hues.map((hue) => {
        root.style.setProperty(`--colors-${name}-${hue}`, token.var(`colors.${color}.${hue}`))
        root.style.setProperty(`--colors-${name}-a${hue}`, token.var(`colors.${color}.a${hue}`))
      })
}

const syncBorderRaius = (borderRadius: BorderRadius) => {
  const root = document.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  const borderRadii = match(borderRadius)
    .with('none', () => ({
      l1: token.var('radii.none'),
      l2: token.var('radii.none'),
      l3: token.var('radii.none'),
    }))
    .with('xs', () => ({
      l1: token.var('radii.2xs'),
      l2: token.var('radii.xs'),
      l3: token.var('radii.sm'),
    }))
    .with('sm', () => ({
      l1: token.var('radii.xs'),
      l2: token.var('radii.sm'),
      l3: token.var('radii.md'),
    }))
    .with('md', () => ({
      l1: token.var('radii.sm'),
      l2: token.var('radii.md'),
      l3: token.var('radii.lg'),
    }))
    .with('lg', () => ({
      l1: token.var('radii.md'),
      l2: token.var('radii.lg'),
      l3: token.var('radii.xl'),
    }))
    .with('xl', () => ({
      l1: token.var('radii.lg'),
      l2: token.var('radii.xl'),
      l3: token.var('radii.2xl'),
    }))
    .with('2xl', () => ({
      l1: token.var('radii.xl'),
      l2: token.var('radii.2xl'),
      l3: token.var('radii.3xl'),
    }))
    .exhaustive()

  root.style.setProperty('--radii-l1', borderRadii.l1)
  root.style.setProperty('--radii-l2', borderRadii.l2)
  root.style.setProperty('--radii-l3', borderRadii.l3)
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

export const pandaConfig = `import { defineConfig } from '@pandacss/dev'
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
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  outdir: 'styled-system',
})
`

export const tailwindConfig = `const { parkwindPlugin } = require('@park-ui/tailwind-plugin')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [parkwindPlugin],

  parkUI: {
    accentColor: '__ACCENT_COLOR__',
    grayColor: '__GRAY_COLOR__',
    borderRadius: '__BORDER_RADIUS__',
  },
  
  darkMode: ['class'],
}
`
