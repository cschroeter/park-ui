import fs from 'node:fs'
import { join } from 'node:path'
import * as radixColors from '@radix-ui/colors'

const main = () => {
  Object.keys(radixColors)
    .filter((color) => !/[A-Z]/.test(color))
    .filter((color) => color !== 'default')
    // .map((color) => (color === 'gray' ? 'neutral' : color))
    // biome-ignore lint/suspicious/useIterableCallbackReturn: sure
    .map((color) => {
      const tokens = defineSemanticTokens(color)

      fs.writeFileSync(
        join(process.cwd(), 'src/colors', `${color}.ts`),
        `import { defineSemanticTokens } from '@pandacss/dev'

      export const ${color} = defineSemanticTokens.colors(${JSON.stringify(tokens, null, 0)})
            `,
      )
    })
}

const defineSemanticTokens = (color: string) => {
  const tokens = defineColorTokens(color)
  const numbers = Array.from({ length: 12 }, (_, i) => i + 1)

  const semanticTokens = numbers.reduce((acc, num) => {
    acc[num] = {
      value: {
        _light: tokens.light[num],
        _dark: tokens.dark[num],
      },
    }
    acc[`a${num}`] = {
      value: {
        _light: tokens.light[`a${num}`],
        _dark: tokens.dark[`a${num}`],
      },
    }
    return acc
  }, {})

  const aliasTokens = {
    default: {
      value: `{ colors.${color}.9 }`,
    },
    emphasized: {
      value: `{ colors.${color}.10 }`,
    },
    fg: {
      value: 'white',
    },
    text: {
      value: `{ colors.${color}.a11 }`,
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
        // biome-ignore lint/performance/noDynamicNamespaceImportAccess: no one cares
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
