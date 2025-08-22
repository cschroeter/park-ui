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
      html: {
        scrollPaddingTop: '5rem',
        scrollBehavior: 'smooth',
      },
      body: {
        fontFamily: 'body',
      },
      pre: {
        background: 'transparent!',
        overflowX: 'auto',
        fontSize: '13px',
      },
    },
  },
})
