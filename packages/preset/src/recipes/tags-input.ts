import { tagsInputAnatomy } from '@ark-ui/react/tags-input'
import { defineSlotRecipe } from '@pandacss/dev'

export const tagsInput = defineSlotRecipe({
  className: 'tags-input',
  slots: tagsInputAnatomy.keys(),
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: 'full',
    },
    label: {
      textStyle: 'label',
    },
    control: {
      '--focus-color': 'colors.colorPalette.solid.bg',
      '--error-color': 'colors.error',
      '--input-height': 'var(--tags-input-height)',

      minH: 'var(--tags-input-height)',
      px: 'var(--tags-input-px)',

      alignItems: 'center',
      borderRadius: 'l2',
      display: 'flex',
      flexWrap: 'wrap',
      pos: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'border-color, box-shadow',

      _disabled: {
        opacity: '0.5',
      },
      _invalid: {
        borderColor: 'var(--error-color)',
      },
    },
    clearTrigger: {
      boxSize: 'calc(var(--tags-input-item-height) / 1.5)',

      alignItems: 'center',
      borderRadius: 'l1',
      color: 'fg.muted',
      display: 'flex',
      focusRingWidth: '2px',
      focusVisibleRing: 'inside',
      justifyContent: 'center',
      cursor: { base: 'button', _disabled: 'initial' },
      _icon: {
        boxSize: '5',
      },
    },
    input: {
      px: 'calc(var(--tags-input-item-px) / 1.25)',
      height: 'var(--tags-input-item-height)',

      flex: '1',
      minWidth: '20',
      outline: 'none',
      _readOnly: {
        display: 'none',
      },
    },
    itemInput: {
      px: 'var(--tags-input-item-px)',
      height: 'var(--tags-input-item-height)',
      lineHeight: '1',
      minWidth: '2ch',
      outline: 'none',
      verticalAlign: 'middle',
    },
    itemDeleteTrigger: {
      display: 'flex',
      borderRadius: 'l1',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      _hover: {
        bg: 'colorPalette.plain.bg.hover',
      },
    },
    itemPreview: {
      height: 'var(--tags-input-item-height)',
      px: 'var(--tags-input-item-px)',

      alignItems: 'center',
      borderRadius: 'l1',
      display: 'inline-flex',
      userSelect: 'none',
    },
    itemText: {
      lineClamp: '1',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    variant: {
      outline: {
        control: {
          borderWidth: '1px',
          _focus: {
            outlineWidth: '1px',
            outlineStyle: 'solid',
            outlineColor: 'var(--focus-color)',
            borderColor: 'var(--focus-color)',
            _invalid: {
              outlineColor: 'var(--error-color)',
              borderColor: 'var(--error-color)',
            },
          },
        },
        itemPreview: {
          bg: 'colorPalette.subtle.bg',
          color: 'colorPalette.subtle.fg',
          _highlighted: {
            bg: 'colorPalette.subtle.bg.hover',
          },
        },
      },
      subtle: {
        control: {
          bg: 'gray.subtle.bg',
          color: 'gray.subtle.fg',
          borderWidth: '1px',
          borderColor: 'transparent',
          _focus: {
            outlineWidth: '1px',
            outlineStyle: 'solid',
            outlineColor: 'var(--focus-color)',
            borderColor: 'var(--focus-color)',
            _invalid: {
              outlineColor: 'var(--error-color)',
              borderColor: 'var(--error-color)',
            },
          },
        },
        itemPreview: {
          bg: 'gray.surface.bg',
          borderWidth: '1px',
          _highlighted: {
            bg: 'gray.surface.bg.hover',
            borderColor: 'gray.surface.border.hover',
          },
        },
      },
      surface: {
        control: {
          bg: 'gray.surface.bg',
          borderWidth: '1px',
          borderColor: 'gray.surface.border',
          _focus: {
            outlineWidth: '1px',
            outlineStyle: 'solid',
            outlineColor: 'var(--focus-color)',
            borderColor: 'var(--focus-color)',
            _invalid: {
              outlineColor: 'var(--error-color)',
              borderColor: 'var(--error-color)',
            },
          },
        },
        itemPreview: {
          bg: 'colorPalette.subtle.bg',
          color: 'colorPalette.subtle.fg',
          _highlighted: {
            bg: 'colorPalette.subtle.bg.hover',
          },
        },
      },
    },
    size: {
      xs: {
        root: {
          '--tags-input-height': 'sizes.8',
          '--tags-input-px': 'spacing.1.5',
          '--tags-input-item-height': 'sizes.5',
          '--tags-input-item-px': 'spacing.1',
          _icon: { boxSize: '3' },
          textStyle: 'xs',
        },
        control: { gap: '1' },
        itemPreview: { gap: '1' },
        itemDeleteTrigger: { boxSize: '3.5', me: '-1px' },
      },
      sm: {
        root: {
          '--tags-input-height': 'sizes.9',
          '--tags-input-px': 'spacing.1.5',
          '--tags-input-item-height': 'sizes.6',
          '--tags-input-item-px': 'spacing.1.5',
          _icon: { boxSize: '3.5' },
          textStyle: 'sm',
        },
        control: { gap: '1' },
        itemPreview: { gap: '1' },
        itemDeleteTrigger: { boxSize: '4.5', me: '-0.5' },
      },
      md: {
        root: {
          '--tags-input-height': 'sizes.10',
          '--tags-input-px': 'spacing.1.5',
          '--tags-input-item-height': 'sizes.7',
          '--tags-input-item-px': 'spacing.2',
          _icon: { boxSize: '3.5' },
          textStyle: 'sm',
        },
        control: { gap: '1.5' },
        itemPreview: { gap: '1' },
        itemDeleteTrigger: { boxSize: '5', me: '-1' },
      },
      lg: {
        root: {
          '--tags-input-height': 'sizes.11',
          '--tags-input-px': 'spacing.1.5',
          '--tags-input-item-height': 'sizes.8',
          '--tags-input-item-px': 'spacing.2.5',
          _icon: { boxSize: '4' },
          textStyle: 'md',
        },
        control: { gap: '1.5' },
        itemPreview: { gap: '1' },
        itemDeleteTrigger: { boxSize: '6', me: '-1.5' },
      },
    },
  },
})
