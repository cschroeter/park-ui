import amber from '@park-ui/panda-preset/colors/amber'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const createColorVariables = (colorName: string, colorTokens: any) => {
  const createVars = (prefix: string, tokens: any) => {
    return Object.entries(tokens).reduce((acc, [key, value]) => {
      const varName = `--colors-${colorName}-${prefix}-${key}`
      const varValue = (value as any).value
      return acc + `${varName}: ${varValue};\n    `
    }, '')
  }

  const lightVars = createVars('light', colorTokens.tokens.light)
  const darkVars = createVars('dark', colorTokens.tokens.dark)

  return `@layer tokens {
  :where(:root, :host) {
    ${lightVars}
    --colors-color-palette-default: var(--colors-${colorName}-default);
    --colors-color-palette-emphasized: var(--colors-${colorName}-emphasized);
    --colors-color-palette-fg: var(--colors-${colorName}-fg);
    --colors-color-palette-text: var(--colors-${colorName}-text);
  }

  :where(:root, .light) {
    --colors-${colorName}-1: var(--colors-${colorName}-light-1);
    --colors-${colorName}-2: var(--colors-${colorName}-light-2);
    --colors-${colorName}-3: var(--colors-${colorName}-light-3);
    --colors-${colorName}-4: var(--colors-${colorName}-light-4);
    --colors-${colorName}-5: var(--colors-${colorName}-light-5);
    --colors-${colorName}-6: var(--colors-${colorName}-light-6);
    --colors-${colorName}-7: var(--colors-${colorName}-light-7);
    --colors-${colorName}-8: var(--colors-${colorName}-light-8);
    --colors-${colorName}-9: var(--colors-${colorName}-light-9);
    --colors-${colorName}-10: var(--colors-${colorName}-light-10);
    --colors-${colorName}-11: var(--colors-${colorName}-light-11);
    --colors-${colorName}-12: var(--colors-${colorName}-light-12);
    --colors-${colorName}-a1: var(--colors-${colorName}-light-a1);
    --colors-${colorName}-a2: var(--colors-${colorName}-light-a2);
    --colors-${colorName}-a3: var(--colors-${colorName}-light-a3);
    --colors-${colorName}-a4: var(--colors-${colorName}-light-a4);
    --colors-${colorName}-a5: var(--colors-${colorName}-light-a5);
    --colors-${colorName}-a6: var(--colors-${colorName}-light-a6);
    --colors-${colorName}-a7: var(--colors-${colorName}-light-a7);
    --colors-${colorName}-a8: var(--colors-${colorName}-light-a8);
    --colors-${colorName}-a9: var(--colors-${colorName}-light-a9);
    --colors-${colorName}-a10: var(--colors-${colorName}-light-a10);
    --colors-${colorName}-a11: var(--colors-${colorName}-light-a11);
    --colors-${colorName}-a12: var(--colors-${colorName}-light-a12);
    --colors-${colorName}-default: var(--colors-${colorName}-light-9);
    --colors-${colorName}-emphasized: var(--colors-${colorName}-light-10);
    --colors-${colorName}-fg: var(--colors-gray-light-12);
    --colors-${colorName}-text: var(--colors-${colorName}-light-a11);
  }

  .dark {
    ${darkVars}
    --colors-${colorName}-default: var(--colors-${colorName}-dark-9);
    --colors-${colorName}-emphasized: var(--colors-${colorName}-dark-10);
    --colors-${colorName}-fg: var(--colors-gray-light-12);
    --colors-${colorName}-text: var(--colors-${colorName}-dark-a11);
  }
}`
}

export const useTheme = () => {
  const accentColor = useThemeStore((state) => state.accentColor)

  const syncAccentColor = () => {
    const root = document.querySelector<HTMLHtmlElement>(':root')
    if (!root) return

    const styleStyle = document.querySelector<HTMLStyleElement>('#park-ui-theme')
    if (!styleStyle) return

    const cssVariables = createColorVariables('amber', amber)
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
