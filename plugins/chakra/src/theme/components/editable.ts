import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers([
  'root',
  'area',
  'label',
  'preview',
  'input',
  'editTrigger',
  'submitTrigger',
  'cancelTrigger',
  'control',
])

export const Editable = defineMultiStyleConfig({
  baseStyle: definePartsStyle({
    root: { display: 'flex', flexDirection: 'column', gap: '1.5', width: '100%' },
    control: { display: 'flex', gap: '2' },
  }),
  defaultProps: {},
  sizes: {},
  variants: {},
})
