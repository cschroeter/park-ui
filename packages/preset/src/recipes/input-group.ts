import { defineSlotRecipe } from '@pandacss/dev'

export const inputGroup = defineSlotRecipe({
  className: 'input-group',
  slots: ['root', 'addon', 'control', 'element'],
  base: {
    root: {
      width: 'full',
    },
    control: {
      position: 'relative',
      width: 'full',
    },
    addon: {
      alignItems: 'center',
      alignSelf: 'stretch',
      borderRadius: 'l2',
      color: 'fg.muted',
      display: 'flex',
      flex: '0 0 auto',
      whiteSpace: 'nowrap',
      width: 'auto',
    },
    element: {
      alignItems: 'center',
      color: 'fg.muted',
      display: 'flex',
      height: 'full',
      justifyContent: 'center',
      position: 'absolute',
      zIndex: '2',
      _icon: {
        color: 'fg.subtle',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    size: {
      xs: {
        addon: { textStyle: 'sm', px: '2', _icon: { boxSize: '4' } },
        element: { minW: '8', _icon: { boxSize: '4' } },
        control: {
          '& > input:not(:first-child)': { ps: '7!' },
          '& > input:not(:last-child)': { pe: '7!' },
        },
      },
      sm: {
        addon: { textStyle: 'sm', px: '2.5', _icon: { boxSize: '4.5' } },
        element: { minW: '9', _icon: { boxSize: '4.5' } },
        control: {
          '& > input:not(:first-child)': { ps: '8!' },
          '& > input:not(:last-child)': { pe: '8!' },
        },
      },
      md: {
        addon: { textStyle: 'md', px: '3', _icon: { boxSize: '5' } },
        element: { minW: '10', _icon: { boxSize: '5' } },
        control: {
          '& > input:not(:first-child)': { ps: '9!' },
          '& > input:not(:last-child)': { pe: '9!' },
        },
      },
      lg: {
        addon: { textStyle: 'md', px: '3.5', _icon: { boxSize: '5' } },
        element: { minW: '11', _icon: { boxSize: '5' } },
        control: {
          '& > input:not(:first-child)': { ps: '10!' },
          '& > input:not(:last-child)': { pe: '10!' },
        },
      },
      xl: {
        addon: { textStyle: 'lg', px: '4', _icon: { boxSize: '5.5' } },
        element: { minW: '11', _icon: { boxSize: '5.5' } },
        control: {
          '& > input:not(:first-child)': { ps: '11!' },
          '& > input:not(:last-child)': { pe: '11!' },
        },
      },
    },
    variant: {
      outline: {
        addon: {
          borderWidth: '1px',
          borderColor: 'gray.outline.border',
        },
      },
      surface: {
        addon: {
          bg: 'gray.surface.bg',
          borderWidth: '1px',
          borderColor: 'gray.surface.border',
        },
      },
      subtle: {
        addon: {
          bg: 'gray.subtle.bg',
        },
      },
    },
  },
})
