import { useEffect } from 'react'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { AccentColor, GrayColor } from './colors'

export const useTheme = () => {
  const accentColor = useThemeStore((state) => state.accentColor)
  const grayColor = useThemeStore((state) => state.grayColor)
  const setAccentColor = useThemeStore((state) => state.setAccentColor)
  const setGrayColor = useThemeStore((state) => state.setGrayColor)
  const reset = useThemeStore((state) => state.reset)

  useEffect(() => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return

    root.setAttribute('data-accent-color', accentColor)
  }, [accentColor])

  useEffect(() => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return

    root.setAttribute('data-gray-color', grayColor)
  }, [grayColor])

  //   const font = useThemeStore((state) => state.font)
  //   const radius = useThemeStore((state) => state.radius)

  //   const setFont = useThemeStore((state) => state.setFont)
  //   const setRadius = useThemeStore((state) => state.setRadius)

  //   useEffect(() => {
  //     syncFontFamily(font)
  //   }, [font])

  //   useEffect(() => {
  //     syncBorderRaius(radius)
  //   }, [radius])

  return {
    accentColor,
    grayColor,
    setAccentColor,
    setGrayColor,
    reset,

    // font,
    // radius,
    // getConfig,
    // setFont,
    // setRadius,
  }
}

// const syncFontFamily = (font: Font) => {
//   const root = document.querySelector<HTMLHtmlElement>(':root')
//   if (!root) return

//   root.style.setProperty('--fonts-body', fonts[font])
// }

// const syncBorderRaius = (radius: Radius) => {
//   const root = document.querySelector<HTMLHtmlElement>(':root')
//   if (!root) return

//   const borderRadii = Match.value(radius).pipe(
//     Match.when('none', () => ({
//       l1: token.var('radii.none'),
//       l2: token.var('radii.none'),
//       l3: token.var('radii.none'),
//     })),
//     Match.when('xs', () => ({
//       l1: token.var('radii.2xs'),
//       l2: token.var('radii.xs'),
//       l3: token.var('radii.sm'),
//     })),
//     Match.when('sm', () => ({
//       l1: token.var('radii.xs'),
//       l2: token.var('radii.sm'),
//       l3: token.var('radii.md'),
//     })),
//     Match.when('md', () => ({
//       l1: token.var('radii.sm'),
//       l2: token.var('radii.md'),
//       l3: token.var('radii.lg'),
//     })),
//     Match.when('lg', () => ({
//       l1: token.var('radii.md'),
//       l2: token.var('radii.lg'),
//       l3: token.var('radii.xl'),
//     })),
//     Match.when('xl', () => ({
//       l1: token.var('radii.lg'),
//       l2: token.var('radii.xl'),
//       l3: token.var('radii.2xl'),
//     })),
//     Match.when('2xl', () => ({
//       l1: token.var('radii.xl'),
//       l2: token.var('radii.2xl'),
//       l3: token.var('radii.3xl'),
//     })),
//     Match.exhaustive,
//   )

//   root.style.setProperty('--radii-l1', borderRadii.l1)
//   root.style.setProperty('--radii-l2', borderRadii.l2)
//   root.style.setProperty('--radii-l3', borderRadii.l3)
// }

interface State {
  accentColor: AccentColor
  grayColor: GrayColor

  //   font: Font
  //   radius: Radius
}

const initialState: State = {
  accentColor: 'neutral',
  grayColor: 'neutral',

  //   font: 'Outfit',
  //   radius: 'sm',
}

interface Actions {
  reset: () => void
  setAccentColor: (color: AccentColor) => void
  setGrayColor: (color: GrayColor) => void

  //   setFont: (font: Font) => void
  //   setRadius: (radius: Radius) => void
}

const useThemeStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setAccentColor: (accentColor) => set(() => ({ accentColor })),
        setGrayColor: (grayColor) => set(() => ({ grayColor })),
        reset: () => set(initialState),

        // setRadius: (radius) => set(() => ({ radius })),
        // setFont: (font) => set(() => ({ font })),
      }),
      {
        name: 'park-ui-store',
        version: 5,
      },
    ),
  ),
)
