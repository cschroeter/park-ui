import type { ColorPalette } from '@park-ui/panda-preset'
import { createVariables } from '@park-ui/panda-preset/utils'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const loadColorPalette = async (color: string): Promise<ColorPalette> => {
  const palettes: Record<string, () => Promise<{ default: ColorPalette }>> = {
    neutral: () => import('@park-ui/panda-preset/colors/neutral'),
    amber: () => import('@park-ui/panda-preset/colors/amber'),
    red: () => import('@park-ui/panda-preset/colors/red'),
    orange: () => import('@park-ui/panda-preset/colors/orange'),
    blue: () => import('@park-ui/panda-preset/colors/blue'),
    // Add other color imports here as needed
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

  const syncAccentColor = async (color: string) => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return

    const styleStyle = document.querySelector<HTMLStyleElement>('#park-ui-theme')
    if (!styleStyle) return

    const colorPalette = await loadColorPalette(color)
    const cssVariables = createVariables(colorPalette)
    styleStyle.textContent = cssVariables
  }

  return {
    accentColor,
    syncAccentColor,
  }
}

export type AccentColor = (typeof accentColors)[number] | (string & {})
export const accentColors = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
  'purple',
  'pink',
] as const

interface State {
  accentColor: AccentColor
}

const initialState: State = {
  accentColor: 'amber',
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
