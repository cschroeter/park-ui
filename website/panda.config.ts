import { defineConfig } from '@pandacss/dev'
import presetPark from '@park-ui/presets'
import typographyPreset from 'pandacss-preset-typography'

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/dev/presets',
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
        fontFamily: 'Roboto Mono Variable!',
      },
      pre: {
        overflowX: 'auto',
        fontSize: '14px !important',
        '--astro-code-color-text': 'colors.fg.emphasized',
        '--astro-code-color-background': 'transparent',
        '--astro-code-token-constant': 'colors.fg.emphasized',
        '--astro-code-token-string': 'colors.fg.subtle',
        '--astro-code-token-comment': 'colors.fg.subtle',
        '--astro-code-token-keyword': 'colors.fg.subtle',
        '--astro-code-token-parameter': 'colors.fg.subtle',
        '--astro-code-token-function': 'colors.fg.emphasized',
        '--astro-code-token-string-expression': 'colors.fg.subtle',
        '--astro-code-token-punctuation': 'colors.fg.subtle',
        '--astro-code-token-link': 'colors.fg.subtle',
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
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          bg: {
            code: {
              // TODO takl with @phil
              value: { base: '{colors.gray-palette.50}', _dark: '{colors.gray-palette.900}' },
            },
          },
        },
      },
    },
  },
})
