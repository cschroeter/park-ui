import { accentColors, type Color, grayColors } from '~/lib/theme'

export const ThemeTokens = () => {
  return (
    <style>{`
      @layer tokens {
        :where(:root, .light, .dark) {
          ${generateColorVariables()}
          ${generateRadiusVariables()}
        }
      }
    `}</style>
  )
}

const createBaseKeys = (includeSpecialKeys = false) => {
  const numberedKeys = Array.from({ length: 12 }, (_, i) => `${i + 1}`)
  const alphaKeys = Array.from({ length: 12 }, (_, i) => `a${i + 1}`)
  const specialKeys = includeSpecialKeys ? ['contrast', 'fg', 'solid', 'emphasiszed'] : []

  return [...numberedKeys, ...alphaKeys, ...specialKeys]
}

const generateColorPalette = (
  colors: readonly Color[],
  dataAttribute: string,
  variablePrefix: string,
  keys: string[],
) => {
  return colors
    .map((color) => {
      const selector = `&[data-${dataAttribute}='${color}']`
      const variables = keys
        .map((key) => `--colors-${variablePrefix}-${key}: var(--colors-${color}-${key});`)
        .join('\n          ')

      return `${selector} {\n          ${variables}\n        }`
    })
    .join('\n        ')
}

const generateColorVariables = () => {
  const accentKeys = createBaseKeys(true)
  const grayKeys = createBaseKeys(false)

  const accentVars = generateColorPalette(accentColors, 'accent-color', 'color-palette', accentKeys)
  const grayVars = generateColorPalette(grayColors, 'gray-color', 'gray', grayKeys)

  return `${accentVars}\n        ${grayVars}`
}

const generateRadiusVariables = () => {
  const radiusConfigs = [
    { size: 'none', l3: 'none', l2: 'none', l1: 'none' },
    { size: 'xs', l1: '2xs', l2: 'xs', l3: 'sm' },
    { size: 'sm', l1: 'xs', l2: 'sm', l3: 'md' },
    { size: 'md', l1: 'sm', l2: 'md', l3: 'lg' },
    { size: 'lg', l1: 'md', l2: 'lg', l3: 'xl' },
    { size: 'xl', l1: 'lg', l2: 'xl', l3: '2xl' },
    { size: '2xl', l1: 'xl', l2: '2xl', l3: '3xl' },
  ]

  return radiusConfigs
    .map(
      ({ size, l3, l2, l1 }) =>
        `&[data-radius="${size}"] {
        --radii-l3: var(--radii-${l3});
        --radii-l2: var(--radii-${l2});
        --radii-l1: var(--radii-${l1});
      }`,
    )
    .join('\n        ')
}
