import { tabsAnatomy } from '@ark-ui/react/tabs'
import { defineSlotRecipe } from '@pandacss/dev'

export const tabs = defineSlotRecipe({
  slots: tabsAnatomy.keys(),
  className: 'tabs',
  base: {
    root: {
      position: 'relative',
      _horizontal: {
        display: 'block',
      },
      _vertical: {
        display: 'flex',
      },
    },
    list: {
      display: 'flex',
      position: 'relative',
      isolation: 'isolate',
      _horizontal: {
        flexDirection: 'row',
      },
      _vertical: {
        flexDirection: 'column',
      },
    },
    trigger: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      fontWeight: 'semibold',
      outline: '0',
      position: 'relative',
      _focusVisible: {
        zIndex: 1,
        focusVisibleRing: 'outside',
        focusRingColor: 'colorPalette.solid.bg',
      },
      _disabled: {
        layerStyle: 'disabled',
      },
    },
    content: {
      focusVisibleRing: 'inside',
      focusRingColor: 'colorPalette.solid.bg',
      _horizontal: {
        width: '100%',
      },
      _vertical: {
        height: '100%',
      },
    },
    indicator: {
      width: 'var(--width)',
      height: 'var(--height)',
      zIndex: -1,
    },
  },

  variants: {
    size: {
      xs: {
        list: {
          gap: '1',
        },
        trigger: {
          h: '8',
          minW: '8',
          textStyle: 'xs',
          px: '3',
          gap: '2',
        },
      },
      sm: {
        list: {
          gap: '1',
        },
        trigger: {
          h: '9',
          minW: '9',
          textStyle: 'sm',
          px: '3.5',
          gap: '2',
        },
        content: {
          _horizontal: {
            py: '4',
          },
          _vertical: {
            px: '4',
          },
        },
      },
      md: {
        list: {
          gap: '1',
        },
        trigger: {
          h: '10',
          minW: '10',
          textStyle: 'sm',
          px: '4',
          gap: '2',
        },
        content: {
          _horizontal: {
            py: '4',
          },
          _vertical: {
            px: '4',
          },
        },
      },
      lg: {
        list: {
          gap: '1',
        },
        trigger: {
          h: '11',
          minW: '11',
          textStyle: 'md',
          px: '4.5',
          gap: '2',
        },
        content: {
          _horizontal: {
            py: '4',
          },
          _vertical: {
            px: '4',
          },
        },
      },
    },
    variant: {
      line: {
        list: {
          borderColor: 'border.default',
          _horizontal: {
            borderBottomWidth: '1px',
          },
          _vertical: {
            borderStartWidth: '1px',
          },
        },
        indicator: {
          background: 'colorPalette.solid.bg',
          _horizontal: {
            bottom: '0',
            height: '0.5',
            transform: 'translateY(1px)',
          },
          _vertical: {
            left: '0',
            width: '0.5',
            transform: 'translateX(-1px)',
          },
        },
        trigger: {
          color: 'fg.muted',
          _selected: {
            color: 'colorPalette.plain.fg',
          },
        },
      },
      subtle: {
        trigger: {
          color: 'fg.muted',
          _selected: {
            color: 'colorPalette.subtle.fg',
          },
        },
        indicator: {
          layerStyle: 'subtle',
          borderRadius: 'l2',
        },
      },
      surface: {
        list: {
          layerStyle: 'surface',
          borderRadius: 'l3',
          p: '1',
        },
        trigger: {
          color: 'fg.muted',
          _selected: {
            color: 'colorPalette.surface.fg',
          },
        },
        indicator: {
          borderRadius: 'l2',
          boxShadow: 'xs',
          background: {
            _light: 'white',
            _dark: 'transparent',
          },
        },
      },
    },
    fitted: {
      true: {
        list: {
          display: 'flex',
        },
        trigger: {
          flex: 1,
          textAlign: 'center',
          justifyContent: 'center',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'line',
  },
})
