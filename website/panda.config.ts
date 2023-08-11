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
      badge: [{ variant: ['*'], size: ['*'] }],
      button: [{ variant: ['*'], size: ['*'] }],
      carousel: [{ size: ['*'] }],
      checkbox: [{ size: ['*'] }],
      drawer: [{ placement: ['*'] }],
      input: [{ size: ['*'] }],
      label: [{ size: ['*'] }],
      menu: [{ size: ['*'] }],
      radioGroup: [{ size: ['*'] }],
      radioButtonGroup: [{ size: ['*'] }],
      ratingGroup: [{ size: ['*'] }],
      segmentGroup: [{ size: ['*'] }],
      switchRecipe: [{ size: ['*'] }],
      tabs: [{ size: ['*'] }],
      textarea: [{ size: ['*'] }],
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
      pre: {
        fontFamily: 'var(--font-code)',
        overflowX: 'auto',
        fontSize: '14px !important',
        '--shiki-color-text': 'white',
        '--shiki-color-background': 'colors.neutral.400',
        '--shiki-token-constant': 'colors.neutral.400',
        '--shiki-token-string': 'colors.neutral.400',
        '--shiki-token-comment': 'colors.neutral.400',
        '--shiki-token-keyword': 'colors.neutral.400',
        '--shiki-token-parameter': 'colors.neutral.400',
        '--shiki-token-function': 'white',
        '--shiki-token-string-expression': 'colors.neutral.400',
        '--shiki-token-punctuation': 'colors.neutral.400',
        '--shiki-token-link': 'colors.neutral.400',
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
  // theme: {
  //   extend: {
  //     semanticTokens: {
  //       colors: {
  //         accent: {
  //           default: { value: { base: '{colors.purple.500}', _dark: '{colors.purple.200}' } },
  //           emphasized: { value: { base: '{colors.purple.600}', _dark: '{colors.purple.300}' } },
  //           fg: { value: { base: '{colors.white}', _dark: '{colors.black}' } },
  //         },
  //         border: {
  //           accent: { value: { base: '{colors.purple.500}', _dark: '{colors.purple.200}' } },
  //         },
  //       },
  //     },
  //   },
  // },
})
