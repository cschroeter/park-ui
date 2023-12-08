import { defineStyle } from '@chakra-ui/react'

export const Button = {
  baseStyle: {
    alignItems: 'center',
    appearance: 'none',
    borderRadius: 'l2',
    cursor: 'pointer',
    display: 'inline-flex',
    fontWeight: 'semibold',
    minWidth: '0',
    justifyContent: 'center',
    outline: 'none',
    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    _hidden: {
      display: 'none',
    },
  },
  defaultProps: {
    variant: 'solid',
    colorScheme: 'accent',
    size: 'md',
  },
  sizes: {
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
        width: '4',
        height: '4',
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
  variants: {
    solid: defineStyle((props) => ({
      background: `${props.colorScheme}.default`,
      color: `${props.colorScheme}.fg`,
      _hover: {
        background: `${props.colorScheme}.emphasized`,
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
    })),
    outline: {
      borderWidth: '1px',
      borderColor: 'border.default',
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
      _selected: {
        background: 'gray.a3',
      },
    },
    ghost: {
      color: 'fg.default',
      _hover: {
        background: 'gray.a3',
      },
      _selected: {
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
}
