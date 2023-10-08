import { defineConfig, defineSemanticTokens } from '@pandacss/dev'
import presetPark, { accentColors, borderRadii, grayColors } from '@park-ui/presets'
import typographyPreset from 'pandacss-preset-typography'
import { match } from 'ts-pattern'

const createConditions = () => {
  const grayConditions = grayColors.reduce((acc, color) => {
    acc[`${color}Gray`] = `[data-gray-color=${color}] &`
    return acc
  }, {})
  const accentConditions = accentColors.reduce((acc, color) => {
    acc[`${color}Accent`] = `[data-accent-color=${color}] &`
    return acc
  }, {})

  const radiiConditions = borderRadii.reduce((acc, radius) => {
    acc[`${radius}Radius`] = `[data-radius='${radius}'] &`
    return acc
  }, {})

  return {
    ...grayConditions,
    ...accentConditions,
    ...radiiConditions,
    darkFg:
      '[data-accent-color=yellow] &, [data-accent-color=mint] &, [data-accent-color=sky] &, [data-accent-color=lime] &, [data-accent-color=amber] &',
  }
}

const createSemanticColorTokens = () => {
  const gray = Array.from({ length: 12 }, (_, i) => i + 1).reduce(
    (acc, scale) => ({
      ...acc,
      [scale]: {
        value: {
          ...grayColors.reduce((acc, color) => {
            acc[`_${color}Gray`] = `{colors.${color}.${scale}}`
            return acc
          }, {}),
        },
      },
      ['a' + scale]: {
        value: {
          ...grayColors.reduce((acc, color) => {
            acc[`_${color}Gray`] = `{colors.${color}.a${scale}}`
            return acc
          }, {}),
        },
      },
    }),
    {},
  )
  const accent = Array.from({ length: 12 }, (_, i) => i + 1).reduce(
    (acc, scale) => ({
      ...acc,
      [scale]: {
        value: {
          ...accentColors.reduce((acc, color) => {
            acc[`_${color}Accent`] = `{colors.${color}.${scale}}`
            return acc
          }, {}),
        },
      },
      ['a' + scale]: {
        value: {
          ...accentColors.reduce((acc, color) => {
            acc[`_${color}Accent`] = `{colors.${color}.a${scale}}`
            return acc
          }, {}),
        },
      },
    }),
    {},
  )

  return {
    gray,
    accent: {
      ...accent,
      ...{
        fg: {
          value: {
            base: '{colors.white}',
            _darkFg: '{colors.black}',
            _neutralAccent: { value: { base: '{colors.white}', _dark: '{colors.black}' } },
          },
        },
        default: {
          value: {
            base: '{colors.accent.9}',
            _neutralAccent: { value: '{colors.black}', _dark: '{colors.white}' },
          },
        },
        emphasized: {
          value: {
            base: '{colors.accent.10}',
            _neutralAccent: { value: '{colors.gray.12}' },
          },
        },
      },
    },
  }
}

