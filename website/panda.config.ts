import { createPreset } from '@dcousineau/park-ui-panda-preset'
import amber from '@dcousineau/park-ui-panda-preset/colors/amber'
import blue from '@dcousineau/park-ui-panda-preset/colors/blue'
import bronze from '@dcousineau/park-ui-panda-preset/colors/bronze'
import brown from '@dcousineau/park-ui-panda-preset/colors/brown'
import crimson from '@dcousineau/park-ui-panda-preset/colors/crimson'
import cyan from '@dcousineau/park-ui-panda-preset/colors/cyan'
import gold from '@dcousineau/park-ui-panda-preset/colors/gold'
import grass from '@dcousineau/park-ui-panda-preset/colors/grass'
import green from '@dcousineau/park-ui-panda-preset/colors/green'
import indigo from '@dcousineau/park-ui-panda-preset/colors/indigo'
import iris from '@dcousineau/park-ui-panda-preset/colors/iris'
import jade from '@dcousineau/park-ui-panda-preset/colors/jade'
import lime from '@dcousineau/park-ui-panda-preset/colors/lime'
import mauve from '@dcousineau/park-ui-panda-preset/colors/mauve'
import mint from '@dcousineau/park-ui-panda-preset/colors/mint'
import neutral from '@dcousineau/park-ui-panda-preset/colors/neutral'
import olive from '@dcousineau/park-ui-panda-preset/colors/olive'
import orange from '@dcousineau/park-ui-panda-preset/colors/orange'
import pink from '@dcousineau/park-ui-panda-preset/colors/pink'
import plum from '@dcousineau/park-ui-panda-preset/colors/plum'
import purple from '@dcousineau/park-ui-panda-preset/colors/purple'
import red from '@dcousineau/park-ui-panda-preset/colors/red'
import ruby from '@dcousineau/park-ui-panda-preset/colors/ruby'
import sage from '@dcousineau/park-ui-panda-preset/colors/sage'
import sand from '@dcousineau/park-ui-panda-preset/colors/sand'
import sky from '@dcousineau/park-ui-panda-preset/colors/sky'
import slate from '@dcousineau/park-ui-panda-preset/colors/slate'
import teal from '@dcousineau/park-ui-panda-preset/colors/teal'
import tomato from '@dcousineau/park-ui-panda-preset/colors/tomato'
import violet from '@dcousineau/park-ui-panda-preset/colors/violet'
import yellow from '@dcousineau/park-ui-panda-preset/colors/yellow'
import { defineConfig } from '@pandacss/dev'

import typographyPreset from 'pandacss-preset-typography'

