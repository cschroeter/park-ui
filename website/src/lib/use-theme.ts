import { useEffect } from 'react'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Font } from '~/app/fonts'
import type { AccentColor, BorderRadius, GrayColor } from './theme'

export const useTheme = () => {
  const accentColor = useThemeStore((state) => state.accentColor)
  const font = useThemeStore((state) => state.font)
  const grayColor = useThemeStore((state) => state.grayColor)
  const radius = useThemeStore((state) => state.radius)

  const reset = useThemeStore((state) => state.reset)
  const setAccentColor = useThemeStore((state) => state.setAccentColor)
  const setFont = useThemeStore((state) => state.setFont)
  const setGrayColor = useThemeStore((state) => state.setGrayColor)
  const setRadius = useThemeStore((state) => state.setRadius)

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

  useEffect(() => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return

    root.setAttribute('data-font', font)
  }, [font])

  useEffect(() => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return

    root.setAttribute('data-radius', radius)
  }, [radius])

  return {
    accentColor,
    grayColor,
    font,
    radius,
    setAccentColor,
    setGrayColor,
    setFont,
    setRadius,
    reset,
  }
}

interface State {
  accentColor: AccentColor
  grayColor: GrayColor
  font: Font
  radius: BorderRadius
}

const initialState: State = {
  accentColor: 'neutral',
  grayColor: 'neutral',
  font: 'Outfit',
  radius: 'sm',
}

interface Actions {
  reset: () => void
  setAccentColor: (color: AccentColor) => void
  setGrayColor: (color: GrayColor) => void
  setFont: (font: Font) => void
  setRadius: (radius: BorderRadius) => void
}

const useThemeStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setAccentColor: (accentColor) => set(() => ({ accentColor })),
      setGrayColor: (grayColor) => set(() => ({ grayColor })),
      setRadius: (radius) => set(() => ({ radius })),
      setFont: (font) => set(() => ({ font })),
      reset: () => set(initialState),
    }),
    {
      name: 'park-ui',
      storage: {
        getItem: async (name: string) => {
          const cookie = await cookieStore.get(name)
          return cookie?.value ? JSON.parse(cookie.value) : null
        },
        setItem: async (name: string, value) => {
          await cookieStore.set({
            name,
            value: JSON.stringify(value),
            sameSite: 'strict',
          })
        },
        removeItem: async (name: string) => {
          await cookieStore.delete(name)
        },
      },
    },
  ),
)
