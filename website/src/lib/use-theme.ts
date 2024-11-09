import type { ColorPalette } from '@park-ui/panda-preset'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const loadColorPalette = async (color: string): Promise<ColorPalette> => {
  const palettes: Record<string, () => Promise<{ default: ColorPalette }>> = {
    amber: () => import('@park-ui/panda-preset/colors/amber'),
    red: () => import('@park-ui/panda-preset/colors/red'),
    // Add other color imports here as needed
  }

  const loader = palettes[color]
  if (!loader) {
    throw new Error(`Unknown color palette: ${color}`)
  }

  const module = await loader()
  return module.default
}

const createColorVariables = (color: ColorPalette) => {
  console.log({ color })
  const createVars = (prefix: string, tokens: any) => {
    return Object.entries(tokens).reduce((acc, [key, value]) => {
      const varName = `--colors-${color.name}-${prefix}-${key}`
      const varValue = (value as any).value
      return acc + `${varName}: ${varValue};\n    `
    }, '')
  }

  const lightVars = createVars('light', color.tokens.light)
  const darkVars = createVars('dark', color.tokens.dark)

  return `@layer tokens {
  :where(:root, :host) {
    ${lightVars}
    --colors-color-palette-default: var(--colors-${color.name}-default);
    --colors-color-palette-emphasized: var(--colors-${color.name}-emphasized);
    --colors-color-palette-fg: var(--colors-${color.name}-fg);
    --colors-color-palette-text: var(--colors-${color.name}-text);
  }

  :where(:root, .light) {
    --colors-${color.name}-1: var(--colors-${color.name}-light-1);
    --colors-${color.name}-2: var(--colors-${color.name}-light-2);
    --colors-${color.name}-3: var(--colors-${color.name}-light-3);
    --colors-${color.name}-4: var(--colors-${color.name}-light-4);
    --colors-${color.name}-5: var(--colors-${color.name}-light-5);
    --colors-${color.name}-6: var(--colors-${color.name}-light-6);
    --colors-${color.name}-7: var(--colors-${color.name}-light-7);
    --colors-${color.name}-8: var(--colors-${color.name}-light-8);
    --colors-${color.name}-9: var(--colors-${color.name}-light-9);
    --colors-${color.name}-10: var(--colors-${color.name}-light-10);
    --colors-${color.name}-11: var(--colors-${color.name}-light-11);
    --colors-${color.name}-12: var(--colors-${color.name}-light-12);
    --colors-${color.name}-a1: var(--colors-${color.name}-light-a1);
    --colors-${color.name}-a2: var(--colors-${color.name}-light-a2);
    --colors-${color.name}-a3: var(--colors-${color.name}-light-a3);
    --colors-${color.name}-a4: var(--colors-${color.name}-light-a4);
    --colors-${color.name}-a5: var(--colors-${color.name}-light-a5);
    --colors-${color.name}-a6: var(--colors-${color.name}-light-a6);
    --colors-${color.name}-a7: var(--colors-${color.name}-light-a7);
    --colors-${color.name}-a8: var(--colors-${color.name}-light-a8);
    --colors-${color.name}-a9: var(--colors-${color.name}-light-a9);
    --colors-${color.name}-a10: var(--colors-${color.name}-light-a10);
    --colors-${color.name}-a11: var(--colors-${color.name}-light-a11);
    --colors-${color.name}-a12: var(--colors-${color.name}-light-a12);
    --colors-${color.name}-default: var(--colors-${color.name}-light-9);
    --colors-${color.name}-emphasized: var(--colors-${color.name}-light-10);
    --colors-${color.name}-fg: var(--colors-gray-light-12);
    --colors-${color.name}-text: var(--colors-${color.name}-light-a11);
  }

  .dark {
    ${darkVars}
    --colors-${color.name}-default: var(--colors-${color.name}-dark-9);
    --colors-${color.name}-emphasized: var(--colors-${color.name}-dark-10);
    --colors-${color.name}-fg: var(--colors-gray-light-12);
    --colors-${color.name}-text: var(--colors-${color.name}-dark-a11);
  }
}`
}

export const useTheme = () => {
  const accentColor = useThemeStore((state) => state.accentColor)

  const syncAccentColor = async (color: string) => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return

    const styleStyle = document.querySelector<HTMLStyleElement>('#park-ui-theme')
    if (!styleStyle) return

    const colorPalette = await loadColorPalette(color)
    const cssVariables = createColorVariables(colorPalette)
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
