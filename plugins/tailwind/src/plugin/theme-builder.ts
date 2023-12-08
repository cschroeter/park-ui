import { type AccentColor, type BorderRadius, type GrayColor } from '@park-ui/panda-preset'
import { match } from 'ts-pattern'

const getColorPaletteCssVars = (options: {
  color: AccentColor | GrayColor
  name: 'gray' | 'accent'
}) => {
  const { color, name } = options
  if (!color) return {}

  const hues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const
  return hues.reduce(
    (acc, hue) => {
      acc[`--colors-${name}-${hue}`] = `var(--colors-${color}-${hue})`
      acc[`--colors-${name}-a${hue}`] = `var(--colors-${color}-a${hue})`
      return acc
    },
    {} as Record<string, string>,
  )
}

const getSemanticTokensCssVars = (color: AccentColor | GrayColor) => {
  return match(color)
    .with('neutral', () => ({}))
    .with('amber', 'lime', 'mint', 'sky', 'yellow', () => ({
      '--colors-accent-fg': 'var(--colors-gray-light-12)',
      '--colors-accent-default': 'var(--colors-accent-9)',
      '--colors-accent-emphasized': 'var(--colors-accent-10)',
      '--colors-accent-text': 'var(--colors-accent-a11)',
    }))
    .otherwise(() => ({
      '--colors-accent-fg': 'var(--colors-white)',
      '--colors-accent-default': 'var(--colors-accent-9)',
      '--colors-accent-emphasized': 'var(--colors-accent-10)',
      '--colors-accent-text': 'var(--colors-accent-a11)',
    }))
}

const getBorderRadiusCssVars = (borderRadius: BorderRadius | undefined) => {
  if (!borderRadius) return {}

  const borderRadii = match(borderRadius)
    .with('none', () => ({
      l1: 'radii-none',
      l2: 'radii-none',
      l3: 'radii-none',
    }))
    .with('xs', () => ({
      l1: 'radii-2xs',
      l2: 'radii-xs',
      l3: 'radii-sm',
    }))
    .with('sm', () => ({
      l1: 'radii-xs',
      l2: 'radii-sm',
      l3: 'radii-md',
    }))
    .with('md', () => ({
      l1: 'radii-sm',
      l2: 'radii-md',
      l3: 'radii-lg',
    }))
    .with('lg', () => ({
      l1: 'radii-md',
      l2: 'radii-lg',
      l3: 'radii-xl',
    }))
    .with('xl', () => ({
      l1: 'radii-lg',
      l2: 'radii-xl',
      l3: 'radii-2xl',
    }))
    .with('2xl', () => ({
      l1: 'radii-xl',
      l2: 'radii-2xl',
      l3: 'radii-3xl',
    }))
    .exhaustive()

  return {
    '--radii-l1': `var(--${borderRadii.l1})`,
    '--radii-l2': `var(--${borderRadii.l2})`,
    '--radii-l3': `var(--${borderRadii.l3})`,
  }
}

export const getThemeCssVariables = (options: {
  accentColor: AccentColor
  grayColor: GrayColor
  borderRadius: BorderRadius
}) => {
  const { accentColor, grayColor, borderRadius } = options
  return {
    ...getColorPaletteCssVars({ color: accentColor, name: 'accent' }),
    ...getColorPaletteCssVars({ color: grayColor, name: 'gray' }),
    ...getSemanticTokensCssVars(accentColor),
    ...getBorderRadiusCssVars(borderRadius),
  }
}
