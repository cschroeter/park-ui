import fs from 'node:fs'
import { join } from 'node:path'
import * as radixColors from '@radix-ui/colors'

const main = () => {
  Object.keys(radixColors)
    .filter((color) => !/[A-Z]/.test(color) && color !== 'default')
    .map((color) => ({ color, tokens: generateSemanticTokens(color) }))
    .forEach((colorPalette) => {
      const color = colorPalette.color === 'gray' ? 'neutral' : colorPalette.color
      const tokens = JSON.stringify(colorPalette.tokens, null, 0)
      const content = `import { defineSemanticTokens } from '@pandacss/dev'

      export const ${color} = defineSemanticTokens.colors(${tokens})
`
      fs.writeFileSync(join(process.cwd(), 'src/theme/colors', `${color}.ts`), content)
    })
}

const generateSemanticTokens = (color: string) => {
  const { light, dark } = getColorTokens(color)

  // Generate numbered tokens (1-12) and alpha tokens (a1-a12)
  const semanticTokens = {}
  for (let i = 1; i <= 12; i++) {
    semanticTokens[i] = {
      value: { _light: light[i], _dark: dark[i] },
    }
    semanticTokens[`a${i}`] = {
      value: { _light: light[`a${i}`], _dark: dark[`a${i}`] },
    }
  }

  // Add alias tokens
  return {
    ...semanticTokens,
    default: { value: `{ colors.${color}.9 }` },
    emphasized: { value: `{ colors.${color}.10 }` },
    fg: { value: 'white' },
    text: { value: `{ colors.${color}.a11 }` },
  }
}

const getColorTokens = (color: string) => {
  const light = {}
  const dark = {}

  Object.keys(radixColors)
    .filter((key) => key.startsWith(color) && !/\d/.test(key))
    .forEach((key) => {
      // biome-ignore lint/performance/noDynamicNamespaceImportAccess: no one cares
      const scale = radixColors[key]
      const target = key.includes('Dark') ? dark : light

      Object.keys(scale).forEach((scaleKey) => {
        const tokenName = scaleKey.replace(color, '').toLowerCase()
        target[tokenName] = { value: scale[scaleKey] }
      })
    })

  return { light, dark }
}

main()
