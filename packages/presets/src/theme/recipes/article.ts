import { defineRecipe } from '@pandacss/dev'

export const article = defineRecipe({
  className: 'article',
  base: {
    maxWidth: '65ch',
    '& :first-child': {
      mt: '0!',
    },
    '& :where(h1, h2)': {
      fontWeight: 'bold',
    },
    '& :where(h3)': {
      fontWeight: 'semibold',
    },
    '& :where(ul)': {
      listStyleType: 'disc',
    },
    '& :where(a)': {
      color: 'fg.emphasized',
      fontWeight: 'medium',
      textDecoration: 'underline',
      textDecorationColor: 'accent.default',
      textUnderlineOffset: '0.2em',
    },
    '& :where(p, li)': {
      color: 'fg.muted',
    },
    '& :where(li::marker)': {
      color: 'bg.emphasized',
    },
    '& :where(strong)': {
      fontWeight: 'semibold',
      color: 'fg.default',
    },
    '& :where(code):not(:where(pre code))': {
      alignItems: 'center',
      bg: 'bg.subtle',
      borderRadius: 'l2',
      borderWidth: '1px',
      display: 'inline-flex',
      fontFamily: 'var(--font-code)',
      fontWeight: 'medium',
    },
    '& :where(pre)': {
      backgroundColor: 'bg.subtle',
      borderRadius: 'l3',
      borderWidth: '1px',
      overflowX: 'auto',
    },
    '& :where(li > p)': {
      margin: '0!',
    },
    '& :where(blockquote)': {
      borderLeftWidth: '4px',
    },
    '& :where(blockquote > p)': {
      color: 'fg.default',
      fontWeight: 'medium',
      _first: {
        fontStyle: 'italic',
        _before: {
          content: 'open-quote',
        },
        _after: {
          content: 'close-quote',
        },
      },
    },
    '& :where(h1 + *)': {
      marginTop: '0!',
    },
    '& :where(h2 + *)': {
      marginTop: '0!',
    },
    '& :where(h3 + *)': {
      marginTop: '0!',
    },
    '& :where(hr + *)': {
      marginTop: '0!',
    },
  },
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      sm: {
        '& :where(h1)': {
          fontSize: '3xl',
          lineHeight: '2.25rem',
          mb: '6',
        },
        '& :where(h2)': {
          fontSize: 'xl',
          lineHeight: '1.75rem',
          mb: '4',
          mt: '8',
        },
        '& :where(h3)': {
          fontSize: 'lg',
          lineHeight: '1.75rem',
          mb: '2',
          mt: '7',
        },
        '& :where(p)': {
          fontSize: 'sm',
          lineHeight: '1.5rem',
          my: '4',
        },
        '& :where(hr)': {
          my: '10',
        },
        '& :where(ul)': {
          ps: '5',
        },
        '& :where(li)': {
          fontSize: 'sm',
          lineHeight: '1.5rem',
          my: '1',
        },
        '& :where(code)': {
          height: '5',
          px: '0.5',
          textStyle: 'xs',
        },
        '& :where(pre)': {
          my: '5',
          px: '3',
          py: '2',
        },
        '& :where(blockquote)': {
          my: '4',
          ps: '4',
        },
        '& :where(h1 + p)': {
          color: 'fg.emphasized',
          fontSize: 'lg',
          lineHeight: '1.75rem',
          mb: '4',
        },
      },
      md: {
        '& :where(h1)': {
          fontSize: '4xl',
          letterSpacing: '-0.02em',
          lineHeight: '2.5rem',
          mb: '8',
        },
        '& :where(h2)': {
          fontSize: '2xl',
          lineHeight: '2rem',
          mb: '6',
          mt: '12',
        },
        '& :where(h3)': {
          fontSize: 'xl',
          lineHeight: '2rem',
          mt: '8',
          mb: '3',
        },
        '& :where(p)': {
          fontSize: 'md',
          lineHeight: 'relaxed',
          my: '5',
        },
        '& :where(hr)': {
          my: '12',
        },
        '& :where(ul)': {
          ps: '6',
        },
        '& :where(li)': {
          fontSize: 'md',
          lineHeight: 'relaxed',
          my: '2',
        },
        '& :where(code)': {
          fontSize: 'sm',
          height: '6',
          px: '1',
        },
        '& :where(pre)': {
          my: '6',
          px: '4',
          py: '3',
        },
        '& :where(blockquote)': {
          my: '5',
          ps: '4',
        },
        '& :where(h1 + p)': {
          color: 'fg.emphasized',
          fontSize: 'xl',
          lineHeight: '2rem',
          mb: '6',
        },
      },
      lg: {
        '& :where(h1)': {
          fontSize: '5xl',
          letterSpacing: '-0.02em',
          lineHeight: '3rem',
          mb: '10',
        },
        '& :where(h2)': {
          fontSize: '3xl',
          lineHeight: '2.5rem',
          mb: '8',
          mt: '14',
        },
        '& :where(h3)': {
          fontSize: '2xl',
          lineHeight: '2.25rem',
          mb: '4',
          mt: '10',
        },
        '& :where(p)': {
          fontSize: 'lg',
          lineHeight: '2rem',
          my: '6',
        },
        '& :where(hr)': {
          my: '14',
        },
        '& :where(ul)': {
          ps: '7',
        },
        '& :where(li)': {
          fontSize: 'lg',
          lineHeight: '2rem',
          my: '3',
        },
        '& :where(code)': {
          height: '7',
          px: '1.5',
          textStyle: 'md',
        },
        '& :where(pre)': {
          my: '8',
          px: '6',
          py: '4',
        },
        '& :where(blockquote)': {
          my: '6',
          ps: '4.5',
        },
        '& :where(h1 + p)': {
          color: 'fg.emphasized',
          fontSize: '2xl',
          lineHeight: '2rem',
          mb: '6',
        },
      },
    },
  },
})
