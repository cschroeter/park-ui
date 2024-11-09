import type { ColorPalette } from '..'

export const createVariables = (color: ColorPalette) => {
  const tokens = createTokens(color)
  const semanticTokens = createSemanticTokens(color)

  const baseVariables = `
  :where(:root, :host) {
    ${tokens.join('\n    ')}
    
    --colors-color-palette-default: var(--colors-${color.name}-default);
    --colors-color-palette-emphasized: var(--colors-${color.name}-emphasized);
    --colors-color-palette-fg: var(--colors-${color.name}-fg);
    --colors-color-palette-text: var(--colors-${color.name}-text);
  }
  `

  const lightTheme = `
  :where(:root, .light) {
    ${semanticTokens.light.join('\n    ')}
  }
  `

  const darkTheme = `
  .dark {
    ${semanticTokens.dark.join('\n    ')}
  }
  `

  return `@layer tokens {${baseVariables}${lightTheme}${darkTheme}
}`
}

export const createTokens = (color: ColorPalette) => {
  const { name, tokens } = color

  const x = Object.entries(tokens).flatMap(([condition, value]) =>
    Object.entries(value).map(([key, { value }]) => {
      return `--colors-${name}-${condition}-${key}: ${value};`
    }),
  )

  return x
}

export const createSemanticTokens = (color: ColorPalette) => {
  const { name, semanticTokens } = color

  const tokensByCondition: Record<string, string[]> = {}

  Object.entries(semanticTokens).forEach(([shade, { value }]) => {
    Object.entries(value).forEach(([key, value]) => {
      const condition = key.replace('_', '')
      if (!tokensByCondition[condition]) {
        tokensByCondition[condition] = []
      }
      tokensByCondition[condition].push(`--colors-${name}-${shade}: ${convert(value)};`)
    })
  })
  return tokensByCondition
}

const convert = (value: string) => {
  return value.replaceAll('.', '-').replace('{', 'var(--').replace('}', ')')
}
