import { comboboxAnatomy } from '@ark-ui/react/combobox'
import { defineSlotRecipe } from '@pandacss/dev'

export const combobox = defineSlotRecipe({
  className: 'combobox',
  slots: comboboxAnatomy.extendWith('indicatorGroup').keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: 'full',
    },
    label: {
      textStyle: 'sm',
      fontWeight: 'medium',
    },
    input: {
      appearance: 'none',
      borderRadius: 'l2',
      height: 'var(--combobox-input-height)',
      minHeight: 'var(--combobox-input-height)',
      minW: 'var(--combobox-input-height)',
      minWidth: '0',
      outline: '0',
      position: 'relative',
      textAlign: 'start',
      transition: 'colors',
      transitionProperty: 'box-shadow, border-color',
      width: '100%',
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    control: {
      position: 'relative',
    },
    content: {
      background: 'gray.surface.bg',
      borderRadius: 'l2',
      boxShadow: 'md',
      display: 'flex',
      flexDirection: 'column',
      maxH: 'min(var(--available-height), {sizes.96})',
      outline: 0,
      overflowY: 'auto',
      zIndex: 'dropdown',
      _open: {
        animationStyle: 'slide-fade-in',
        animationDuration: 'slow',
      },
      _closed: {
        animationStyle: 'slide-fade-out',
        animationDuration: 'fastest',
      },
      '&[data-empty]:not(:has([data-scope=combobox][data-part=empty]))': {
        opacity: 0,
      },
    },
    item: {
      alignItems: 'center',
      borderRadius: 'l1',
      cursor: 'default',
      display: 'flex',
      justifyContent: 'space-between',
      transition: 'common',
      _hover: {
        background: 'gray.subtle.bg',
      },
      _highlighted: {
        background: 'gray.subtle.bg',
      },
      _selected: {},
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    itemGroupLabel: {
      textStyle: 'label',
    },
    itemIndicator: {
      color: 'colorPalette.plain.fg',
    },
    indicatorGroup: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1',
      pos: 'absolute',
      insetEnd: '0',
      top: '0',
      bottom: '0',
    },
    trigger: {
      color: 'fg.subtle',
    },
    clearTrigger: {
      color: 'fg.muted',
    },
    empty: {
      display: 'flex',
      alignItems: 'center',
      color: 'fg.subtle',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    variant: {
      outline: {
        input: {
          borderWidth: '1px',
          borderColor: 'gray.outline.border',
          focusVisibleRing: 'inside',
          focusRingColor: 'colorPalette.solid.bg',
          _invalid: {
            focusRingColor: 'red.9',
            borderColor: 'red.9',
          },
        },
      },
      surface: {
        input: {
          bg: 'gray.surface.bg',
          borderWidth: '1px',
          borderColor: 'gray.surface.border',
          focusVisibleRing: 'inside',
          focusRingColor: 'colorPalette.solid.bg',
          _invalid: {
            focusRingColor: 'red.9',
            borderColor: 'red.9',
          },
        },
      },
      subtle: {
        input: {
          borderWidth: '1px',
          borderColor: 'transparent',
          bg: 'gray.subtle.bg',
          color: 'gray.subtle.fg',
          focusVisibleRing: 'inside',
          focusRingColor: 'colorPalette.solid.bg',
          _invalid: {
            focusRingColor: 'red.9',
            borderColor: 'red.9',
          },
        },
      },
    },
    size: {
      xs: {
        input: { '--combobox-input-height': 'sizes.8', textStyle: 'sm', px: '2' },
        content: { p: '1', gap: '1', textStyle: 'sm' },
        indicatorGroup: { px: '2', _icon: { boxSize: '3.5' } },
        item: { px: '1', minH: '9', _icon: { boxSize: '3.5' } },
        empty: { px: '1', minH: '9' },
      },
      sm: {
        input: { '--combobox-input-height': 'sizes.9', textStyle: 'sm', px: '2.5' },
        content: { p: '1', gap: '1', textStyle: 'sm' },
        indicatorGroup: { px: '2.5', _icon: { boxSize: '4' } },
        item: { px: '1.5', minH: '9', _icon: { boxSize: '4' } },
        empty: { px: '1.5', minH: '9' },
      },
      md: {
        input: { '--combobox-input-height': 'sizes.10', textStyle: 'md', px: '3' },
        content: { p: '1', gap: '1', textStyle: 'md' },
        indicatorGroup: { px: '3', _icon: { boxSize: '4.5' } },
        item: { px: '2', minH: '10', _icon: { boxSize: '4.5' } },
        empty: { px: '2', minH: '10' },
      },
      lg: {
        input: { '--combobox-input-height': 'sizes.11', textStyle: 'md', px: '3.5' },
        content: { p: '1', gap: '1', textStyle: 'md' },
        indicatorGroup: { px: '3.5', _icon: { boxSize: '5' } },
        item: { px: '2.5', minH: '11', _icon: { boxSize: '5' } },
        empty: { px: '2.5', minH: '11' },
      },
      xl: {
        input: { '--combobox-input-height': 'sizes.12', textStyle: 'lg', px: '4' },
        content: { p: '1', gap: '1', textStyle: 'lg' },
        indicatorGroup: { px: '4', _icon: { boxSize: '5' } },
        item: { px: '3', minH: '12', _icon: { boxSize: '5' } },
        empty: { px: '3', minH: '12' },
      },
    },
  },
})
