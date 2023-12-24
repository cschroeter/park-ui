import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'item',
  'itemTrigger',
  'itemContent',
  'itemIndicator',
])

export const Accordion = defineMultiStyleConfig({
  baseStyle: definePartsStyle((props) => ({
    root: { divideY: '1px', width: 'full', borderTopWidth: '1px', borderBottomWidth: '1px' },
    itemTrigger: {
      alignItems: 'center',
      color: 'fg.default',
      cursor: 'pointer',
      display: 'flex',
      fontWeight: 'semibold',
      gap: '3',
      justifyContent: 'space-between',
      textStyle: 'lg',
      textAlign: 'left',
      width: 'full',
      _disabled: { color: 'fg.disabled', cursor: 'not-allowed' },
    },
    itemIndicator: {
      color: 'fg.muted',
      transformOrigin: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'transform',
      transitionTimingFunction: 'default',
      _open: { transform: 'rotate(-180deg)' },
    },
    itemContent: {
      color: 'fg.muted',
      display: 'grid',
      gridTemplateRows: '0fr',
      transitionProperty: 'grid-template-rows, padding-bottom',
      transitionDuration: 'normal',
      transitionTimingFunction: 'default',
      _open: { gridTemplateRows: '1fr' },
      '& > div': { overflow: 'hidden' },
    },
  })),
  defaultProps: { size: 'md', colorScheme: 'accent' },
  sizes: {
    md: { itemTrigger: { py: '4' }, itemContent: { pb: '6', pr: '8', _closed: { pb: '0' } } },
  },
  variants: {},
})
