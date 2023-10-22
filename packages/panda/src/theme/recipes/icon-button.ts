import { defineRecipe } from '@pandacss/dev'

export const iconButton = defineRecipe({
  className: 'iconButton',
  base: {
    alignItems: 'center',
    appearance: 'none',
    borderRadius: 'l2',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'semibold',
    minWidth: '0',
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
    variant: 'solid',
    size: 'md',
  },
  variants: {
    variant: {
      solid: {
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
          color: 'fg.disabled',
          background: 'gray.a3',
          cursor: 'not-allowed',
          _hover: {
            color: 'fg.disabled',
            background: 'gray.a3',
          },
        },
      },
      outline: {
        borderWidth: '1px',
        borderColor: 'border.default',
        color: 'fg.muted',
        _hover: {
          background: 'gray.a2',
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
      ghost: {
        color: 'fg.muted',
        _hover: {
          background: 'gray.a3',
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
      },
      link: {
        verticalAlign: 'baseline',
        _disabled: {
          color: 'border.disabled',
          cursor: 'not-allowed',
          _hover: {
            color: 'border.disabled',
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
        gap: '2',
        '& svg': {
          width: '4',
          height: '4',
        },
      },
      md: {
        h: '10',
        minW: '10',
        textStyle: 'sm',
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
        gap: '3',
        '& svg': {
          width: '6',
          height: '6',
        },
      },
    },
  },
})
