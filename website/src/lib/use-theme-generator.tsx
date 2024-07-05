import {
  type AccentColor,
  type BorderRadius,
  type GrayColor,
  accentColors,
  borderRadii,
  grayColors,
} from '@park-ui/panda-preset'
import { Match } from 'effect'
import { useEffect } from 'react'
import { token } from 'styled-system/tokens'
// import { pandaConfig } from '~/configs/panda-config'
// import { tailwindConfig } from '~/configs/tailwind-config'
import { cssFrameworks, jsFrameworks, useThemeStore } from './use-theme-store'

type Context = {
  document?: Document
}

export const useThemeGenerator = (context?: Context) => {
  const currentAccentColor = useThemeStore((state) => state.accentColor)
  const currentGrayColor = useThemeStore((state) => state.grayColor)
  const currentFontFamily = useThemeStore((state) => state.fontFamily)
  const currentBorderRadius = useThemeStore((state) => state.borderRadius)
  const currentCSSFramework = useThemeStore((state) => state.cssFramework)
  const currentJSFramework = useThemeStore((state) => state.jsFramework)

  const updateAccentColor = useThemeStore((state) => state.setAccentColor)
  const updateGrayColor = useThemeStore((state) => state.setGrayColor)
  const updateFontFamily = useThemeStore((state) => state.setFontFamily)
  const updateBorderRadius = useThemeStore((state) => state.setBorderRadius)
  const updateCSSFramework = useThemeStore((state) => state.setCSSFramework)
  const updateJSFramework = useThemeStore((state) => state.setJSFramework)
  const reset = useThemeStore((state) => state.reset)

  const getConfig = () =>
    Match.value(currentCSSFramework)
      .pipe(
        Match.when('panda', () => ''),
        Match.when('tailwind', () => ''),
        Match.exhaustive,
      )
      .replace('__ACCENT_COLOR__', currentAccentColor)
      .replace('__GRAY_COLOR__', currentGrayColor)
      .replace('__BORDER_RADIUS__', currentBorderRadius)
      .replace('__JS_FRAMEWORK__', currentJSFramework)

  useEffect(() => {
    syncAccentColor(currentAccentColor, context)
  }, [currentAccentColor, context])

  useEffect(() => {
    syncGrayColor(currentGrayColor, context)
  }, [currentGrayColor, context])

  useEffect(() => {
    syncFontFamily(currentFontFamily, context)
  }, [currentFontFamily, context])

  useEffect(() => {
    syncBorderRaius(currentBorderRadius, context)
  }, [currentBorderRadius, context])

  return {
    accentColors,
    borderRadii,
    cssFrameworks,
    currentAccentColor,
    currentBorderRadius,
    currentCSSFramework,
    currentFontFamily,
    currentGrayColor,
    currentJSFramework,
    fontFamilies,
    getConfig,
    grayColors,
    jsFrameworks,
    reset,
    updateAccentColor,
    updateBorderRadius,
    updateCSSFramework,
    updateFontFamily,
    updateGrayColor,
    updateJSFramework,
  }
}

export type ThemeConfig = {
  code: string
  config: string
}

export const syncGrayColor = (color: GrayColor, context?: Context) => {
  const doc = context?.document ?? document
  syncColorPalette(color, 'gray', doc)
}

const syncAccentColor = (color: AccentColor, context?: Context) => {
  const doc = context?.document ?? document
  const root = doc.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  syncColorPalette(color, 'accent', doc)

  Match.value(color).pipe(
    Match.when('neutral', () => {
      root.style.removeProperty('--colors-accent-fg')
      root.style.removeProperty('--colors-accent-default')
      root.style.removeProperty('--colors-accent-emphasized')
      root.style.removeProperty('--colors-accent-text')
    }),
    Match.when(
      (color) => ['amber', 'lime', 'mint', 'sky', 'yellow'].includes(color),
      () => {
        root.style.setProperty('--colors-accent-fg', token.var('colors.gray.light.12'))
        root.style.setProperty('--colors-accent-default', token.var('colors.accent.9'))
        root.style.setProperty('--colors-accent-emphasized', token.var('colors.accent.10'))
        root.style.setProperty('--colors-accent-text', token.var('colors.accent.a11'))
      },
    ),
    Match.orElse(() => {
      root.style.setProperty('--colors-accent-fg', token.var('colors.white'))
      root.style.setProperty('--colors-accent-default', token.var('colors.accent.9'))
      root.style.setProperty('--colors-accent-emphasized', token.var('colors.accent.10'))
      root.style.setProperty('--colors-accent-text', token.var('colors.accent.a11'))
    }),
  )
}

const syncColorPalette = (
  color: GrayColor | AccentColor,
  name: 'accent' | 'gray',
  doc: Document,
) => {
  const root = doc.querySelector<HTMLHtmlElement>(':root')
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

const syncBorderRaius = (borderRadius: BorderRadius, context?: Context) => {
  const doc = context?.document ?? document
  const root = doc.querySelector<HTMLHtmlElement>(':root')
  if (!root) return

  const borderRadii = Match.value(borderRadius).pipe(
    Match.when('none', () => ({
      l1: token.var('radii.none'),
      l2: token.var('radii.none'),
      l3: token.var('radii.none'),
    })),
    Match.when('xs', () => ({
      l1: token.var('radii.2xs'),
      l2: token.var('radii.xs'),
      l3: token.var('radii.sm'),
    })),
    Match.when('sm', () => ({
      l1: token.var('radii.xs'),
      l2: token.var('radii.sm'),
      l3: token.var('radii.md'),
    })),
    Match.when('md', () => ({
      l1: token.var('radii.sm'),
      l2: token.var('radii.md'),
      l3: token.var('radii.lg'),
    })),
    Match.when('lg', () => ({
      l1: token.var('radii.md'),
      l2: token.var('radii.lg'),
      l3: token.var('radii.xl'),
    })),
    Match.when('xl', () => ({
      l1: token.var('radii.lg'),
      l2: token.var('radii.xl'),
      l3: token.var('radii.2xl'),
    })),
    Match.when('2xl', () => ({
      l1: token.var('radii.xl'),
      l2: token.var('radii.2xl'),
      l3: token.var('radii.3xl'),
    })),
    Match.exhaustive,
  )

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

const syncFontFamily = (fontFamily: FontFamily, context?: Context) => {
  const doc = context?.document ?? document
  const root = doc.querySelector<HTMLHtmlElement>(':root')
  if (root) {
    root.style.setProperty('--fonts-body', fontFamily.value)
  }
}
