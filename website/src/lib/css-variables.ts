export const createVariables = (name: string): string => {
  //   const tokens = createTokens(color)
  //   const semanticTokens = createSemanticTokens(color)

  const baseVariables = `:where(:root, :host) {
    --colors-color-palette-default: var(--colors-${name}-default);
    --colors-color-palette-emphasized: var(--colors-${name}-emphasized);
    --colors-color-palette-fg: var(--colors-${name}-fg);
    --colors-color-palette-text: var(--colors-${name}-text);
  }
  `

  //   const lightTheme = `
  //   :where(:root, .light) {
  //     ${
  //       // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  //       semanticTokens['light'].join('\n    ')
  //     }
  //   }
  //   `

  //   const darkTheme = `
  //   .dark {
  //     ${
  //       // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  //       semanticTokens['dark'].join('\n    ')
  //     }
  //   }
  //   `

  return `@layer tokens {${baseVariables}}`
}

// const createTokens = (color: ColorPalette) => {
//   const { name, tokens } = color

//   return Object.entries(tokens ?? {}).flatMap(([condition, value]) =>
//     Object.entries(value).map(([key, { value }]) => {
//       return `--colors-${name}-${condition}-${key}: ${value};`
//     }),
//   )
// }

// const createSemanticTokens = (color: ColorPalette) => {
//   const { name, semanticTokens } = color
//   const tokensByCondition: Record<string, string[]> = {}

//   Object.entries(semanticTokens ?? {}).forEach(([shade, { value }]) => {
//     Object.entries(value).forEach(([key, value]) => {
//       const condition = key.replace('_', '')
//       if (!tokensByCondition[condition]) {
//         tokensByCondition[condition] = []
//       }
//       tokensByCondition[condition].push(`--colors-${name}-${shade}: ${convert(value)};`)
//     })
//   })
//   return tokensByCondition
// }

// const convert = (value: string): string => {
//   return value.replaceAll('.', '-').replace('{', 'var(--').replace('}', ')')
// }
