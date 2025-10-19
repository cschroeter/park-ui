import fs from 'node:fs'
import { join } from 'node:path'
import * as radixColors from '@radix-ui/colors'

// Configuration constants
const NEUTRAL_COLORS = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'] as const
const BRIGHT_COLORS = ['amber', 'yellow', 'lime', 'mint', 'sky'] as const
const OUTPUT_DIR = 'src/colors'

// Types
type ColorName = string
type ColorScale = Record<string, string>
type ColorTokens = Record<string, unknown>
type ColorPalette = { name: ColorName; tokens: ColorTokens }

/**
 * Main function to generate color tokens for all Radix colors
 */
const main = (): void => {
  console.log('🎨 Generating semantic color tokens...')

  try {
    const colorPalettes = getValidColorNames().map(createColorPalette)

    colorPalettes.forEach(writeColorFile)

    console.log(`✅ Generated ${colorPalettes.length} color files`)
  } catch (error) {
    console.error('❌ Failed to generate color tokens:', error)
    process.exit(1)
  }
}

/**
 * Get all valid color names from Radix colors
 */
const getValidColorNames = (): ColorName[] => {
  return Object.keys(radixColors).filter(isValidColorName)
}

/**
 * Check if a color name is valid (not uppercase and not 'default')
 */
const isValidColorName = (colorName: string): boolean => {
  return !/[A-Z]/.test(colorName) && colorName !== 'default'
}

/**
 * Create a color palette object with name and tokens
 */
const createColorPalette = (colorName: ColorName): ColorPalette => {
  const normalizedName = normalizeColorName(colorName)
  const tokens = generateSemanticTokens(colorName)

  return {
    name: normalizedName,
    tokens,
  }
}

/**
 * Normalize color name (gray -> neutral)
 */
const normalizeColorName = (colorName: ColorName): ColorName => {
  return colorName === 'gray' ? 'neutral' : colorName
}

/**
 * Write color palette to file
 */
const writeColorFile = (palette: ColorPalette): void => {
  const filePath = join(process.cwd(), OUTPUT_DIR, `${palette.name}.ts`)
  const content = generateFileContent(palette)

  fs.writeFileSync(filePath, content, 'utf8')
  console.log(`📄 Created ${palette.name}.ts`)
}

/**
 * Format tokens for compact output
 */
const formatTokensForOutput = (tokens: ColorTokens): string => {
  const formatValue = (value: unknown, depth = 0): string => {
    if (typeof value !== 'object' || value === null) {
      return JSON.stringify(value)
    }

    if (Array.isArray(value)) {
      return `[${value.map((v) => formatValue(v, depth + 1)).join(', ')}]`
    }

    const entries = Object.entries(value)
    const formatted = entries
      .map(([key, val]) => {
        const keyStr = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : JSON.stringify(key)
        return `${keyStr}: ${formatValue(val, depth + 1)}`
      })
      .join(', ')

    return `{ ${formatted} }`
  }

  return formatValue(tokens)
}

/**
 * Generate file content for a color palette
 */
const generateFileContent = (palette: ColorPalette): string => {
  const tokens = formatTokensForOutput(palette.tokens)

  return `import { defineSemanticTokens } from '@pandacss/dev'

export const ${palette.name} = defineSemanticTokens.colors(${tokens})
`
}

/**
 * Generate semantic tokens for a color
 */
const generateSemanticTokens = (color: string): ColorTokens => {
  const { light, dark } = getColorTokens(color)

  // Generate numbered tokens (1-12) and alpha tokens (a1-a12)
  const baseTokens = generateBaseTokens(light, dark)

  // Generate variant tokens
  const name = isNeutralColor(color) ? 'gray' : color
  const isBright = isBrightColor(color)
  const shade = name === 'gray' ? 'a12' : 'a11'

  const variantTokens = {
    solid: createSolidVariant(name, isBright),
    subtle: createSubtleVariant(name, shade),
    surface: createSurfaceVariant(name, shade),
    outline: createOutlineVariant(name, shade),
    plain: createPlainVariant(name, shade),
  }

  return {
    ...baseTokens,
    ...variantTokens,
  }
}

/**
 * Generate base tokens (1-12 and a1-a12)
 */
const generateBaseTokens = (light: ColorScale, dark: ColorScale): Record<string, unknown> => {
  const tokens: Record<string, unknown> = {}

  for (let i = 1; i <= 12; i++) {
    tokens[i] = {
      value: { _light: light[i], _dark: dark[i] },
    }
    tokens[`a${i}`] = {
      value: { _light: light[`a${i}`], _dark: dark[`a${i}`] },
    }
  }

  return tokens
}

