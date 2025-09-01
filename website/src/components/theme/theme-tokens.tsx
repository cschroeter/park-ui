import { accentColors, grayColors } from '~/lib/theme'

export const ThemeTokens = () => {
  const accentBaseKeys = [
    ...Array.from({ length: 12 }, (_, i) => `${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `a${i + 1}`),
    'contrast',
    'fg',
    'solid',
    'emphasiszed',
  ]

  const grayBaseKeys = [
    ...Array.from({ length: 12 }, (_, i) => `${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `a${i + 1}`),
  ]

  const accentContent = accentColors.reduce(
    (acc, color) => {
      acc[`&[data-accent-color='${color}']`] = Object.fromEntries(
        accentBaseKeys.map((k) => [`--colors-color-palette-${k}`, `var(--colors-${color}-${k})`]),
      )
      return acc
    },
    {} as Record<string, Record<string, string>>,
  )

  const grayContent = grayColors.reduce(
    (acc, color) => {
      acc[`&[data-gray-color='${color}']`] = Object.fromEntries(
        grayBaseKeys.map((k) => [`--colors-gray-${k}`, `var(--colors-${color}-${k})`]),
      )
      return acc
    },
    {} as Record<string, Record<string, string>>,
  )

  const allContent = { ...accentContent, ...grayContent }

  return (
    <style>{`
      @layer tokens {
  :where(:root, .light, .dark) {
    ${Object.entries(allContent)
      .map(
        ([selector, vars]) =>
          `${selector} {
        ${Object.entries(vars)
          .map(([varName, varValue]) => `${varName}: ${varValue};`)
          .join('\n')}
      }`,
      )
      .join('\n')}

    &[data-radius="none"] {
      --radii-l3: var(--radii-none);
      --radii-l2: var(--radii-none);
      --radii-l1: var(--radii-none);
    }
    &[data-radius="xs"] {
        --radii-l3: var(--radii-2xs);
        --radii-l2: var(--radii-xs);
        --radii-l1: var(--radii-sm);
    }
    &[data-radius="sm"] {
      --radii-l3: var(--radii-xs);
      --radii-l2: var(--radii-sm);
      --radii-l1: var(--radii-md);
    }
    &[data-radius="md"] {
      --radii-l3: var(--radii-sm);
      --radii-l2: var(--radii-md);
      --radii-l1: var(--radii-lg);
    }
    &[data-radius="lg"] {
      --radii-l3: var(--radii-md);
      --radii-l2: var(--radii-lg);
      --radii-l1: var(--radii-xl);
    }
    &[data-radius="xl"] {
      --radii-l3: var(--radii-lg);
      --radii-l2: var(--radii-xl);
      --radii-l1: var(--radii-2xl);
    }
    &[data-radius="2xl"] {
      --radii-l3: var(--radii-xl);
      --radii-l2: var(--radii-2xl);
      --radii-l1: var(--radii-3xl);
    }
  }
}`}</style>
  )
}
