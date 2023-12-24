import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'label',
  'item',
  'itemText',
  'itemControl',
  'indicator',
])

export const SegmentGroup = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: {
      alignItems: 'flex-start',
      colorPalette: 'accent',
      display: 'flex',
      flexDirection: { _horizontal: 'row', _vertical: 'column' },
      gap: { _horizontal: '4', _vertical: '1' },
      borderBottomWidth: { _horizontal: '1px' },
      borderLeftWidth: { _vertical: '1px' },
    },
    indicator: {
      borderBottomWidth: { _horizontal: '2px' },
      borderLeftWidth: { _vertical: '2px' },
      borderColor: 'colorPalette.default',
      transform: { _horizontal: 'translateY(1px)', _vertical: 'translateX(-1px)' },
    },
    item: {
      color: 'fg.muted',
      cursor: 'pointer',
      fontWeight: 'medium',
      transitionDuration: 'normal',
      transitionProperty: 'color',
      transitionTimingFunction: 'default',
      _checked: { fontWeight: 'semibold', color: 'fg.default', _hover: { color: 'fg.default' } },
      _disabled: { color: 'fg.disabled', cursor: 'not-allowed', _hover: { color: 'fg.disabled' } },
      px: { _horizontal: '1', _vertical: '3' },
      pb: { _horizontal: '3' },
      py: { _vertical: '1.5' },
    },
  }),
  defaultProps: { size: 'md', colorScheme: 'accent' },
  sizes: { sm: { item: { textStyle: 'sm' } }, md: { item: { textStyle: 'md' } } },
  variants: {},
})
