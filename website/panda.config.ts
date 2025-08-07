import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/preset'
import typographyPreset from 'pandacss-preset-typography'
import neutral from '@park-ui/preset/colors/neutral'

export default defineConfig({
  presets: [
    '@pandacss/preset-panda',
    createPreset({ accentColor: neutral, grayColor: neutral, radius: 'sm' }),
    typographyPreset({
      recipe: {
        sizes: ['base'],
        notProse: {
          className: 'not-prose',
        },
      },
    }),
  ],
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        fonts: {
          body: { value: 'var(--font-outfit), sans-serif' },
          code: { value: 'var(--font-roboto-mono), monospace' },
        },
      },
    },
  },

  globalCss: {
    extend: {
      body: {
        fontFamily: 'body',
      },
      article: {
        '--colors-prose-body': 'colors.fg.muted',
        '--colors-prose-heading': 'colors.fg.default',
        '--colors-prose-bold': 'colors.fg.default',
        '--colors-prose-link': 'colors.fg.default',
        '--colors-prose-code': 'colors.fg.default',
        '--colors-prose-td-border': 'colors.border.subtle',
        '--colors-prose-th-border': 'colors.border.subtle',
        '--colors-prose-hr-border': 'colors.border.subtle',
        '--colors-prose-quote-border': 'colors.accent.default',
      },
    },
  },

  importMap: '@park-ui/styled-system',
  jsxFramework: 'react',

  staticCss: {
    recipes: '*',
  },

  outdir: '../packages/styled-system/dist',
})
