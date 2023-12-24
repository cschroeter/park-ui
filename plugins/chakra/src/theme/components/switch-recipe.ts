import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'label',
  'control',
  'thumb',
])

export const SwitchRecipe = defineMultiStyleConfig({
  baseStyle: definePartsStyle((props) => ({
    root: { alignItems: 'center', colorPalette: 'accent', display: 'flex', position: 'relative' },
    control: {
      alignItems: 'center',
      background: 'bg.emphasized',
      borderRadius: 'full',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: '0',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      _checked: { background: `${props.colorScheme}.default` },
    },
    label: { userSelect: 'none', textStyle: 'md', fontWeight: 'medium' },
    thumb: {
      background: 'bg.default',
      borderRadius: 'full',
      boxShadow: 'xs',
      transitionDuration: 'normal',
      transitionProperty: 'transform, background',
      transitionTimingFunction: 'default',
      _checked: {
        transform: 'translateX(100%)',
        background: { base: 'bg.default', _dark: `${props.colorScheme}.fg` },
      },
    },
  })),
  defaultProps: { size: 'md', colorScheme: 'accent' },
  sizes: {
    sm: {
      root: { gap: '2' },
      control: { width: '7', p: '0.5' },
      thumb: { width: '3', height: '3' },
      label: { textStyle: 'sm' },
    },
    md: {
      root: { gap: '3' },
      control: { width: '9', p: '0.5' },
      thumb: { width: '4', height: '4' },
      label: { textStyle: 'md' },
    },
    lg: {
      root: { gap: '4' },
      control: { width: '11', p: '0.5' },
      thumb: { width: '5', height: '5' },
      label: { textStyle: 'lg' },
    },
  },
  variants: {},
})
