import fs from 'node:fs'
import { join } from 'node:path'
import * as radixColors from '@radix-ui/colors'

const main = () => {
  Object.keys(radixColors)
    .filter((color) => !/[A-Z]/.test(color))
    .filter((color) => color !== 'default')
    // .map((color) => (color === 'gray' ? 'neutral' : color))
    .map((color) => {
      const tokens = defineColorTokens(color)
      const semanticTokens = defineSemanticTokens(color)

      fs.writeFileSync(
        join(process.cwd(), '../packages/preset/src/colors', `${color}.ts`),
        `import { defineTokens, defineSemanticTokens } from '@pandacss/dev'

      const tokens = defineTokens.colors(${JSON.stringify(tokens, null, 0)})
      const semanticTokens = defineSemanticTokens.colors(${JSON.stringify(semanticTokens, null, 0)})

      export default {
        name: '${color}',
        tokens,
        semanticTokens,
      }
      `,
      )
    })
}

const defineSemanticTokens = (color: string) => {
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1)

  const semanticTokens = numbers.reduce((acc, num) => {
    acc[num] = {
      value: {
        _light: `{colors.${color}.light.${num}}`,
        _dark: `{colors.${color}.dark.${num}}`,
      },
    }
    acc[`a${num}`] = {
      value: {
        _light: `{colors.${color}.light.a${num}}`,
        _dark: `{colors.${color}.dark.a${num}}`,
      },
    }
    return acc
  }, {})

  const aliasTokens = {
    default: {
      value: {
        _light: `{colors.${color}.light.9}`,
        _dark: `{colors.${color}.dark.9}`,
      },
    },
    emphasized: {
      value: {
        _light: `{colors.${color}.light.10}`,
        _dark: `{colors.${color}.dark.10}`,
      },
    },
    fg: {
      value: {
        _light: 'white',
        _dark: 'white',
      },
    },
    text: {
      value: {
        _light: `{colors.${color}.light.a11}`,
        _dark: `{colors.${color}.dark.a11}`,
      },
    },
  }

  return { ...semanticTokens, ...aliasTokens }
}

const defineColorTokens = (color: string) => {
  const colorObj = Object.fromEntries(
    Object.keys(radixColors)
      .filter((key) => key.startsWith(color))
      .filter((key) => !/\d/.test(key))
      .map((key) => {
        const tokens = toColorTokens(color, radixColors[key])
        return [key, tokens]
      }),
  )

  return Object.keys(colorObj).reduce(
    (acc, key) => {
      const target = key.includes('Dark') ? 'dark' : 'light'
      acc[target] = { ...acc[target], ...colorObj[key] }
      return acc
    },
    { light: {}, dark: {} },
  )
}

interface Token<T> {
  value: T
  description?: string
}

const toColorTokens = (
  color: string,
  scale: Record<string, string>,
): Record<string, Token<string>> => {
  return Object.fromEntries(
    Object.keys(scale).map((key) => {
      const value = scale[key]
      const name = key.replace(color, '').toLowerCase()
      return [name, { value }]
    }),
  )
}

main()
