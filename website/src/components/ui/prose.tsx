'use client'

import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'

export type ProseProps = ComponentProps<typeof Prose>

export const Prose = styled('article', {
  base: {
    color: 'fg.muted',
    '& h1': {
      color: 'fg.default',
      fontWeight: 'semibold',
    },
    '& h2': {
      color: 'fg.default',
      fontWeight: 'semibold',
    },
    '& h3': {
      color: 'fg.default',
      fontWeight: 'semibold',
    },
    '& h4': {
      color: 'fg.default',
      fontWeight: 'semibold',
    },
    '& strong': {
      color: 'fg.default',
      fontWeight: 'medium',
    },
    '& :first-child': {
      marginTop: '0',
    },
    '& :last-child': {
      marginBottom: '0',
    },
    '& hr + p': {
      marginTop: '0',
    },
    '& h2 + p': {
      marginTop: '0',
    },
    '& h3 + p': {
      marginTop: '0',
    },
    '& h4 + p': {
      marginTop: '0',
    },
    '& ul': {
      listStyleType: 'disc',
    },
    '& ul > li': {
      _marker: {
        color: 'colorPalette.default',
      },
    },
    '& ol': {
      listStyleType: 'decimal',
    },
    '& ol > li': {
      _marker: {
        color: 'colorPalette.default',
        fontWeight: 'medium',
      },
    },
    '& a': {
      color: 'fg.default',
      display: 'inline-flex',
      fontWeight: 'medium',
      outline: 'none',
      textDecoration: 'underline',
      textDecorationColor: 'colorPalette.default',
      textDecorationThickness: '1px',
      textUnderlineOffset: '2px',
      transitionDuration: 'normal',
      transitionProperty: 'text-decoration',
      transitionTimingFunction: 'default',
      _hover: {
        textDecorationThickness: '2px',
      },
      _focusVisible: {
        textDecorationThickness: '2px',
      },
    },
    '& blockquote': {
      borderColor: 'accent.default',
      borderLeftWidth: '2px',
      color: 'fg.default',
      display: 'flex',
      flexDirection: 'column',
      fontStyle: 'italic',
      fontWeight: 'medium',
      ps: '4',
      gap: '2',
      textStyle: 'xl',
    },
    '& blockquote p': {
      _before: {
        content: '"“"',
      },
      _after: {
        content: '"”"',
      },
    },
    '& blockquote footer': {
      color: 'fg.muted',
      fontStyle: 'normal',
      fontWeight: 'normal',
      textStyle: 'md',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      md: {
        textStyle: 'md',
        '& p': {
          mb: '4',
        },
        '& h1': {
          textStyle: '3xl',
          mt: '16',
          mb: '6',
        },
        '& h2': {
          textStyle: '2xl',
          mt: '9',
          mb: '4',
        },
        '& h3': {
          textStyle: 'xl',
          mt: '9',
          mb: '3',
        },
        '& h4': {
          textStyle: 'lg',
          mt: '8',
          mb: '2',
        },
        '& ol': {
          my: '4',
          paddingInlineStart: '6',
        },
        '& ol > li': {
          paddingInlineStart: '1',
        },
        '& ul': {
          my: '4',
          paddingInlineStart: '6',
        },
        '& ul > li': {
          paddingInlineStart: '1',
        },
        '& li': {
          my: '2',
        },
        '& blockquote': {
          my: '8',
        },
      },
    },
  },
})
