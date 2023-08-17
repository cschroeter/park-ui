import { defineRecipe } from '@pandacss/dev'

export const article = defineRecipe({
  className: 'article',
  description: 'An article style',
  base: {
    maxWidth: '65ch',
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
      textDecoration: 'underline',
      textDecorationColor: 'accent.default',
      textUnderlineOffset: '0.2em',
      fontWeight: 'medium',
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
      overflowX: 'auto',
      backgroundColor: 'bg.subtle',
      borderRadius: 'l3',
      borderWidth: '1px',
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
          lineHeight: '1.75rrem',
          mt: '8',
          mb: '4',
        },
        '& :where(h3)': {
          fontSize: 'lg',
          lineHeight: '1.75rrem',
          mt: '7',
          mb: '2',
        },
        '& :where(p)': {
          lineHeight: '1.5rem',
          fontSize: 'sm',
          my: '4',
        },
        '& :where(hr)': {
          my: '10',
        },
        '& :where(ul)': {
          ps: '5',
        },
        '& :where(li)': {
          lineHeight: '1.5rem',
          fontSize: 'sm',
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
          fontSize: 'lg',
          lineHeight: '1.75rem',
          color: 'fg.emphasized',
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
          mt: '12',
          mb: '6',
        },
        '& :where(h3)': {
          fontSize: 'xl',
          lineHeight: '2rem',
          mt: '8',
          mb: '3',
        },
        '& :where(p)': {
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
          lineHeight: 'relaxed',
          my: '2',
        },
        '& :where(code)': {
          height: '6',
          px: '1',
          fontSize: 'sm',
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
          fontSize: 'xl',
          lineHeight: '2rem',
          color: 'fg.emphasized',
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
          mt: '14',
          mb: '8',
        },
        '& :where(h3)': {
          fontSize: '2xl',
          lineHeight: '2.25rem',
          mt: '10',
          mb: '4',
        },
        '& :where(p)': {
          lineHeight: '2rem',
          fontSize: 'lg',
          my: '6',
        },
        '& :where(hr)': {
          my: '14',
        },
        '& :where(ul)': {
          ps: '7',
        },
        '& :where(li)': {
          lineHeight: '2rem',
          fontSize: 'lg',
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
          fontSize: '2xl',
          lineHeight: '2rem',
          color: 'fg.emphasized',
          mb: '6',
        },
      },
    },
  },
})
