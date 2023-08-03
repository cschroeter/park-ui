import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  description: 'A button style',
  base: {
    alignItems: 'center',
    appearance: 'none',
    borderRadius: 'sm',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'bold',
    justifyContent: 'center',
    outline: 'none',
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'background-color, border-color, color',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
  variants: {
    variant: {
      primary: {
        background: 'bg.accent',
        color: 'fg.accent',
        _hover: {
          background: {
            base: 'neutral.800',
            _dark: 'neutral.200',
          },
        },
        _focusVisible: {
          outlineOffset: '2px',
          outline: '2px solid',
          outlineColor: 'neutral.500',
        },
        _disabled: {
          background: 'bg.disabled',
          cursor: 'not-allowed',
          _hover: {
            background: 'bg.disabled',
          },
        },
      },
      secondary: {
        borderWidth: '1px',
        borderColor: 'border.emphasized',
        color: 'fg.emphasized',
        _hover: {
          color: 'fg.default',
          background: 'bg.subtle',
        },
        _selected: {
          color: 'bg.default',
          borderColor: 'neutral.900',
          background: {
            base: 'neutral.900',
            _dark: 'white',
          },
          _hover: {
            color: 'fg.accent',
            background: {
              base: 'neutral.800',
              _dark: 'neutral.200',
            },
          },
        },
        _disabled: {
          borderColor: 'border.disabled',
          color: 'fg.disabled',
          cursor: 'not-allowed',
          _hover: {
            background: 'transparent',
            borderColor: 'border.disabled',
            color: 'fg.disabled',
          },
        },
        _focusVisible: {
          outlineOffset: '2px',
          outline: '2px solid',
          outlineColor: 'neutral.500',
        },
      },
      tertiary: {
        color: 'fg.emphasized',
        _hover: {
          color: 'fg.default',
          background: 'bg.subtle',
        },
        _disabled: {
          color: 'fg.disabled',
          cursor: 'not-allowed',
          _hover: {
            background: 'transparent',
            color: 'fg.disabled',
          },
        },
        _focusVisible: {
          outline: '2px solid',
          outlineColor: 'neutral.500',
        },
      },
      link: {
        color: 'fg.muted',
        _hover: {
          color: 'fg.default',
        },
        _disabled: {
          color: 'fg.disabled',
          cursor: 'not-allowed',
          _hover: {
            color: 'fg.disabled',
          },
        },
        height: 'auto !important',
        px: '0 !important',
        minW: '0 !important',
      },
    },
    size: {
      xs: {
        h: '8',
        minW: '8',
        textStyle: 'xs',
        px: '3',
        gap: '2',
        '& svg': {
          fontSize: 'md',
        },
      },
      sm: {
        h: '9',
        minW: '9',
        textStyle: 'sm',
        px: '3.5',
        gap: '2',
        '& svg': {
          fontSize: 'lg',
        },
      },
      md: {
        h: '10',
        minW: '10',
        textStyle: 'sm',
        px: '4',
        gap: '2',
        '& svg': {
          fontSize: 'xl',
        },
      },
      lg: {
        h: '11',
        minW: '11',
        textStyle: 'md',
        px: '18px', // TODO token
        gap: '2',
        '& svg': {
          fontSize: 'xl',
        },
      },
      xl: {
        h: '12',
        minW: '12',
        textStyle: 'md',
        px: '5',
        gap: '2.5',
        '& svg': {
          fontSize: 'xl',
        },
      },
      '2xl': {
        h: '16',
        minW: '16',
        textStyle: 'lg',
        px: '7',
        gap: '3',
        '& svg': {
          fontSize: '1.75rem', // TODO token
        },
      },
    },
  },
})