const createSemanticRadiiTokens = () => {
  return defineSemanticTokens.radii({
    l1: {
      value: borderRadii.reduce((acc, radius) => {
        acc[`_${radius}Radius`] = match(radius)
          .with('none', () => '{radii.none}')
          .with('xs', () => '{radii.2xs}')
          .with('sm', () => '{radii.xs}')
          .with('md', () => '{radii.sm}')
          .with('lg', () => '{radii.md}')
          .with('xl', () => '{radii.lg}')
          .with('2xl', () => '{radii.xl}')
          .exhaustive()
        return acc
      }, {}),
    },
    l2: {
      value: borderRadii.reduce((acc, radius) => {
        acc[`_${radius}Radius`] = match(radius)
          .with('none', () => '{radii.none}')
          .with('xs', () => '{radii.xs}')
          .with('sm', () => '{radii.sm}')
          .with('md', () => '{radii.md}')
          .with('lg', () => '{radii.lg}')
          .with('xl', () => '{radii.xl}')
          .with('2xl', () => '{radii.2xl}')
          .exhaustive()
        return acc
      }, {}),
    },
    l3: {
      value: borderRadii.reduce((acc, radius) => {
        acc[`_${radius}Radius`] = match(radius)
          .with('none', () => '{radii.none}')
          .with('xs', () => '{radii.sm}')
          .with('sm', () => '{radii.md}')
          .with('md', () => '{radii.lg}')
          .with('lg', () => '{radii.xl}')
          .with('xl', () => '{radii.2xl}')
          .with('2xl', () => '{radii.3xl}')
          .exhaustive()
        return acc
      }, {}),
    },
  })
}

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    presetPark(),
    typographyPreset({
      recipe: {
        sizes: ['base'],
        notProse: true,
      },
    }),
  ],
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
  staticCss: {
    recipes: {
      avatar: [{ size: ['*'] }],
      badge: [{ variant: ['*'], size: ['*'] }],
      button: [{ variant: ['*'], size: ['*'] }],
      checkbox: [{ size: ['*'] }],
      code: [{ variant: ['*'], size: ['*'] }],
      drawer: [{ placement: ['*'] }],
      icon: [{ size: ['*'] }],
      input: [{ size: ['*'] }],
      menu: [{ size: ['*'] }],
      numberInput: [{ size: ['*'] }],
      radioGroup: [{ size: ['*'] }],
      radioButtonGroup: [{ size: ['*'], variant: ['*'] }],
      ratingGroup: [{ size: ['*'] }],
      segmentGroup: [{ size: ['*'] }],
      select: [{ size: ['*'], variant: ['*'] }],
      switchRecipe: [{ size: ['*'] }],
      table: [{ size: ['*'], variant: ['*'] }],
      tabs: [{ size: ['*'], variant: ['*'] }],
      toggleGroup: [{ size: ['*'], variant: ['*'] }],
    },
    css: [
      {
        properties: {
          fontWeight: ['*'],
          textStyle: ['*'],
        },
      },
    ],
  },
  globalCss: {
    extend: {
      html: {
        scrollPaddingTop: '6rem',
        minHeight: '100%',
      },
      'html, body': {
        display: 'flex',
        flexDirection: 'column',
        height: 'unset',
        fontFamily: 'body',
      },
      'body, main': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
      },
      '&:root': {
        '--font-jakarta': 'Plus Jakarta Sans Variable',
        '--font-roboto-mono': 'Roboto Mono Variable',
        '--font-inter': 'Inter Variable',
        '--font-outfit': 'Outfit Variable',
        '--font-raleway': 'Raleway Variable',
      },
      article: {
        '--colors-prose-body': 'colors.fg.muted',
        '--colors-prose-heading': 'colors.fg.default',
        '--colors-prose-bold': 'colors.fg.default',
        '--colors-prose-link': 'colors.fg.default',
        '--colors-prose-code': 'colors.fg.default',
      },
      'pre, code': {
        fontFamily: 'var(--font-code)',
      },
      pre: {
        overflowX: 'auto',
        fontSize: '14px !important',
        '--astro-code-color-text': 'colors.grayPalette.200',
        '--astro-code-color-background': 'colors.grayPalette.900',
        '--astro-code-token-constant': 'colors.grayPalette.200',
        '--astro-code-token-string': 'colors.grayPalette.400',
        '--astro-code-token-comment': 'colors.grayPalette.400',
        '--astro-code-token-keyword': 'colors.grayPalette.400',
        '--astro-code-token-parameter': 'colors.grayPalette.400',
        '--astro-code-token-function': 'white',
        '--astro-code-token-string-expression': 'colors.grayPalette.400',
        '--astro-code-token-punctuation': 'colors.grayPalette.400',
        '--astro-code-token-link': 'colors.grayPalette.400',
        '& code': {
          fontFamily: 'inherit',
        },
      },
    },
  },
  patterns: {
    extend: {
      container: {
        // @ts-ignore
        transform(props: StyledPprops) {
          return {
            position: 'relative',
            width: '100%',
            mx: 'auto',
            px: { base: '4', md: '6' },
            ...props,
          }
        },
      },
    },
  },
  conditions: {
    extend: createConditions(),
  },
  theme: {
    extend: {
      tokens: {
        fonts: {
          body: { value: 'var(--font-jakarta), sans-serif' },
          inter: { value: 'var(--font-inter), sans-serif' },
          jakarta: { value: 'var(--font-jakarta), sans-serif' },
          outfit: { value: 'var(--font-outfit), sans-serif' },
          raleway: { value: 'var(--font-raleway), sans-serif' },
          robotoMono: { value: 'var(--font-roboto-mono), monospace' },
        },
      },
      semanticTokens: {
        colors: createSemanticColorTokens(),
        radii: createSemanticRadiiTokens(),
        fonts: {
          body: { value: { base: '{fonts.jakarta}' } },
        },
      },
    },
  },
})
