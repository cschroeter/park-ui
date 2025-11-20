import { sliderAnatomy } from '@ark-ui/react/slider'
import { defineSlotRecipe } from '@pandacss/dev'

export const slider = defineSlotRecipe({
  className: 'slider',
  slots: sliderAnatomy.extendWith('markerIndicator').keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1',
      textStyle: 'sm',
      position: 'relative',
      isolation: 'isolate',
      touchAction: 'none',
      width: 'full',
    },
    label: {
      fontWeight: 'medium',
      textStyle: 'sm',
    },
    control: {
      display: 'inline-flex',
      alignItems: 'center',
    },
    track: {
      overflow: 'hidden',
      borderRadius: 'full',
      flex: '1',
    },
    range: {
      width: 'inherit',
      height: 'inherit',
    },
    markerGroup: {
      position: 'absolute!',
      zIndex: '1',
    },
    marker: {
      display: 'flex',
      alignItems: 'center',
      gap: 'calc(var(--slider-thumb-size) / 2)',
      color: 'fg.muted',
      textStyle: 'xs',
    },
    markerIndicator: {
      width: 'var(--slider-marker-size)',
      height: 'var(--slider-marker-size)',
      borderRadius: 'full',
      bg: 'colorPalette.solid.fg',
    },
    thumb: {
      width: 'var(--slider-thumb-size)',
      height: 'var(--slider-thumb-size)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: 0,
      zIndex: '2',
      borderRadius: 'full',
      _focusVisible: {
        ring: '2px',
        ringColor: 'colorPalette.solid',
        ringOffset: '2px',
        ringOffsetColor: 'bg',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
    orientation: 'horizontal',
  },
  variants: {
    size: {
      sm: {
        root: {
          '--slider-thumb-size': 'sizes.5',
          '--slider-track-size': 'sizes.2',
          '--slider-marker-center': '8px',
          '--slider-marker-size': 'sizes.1',
          '--slider-marker-inset': '4px',
        },
      },
      md: {
        root: {
          '--slider-thumb-size': 'sizes.5',
          '--slider-track-size': 'sizes.2',
          '--slider-marker-center': '8px',
          '--slider-marker-size': 'sizes.1',
          '--slider-marker-inset': '4px',
        },
      },
      lg: {
        root: {
          '--slider-thumb-size': 'sizes.5',
          '--slider-track-size': 'sizes.2',
          '--slider-marker-center': '8px',
          '--slider-marker-size': 'sizes.1',
          '--slider-marker-inset': '4px',
        },
      },
    },
    variant: {
      outline: {
        thumb: {
          bg: 'gray.surface.bg',
          borderWidth: '2px',
          borderColor: 'colorPalette.solid.bg',
          boxShadow: 'xs',
        },
        range: {
          bg: 'colorPalette.solid.bg',
        },
        track: {
          bg: 'border',
        },
      },
    },
    orientation: {
      vertical: {
        root: {
          display: 'inline-flex',
        },
        control: {
          flexDirection: 'column',
          height: '100%',
          minWidth: 'var(--slider-thumb-size)',
          '&[data-has-mark-label]': {
            marginEnd: '4',
          },
        },
        track: {
          width: 'var(--slider-track-size)',
        },
        thumb: {
          left: '50%',
          translate: '-50% 0',
        },
        markerGroup: {
          insetStart: 'var(--slider-marker-center)',
          insetBlock: 'var(--slider-marker-inset)',
        },
        marker: {
          flexDirection: 'row',
        },
      },
      horizontal: {
        control: {
          flexDirection: 'row',
          width: '100%',
          minHeight: 'var(--slider-thumb-size)',
          '&[data-has-mark-label]': {
            marginBottom: '4',
          },
        },
        track: {
          height: 'var(--slider-track-size)',
        },
        thumb: {
          top: '50%',
          translate: '0 -50%',
        },
        markerGroup: {
          top: 'var(--slider-marker-center)',
          insetInline: 'var(--slider-marker-inset)',
        },
        marker: {
          flexDirection: 'column',
        },
      },
    },
  },
})
