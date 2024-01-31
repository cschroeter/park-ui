import { Accordion } from '@ark-ui/react/accordion'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'accordion',
  defaultVariants: { size: 'md' },
  slots: {
    root: 'accordion__root',
    item: 'accordion__item',
    itemTrigger: 'accordion__itemTrigger',
    itemContent: 'accordion__itemContent',
    itemIndicator: 'accordion__itemIndicator',
  },
  variants: {
    size: {
      md: {
        root: 'accordion__root--size_md',
        item: 'accordion__item--size_md',
        itemTrigger: 'accordion__itemTrigger--size_md',
        itemContent: 'accordion__itemContent--size_md',
        itemIndicator: 'accordion__itemIndicator--size_md',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

const Root = withProvider(Accordion.Root, 'root')
const Item = withContext(Accordion.Item, 'item')
const ItemContent = withContext(Accordion.ItemContent, 'itemContent')
const ItemIndicator = withContext(Accordion.ItemIndicator, 'itemIndicator')
const ItemTrigger = withContext(Accordion.ItemTrigger, 'itemTrigger')

export { Item, ItemContent, ItemIndicator, ItemTrigger, Root }
