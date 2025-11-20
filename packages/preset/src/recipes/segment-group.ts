import { segmentGroupAnatomy } from '@ark-ui/react/segment-group'
import { defineSlotRecipe } from '@pandacss/dev'

export const segmentGroup = defineSlotRecipe({
  className: 'segment-group',
  slots: segmentGroupAnatomy.keys(),
  base: {
    root: {
      bg: {
        _light: 'gray.2',
        _dark: 'gray.1',
      },
      borderRadius: 'l3',
      boxShadow: 'inset 0 0 0px 1px var(--shadow-color)',
      boxShadowColor: 'border',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      isolation: 'isolate',
      pos: 'relative',
      _vertical: {
        flexDirection: 'column',
        alignItems: 'stretch',
      },
    },
    item: {
      alignItems: 'center',
      borderRadius: 'l3',
      display: 'inline-flex',
      flexShrink: '0',
      fontWeight: 'medium',
      gap: '2',
      justifyContent: 'center',
      position: 'relative',
      userSelect: 'none',
      _disabled: {
        opacity: '0.5',
      },
      '&:has(input:focus-visible)': {
        focusVisibleRing: 'outside',
      },

      _before: {
        content: '""',
        position: 'absolute',
        bg: 'gray.surface.border',
        transition: 'opacity 0.2s',
      },

      _horizontal: {
        _before: {
          insetInlineStart: '0',
          insetBlock: '1.5',
          width: '1px',
        },
      },

      _vertical: {
        _before: {
          insetBlockStart: '0',
          insetInline: '1.5',
          height: '1px',
        },
      },

      '& + &[data-state=checked], &[data-state=checked] + &, &:first-of-type': {
        _before: {
          opacity: '0',
        },
      },
    },

    indicator: {
      bg: {
        _light: 'white',
        _dark: 'gray.2',
      },
      borderWidth: '1px',
      borderColor: 'gray.surface.border',
      borderRadius: 'l3',
      height: 'var(--height)',
      pos: 'absolute',
      width: 'var(--width)',
      zIndex: -1,
    },
  },

  variants: {
    size: {
      xs: { item: { h: '8', minW: '8', textStyle: 'sm', px: '2.5', _icon: { boxSize: '4' } } },
      sm: { item: { h: '9', minW: '9', textStyle: 'sm', px: '3', _icon: { boxSize: '4' } } },
      md: { item: { h: '10', minW: '10', textStyle: 'sm', px: '3.5', _icon: { boxSize: '5' } } },
      lg: { item: { h: '11', minW: '11', textStyle: 'md', px: '4', _icon: { boxSize: '5' } } },
      xl: { item: { h: '12', minW: '12', textStyle: 'md', px: '4.5', _icon: { boxSize: '5.5' } } },
    },
    fitted: {
      true: {
        root: {
          display: 'flex',
        },
        item: {
          flex: '1',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
