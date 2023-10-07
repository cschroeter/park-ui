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

export type AccentColor =
  | 'amber'
  | 'blue'
  | 'bronze'
  | 'brown'
  | 'crimson'
  | 'cyan'
  | 'gold'
  | 'grass'
  | 'green'
  | 'indigo'
  | 'iris'
  | 'jade'
  | 'lime'
  | 'mint'
  | 'neutral'
  | 'orange'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'red'
  | 'ruby'
  | 'sky'
  | 'teal'
  | 'tomato'
  | 'violet'
  | 'yellow'

export type GrayColor = 'neutral' | 'mauve' | 'sage' | 'olive' | 'slate' | 'sand'
