import { token } from 'styled-system/tokens'

export const updateAccentColor = (color: AccentColor, colorMode: 'light' | 'dark') => {
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

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never

export type AccentColor = ElementType<typeof accentColors>

export const accentColors = [
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
