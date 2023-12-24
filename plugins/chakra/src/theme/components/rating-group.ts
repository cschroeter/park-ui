import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'label',
  'item',
  'control',
])

export const RatingGroup = defineMultiStyleConfig({
  baseStyle: definePartsStyle((props) => ({
    root: { colorPalette: 'accent', display: 'flex', flexDirection: 'column', gap: '1.5' },
    label: { color: 'fg.default', fontWeight: 'medium' },
    control: { display: 'flex' },
    item: {
      cursor: 'pointer',
      transitionDuration: 'normal',
      transitionProperty: 'color, fill',
      transitionTimingFunction: 'default',
      color: 'var(--colors-bg-emphasized)',
      fill: 'var(--colors-bg-emphasized)',
      _highlighted: { color: 'var(--colors-accent-default)', fill: 'var(--colors-accent-default)' },
      _focusVisible: { outline: '2px solid', outlineColor: `${props.colorScheme}.default` },
    },
  })),
  defaultProps: { size: 'md', colorScheme: 'accent' },
  sizes: {
    sm: {
      control: { gap: '0' },
      item: { '& svg': { width: '4', height: '4' } },
      label: { textStyle: 'sm' },
    },
    md: {
      control: { gap: '0.5' },
      item: { '& svg': { width: '5', height: '5' } },
      label: { textStyle: 'sm' },
    },
    lg: {
      control: { gap: '0.5' },
      item: { '& svg': { width: '6', height: '6' } },
      label: { textStyle: 'sm' },
    },
  },
  variants: {},
})
