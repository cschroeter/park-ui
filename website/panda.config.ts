import { defineConfig } from '@pandacss/dev'
import { plugin, preset } from '@park-ui/preset'
import typographyPreset from 'pandacss-preset-typography'

export default defineConfig({
  presets: [
    preset,
    typographyPreset({ recipe: { notProse: true, semanticTokens: { defaults: false } } }),
  ],
  preflight: true,
  include: ['./src/**/*.{ts,tsx}', '../components/react/src/examples/**/*.{ts,tsx}'],
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
      semanticTokens: {
        colors: {
          prose: {
            heading: { value: '{colors.gray.12}' },
            body: { value: '{colors.gray.11}' },
            link: { value: '{colors.gray.12}' },
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
        fontWeight: 'semibold!',
      },
      pre: {
        background: 'transparent!',
        overflowX: 'auto',
        fontSize: '13px',
      },
      code: {
        fontFamily: 'code',
        '::selection': {
          bg: 'gray.4',
        },
      },
    },
  },
})
