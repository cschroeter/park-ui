import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'label',
  'control',
  'indicator',
])

export const Checkbox = defineMultiStyleConfig({
  baseStyle: definePartsStyle((props) => ({
    root: { alignItems: 'center', colorPalette: 'accent', display: 'flex' },
    label: { color: 'fg.default', fontWeight: 'medium' },
    control: {
      alignItems: 'center',
      borderColor: 'border.default',
      borderWidth: '1px',
      color: `${props.colorScheme}.fg`,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'border-color, background',
      transitionTimingFunction: 'default',
      _hover: { background: 'bg.subtle' },
      _checked: {
        background: `${props.colorScheme}.default`,
        borderColor: `${props.colorScheme}.default`,
        _hover: { background: `${props.colorScheme}.default` },
      },
      _indeterminate: {
        background: `${props.colorScheme}.default`,
        borderColor: `${props.colorScheme}.default`,
        _hover: { background: `${props.colorScheme}.default` },
      },
      '&:has(+ :focus-visible)': {
        outlineOffset: '2px',
        outline: '2px solid',
        outlineColor: 'border.outline',
        _checked: { outlineColor: `${props.colorScheme}.default` },
      },
    },
  })),
  defaultProps: { size: 'md', colorScheme: 'accent' },
  sizes: {
    sm: {
      root: { gap: '2' },
      control: {
        width: '4',
        height: '4',
        borderRadius: 'l1',
        '& svg': { width: '3', height: '3' },
      },
      label: { textStyle: 'sm' },
    },
    md: {
      root: { gap: '3' },
      control: {
        width: '5',
        height: '5',
        borderRadius: 'l1',
        '& svg': { width: '3.5', height: '3.5' },
      },
      label: { textStyle: 'md' },
    },
    lg: {
      root: { gap: '4' },
      control: {
        width: '6',
        height: '6',
        borderRadius: 'l1',
        '& svg': { width: '4', height: '4' },
      },
      label: { textStyle: 'lg' },
    },
  },
  variants: {},
})
