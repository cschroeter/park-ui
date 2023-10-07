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
  borderRadius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export type AccentColor = (typeof accentColors)[number]
export const accentColors = [
  'amber',
  'blue',
  'bronze',
  'brown',
  'crimson',
  'cyan',
  'gold',
  'grass',
  'green',
  'indigo',
  'iris',
  'jade',
  'lime',
  'mint',
  'neutral',
  'orange',
  'pink',
  'plum',
  'purple',
  'red',
  'ruby',
  'sky',
  'teal',
  'tomato',
  'violet',
  'yellow',
] as const

export type GrayColor = (typeof grayColors)[number]
export const grayColors = ['neutral', 'mauve', 'olive', 'sage', 'sand', 'slate'] as const
