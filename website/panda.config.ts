import { defineConfig, defineTextStyles } from '@pandacss/dev'
import { plugin, preset } from '@park-ui/preset'
import typographyPreset from 'pandacss-preset-typography'
import { createAccentColorSelectors } from '~/lib/theme'

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
            heading: { value: '{colors.gray.12}' },
            body: { value: '{colors.gray.11}' },
            link: { value: '{colors.gray.12}' },
            bold: { value: '{colors.gray.12}' },
            'td-border': { value: '{colors.gray.4}' },
            'th-border': { value: '{colors.gray.4}' },
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
        ...createAccentColorSelectors(),
      },
      body: {
        fontFamily: 'body',
      },
      h2: {
        fontWeight: 'semibold!',
      },
      pre: {
        background: 'transparent!',
        overflowX: 'auto',
        fontSize: '13px',
        '::selection': {
          bg: 'gray.5',
        },
      },
      code: {
        fontFamily: 'code',
      },
      'ul li::marker': {
        color: 'colorPalette.default',
      },
    },
  },
})
