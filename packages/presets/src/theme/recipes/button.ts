import { defineRecipe } from '@pandacss/dev'

export const button = defineRecipe({
  className: 'button',
  description: 'A button style',
  base: {
    alignItems: 'center',
    appearance: 'none',
    borderRadius: 'l2',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'semibold',
    justifyContent: 'center',
    outline: 'none',
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color, box-shadow',
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
        background: 'accent.default',
        color: 'accent.fg',
        _hover: {
          background: 'accent.emphasized',
        },
        _focusVisible: {
          outlineOffset: '2px',
          outline: '2px solid',
          outlineColor: 'border.accent',
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
        background: 'bg.default',
        color: 'fg.emphasized',
        _hover: {
          color: 'fg.default',
          background: 'bg.subtle',
        },
        _selected: {
          background: 'accent.default',
          borderColor: 'border.accent',
          color: 'accent.fg',
          _hover: {
            color: 'accent.fg',
            background: 'accent.default',
            borderColor: 'border.accent',
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
          outlineColor: 'border.outline',
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
          outlineColor: 'border.outline',
        },
        _selected: {
          background: 'accent.default',
          color: 'accent.fg',
          _hover: {
            color: 'accent.fg',
            background: 'accent.default',
          },
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
        height: 'auto!',
        px: '0!',
        minW: '0!',
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
          width: '4',
          height: '4',
        },
      },
      sm: {
        h: '9',
        minW: '9',
        textStyle: 'sm',
        px: '3.5',
        gap: '2',
        '& svg': {
          width: '4.5',
          height: '4.5',
        },
      },
      md: {
        h: '10',
        minW: '10',
        textStyle: 'sm',
        px: '4',
        gap: '2',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      lg: {
        h: '11',
        minW: '11',
        textStyle: 'md',
        px: '4.5',
        gap: '2',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      xl: {
        h: '12',
        minW: '12',
        textStyle: 'md',
        px: '5',
        gap: '2.5',
        '& svg': {
          width: '5',
          height: '5',
        },
      },
      '2xl': {
        h: '16',
        minW: '16',
        textStyle: 'lg',
        px: '7',
        gap: '3',
        '& svg': {
          width: '6',
          height: '6',
        },
      },
    },
  },
})
