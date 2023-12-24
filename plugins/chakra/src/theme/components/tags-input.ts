import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'label',
  'control',
  'input',
  'clearTrigger',
  'item',
  'itemInput',
  'itemText',
  'itemDeleteTrigger',
])

export const TagsInput = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: {
      colorPalette: 'accent',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: 'full',
    },
    control: {
      alignItems: 'center',
      borderColor: 'border.default',
      borderRadius: 'l2',
      borderWidth: '1px',
      display: 'flex',
      flexWrap: 'wrap',
      outline: 0,
      transitionDuration: 'normal',
      transitionProperty: 'border-color, box-shadow',
      transitionTimingFunction: 'default',
      _focusWithin: {
        borderColor: 'colorPalette.default',
        boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
      },
    },
    input: { outline: 'none', background: 'transparent' },
    item: {
      alignItems: 'center',
      borderColor: 'border.default',
      borderRadius: 'l1',
      borderWidth: '1px',
      color: 'fg.default',
      display: 'inline-flex',
      fontWeight: 'medium',
      _highlighted: {
        borderColor: 'colorPalette.default',
        boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
      },
      _hidden: { display: 'none' },
    },
    itemInput: { background: 'transparent', outline: 'none' },
    label: { color: 'fg.default', fontWeight: 'medium', textStyle: 'sm' },
  }),
  defaultProps: { size: 'md', colorScheme: 'accent' },
  sizes: {
    md: {
      root: { gap: '1.5' },
      control: { fontSize: 'md', gap: '1.5', minW: '10', px: '3', py: '7px' },
      item: { gap: '1', h: '6', pe: '1', ps: '2', textStyle: 'sm' },
    },
  },
  variants: {},
})
