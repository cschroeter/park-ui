export interface PresetOptions {
  /**
   * @default 'neutral'
   */
  accentColor?: AccentColor
  /**
   * @default 'neutral'
   */
  grayColor?: GrayColor
  /**
   * @default 'sm'
   */
  borderRadius?: BorderRadius
  /**
   * Defines additional colors to be included in the preset. Use '*' to include all colors.
   * By default, only the gray and accent colors are included.
   * @default [] - This means no additional colors are included unless specified.
   */
  additionalColors?: Color[] | (string[] & {})
}

export type Color = AccentColor | GrayColor

export type BorderRadius = (typeof borderRadii)[number]
export const borderRadii = ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

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
