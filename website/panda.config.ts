import { defineConfig, defineTextStyles } from '@pandacss/dev'
import { plugin, preset } from '@park-ui/preset'
import typographyPreset from 'pandacss-preset-typography'

// @ts-expect-error
const textStyles = defineTextStyles({
  header: {
    value: {
      color: 'fg.muted',
      textTransform: 'uppercase',
      fontFamily: 'code',
      textStyle: 'xs',
      fontWeight: 'medium',
      letterSpacing: 'widest',
    },
  },
})

export default defineConfig({
  presets: [
    preset,
    typographyPreset({ recipe: { notProse: true, semanticTokens: { defaults: false } } }),
  ],
  preflight: true,
  include: ['./src/**/*.{ts,tsx}', '../components/react/src/**/*.{ts,tsx}'],
  jsxFramework: 'react',
  plugins: [plugin],
  theme: {
    extend: {
      tokens: {
        fonts: {
          body: { value: 'var(--font-outfit), sans-serif' },
          code: { value: 'var(--font-roboto-mono), monospace' },
        },
      },
      textStyles,
      semanticTokens: {
        colors: {
          prose: {
            heading: { value: '{colors.fg.default}' },
            body: { value: '{colors.fg.default}' },
            link: { value: '{colors.fg.default}' },
            bold: { value: '{colors.fg.default}' },
            'td-border': { value: '{colors.border}' },
            'th-border': { value: '{colors.border}' },
          },
        },
      },
    },
  },
  globalCss: {
    extend: {
      html: {
        scrollPaddingTop: '5rem',
        scrollBehavior: 'smooth',
      },
      body: {
        fontFamily: 'body',
      },
      h2: {
        fontWeight: 'semibold',
      },
      pre: {
        background: 'transparent!',
        fontSize: '13px',
        overflowX: 'auto',
        whiteSpace: 'pre-wrap',
        '::selection': {
          bg: 'gray.5',
        },
      },
      code: {
        fontFamily: 'code',
      },
      'ul li::marker': {
        color: 'colorPalette.solid',
      },
      '.prose p, .prose li': {
        color: 'fg.muted',
      },
    },
  },
  staticCss: {
    recipes: '*',
    css: [
      {
        properties: {
          boxShadow: ['*'],
          height: ['*'],
          textStyles: ['*'],
          width: ['*'],
        },
      },
    ],
  },
})
