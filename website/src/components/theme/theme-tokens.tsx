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

  if (!includeSpecialKeys) {
    return [...numberedKeys, ...alphaKeys]
  }

  // Generate variant-based keys for the new structure
  const variantKeys = [
    // solid variant
    'solid-bg',
    'solid-bg-hover',
    'solid-bg-active',
    'solid-fg',
    // subtle variant
    'subtle-bg',
    'subtle-bg-hover',
    'subtle-bg-active',
    'subtle-fg',
    // surface variant
    'surface-bg',
    'surface-bg-hover',
    'surface-bg-active',
    'surface-fg',
    'surface-border',
    'surface-border-hover',
    'surface-border-active',
    // outline variant
    'outline-bg',
    'outline-bg-hover',
    'outline-bg-active',
    'outline-fg',
    'outline-border',
    'outline-border-hover',
    'outline-border-active',
    // plain variant
    'plain-bg',
    'plain-bg-hover',
    'plain-bg-active',
    'plain-fg',
  ]

  return [...numberedKeys, ...alphaKeys, ...variantKeys]
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
        .map((key) => {
          // Handle nested variant keys (e.g., solid-bg, solid-bg-hover)
          if (key.includes('-')) {
            const parts = key.split('-')
            if (parts.length === 2) {
              // e.g., solid-bg -> solid.bg
              return `--colors-${variablePrefix}-${key}: var(--colors-${color}-${parts[0]}-${parts[1]});`
            } else if (parts.length === 3) {
              // e.g., solid-bg-hover -> solid.bg.hover
              return `--colors-${variablePrefix}-${key}: var(--colors-${color}-${parts[0]}-${parts[1]}-${parts[2]});`
            }
          }
          // Handle regular numbered and alpha keys
          return `--colors-${variablePrefix}-${key}: var(--colors-${color}-${key});`
        })
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
