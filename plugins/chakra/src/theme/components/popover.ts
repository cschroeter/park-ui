import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'arrow',
  'arrowTip',
  'anchor',
  'trigger',
  'indicator',
  'positioner',
  'content',
  'title',
  'description',
  'closeTrigger',
])

export const Popover = defineMultiStyleConfig({
  baseStyle: definePartsStyle((props) => ({
    positioner: { position: 'relative' },
    content: {
      background: 'bg.default',
      borderRadius: 'l3',
      boxShadow: 'lg',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 'sm',
      zIndex: 'popover',
      p: '4',
      _open: { animation: 'fadeIn 0.25s ease-out' },
      _closed: { animation: 'fadeOut 0.2s ease-out' },
      _hidden: { display: 'none' },
    },
    title: { fontWeight: 'medium', textStyle: 'sm' },
    description: { color: 'fg.muted', textStyle: 'sm' },
    closeTrigger: { color: 'fg.muted' },
    arrow: {
      '--arrow-size': 'var(--sizes-3)',
      '--arrow-background': 'var(--chakra-colors-bg-default)',
    },
    arrowTip: { borderTopWidth: '1px', borderLeftWidth: '1px' },
  })),
  defaultProps: { colorScheme: 'accent' },
  sizes: {},
  variants: {},
})
