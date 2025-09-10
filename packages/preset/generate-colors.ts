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
      fs.writeFileSync(join(process.cwd(), 'src/colors', `${color}.ts`), content)
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

  const name = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'].includes(color) ? 'gray' : color
  const isBright = ['amber', 'yellow', 'lime', 'mint', 'sky'].includes(color)

  const solid = {
    bg: {
      DEFAULT: { value: { _light: `{colors.${name}.9}`, _dark: `{colors.${name}.9}` } },
      hover: { value: { _light: `{colors.${name}.10}`, _dark: `{colors.${name}.10}` } },
      active: { value: { _light: `{colors.${name}.11}`, _dark: `{colors.${name}.11}` } },
    },
    fg: {
      DEFAULT: {
        value: isBright
          ? { _light: '{colors.gray.12}', _dark: '{colors.gray.1}' }
          : { _light: 'white', _dark: 'white' },
      },
    },
  }

  const subtle = {
    bg: {
      DEFAULT: { value: { _light: `{colors.${name}.a3}`, _dark: `{colors.${name}.a3}` } },
      hover: { value: { _light: `{colors.${name}.a4}`, _dark: `{colors.${name}.a4}` } },
      active: { value: { _light: `{colors.${name}.a5}`, _dark: `{colors.${name}.a5}` } },
    },
    fg: {
      DEFAULT: { value: { _light: `{colors.${name}.a11}`, _dark: `{colors.${name}.a11}` } },
    },
  }

  const surface = {
    bg: {
      DEFAULT: { value: { _light: `{colors.${name}.a2}`, _dark: `{colors.${name}.a2}` } },
      hover: { value: { _light: `{colors.${name}.a3}`, _dark: `{colors.${name}.a3}` } },
      active: { value: { _light: `{colors.${name}.a4}`, _dark: `{colors.${name}.a4}` } },
    },
    fg: {
      DEFAULT: { value: { _light: `{colors.${name}.a11}`, _dark: `{colors.${name}.a11}` } },
    },
    border: {
      DEFAULT: { value: { _light: `{colors.${name}.a5}`, _dark: `{colors.${name}.a5}` } },
      hover: { value: { _light: `{colors.${name}.a6}`, _dark: `{colors.${name}.a6}` } },
      active: { value: { _light: `{colors.${name}.a6}`, _dark: `{colors.${name}.a6}` } },
    },
  }

  const outline = {
    bg: {
      DEFAULT: { value: { _light: 'transparent', _dark: 'transparent' } },
      hover: { value: { _light: `{colors.${name}.a2}`, _dark: `{colors.${name}.a2}` } },
      active: { value: { _light: `{colors.${name}.a3}`, _dark: `{colors.${name}.a3}` } },
    },
    fg: {
      DEFAULT: { value: { _light: `{colors.${name}.a11}`, _dark: `{colors.${name}.a11}` } },
    },
    border: {
      DEFAULT: { value: { _light: `{colors.${name}.a7}`, _dark: `{colors.${name}.a7}` } },
      hover: { value: { _light: `{colors.${name}.a8}`, _dark: `{colors.${name}.a8}` } },
      active: { value: { _light: `{colors.${name}.a8}`, _dark: `{colors.${name}.a8}` } },
    },
  }

  const plain = {
    bg: {
      DEFAULT: { value: { _light: 'transparent', _dark: 'transparent' } },
      hover: { value: { _light: `{colors.${name}.a3}`, _dark: `{colors.${name}.a3}` } },
      active: { value: { _light: `{colors.${name}.a4}`, _dark: `{colors.${name}.a4}` } },
    },
    fg: {
      DEFAULT: { value: { _light: `{colors.${name}.a11}`, _dark: `{colors.${name}.a11}` } },
    },
  }

  // Add alias tokens
  return {
    ...semanticTokens,
    solid,
    subtle,
    surface,
    outline,
    plain,
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
        target[tokenName] = scale[scaleKey]
      })
    })

  return { light, dark }
}

main()