/**
 * Check if color is neutral
 */
const isNeutralColor = (color: string): boolean => {
  return NEUTRAL_COLORS.includes(color as (typeof NEUTRAL_COLORS)[number])
}

/**
 * Check if color is bright
 */
const isBrightColor = (color: string): boolean => {
  return BRIGHT_COLORS.includes(color as (typeof BRIGHT_COLORS)[number])
}

/**
 * Create solid variant tokens
 */
const createSolidVariant = (name: string, isBright: boolean) => ({
  bg: {
    DEFAULT: { value: { _light: `{colors.${name}.9}`, _dark: `{colors.${name}.9}` } },
    hover: { value: { _light: `{colors.${name}.10}`, _dark: `{colors.${name}.10}` } },
  },
  fg: {
    DEFAULT: {
      value: isBright
        ? { _light: '{colors.gray.12}', _dark: '{colors.gray.1}' }
        : { _light: 'white', _dark: 'white' },
    },
  },
})

/**
 * Create subtle variant tokens
 */
const createSubtleVariant = (name: string, shade: string) => ({
  bg: {
    DEFAULT: { value: { _light: `{colors.${name}.a3}`, _dark: `{colors.${name}.a3}` } },
    hover: { value: { _light: `{colors.${name}.a4}`, _dark: `{colors.${name}.a4}` } },
    active: { value: { _light: `{colors.${name}.a5}`, _dark: `{colors.${name}.a5}` } },
  },
  fg: {
    DEFAULT: {
      value: { _light: `{colors.${name}.${shade}}`, _dark: `{colors.${name}.${shade}}` },
    },
  },
})

/**
 * Create surface variant tokens
 */
const createSurfaceVariant = (name: string, shade: string) => ({
  bg: {
    DEFAULT: { value: { _light: `{colors.${name}.a2}`, _dark: `{colors.${name}.a2}` } },
    active: { value: { _light: `{colors.${name}.a3}`, _dark: `{colors.${name}.a3}` } },
  },
  border: {
    DEFAULT: { value: { _light: `{colors.${name}.a6}`, _dark: `{colors.${name}.a6}` } },
    hover: { value: { _light: `{colors.${name}.a7}`, _dark: `{colors.${name}.a7}` } },
  },
  fg: {
    DEFAULT: { value: { _light: `{colors.${name}.${shade}}`, _dark: `{colors.${name}.${shade}}` } },
  },
})

/**
 * Create outline variant tokens
 */
const createOutlineVariant = (name: string, shade: string) => ({
  bg: {
    hover: { value: { _light: `{colors.${name}.a2}`, _dark: `{colors.${name}.a2}` } },
    active: { value: { _light: `{colors.${name}.a3}`, _dark: `{colors.${name}.a3}` } },
  },
  border: {
    DEFAULT: { value: { _light: `{colors.${name}.a7}`, _dark: `{colors.${name}.a7}` } },
  },
  fg: {
    DEFAULT: { value: { _light: `{colors.${name}.${shade}}`, _dark: `{colors.${name}.${shade}}` } },
  },
})

/**
 * Create plain variant tokens
 */
const createPlainVariant = (name: string, shade: string) => ({
  bg: {
    hover: { value: { _light: `{colors.${name}.a3}`, _dark: `{colors.${name}.a3}` } },
    active: { value: { _light: `{colors.${name}.a4}`, _dark: `{colors.${name}.a4}` } },
  },
  fg: {
    DEFAULT: { value: { _light: `{colors.${name}.${shade}}`, _dark: `{colors.${name}.${shade}}` } },
  },
})

/**
 * Extract color tokens from Radix colors
 */
const getColorTokens = (color: string): { light: ColorScale; dark: ColorScale } => {
  const light: ColorScale = {}
  const dark: ColorScale = {}

  Object.keys(radixColors)
    .filter((key) => key.startsWith(color) && !/\d/.test(key))
    .forEach((key) => {
      const scale = (radixColors as Record<string, Record<string, string>>)[key]
      const target = key.includes('Dark') ? dark : light

      Object.keys(scale).forEach((scaleKey) => {
        const tokenName = scaleKey.replace(color, '').toLowerCase()
        target[tokenName] = scale[scaleKey]
      })
    })

  return { light, dark }
}

main()