export default defineConfig({
  validation: 'none',
  presets: [
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
  jsxFramework: 'react',
  include: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/app/**/*.{ts,tsx,js,jsx}'],
  exclude: [],
  outdir: 'styled-system',
  patterns: {
    extend: {
      container: {
        transform(props: Record<string, unknown>) {
          return {
            position: 'relative',
            width: '100%',
            maxW: '8xl',
            mx: 'auto',
            px: { base: '4', md: '8' },
            ...props,
          }
        },
      },
    },
  },
  globalCss: {
    extend: {
      html: {
        scrollPaddingTop: '5rem',
        scrollBehavior: 'smooth',
        minHeight: '100%',
        colorPalette: 'accent',
      },
      'html, body': {
        display: 'flex',
        flexDirection: 'column',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
        fontFamily: 'body',
      },
      pre: {
        background: 'transparent!',
        overflowX: 'auto',
        fontSize: '13px !important',
      },
      blockquote: {
        fontStyle: 'normal!',
        fontWeight: 'normal!',
      },
      strong: {
        color: 'fg.default!',
      },
      code: {
        fontFamily: 'code',
        '::selection': {
          bg: 'gray.dark.a4',
        },
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
  staticCss: {
    recipes: '*',
    css: [
      {
        properties: {
          borderLeftColor: ['bg.emphasized'],
          borderBottomColor: ['bg.emphasized'],
          borderWidth: ['4px'],
          boxShadow: ['*'],
          color: ['*'],
          fontWeight: ['*'],
          textStyle: ['*'],
        },
      },
    ],
  },
  theme: {
    extend: {
      tokens: {
        colors: {
          amber: amber.tokens,
          blue: blue.tokens,
          bronze: bronze.tokens,
          brown: brown.tokens,
          crimson: crimson.tokens,
          cyan: cyan.tokens,
          gold: gold.tokens,
          grass: grass.tokens,
          green: green.tokens,
          indigo: indigo.tokens,
          iris: iris.tokens,
          jade: jade.tokens,
          lime: lime.tokens,
          mauve: mauve.tokens,
          mint: mint.tokens,
          neutral: neutral.tokens,
          olive: olive.tokens,
          orange: orange.tokens,
          pink: pink.tokens,
          plum: plum.tokens,
          purple: purple.tokens,
          red: red.tokens,
          ruby: ruby.tokens,
          sage: sage.tokens,
          sand: sand.tokens,
          sky: sky.tokens,
          slate: slate.tokens,
          teal: teal.tokens,
          tomato: tomato.tokens,
          violet: violet.tokens,
          yellow: yellow.tokens,
        },
        fonts: {
          body: { value: 'var(--font-outfit), sans-serif' },
          code: { value: 'var(--font-roboto-mono), monospace' },
        },
      },
      semanticTokens: {
        colors: {
          amber: amber.semanticTokens,
          blue: blue.semanticTokens,
          bronze: bronze.semanticTokens,
          brown: brown.semanticTokens,
          crimson: crimson.semanticTokens,
          cyan: cyan.semanticTokens,
          gold: gold.semanticTokens,
          grass: grass.semanticTokens,
          green: green.semanticTokens,
          indigo: indigo.semanticTokens,
          iris: iris.semanticTokens,
          jade: jade.semanticTokens,
          lime: lime.semanticTokens,
          mauve: mauve.semanticTokens,
          mint: mint.semanticTokens,
          neutral: neutral.semanticTokens,
          olive: olive.semanticTokens,
          orange: orange.semanticTokens,
          pink: pink.semanticTokens,
          plum: plum.semanticTokens,
          purple: purple.semanticTokens,
          red: red.semanticTokens,
          ruby: ruby.semanticTokens,
          sage: sage.semanticTokens,
          sand: sand.semanticTokens,
          sky: sky.semanticTokens,
          slate: slate.semanticTokens,
          teal: teal.semanticTokens,
          tomato: tomato.semanticTokens,
          violet: violet.semanticTokens,
          yellow: yellow.semanticTokens,
        },
        radii: {
          l1: { value: '{radii.xs}' },
          l2: { value: '{radii.sm}' },
          l3: { value: '{radii.md}' },
        },
      },
      slotRecipes: {
        layout: {
          className: 'layout',
          slots: ['aside', 'main'],
          base: {
            aside: {
              bg: {
                base: 'gray.2',
                _dark: '#0e0e0e',
              },
              borderRightWidth: '1px',
              position: 'fixed',
              top: '0',
              bottom: '0',
              display: { base: 'none', md: 'block' },
              ps: 'max(32px, calc((100vw - (1440px - 64px)) / 2))',
              pe: '8',
              minWidth: '272px',
              overflow: 'auto',
              width: {
                base: '272px',
                lg: 'calc((100vw - (1440px - 64px)) / 2 + 272px - 32px)',
              },
              zIndex: 'overlay',
            },
            main: {
              minWidth: '0',
              flex: '1',
              ps: {
                base: '0',
                md: 'max(calc((100vw - 1440px) / 2 + 272px), 272px)',
              },
              pe: 'calc((100vw - 1440px) / 2)',
            },
          },
        },
      },
    },
  },
})
