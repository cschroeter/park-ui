import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'label',
  'item',
  'itemText',
  'itemControl',
  'indicator',
])

export const RadioGroup = defineMultiStyleConfig({
  baseStyle: definePartsStyle((props) => ({
    root: {
      colorPalette: 'accent',
      display: 'flex',
      flexDirection: { _vertical: 'column', _horizontal: 'row' },
    },
    itemControl: {
      background: 'transparent',
      borderColor: 'border.default',
      borderRadius: 'full',
      borderWidth: '1px',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      _hover: { background: 'bg.subtle' },
      _checked: {
        background: `${props.colorScheme}.default`,
        borderColor: `${props.colorScheme}.default`,
        outlineColor: 'bg.default',
        outlineStyle: 'solid',
        _hover: { background: `${props.colorScheme}.default` },
      },
      _disabled: {
        borderColor: 'border.disabled',
        color: 'fg.disabled',
        _hover: { bg: 'initial', color: 'fg.disabled' },
      },
      '&:has(+ :focus-visible)': {
        borderColor: 'border.outline',
        boxShadow: '0 0 0 1px var(--chakra-colors-border-outline)',
        _checked: {
          borderColor: `${props.colorScheme}.default`,
          boxShadow: '0 0 0 1px var(--chakra-colors-accent-default)',
        },
      },
    },
    item: {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      _disabled: { cursor: 'not-allowed' },
    },
    itemText: { color: 'fg.default', fontWeight: 'medium', _disabled: { color: 'fg.disabled' } },
  })),
  defaultProps: { size: 'md', colorScheme: 'accent' },
  sizes: {
    sm: {
      root: { gap: { _vertical: '3', _horizontal: '4' } },
      item: { gap: '2' },
      itemControl: {
        width: '4',
        height: '4',
        _checked: { outlineWidth: '3px', outlineOffset: '-4px' },
      },
      itemText: { textStyle: 'sm' },
    },
    md: {
      root: { gap: { _vertical: '4', _horizontal: '6' } },
      item: { gap: '3' },
      itemControl: {
        width: '5',
        height: '5',
        _checked: { outlineWidth: '4px', outlineOffset: '-5px' },
      },
      itemText: { textStyle: 'md' },
    },
    lg: {
      root: { gap: { _vertical: '5', _horizontal: '8' } },
      item: { gap: '4' },
      itemControl: {
        width: '6',
        height: '6',
        _checked: { outlineWidth: '5px', outlineOffset: '-6px' },
      },
      itemText: { textStyle: 'lg' },
    },
  },
  variants: {},
})
