export type Shade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

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

export type GrayColor = (typeof grayColors)[number]
export const grayColors = ['neutral', 'mauve', 'olive', 'sage', 'sand', 'slate'] as const

export type Color = AccentColor | GrayColor

export type BorderRadius = (typeof radii)[number]
export const radii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

const baseKeys = [
  ...Array.from({ length: 12 }, (_, i) => `${i + 1}`),
  ...Array.from({ length: 12 }, (_, i) => `a${i + 1}`),
  'contrast',
  'fg',
  'solid',
  'emphasiszed',
]

export const createAccentColorSelectors = () =>
  [...accentColors].reduce(
    (acc, color) => ({
      ...acc,
      [`&[data-accent-color='${color}']`]: Object.fromEntries(
        baseKeys.map((k) => [`--colors-color-palette-${k}`, `var(--colors-${color}-${k})`]),
      ),
    }),
    {},
  )
