import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'viewport',
  'itemGroup',
  'item',
  'nextTrigger',
  'prevTrigger',
  'indicatorGroup',
  'indicator',
  'control',
])

export const Carousel = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: { colorPalette: 'accent' },
    viewport: { overflowX: 'hidden', position: 'relative', borderRadius: 'l2' },
    control: {
      alignItems: 'center',
      background: { base: 'gray.dark.a12', _dark: 'gray.light.a12' },
      borderRadius: 'l2',
      bottom: '4',
      display: 'flex',
      left: '50%',
      position: 'absolute',
      transform: 'translateX(-50%)',
    },
    indicatorGroup: { display: 'flex' },
    indicator: {
      borderRadius: 'full',
      background: 'gray.6',
      cursor: 'pointer',
      _current: { background: 'colorPalette.default' },
      _focusVisible: { outlineOffset: '2px', outline: '2px solid', outlineColor: 'border.outline' },
    },
  }),
  defaultProps: { size: 'md', colorScheme: 'accent' },
  sizes: {
    sm: {
      control: { gap: '1', p: '1' },
      indicatorGroup: { gap: '2' },
      indicator: { width: '2', height: '2' },
    },
    md: {
      control: { gap: '2', p: '2.5' },
      indicatorGroup: { gap: '3' },
      indicator: { width: '2.5', height: '2.5' },
    },
  },
  variants: {},
})
