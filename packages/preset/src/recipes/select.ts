import { selectAnatomy } from '@ark-ui/react/select'
import { defineSlotRecipe } from '@pandacss/dev'

export const select = defineSlotRecipe({
  className: 'select',
  slots: selectAnatomy.extendWith('indicatorGroup').keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: 'full',
    },
    content: {
      background: 'gray.surface.bg',
      borderRadius: 'l2',
      boxShadow: 'md',
      display: 'flex',
      flexDirection: 'column',
      maxH: 'min(var(--available-height), {sizes.96})',
      minWidth: 'max(var(--reference-width), {sizes.40})',
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
    },
    item: {
      alignItems: 'center',
      borderRadius: 'l1',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      userSelect: 'none',
      _hover: {
        background: 'gray.surface.bg.hover',
      },
      _highlighted: {
        background: 'gray.surface.bg.hover',
      },
      _selected: {},
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    indicatorGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '1',
      pointerEvents: 'none',
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: { base: 'fg.subtle' },
    },
    itemGroupLabel: {
      alignItems: 'flex-start',
      color: 'fg.subtle',
      display: 'flex',
      flexDirection: 'column',
      fontWeight: 'medium',
      gap: '1px',
      justifyContent: 'center',
      _after: {
        content: '""',
        width: '100%',
        height: '1px',
        bg: 'gray.4',
      },
    },
    itemIndicator: {
      color: 'colorPalette.plain.fg',
    },
    label: {
      fontWeight: 'medium',
      userSelect: 'none',
      textStyle: 'sm',
    },
    trigger: {
      alignItems: 'center',
      borderRadius: 'l2',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      minWidth: '0',
      outline: '0',
      textAlign: 'start',
      transition: 'common',
      userSelect: 'none',
      width: 'full',
      _placeholderShown: {
        color: 'fg.subtle',
      },
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    valueText: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    variant: {
      outline: {
        trigger: {
          borderWidth: '1px',
          borderColor: 'gray.outline.border',

          focusVisibleRing: 'inside',
        },
      },
      surface: {
        trigger: {
          bg: 'gray.surface.bg',
          borderWidth: '1px',
          borderColor: 'gray.surface.border',

          focusVisibleRing: 'inside',
        },
      },
    },
    size: {
      xs: {
        content: { p: '1', gap: '0.5', textStyle: 'sm' },
        item: { px: '1', minH: '8', gap: '2', _icon: { boxSize: '3.5' } },
        itemGroup: { gap: '0.5' },
        itemGroupLabel: { px: '1', height: '8' },
        trigger: { px: '2', h: '8', textStyle: 'sm', gap: '2', _icon: { boxSize: '3.5' } },
      },
      sm: {
        content: { p: '1', gap: '0.5', textStyle: 'sm' },
        item: { px: '1.5', minH: '9', gap: '2', _icon: { boxSize: '4' } },
        itemGroup: { gap: '0.5' },
        itemGroupLabel: { px: '1.5', height: '9' },
        trigger: { px: '2.5', h: '9', textStyle: 'sm', gap: '2', _icon: { boxSize: '4' } },
      },
      md: {
        content: { p: '1', gap: '0.5', textStyle: 'md' },
        item: { px: '2', minH: '10', gap: '2', _icon: { boxSize: '4' } },
        itemGroup: { gap: '0.5' },
        itemGroupLabel: { px: '2', height: '10' },
        trigger: { px: '3', h: '10', textStyle: 'md', gap: '2', _icon: { boxSize: '4' } },
      },
      lg: {
        content: { p: '1', gap: '0.5', textStyle: 'md' },
        item: { px: '2.5', minH: '11', gap: '2', _icon: { boxSize: '4.5' } },
        itemGroup: { gap: '0.5' },
        itemGroupLabel: { px: '2.5', height: '11' },
        trigger: { px: '3.5', h: '11', textStyle: 'md', gap: '2', _icon: { boxSize: '4.5' } },
      },
      xl: {
        content: { p: '1', gap: '1', textStyle: 'lg' },
        item: { px: '3', minH: '12', gap: '3', _icon: { boxSize: '5' } },
        itemGroup: { gap: '1' },
        itemGroupLabel: { px: '3', height: '12' },
        trigger: { px: '4', h: '12', textStyle: 'lg', gap: '3', _icon: { boxSize: '5' } },
      },
    },
  },
})
