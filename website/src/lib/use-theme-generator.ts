// import { Match } from 'effect'
// import { useEffect } from 'react'
// import { token } from 'styled-system/tokens'
// import { jsFrameworks, useThemeStore } from './use-theme-store'

// type Context = {
//   document?: Document
// }

// export const useThemeGenerator = (context?: Context) => {
//   const currentAccentColor = useThemeStore((state) => state.accentColor)
//   const currentGrayColor = useThemeStore((state) => state.grayColor)
//   const currentFontFamily = useThemeStore((state) => state.fontFamily)
//   const currentBorderRadius = useThemeStore((state) => state.borderRadius)

//   const updateAccentColor = useThemeStore((state) => state.setAccentColor)
//   const updateGrayColor = useThemeStore((state) => state.setGrayColor)
//   const updateFontFamily = useThemeStore((state) => state.setFontFamily)
//   const updateBorderRadius = useThemeStore((state) => state.setBorderRadius)
//   const updateJSFramework = useThemeStore((state) => state.setJSFramework)
//   const reset = useThemeStore((state) => state.reset)

//   const getConfig = () =>
//     baseConfig
//       .replace('__ACCENT_COLOR__', currentAccentColor)
//       .replace('__GRAY_COLOR__', currentGrayColor)
//       .replace('__BORDER_RADIUS__', currentBorderRadius)

//   useEffect(() => {
//     syncAccentColor(currentAccentColor, context)
//   }, [currentAccentColor, context])

//   useEffect(() => {
//     syncGrayColor(currentGrayColor, context)
//   }, [currentGrayColor, context])

//   useEffect(() => {
//     syncFontFamily(currentFontFamily, context)
//   }, [currentFontFamily, context])

//   useEffect(() => {
//     syncBorderRaius(currentBorderRadius, context)
//   }, [currentBorderRadius, context])

//   return {
//     accentColors,
//     borderRadii,
//     currentAccentColor,
//     currentBorderRadius,
//     currentFontFamily,
//     currentGrayColor,
//     fontFamilies,
//     getConfig,
//     grayColors,
//     jsFrameworks,
//     reset,
//     updateAccentColor,
//     updateBorderRadius,
//     updateFontFamily,
//     updateGrayColor,
//     updateJSFramework,
//   }
// }

// export type ThemeConfig = {
//   code: string
//   config: string
// }

// export const syncGrayColor = (color: GrayColor, context?: Context) => {
//   const doc = context?.document ?? document
//   syncColorPalette(color, 'gray', doc)
// }

// const syncAccentColor = (color: AccentColor, context?: Context) => {
//   const doc = context?.document ?? document
//   const root = doc.querySelector<HTMLHtmlElement>(':root')
//   if (!root) return

//   syncColorPalette(color, 'accent', doc)

//   Match.value(color).pipe(
//     Match.when('neutral', () => {
//       root.style.removeProperty('--colors-accent-fg')
//       root.style.removeProperty('--colors-accent-default')
//       root.style.removeProperty('--colors-accent-emphasized')
//       root.style.removeProperty('--colors-accent-text')
//     }),
//     Match.when(
//       (color) => ['amber', 'lime', 'mint', 'sky', 'yellow'].includes(color),
//       () => {
//         root.style.setProperty('--colors-accent-fg', token.var('colors.gray.light.12'))
//         root.style.setProperty('--colors-accent-default', token.var('colors.accent.9'))
//         root.style.setProperty('--colors-accent-emphasized', token.var('colors.accent.10'))
//         root.style.setProperty('--colors-accent-text', token.var('colors.accent.a11'))
//       },
//     ),
//     Match.orElse(() => {
//       root.style.setProperty('--colors-accent-fg', token.var('colors.white'))
//       root.style.setProperty('--colors-accent-default', token.var('colors.accent.9'))
//       root.style.setProperty('--colors-accent-emphasized', token.var('colors.accent.10'))
//       root.style.setProperty('--colors-accent-text', token.var('colors.accent.a11'))
//     }),
//   )
// }

// const syncColorPalette = (
//   color: GrayColor | AccentColor,
//   name: 'accent' | 'gray',
//   doc: Document,
// ) => {
//   const root = doc.querySelector<HTMLHtmlElement>(':root')
//   if (!root) return

//   const hues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const
//   const isDefaultColor = color === 'neutral'

//   isDefaultColor
//     ? hues.map((hue) => {
//         root.style.removeProperty(`--colors-${name}-${hue}`)
//         root.style.removeProperty(`--colors-${name}-a${hue}`)
//       })
//     : hues.map((hue) => {
//         root.style.setProperty(`--colors-${name}-${hue}`, token.var(`colors.${color}.${hue}`))
//         root.style.setProperty(`--colors-${name}-a${hue}`, token.var(`colors.${color}.a${hue}`))
//       })
// }

// export type FontFamily = (typeof fontFamilies)[number]
// export const fontFamilies = [
//   {
//     label: 'Jakarta',
//     value: 'var(--font-jakarta)',
//   },
//   {
//     label: 'Inter',
//     value: 'var(--font-inter)',
//   },
//   {
//     label: 'Outfit',
//     value: 'var(--font-outfit)',
//   },
//   {
//     label: 'Raleway',
//     value: 'var(--font-raleway)',
//   },
//   {
//     label: 'Roboto Mono',
//     value: 'var(--font-roboto-mono)',
//   },
// ] as const

// const syncFontFamily = (fontFamily: FontFamily, context?: Context) => {
//   const doc = context?.document ?? document
//   const root = doc.querySelector<HTMLHtmlElement>(':root')
//   if (root) {
//     root.style.setProperty('--fonts-body', fontFamily.value)
//   }
// }

// const baseConfig = `import { defineConfig } from '@pandacss/dev'
// import { createPreset } from '@park-ui/panda-preset'

// export default defineConfig({
//   preflight: true,
//   presets: [
//     '@pandacss/preset-base',
//     createPreset({
//       accentColor: '__ACCENT_COLOR__',
//       grayColor: '__GRAY_COLOR__',
//       borderRadius: '__BORDER_RADIUS__',
//     }),
//   ],
//   include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
//   jsxFramework: 'react', // or 'solid' or 'vue'
//   outdir: 'styled-system',
// })
// `
