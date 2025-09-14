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
    control: {
      position: 'relative',
    },
    content: {
      background: 'bg.default',
      borderRadius: 'l2',
      boxShadow: 'md',
      display: 'flex',
      flexDirection: 'column',
      maxH: '96',
      outline: 0,
      overflowY: 'auto',
      zIndex: 'dropdown',
      _open: {
        animationStyle: 'slide-fade-in',
        animationDuration: 'slow',
        animationTimingFunction: 'emphasized-in',
      },
      _closed: {
        animationStyle: 'slide-fade-out',
        animationTimingFunction: 'emphasized-out',
        animationDuration: 'normal',
      },
    },
    item: {
      alignItems: 'center',
      borderRadius: 'l1',
      cursor: 'default',
      display: 'flex',
      height: 'var(--select-trigger-height)',
      justifyContent: 'space-between',
      transition: 'common',
      _hover: {
        background: 'gray.subtle.bg',
        color: 'fg.default',
      },
      _highlighted: {
        background: 'gray.subtle.bg',
        color: 'fg.default',
      },
      _selected: {
        color: 'fg.default',
      },
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    indicatorGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '1',
      pos: 'absolute',
      insetEnd: '0',
      top: '0',
      bottom: '0',
      px: 'var(--select-trigger-padding-x)',
      pointerEvents: 'none',
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: { base: 'fg.muted', _disabled: 'fg.subtle', _invalid: 'fg.error' },
    },
    itemGroupLabel: {
      fontWeight: 'semibold',
      textStyle: 'sm',
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
      '--input-height': 'var(--select-trigger-height)',
      alignItems: 'center',
      borderRadius: 'l2',
      borderColor: 'gray.a7',
      color: 'fg.default',
      display: 'flex',
      focusRingColor: 'colorPalette.solid.bg',
      focusVisibleRing: 'inside',
      justifyContent: 'space-between',
      minH: 'var(--select-trigger-height)',
      outline: '0',
      px: 'var(--select-trigger-padding-x)',
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
          _focus: {
            borderColor: 'colorPalette.solid.bg',
            boxShadow: '0 0 0 1px var(--colors-color-palette-solid-bg)',
          },
        },
      },
    },
    size: {
      xs: {
        root: {
          '--select-trigger-height': 'sizes.8',
          '--select-trigger-padding-x': 'spacing.2',
        },
        trigger: {
          textStyle: 'sm',
          gap: '2',
          _icon: {
            width: '4',
            height: '4',
          },
        },
        content: { p: '1', gap: '1', textStyle: 'sm' },
        item: { px: '1', height: '8', _icon: { width: '4', height: '4' } },
        itemGroupLabel: {
          px: '1',
          py: '1',
        },
      },
      sm: {
        root: {
          '--select-trigger-height': 'sizes.9',
          '--select-trigger-padding-x': 'spacing.2.5',
        },
        trigger: {
          textStyle: 'sm',
          gap: '2',
          _icon: {
            width: '4.5',
            height: '4.5',
          },
        },
        content: { p: '1', gap: '1', textStyle: 'sm' },
        item: { px: '1.5', height: '9', _icon: { width: '4.5', height: '4.5' } },
        itemGroupLabel: {
          px: '1.5',
          py: '1',
        },
      },
      md: {
        root: {
          '--select-trigger-height': 'sizes.10',
          '--select-trigger-padding-x': 'spacing.3',
        },
        trigger: {
          gap: '2',
          textStyle: 'md',
          _icon: {
            width: '5',
            height: '5',
          },
        },
        content: { p: '1', gap: '1', textStyle: 'md' },
        item: { px: '2', height: '10', _icon: { width: '5', height: '5' } },
        itemGroupLabel: {
          px: '2',
          py: '1',
        },
      },
      lg: {
        root: {
          '--select-trigger-height': 'sizes.11',
          '--select-trigger-padding-x': 'spacing.3.5',
        },
        trigger: {
          textStyle: 'md',
          gap: '2',
          _icon: {
            width: '5.5',
            height: '5.5',
          },
        },
        content: { p: '1', gap: '1', textStyle: 'md' },
        item: { px: '2.5', height: '11', _icon: { width: '5.5', height: '5.5' } },
        itemGroupLabel: {
          px: '2.5',
          py: '1',
        },
      },
      xl: {
        root: {
          '--select-trigger-height': 'sizes.12',
          '--select-trigger-padding-x': 'spacing.4',
        },
        trigger: {
          textStyle: 'lg',
          gap: '3',
          _icon: {
            width: '6',
            height: '6',
          },
        },
        content: { p: '1', gap: '1', textStyle: 'lg' },
        item: { px: '3', height: '12', _icon: { width: '6', height: '6' } },
        itemGroupLabel: {
          px: '3',
          py: '1',
        },
      },
    },
  },
})
