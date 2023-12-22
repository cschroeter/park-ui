import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'list',
  'trigger',
  'content',
  'indicator',
])

export const Tabs = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: {
      colorPalette: 'accent',
      display: 'flex',
      width: 'full',
      _horizontal: { flexDirection: 'column' },
      _vertical: { flexDirection: 'row' },
    },
    list: {
      display: 'flex',
      flexShrink: '0',
      _horizontal: { flexDirection: 'row' },
      _vertical: { flexDirection: 'column' },
      overflow: 'auto',
      position: 'relative',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': { display: 'none' },
    },
    trigger: {
      alignItems: 'center',
      color: 'fg.muted',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: '0',
      fontWeight: 'semibold',
      gap: '2',
      justifyContent: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'color, background, border-color',
      transitionTimingFunction: 'default',
      whiteSpace: 'nowrap',
      _disabled: { color: 'fg.disabled', cursor: 'not-allowed', _hover: { color: 'fg.disabled' } },
      _hover: { color: 'fg.muted' },
      _selected: { color: 'fg.default', _hover: { color: 'fg.default' } },
      _vertical: { justifyContent: 'start' },
    },
  }),
  defaultProps: {
    size: 'md',
    variant: 'line',
  },
  sizes: {
    sm: { trigger: { '& svg': { width: '4', height: '4' } } },
    md: { trigger: { '& svg': { width: '5', height: '5' } } },
    lg: { trigger: { '& svg': { width: '5', height: '5' } } },
  },
  variants: {
    line: {
      list: {
        _horizontal: { boxShadow: '0 -1px 0 0 inset var(--colors-border-default)', gap: '4' },
        _vertical: { boxShadow: '1px 0 0 0 inset var(--colors-border-default)', gap: '1' },
      },
      indicator: {
        background: 'colorPalette.default',
        _horizontal: { height: '2px', bottom: '0' },
        _vertical: { width: '2px', left: '0' },
      },
      content: { pt: '4' },
      trigger: { _horizontal: { pb: '2.5' } },
    },
    outline: {
      list: { _horizontal: { mb: '-1px' }, _vertical: { mr: '-1px' } },
      trigger: {
        borderColor: 'transparent',
        borderWidth: '1px',
        _horizontal: { borderTopRadius: 'l2' },
        _vertical: { borderTopLeftRadius: 'l2', borderBottomLeftRadius: 'l2' },
        _selected: {
          background: 'bg.default',
          borderColor: 'border.subtle',
          _horizontal: { borderBottomColor: 'transparent' },
          _vertical: { borderRightColor: 'transparent' },
        },
      },
      content: {
        borderWidth: '1px',
        borderColor: 'border.subtle',
        background: 'bg.default',
        width: 'full',
      },
    },
  },
})
