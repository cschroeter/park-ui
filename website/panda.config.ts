import { defineConfig } from '@pandacss/dev'
import { plugin, preset } from '@park-ui/preset'

export default defineConfig({
  presets: [preset],
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
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
})
