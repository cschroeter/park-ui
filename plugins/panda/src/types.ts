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
}

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

export type JSXFramework = (typeof jsxFrameworks)[number]
export const jsxFrameworks = ['React', 'Solid', 'Vue'] as const
