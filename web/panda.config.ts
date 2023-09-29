import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', '@park-ui/presets'],
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
  staticCss: {
    recipes: {
      accordion: [{ variant: ['*'], size: ['*'] }],
      avatar: [{ variant: ['*'], size: ['*'] }],
      button: [{ variant: ['*'], size: ['*'] }],
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
        '--font-code': 'Fira Code Variable',
        '--font-inter': 'Inter Variable',
        '--font-outfit': 'Outfit Variable',
        '--font-raleway': 'Raleway Variable',
      },
      'pre, code': {
        fontFamily: 'Fira Code Variable!',
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
})
