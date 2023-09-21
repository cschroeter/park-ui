import { defineConfig } from '@pandacss/dev'
import presetPark from '@park-ui/presets'
import type { ContainerProperties } from 'styled-system/patterns/container'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', presetPark],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system',
  staticCss: {
    recipes: {
      avatar: [{ size: ['*'] }],
      article: [{ size: ['*'] }],
      badge: [{ variant: ['*'], size: ['*'] }],
      button: [{ variant: ['*'], size: ['*'] }],
      carousel: [{ size: ['*'] }],
      checkbox: [{ size: ['*'] }],
      code: [{ size: ['*'], variant: ['*'] }],
      drawer: [{ placement: ['*'] }],
      icon: [{ size: ['*'] }],
      input: [{ size: ['*'] }],
      label: [{ size: ['*'] }],
      menu: [{ size: ['*'] }],
      numberInput: [{ size: ['*'] }],
      radioGroup: [{ size: ['*'] }],
      radioButtonGroup: [{ size: ['*'] }],
      ratingGroup: [{ size: ['*'] }],
      segmentGroup: [{ size: ['*'] }],
      select: [{ size: ['*'], variant: ['*'] }],
      switchRecipe: [{ size: ['*'] }],
      tabs: [{ size: ['*'] }],
      table: [{ size: ['*'], variant: ['*'] }],
      textarea: [{ size: ['*'] }],
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
      '#__next, #root, body': {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
      },
      '.tiptap': {
        '&:focus': {
          outline: 'none',
        },
      },
      pre: {
        fontFamily: 'var(--font-code)',
        overflowX: 'auto',
        fontSize: '14px !important',
        '--shiki-color-text': 'white',
        '--shiki-color-background': 'colors.grayPalette.400',
        '--shiki-token-constant': 'colors.grayPalette.400',
        '--shiki-token-string': 'colors.grayPalette.400',
        '--shiki-token-comment': 'colors.grayPalette.400',
        '--shiki-token-keyword': 'colors.grayPalette.400',
        '--shiki-token-parameter': 'colors.grayPalette.400',
        '--shiki-token-function': 'white',
        '--shiki-token-string-expression': 'colors.grayPalette.400',
        '--shiki-token-punctuation': 'colors.grayPalette.400',
        '--shiki-token-link': 'colors.grayPalette.400',
        '& code': {
          fontFamily: 'inherit',
        },
      },
    },
  },
  patterns: {
    extend: {
      container: {
        transform(props: ContainerProperties) {
          return {
            position: 'relative',
            width: '100%',
            maxWidth: '7xl',
            mx: 'auto',
            px: { base: '4', md: '6' },
            ...props,
          }
        },
      },
    },
  },
})
