import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'
import typographyPreset from 'pandacss-preset-typography'

export default defineConfig({
  preflight: true,
  lightningcss: true,
  presets: [
    '@pandacss/preset-base',
    createPreset({
      additionalColors: ['*'],
    }),
    typographyPreset({
      recipe: {
        sizes: ['base'],
        notProse: true,
      },
    }),
  ],
  validation: 'none',
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
  staticCss: {
    recipes: '*',
    css: [
      {
        properties: {
          backgroundColor: ['*'],
          borderColor: ['*'],
          boxShadow: ['*'],
          color: ['*'],
          colorPalette: ['red'],
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
        scrollBehavior: 'smooth',
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
        '--colors-prose-td-border': 'colors.border.subtle',
        '--colors-prose-th-border': 'colors.border.subtle',
      },
      'pre, code': {
        fontFamily: 'robotoMono',
      },
      pre: {
        overflowX: 'auto',
        fontSize: '14px !important',
        '--astro-code-color-text': 'colors.gray.dark.12',
        '--astro-code-color-background': 'colors.gray.dark.2',
        '--astro-code-token-constant': 'colors.gray.dark.12',
        '--astro-code-token-string': 'colors.gray.dark.11',
        '--astro-code-token-comment': 'colors.gray.dark.11',
        '--astro-code-token-keyword': 'colors.gray.dark.11',
        '--astro-code-token-parameter': 'colors.gray.dark.11',
        '--astro-code-token-function': 'colors.white',
        '--astro-code-token-string-expression': 'colors.gray.dark.11',
        '--astro-code-token-punctuation': 'colors.gray.dark.11',
        '--astro-code-token-link': 'colors.gray.dark.11',
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
      tokens: {
        fonts: {
          body: { value: 'var(--font-jakarta), sans-serif' },
          code: { value: 'var(--font-roboto-mono), monospace' },

          inter: { value: 'var(--font-inter), sans-serif' },
          jakarta: { value: 'var(--font-jakarta), sans-serif' },
          outfit: { value: 'var(--font-outfit), sans-serif' },
          raleway: { value: 'var(--font-raleway), sans-serif' },
          robotoMono: { value: 'var(--font-roboto-mono), monospace' },
        },
      },
      semanticTokens: {
        fonts: {
          body: { value: { base: '{fonts.jakarta}' } },
        },
        colors: {
          bg: {
            surface: { value: { base: '{colors.white}', _dark: '{colors.gray.1}' } },
          },
        },
      },
    },
  },
})
