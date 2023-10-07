import { defineConfig } from '@pandacss/dev'
import presetPark from '@park-ui/presets'
import typographyPreset from 'pandacss-preset-typography'

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    presetPark,
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
      accordion: [{}],
      alert: [{}],
      avatar: [{ size: ['*'] }],
      badge: [{ variant: ['*'], size: ['*'] }],
      button: [{ variant: ['*'], size: ['*'] }],
      card: [{}],
      checkbox: [{ size: ['*'] }],
      code: [{ variant: ['*'], size: ['*'] }],
      drawer: [{ placement: ['*'] }],
      hoverCard: [{}],
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
      textarea: [{ size: ['*'], variant: ['*'] }],
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
      },
      'body, main': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
      },
      '&:root': {
        '--font-body': 'Plus Jakarta Sans Variable',
        '--font-code': 'Roboto Mono Variable',
        '--font-inter': 'Inter Variable',
        '--font-outfit': 'Outfit Variable',
        '--font-raleway': 'Raleway Variable',
      },
      article: {
        '--colors-prose-body': 'colors.fg.muted',
        '--colors-prose-heading': 'colors.fg.default',
        '--colors-prose-bold': 'colors.fg.emphasized',
        '--colors-prose-link': 'colors.fg.emphasized',
        '--colors-prose-code': 'colors.fg.emphasized',
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
})
