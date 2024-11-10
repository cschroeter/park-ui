import type { ColorPalette } from '@park-ui/panda-preset'
import { createVariables } from '@park-ui/panda-preset/utils'
import { sync } from 'effect/Deferred'
import { useEffect } from 'react'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const loadColorPalette = async (color: string): Promise<ColorPalette> => {
  const palettes: Record<string, () => Promise<{ default: ColorPalette }>> = {
    neutral: () => import('@park-ui/panda-preset/colors/neutral'),
    amber: () => import('@park-ui/panda-preset/colors/amber'),
    blue: () => import('@park-ui/panda-preset/colors/blue'),
    bronze: () => import('@park-ui/panda-preset/colors/bronze'),
    brown: () => import('@park-ui/panda-preset/colors/brown'),
    crimson: () => import('@park-ui/panda-preset/colors/crimson'),
    cyan: () => import('@park-ui/panda-preset/colors/cyan'),
    gold: () => import('@park-ui/panda-preset/colors/gold'),
    grass: () => import('@park-ui/panda-preset/colors/grass'),
    green: () => import('@park-ui/panda-preset/colors/green'),
    indigo: () => import('@park-ui/panda-preset/colors/indigo'),
    iris: () => import('@park-ui/panda-preset/colors/iris'),
    jade: () => import('@park-ui/panda-preset/colors/jade'),
    lime: () => import('@park-ui/panda-preset/colors/lime'),
    mint: () => import('@park-ui/panda-preset/colors/mint'),
    orange: () => import('@park-ui/panda-preset/colors/orange'),
    pink: () => import('@park-ui/panda-preset/colors/pink'),
    plum: () => import('@park-ui/panda-preset/colors/plum'),
    purple: () => import('@park-ui/panda-preset/colors/purple'),
    red: () => import('@park-ui/panda-preset/colors/red'),
    ruby: () => import('@park-ui/panda-preset/colors/ruby'),
    sky: () => import('@park-ui/panda-preset/colors/sky'),
    teal: () => import('@park-ui/panda-preset/colors/teal'),
    tomato: () => import('@park-ui/panda-preset/colors/tomato'),
    violet: () => import('@park-ui/panda-preset/colors/violet'),
    yellow: () => import('@park-ui/panda-preset/colors/yellow'),
  }

  const loader = palettes[color]
  if (!loader) {
    throw new Error(`Unknown color palette: ${color}`)
  }

  const module = await loader()
  return module.default
}

export const useTheme = () => {
  const accentColor = useThemeStore((state) => state.accentColor)
  const setAccentColor = useThemeStore((state) => state.setAccentColor)

  const syncAccentColor = async (color: string) => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return

    const styleStyle = document.querySelector<HTMLStyleElement>('#park-ui-theme')
    if (!styleStyle) return

    const colorPalette = await loadColorPalette(color)
    const cssVariables = createVariables(colorPalette)
    styleStyle.textContent = cssVariables
  }

  useEffect(() => {
    // document.cookie = `chakra-accent-color=${accentColor}`
    syncAccentColor(accentColor)
  }, [accentColor])

  return {
    accentColor,
    setAccentColor,
  }
}

interface State {
  accentColor: AccentColor
}

const initialState: State = {
  accentColor: 'neutral',
}

interface Actions {
  setAccentColor: (color: AccentColor) => void
  reset: () => void
}

const useThemeStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setAccentColor: (accentColor) => set(() => ({ accentColor })),
        // setFont: (font) => set(() => ({ font })),
        // setRadius: (radius) => set(() => ({ radius })),
        reset: () => set(initialState),
      }),
      {
        name: 'park-ui-store',
        version: 5,
      },
    ),
  ),
)

export type AccentColor = (typeof accentColors)[number]
export const accentColors = [
  'neutral',
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
  'bronze',
  'gold',
  'brown',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky',
] as const
